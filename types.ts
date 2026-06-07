
export interface SiteMeta {
  name: string;
  tagline: string;
  description: string;
  url: string;
  lang: string;
}

export interface CompanyInfo {
  name: string;
  owner: string;
  address: {
    street: string;
    city: string;
    zip: string;
  };
  contact: {
    phone: string;
    landline?: string;
    email: string;
    web3forms_key: string;
  };
}

export interface Service {
  id: string;
  title: string;
  description: string;
  features: string[];
  image: string;
}

export interface SiteContent {
  site: SiteMeta;
  company: CompanyInfo;
  navigation: Array<{ label: string; path: string }>;
  pages: {
    home: {
      hero: {
        headline: string;
        subline: string;
        cta_primary: string;
        cta_secondary: string;
        image?: string;
        images?: string[];
      };
      stats: Array<{ value: string; label: string }>;
      intro: {
        title: string;
        text: string;
      };
    };
    services: Service[];
    legal: {
      impressum: string;
      datenschutz: string;
    };
  };
}
