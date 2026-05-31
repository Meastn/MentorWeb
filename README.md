# Mentor Group — Official Bilingual Website & Advisory Platform

This repository contains the production-ready codebase for the official bilingual website and strategic B2B advisory platform of **Mentor Group**, structured under a refined, print-brief styled **Institutional Retro** visual identity.

---

## 01. Tech Stack Overview

- **Frontend**: Astro v4 (Static HTML compilation) + TypeScript + Vanilla CSS
- **Styling**: Pure CSS Custom Variables (`variables.css` + `global.css`) based on the brand specification design tokens (Linen Background `#FAF7F2`, Ink Text `#1B1D1C`, Forest Green `#1E3B2A`, Burgundy `#5E1F27`, sharp 1px grid rule lines, section numbering, and double rules).
- **Backend**: Firebase Cloud Functions (TypeScript) + Firestore (Case submissions) + Firebase Hosting
- **Integrations**: Stripe Checkout (Initial Advisory intake fee harc) + Gemini API (Case Intake Agent summaries) + Google Calendar & Meet

---

## 02. Directory Architecture

```
MENTORWEB/
├── package.json               # Root dependencies (Astro v4 + TypeScript)
├── astro.config.mjs           # Astro i18n routing (prefixDefaultLocale: true)
├── firestore.rules            # Secure public-write, admin-restricted database rules
├── firebase.json              # Firebase Hosting and Cloud Functions configurations
├── public/
│   ├── favicon.svg            # Emblem asset
│   ├── robots.txt             # Crawl directives
│   └── sitemap-index.xml      # SEO bilingual index mappings
├── src/
│   ├── styles/
│   │   ├── variables.css      # CSS Brand tokens
│   │   └── global.css         # Baseline ledger and typography stylesheets
│   ├── components/
│   │   ├── BaseHead.astro     # Localized title, description, and hreflang tags
│   │   ├── Header.astro       # Institutional document header
│   │   ├── Footer.astro       # Prospectus-style ledger index footer
│   │   ├── RouteFinder.astro  # Interactive route questionnaire card
│   │   └── AdvisoryAssistant.astro # RESTRICTED compliance terminal QA widget
│   ├── layouts/
│   │   └── Layout.astro       # Core document shell
│   ├── data/
│   │   └── insights.ts        # Seed B2B briefings database (3 TR, 3 EN)
│   └── pages/
│       ├── index.astro        # Client-side locale auto-router (TR/EN)
│       ├── tr/                # Turkish portal routes
│       └── en/                # English portal routes
└── functions/                 # TypeScript Firebase Cloud Functions
    ├── package.json           # Backend libraries (Stripe, Google GenAI)
    ├── tsconfig.json          # Strict TSC compiler flags
    └── src/
        └── index.ts           # Submit API, Webhooks, and Gemini triggers
```

---

## 03. Environment Variables Configuration

Create a `.env` file inside the `functions` directory to support live production features. The backend automatically switches to safe, mocked workflows when keys are absent.

```properties
# functions/.env
STRIPE_SECRET_KEY=sk_live_...
STRIPE_WEBHOOK_SECRET=whsec_...
GEMINI_API_KEY=AIzaSy...
GOOGLE_CALENDAR_ID=advisory@mentor.group
NOTIFICATION_EMAIL=advisory@mentor.group
SITE_URL=https://mentor.group
```

---

## 04. Local Installation & Development

### 1. Install Dependencies
```bash
# Install frontend assets
npm install

# Install backend functions assets
cd functions
npm install
cd ..
```

### 2. Run Local Development Server
Launch the Astro client dev portal:
```bash
npm run dev
```
Open [http://localhost:4321/](http://localhost:4321/) in your browser. The client auto-redirects to `/tr/` or `/en/` depending on your navigator settings.

### 3. Verify Astro Production Build
Compile the entire static bilingual page matrix:
```bash
npm run build
```
This outputs a statically optimized distribution under `/dist/` containing all 28 localized paths and briefings.

---

## 05. Firebase Deployment Sequence

### Prerequisites
Install the Firebase CLI and sign in:
```bash
npm install -g firebase-tools
firebase login
```

### Deploying Database Rules & Hosting
Deploy the static pages, secure firestore rules, and sitemaps:
```bash
# Build static files
npm run build

# Deploy hosting and rules
firebase deploy --only hosting,firestore:rules
```

### Deploying Cloud Functions
Configure environmental credentials and deploy the Node.js TypeScript handlers:
```bash
cd functions
npm run build
cd ..
firebase deploy --only functions
```

---

## 06. Stripe Webhook Synchronization

To synchronize live Stripe checkout states with the Firestore database, configure your webhook endpoint in the Stripe Dashboard to route `checkout.session.completed` events to your functions handler:

`https://us-central1-mentorweb-1710d.cloudfunctions.net/stripeWebhookHandler`

Test webhooks locally using the Stripe CLI:
```bash
stripe listen --forward-to localhost:5001/mentorweb-1710d/us-central1/stripeWebhookHandler
```
Copy the local webhook secret `whsec_...` into your `functions/.env` to finalize local emulation.
