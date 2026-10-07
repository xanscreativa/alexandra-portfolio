export interface GalleryItem {
  type: "full" | "half" | "portrait-4-5" | "portrait-9-16";
  src: string;
  alt: string;
  caption?: string;
}

export interface PortfolioMeta {
  client: string;
  industry: string;
  role: string;
  year: string;
  deliverables: string;
  tools: string;
}

export interface CharacterDetail {
  name: string;
  traits: string[];
}

export interface CharacterPaletteSwatch {
  name: string;
  hex: string;
  description?: string;
}

export interface PortfolioItem {
  title: string;
  subtitle?: string;
  description: string;
  cover: string;
  images: string[];
  characterName?: string;
  characterBrief?: string;
  characterPurpose?: string;
  characterConcept?: string;
  characterExploration?: string;
  characterExplorationImages?: string[];
  characterFinalDescription?: string;
  characterDetails?: CharacterDetail[];
  visualStyle?: string[];
  colorPalette?: CharacterPaletteSwatch[];
  colorPaletteDescription?: string;
  applications?: string[];
  reflection?: string;
  gallery?: string[];
}

export interface PortfolioCollection {
  id: number;
  slug: string;
  title: string;
  category: string;
  tagline: string;
  description: string;
  cover: string;
  overview: string;
  challenge: string;
  solution: string;
  outcome: string;
  meta: PortfolioMeta;
  gallery: GalleryItem[];
  featured?: boolean;
  video?: {
    title: string;
    thumbnail: string;
    youtubeId: string;
  };
  items: PortfolioItem[];
  roles?: string[];
  toolsList?: string[];
  results?: { label: string; value: string; desc: string }[];
  reflection?: string;
}
