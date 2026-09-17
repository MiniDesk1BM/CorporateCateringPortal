export interface Company {
  name: string;
  tagline: string;
  heroTitle: string;
  heroDescription: string;
  contactText: string;
}

export interface Service {
  title: string;
  description: string;
  highlight: string;
}

export interface Sector {
  name: string;
  description: string;
}

export interface NewsItem {
  date: string;
  title: string;
  summary: string;
}
