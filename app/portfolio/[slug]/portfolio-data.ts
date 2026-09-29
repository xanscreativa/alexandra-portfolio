export interface GalleryItem {
  src: string;
  title?: string;
  alt?: string;
  caption?: string;
  subSlides?: GalleryItem[];
  isVideo?: boolean;
}

export interface SectionDetails {
  client: string;
  industry: string;
  role: string;
  year: string;
  deliverables: string;
  tools: string;
}

export interface BrandGuidelineImage extends GalleryItem {
  width: number;
  height: number;
}

export interface BrandMeaningItem extends BrandGuidelineImage {
  title?: string;
  description: string;
}

export interface BrandGuidelineSection {
  number: "01" | "02" | "03" | "04" | "05" | "06" | "07" | "08";
  title: string;
  description: string;
  images: BrandGuidelineImage[];
}

export interface SectionData {
  title: string;
  username: string;
  bio: string;
  avatarImage: string;
  avatarText: string;
  avatarBg: string;
  posts: GalleryItem[];
  details: SectionDetails;
  overview: string;
  challenge: string;

  // Brand project detail page
  slug?: string;
  category?: string;
  bigIdea?: string;
  projectImages?: GalleryItem[];
  brandGuidelines?: BrandGuidelineSection[];
  brandMeaning?: BrandMeaningItem[];
  instagramHighlights?: GalleryItem[];
  instagramStories?: GalleryItem[];
}

export const desainLainItems: GalleryItem[] = [
  {
    src: "/portfolio/backdrop-fa.avif",
    alt: "Children's forum backdrop",
    caption: "Children's forum backdrop",
  },
  {
    src: "/portfolio/billboard-uksw.avif",
    alt: "UKSW billboard",
    caption: "UKSW billboard",
  },
  {
    src: "/portfolio/spanduk-pelkatpa.avif",
    alt: "Pelkat PA banner",
    caption: "Pelkat PA banner",
  },
  {
    src: "/portfolio/campaign.avif",
    alt: "Campaign design",
    caption: "Campaign design",
  },
];

export const liveStreamItems: GalleryItem[] = [
  {
    src: "/portfolio/live-anya.webm",
    alt: "Anya Zona Layer",
    caption: "Anya Zona Layer live stream design",
    isVideo: true,
  },
  {
    src: "/portfolio/live-ez.webm",
    alt: "EZ Squad",
    caption: "EZ Squad live stream design",
    isVideo: true,
  },
  {
    src: "/portfolio/live-raka.webm",
    alt: "Raka Trabas",
    caption: "Raka Trabas live stream design",
    isVideo: true,
  },
  {
    src: "/portfolio/live-reno.webm",
    alt: "Sinyal Ordal",
    caption: "Sinyal Ordal live stream design",
    isVideo: true,
  },
];

export const liveProfiles = [
  {
    title: "Anya Zona Layer",
    username: "anya",
    avatarImage: "/portfolio/anya.avif",
    avatarText: "A",
    avatarBg: "from-pink-400 to-rose-500",
  },
  {
    title: "EZ Squad",
    username: "ezsquad",
    avatarImage: "/portfolio/ez.avif",
    avatarText: "EZ",
    avatarBg: "from-purple-400 to-violet-600",
  },
  {
    title: "Raka Trabas",
    username: "rakatrabas",
    avatarImage: "/portfolio/raka.avif",
    avatarText: "RT",
    avatarBg: "from-orange-400 to-red-500",
  },
  {
    title: "Sinyal Ordal",
    username: "sinyalordal",
    avatarImage: "/portfolio/sinyalordal.avif",
    avatarText: "SO",
    avatarBg: "from-blue-400 to-cyan-500",
  },
];

export const defaultThumbnailGrid: GalleryItem[] = Array.from(
  { length: 9 },
  (_, index) => {
    const num = index + 1;

    return {
      src: `/portfolio/thumbnail-${num}.avif`,
      alt: `Thumbnail ${num}`,
      caption: `Thumbnail ${num}`,
    };
  }
);

// ==========================================
// SOCIAL MEDIA
// ==========================================

const socialProjectDisplayOrder = [
  "consistrade",
  "jendelafinansial",
  "uksw_salatiga",
  "pelkatpa.pku",
  "jims_honey_sukabumi",
  "sanne_skin_beauty",
  "sambal_lauq",
];

export const socialSections: SectionData[] = [
{
  title: "Pelkat PA GPIB Immanuel Pekanbaru",
  username: "pelkatpa.pku",
  bio: "Children's ministry Sunday service.",
  avatarImage: "/portfolio/pa-logo.avif",
  avatarText: "P",
  avatarBg: "from-blue-500 to-indigo-400",

  posts: [
    {
      src: "/portfolio/pa-1.avif",
      alt: "Pelkat PA social media post 1",
      caption: "Pelkat PA",
    },
    {
      src: "/portfolio/pa-2.avif",
      alt: "Pelkat PA social media post 2",
      caption: "Pelkat PA",
    },
    {
      src: "/portfolio/pa-3.avif",
      alt: "Pelkat PA social media post 3",
      caption: "Pelkat PA",
    },
    {
      src: "/portfolio/pa-4.avif",
      alt: "Pelkat PA social media post 4",
      caption: "Pelkat PA",
    },
    {
      src: "/portfolio/pa-5.avif",
      alt: "Pelkat PA social media post 5",
      caption: "Pelkat PA",
    },
    {
      src: "/portfolio/pa-6.avif",
      alt: "Pelkat PA social media post 6",
      caption: "Pelkat PA",
    },
    {
      src: "/portfolio/pa-7.avif",
      alt: "Pelkat PA carousel 7",
      caption: "Pelkat PA",
      subSlides: [
        { src: "/portfolio/pa-7.avif" },
        { src: "/portfolio/pa-7a.avif" },
        { src: "/portfolio/pa-7b.avif" },
        { src: "/portfolio/pa-7c.avif" },
        { src: "/portfolio/pa-7d.avif" },
      ],
    },
    {
      src: "/portfolio/pa-8.avif",
      alt: "Pelkat PA social media post 8",
      caption: "Pelkat PA",
    },
    {
      src: "/portfolio/pa-9.avif",
      alt: "Pelkat PA carousel 9",
      caption: "Pelkat PA",
      subSlides: [
        { src: "/portfolio/pa-9.avif" },
        { src: "/portfolio/pa-9a.avif" },
        { src: "/portfolio/pa-9b.avif" },
        { src: "/portfolio/pa-9c.avif" },
        { src: "/portfolio/pa-9d.avif" },
        { src: "/portfolio/pa-9e.avif" },
      ],
    },
  ],

  details: {
    client: "Pelkat PA GPIB Immanuel Pekanbaru",
    industry: "Community & Ministry",
    role: "Visual Designer",
    year: "2024",
    deliverables: "Event assets, social media content, and carousel posts",
    tools: "Adobe Illustrator, Canva",
  },

  overview:
    "Created joyful and engaging visual content for children's ministry events and daily spiritual communication. The designs were developed to feel vibrant, warm, and approachable while maintaining a clear and consistent visual identity.",

  challenge:
    "The main challenge was balancing a playful, child-friendly aesthetic with the established branding and visual guidelines of the church.",
},
  {
    title: "UKSW",
    username: "uksw_salatiga",
    bio: "Creative minority.",
    avatarImage: "/portfolio/uksw-logo.avif",
    avatarText: "U",
    avatarBg: "from-pink-500 to-rose-400",
    instagramHighlights: [
      {
        src: "/portfolio/uksw-highlight1.avif",
        title: "Tracer Study",
        alt: "UKSW Instagram highlight 1",
      },
      {
        src: "/portfolio/uksw-highlight2.avif",
        title: "Faculty",
        alt: "UKSW Instagram highlight 2",
      },
      {
        src: "/portfolio/uksw-highlight3.avif",
        title: "Merchan",
        alt: "UKSW Instagram highlight 3",
      },
      {
        src: "/portfolio/uksw-highlight4.avif",
        title: "Services",
        alt: "UKSW Instagram highlight 4",
      },
      {
        src: "/portfolio/uksw-highlight5.avif",
        title: "Bingo!",
        alt: "UKSW Instagram highlight 5",
      },
      {
        src: "/portfolio/uksw-highlight6.avif",
        title: "Announce",
        alt: "UKSW Instagram highlight 6",
      },
      {
        src: "/portfolio/uksw-highlight7.avif",
        title: "Booklet",
        alt: "UKSW Instagram highlight 7",
      },
    ],
    posts: [
      {
        src: "/portfolio/uksw-1.avif",
        alt: "UKSW goes global",
        caption: "UKSW goes global",
      },
      {
        src: "/portfolio/uksw-2.avif",
        alt: "Campus tour",
        caption: "Campus tour",
        subSlides: [
          { src: "/portfolio/uksw-2.avif" },
          { src: "/portfolio/uksw-2a.avif" },
          { src: "/portfolio/uksw-2b.avif" },
          { src: "/portfolio/uksw-2c.avif" },
        ],
      },
      {
        src: "/portfolio/uksw-3.avif",
        alt: "New student admission 2026",
        caption: "Rumah Noto",
      },
      {
        src: "/portfolio/uksw-4.avif",
        alt: "Excellence accreditation",
        caption: "Passover poster",
      },
      {
        src: "/portfolio/uksw-5.avif",
        alt: "UKSW greets",
        caption: "Passover poster",
      },
      {
        src: "/portfolio/uksw-6.avif",
        alt: "Creative minority",
        caption: "Quotes",
      },
      {
        src: "/portfolio/uksw-7.avif",
        alt: "Campus life",
        caption: "Campus life",
        subSlides: [
          { src: "/portfolio/uksw-7.avif" },
          { src: "/portfolio/uksw-7a.avif" },
          { src: "/portfolio/uksw-7b.avif" },
          { src: "/portfolio/uksw-7c.avif" },
        ],
      },
      {
        src: "/portfolio/uksw-8.avif",
        alt: "Research & innovation",
        caption: "Research & innovation",
      },
      {
        src: "/portfolio/uksw-9.avif",
        alt: "Graduation moment",
        caption: "Graduation moment",
      },
    ],
    details: {
      client: "UKSW Salatiga",
      industry: "Education",
      role: "Visual Design Intern",
      year: "2022",
      deliverables: "Social media content, thumbnails, photography",
      tools: "Adobe Photoshop, Adobe Illustrator",
    },
    overview:
      "Created engaging visual content for the university's social media platforms, including promotional posts, video thumbnails, and photography to support various campus activities and communications.",
    challenge:
      "Creating visually engaging and consistent content for different campus communications while adapting to a variety of formats, audiences, and creative needs.",
  },

  {
    title: "Jendela Finansial",
    username: "jendelafinansial",
    bio: "Smart financial tips and wealth education made simple 💡 Grow your future with us.",
    avatarImage: "/portfolio/jendela-finansial-logo.avif",
    avatarText: "JF",
    avatarBg: "from-emerald-500 to-teal-400",
    instagramHighlights: [
      {
        src: "/portfolio/jendela-highlight1.avif",
        title: "⚠️Penting⚠️",
        alt: "Jendela Finansial Instagram highlight 1",
      },
      {
        src: "/portfolio/jendela-highlight2.avif",
        title: "✨Tips✨",
        alt: "Jendela Finansial Instagram highlight 2",
      },
      {
        src: "/portfolio/jendela-highlight3.avif",
        title: "🌠Zodiak🌠",
        alt: "Jendela Finansial Instagram highlight 3",
      },
    ],
    instagramStories: [
      {
        src: "/portfolio/jendela-story1.avif",
        alt: "Jendela Finansial Instagram story 1",
      },
      {
        src: "/portfolio/jendela-story2.webm",
        alt: "Jendela Finansial Instagram story 2",
      },
      {
        src: "/portfolio/jendela-story3.webm",
        alt: "Jendela Finansial Instagram story 3",
      },
      {
        src: "/portfolio/jendela-story4.avif",
        alt: "Jendela Finansial Instagram story 4",
      },
      {
        src: "/portfolio/jendela-story5.avif",
        alt: "Jendela Finansial Instagram story 5",
      },
    ],
    posts: [
      {
        src: "/portfolio/jendela-1.avif",
        alt: "Jendela 1",
        caption: "Jendela 1",
        subSlides: [
          { src: "/portfolio/jendela-1.avif" },
          { src: "/portfolio/jendela-1a.avif" },
          { src: "/portfolio/jendela-1b.avif" },
          { src: "/portfolio/jendela-1c.avif" },
          { src: "/portfolio/jendela-1d.avif" },
          { src: "/portfolio/jendela-1e.avif" },
        ],
      },
      {
        src: "/portfolio/jendela-2.avif",
        alt: "Jendela 2",
        caption: "Jendela 2",
        subSlides: [
          { src: "/portfolio/jendela-2.avif" },
          { src: "/portfolio/jendela-2a.avif" },
          { src: "/portfolio/jendela-2b.avif" },
          { src: "/portfolio/jendela-2c.avif" },
          { src: "/portfolio/jendela-2d.avif" },
        ],
      },
      {
        src: "/portfolio/jendela-3.avif",
        alt: "Jendela 3",
        caption: "Jendela 3",
        subSlides: [
          { src: "/portfolio/jendela-3.avif" },
          { src: "/portfolio/jendela-3a.avif" },
          { src: "/portfolio/jendela-3b.avif" },
          { src: "/portfolio/jendela-3c.avif" },
          { src: "/portfolio/jendela-3d.avif" },
          { src: "/portfolio/jendela-3e.avif" },
        ],
      },
      {
        src: "/portfolio/jendela-4.avif",
        alt: "Jendela 4",
        caption: "Jendela 4",
        subSlides: [
          { src: "/portfolio/jendela-4.avif" },
          { src: "/portfolio/jendela-4a.avif" },
          { src: "/portfolio/jendela-4b.avif" },
          { src: "/portfolio/jendela-4c.avif" },
          { src: "/portfolio/jendela-4d.avif" },
          { src: "/portfolio/jendela-4e.avif" },
          { src: "/portfolio/jendela-4f.avif" },
          { src: "/portfolio/jendela-4g.avif" },
          {
            src: "/portfolio/jendela-4h.avif",
            alt: "Jendela 4h",
            caption: "Jendela 4h",
          },
        ],
      },
      { src: "/portfolio/jendela-5.avif" },
      {
        src: "/portfolio/jendela-6.avif",
        alt: "Jendela 6",
        caption: "Jendela 6",
        subSlides: [
          { src: "/portfolio/jendela-6.avif" },
          { src: "/portfolio/jendela-6a.avif" },
          { src: "/portfolio/jendela-6b.avif" },
          { src: "/portfolio/jendela-6c.avif" },
          { src: "/portfolio/jendela-6d.avif" },
          { src: "/portfolio/jendela-6e.avif" },
          { src: "/portfolio/jendela-6f.avif" },
        ],
      },
      {
        src: "/portfolio/jendela-7.avif",
        alt: "Jendela 7",
        caption: "Jendela 7",
        subSlides: [
          { src: "/portfolio/jendela-7.avif" },
          { src: "/portfolio/jendela-7a.avif" },
          { src: "/portfolio/jendela-7b.avif" },
          { src: "/portfolio/jendela-7c.avif" },
        ],
      },
      {
        src: "/portfolio/jendela-8.avif",
        alt: "Jendela 8",
        caption: "Jendela 8",
        subSlides: [
          { src: "/portfolio/jendela-8.avif" },
          { src: "/portfolio/jendela-8a.avif" },
          { src: "/portfolio/jendela-8b.avif" },
          { src: "/portfolio/jendela-8c.avif" },
          { src: "/portfolio/jendela-8d.avif" },
          { src: "/portfolio/jendela-8e.avif" },
          { src: "/portfolio/jendela-8f.avif" },
          { src: "/portfolio/jendela-8g.avif" },
        ],
      },
      {
        src: "/portfolio/jendela-9.avif",
        alt: "Jendela 9",
        caption: "Jendela 9",
        subSlides: [
          { src: "/portfolio/jendela-9.avif" },
          { src: "/portfolio/jendela-9a.avif" },
          { src: "/portfolio/jendela-9b.avif" },
          { src: "/portfolio/jendela-9c.avif" },
          { src: "/portfolio/jendela-9d.avif" },
          { src: "/portfolio/jendela-9e.avif" },
          { src: "/portfolio/jendela-9f.avif" },
          { src: "/portfolio/jendela-9g.avif" },
        ],
      },
    ],
    details: {
      client: "Jendela Finansial",
      industry: "Financial Education",
      role: "Lead Visual Designer",
      year: "2024",
      deliverables:
        "Social media content, character design, branding assets, educational campaigns",
      tools: "Adobe Photoshop, Adobe Illustrator",
    },
    overview:
      "Developed visual content and branding assets for a financial education platform focused on helping Gen Z become more financially aware. The work included creating social media content, original character designs, and engaging visuals for financial challenges, news, and educational content.",
    challenge:
      "Making financial topics approachable and engaging for Gen Z while building a distinctive visual identity that could communicate educational content, financial news, and interactive challenges in a clear, relatable, and visually appealing way.",
  },

  {
    title: "Consistrade",
    username: "consistrade",
    bio: "Professional corporate and trading brand identity design 📈 Global trade made seamless.",
    avatarImage: "/portfolio/consistrade.avif",
    avatarText: "C",
    avatarBg: "from-purple-500 to-pink-500",
    posts: [
      { src: "/portfolio/consistrade-1.avif" },
      { src: "/portfolio/consistrade-2.avif" },
      { src: "/portfolio/consistrade-3.avif" },
      { src: "/portfolio/consistrade-4.avif" },
      { src: "/portfolio/consistrade-5.avif" },
      { src: "/portfolio/consistrade-6.avif" },
      { src: "/portfolio/consistrade-7.avif" },
      { src: "/portfolio/consistrade-8.avif" },
      { src: "/portfolio/consistrade-9.avif" },
    ],
    details: {
      client: "Consistrade",
      industry: "Financial & Trading Education",
      role: "Graphic Designer & Brand Designer",
      year: "2025",
      deliverables:
        "Brand identity, social media content, character design, digital learning assets",
      tools: "Adobe Photoshop, Adobe Illustrator, Canva",
    },
    overview:
      "Developed visual and branding assets for Consistrade, a financial education platform focused on helping traders—from beginners to professionals—learn and grow consistently. The work included building a cohesive brand identity, creating character designs, and developing engaging visual assets for digital products, trading modules, educational classes, and community-based content.",
    challenge:
      "Creating a visual identity that feels approachable for beginner traders while maintaining credibility and relevance for more experienced audiences. The challenge was to transform complex trading and financial concepts into clear, engaging, and visually consistent content that supports learning, community engagement, and Consistrade's digital education ecosystem.",
  },
  {
    title: "Jims Honey Sukabumi",
    username: "jims_honey_sukabumi",
    bio: "Social media content for Jims Honey Sukabumi.",
    avatarImage: "/portfolio/jims-logo.avif",
    avatarText: "JH",
    avatarBg: "from-amber-500 to-orange-400",
    posts: [
      { src: "/portfolio/jims1.avif", alt: "Jims Honey Sukabumi social media post 1" },
      { src: "/portfolio/jims2.avif", alt: "Jims Honey Sukabumi social media post 2" },
      { src: "/portfolio/jims3.avif", alt: "Jims Honey Sukabumi social media post 3" },
    ],
    details: {
      client: "Jims Honey Sukabumi",
      industry: "Food & Beverage",
      role: "Visual Designer",
      year: "—",
      deliverables: "Logo and social media posts",
      tools: "—",
    },
    overview:
      "Social media post designs created for Jims Honey Sukabumi.",
    challenge:
      "Developing clear, consistent visuals for the brand's social media communication.",
  },
  {
    title: "Sanne Skin & Beauty",
    username: "sanne_skin_beauty",
    bio: "Social media content for Sanne Skin & Beauty.",
    avatarImage: "/portfolio/sanne-logo.avif",
    avatarText: "S",
    avatarBg: "from-rose-400 to-pink-500",
    posts: [
      { src: "/portfolio/sanne1.avif", alt: "Sanne Skin & Beauty social media post 1" },
      { src: "/portfolio/sanne2.avif", alt: "Sanne Skin & Beauty social media post 2" },
      { src: "/portfolio/sanne3.avif", alt: "Sanne Skin & Beauty social media post 3" },
    ],
    details: {
      client: "Sanne Skin & Beauty",
      industry: "Beauty & Skincare",
      role: "Visual Designer",
      year: "—",
      deliverables: "Logo and social media posts",
      tools: "—",
    },
    overview:
      "Social media post designs created for Sanne Skin & Beauty.",
    challenge:
      "Developing clear, consistent visuals for the brand's social media communication.",
  },
  {
    title: "Sambal Lauq",
    username: "sambal_lauq",
    bio: "Social media content for Sambal Lauq.",
    avatarImage: "/portfolio/lauq-logo.avif",
    avatarText: "SL",
    avatarBg: "from-red-500 to-orange-400",
    posts: [
      { src: "/portfolio/lauq1.avif", alt: "Sambal Lauq social media post 1" },
      { src: "/portfolio/lauq2.avif", alt: "Sambal Lauq social media post 2" },
      { src: "/portfolio/lauq3.avif", alt: "Sambal Lauq social media post 3" },
    ],
    details: {
      client: "Sambal Lauq",
      industry: "Food & Beverage",
      role: "Visual Designer",
      year: "—",
      deliverables: "Logo and social media posts",
      tools: "—",
    },
    overview:
      "Social media post designs created for Sambal Lauq.",
    challenge:
      "Developing clear, consistent visuals for the brand's social media communication.",
  },
].sort(
  (firstProject, secondProject) =>
    socialProjectDisplayOrder.indexOf(firstProject.username) -
    socialProjectDisplayOrder.indexOf(secondProject.username)
);

// ==========================================
// BRAND IDENTITY
// ==========================================

export const brandSections: SectionData[] = [
  {
    slug: "jendela-finansial",
    category: "BRAND IDENTITY",
    title: "Jendela Finansial",
    username: "jendelafinansial",
    bio: "Smart financial tips and wealth education. 💡📈",
    avatarImage: "/portfolio/jendela-finansial.avif",
    avatarText: "JF",
    avatarBg: "from-emerald-500 to-teal-400",
    posts: [
      {
        src: "/portfolio/jendela-finansial.avif",
        alt: "Jendela Finansial logo",
        caption: "Jendela Finansial logo",
      },
    ],
    details: {
      client: "Jendela Finansial",
      industry: "Financial Education",
      role: "Lead Visual Designer",
      year: "2024",
      deliverables: "Character design, branding, social media design",
      tools: "Adobe Photoshop, Adobe Illustrator",
    },
    overview:
      "A financial education brand that addresses financial literacy using a visual approach tailored to Gen Z. Responsibilities included designing brand mascots, establishing the visual branding, and crafting social media content.",
    challenge:
      "Communicating complex financial concepts to make them approachable, relevant, and engaging for a younger audience through a fresh visual strategy.",
    bigIdea:
      "Jendela Finansial is designed as an educational and interactive social media platform that makes financial topics feel fun, approachable, and relevant to everyday life.\n\nThe content system combines financial education with interactive challenges, comics, character-based storytelling, and monthly templates such as Add Yours and Twibbon.\n\nTo create a consistent and recognizable Instagram feed, content follows three visual themes in a repeating sequence:\n\nBLUE → WHITE → YELLOW → BLUE → WHITE → YELLOW\n\nThis recurring color rhythm creates a visually organized feed while keeping the content varied, engaging, and easy to recognize when audiences browse the profile.",
    projectImages: [
      {
        src: "/portfolio/branding-jendela1.avif",
        alt: "Jendela Finansial logo",
      },
      {
        src: "/portfolio/branding-jendela.avif",
        alt: "Jendela Finansial brand guideline artwork",
      },
      {
        src: "/portfolio/branding-jendela.avif",
        alt: "Jendela Finansial brand guideline artwork",
      },
      {
        src: "/portfolio/branding-jendela4.avif",
        alt: "Jendela Finansial visual elements",
      },
      {
        src: "/portfolio/branding-jendela5.avif",
        alt: "Jendela Finansial supporting elements",
      },
      {
        src: "/portfolio/branding-jendela6.avif",
        alt: "Jendela Finansial character",
      },
    ],
  },

  {
    slug: "pelkat-pa-gpib-immanuel-pekanbaru",
    category: "BRAND IDENTITY",
    title: "Pelkat PA GPIB Immanuel Pekanbaru",
    username: "pelkatpa.pku",
    bio: "Official Pelayanan Anak GPIB Immanuel Pekanbaru. 🙏🕊️",
    avatarImage: "/portfolio/pelkatpa.avif",
    avatarText: "PA",
    avatarBg: "from-amber-500 to-orange-400",
    posts: [
      {
        src: "/portfolio/pelkatpa.avif",
        alt: "Pelkat PA GPIB Immanuel Pekanbaru",
        caption: "Pelkat PA GPIB Immanuel Pekanbaru",
      },
    ],
    details: {
      client: "GPIB Immanuel Pekanbaru",
      industry: "Children Ministry",
      role: "Visual Designer",
      year: "2025",
      deliverables:
        "Character design, video editing, poster design, event design, branding, social media design",
      tools: "Illustrator, Photoshop, Premiere Pro / CapCut",
    },
    overview:
      "Children's Ministry (Pelkat PA) serving elementary school children at GPIB Immanuel Pekanbaru. Responsible for developing visual characters, creating worship and event posters, editing videos, building visual branding, and designing social media content.",
    challenge:
      "Establishing a cheerful and attractive visual consistency for elementary-aged children while upholding core church ministry values.",
    projectImages: [
      {
        src: "/portfolio/branding-pelkatpa.avif",
        alt: "Pelkat PA GPIB Immanuel Pekanbaru brand identity",
      },
    ],
    brandGuidelines: [
      {
        number: "01",
        title: "LOGO",
        description:
          "The primary mark pairs a clear ministry identity with a warm, child-friendly character, keeping the organization recognizable across worship and event materials.",
        images: [
          {
            src: "/portfolio/branding-pelkatpa1.avif",
            alt: "Pelkat PA GPIB Immanuel Pekanbaru logo",
            width: 4320,
            height: 2430,
          },
        ],
      },
      {
        number: "04",
        title: "ELEMENT",
        description:
          "Playful shapes and visual motifs create an approachable language for children while giving ministry communications a consistent look.",
        images: [
          {
            src: "/portfolio/branding-pelkatpa4.avif",
            alt: "Pelkat PA GPIB Immanuel Pekanbaru visual elements",
            width: 4320,
            height: 2430,
          },
        ],
      },
      {
        number: "05",
        title: "SUPPORTING ELEMENT",
        description:
          "Supporting graphics extend the identity across posters, social media, and event materials without competing with the primary mark.",
        images: [
          {
            src: "/portfolio/branding-pelkatpa5.avif",
            alt: "Pelkat PA GPIB Immanuel Pekanbaru supporting elements",
            width: 4320,
            height: 2430,
          },
        ],
      },
      {
        number: "06",
        title: "CHARACTER",
        description:
          "The friendly character gives children a familiar visual companion and helps ministry activities feel welcoming and memorable.",
        images: [
          {
            src: "/portfolio/branding-pelkatpa6.avif",
            alt: "Pelkat PA GPIB Immanuel Pekanbaru brand character",
            width: 4320,
            height: 2430,
          },
        ],
      },
    ],
  },

  {
    slug: "gpib-immanuel-pekanbaru",
    category: "BRAND IDENTITY",
    title: "GPIB Immanuel Pekanbaru",
    username: "gpibimmanuelpku",
    bio: "Official church branding and visual identity system. 🙏🕊️",
    avatarImage: "/portfolio/gpib-sinode.avif",
    avatarText: "G",
    avatarBg: "from-amber-500 to-orange-400",
    posts: [
      {
        src: "/portfolio/gpib-thumb.avif",
        alt: "GPIB Immanuel Pekanbaru",
        caption: "GPIB Immanuel Pekanbaru",
      },
    ],
    details: {
      client: "GPIB Immanuel Pekanbaru",
      industry: "Church",
      role: "Visual Designer",
      year: "2025",
      deliverables:
        "Logo design, branding, character design, social media design, video editing",
      tools: "Illustrator, Figma, Photoshop",
    },
    overview:
      "Developed the visual identity for GPIB Immanuel Pekanbaru by designing internal church logos that visually represent the congregation and its identity in Pekanbaru. The project also included creating Elof, a mascot representing GPIB Immanuel Pekanbaru in serving the congregation, as well as developing social media branding and church information materials with a strong, informative, and artistic identity. The visual system was designed to create consistency across church communications while remaining approachable, meaningful, and relevant to the congregation.",
    challenge:
      "Building a cohesive visual identity that bridges the church's long standing ministry heritage with a modern, approachable aesthetic for the whole congregation.",
    projectImages: [
      {
        src: "/portfolio/branding-gpib.avif",
        alt: "GPIB Immanuel Pekanbaru brand identity",
      },
    ],
    brandGuidelines: [
      {
        number: "01",
        title: "LOGO",
        description:
          "The official GPIB logo represents the shared synod identity across GPIB congregations. The new GPIB Immanuel Pekanbaru logo creates a distinctive local identity while maintaining its connection to the wider GPIB identity.",
        images: [
          {
            src: "/portfolio/branding-gpib1.avif",
            alt: "Official GPIB Immanuel Pekanbaru logo",
            width: 4320,
            height: 2430,
          },
        ],
      },
      {
        number: "05",
        title: "SUPPORTING ELEMENT",
        description:
          "Visual elements combine GPIB symbols, the mascot, and realistic church photography to maintain a consistent identity. Supporting elements can adapt to programs, campaigns, events, and specific themes.",
        images: [
          {
            src: "/portfolio/branding-gpib5.avif",
            alt: "GPIB Immanuel Pekanbaru supporting elements",
            width: 4320,
            height: 2430,
          },
        ],
      },
      {
        number: "06",
        title: "CHARACTER",
        description:
          "Meet Elof, a friendly young pastor mascot inspired by Rudolf Knierim, the first missionary and pastor of GPIB. His name represents Immanuel, Light, Obedience, and Faith, reflecting the philosophy of walking together with God.",
        images: [
          {
            src: "/portfolio/branding-gpib6.avif",
            alt: "Elof, the GPIB Immanuel Pekanbaru mascot",
            width: 4320,
            height: 2430,
          },
        ],
      },
    ],
    brandMeaning: [
      {
        src: "/portfolio/branding-gpib1a.avif",
        alt: "GPIB church silhouette meaning",
        width: 2430,
        height: 2430,
        description:
          "The church silhouette represents GPIB Immanuel Pekanbaru as a spiritual home, with the cross symbolizing faith, hope, and Christ at the center of life.",
      },
      {
        src: "/portfolio/branding-gpib1b.avif",
        alt: "GPIB dove meaning",
        width: 2430,
        height: 2430,
        description:
          "The dove represents the Holy Spirit, symbolizing love, peace, and a welcoming spirit.",
      },
      {
        src: "/portfolio/branding-gpib1c.avif",
        alt: "GPIB palm leaf meaning",
        width: 2430,
        height: 2430,
        description:
          "The palm leaf symbolizes victory, joy, hope, and the spiritual growth of the congregation.",
      },
      {
        src: "/portfolio/branding-gpib1d.avif",
        alt: "GPIB circle meaning",
        width: 2430,
        height: 2430,
        description:
          "The circle represents unity, togetherness, and the congregation as one body in Christ.",
      },
      {
        src: "/portfolio/branding-gpib1e.avif",
        alt: "GPIB surrounding text meaning",
        width: 2430,
        height: 2430,
        description:
          "The surrounding text reinforces unity, togetherness, and the church's identity within the community.",
      },
    ],
  },
  {
    slug: "consistrade-brand",
    category: "BRAND IDENTITY",
    title: "Consistrade",
    username: "consistrade",
    bio: "Financial and trading education. 📊📉",
    avatarImage: "/portfolio/consistrade-thumb.avif",
    avatarText: "C",
    avatarBg: "from-purple-500 to-pink-500",
    posts: [
      {
        src: "/portfolio/consistrade-thumb.avif",
        alt: "Consistrade",
        caption: "Consistrade",
      },
    ],
    details: {
      client: "Consistrade",
      industry: "Financial & Trading Education",
      role: "Visual Designer",
      year: "2025",
      deliverables: "Logo design, character design, social media design",
      tools: "Adobe Photoshop, Adobe Illustrator",
    },
    overview:
      "A financial and trading education brand providing digital learning modules for users ranging from beginners to professionals. Responsible for logo design, brand character development, and social media content design.",
    challenge:
      "Crafting a professional trading identity that feels welcoming and approachable for beginner traders without being intimidating.",
    projectImages: [
      {
        src: "/portfolio/branding-consistrade.avif",
        alt: "Consistrade brand identity",
      },
    ],
    brandGuidelines: [
      {
        number: "01",
        title: "LOGO",
        description:
          "The logo establishes a confident identity for financial education while remaining clear and accessible to learners at every level.",
        images: [
          {
            src: "/portfolio/branding-consistrade1.avif",
            alt: "Consistrade logo",
            width: 2430,
            height: 2430,
          },
        ],
      },
      {
        number: "02",
        title: "LOGO MEANING",
        description:
          "The logo system reflects the core idea of disciplined growth in trading and financial learning: a clear, modern symbol that feels trustworthy and approachable for newcomers while staying professional for advanced learners.",
        images: [
          {
            src: "/portfolio/branding-consistrade2.avif",
            alt: "Consistrade logo meaning",
            width: 2430,
            height: 2430,
          },
        ],
      },
      {
        number: "03",
        title: "COLORS",
        description:
          "The color palette combines deep navy, royal blue, and bright purple tones to communicate trust, clarity, and growth in a professional trading ecosystem.",
        images: [],
      },
      {
        number: "04",
        title: "TYPOGRAPHY",
        description:
          "The typography uses a clean geometric sans serif style to reinforce clarity, precision, and accessible financial education for a wider audience.",
        images: [],
      },
      {
        number: "05",
        title: "ELEMENT",
        description:
          "A focused visual element system supports trading and learning content with consistent structure and clear information hierarchy.",
        images: [
          {
            src: "/portfolio/branding-consistrade5.avif",
            alt: "Consistrade visual elements",
            width: 4320,
            height: 2430,
          },
        ],
      },
      {
        number: "06",
        title: "CHARACTER",
        description:
          "The brand character adds a welcoming human touch, helping make complex trading concepts feel more approachable.",
        images: [
          {
            src: "/portfolio/branding-consistrade6.avif",
            alt: "Consistrade brand character",
            width: 4320,
            height: 2430,
          },
        ],
      },
    ],
    brandMeaning: [
      {
        src: "/portfolio/branding-consistrade2.avif",
        alt: "Consistrade logo meaning",
        width: 2430,
        height: 2430,
        description:
          "The mark combines clarity, confidence, and momentum to represent disciplined learning and consistent growth in trading education.",
      },
    ],
  },

  {
    slug: "hut-63-pelkat-pa",
    category: "BRAND IDENTITY",
    title: "63rd Anniversary of Pelkat PA GPIB Synod",
    username: "pelkatpa.sinode",
    bio: "Winning logo design for the 63rd Anniversary of Pelkat PA GPIB. 🏆",
    avatarImage: "/portfolio/hut63.avif",
    avatarText: "PA",
    avatarBg: "from-rose-500 to-pink-500",
    posts: [
      {
        src: "/portfolio/hut63.avif",
        alt: "PA logo 63rd anniversary",
        caption: "PA logo 63rd anniversary",
      },
    ],
    details: {
      client: "GPIB Synod Children's Ministry Board",
      industry: "Children Ministry",
      role: "Logo Designer",
      year: "2022",
      deliverables: "Logo design (competition entry)",
      tools: "Illustrator",
    },
    overview:
      "Winning logo design entry for the 63rd Anniversary of Pelkat PA GPIB organized by the GPIB Synod Children's Ministry Board. The design was selected nationwide and featured across all official 63rd-anniversary celebrations.",
    challenge:
      "Encapsulating children's ministry values and the celebration's 63-year milestone into an iconic, versatile visual symbol for various media formats.",
    projectImages: [
      {
        src: "/portfolio/branding-hut63.avif",
        alt: "63rd Anniversary of Pelkat PA GPIB brand identity",
      },
    ],
    brandGuidelines: [
      {
        number: "01",
        title: "LOGO",
        description:
          "The anniversary emblem combines the 63-year milestone with ministry symbolism in a distinctive mark for nationwide celebrations.",
        images: [
          {
            src: "/portfolio/branding-hut63a.avif",
            alt: "HUT 63 Pelkat PA GPIB logo",
            width: 2430,
            height: 2430,
          },
        ],
      },
      {
        number: "02",
        title: "MEANING",
        description:
          "The five meaning statements explain the celebration's central message, number symbolism, ministry identity, togetherness, and faith foundation.",
        images: [],
      },
      {
        number: "03",
        title: "CLEAR SPACE",
        description:
          "Clear space protects the logo's visual impact and ensures that it remains clean, balanced, and recognizable across different applications.",
        images: [
          {
            src: "/portfolio/branding-hut63c.avif",
            alt: "HUT 63 clear space guide",
            width: 4320,
            height: 2430,
          },
        ],
      },
      {
        number: "04",
        title: "SIZE",
        description:
          "The size guidelines define the minimum proportions needed to keep the logo clear, legible, and visually consistent across different applications.",
        images: [
          {
            src: "/portfolio/branding-hut63d.avif",
            alt: "HUT 63 size guideline",
            width: 4320,
            height: 2430,
          },
        ],
      },
      {
        number: "05",
        title: "COLORS",
        description:
          "The color palette reflects the joyful, meaningful, and faithful spirit of the 63rd Pelkat PA GPIB anniversary. The colors create a balance between celebration, unity, and a strong foundation of faith.",
        images: [],
      },
      {
        number: "06",
        title: "TYPOGRAPHY",
        description:
          "The typography is designed to feel clear, friendly, and celebratory, supporting the anniversary identity while keeping the message easy to read and accessible.",
        images: [],
      },
      {
        number: "07",
        title: "MERCHANDISE",
        description:
          "The merchandise extends the HUT 63 identity into physical products, creating a simple and memorable expression of the anniversary that can be shared and worn by the Pelkat PA community.",
        images: [
          {
            src: "/portfolio/branding-hut63g.avif",
            alt: "HUT 63 merchandise",
            width: 4320,
            height: 2430,
          },
        ],
      },
    ],
    brandMeaning: [
      {
        title: "01",
        src: "/portfolio/branding-hut63b.avif",
        alt: "HUT 63 meaning 01",
        width: 2430,
        height: 2430,
        description:
          "Represents the main celebration of the Pelkat PA GPIB anniversary.",
      },
      {
        title: "02",
        src: "/portfolio/branding-hut63b.avif",
        alt: "HUT 63 meaning 02",
        width: 2430,
        height: 2430,
        description:
          "The numbers 6 and 3 replace the letters G and B, symbolizing unity in diversity and the 63rd anniversary of Pelkat PA GPIB. The rice stalk represents humility.",
      },
      {
        title: "03",
        src: "/portfolio/branding-hut63b.avif",
        alt: "HUT 63 meaning 03",
        width: 2430,
        height: 2430,
        description:
          "The letters P and I stand for “Pemberita Injil” (Gospel Proclaimers).",
      },
      {
        title: "04",
        src: "/portfolio/branding-hut63b.avif",
        alt: "HUT 63 meaning 04",
        width: 2430,
        height: 2430,
        description:
          "The two overlapping hands symbolize unity, teamwork, and cooperation.",
      },
      {
        title: "05",
        src: "/portfolio/branding-hut63b.avif",
        alt: "HUT 63 meaning 05",
        width: 2430,
        height: 2430,
        description:
          "White represents faith as the foundation of every action, done for the glory of God.",
      },
    ],
  },

  {
    slug: "hut-67-pelkat-pa",
    category: "BRAND IDENTITY",
    title: "67th Anniversary of Pelkat PA GPIB Synod",
    username: "pelkatpa.sinode",
    bio: "Official visual identity for the 67th Pelkat PA GPIB Anniversary. 🕊️",
    avatarImage: "/portfolio/hut67.avif",
    avatarText: "PA",
    avatarBg: "from-blue-500 to-indigo-500",
    posts: [
      {
        src: "/portfolio/hut67.avif",
        alt: "Pelkat PA 67th anniversary logo",
        caption: "Pelkat PA 67th anniversary logo",
      },
    ],
    details: {
      client: "GPIB Synod Children's Ministry Board",
      industry: "Children Ministry",
      role: "Logo Designer",
      year: "2026",
      deliverables: "Logo design",
      tools: "Illustrator, Photoshop",
    },
    overview:
      "Official anniversary logo design for the 67th Anniversary of Pelkat PA GPIB organized by the GPIB Synod Children's Ministry Board, utilized nationwide across all commemoration events.",
    challenge:
      "Designing a meaningful celebration emblem that captures the nationwide history and mission of the GPIB children's ministry.",
    projectImages: [
      {
        src: "/portfolio/branding-hut67.avif",
        alt: "67th Anniversary of Pelkat PA GPIB brand identity",
      },
    ],
    brandGuidelines: [
      {
        number: "01",
        title: "LOGO",
        description:
          "The anniversary logo presents the 67th milestone as a clear, memorable emblem for official nationwide celebrations.",
        images: [],
      },
      {
        number: "04",
        title: "ELEMENT",
        description:
          "A coordinated visual language gives anniversary communications a consistent and celebratory character.",
        images: [],
      },
      {
        number: "05",
        title: "SUPPORTING ELEMENT",
        description:
          "Supporting graphics extend the anniversary identity across event materials while maintaining a unified presentation.",
        images: [],
      },
      {
        number: "06",
        title: "CHARACTER",
        description:
          "Character artwork can help make the anniversary message feel approachable and engaging for children and families.",
        images: [],
      },
    ],
  },
];

// ==========================================
// LOGO DESIGN
// ==========================================

export const logoSections: SectionData[] = [
  {
    title: "63rd Anniversary of Pelkat PA GPIB",
    username: "pelkatpa.pku",
    bio: "Winning anniversary emblem for Pelkat PA GPIB. 🏆",
    avatarImage: "/portfolio/hut63.avif",
    avatarText: "PA",
    avatarBg: "from-rose-500 to-pink-500",
    posts: [
      {
        src: "/portfolio/hut63.avif",
        alt: "PA logo 63rd anniversary",
        caption: "63rd anniversary Pelkat PA logo",
      },
    ],
    details: {
      client: "Dewan Pelayanan Anak Sinode GPIB",
      industry: "Children Ministry",
      role: "Logo Designer",
      year: "2022",
      deliverables: "National Competition Winner Emblem",
      tools: "Illustrator",
    },
    overview:
      "Sayembara desain logo HUT ke-63 Pelkat PA GPIB yang diselenggarakan oleh Dewan Pelayanan Anak Sinode GPIB. Logo terpilih sebagai juara dan digunakan secara nasional.",
    challenge:
      "Merging numeric elements with church motifs into a unified, celebratory circular mark used nationwide.",
  },
  {
    title: "67th Anniversary of Pelkat PA GPIB",
    username: "pelkatpa.pku",
    bio: "Official 67th anniversary visual mark. 🕊️",
    avatarImage: "/portfolio/hut67.avif",
    avatarText: "PA",
    avatarBg: "from-blue-500 to-indigo-500",
    posts: [
      {
        src: "/portfolio/hut67.avif",
        alt: "Pelkat PA 67th anniversary logo",
        caption: "67th anniversary Pelkat PA logo",
      },
    ],
    details: {
      client: "Dewan Pelayanan Anak Sinode GPIB",
      industry: "Children Ministry",
      role: "Logo Designer",
      year: "2026",
      deliverables: "Official National Anniversary Logo",
      tools: "Illustrator",
    },
    overview:
      "Desain logo peringatan HUT ke-67 Pelkat PA GPIB yang digunakan secara nasional untuk menggambarkan pelayanan dan pertumbuhan spiritual anak.",
    challenge:
      "Creating a fresh visual theme while respecting long-standing organizational identity and national application standards.",
  },
  {
    title: "GPIB Immanuel Pekanbaru",
    username: "gpib_immanuel_pku",
    bio: "Official church emblem and visual branding. 🙏🕊️",
    avatarImage: "/portfolio/gpib.avif",
    avatarText: "G",
    avatarBg: "from-amber-500 to-orange-400",
    posts: [
      {
        src: "/portfolio/gpib.avif",
        alt: "GPIB Immanuel Pekanbaru logo",
        caption: "GPIB Immanuel Pekanbaru logo design",
      },
    ],
    details: {
      client: "GPIB Immanuel Pekanbaru",
      industry: "Church",
      role: "Visual Designer",
      year: "2025",
      deliverables: "Logo Design, Branding, Mascot (Elof), Social Media & Video Editing",
      tools: "Illustrator, Photoshop, Premiere Pro",
    },
    overview:
      "Mendesain logo internal, mengembangkan branding visual, membuat karakter maskot Elof, serta memproduksi konten media sosial dan video untuk gereja.",
    challenge:
      "Reflecting traditional ecclesiastical values through modern graphic standards while introducing a friendly mascot.",
  },
  {
    title: "Joko Tuo Resort",
    username: "jokotuo_resort",
    bio: "Whale shark bone inspired resort logo & identity. 🌿🌊",
    avatarImage: "/portfolio/jokotuo.avif",
    avatarText: "JT",
    avatarBg: "from-emerald-700 to-green-600",
    posts: [
      {
        src: "/portfolio/jokotuo.avif",
        alt: "Joko Tuo Resort logo",
        caption: "Joko Tuo Resort logo design",
      },
    ],
    details: {
      client: "Joko Tuo Resort",
      industry: "Hospitality & Resort",
      role: "Logo Designer",
      year: "2022",
      deliverables: "Resort Logo & Visual Identity",
      tools: "Illustrator, Photoshop",
    },
    overview:
      "Desain logo dan identitas visual untuk resort di Jepara dengan konsep visual yang terinspirasi dari struktur tulang hiu paus.",
    challenge:
      "Translating abstract whale shark bone structures into a luxury, serene, and iconic hospitality brand mark.",
  },
  {
    title: "Consistrade",
    username: "consistrade",
    bio: "Sleek financial & trading education logo mark. 📈",
    avatarImage: "/portfolio/consistrade.avif",
    avatarText: "C",
    avatarBg: "from-indigo-600 to-blue-500",
    posts: [
      {
        src: "/portfolio/consistrade.avif",
        alt: "Consistrade logo",
        caption: "Consistrade logo design",
      },
    ],
    details: {
      client: "Consistrade",
      industry: "Financial & Trading Education",
      role: "Visual Designer",
      year: "2025",
      deliverables: "Logo Design, Character Design (Teddy), Social Media Assets",
      tools: "Illustrator, Photoshop, Canva",
    },
    overview:
      "Mendesain logo, mengembangkan karakter brand (Teddy), serta merancang konten media sosial untuk platform edukasi trading.",
    challenge:
      "Balancing professional corporate trading credibility with an accessible, friendly character-driven education style.",
  },
  {
    title: "Minci",
    username: "minci_brand",
    bio: "Personal brand logo for link owner & creator. 🐱✨",
    avatarImage: "/portfolio/minci.avif",
    avatarText: "M",
    avatarBg: "from-pink-400 to-rose-400",
    posts: [
      {
        src: "/portfolio/minci.avif",
        alt: "Minci logo",
        caption: "Minci personal brand logo",
      },
    ],
    details: {
      client: "Minci",
      industry: "Personal Brand / Content Creator",
      role: "Logo Designer",
      year: "2025",
      deliverables: "Personal Brand Logo & Monogram",
      tools: "Illustrator",
    },
    overview:
      "Mendesain logo personal brand milik Minci (istri Ko Mark dari Pivot Point), seorang link owner dan kreator konten vlog harian.",
    challenge:
      "Capturing a friendly, approachable, and engaging creator personality within a scalable vector mark.",
  },
  {
    title: "Nona Kirana",
    username: "nonakirana",
    bio: "Sophisticated trading & lifestyle community mark. 🌸",
    avatarImage: "/portfolio/kirana.avif",
    avatarText: "NK",
    avatarBg: "from-pink-300 to-purple-400",
    posts: [
      {
        src: "/portfolio/kirana.avif",
        alt: "Nona Kirana logo",
        caption: "Nona Kirana logo design",
      },
    ],
    details: {
      client: "Nona Kirana",
      industry: "Trading Education & Lifestyle",
      role: "Logo Designer",
      year: "2026",
      deliverables: "Logo Design & Visual Identity",
      tools: "Illustrator",
    },
    overview:
      "Mendesain logo dan identitas visual untuk komunitas trading yang menggabungkan edukasi finansial, trading, dan lifestyle dengan gaya dewasa serta elegan.",
    challenge:
      "Crafting a sophisticated and feminine aesthetic that still communicates financial strength and education.",
  },
  {
    title: "Sinyal Ordal",
    username: "sinyalordal",
    bio: "Bold & masculine trading community mark. 📡",
    avatarImage: "/portfolio/sinyalordal.avif",
    avatarText: "SO",
    avatarBg: "from-cyan-500 to-blue-600",
    posts: [
      {
        src: "/portfolio/sinyalordal.avif",
        alt: "Sinyal Ordal logo",
        caption: "Sinyal Ordal logo design",
      },
    ],
    details: {
      client: "Sinyal Ordal",
      industry: "Trading Education & Community",
      role: "Logo Designer",
      year: "2025",
      deliverables: "Logo Design & Brand Identity",
      tools: "Illustrator",
    },
    overview:
      "Mendesain logo dan identitas visual komunitas edukasi finansial, trading, dan lifestyle dengan arahan visual yang bebas, maskulin, dan berkarakter.",
    challenge:
      "Combining high-tech signal metaphors with a strong, confident, and edgy community visual identity.",
  },
  {
    title: "Soleste",
    username: "soleste_official",
    bio: "Promotional & lifestyle skincare brand mark. ✨",
    avatarImage: "/portfolio/soleste.avif",
    avatarText: "S",
    avatarBg: "from-amber-400 to-yellow-600",
    posts: [
      {
        src: "/portfolio/soleste.avif",
        alt: "Soleste logo",
        caption: "Soleste logo design",
      },
    ],
    details: {
      client: "Soleste",
      industry: "Skincare & Beauty",
      role: "Brand Designer",
      year: "2024",
      deliverables: "Logo Design, Branding, Social Media Design",
      tools: "Illustrator, Photoshop",
    },
    overview:
      "Mendesain logo, membangun identitas visual, serta merancang komunikasi media sosial yang memadukan konten promosi, lifestyle, dan beauty.",
    challenge:
      "Balancing aesthetic elegance with commercial promotional flexibility across digital skincare channels.",
  },
  {
    title: "Pivot Point by Mark Liem",
    username: "pivotpoint_markliem",
    bio: "Smart & professional trader community rebranding. 🎯",
    avatarImage: "/portfolio/pivot.avif",
    avatarText: "PP",
    avatarBg: "from-slate-700 to-zinc-900",
    posts: [
      {
        src: "/portfolio/pivot.avif",
        alt: "Pivot Point logo",
        caption: "Pivot Point logo redesign",
      },
    ],
    details: {
      client: "Mark Liem",
      industry: "Trading Education & Community",
      role: "Brand Designer",
      year: "2026",
      deliverables: "Logo Redesign & Rebranding System",
      tools: "Illustrator, Photoshop",
    },
    overview:
      "Melakukan rebranding dan redesign logo untuk memperkuat positioning sebagai komunitas trader yang cerdas, profesional, dan berorientasi edukasi.",
    challenge:
      "Evolving an existing trading mark into a modern, high-level corporate identity that appeals to modern traders.",
  },
  {
    title: "Raka Trabas SNR",
    username: "rakatrabas",
    bio: "Strong & dynamic trading community logo. 🚴‍♂️",
    avatarImage: "/portfolio/raka.avif",
    avatarText: "RT",
    avatarBg: "from-orange-500 to-red-500",
    posts: [
      {
        src: "/portfolio/raka.avif",
        alt: "Raka Trabas SNR logo",
        caption: "Raka Trabas SNR logo design",
      },
    ],
    details: {
      client: "Raka Trabas SNR",
      industry: "Trading Education & Community",
      role: "Logo Designer",
      year: "2025",
      deliverables: "Logo Design & Visual Identity",
      tools: "Illustrator, Photoshop",
    },
    overview:
      "Mendesain logo dan identitas visual komunitas trading yang berfokus pada edukasi finansial dan lifestyle dengan konsep maskulin dan kuat.",
    challenge:
      "Translating high-energy, powerful community traits into a sleek, recognizable visual logo mark.",
  },
];

// ==========================================
// BRAND PROJECT CASE STUDIES ONLY
// ==========================================

const hut67BrandGuidelines: BrandGuidelineSection[] = [
  {
    number: "01",
    title: "LOGO",
    description:
      "The HUT 67 logo represents 67 years of Pelkat PA GPIB nurturing children to grow in faith, love, and togetherness.",
    images: [
      {
        src: "/portfolio/branding-hut671.avif",
        alt: "HUT 67 Pelkat PA GPIB logo",
        width: 2430,
        height: 2430,
      },
    ],
  },
  {
    number: "03",
    title: "LOGO STRUCTURE",
    description:
      "The logo structure defines the relationship and proportion of each visual element to maintain a consistent and recognizable identity.",
    images: [
      {
        src: "/portfolio/branding-hut672.avif",
        alt: "HUT 67 logo structure",
        width: 4320,
        height: 2430,
      },
    ],
  },
  {
    number: "04",
    title: "CLEAR SPACE",
    description:
      "The clear space ensures the HUT 67 logo remains visible, balanced, and recognizable across different applications.",
    images: [
      {
        src: "/portfolio/branding-hut673.avif",
        alt: "HUT 67 logo clear space guide",
        width: 4320,
        height: 2430,
      },
    ],
  },
  {
    number: "05",
    title: "COLORS",
    description: "",
    images: [],
  },
  {
    number: "06",
    title: "TYPOGRAPHY",
    description: "",
    images: [],
  },
  {
    number: "07",
    title: "CHARACTER",
    description:
      "The characters represent the Pelkat PA family across three generations: Oma and Opa, Mama and Papa, Grace and Patrick, and two young ministry volunteers—a male and female servant. Together, they represent family, togetherness, and the shared journey of growing in faith across generations.",
    images: [
      {
        src: "/portfolio/branding-hut677.avif",
        alt: "HUT 67 Pelkat PA family characters",
        width: 4320,
        height: 2430,
      },
    ],
  },
  {
    number: "08",
    title: "MERCHANDISE",
    description:
      "The merchandise features T-shirts in sand and baby pink, creating a warm, youthful, and approachable expression of the HUT 67 visual identity.",
    images: [
      {
        src: "/portfolio/branding-hut678.avif",
        alt: "HUT 67 merchandise T-shirts in sand and baby pink",
        width: 4320,
        height: 2430,
      },
    ],
  },
];

const hut67BrandMeaning: BrandMeaningItem[] = [
  {
    title: "01 — Dandelion",
    src: "/portfolio/branding-hut67a.avif",
    alt: "HUT 67 dandelion meaning",
    width: 2430,
    height: 2430,
    description:
      "Symbolizes growing faith. Like a dandelion spreading its seeds, children are called to keep growing in the Lord.",
  },
  {
    title: "02 — Number 67",
    src: "/portfolio/branding-hut67b.avif",
    alt: "HUT 67 number 67 meaning",
    width: 2430,
    height: 2430,
    description:
      "Represents 67 years of Pelkat PA GPIB nurturing children in faith and Christ's love. The 67 forms a sprout, symbolizing the seed of faith growing into the church's next generation.",
  },
  {
    title: "03 — 7 Seeds",
    src: "/portfolio/branding-hut67c.avif",
    alt: "HUT 67 seven seeds meaning",
    width: 2430,
    height: 2430,
    description:
      "Represents GPIB children growing daily under God's care and love. The pink circles symbolize God's blessings carried by each child to become a blessing to others.",
  },
  {
    title: "04 — Flying Seed",
    src: "/portfolio/branding-hut67d.avif",
    alt: "HUT 67 flying seed meaning",
    width: 2430,
    height: 2430,
    description:
      "Symbolizes Pelkat PA being sent to share God's love through Diakonia (serving), Marturia (witnessing), and Koinonia (fellowship).",
  },
  {
    title: "05 — Number 7",
    src: "/portfolio/branding-hut67e.avif",
    alt: "HUT 67 number 7 meaning",
    width: 2430,
    height: 2430,
    description:
      "The long downward stroke represents children rooted deeply in God's Word, enabling them to grow strong and steadfast.",
  },
  {
    title: "06 — Text Color & White Outline",
    src: "/portfolio/branding-hut67f.avif",
    alt: "HUT 67 text color and white outline meaning",
    width: 2430,
    height: 2430,
    description:
      "The colors represent the joy, diversity, talents, and happiness of children growing together as God's family. The white outline symbolizes God's presence, protection, and love over every child's growth.",
  },
];

export const projectCaseStudies: SectionData[] = brandSections.map(
  (project) => ({
    ...project,

    brandGuidelines:
      project.slug === "hut-67-pelkat-pa"
        ? hut67BrandGuidelines
        : project.brandGuidelines,
    brandMeaning:
      project.slug === "hut-67-pelkat-pa"
        ? hut67BrandMeaning
        : project.brandMeaning,

    category: project.category ?? "BRAND IDENTITY",

    slug:
      project.slug ??
      project.title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, ""),

    bigIdea: project.bigIdea ?? project.overview,

    projectImages: project.projectImages ?? project.posts,
  })
);

// ==========================================
// GET BRAND PROJECT BY SLUG
// ==========================================

export function getProjectBySlug(slug: string) {
  return projectCaseStudies.find((project) => project.slug === slug);
}
