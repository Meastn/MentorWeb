/* REF: MG-2026-DATA-INSIGHTS-01 */

export interface Article {
  slug: string;
  locale: 'tr' | 'en';
  title: string;
  excerpt: string;
  category: string;
  date: string;
  refCode: string;
  author: string;
  contentHtml: string;
}

export const insightsArticles: Article[] = [
  // ==================== TURKISH ARTICLES ====================
  {
    slug: 'yatirim-tesvik-belgesi-nedir',
    locale: 'tr',
    title: 'Yatırım Teşvik Belgesi Nedir ve Nasıl Alınır?',
    excerpt: 'Türkiye’de yeni yatırım planlayan firmaların yararlanabileceği en önemli resmi destek aracı olan Yatırım Teşvik Belgesi’nin şartları ve başvuru adımları.',
    category: 'MEVZUAT BRİFİNGİ',
    date: '2026-05-15',
    refCode: 'INTEL-TR-YTB-01',
    author: 'Mentor Group Teşvik Departmanı Başmüşaviri',
    contentHtml: `<p>Türkiye’de sanayi, bilişim, enerji ve imalat sektörlerinde faaliyet gösteren firmaların, yatırımlarını finanse ederken yararlanabileceği en güçlü resmi mekanizma <strong>Yatırım Teşvik Belgesi (YTB)</strong>’dir. T.C. Sanayi ve Teknoloji Bakanlığı tarafından tescil edilen bu belge, yatırımcılara vergi indirimlerinden SGK prim desteklerine kadar çok geniş muafiyetler tanır.</p>
    
    <h4>1. Asgari Yatırım Şartları ve Limitleri</h4>
    <p>Yatırım Teşvik Belgesi düzenlenebilmesi için mevzuatça belirlenmiş yasal asgari sabit yatırım limitleri bulunmaktadır. Bu limitler yatırımın gerçekleştirileceği ile ve sektöre göre belirlenir:</p>
    <ul>
      <li><strong>1. ve 2. Bölgeler (Gelişmiş Bölgeler):</strong> Asgari 3 Milyon Türk Lirası sabit yatırım.</li>
      <li><strong>3., 4., 5. ve 6. Bölgeler (Gelişmekte Olan Bölgeler):</strong> Asgari 1.5 Milyon Türk Lirası sabit yatırım.</li>
      <li><strong>Stratejik Yatırımlar:</strong> Asgari 50 Milyon Türk Lirası sabit yatırım (bölge farkı gözetilmez).</li>
    </ul>

    <h4>2. Teşvik Belgesinin Sağladığı Temel Avantajlar</h4>
    <p>Belge tescil edildiği andan itibaren yatırımcıya şu yasal hakları kazandırır:</p>
    <ul>
      <li><strong>KDV İstisnası:</strong> Yatırım kapsamında yurt içinden veya dışından satın alınacak makine-teçhizat için %20 (veya güncel oranlı) KDV ödenmez.</li>
      <li><strong>Gümrük Vergisi Muafiyeti:</strong> İthal edilecek makineler için gümrük vergisi ödenmeksizin ithalat tescili yapılır.</li>
      <li><strong>Vergi İndirimi:</strong> Kurumlar vergisi, belirlenen yatırım katkı oranına ulaşıncaya kadar büyük indirimlerle (%50-%90 arası) uygulanır.</li>
      <li><strong>SGK Prim Desteği:</strong> İstihdam edilecek ilave personelin sigorta prim işveren hissesi devlet tarafından karşılanır (bölgeye göre 3-12 yıl arası).</li>
    </ul>

    <h4>3. Başvuru Süreci: E-TUYS Sistemi</h4>
    <p>Tüm başvurular artık Sanayi ve Teknoloji Bakanlığı’nın elektronik portalı olan <strong>E-TUYS</strong> üzerinden yürütülmektedir. E-TUYS üzerinde firma yetkilendirmesi yapıldıktan sonra, yatırımın finansal projeksiyonları, makine teçhizat listeleri ve teknik raporları girilir. Hata payı barındıran başvurular doğrudan reddedildiği için, dosyanın profesyonel mevzuat analistlerince hazırlanması idari gecikmeleri önlemektedir.</p>
    <p><em>Yatırım projenizin teşvik haritasındaki yerini ve uygun destek limitlerini belirlemek üzere bizimle bir İlk Değerlendirme Randevusu planlayabilirsiniz.</em></p>`
  },
  {
    slug: 'turkiyede-sirket-kurulusu-ilk-adimlar',
    locale: 'tr',
    title: 'Türkiye’de Şirket Kuruluşu İçin İlk Adımlar',
    excerpt: 'Yabancı sermayeli şirketlerin Türkiye pazarında Limited Şirket (LTD) veya Anonim Şirket (A.Ş.) tescillerinin aşamaları ve mali altyapı ihtiyaçları.',
    category: 'PAZAR GİRİŞ NOTU',
    date: '2026-05-20',
    refCode: 'INTEL-TR-CORP-02',
    author: 'Yabancı Sermaye Koordinasyon Direktörlüğü',
    contentHtml: `<p>Doğrudan Yabancı Yatırımlar Kanunu uyarınca, yabancı yatırımcılar Türkiye Cumhuriyeti sınırları içerisinde yerli yatırımcılarla tamamen eşit haklara sahiptir. Yabancı sermaye grupları, %100 kendi mülkiyetlerinde olmak üzere Limited Şirket (LTD) veya Anonim Şirket (A.Ş.) tescil edebilirler.</p>
    
    <h4>1. Limited (LTD) ve Anonim (A.Ş.) Arasındaki Yapısal Farklar</h4>
    <p>Türkiye’de en çok tescil edilen iki şirket modeli arasındaki temel yasal farklar şunlardır:</p>
    <ul>
      <li><strong>Limited Şirket (LTD):</strong> En az 1 ortakla kurulabilir. Asgari sermaye tabanı 10.000 TL’dir (ancak ticari kredibilite için en az 100.000 TL önerilir). Ortakların kamu borçlarından sorumluluğu sermaye hisseleri oranındadır.</li>
      <li><strong>Anonim Şirket (A.Ş.):</strong> En az 1 ortakla kurulabilir. Asgari sermaye tabanı 50.000 TL’dir. Hissedarların borç sorumluluğu yalnızca taahhüt ettikleri sermaye ile sınırlıdır. Hisse devirleri LTD’ye göre çok daha kolay olup, genel kurul kararı ve noter onayı gerektirmez.</li>
    </ul>

    <h4>2. Adım Adım Kurulum Aşamaları</h4>
    <p>Resmi şirket tescili ortalama 3 ila 5 iş günü sürmekte olup aşağıdaki idari adımları izler:</p>
    <ol>
      <li><strong>MERSİS Veri Girişi:</strong> Şirket ana sözleşmesinin Sanayi Bakanlığı tescil portalı MERSİS üzerinde taslak olarak hazırlanması.</li>
      <li><strong>Vergi Kimlik Numarası Tescili:</strong> Kurucu yabancı ortaklar (şahıs veya tüzel kişi) için vergi dairelerinden potansiyel vergi numarası alımı.</li>
      <li><strong>Sermaye Blokaj İşlemi:</strong> A.Ş. kuruluşlarında sermayenin en az %25'inin tescil öncesi bir banka hesabında bloke edilmesi (LTD'lerde kuruluş sonrası tescil edilebilir).</li>
      <li><strong>Sicil Tescili ve İmza Sirküleri:</strong> Ticaret Odası Sicil Müdürlüğü nezdinde tescil, imza sirkülerinin noterden çıkarılması ve resmi defterlerin tasdiki.</li>
    </ol>
    <p><em>Mentor Group, yabancı sermaye şirket tescil dosyalarının hazırlanmasını ve vergi/banka onboarding süreçlerini, akredite hukuk ve mali müşavirlik partnerlerimizle birlikte koordine etmektedir.</em></p>`
  },
  {
    slug: 'turkiyeye-yatirim-yapmadan-once-dikkat-edilmesi-gerekenler',
    locale: 'tr',
    title: 'Türkiye’ye Yatırım Yapmadan Önce Değerlendirilmesi Gereken Başlıklar',
    excerpt: 'Uluslararası fonlar ve yabancı şirketler için Türkiye pazarındaki vergi anlaşmaları, arazi tahsisleri ve idari lisans süreçlerinin scoping analizi.',
    category: 'STRATEJİK ANALİZ',
    date: '2026-05-28',
    refCode: 'INTEL-TR-STRAT-03',
    author: 'Stratejik Scoping ve Pazar Giriş Analisti',
    contentHtml: `<p>Türkiye Cumhuriyeti, jeopolitik konumu, gelişmiş imalat altyapısı ve Avrupa-Asya arasındaki lojistik köprü niteliğiyle yabancı sermaye için cazip bir pazardır. Ancak, yatırım kararı verilmeden önce hukuki ve mali altyapının titizlikle scoping edilmesi gerekmektedir.</p>
    
    <h4>1. Çifte Vergilendirmeyi Önleme Anlaşmaları (DTAA)</h4>
    <p>Türkiye'nin 80'den fazla ülke ile Çifte Vergilendirmeyi Önleme Anlaşması mevcuttur. Yatırım yapacak holding yapısının hangi ülkede kurulacağı (Örn: Hollanda, İngiltere veya doğrudan merkez ülke), kar payı (temettü) dağıtımlarında ödenecek stopaj vergisi oranlarını belirler. Doğru bir holding piramidi oluşturulması, küresel vergi optimizasyonu için elzemdir.</p>

    <h4>2. Sanayi Bölgesi ve Arazi Tahsisleri</h4>
    <p>Büyük ölçekli yatırımlar için Organize Sanayi Bölgeleri (OSB) nezdinde indirimli arazi tahsisleri veya Çevre Şehircilik Bakanlığı'nca sağlanan 49 yıllık irtifak hakları mevcuttur. Ancak sanayi imar durumları, çevre lisansları ve ÇED (Çevresel Etki Değerlendirmesi) izin süreçleri resmi onay aşamasında ciddi süreler alabilmektedir.</p>

    <h4>3. Yerleşim ve Kilit Personel Çalışma İzinleri</h4>
    <p>Yabancı uyruklu yöneticilerin ve kilit teknik kadroların Türkiye'de resmi çalışabilmesi için Çalışma ve Sosyal Güvenlik Bakanlığı'ndan çalışma izni alınmalıdır. Yasal sınırlandırma gereği, tescil edilen şirkette her 1 yabancı personel için 5 Türk vatandaşının istihdam edilmesi şartı aranmaktadır (ilk kurulumda ve kilit personel tescilinde özel istisnalar mevcuttur).</p>
    <p><em>Yatırım öncesi tüm bu regülasyon engellerini ve riskleri temizlemek amacıyla, dosyanızı başmüşavirimizle resmen scoping edeceğimiz "İlk Değerlendirme Randevusu" oluşturabilirsiniz.</em></p>`
  },

  // ==================== ENGLISH ARTICLES ====================
  {
    slug: 'what-foreign-investors-should-know',
    locale: 'en',
    title: 'What Foreign Investors Should Know Before Investing in Türkiye',
    excerpt: 'An executive audit of statutory guarantees, corporate dispute channels, currency rules, and capital repatriation rules for international direct investments.',
    category: 'EXECUTIVE BRIEFING',
    date: '2026-05-15',
    refCode: 'INTEL-EN-INVEST-01',
    author: 'Senior Partner, Global Market Entry Division',
    contentHtml: `<p>Türkiye offers a highly resilient industrial ecosystem and strategic access to European and Middle Eastern markets. However, executing a secure cross-border transaction requires understanding the underlying sovereign legal protections and currency compliance frameworks.</p>
    
    <h4>1. The Statutory Protection of Foreign Direct Investments</h4>
    <p>The Foreign Direct Investment Law (No. 4875) provides international investors with robust protection frameworks:</p>
    <ul>
      <li><strong>Equal Treatment:</strong> Foreign investors are granted the exact same commercial rights and liabilities as domestic Turkish corporations.</li>
      <li><strong>Expropriation Protection:</strong> Sovereign assets and private investments are legally protected against nationalization or expropriation without prompt, fair market compensation.</li>
      <li><strong>Capital Repatriation:</strong> International entities have the unconditional right to repatriate profits, dividends, proceeds, and intellectual fees out of the Turkish jurisdiction.</li>
    </ul>

    <h4>2. Managing Dispute Resolution & Arbitration</h4>
    <p>International corporate contracts should explicitly incorporate bilateral dispute channels. Foreign enterprises registered in Türkiye can utilize domestic courts or choose international commercial arbitration (such as ISTAC or ICC coordinates), ensuring clear contractual enforcement and legal predictability.</p>

    <h4>3. Local Employment & Work Permit Matrices</h4>
    <p>To secure a statutory work permit for a foreign national manager or technical expert, the Ministry of Labor generally mandates the employment of 5 local Turkish citizens. However, key direct investments exceeding specific capital thresholds are eligible for special exemptions and kilit personel (key personnel) status, easing early-stage executive deployment.</p>
    <p><em>To establish a customized legal and operational blueprint for your Turkish entry, schedule a structured Initial Advisory Session.</em></p>`
  },
  {
    slug: 'company-formation-in-turkiye',
    locale: 'en',
    title: 'Company Formation in Türkiye: First Considerations',
    excerpt: 'A comparative ledger of LLC and Joint Stock entity features, tax residency parameters, corporate structure controls, and statutory timeline expectations.',
    category: 'MARKET ENTRY NOTE',
    date: '2026-05-22',
    refCode: 'INTEL-EN-CORP-02',
    author: 'Corporate Setup & Compliance Scoping Specialist',
    contentHtml: `<p>Establishing a formal commercial vehicle in Türkiye is a streamlined administrative process, typically completed within 3 to 5 business days. The choice between a Limited Liability Company (LTD) and a Joint Stock Company (A.Ş.) has significant implications for executive liability, corporate governance, and tax efficiency.</p>
    
    <h4>1. Comparative Structural Analysis</h4>
    <table class="matrix-table" style="font-size: 0.8rem; margin-bottom: 20px;">
      <thead>
        <tr>
          <th>FEATURE</th>
          <th>LIMITED LIABILITY (LTD)</th>
          <th>JOINT STOCK COMPANY (A.Ş.)</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>Minimum Capital</strong></td>
          <td>10,000 TRY statutory base (100k recommended).</td>
          <td>50,000 TRY statutory base.</td>
        </tr>
        <tr>
          <td><strong>Public Debt Liability</strong></td>
          <td>Directors and shareholders are personally liable for tax/social security debts.</td>
          <td>Only the entity itself is liable; shareholders face zero personal public debt risk.</td>
        </tr>
        <tr>
          <td><strong>Share Transfer Ease</strong></td>
          <td>Demands notary approval and Ticaret Sicil tescil registration.</td>
          <td>Executed via simple private share endorsement; zero notary costs.</td>
        </tr>
        <tr>
          <td><strong>Board Setup</strong></td>
          <td>Managed by one or more Managers (Müdür).</td>
          <td>Managed by a formal Board of Directors (Yönetim Kurulu).</td>
        </tr>
      </tbody>
    </table>

    <h4>2. Primary Operational Milestones</h4>
    <p>The standard tescil setup incorporates the following steps:</p>
    <ol>
      <li><strong>By-Laws Drafting:</strong> Compiling corporate statutes in Turkish and executing notarized filings on the sovereign MERSİS portal.</li>
      <li><strong>Corporate Tax ID:</strong> Securing a potential tax identification number for all international shareholders.</li>
      <li><strong>Capital Blockage:</strong> For Joint Stock setups, 25% of the statutory capital must be deposited in a temporary blockage bank account prior to chamber registration.</li>
      <li><strong>Registry Clearance:</strong> Securing the final registration decree from the Chamber of Commerce, and issuing official signature circulars.</li>
    </ol>
    <p><em>We structure entity setups in direct coordination with our accredited local legal, tax, and accounting networks.</em></p>`
  },
  {
    slug: 'investment-incentives-preliminary-guide',
    locale: 'en',
    title: 'Investment Incentives in Türkiye: A Preliminary Guide',
    excerpt: 'An introductory guide on the Turkish regional incentive map, eligible sectors, VAT exemptions, and corporate tax reduction contributions.',
    category: 'INCENTIVES SPECS',
    date: '2026-05-29',
    refCode: 'INTEL-EN-YTB-03',
    author: 'Managing Director, Sovereign Incentives Scoping',
    contentHtml: `<p>The Republic of Türkiye provides massive B2B subsidies through the <strong>Investment Incentive Certificate (Yatırım Teşvik Belgesi)</strong> program. This sovereign framework is designed to de-risk high-capital setups, advanced manufacturing plants, R&D centers, and energy infrastructure installations.</p>
    
    <h4>1. Scoping the Regional Map</h4>
    <p>Turkish provinces are mapped into 6 distinct incentive regions. Region 1 encompasses highly developed zones (such as Istanbul and Izmir), while Region 6 contains the least developed provinces. The subsidy rates increase dramatically as you move down the scale. For instance, a Region 5 setup may yield corporate tax reductions covering up to 50% of the entire fixed asset expenditure, alongside 10 years of employer-share social security premium waivers.</p>

    <h4>2. Eligible Industries & Thresholds</h4>
    <p>The standard baseline Fixed Capital thresholds to apply for a YTB are:</p>
    <ul>
      <li><strong>Regions 1 & 2:</strong> Minimum 3 Million TRY fixed capital setup.</li>
      <li><strong>Regions 3 to 6:</strong> Minimum 1.5 Million TRY fixed capital setup.</li>
      <li><strong>Stratejik / Advanced Tech:</strong> Minimum 50 Million TRY fixed capital (Regions 1-6).</li>
    </ul>

    <h4>3. Key Subsidy Advantages</h4>
    <p>Once your dossier is tescil-cleared by the Ministry, your entity secures:</p>
    <ul>
      <li><strong>VAT Waiver:</strong> Elimination of the 20% Value Added Tax on eligible machinery acquisitions.</li>
      <li><strong>Customs tariff clearance:</strong> Exemption from import customs tariffs on foreign machinery imports.</li>
      <li><strong>Interest Subsidy:</strong> State coverage of commercial capital loan interest rates (up to 7 percentage points for foreign-currency credit).</li>
    </ul>
    <p><em>To evaluate the statutory grant potential of your industrial tech setup, book a structured 30-minute Initial Review.</em></p>`
  },
  // ==================== NEW REFORM ARTICLES (MAY 2026) ====================
  {
    slug: 'tbmm-yeni-yatirim-tesvik-kanun-teklifi',
    locale: 'tr',
    title: 'TBMM’de Yeni Yatırım Teşvik ve Vergi Reformu Kanun Teklifi (Mayıs 2026)',
    excerpt: 'TBMM’ye sunulan yeni kanun teklifi; Nitelikli Hizmet Merkezleri vergi muafiyeti, ihracatçılara kurumlar vergisi indirimi, transit ticarete %100\'e varan istisnalar ve teknogirişim destekleri getiriyor.',
    category: 'MEVZUAT BRİFİNGİ',
    date: '2026-05-31',
    refCode: 'INTEL-TR-REG-04',
    author: 'Mentor Group Mevzuat ve Regülasyon Departmanı',
    contentHtml: `<p>Türkiye Büyük Millet Meclisi (TBMM) Başkanlığı’na <strong>5 Mayıs 2026</strong> tarihinde sunulan <em>"Bazı Kanunlarda Değişiklik Yapılmasına Dair Kanun Teklifi"</em> (Esas No: 2/3669), Türkiye’nin yatırım iklimini kökten değiştirecek ve küresel sermaye için ülkeyi çekim merkezi yapacak tarihi teşvik ve vergi reformları içermektedir. Bu kapsamlı kanun teklifinin öne çıkan ve yatırımcıları doğrudan ilgilendiren maddelerini sizler için derledik.</p>
    
    <h4>1. Nitelikli Hizmet Merkezleri (QSC) Kurulması ve Vergi İstisnaları</h4>
    <p>Ülkemizin nitelikli hizmet ihracatını artırmak ve uluslararası şirketler için bölgesel bir merkez haline getirmek amacıyla yeni teşvikler getirilmektedir (Madde 5 ve 6):</p>
    <ul>
      <li><strong>Şirket Tanımı:</strong> En az üç farklı ülkede aktif olarak faaliyet gösteren uluslararası ilişkili şirket veya şirketler topluluğuna finans, strateji, hukuk, İK, R&D veya teknik destek gibi yönetim hizmetleri sunan ve yıllık brüt gelirinin en az %80'ini yurt dışından elde eden sermaye şirketleri <strong>"Nitelikli Hizmet Merkezi"</strong> olarak tescil edilecektir.</li>
      <li><strong>Kurumlar Vergisi İndirimi:</strong> Bu merkezlerin münhasıran bu faaliyetlerinden elde edeceği kazançlarına <strong>%95 oranında kazanç indirimi</strong> (İstanbul Finans Merkezi'nde faaliyet göstermeleri halinde <strong>%100 kazanç indirimi</strong>) uygulanacaktır (Madde 7).</li>
      <li><strong>Personel Ücret İstisnası:</strong> Bu merkezlerde istihdam edilen nitelikli personelin ücretlerinin brüt asgari ücretin 3 katına kadar (İFM'de faaliyet gösterenler için 5 katına kadar) olan kısmı <strong>gelir ve damga vergisinden müstesna</strong> tutulacaktır.</li>
    </ul>

    <h4>2. Üretici ve İhracatçılara Dev Kurumlar Vergisi İndirimi</h4>
    <p>Üretim ve ihracatı desteklemek amacıyla Kurumlar Vergisi Kanunu'nda çok önemli oran indirimleri yapılmaktadır (Madde 8):</p>
    <ul>
      <li><strong>İmalatçı İhracatçılar:</strong> Kendi ürettikleri malları ihraç eden imalatçıların bu ihracat işlemlerinden elde ettikleri kazançlarına kurumlar vergisi oranı 16 puan indirimli olarak <strong>%9</strong> (standart oran %25) olarak uygulanacaktır.</li>
      <li><strong>İhracatçı Kurumlar:</strong> Münhasıran ihracattan elde edilen kazançlarda vergi oranı 11 puan indirimli olarak <strong>%14</strong> olarak uygulanacaktır. Bu indirimli oranlar aracı ihracatçı (dış ticaret şirketleri) üzerinden yapılan ihracatlarda imalatçı/tedarikçiler için de geçerlidir.</li>
    </ul>

    <h4>3. Transit Ticarete %95-%100 Kazanç İstisnası</h4>
    <p>Yurt dışından satın alınan malların Türkiye'ye getirilmeden doğrudan yurt dışına satılması veya bu işlemlere aracılık edilmesinden (transit ticaret) elde edilen kurum kazançlarına uygulanan indirim oranı <strong>%95'e</strong> (İstanbul Finans Merkezi katılımcıları için <strong>%100'e</strong>) yükseltilmektedir (Madde 7). Bu teşvik, kazancın beyanname tarihine kadar Türkiye'ye transfer edilmesi şartına bağlanmıştır.</p>

    <h4>4. Yabancı Gerçek Kişilerin Yurt Dışı Kazançlarına 20 Yıl Muafiyet</h4>
    <p>Yurt dışındaki nitelikli yatırımcıları ve fon yöneticilerini Türkiye'ye çekmek amacıyla yeni bir gelir vergisi istisnası getirilmektedir (Madde 2 ve 4):</p>
    <ul>
      <li><strong>20 Yıl İstisna:</strong> Türkiye'de yerleşmiş sayılan gerçek kişilerin, yerleşmeden önceki son 3 takvim yılında Türkiye'de ikametgahının ve vergi mükellefiyetinin bulunmaması şartıyla, Türkiye dışında elde ettikleri tüm kazanç ve iratlar <strong>20 yıl boyunca gelir vergisinden müstesnadır</strong>.</li>
      <li><strong>Veraset Kolaylığı:</strong> Bu istisnadan yararlanan kişilerin mezkur süre içerisinde Türkiye'deki veraset yoluyla mal intikallerinde vergi oranı <strong>%1</strong> gibi sembolik bir oranda uygulanacaktır.</li>
    </ul>

    <h4>5. Teknogirişim ve Teknoloji Girişimciliği Destekleri</h4>
    <p>Teknoloji startup ekosistemini güçlendirmek amacıyla çok kritik yasal enstrümanlar tanımlanmaktadır (Madde 3 ve 11):</p>
    <ul>
      <li><strong>Çalışan Pay Senedi Teşviği:</strong> Teknogirişim çalışanlarına bedelsiz veya indirimli verilen pay senetlerindeki yıllık vergi muafiyeti üst sınırı brüt ücretin 1 katından <strong>2 katına</strong> çıkarılmış; bu payların elde tutulması gereken süreler kısaltılarak (2 ila 6 yıl arası kademelendirilerek) çalışanların hisselerini likide etmeleri kolaylaştırılmıştır.</li>
      <li><strong>Paya Dönüştürülebilir Borç Sözleşmesi (Convertible Debt):</strong> Sanayi ve Teknoloji Bakanlığı’nca <em>"Teknogirişim Rozeti"</em> verilen halka açık olmayan şirketlerin paya dönüştürülebilir borç sözleşmeleri ile yatırım almalarını kolaylaştırmak amacıyla, Türk Ticaret Kanunu'nun (TTK) şarta bağlı sermaye artırımına ilişkin katı sınırlamalarından muaf tutulmaları düzenlenmektedir.</li>
      <li><strong>Dijital Şirket Muafiyetleri:</strong> Kuluçka aşamasındaki teknogirişimlerin kuracağı ve Bakanlıkça belirlenecek "Dijital Şirket" tanımına uyan firmalar, kuruluşlarında oda kayıt ücretinden ve işletme döneminde 3 yıla kadar oda yıllık aidatlarından muaf tutulacaktır.</li>
    </ul>

    <h4>6. İstanbul Finans Merkezi (İFM) Teşviklerinin Süresinin Uzatılması</h4>
    <p>İFM bünyesindeki finansal kuruluşlara ve katılımcılara yönelik vergi indirimleri ile muafiyet süreleri ciddi şekilde uzatılmaktadır (Madde 12 ve 13):</p>
    <ul>
      <li><strong>Vergi İndirimi:</strong> Katılımcı belgesi alarak İFM bünyesinde faaliyette bulunan kuruluşların finansal faaliyet kazançlarına uygulanan %100 kurumlar vergisi indirimi <strong>2047 yılına kadar</strong> uzatılmaktadır.</li>
      <li><strong>Harç Muafiyeti:</strong> Bu kuruluşlara kuruluş ve faaliyet izinleri kapsamında sağlanan 5 yıllık harç muafiyeti süresi <strong>20 yıla</strong> çıkarılmaktadır.</li>
    </ul>

    <h4>7. Kamu Alacaklarında Deferral (Tecil) Kolaylığı</h4>
    <p>Vergi mükelleflerinin gönüllü uyumunu ve likidite yönetimini desteklemek amacıyla 6183 sayılı Kanun kapsamında yapılacak borç tecillerinde azami taksit süresi 36 aydan <strong>72 aya</strong> çıkarılmakta ve teminatsız borç tecil limiti 50.000 TL'den <strong>1 Milyon TL'ye</strong> yükseltilmektedir (Madde 1).</p>
    <p><em>Bu tarihi kanun teklifinin firmanızın yatırım fizibilitesine, vergi planlamasına ve teknoloji yatırımlarına etkilerini başmüşavirimizle değerlendirmek üzere bir İlk Değerlendirme Randevusu planlayabilirsiniz.</em></p>`
  },
  {
    slug: 'new-turkish-investment-incentives-law-proposal-2026',
    locale: 'en',
    title: 'Major Turkish Investment Incentives & Tax Reform Law Proposal (May 2026)',
    excerpt: 'A new bill submitted to the Turkish Grand National Assembly (TBMM) proposes establishing Qualified Service Centers, massive corporate tax cuts for exporters, transit trade tax exemptions, and structural benefits for tech startups.',
    category: 'EXECUTIVE BRIEFING',
    date: '2026-05-31',
    refCode: 'INTEL-EN-REG-04',
    author: 'Mentor Group Regulatory & Compliance Division',
    contentHtml: `<p>On <strong>May 5, 2026</strong>, a milestone legislative bill titled <em>"Proposal on Amending Certain Laws"</em> (Draft No: 2/3669) was formally submitted to the Presidency of the Grand National Assembly of Türkiye (TBMM). This highly anticipated reform packages massive tax exemptions, startup funding vehicles, and corporate tax cuts designed to attract high-value multinational headquarters, direct investors, and technology founders. Below, we examine the primary structural provisions of the bill.</p>
    
    <h4>1. Qualified Service Centers (QSCs) & Landmark Tax Holidays</h4>
    <p>To incentivize the relocation of regional headquarters and shared service centers to Türkiye, the bill creates a brand-new statutory category (Articles 5 & 6):</p>
    <ul>
      <li><strong>Definition:</strong> Capital corporations established in Türkiye to provide management services (such as financial consulting, strategic management, legal advice, HR, R&D, or tech consulting) to associated multinational entities operating actively in at least three different countries, and generating at least 80% of their gross annual revenue from abroad, will be tescil-certified as <strong>"Qualified Service Centers"</strong>.</li>
      <li><strong>95% to 100% Tax Deduction:</strong> Qualified Service Centers will enjoy a <strong>95% corporate tax deduction</strong> on their earnings (rising to a **100% tax holiday** if the entity operates within the Istanbul Financial Center (IFC) zone) (Article 7).</li>
      <li><strong>Qualified Salaries Waiver:</strong> The monthly salaries of qualified service personnel employed in these centers will be **exempt from income and stamp taxes** up to 3 times the gross monthly minimum wage (up to 5 times for centers active inside the IFC).</li>
    </ul>

    <h4>2. Broad Corporate Tax Reductions for Manufacturers & Exporters</h4>
    <p>To boost export capacity, the standard 25% corporate tax rate is being dramatically lowered on eligible foreign revenues (Article 8):</p>
    <ul>
      <li><strong>Manufacturing Exporters:</strong> Eligible corporate earnings derived directly from the export of self-manufactured goods will qualify for a 16-point rate reduction, resulting in an effective corporate tax rate of **9%** (down from 25%).</li>
      <li><strong>General Exporters:</strong> Corporate earnings exclusively derived from general export operations will qualify for an 11-point reduction, resulting in an effective rate of **14%**. This benefit extends to manufacturers executing exports via licensed Foreign Trade Capital Companies (Dış Ticaret Sermaye Şirketleri).</li>
    </ul>

    <h4>3. Transit Trade Profits Tax Deductions</h4>
    <p>The corporate tax deduction rate for earnings generated from transit trade (buying goods from abroad and selling them directly to third countries without entering Turkish customs) is raised to **95%** (and **100%** for participants licensed inside the Istanbul Financial Center) (Article 7). The deduction requires profits to be transferred to Türkiye prior to the corporate tax filing date.</p>

    <h4>4. 20-Year Foreign Income Tax Exemption for Non-Residents</h4>
    <p>To attract high-net-worth investors, family offices, and cross-border executives, the bill introduces a highly competitive tax residency package (Articles 2 & 4):</p>
    <ul>
      <li><strong>20-Year Tax Holiday:</strong> Real persons who establish tax residency in Türkiye, provided they had no domicile or tax liability in Türkiye during the last three calendar years preceding their arrival, will have their foreign-sourced earnings and investments **exempt from income tax for 20 years**.</li>
      <li><strong>Inheritance Tax Holiday:</strong> Assets inherited by or transferred to such individuals during this 20-year window will be subject to a symbolic **1% inheritance tax rate**.</li>
    </ul>

    <h4>5. Disruptive Structural Incentives for Tech Startups & VC Funding</h4>
    <p>The bill introduces progressive legal instruments to secure Türkiye's status as a global technology hub (Articles 3 & 11):</p>
    <ul>
      <li><strong>Employee Stock Option Exemption:</strong> The annual income tax exemption cap for shares or options granted to employees of certified technology startups (Teknogirişim) is doubled from 1 to **2 times the gross annual salary**, and vesting hold periods are shortened to facilitate faster liquidity (ranging between 2 to 6 years).</li>
      <li><strong>Paya Dönüştürülebilir Borç (Convertible Debt Contracts):</strong> Non-public startups awarded a official *"Techno-startup Badge"* by the Ministry of Industry and Technology will be able to raise seed and venture capital via convertible debt instruments under a simplified conditional capital increase framework, bypassing strict Turkish Commercial Code (TTK) restrictions.</li>
      <li><strong>Digital Companies Support:</strong> Incubator startups qualified as *"Digital Companies"* will be exempt from chamber registration fees and annual membership dues for up to 3 years, significantly lowering early-stage operational friction.</li>
    </ul>

    <h4>6. Extension of Istanbul Financial Center (IFC) Incentives</h4>
    <p>Tax holidays and fee exemptions targeting financial institutions inside the IFC are extended significantly to ensure long-term visibility (Articles 12 & 13):</p>
    <ul>
      <li><strong>Exemption Extended to 2047:</strong> The 100% corporate tax holiday on financial service export earnings is extended **until the year 2047**.</li>
      <li><strong>20-Year Harç Waiver:</strong> The exemption from municipal and financial activity fees for IFC participants is extended from 5 to **20 years**.</li>
    </ul>

    <h4>7. Relaxed Public Debt Installments (Deferrals)</h4>
    <p>To support corporate cash flow under Law No. 6183, the maximum tax deferral installment period is extended from 36 to **72 months**, and the collateral-free deferral threshold is increased from 50,000 TRY to **1 Million TRY** (Article 1).</p>
    <p><em>To analyze the impact of this historic reform bill on your corporate structure, relocation plans, or investment incentives, schedule a structured Initial Review with our managing partner.</em></p>`
  }
];

