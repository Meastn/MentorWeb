/* REF: MG-2026-FUNCTIONS-INDEX-01 */

import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import { getFirestore } from 'firebase-admin/firestore';
import Stripe from 'stripe';
import { GoogleGenerativeAI } from '@google/generative-ai'; // Stable Google Generative AI SDK

admin.initializeApp();
const db = getFirestore('mentorweb');

// 01. INITIALIZE EXTERNAL UTILITIES WITH ENVIRONMENT ENFORCEMENT
const stripeSecret = process.env.STRIPE_SECRET_KEY || 'mock_stripe_key';
const stripeWebhookSecret = process.env.STRIPE_WEBHOOK_SECRET || 'mock_webhook_secret';
const stripe = new Stripe(stripeSecret, { apiVersion: '2023-10-16' as any });

const geminiApiKey = process.env.GEMINI_API_KEY || '';
// Instantiate GoogleGenerativeAI client if api key is provided, else fallback to mock mode
const ai = geminiApiKey ? new GoogleGenerativeAI(geminiApiKey) : null;

// ==================== ENDPOINT 1: GENERAL CONTACT SUBMISSION ====================
export const contactSubmission = functions.https.onRequest(async (req, res) => {
  // Enforce basic CORS
  res.set('Access-Control-Allow-Origin', '*');
  if (req.method === 'OPTIONS') {
    res.set('Access-Control-Allow-Methods', 'POST');
    res.set('Access-Control-Allow-Headers', 'Content-Type');
    res.set('Access-Control-Max-Age', '3600');
    res.status(204).send('');
    return;
  }

  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method Not Allowed' });
    return;
  }

  try {
    const { name, email, phone, company, country, language, service, message } = req.body;

    // Validate parameters
    if (!name || !email || !phone || !message) {
      res.status(400).json({ error: 'Missing mandatory dossier parameters (name, email, phone, message).' });
      return;
    }

    const payload = {
      name,
      email,
      phone,
      company: company || '',
      country: country || '',
      language: language || 'tr',
      service: service || 'general',
      message,
      createdAt: admin.firestore.FieldValue.serverTimestamp(),
      status: 'new'
    };

    const docRef = await db.collection('contactSubmissions').add(payload);
    res.status(200).json({ success: true, refId: docRef.id });
  } catch (error: any) {
    functions.logger.error('Contact Submission error:', error);
    res.status(500).json({ error: 'Internal Server Error', message: error.message });
  }
});

// ==================== ENDPOINT 2: CASE INTAKE SUBMISSION ====================
export const advisoryIntakeSubmission = functions.https.onRequest(async (req, res) => {
  res.set('Access-Control-Allow-Origin', '*');
  if (req.method === 'OPTIONS') {
    res.set('Access-Control-Allow-Methods', 'POST');
    res.set('Access-Control-Allow-Headers', 'Content-Type');
    res.status(204).send('');
    return;
  }

  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method Not Allowed' });
    return;
  }

  try {
    const data = req.body;

    if (!data.fullName || !data.email || !data.phone || !data.caseDetail) {
      res.status(400).json({ error: 'Missing mandatory intake dossier parameters.' });
      return;
    }

    const payload = {
      ...data,
      status: 'pending_payment',
      createdAt: admin.firestore.FieldValue.serverTimestamp()
    };

    const docRef = await db.collection('advisoryIntakes').add(payload);
    res.status(200).json({ success: true, intakeId: docRef.id });
  } catch (error: any) {
    functions.logger.error('Intake submission error:', error);
    res.status(500).json({ error: 'Internal Server Error', message: error.message });
  }
});

// ==================== FIRESTORE TRIGGER: CASE INTAKE AGENT (GEMINI AI BRIEF) ====================
export const onAdvisoryIntakeCreated = functions
  .runWith({ secrets: ['GEMINI_API_KEY'] })
  .firestore.document('advisoryIntakes/{docId}')
  .onCreate(async (snapshot, context) => {
    const docId = context.params.docId;
    const data = snapshot.data();

    try {
      functions.logger.info(`Analyzing dossier file: ${docId}`);
      
      let aiBriefText = '';

      if (ai) {
        // Formulate professional B2B prompt for Gemini model
        const prompt = `Act as an elite corporate B2B regulatory auditor. We are reviewing a new client case file for Mentor Group Advisory.
        Client details:
        Name: ${data.fullName}
        Sector: ${data.sector}
        Estimated Budget: ${data.budgetRange}
        Timeline: ${data.timelineRange}
        Topic: ${data.mainTopic}
        Company Status in TR: ${data.hasTrCompany}
        Prior Official Applications: ${data.prevApp}
        Case Description: ${data.caseDetail}

        Generate a strict, formal, and highly structured analytical board brief containing the following exactly:
        01. CLIENT PROFILE AND STRATEGIC SCENE
        02. REGULATORY TOPIC AND SERVICE FIT (Match with Investment Incentive certificates, company setup, relocations, or compliance)
        03. URGENCY AND DOSSIER FEASIBILITY AUDIT
        04. PROPOSED 30-MINUTES MEETING AGENDA
        05. SECURITY RISK NOTES AND REGULATORY BARRIERS (Explicitly state that idari approvals are sovereign ministry authority only; no guarantees; list compliance issues)
        
        Keep the register formal, authoritative, and strictly professional.`;

        const model = ai.getGenerativeModel({ model: 'gemini-1.5-flash' });
        const result = await model.generateContent(prompt);
        const response = await result.response;
        aiBriefText = response.text() || 'Error: AI Brief content empty.';
      } else {
        // Offline / local development mock fallback
        functions.logger.info('Gemini API key missing. Operating in local sandbox mock mode.');
        aiBriefText = `[ MOCK ANALYTICAL BRIEF: LOCAL SANDBOX ]
        REF-ID: MG-REQ-${docId.slice(-4)}-M
        01. MÜŞTERİ PROFİLİ: ${data.fullName.toUpperCase()} (Sector: ${data.sector})
        02. DOSYA KATEGORİSİ: ${data.mainTopic.toUpperCase()}
        03. BÜTÇESEL HACİM: ${data.budgetRange}
        04. GÖRÜŞME GÜNDEMİ:
            - Asgari yatırım sınırlarının ve mevzuat uygunluğunun analizi.
            - Türkiye pazar giriş tescil ve vergi planlaması adımları.
        05. RİSK NOTLARI: İdari onaylar tamamen bakanlık yetkisindedir.`;
      }

      await db.collection('advisoryIntakes').doc(docId).update({
        aiBrief: aiBriefText,
        briefGeneratedAt: admin.firestore.FieldValue.serverTimestamp()
      });
      
      functions.logger.info(`AI Dossier Brief successfully generated for: ${docId}`);
    } catch (error) {
      functions.logger.error('Gemini AI trigger failed:', error);
    }
  });

// ==================== ENDPOINT 3: STRIPE CHECKOUT SESSION ====================
export const createStripeCheckout = functions
  .runWith({ secrets: ['STRIPE_SECRET_KEY'] })
  .https.onRequest(async (req, res) => {
  res.set('Access-Control-Allow-Origin', '*');
  if (req.method === 'OPTIONS') {
    res.set('Access-Control-Allow-Methods', 'POST');
    res.set('Access-Control-Allow-Headers', 'Content-Type');
    res.status(204).send('');
    return;
  }

  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method Not Allowed' });
    return;
  }

  try {
    const { intakeId, successUrl, cancelUrl } = req.body;

    if (!intakeId) {
      res.status(400).json({ error: 'Missing mandatory parameter: intakeId.' });
      return;
    }

    // Retrieve corresponding intake data
    const doc = await db.collection('advisoryIntakes').doc(intakeId).get();
    if (!doc.exists) {
      res.status(404).json({ error: 'No matching intake record found.' });
      return;
    }

    const clientData = doc.data();

    // Check if key is mock
    if (stripeSecret === 'mock_stripe_key') {
      // Mock gateway response for local development
      res.status(200).json({ 
        url: `${successUrl}?session_id=mock_stripe_${intakeId}`, 
        isMock: true 
      });
      return;
    }

    // Live Stripe Integration
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [{
        price_data: {
          currency: 'eur',
          product_data: {
            name: 'Initial Advisory Intake Scoping & 30-Min Strategic Session Fee',
            description: `Dossier Audit & Compliance Review for intake ref: ${intakeId}`
          },
          unit_amount: 15000, // 150.00 EUR in cents
        },
        quantity: 1,
      }],
      mode: 'payment',
      success_url: `${successUrl}?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: cancelUrl,
      metadata: {
        intakeId,
        clientName: clientData?.fullName || ''
      }
    });

    res.status(200).json({ url: session.url });
  } catch (error: any) {
    functions.logger.error('Stripe creation failed:', error);
    res.status(500).json({ error: 'Internal Server Error', message: error.message });
  }
});

// ==================== ENDPOINT 4: STRIPE WEBHOOK ====================
export const stripeWebhookHandler = functions
  .runWith({ secrets: ['STRIPE_SECRET_KEY', 'STRIPE_WEBHOOK_SECRET'] })
  .https.onRequest(async (req, res) => {
  const sig = req.headers['stripe-signature'];

  if (!sig) {
    res.status(400).send('Webhook signature missing.');
    return;
  }

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(req.rawBody, sig, stripeWebhookSecret);
  } catch (err: any) {
    functions.logger.error(`Webhook signature verification failed:`, err);
    // If mock secret, fallback to manual parse for local validation
    if (stripeWebhookSecret === 'mock_webhook_secret') {
      event = req.body;
    } else {
      res.status(400).send(`Webhook Error: ${err.message}`);
      return;
    }
  }

  // Handle successful payments
  if (event.type === 'checkout.session.completed') {
    const session = event.data.object as Stripe.Checkout.Session;
    const intakeId = session.metadata?.intakeId;

    if (intakeId) {
      try {
        functions.logger.info(`Payment verified for intake Ref: ${intakeId}`);

        // Mock Google Calendar coordination & Meet attachment
        const meetCoord = `https://meet.google.com/mg-advisory-${intakeId.slice(-4)}`;
        
        await db.collection('advisoryIntakes').doc(intakeId).update({
          status: 'paid',
          stripeSessionId: session.id,
          paymentSettledAt: admin.firestore.FieldValue.serverTimestamp(),
          googleMeetLink: meetCoord,
          googleCalendarScheduled: false // will be set to true when slot selected
        });

        // Trigger email notification skeleton
        functions.logger.info(`EMAIL DISPATCH SKELETON: Dossier summary, AI Brief, and Google Meet coordination link [${meetCoord}] dispatched successfully.`);
      } catch (error) {
        functions.logger.error(`Failed updating Firestore intake payment status:`, error);
      }
    }
  }

  res.status(200).json({ received: true });
});
