import type { PortfolioCollection } from "@/types/portfolio";

export type { PortfolioCollection } from "@/types/portfolio";

type Locale = "en" | "id";

const portfolioEntryTranslations: Record<
  string,
  Record<Locale, Partial<PortfolioCollection>>
> = {
  "social-media-design": {
    en: {
      title: "Social Media Design",
      category: "CREATIVE DIRECTION",
      tagline:
        "Editorial social media systems with clean layouts and consistent visual rhythm.",
      description:
        "Editorial social media systems with clean layouts and consistent branding.",
      overview:
        "Editorial social media systems designed to look refined, coherent, and premium across feed, story, and campaign touchpoints.",
      challenge:
        "Maintaining brand consistency across diverse social media platforms while keeping individual post designs visually engaging and culturally relevant for different audiences.",
      solution:
        "Developed a flexible grid system, uniform typographic rules, and curated color palettes that allow for high content variety without compromising overall brand identity.",
      outcome:
        "Increased visual consistency across client social feeds, resulting in higher brand recognition and an average 35% growth in audience engagement.",
    },
    id: {
      title: "Desain Media Sosial",
      category: "DIREKSI KREATIF",
      tagline:
        "Sistem media sosial editorial dengan tata letak bersih dan ritme visual yang konsisten.",
      description:
        "Sistem media sosial editorial dengan tata letak bersih dan branding yang konsisten.",
      overview:
        "Sistem media sosial editorial yang dirancang agar tampil rapi, konsisten, dan premium di feed, story, serta semua titik sentuh kampanye.",
      challenge:
        "Menjaga konsistensi merek di berbagai platform media sosial sambil tetap membuat setiap desain individual menarik dan relevan secara budaya untuk audiens yang berbeda.",
      solution:
        "Mengembangkan sistem grid yang fleksibel, aturan tipografi yang seragam, serta palet warna yang terkurasi agar konten tetap beragam tanpa mengorbankan identitas merek secara keseluruhan.",
      outcome:
        "Meningkatkan konsistensi visual di feed media sosial klien, menghasilkan pengenalan merek yang lebih kuat dan rata-rata pertumbuhan engagement audiens 35%.",
    },
  },
  "brand-identity": {
    en: {
      title: "Brand Identity",
      category: "CREATIVE DIRECTION",
      tagline:
        "Building cohesive brand experiences through strategic visual identity and storytelling.",
      description:
        "Building cohesive brand experiences through strategic visual identity, social media systems, content design, and creative storytelling.",
      overview:
        "A comprehensive branding project that combines visual identity, social media content, campaign design, motion graphics, and digital storytelling into one consistent brand ecosystem.",
      challenge:
        "Traditional financial and community platforms often suffer from visual rigidity. The goal was to humanize the identity without losing professional credibility.",
      solution:
        "Crafted a modern brand design language with warm, approachable typography, structured grids, and versatile brand marks adaptable across digital and physical touchpoints.",
      outcome:
        "Successfully launched the refreshed brand identity, driving over 40% higher digital interaction and establishing a distinct market presence.",
    },
    id: {
      title: "Identitas Brand",
      category: "DIREKSI KREATIF",
      tagline:
        "Membangun pengalaman merek yang kohesif melalui identitas visual strategis dan storytelling.",
      description:
        "Membangun pengalaman merek yang kohesif melalui identitas visual strategis, sistem media sosial, desain konten, dan storytelling kreatif.",
      overview:
        "Proyek branding yang komprehensif ini memadukan identitas visual, konten media sosial, desain kampanye, motion graphics, dan storytelling digital menjadi satu ekosistem merek yang konsisten.",
      challenge:
        "Platform finansial dan komunitas tradisional sering terlihat kaku secara visual. Tujuannya adalah memanusiakan identitas tanpa kehilangan kredibilitas profesional.",
      solution:
        "Menciptakan bahasa desain merek yang modern dengan tipografi yang hangat dan mudah didekati, grid yang terstruktur, serta brand mark yang fleksibel untuk berbagai titik sentuh digital dan fisik.",
      outcome:
        "Berhasil meluncurkan identitas merek yang diperbarui, mendorong interaksi digital lebih dari 40% dan membangun kehadiran pasar yang khas.",
    },
  },
  "logo-design": {
    en: {
      title: "Logo Design",
      category: "VISUAL IDENTITY",
      tagline:
        "Timeless logo systems designed for brands, churches, and communities.",
      description:
        "Timeless logo systems designed for brands, churches, and communities.",
      overview:
        "Timeless logo systems built for communities, churches, and brands that need a confident and lasting identity.",
      challenge:
        "Creating symbolic logos that capture deep organizational values while remaining minimalist, scalable, and versatile for multi-medium reproduction.",
      solution:
        "Focused on geometry, purposeful symbolism, and strong typographic balance to produce clean marks that function seamlessly from tiny digital icons to large event banners.",
      outcome:
        "Delivered iconic visual marks embraced by client communities and easily implemented across all organizational collateral.",
    },
    id: {
      title: "Desain Logo",
      category: "IDENTITAS VISUAL",
      tagline:
        "Sistem logo yang timeless untuk brand, gereja, dan komunitas.",
      description:
        "Sistem logo yang timeless untuk brand, gereja, dan komunitas.",
      overview:
        "Sistem logo yang timeless dibuat untuk komunitas, gereja, dan brand yang membutuhkan identitas yang percaya diri dan tahan lama.",
      challenge:
        "Menciptakan logo simbolik yang menangkap nilai organisasi secara mendalam sekaligus tetap minimalis, scalable, dan serbaguna untuk reproduksi multi-media.",
      solution:
        "Berfokus pada geometri, simbolisme yang bermakna, dan keseimbangan tipografi yang kuat untuk menghasilkan marka yang bersih dan berfungsi dengan mulus dari ikon digital kecil hingga spanduk acara besar.",
      outcome:
        "Menyampaikan marka visual ikonik yang diterima komunitas klien dan mudah diterapkan di seluruh materi organisasi.",
    },
  },
  "thumbnail-design": {
    en: {
      title: "Thumbnail Design",
      category: "CONTENT DESIGN",
      tagline:
        "High-performing vertical content & thumbnails (1080x1920) crafted with strong visual hierarchy.",
      description:
        "High-performing YouTube Shorts, TikTok, and Instagram Reels thumbnails crafted in vertical 1080x1920 format.",
      overview:
        "High-performing vertical thumbnails (1080x1920) designed to balance clarity, storytelling, and premium visual hierarchy for mobile-first content platforms.",
      challenge:
        "Standing out in fast-scrolling mobile video feeds where viewers make click decisions in milliseconds.",
      solution:
        "Engineered high-contrast vertical visual compositions with bold focal points, expressive typography, and clear subject isolation optimized for 9:16 ratio.",
      outcome:
        "Achieved measurable increases in Click-Through Rates (CTR) across client social and short-form video channels.",
    },
    id: {
      title: "Desain Thumbnail",
      category: "DESAIN KONTEN",
      tagline:
        "Konten vertikal dan thumbnail berkinerja tinggi (1080x1920) yang dibuat dengan hierarki visual yang kuat.",
      description:
        "Thumbnail YouTube Shorts, TikTok, dan Instagram Reels yang berperforma tinggi dibuat dalam format vertikal 1080x1920.",
      overview:
        "Thumbnail vertikal berkinerja tinggi (1080x1920) yang dirancang untuk menyeimbangkan kejelasan, storytelling, dan hierarki visual premium untuk platform konten mobile-first.",
      challenge:
        "Bersaing di feed video mobile yang bergerak cepat, di mana penonton mengambil keputusan klik dalam hitungan milidetik.",
      solution:
        "Mendesain komposisi visual vertikal berkontras tinggi dengan titik fokus yang tegas, tipografi ekspresif, dan isolasi objek yang jelas yang dioptimalkan untuk rasio 9:16.",
      outcome:
        "Mencapai peningkatan CTR yang terukur di kanal media sosial dan video pendek klien.",
    },
  },
  "character-design": {
    en: {
      title: "Character Design",
      category: "CHARACTER DESIGN",
      tagline:
        "Original mascots and character illustrations created to make each brand feel memorable, approachable, and distinct.",
      description:
        "Original mascot and character design work built to reflect each brand's identity, values, and audience in a warm, memorable way.",
      overview:
        "A collection of character-driven visual identities created to translate brand personality into approachable, expressive illustration.",
      challenge:
        "Creating character identities that feel consistent with each brand while remaining memorable, expressive, and easy to apply across digital channels and campaigns.",
      solution:
        "Developed original mascot and illustration systems rooted in the brand's tone, audience, and values so each character could carry the identity naturally across content and campaigns.",
      outcome:
        "Delivered distinct character systems that help each brand feel more human, relatable, and recognizable in its communication.",
    },
    id: {
      title: "Desain Karakter",
      category: "DESAIN KARAKTER",
      tagline:
        "Maskot dan ilustrasi karakter original yang dibuat agar setiap brand terasa mudah diingat, dekat, dan khas.",
      description:
        "Pekerjaan desain maskot dan karakter original yang dibangun untuk merefleksikan identitas, nilai, dan audiens setiap brand dengan cara yang hangat dan mudah diingat.",
      overview:
        "Kumpulan identitas visual berbasis karakter yang dibuat untuk menerjemahkan kepribadian merek menjadi ilustrasi yang mudah didekati dan ekspresif.",
      challenge:
        "Menciptakan identitas karakter yang konsisten dengan setiap brand sekaligus tetap mudah diingat, ekspresif, dan mudah diterapkan di kanal digital serta kampanye.",
      solution:
        "Mengembangkan sistem maskot dan ilustrasi original yang berakar pada tone, audiens, dan nilai brand sehingga setiap karakter dapat membawa identitas secara alami di berbagai konten dan kampanye.",
      outcome:
        "Menghasilkan sistem karakter yang khas sehingga setiap brand terasa lebih manusiawi, dekat, dan mudah dikenali dalam komunikasinya.",
    },
  },
  "live-stream-design": {
    en: {
      title: "Live Stream Design",
      category: "CONTENT DESIGN",
      tagline:
        "Creative graphics for live streaming overlays, events, and posters.",
      description:
        "Creative graphics for live streaming overlays, events, and posters.",
      overview:
        "A collection of visually engaging design assets created to support live events, stream overlays, and promotional visuals.",
      challenge:
        "Creating clean and attention-grabbing graphics that remain readable in live motion and under fast-moving broadcast conditions.",
      solution:
        "Built highly readable overlays and event graphics using clear hierarchy, strong color contrast, and consistent brand styling.",
      outcome:
        "Improved the visual quality and professionalism of live stream branding across multiple events and community channels.",
    },
    id: {
      title: "Desain Live Stream",
      category: "DESAIN KONTEN",
      tagline:
        "Grafis kreatif untuk overlay live stream, event, dan poster.",
      description:
        "Grafis kreatif untuk overlay live stream, event, dan poster.",
      overview:
        "Kumpulan aset desain yang menarik secara visual untuk mendukung acara live, overlay stream, dan visual promosi.",
      challenge:
        "Membuat grafis yang bersih dan menarik perhatian serta tetap mudah dibaca di kondisi live motion dan siaran yang bergerak cepat.",
      solution:
        "Membangun overlay dan grafis event yang sangat mudah dibaca menggunakan hierarki yang jelas, kontras warna yang kuat, dan gaya merek yang konsisten.",
      outcome:
        "Meningkatkan kualitas visual dan profesionalisme branding live stream di berbagai event dan kanal komunitas.",
    },
  },
  "desain-lain": {
    en: {
      title: "Print Design",
      category: "PRINT DESIGN",
      tagline:
        "A collection of print, campaign, promotional, and apparel design projects.",
      description:
        "A collection of graphic design projects including backdrops, banners, advertising campaigns, promotional materials, and apparel design.",
      overview:
        "A selection of promotional and print-focused projects created for different visual communication needs.",
      challenge:
        "Adapting visual concepts to different campaign needs, print formats, advertising materials, and apparel applications.",
      solution:
        "Applied graphic design fundamentals to create clear, engaging visuals that work across physical and promotional media.",
      outcome:
        "A varied selection that demonstrates adaptability across print, advertising, campaign, and merchandise applications.",
    },
    id: {
      title: "Desain Cetak",
      category: "DESAIN CETAK",
      tagline:
        "Koleksi proyek desain cetak, kampanye, promosi, dan apparel.",
      description:
        "Koleksi proyek desain grafis yang mencakup backdrop, banner, kampanye iklan, materi promosi, dan desain apparel.",
      overview:
        "Pilihan proyek promosi dan fokus cetak yang dibuat untuk kebutuhan komunikasi visual yang berbeda.",
      challenge:
        "Menyesuaikan konsep visual dengan kebutuhan kampanye yang berbeda, format cetak, materi promosi, dan aplikasi apparel.",
      solution:
        "Menerapkan prinsip desain grafis untuk menciptakan visual yang jelas, menarik, dan berfungsi di media fisik maupun promosi.",
      outcome:
        "Koleksi yang beragam yang menunjukkan kemampuan adaptasi di berbagai aplikasi cetak, iklan, kampanye, dan merchandise.",
    },
  },
};

const portfolioItemTextMap: Record<string, Record<Locale, string>> = {
  "Brand Identity": { en: "Brand Identity", id: "Identitas Brand" },
  "Social Media Design": { en: "Social Media Design", id: "Desain Media Sosial" },
  "Logo Design": { en: "Logo Design", id: "Desain Logo" },
  "Thumbnail Design": { en: "Thumbnail Design", id: "Desain Thumbnail" },
  "Character Design": { en: "Character Design", id: "Desain Karakter" },
  "Live Stream Design": { en: "Live Stream Design", id: "Desain Live Stream" },
  "Print Design": { en: "Print Design", id: "Desain Cetak" },
  "Branding": { en: "Branding", id: "Branding" },
};

function localizePortfolioCollection(
  collection: PortfolioCollection,
  lang: Locale
): PortfolioCollection {
  const translation = portfolioEntryTranslations[collection.slug];
  const translatedTitle = translation?.[lang]?.title ?? collection.title;
  const translatedCategory = translation?.[lang]?.category ?? collection.category;
  const translatedTagline = translation?.[lang]?.tagline ?? collection.tagline;
  const translatedDescription = translation?.[lang]?.description ?? collection.description;
  const translatedOverview = translation?.[lang]?.overview ?? collection.overview;
  const translatedChallenge = translation?.[lang]?.challenge ?? collection.challenge;
  const translatedSolution = translation?.[lang]?.solution ?? collection.solution;
  const translatedOutcome = translation?.[lang]?.outcome ?? collection.outcome;

  return {
    ...collection,
    title: translatedTitle,
    category: translatedCategory,
    tagline: translatedTagline,
    description: translatedDescription,
    overview: translatedOverview,
    challenge: translatedChallenge,
    solution: translatedSolution,
    outcome: translatedOutcome,
    meta: {
      ...collection.meta,
      client: lang === "id" && collection.meta.client === "UKSW Salatiga" ? "UKSW Salatiga" : collection.meta.client,
    },
    items: collection.items.map((item) => {
      const entry = portfolioItemTextMap[item.title];
      return {
        ...item,
        title: entry ? entry[lang] : item.title,
        subtitle:
          lang === "id" && item.subtitle === "Feed Post"
            ? "Post Feed"
            : item.subtitle,
        description:
          lang === "id" && item.description === "Lookbook design — open to explore the full piece."
            ? "Desain lookbook — buka untuk melihat seluruh karya."
            : item.description,
      };
    }),
  };
}

export const portfolioCollections: PortfolioCollection[] = [
  // =========================================================
  // 1. SOCIAL MEDIA DESIGN
  // =========================================================
  {
    id: 1,
    slug: "social-media-design",
    title: "Social Media Design",
    category: "CREATIVE DIRECTION",
    tagline:
      "Editorial social media systems with clean layouts and consistent visual rhythm.",
    description:
      "Editorial social media systems with clean layouts and consistent branding.",

    cover: "/images/portfolio/uksw-1.avif",

    overview:
      "Editorial social media systems designed to look refined, coherent, and premium across feed, story, and campaign touchpoints.",

    challenge:
      "Maintaining brand consistency across diverse social media platforms while keeping individual post designs visually engaging and culturally relevant for different audiences.",

    solution:
      "Developed a flexible grid system, uniform typographic rules, and curated color palettes that allow for high content variety without compromising overall brand identity.",

    outcome:
      "Increased visual consistency across client social feeds, resulting in higher brand recognition and an average 35% growth in audience engagement.",

    meta: {
      client: "UKSW Salatiga",
      industry: "Education",
      role: "Lead Visual Designer",
      year: "2024",
      deliverables: "Social Templates, Feed Systems",
      tools: "Figma, Photoshop",
    },

    gallery: [
      {
        type: "full",
        src: "/portfolio/uksw-1.avif",
        alt: "UKSW Mendunia - Feed Post",
        caption:
          "UKSW Mendunia — Editorial Feed Layout & Typography",
      },
      {
        type: "half",
        src: "/portfolio/uksw-2.avif",
        alt: "Kampus Tour & Fasilitas",
        caption:
          "Kampus Tour — Architectural & Visual Overlay",
      },
      {
        type: "half",
        src: "/portfolio/uksw-3.avif",
        alt: "PMB 2026 Opening",
        caption:
          "PMB 2026 — High-Impact Announcement Grid",
      },
      {
        type: "full",
        src: "/portfolio/uksw-4.avif",
        alt: "Akreditasi Unggul",
        caption:
          "Akreditasi Unggul — Institutional Pride Layout",
      },
      {
        type: "half",
        src: "/portfolio/uksw-5.avif",
        alt: "UKSW Menyapa Event",
        caption:
          "UKSW Menyapa — Dynamic Event Coverage",
      },
      {
        type: "half",
        src: "/portfolio/uksw-6.avif",
        alt: "Creative Minority Series",
        caption:
          "Creative Minority — Student Talent Storytelling",
      },
    ],

    items: [
      {
        title: "UKSW Mendunia",
        subtitle: "Feed Post",
        description:
          "Editorial social media system crafted for UKSW admissions and campus life with a calm editorial rhythm.",
        cover: "/portfolio/uksw-1.avif",
        images: ["/portfolio/uksw-1.avif"],
      },
      {
        title: "Kampus Tour & Fasilitas",
        subtitle: "Carousel Design",
        description:
          "Highlighting campus spaces with immersive architectural photography and clean graphic overlays.",
        cover: "/portfolio/uksw-2.avif",
        images: ["/portfolio/uksw-2.avif"],
      },
      {
        title: "PMB 2026 Opening",
        subtitle: "Announcement",
        description:
          "High-impact announcement grid layout designed to drive student engagement and registration.",
        cover: "/portfolio/uksw-3.avif",
        images: ["/portfolio/uksw-3.avif"],
      },
      {
        title: "Akreditasi Unggul",
        subtitle: "Institutional Post",
        description:
          "Institutional pride delivered through structured editorial design systems and sharp typography.",
        cover: "/portfolio/uksw-4.avif",
        images: ["/portfolio/uksw-4.avif"],
      },
      {
        title: "UKSW Menyapa Event",
        subtitle: "Event Coverage",
        description:
          "Dynamic event coverage assets designed for multi-platform social engagement and visibility.",
        cover: "/portfolio/uksw-5.avif",
        images: ["/portfolio/uksw-5.avif"],
      },
      {
        title: "Creative Minority Series",
        subtitle: "Community Showcase",
        description:
          "Showcasing student creativity and diverse talents through curated visual storytelling.",
        cover: "/portfolio/uksw-6.avif",
        images: ["/portfolio/uksw-6.avif"],
      },
    ],
  },

  // =========================================================
  // 2. BRAND IDENTITY
  // =========================================================
  {
    id: 2,
    slug: "brand-identity",
    title: "Brand Identity",
    category: "CREATIVE DIRECTION",
    tagline:
      "Building cohesive brand experiences through strategic visual identity and storytelling.",
    description:
      "Building cohesive brand experiences through strategic visual identity, social media systems, content design, and creative storytelling.",

    cover: "/portfolio/jendela-finansial.avif",

    overview:
      "A comprehensive branding project that combines visual identity, social media content, campaign design, motion graphics, and digital storytelling into one consistent brand ecosystem.",

    challenge:
      "Traditional financial and community platforms often suffer from visual rigidity. The goal was to humanize the identity without losing professional credibility.",

    solution:
      "Crafted a modern brand design language with warm, approachable typography, structured grids, and versatile brand marks adaptable across digital and physical touchpoints.",

    outcome:
      "Successfully launched the refreshed brand identity, driving over 40% higher digital interaction and establishing a distinct market presence.",

    meta: {
      client: "Jendela Finansial",
      industry: "Finance & Lifestyle",
      role: "Brand Strategist & Lead Designer",
      year: "2024",
      deliverables:
        "Brand Identity, Typography Systems, Brand Guidelines",
      tools: "Illustrator, Figma, Photoshop",
    },

    featured: true,

    gallery: [
      {
        type: "full",
        src: "/portfolio/jendela-finansial.avif",
        alt: "Brand Identity Overview",
        caption: "Brand Identity System & Editorial Grid",
      },
      {
        type: "half",
        src: "/portfolio/mark.avif",
        alt: "Social Media Application",
        caption: "Digital Application & Content Templates",
      },
      {
        type: "half",
        src: "/portfolio/character.avif",
        alt: "Brand Character Integration",
        caption: "Mascot & Character Brand Asset",
      },
      {
        type: "full",
        src: "/portfolio/hut63.avif",
        alt: "HUT 63 Pelkat PA",
        caption: "HUT 63 — Brand Identity & Campaign Visuals",
      },
      {
        type: "full",
        src: "/portfolio/hut67.avif",
        alt: "HUT 67 Pelkat PA",
        caption: "HUT 67 — Brand Identity & Campaign Visuals",
      },
      {
        type: "full",
        src: "/portfolio/soleste.avif",
        alt: "Soleste Brand Identity",
        caption: "Soleste — Brand Identity & Visual Communication",
      },
    ],

    items: [
      {
        title: "Brand Identity",
        subtitle: "Visual Identity",
        description:
          "Designed a cohesive brand identity system including colors, typography, layouts, and supporting visual elements.",
        cover: "/portfolio/jendela-finansial.avif",
        images: ["/portfolio/jendela-finansial.avif"],
      },
      {
        title: "Social Media Design",
        subtitle: "Content Design",
        description:
          "Created engaging Instagram feeds, carousel posts, stories, promotional graphics, and educational content.",
        cover: "/portfolio/mark.avif",
        images: ["/portfolio/mark.avif"],
      },
      {
        title: "HUT 63",
        subtitle: "Brand Identity",
        description:
          "Visual identity and campaign design created for HUT 63 Pelkat PA.",
        cover: "/portfolio/hut63.avif",
        images: ["/portfolio/hut63.avif"],
      },
      {
        title: "HUT 67",
        subtitle: "Brand Identity",
        description:
          "Visual identity and campaign design created for HUT 67 Pelkat PA.",
        cover: "/portfolio/hut67.avif",
        images: ["/portfolio/hut67.avif"],
      },
      {
        title: "Soleste",
        subtitle: "Brand Identity",
        description:
          "Brand identity and visual communication design developed for Soleste.",
        cover: "/portfolio/soleste.avif",
        images: ["/portfolio/soleste.avif"],
      },
    ],
  },

  // =========================================================
  // 3. LOGO DESIGN
  // =========================================================
  {
    id: 3,
    slug: "logo-design",
    title: "Logo Design",
    category: "VISUAL IDENTITY",
    tagline:
      "Timeless logo systems designed for brands, churches, and communities.",
    description:
      "Timeless logo systems designed for brands, churches, and communities.",

    cover: "/portfolio/pelkatpa.avif",

    overview:
      "Timeless logo systems built for communities, churches, and brands that need a confident and lasting identity.",

    challenge:
      "Creating symbolic logos that capture deep organizational values while remaining minimalist, scalable, and versatile for multi-medium reproduction.",

    solution:
      "Focused on geometry, purposeful symbolism, and strong typographic balance to produce clean marks that function seamlessly from tiny digital icons to large event banners.",

    outcome:
      "Delivered iconic visual marks embraced by client communities and easily implemented across all organizational collateral.",

    meta: {
      client: "Multiple Organizations",
      industry: "Community & Culture",
      role: "Logo & Brand Mark Specialist",
      year: "2023 - 2026",
      deliverables:
        "Logo Marks, Vector Assets, Brand Usage Guidelines",
      tools: "Illustrator, Figma",
    },

    gallery: [
      {
        type: "full",
        src: "/portfolio/pelkatpa.avif",
        alt: "HUT 63 Pelkat PA Logo",
        caption: "HUT 63 Pelkat PA — Commemorative Identity",
      },
      {
        type: "half",
        src: "/portfolio/sinyalordal.avif",
        alt: "Sinyal Ordal Symbol",
        caption: "Sinyal Ordal — Brand Symbol Concept",
      },
      {
        type: "half",
        src: "/portfolio/uksw.avif",
        alt: "Community Logo Mark",
        caption: "Community Identity & Vector Grid",
      },
    ],

    items: [
      {
        title: "HUT 63 Pelkat PA",
        subtitle: "HUT 63 Pelkat PA",
        description:
          "A commemorative logo direction with a clear and memorable identity.",
        cover: "/portfolio/pelkatpa.avif",
        images: ["/portfolio/pelkatpa.avif"],
      },
      {
        title: "GPIB Immanuel Pekanbaru",
        subtitle: "GPIB Immanuel Pekanbaru",
        description:
          "Community identity work built with warmth, clarity, and lasting structure.",
        cover: "/portfolio/pelkatpa.avif",
        images: ["/portfolio/pelkatpa.avif"],
      },
      {
        title: "Sinyal Ordal",
        subtitle: "Sinyal Ordal",
        description:
          "Logo application and brand symbol direction for a recognizable visual presence.",
        cover: "/portfolio/sinyalordal.avif",
        images: ["/portfolio/sinyalordal.avif"],
      },
    ],
  },

  // =========================================================
  // 4. THUMBNAIL DESIGN (FORMAT 1080x1920 - PORTRAIT/VERTICAL)
  // =========================================================
  {
    id: 4,
    slug: "thumbnail-design",
    title: "Thumbnail Design",
    category: "CONTENT DESIGN",
    tagline:
      "High-performing vertical content & thumbnails (1080x1920) crafted with strong visual hierarchy.",
    description:
      "High-performing YouTube Shorts, TikTok, and Instagram Reels thumbnails crafted in vertical 1080x1920 format.",

    cover: "/portfolio/thumbnail-1.avif",

    overview:
      "High-performing vertical thumbnails (1080x1920) designed to balance clarity, storytelling, and premium visual hierarchy for mobile-first content platforms.",

    challenge:
      "Standing out in fast-scrolling mobile video feeds where viewers make click decisions in milliseconds.",

    solution:
      "Engineered high-contrast vertical visual compositions with bold focal points, expressive typography, and clear subject isolation optimized for 9:16 ratio.",

    outcome:
      "Achieved measurable increases in Click-Through Rates (CTR) across client social and short-form video channels.",

    meta: {
      client: "Content Creators & Traders",
      industry: "Digital Media & Entertainment",
      role: "Visual Content Designer",
      year: "2024",
      deliverables:
        "High-CTR Vertical Thumbnails (1080x1920), Channel Graphics",
      tools: "Photoshop, Lightroom",
    },

    gallery: [
      { type: "half", src: "/portfolio/thumbnail-1.avif", alt: "Thumbnail 1 (1080x1920)", caption: "Thumbnail 1 — Vertical 1080x1920" },
      { type: "half", src: "/portfolio/thumbnail-2.avif", alt: "Thumbnail 2 (1080x1920)", caption: "Thumbnail 2 — Vertical 1080x1920" },
      { type: "half", src: "/portfolio/thumbnail-3.avif", alt: "Thumbnail 3 (1080x1920)", caption: "Thumbnail 3 — Vertical 1080x1920" },
      { type: "half", src: "/portfolio/thumbnail-4.avif", alt: "Thumbnail 4 (1080x1920)", caption: "Thumbnail 4 — Vertical 1080x1920" },
      { type: "half", src: "/portfolio/thumbnail-5.avif", alt: "Thumbnail 5 (1080x1920)", caption: "Thumbnail 5 — Vertical 1080x1920" },
      { type: "half", src: "/portfolio/thumbnail-6.avif", alt: "Thumbnail 6 (1080x1920)", caption: "Thumbnail 6 — Vertical 1080x1920" },
      { type: "half", src: "/portfolio/thumbnail-7.avif", alt: "Thumbnail 7 (1080x1920)", caption: "Thumbnail 7 — Vertical 1080x1920" },
      { type: "half", src: "/portfolio/thumbnail-8.avif", alt: "Thumbnail 8 (1080x1920)", caption: "Thumbnail 8 — Vertical 1080x1920" },
      { type: "half", src: "/portfolio/thumbnail-9.avif", alt: "Thumbnail 9 (1080x1920)", caption: "Thumbnail 9 — Vertical 1080x1920" },
    ],

    items: [
      {
        title: "Vertical Thumbnail Collection",
        subtitle: "1080x1920 Content Design",
        description:
          "High-performing vertical thumbnails (1080x1920) crafted for maximum mobile engagement.",
        cover: "/portfolio/thumbnail-1.avif",
        images: ["/portfolio/thumbnail-1.avif"],
      },
    ],
  },

  // =========================================================
  // 5. CHARACTER DESIGN (Rasio 4:5 - Tanpa Deskripsi)
  // =========================================================
  {
    id: 5,
    slug: "character-design",
    title: "Character Design",
    category: "CHARACTER DESIGN",
    tagline:
      "Original mascots and character illustrations created to make each brand feel memorable, approachable, and distinct.",
    description:
      "Original mascot and character design work built to reflect each brand's identity, values, and audience in a warm, memorable way.",

    cover: "/portfolio/character.avif",

    overview:
      "A collection of character-driven visual identities created to translate brand personality into approachable, expressive illustration.",
    challenge:
      "Creating character identities that feel consistent with each brand while remaining memorable, expressive, and easy to apply across digital channels and campaigns.",
    solution:
      "Developed original mascot and illustration systems rooted in the brand's tone, audience, and values so each character could carry the identity naturally across content and campaigns.",
    outcome:
      "Delivered distinct character systems that help each brand feel more human, relatable, and recognizable in its communication.",

    meta: {
      client: "Jendela Finansial",
      industry: "EdTech & Brand Mascot",
      role: "Character Artist & Illustrator",
      year: "2024",
      deliverables: "Character Sheet",
      tools: "Illustrator, Photoshop",
    },

    gallery: [
      {
        type: "portrait-4-5",
        src: "/portfolio/character.avif",
        alt: "Character Model Sheet",
        caption: "Jendela Finansial Mascot",
      },
    ],

    items: [
      {
        title: "Elof",
        subtitle: "Character Illustration",
        description:
          "Elof is a friendly illustrated character designed with a warm, approachable appearance and a clear storytelling-oriented visual style.",
        cover: "/portfolio/elof.avif",
        images: ["/portfolio/banner-elof.avif"],
        characterName: "Elof",
        characterExplorationImages: ["/portfolio/character-elof.avif"],
        characterBrief:
          "Elof is a friendly illustrated character designed with a warm, approachable appearance and a clear storytelling-oriented visual style.",
        characterPurpose:
          "To create a memorable character that can support visual storytelling through expressive features and recognizable visual elements.",
        characterExploration:
          "Elof was developed with a warm and friendly illustration approach, combining simplified character proportions with recognizable details such as his glasses, green vest, white robe, and walking staff.",
        characterFinalDescription:
          "The final character combines soft proportions, expressive eyes, and distinctive costume elements to create a recognizable and approachable character.",
        visualStyle: ["Friendly", "Warm", "Storytelling", "Approachable"],
        colorPaletteDescription:
          "The Elof color palette combines warm cream and golden tones with earthy brown, green, and soft skin tones to create a warm and approachable visual character. The earthy colors reinforce the storytelling atmosphere, while the brighter yellow tones add warmth and optimism.",
        colorPalette: [
          { name: "SOFT CREAM", hex: "#FAD887" },
          { name: "GOLDEN YELLOW", hex: "#FDCE69" },
          { name: "WARM BROWN", hex: "#895336" },
          { name: "DEEP CHARCOAL", hex: "#221F1B" },
          { name: "SAGE GREEN", hex: "#709751" },
          { name: "SOFT PEACH", hex: "#C58D5C" },
        ],
        reflection:
          "Elof allowed me to explore character illustration through simplified proportions, expressive facial features, and distinctive costume details. The final design focuses on creating a character that feels warm, recognizable, and suitable for visual storytelling.",
      },
      {
        title: "Jeni & Jeno",
        subtitle: "Character Illustration",
        description:
          "Mascot character design created to make financial education feel more approachable and relatable.",
        cover: "/portfolio/jeni-jeno.avif",
        images: ["/portfolio/character-jeni.avif", "/portfolio/character-jeno.avif"],
        characterName: "Jeni & Jeno",
        characterExplorationImages: [
          "/portfolio/character-jenijeno.avif",
          "/portfolio/character-jenijeno1.avif",
        ],
        characterBrief:
          "Jeni and Jeno are a playful character duo designed with expressive features, rounded shapes, and a warm, approachable visual style.",
        characterPurpose:
          "To create memorable and approachable characters that can support visual storytelling and creative applications.",
        characterConcept:
          "Jeni and Jeno represent Millennials and Gen Z — relaxed, curious, and eager to learn and grow. Their presence reflects a generation increasingly conscious of money, personal growth, and the pursuit of financial freedom.",
        characterExploration:
          "Developed with a cute, playful, and expressive approach, focusing on rounded proportions, expressive eyes, distinctive hairstyles, and playful visual details.",
        characterFinalDescription:
          "The final character design combines rounded forms, expressive facial features, distinctive hairstyles, and playful color accents to create a friendly and memorable character duo.",
        visualStyle: ["Cute", "Playful", "Expressive", "Friendly"],
        colorPaletteDescription:
          "The Jeni & Jeno color palette combines deep neutrals with warm and vibrant accents to create a playful, expressive, and approachable visual identity. Deep hair tones provide contrast and definition, while warm peach creates a soft and friendly foundation. Royal blue and emerald green bring expressive character accents, while sunny yellow and soft orange add cheerful energy and warmth.",
        applications: [
          "/portfolio/jendela-finansial.avif",
          "/portfolio/jendela-highlight3.avif",
          "/portfolio/jendela-story4.avif",
        ],
        colorPalette: [
          {
            name: "MIDNIGHT HAIR",
            hex: "#242222",
            description:
              "Main color for the characters' hair and dark outlines, providing strong definition while maintaining a soft and playful visual feel.",
          },
          {
            name: "WARM PEACH",
            hex: "#F9C9A5",
            description:
              "A warm skin tone that gives the characters a soft, friendly, and approachable appearance.",
          },
          {
            name: "ROYAL BLUE",
            hex: "#303B9B",
            description:
              "A vibrant blue accent used in Jeno's eyes, adding an expressive, playful, and energetic quality.",
          },
          {
            name: "EMERALD GREEN",
            hex: "#08735C",
            description:
              "A fresh green accent used in Jeni's eyes, adding liveliness and visual distinction.",
          },
          {
            name: "SUNNY YELLOW",
            hex: "#FFBE2E",
            description:
              "A cheerful accent color that adds warmth, brightness, and playful energy to the character design.",
          },
          {
            name: "SOFT ORANGE",
            hex: "#F7943D",
            description:
              "A warm accent that adds energy and creates a more vibrant and approachable overall character palette.",
          },
        ],
        reflection:
          "Jeni & Jeno were designed with rounded forms, expressive features, and playful visual details to create a friendly and memorable character duo. The visual direction focuses on making both characters feel approachable while maintaining distinctive personalities. The final design aims to create characters that can communicate emotion clearly across different visual applications.",
      },
      {
        title: "Tedy",
        subtitle: "Character Illustration",
        description:
          "Tedy is a friendly character illustration designed with a clean, youthful, and approachable visual style.",
        characterName: "Tedy",
        characterExplorationImages: ["/portfolio/character-teddy.avif"],
        characterBrief:
          "Tedy is a friendly character illustration designed with a clean, youthful, and approachable visual style.",
        characterPurpose:
          "To create a recognizable character that can communicate a friendly and modern personality through expressive illustration.",
        characterExploration:
          "Tedy was developed with a clean and youthful character approach, combining simplified proportions, expressive eyes, and a soft blue-purple visual atmosphere.",
        characterFinalDescription:
          "The final design combines soft proportions, expressive eyes, and a clean outfit to create a friendly and visually approachable character.",
        visualStyle: ["Friendly", "Youthful", "Modern", "Approachable"],
        colorPaletteDescription:
          "The Tedy color palette combines soft white, lavender, sky blue, and subtle pink with deeper charcoal and purple accents. The lighter colors create a youthful and approachable atmosphere, while the darker tones provide contrast and definition. Together, the palette gives the character a clean, modern, and friendly visual presence.",
        colorPalette: [
          { name: "SOFT WHITE", hex: "#FDFBFD" },
          { name: "LAVENDER", hex: "#EED3FB" },
          { name: "SKY BLUE", hex: "#7C98F3" },
          { name: "SOFT PINK", hex: "#FAD2D1" },
          { name: "DEEP CHARCOAL", hex: "#22201F" },
          { name: "DEEP PURPLE", hex: "#4C3765" },
        ],
        reflection:
          "Tedy allowed me to explore a softer approach to character illustration through simple proportions, expressive eyes, and a light color palette. The final design focuses on creating a character that feels friendly, modern, and easy to connect with.",
        cover: "/portfolio/teddy.avif",
        images: ["/portfolio/character-teddy1.avif"],
      },
      {
        title: "Emily the Great",
        subtitle: "Character Illustration",
        description:
          "Emily the Great is an expressive character illustration designed around a playful, energetic, and confident visual personality.",
        characterName: "Emily the Great",
        characterBrief:
          "Emily the Great is an expressive character illustration designed around a playful, energetic, and confident visual personality.",
        characterPurpose:
          "To create a recognizable character identity that can communicate personality and energy through expressive poses and visual storytelling.",
        characterExploration:
          "Emily was developed through expressive character illustration, exploring different facial expressions and poses to create a playful and energetic personality.",
        characterFinalDescription:
          "The final character uses expressive facial features, varied poses, and bold visual elements to create a lively and recognizable character identity.",
        visualStyle: ["Playful", "Expressive", "Energetic", "Confident"],
        colorPaletteDescription:
          "The Emily color palette combines bold reds, deep burgundy, black, and metallic gold to create a confident and energetic visual identity. Red establishes intensity and personality, while gold adds a sense of ambition and value. Warm skin tones and soft coral accents balance the stronger colors and keep the character approachable.",
        colorPalette: [
          { name: "BOLD RED", hex: "#B91919" },
          { name: "DEEP BURGUNDY", hex: "#8F0D0D" },
          { name: "CHARCOAL BLACK", hex: "#161414" },
          { name: "WARM PEACH", hex: "#F4C99E" },
          { name: "METALLIC GOLD", hex: "#D2A221" },
          { name: "SOFT CORAL", hex: "#C97568" },
        ],
        reflection:
          "Emily allowed me to explore how character expressions, poses, and visual context can work together to communicate personality. The design combines playful expressions with bold visual elements to create a character that feels energetic, confident, and memorable.",
        cover: "/portfolio/emily.avif",
        images: ["/portfolio/character-emily1.avif"],
        characterExplorationImages: ["/portfolio/character-emily.avif"],
      },
    ],
  },

  // =========================================================
  // 6. LIVE STREAM DESIGN
  // =========================================================
  {
    id: 6,
    slug: "live-stream-design",
    title: "Live Stream Design",
    category: "BROADCAST GRAPHICS",
    tagline:
      "Professional streaming layouts and broadcast assets for creators and communities.",
    description:
      "Professional streaming layouts and broadcast assets for creators and trading communities.",

    cover: "/portfolio/ezsquad.avif",

    overview:
      "Streaming layouts, sponsor graphics, and broadcast visuals designed for creators and communities that need clean, premium professionalism.",

    challenge:
      "Designing complex broadcast screens that display live information, overlays, and sponsor logos without cluttering the main stream content.",

    solution:
      "Built modular overlay components with sleek dark-mode aesthetics, dynamic lighting effects, and clear focal areas for the streamer video feed.",

    outcome:
      "Delivered broadcast-grade stream assets that elevated creator production value to professional esports standards.",

    meta: {
      client: "EZ Squad & Content Streamers",
      industry: "Esports & Live Broadcast",
      role: "Broadcast Asset Designer",
      year: "2024",
      deliverables:
        "Stream Overlays, Alert Sets, Sponsor Banners",
      tools: "Photoshop, After Effects, OBS Studio",
    },

    video: {
      title: "Live Stream Design",
      thumbnail: "/portfolio/ezsquad.avif",
      youtubeId: "AbCdEf12345",
    },

    gallery: [
      {
        type: "full",
        src: "/portfolio/ezsquad.avif",
        alt: "EZ Squad Stream Package",
        caption:
          "EZ Squad — Live Stream Overlay Package",
      },
      {
        type: "half",
        src: "/portfolio/wakatom.avif",
        alt: "Wak Atom Stream Assets",
        caption:
          "Wak Atom — Broadcast Screen Layout",
      },
      {
        type: "half",
        src: "/portfolio/sinyalordal.avif",
        alt: "Sinyal Ordal Live Graphic",
        caption:
          "Sinyal Ordal — Trading Stream Graphics",
      },
    ],

    items: [
      {
        title: "Wak Atom",
        subtitle: "Wak Atom",
        description:
          "Live stream direction with clean composition and strong timing cues.",
        cover: "/portfolio/wakatom.avif",
        images: ["/portfolio/wakatom.avif"],
      },
      {
        title: "EZ Squad",
        subtitle: "EZ Squad",
        description:
          "Premium motion-forward assets for a live community and trading campaign identity.",
        cover: "/portfolio/ezsquad.avif",
        images: ["/portfolio/ezsquad.avif"],
      },
    ],
  },

    // =========================================================
  // 7. MILENIAL'S BATIK ECO-FASHION
  // =========================================================
  {
    id: 7,
    slug: "milenials-batik-eco-fashion",
    title: "Milenial's Batik Eco-Fashion",
    category: "FASHION DESIGN",
    tagline: "Batik fashion project presented through lookbook, packaging, and print media design.",
    description: "Milenial's Batik Eco-Fashion is a visual design project presented through three lookbook designs, packaging design, and print media. The project brings the fashion collection into a cohesive visual presentation across editorial and physical touchpoints.",
    cover: "/portfolio/milenial-batik-eco-fashion.avif",
    overview: "This project showcases three lookbook designs that can be opened individually to explore the visual presentation, followed by packaging design and print media applications.",
    challenge: "To present the batik fashion collection consistently across lookbook, packaging, and printed media.",
    solution: "Developed a cohesive visual direction across three lookbook pieces, packaging, and print media so each application supports the same fashion identity.",
    outcome: "A collection of connected visual materials that presents the Milenial's Batik Eco-Fashion project across editorial, packaging, and print formats.",
    meta: {
      client: "Milenial's Batik Eco-Fashion",
      industry: "Fashion & Sustainable Design",
      role: "Graphic Designer",
      year: "2026",
      deliverables: "3 Lookbooks, Packaging Design, Print Media",
      tools: "Adobe Illustrator, Adobe Photoshop",
    },
    gallery: [
      {
        type: "portrait-4-5",
        src: "/portfolio/milenial-batik-eco-fashion.avif",
        alt: "Milenial's Batik Eco-Fashion cover",
        caption: "Milenial's Batik Eco-Fashion",
      },
    ],
    items: [
      {
        title: "Lookbook 01",
        subtitle: "Lookbook Design",
        description: "Lookbook design — open to explore the full piece.",
        cover: "/portfolio/milenial-batik-eco-fashion.avif",
        images: ["/portfolio/milenial-batik-eco-fashion.avif"],
      },
      {
        title: "Lookbook 02",
        subtitle: "Lookbook Design",
        description: "Lookbook design — open to explore the full piece.",
        cover: "/portfolio/milenial-batik-eco-fashion.avif",
        images: ["/portfolio/milenial-batik-eco-fashion.avif"],
      },
      {
        title: "Lookbook 03",
        subtitle: "Lookbook Design",
        description: "Lookbook design — open to explore the full piece.",
        cover: "/portfolio/milenial-batik-eco-fashion.avif",
        images: ["/portfolio/milenial-batik-eco-fashion.avif"],
      },
      {
        title: "Packaging Design",
        subtitle: "Packaging",
        description: "Packaging design for the fashion project.",
        cover: "/portfolio/milenial-batik-eco-fashion.avif",
        images: ["/portfolio/milenial-batik-eco-fashion.avif"],
      },
      {
        title: "Print Media",
        subtitle: "Print Design",
        description: "Print media applications for the fashion project.",
        cover: "/portfolio/milenial-batik-eco-fashion.avif",
        images: ["/portfolio/milenial-batik-eco-fashion.avif"],
      },
    ],
  },

  // =========================================================
  // 8. PRINT DESIGN
  // =========================================================
  {
    id: 8,
    slug: "desain-lain",
    title: "Print Design",
    category: "PRINT DESIGN",
    tagline:
      "A collection of print, campaign, promotional, and apparel design projects.",
    description:
      "A collection of graphic design projects including backdrops, banners, advertising campaigns, promotional materials, and apparel design.",

    cover: "/portfolio/mark.avif",

    overview:
      "A selection of promotional and print-focused projects created for different visual communication needs.",

    challenge:
      "Adapting visual concepts to different campaign needs, print formats, advertising materials, and apparel applications.",

    solution:
      "Applied graphic design fundamentals to create clear, engaging visuals that work across physical and promotional media.",

    outcome:
      "A varied selection that demonstrates adaptability across print, advertising, campaign, and merchandise applications.",

    meta: {
      client: "Various Clients",
      industry: "Creative Services",
      role: "Graphic Designer",
      year: "2023 - 2024",
      deliverables: "Backdrops, Banners, Advertising Campaigns, Apparel Design",
      tools: "Adobe Photoshop, Adobe Illustrator, Canva",
    },

    gallery: [
      {
        type: "half",
        src: "/portfolio/desain-lain-1.avif",
        alt: "Desain Lain 1",
        caption: "Creative Visual Work 1",
      },
      {
        type: "half",
        src: "/portfolio/desain-lain-2.avif",
        alt: "Desain Lain 2",
        caption: "Creative Visual Work 2",
      },
      {
        type: "half",
        src: "/portfolio/desain-lain-3.avif",
        alt: "Desain Lain 3",
        caption: "Creative Visual Work 3",
      },
      {
        type: "half",
        src: "/portfolio/desain-lain-4.avif",
        alt: "Desain Lain 4",
        caption: "Creative Visual Work 4",
      },
    ],

    items: [
      {
        title: "Miscellaneous Graphics",
        subtitle: "Gallery Collection",
        description:
          "Various promotional and graphic design experiments.",
        cover: "/portfolio/mark.avif",
        images: [
          "/portfolio/desain-lain-1.avif",
          "/portfolio/desain-lain-2.avif",
        ],
      },
    ],
  },
  ];

// =========================================================
// GET PORTFOLIO BY SLUG
// =========================================================

export function getPortfolioBySlug(
  slug: string,
  lang: Locale = "en"
): PortfolioCollection | undefined {
  const project = portfolioCollections.find((item) => item.slug === slug);
  return project ? localizePortfolioCollection(project, lang) : undefined;
}

// =========================================================
// GET NEXT PORTFOLIO
// =========================================================

export function getNextPortfolio(
  currentSlug: string,
  lang: Locale = "en"
): PortfolioCollection {
  const currentIndex = portfolioCollections.findIndex(
    (item) => item.slug === currentSlug
  );

  const nextIndex =
    (currentIndex + 1) % portfolioCollections.length;

  return localizePortfolioCollection(portfolioCollections[nextIndex], lang);
}
