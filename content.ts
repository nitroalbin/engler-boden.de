import { SiteContent } from './types';

export const content: SiteContent = {
  "site": {
    "name": "Engler Bodenbeschichtung",
    "tagline": "Premium-Böden für Ihr Zuhause & Gewerbe.",
    "description": "Ihr Spezialist für Balkonsanierung, Garagenbeschichtung und hygienische Bodenlösungen in Breisach und Umgebung.",
    "url": "https://engler-boden.de",
    "lang": "de"
  },
  "company": {
    "name": "Engler Bodenbeschichtung",
    "owner": "Birgit Engler",
    "address": {
      "street": "Stegmatten 2",
      "city": "Breisach-Gündlingen",
      "zip": "79206"
    },
    "contact": {
      "phone": "01727602274",
      "email": "engler-boden@web.de",
      "web3forms_key": "YOUR_WEB3FORMS_ACCESS_KEY"
    }
  },
  "navigation": [
    { "label": "Start", "path": "/" },
    { "label": "Leistungen", "path": "/leistungen" },
    { "label": "Referenzen", "path": "/referenzen" },
    { "label": "Kontakt", "path": "/kontakt" }
  ],
  "pages": {
    "home": {
      "hero": {
        "headline": "BÖDEN FÜRS LEBEN.",
        "subline": "Hochwertige Beschichtungen für Balkone, Garagen und Wohnräume. Dauerhaft schön, pflegeleicht und extrem belastbar.",
        "cta_primary": "Unsere Leistungen",
        "cta_secondary": "Referenzen ansehen",
        "image": "/garage.webp"
      },
      "stats": [
        { "value": "15+", "label": "Jahre Erfahrung" },
        { "value": "Top", "label": "Qualität" },
        { "value": "100%", "label": "Zuverlässig" },
        { "value": "Freiburg", "label": "& Region" }
      ],
      "intro": {
        "title": "Ihr Boden in besten Händen – Engler Bodenbeschichtung.",
        "text": "Egal ob der in die Jahre gekommene Balkon, die staubige Garage oder der hygienische Boden für Ihre Metzgerei oder Küche: Wir bieten maßgeschneiderte Beschichtungslösungen, die nicht nur funktional, sondern auch optisch überzeugen. Als Fachbetrieb aus Breisach stehen wir für Handwerksehre und erstklassige Materialien."
      }
    },
    "services": [
      {
        "id": "balkonsanierung",
        "title": "Balkonsanierung",
        "description": "Wasserdichte und dekorative Abdichtungen für Balkone und Terrassen. Schluss mit Rissen und Feuchtigkeitsschäden.",
        "features": [
          "UV-beständig",
          "Große Farbauswahl",
          "Rissüberbrückend",
          "Frostsicher"
        ],
        "image": "/balkon.webp"
      },
      {
        "id": "garagenbeschichtung",
        "title": "Garagenbeschichtung",
        "description": "Ölresistente, rutschfeste und extrem belastbare Epoxidharzböden für Ihre Garage oder Werkstatt.",
        "features": [
          "Reifenweichmacher-resistent",
          "Leicht zu reinigen",
          "Staubbindend",
          "Mechanisch hoch belastbar"
        ],
        "image": "/garage.webp"
      },
      {
        "id": "metzgereiboden",
        "title": "Metzgereiböden & Küchen",
        "description": "Fugenlose, hygienische Bodenbeschichtungen nach HACCP-Standard. Ideal für Metzgereien, Profiküchen und Lebensmittelbetriebe.",
        "features": [
          "Antibakteriell",
          "Rutschsicher R11/R12",
          "Hitzebeständig",
          "Heißwasser-reinigbar"
        ],
        "image": "/kueche.webp"
      },
      {
        "id": "verkaufsanhaenger",
        "title": "Verkaufsanhänger",
        "description": "Spezielle Beschichtungen für Food-Trucks und Anhänger. Leicht, robust und absolut pflegeleicht.",
        "features": [
          "Geringes Eigengewicht",
          "Chemikalienresistent",
          "Nahtlose Oberfläche",
          "Schnelle Trocknung"
        ],
        "image": "/foodvan.webp"
      },
      {
        "id": "schwimmbad",
        "title": "Schwimmbadbeschichtung",
        "description": "Langlebige Beckenbeschichtungen für private Pools. Farbecht, chlorresistent und hautfreundlich.",
        "features": [
          "Chlor- & Algenresistent",
          "Angenehme Haptik",
          "Dauerhaft dicht",
          "Individuelle Optik"
        ],
        "image": "/schwimmbad.webp"
      }
    ],
    "legal": {
      "impressum": "Angaben gemäß § 5 TMG: Personengesellschaft Birgit Engler. Steuernummer: 07332/21001. Finanzamt Freiburg-Land.",
      "datenschutz": "Datenschutzerklärung: Wir erheben Daten nur zur Bearbeitung Ihrer Anfrage. Ihre Daten werden verschlüsselt übertragen und nicht an Dritte weitergegeben. Sie haben jederzeit das Recht auf Auskunft und Löschung."
    }
  }
};