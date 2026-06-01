export interface ClientLogo {
  name: string;
  src: string;
  alt: string;
  sourceUrl: string;
  enabled: boolean;
  needsReview: boolean;
}

export const clientLogos: ClientLogo[] = [
  {
    name: "EMAK Asansör",
    src: "/logos/clients/normalized/emak-asansor.png",
    alt: "EMAK Asansör Logo",
    sourceUrl: "https://emakasansor.com/wp-content/uploads/2021/09/logo.jpeg",
    enabled: true,
    needsReview: true
  },
  {
    name: "Başolsan",
    src: "/logos/clients/normalized/basolsan.png",
    alt: "Başolsan Logo",
    sourceUrl: "https://basolsan.com/wp-content/uploads/2025/09/basol_logo-web.png",
    enabled: true,
    needsReview: false
  },
  {
    name: "Corridoor",
    src: "/logos/clients/normalized/corridoor.png",
    alt: "Corridoor Logo",
    sourceUrl: "https://www.corridoor.com.tr/depo/logoo.png",
    enabled: true,
    needsReview: false
  },
  {
    name: "Lidas",
    src: "/logos/clients/normalized/lidas.png",
    alt: "Lidas Logo",
    sourceUrl: "https://www.teamlidas.com/assets/upload/team-lidas-bar-logo.jpg",
    enabled: true,
    needsReview: false
  },
  {
    name: "Royal İlaç",
    src: "/logos/clients/normalized/royal-ilac.png",
    alt: "Royal İlaç Logo",
    sourceUrl: "https://www.royalilac.com/resimler/logo.png",
    enabled: true,
    needsReview: false
  },
  {
    name: "Ünsal Makina",
    src: "/logos/clients/normalized/unsal-makina.png",
    alt: "Ünsal Makina Logo",
    sourceUrl: "https://static.wixstatic.com/media/8e12c5_8358b612291b4b1a9a7eeaa10d30205e~mv2.png",
    enabled: true,
    needsReview: false
  },
  {
    name: "OMS Makina",
    src: "/logos/clients/normalized/oms-makina.png",
    alt: "OMS Makina Logo",
    sourceUrl: "https://omsmakina.com/uploads/logo/logo.png",
    enabled: true,
    needsReview: true
  },
  {
    name: "Hidayet Çelik",
    src: "/logos/clients/normalized/hidayet-celik.png",
    alt: "Hidayet Çelik Logo",
    sourceUrl: "https://www.hidayetcelik.com.tr/tema/img/logo.png",
    enabled: true,
    needsReview: false
  },
  {
    name: "Anadolu Robotik",
    src: "/logos/clients/normalized/anadolu-robotik.png",
    alt: "Anadolu Robotik Logo",
    sourceUrl: "https://www.anadolurobotik.com/wp-content/uploads/2024/05/Varlik-1@10x-1024x208.png",
    enabled: true,
    needsReview: false
  },
  {
    name: "Aegean Milas",
    src: "/logos/clients/normalized/aegean-milas.png",
    alt: "Aegean Milas Logo",
    sourceUrl: "https://aegean.com.tr/cdn/shop/files/milas_aegean_logo_dkey_altin_1.png?v=1767716849&width=500",
    enabled: true,
    needsReview: false
  },
  {
    name: "Atıksan",
    src: "/logos/clients/normalized/atiksan.png",
    alt: "Atıksan Logo",
    sourceUrl: "http://www.atiksan.com.tr/wp-content/uploads/2017/11/at%C4%B1ksan_logo.jpg",
    enabled: true,
    needsReview: true
  },
  {
    name: "Tarmond",
    src: "/logos/clients/normalized/tarmond.png",
    alt: "Tarmond Logo",
    sourceUrl: "https://tarmond.com/wp-content/uploads/2025/01/qweqwe-265x153.png",
    enabled: true,
    needsReview: true
  },
  {
    name: "Royal Platinum",
    src: "/logos/clients/normalized/royal-platinum.png",
    alt: "Royal Platinum Logo",
    sourceUrl: "https://www.royalplatinum.com.tr/wp-content/uploads/2022/07/royal-platinum-black-logo.png",
    enabled: true,
    needsReview: false
  },
  {
    name: "Bilkent Holding",
    src: "/logos/clients/normalized/bilkent-holding.png",
    alt: "Bilkent Holding Logo",
    sourceUrl: "Official site exposes group/Tepe asset, not a clear Bilkent Holding wordmark: https://bilkentholding.com.tr/tepe_logob-Hi-res.matbaa_baskisi_icin.png",
    enabled: false, // Disabled by default for pending review/confirmation
    needsReview: true
  },
  {
    name: "Kraft Energy",
    src: "/logos/clients/normalized/kraft-energy.png",
    alt: "Kraft Energy Logo",
    sourceUrl: "https://www.kraft-energy.com/wp-content/uploads/2020/07/cropped-Kraft-Energy-Logo_100mm_grey-1-1-188x63.png",
    enabled: true,
    needsReview: false
  },
  {
    name: "Alprof Alüminyum",
    src: "/logos/clients/normalized/alprof-aluminyum.png",
    alt: "Alprof Alüminyum Logo",
    sourceUrl: "https://www.alprofaluminyum.com.tr/ckfinder/userfiles/images/logo.png",
    enabled: true,
    needsReview: false
  },
  {
    name: "Antalüminyum",
    src: "/logos/clients/normalized/antaluminyum.png",
    alt: "Antalüminyum Logo",
    sourceUrl: "https://www.antaluminyum.com.tr/ckfinder/userfiles/images/ant%20aluminyum%20onayl%C4%B1%20logo%20siyah%20png.png",
    enabled: true,
    needsReview: false
  },
  {
    name: "Sermak Group",
    src: "/logos/clients/normalized/sermak-group.svg",
    alt: "Sermak Group Logo",
    sourceUrl: "https://sermakgroup.com/assets/images/logo-other.svg",
    enabled: true,
    needsReview: false
  },
  {
    name: "Aras Enerji",
    src: "/logos/clients/normalized/aras-enerji.png",
    alt: "Aras Enerji Logo",
    sourceUrl: "https://www.arasenerji.com/idea/li/29/themes/selftpl_63fdf49fe7f6f/assets/uploads/logo.png?revision=1772521476",
    enabled: true,
    needsReview: true
  },
  {
    name: "Voltran Güç",
    src: "/logos/clients/normalized/voltran-guc.png",
    alt: "Voltran Güç Logo",
    sourceUrl: "https://voltranguc.com/wp-content/uploads/2023/01/voltran-logo-1.png",
    enabled: true,
    needsReview: false
  },
  {
    name: "3 Faz",
    src: "/logos/clients/normalized/3-faz.png",
    alt: "3 Faz Logo",
    sourceUrl: "https://www.3faz.com.tr/assets/img/logo.png",
    enabled: true,
    needsReview: false
  },
  {
    name: "AFB Group",
    src: "/logos/clients/normalized/afb-group.png",
    alt: "AFB Group Logo",
    sourceUrl: "https://www.afbgroup.com.tr/wp-content/uploads/2024/05/Logo-AFB-300x105.png",
    enabled: true,
    needsReview: false
  },
  {
    name: "Sterilmed",
    src: "/logos/clients/normalized/sterilmed.png",
    alt: "Sterilmed Logo",
    sourceUrl: "https://sterilmed.com.tr/image/catalog/2025%20sterilmed%20logo%20vektorel.png",
    enabled: true,
    needsReview: false
  },
  {
    name: "Altassan Makina",
    src: "/logos/clients/normalized/altassan-makina.png",
    alt: "Altassan Makina Logo",
    sourceUrl: "https://www.altassanmakina.com/images/26638-Ads%C4%B1z-removebg-preview.png",
    enabled: true,
    needsReview: false
  },
  {
    name: "Sarprofil",
    src: "/logos/clients/normalized/sarprofil.png",
    alt: "Sarprofil Logo",
    sourceUrl: "https://www.sarprofil.com/images/logo-light-250x52.png",
    enabled: true,
    needsReview: false
  },
  {
    name: "EMS Makina",
    src: "/logos/clients/normalized/ems-makina.png",
    alt: "EMS Makina Logo",
    sourceUrl: "https://emsmakina.com/upload/1/emstreylerlogo-2-320x36.webp",
    enabled: true,
    needsReview: false
  },
  {
    name: "Uzay Plastik",
    src: "/logos/clients/normalized/uzay-plastik.png",
    alt: "Uzay Plastik Logo",
    sourceUrl: "https://uzayplastik.net/media/logo.png",
    enabled: true,
    needsReview: false
  },
  {
    name: "ABS Door",
    src: "/logos/clients/normalized/abs-door.png",
    alt: "ABS Door Logo",
    sourceUrl: "https://www.absdoor.com/wp-content/uploads/2021/10/abs-door-celik-kapi-web-sitesi-logo-500x200-1.png",
    enabled: true,
    needsReview: false
  },
  {
    name: "Daloğlu",
    src: "/logos/clients/normalized/daloglu.png",
    alt: "Daloğlu Logo",
    sourceUrl: "https://daloglu.com/images/logo.png",
    enabled: true,
    needsReview: false
  },
  {
    name: "Bakırtıroğlu Mobilya",
    src: "/logos/clients/normalized/bakitiroglu-mobilya.png",
    alt: "Bakırtıroğlu Mobilya Logo",
    sourceUrl: "https://baktiroglumobilya.com/wp-content/uploads/2024/05/Logo.png",
    enabled: true,
    needsReview: false
  },
  {
    name: "Benk Yapı",
    src: "/logos/clients/normalized/benk-yapi.png",
    alt: "Benk Yapı Logo",
    sourceUrl: "https://benkyapi.com.tr/wp-content/uploads/2021/01/benk_yapi_logo.png",
    enabled: true,
    needsReview: false
  }
];
