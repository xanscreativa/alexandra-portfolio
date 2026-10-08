import { portfolioCollections } from "@/data/portfolio";

export interface GalleryItem {
  src: string;
  title?: string;
  alt?: string;
  caption?: string;
  width?: number;
  height?: number;
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
  characterProject?: {
    slug: string;
  };
  visualStyle?: string[];
  projectImages?: GalleryItem[];
  brandGuidelines?: BrandGuidelineSection[];
  brandMeaning?: BrandMeaningItem[];
  instagramHighlights?: GalleryItem[];
  instagramStories?: GalleryItem[];
  characterColorPalette?: string[];
  characterColorPaletteDescription?: string;
}

type Locale = "en" | "id";

const sectionCopy: Record<string, Record<Locale, Partial<SectionData>>> = {
  "pelkatpa.pku": {
    en: {
      title: "Pelkat PA GPIB Immanuel Pekanbaru",
      bio: "Children's ministry Sunday service.",
      overview:
        "Created joyful and engaging visual content for children's ministry events and daily spiritual communication. The designs were developed to feel vibrant, warm, and approachable while maintaining a clear and consistent visual identity.",
      challenge:
        "Creating clear and inspiring visuals that resonate with children while still aligned with the values and tone of the church ministry.",
      details: {
        client: "Pelkat PA GPIB Immanuel Pekanbaru",
        industry: "Community & Ministry",
        role: "Visual Designer",
        year: "2024",
        deliverables: "Event assets, social media content, and carousel posts",
        tools: "Adobe Illustrator, Canva",
      },
    },
    id: {
      title: "Pelkat PA GPIB Immanuel Pekanbaru",
      bio: "Layanan anak-anak di hari Minggu.",
      overview:
        "Membuat konten visual yang ceria dan menarik untuk acara pelayanan anak serta komunikasi spiritual harian. Desain dikembangkan agar terasa hidup, hangat, dan mudah didekati sambil tetap menjaga identitas visual yang jelas dan konsisten.",
      challenge:
        "Menciptakan visual yang jelas dan inspiratif yang sesuai untuk anak-anak sekaligus tetap selaras dengan nilai dan tone pelayanan gereja.",
      details: {
        client: "Pelkat PA GPIB Immanuel Pekanbaru",
        industry: "Komunitas & Pelayanan",
        role: "Desainer Visual",
        year: "2024",
        deliverables: "Aset acara, konten media sosial, dan carousel post",
        tools: "Adobe Illustrator, Canva",
      },
    },
  },
  jendelafinansial: {
    en: {
      title: "Jendela Finansial",
      bio: "Smart financial tips and wealth education made simple 💡 Grow your future with us.",
      overview:
        "Focused on building a strong financial education presence through a warm, approachable, and informative visual system for social media platforms.",
      challenge:
        "Explaining complex financial concepts clearly without losing engagement or making the content feel intimidating.",
      details: {
        client: "Jendela Finansial",
        industry: "Financial Education",
        role: "Visual Designer",
        year: "2024",
        deliverables: "Instagram system, educational content, campaign creatives",
        tools: "Adobe Photoshop, Adobe Illustrator",
      },
    },
    id: {
      title: "Jendela Finansial",
      bio: "Tips finansial cerdas dan edukasi kekayaan yang sederhana 💡 Kembangkan masa depanmu bersama kami.",
      overview:
        "Fokus membangun kehadiran edukasi finansial yang kuat melalui sistem visual yang hangat, mudah didekati, dan informatif untuk platform media sosial.",
      challenge:
        "Menjelaskan konsep finansial yang kompleks dengan jelas tanpa mengurangi engagement atau membuat konten terasa menakutkan.",
      details: {
        client: "Jendela Finansial",
        industry: "Edukasi Keuangan",
        role: "Desainer Visual",
        year: "2024",
        deliverables: "Sistem Instagram, konten edukasi, kreatif kampanye",
        tools: "Adobe Photoshop, Adobe Illustrator",
      },
    },
  },
  "consistrade-brand": {
    en: {
      title: "Consistrade",
      bio: "Creative business solutions that scale with clarity.",
      overview:
        "Built a professional and scalable brand system centered on clarity, trust, and modern business communication.",
      challenge:
        "Representing a growing business with a visual language that feels credible, modern, and easy to understand.",
      details: {
        client: "Consistrade",
        industry: "Business & Consulting",
        role: "Brand Designer",
        year: "2024",
        deliverables: "Brand identity and campaign applications",
        tools: "Adobe Illustrator, Photoshop",
      },
    },
    id: {
      title: "Consistrade",
      bio: "Solusi bisnis kreatif yang berkembang dengan kejelasan.",
      overview:
        "Membangun sistem merek yang profesional dan scalable dengan fokus pada kejelasan, kepercayaan, dan komunikasi bisnis modern.",
      challenge:
        "Mewakili bisnis yang berkembang dengan bahasa visual yang terasa kredibel, modern, dan mudah dipahami.",
      details: {
        client: "Consistrade",
        industry: "Bisnis & Konsultasi",
        role: "Desainer Brand",
        year: "2024",
        deliverables: "Identitas brand dan aplikasi kampanye",
        tools: "Adobe Illustrator, Photoshop",
      },
    },
  },
  "gpib-immanuel-pekanbaru": {
    en: {
      title: "GPIB Immanuel Pekanbaru",
      bio: "Church ministry identity built around clarity and warmth.",
      overview:
        "Developed a community-centered brand system that helps church communications feel more cohesive and welcoming across digital channels.",
      challenge:
        "Creating a meaningful church identity that balances spiritual values with a contemporary and accessible visual language.",
      details: {
        client: "GPIB Immanuel Pekanbaru",
        industry: "Community & Church",
        role: "Brand & Visual Designer",
        year: "2025",
        deliverables: "Brand identity, mascot, social content",
        tools: "Adobe Illustrator, Photoshop, Canva",
      },
    },
    id: {
      title: "GPIB Immanuel Pekanbaru",
      bio: "Identitas pelayanan gereja yang dibangun dengan kehangatan dan kejelasan.",
      overview:
        "Mengembangkan sistem brand yang berpusat pada komunitas agar komunikasi gereja terasa lebih kohesif dan ramah di berbagai kanal digital.",
      challenge:
        "Menciptakan identitas gereja yang bermakna dengan menyeimbangkan nilai spiritual dan bahasa visual yang kontemporer serta mudah diakses.",
      details: {
        client: "GPIB Immanuel Pekanbaru",
        industry: "Komunitas & Gereja",
        role: "Desainer Brand & Visual",
        year: "2025",
        deliverables: "Identitas brand, mascot, konten sosial",
        tools: "Adobe Illustrator, Photoshop, Canva",
      },
    },
  },
};

export function localizeSectionData(
  section: SectionData,
  lang: Locale
): SectionData {
  const baseKey = section.slug ?? section.username;
  const normalizedKey = baseKey
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "");

  const copy =
    sectionCopy[baseKey] ??
    sectionCopy[normalizedKey] ??
    sectionCopy[section.username ?? ""];

  const localized = copy?.[lang];

  const localizedProjectContent: Record<string, Partial<SectionData>> = {
    "jendela-finansial": {
      bio: "Tips finansial cerdas dan edukasi kekayaan yang sederhana 💡 Kembangkan masa depanmu bersama kami.",
      overview:
        "Fokus membangun kehadiran edukasi finansial yang kuat melalui sistem visual yang hangat, mudah didekati, dan informatif untuk platform media sosial.",
      challenge:
        "Menjelaskan konsep finansial yang kompleks dengan jelas tanpa mengurangi engagement atau membuat konten terasa menakutkan.",
      bigIdea:
        "Jendela Finansial dirancang sebagai platform media sosial edukatif dan interaktif yang membuat topik finansial terasa menyenangkan, mudah didekati, dan relevan dalam kehidupan sehari-hari.\n\nSistem kontennya menggabungkan edukasi finansial dengan tantangan interaktif, komik, storytelling berbasis karakter, serta template bulanan seperti Add Yours dan Twibbon.\n\nUntuk menciptakan feed Instagram yang konsisten dan mudah dikenali, konten mengikuti tiga tema visual yang berulang:\n\nBiru → Putih → Kuning 🔁\n\nIrama warna berulang ini menciptakan feed yang teratur secara visual sambil menjaga variasi konten, keterlibatan, dan kemudahan pengenalan saat audiens menjelajahi profil.",
    },
    "gpib-immanuel-pekanbaru": {
      bio: "Identitas pelayanan gereja yang dibangun dengan kehangatan dan kejelasan.",
      overview:
        "Mengembangkan sistem brand yang berpusat pada komunitas agar komunikasi gereja terasa lebih kohesif dan ramah di berbagai kanal digital.",
      challenge:
        "Menciptakan identitas gereja yang bermakna dengan menyeimbangkan nilai spiritual dan bahasa visual yang kontemporer serta mudah diakses.",
      bigIdea:
        "GPIB Immanuel Pekanbaru dibangun melalui identitas visual yang berbasis komunitas agar komunikasi gereja terasa lebih kohesif, hangat, dan ramah di berbagai kanal digital. Proyek ini mencakup pembuatan logo internal gereja, pengembangan Elof sebagai maskot, serta branding media sosial dan materi informasi gereja dengan identitas yang kuat, informatif, dan artistik.",
    },
    "consistrade-brand": {
      bio: "Solusi bisnis kreatif yang berkembang dengan kejelasan.",
      overview:
        "Membangun sistem merek yang profesional dan scalable dengan fokus pada kejelasan, kepercayaan, dan komunikasi bisnis modern.",
      challenge:
        "Mewakili bisnis yang berkembang dengan bahasa visual yang terasa kredibel, modern, dan mudah dipahami.",
      bigIdea:
        "Brand edukasi finansial dan trading ini menyediakan modul pembelajaran digital untuk pengguna dari level pemula hingga profesional. Tanggung jawab utama mencakup desain logo, pengembangan karakter brand, dan desain konten media sosial.",
    },
    "character-jeni-and-jeno": {
      bio: "Karakter edukasi finansial yang ramah, ekspresif, dan mudah diingat.",
      overview:
        "Jeni & Jeno dikembangkan sebagai karakter edukasi finansial yang ramah, ekspresif, dan mudah diingat untuk membantu audiens muda merasa lebih dekat dengan topik keuangan dan investasi.",
      challenge:
        "Menciptakan karakter yang dapat menjembatani edukasi finansial dengan gaya visual yang lebih menyenangkan, mudah didekati, dan konsisten di berbagai konten.",
      bigIdea:
        "Jeni & Jeno dikembangkan sebagai karakter edukasi finansial yang ramah, ekspresif, dan mudah diingat, membantu audiens muda merasa lebih dekat dengan topik keuangan dan investasi dalam bentuk yang ringan dan menyenangkan.",
    },
    "character-elof": {
      bio: "Karakter yang hangat dan ramah untuk komunikasi gereja dan media sosial.",
      overview:
        "Elof dikembangkan sebagai karakter yang hangat, ramah, dan mudah didekati untuk mendukung komunikasi gereja dan materi informasi dengan gaya visual yang menceritakan nilai pelayanan.",
      challenge:
        "Menciptakan karakter yang mudah diingat, ekspresif, dan konsisten agar dapat mendukung narasi visual serta komunikasi komunitas gereja.",
      bigIdea:
        "Elof dikembangkan dengan pendekatan ilustrasi yang hangat dan ramah, menggabungkan proporsi karakter yang sederhana dengan detail yang mudah dikenali seperti kacamata, rompi hijau, jubah putih, dan tongkat berjalan.",
    },
    "character-tedy": {
      bio: "Karakter edukasi finansial yang tampil ramah, modern, dan dapat didekati.",
      overview:
        "Tedy dikembangkan sebagai karakter edukasi finansial yang menampilkan gaya belajar yang lebih santai, hangat, dan mudah didekati bagi audiens umum.",
      challenge:
        "Menciptakan karakter yang terasa ramah dan dipercaya sekaligus tetap relevan untuk pendidikan trading dan finansial yang lebih serius.",
      bigIdea:
        "Tedy dikembangkan sebagai karakter edukasi trading yang ramah dan modern, dengan ekspresi yang terlihat mudah didekati untuk mendorong rasa percaya diri saat belajar finansial.",
    },
    "character-teddy": {
      bio: "Karakter edukasi finansial yang tampil ramah, modern, dan dapat didekati.",
      overview:
        "Tedy dikembangkan sebagai karakter edukasi finansial yang menampilkan gaya belajar yang lebih santai, hangat, dan mudah didekati bagi audiens umum.",
      challenge:
        "Menciptakan karakter yang terasa ramah dan dipercaya sekaligus tetap relevan untuk pendidikan trading dan finansial yang lebih serius.",
      bigIdea:
        "Tedy dikembangkan sebagai karakter edukasi trading yang ramah dan modern, dengan ekspresi yang terlihat mudah didekati untuk mendorong rasa percaya diri saat belajar finansial.",
    },
    "character-emily-the-great": {
      bio: "Karakter yang playful, ekspresif, dan mudah diingat untuk komunikasi digital sehari-hari.",
      overview:
        "Emily the Great dikembangkan sebagai karakter stiker Telegram dengan karakter yang ekspresif, playful, dan mudah diingat untuk membuat komunikasi digital terasa lebih hidup.",
      challenge:
        "Menciptakan karakter yang unik, mudah dikenali, dan cocok untuk komunikasi ringan serta interaksi sehari-hari di platform digital.",
      bigIdea:
        "Emily the Great dikembangkan sebagai karakter yang playful dan ekspresif untuk stiker Telegram, membawa kepribadian yang ceria ke dalam bentuk komunikasi digital yang lebih santai dan menyenangkan.",
    },
    "character-emily": {
      bio: "Karakter yang playful, ekspresif, dan mudah diingat untuk komunikasi digital sehari-hari.",
      overview:
        "Emily the Great dikembangkan sebagai karakter stiker Telegram dengan karakter yang ekspresif, playful, dan mudah diingat untuk membuat komunikasi digital terasa lebih hidup.",
      challenge:
        "Menciptakan karakter yang unik, mudah dikenali, dan cocok untuk komunikasi ringan serta interaksi sehari-hari di platform digital.",
      bigIdea:
        "Emily the Great dikembangkan sebagai karakter yang playful dan ekspresif untuk stiker Telegram, membawa kepribadian yang ceria ke dalam bentuk komunikasi digital yang lebih santai dan menyenangkan.",
    },
  };

  const localizedBrandGuidelineDescriptions: Record<string, Record<string, string>> = {
    "jendela-finansial": {
      "01": "Logo yang sudah ada dari klien menjadi fondasi untuk mengembangkan bahasa visual brand. Sistem visual lalu diperluas melalui warna, tipografi, elemen grafis, dan aset pendukung untuk menciptakan identitas yang kohesif dan mudah dikenali.",
      "02": "Palet warna menggabungkan biru, kuning, putih, dan navy gelap untuk menciptakan keseimbangan antara kepercayaan, optimisme, dan kejelasan. Biru merepresentasikan kepercayaan, stabilitas, dan kredibilitas, sementara kuning membawa optimisme, energi, dan kedekatan. Putih memberi ruang bernapas dan kejelasan, sedangkan navy gelap menambah kontras dan profesionalisme.",
      "03": "Tiga tema tipografi yang berbeda menciptakan bahasa visual yang terasa menyenangkan, mudah didekati, dan edukatif. Variasi ini membantu topik finansial yang kompleks terasa lebih ringan, lebih menarik, dan lebih mudah dijelajahi serta dipahami audiens.",
      "04": "Elemen visual menggabungkan dokumentasi fotografi autentik dari berbagai sumber untuk menciptakan kesan yang relatable dan kontemporer. Fotografi berbasis objek diedit menggunakan warna brand yang dipilih, seperti kombinasi putih-kuning atau putih-biru, tergantung pada tema visual. Fotografi yang menampilkan orang menggunakan pendekatan hitam-putih atau grayscale untuk menjaga konsistensi sambil tetap menjaga komposisi tetap bersih dan fokus.",
      "05": "Sistem grid halus digunakan sebagai fondasi latar belakang, menyesuaikan tema biru, kuning, dan putih brand. Dengan transparansi sekitar 15%, grid menambah tekstur dan kedalaman visual tanpa membuat latar terasa ramai atau melelahkan dibaca. Balon percakapan menciptakan nuansa yang lebih interaktif dan komunikatif, sementara panah memberikan arahan visual tambahan dan mendukung hierarki informasi.",
    },
    "gpib-immanuel-pekanbaru": {
      "01": "Logo resmi GPIB mewakili identitas sinode yang dibagikan di seluruh jemaat GPIB. Logo baru GPIB Immanuel Pekanbaru menciptakan identitas lokal yang khas sambil tetap terhubung dengan identitas GPIB yang lebih luas.",
      "05": "Elemen visual menggabungkan simbol GPIB, maskot, dan fotografi gereja yang realistis untuk menjaga identitas yang konsisten. Elemen pendukung dapat menyesuaikan diri dengan program, kampanye, acara, dan tema tertentu.",
      "06": "Karakter membantu membangun kehangatan dan kedekatan komunitas, sekaligus memperkuat pengenalan identitas gereja di kanal komunikasi yang lebih luas.",
    },
    "consistrade-brand": {
      "01": "Logo membangun identitas yang percaya diri untuk edukasi finansial sambil tetap jelas dan mudah diakses bagi pembelajar di semua level.",
      "02": "Sistem logo mencerminkan ide utama pertumbuhan disiplin dalam trading dan pembelajaran finansial: simbol yang jelas, modern, dan dapat dipercaya untuk pemula sekaligus tetap profesional untuk pembelajar tingkat lanjut.",
      "03": "Palet warna menggabungkan biru laut, biru kerajaan, dan ungu cerah untuk menyampaikan kepercayaan, kejelasan, dan pertumbuhan dalam ekosistem trading yang profesional.",
      "04": "Tipografi menggunakan gaya sans serif geometris yang bersih untuk memperkuat kejelasan, presisi, dan edukasi finansial yang mudah diakses untuk audiens yang lebih luas.",
      "05": "Sistem elemen visual yang terfokus mendukung konten trading dan pembelajaran dengan struktur yang konsisten dan hierarki informasi yang jelas.",
      "06": "Karakter brand membantu membangun kehangatan dan pendekatan yang lebih ramah, sekaligus memperkuat identitas edukasi finansial di setiap titik sentuh digital.",
    },
    "hut-63-pelkat-pa": {
      "02": "Lima pernyataan makna menjelaskan pesan utama perayaan, simbol angka, identitas pelayanan, kebersamaan, dan fondasi iman.",
      "03": "Ruang kosong menjaga pengaruh visual logo dan memastikan logo tetap bersih, seimbang, dan mudah dikenali di berbagai aplikasi.",
      "04": "Panduan ukuran menentukan proporsi minimum agar logo tetap jelas, mudah dibaca, dan konsisten secara visual di berbagai aplikasi.",
      "05": "Palet warna mencerminkan semangat kebahagiaan, makna, dan iman dalam perayaan HUT ke-63 Pelkat PA. Warna-warna ini menciptakan keseimbangan antara perayaan, persatuan, dan fondasi iman yang kuat.",
      "06": "Tipografi dirancang agar terasa jelas, ramah, dan meriah, mendukung identitas perayaan sambil menjaga pesan mudah dibaca dan terjangkau.",
      "07": "Merchandise memperluas identitas HUT 63 ke produk fisik, menciptakan ekspresi yang sederhana dan berkesan yang dapat dibagikan dan dipakai oleh komunitas Pelkat PA.",
    },
    "hut-67-pelkat-pa": {
      "01": "Logo perayaan menampilkan tonggak 67 tahun sebagai emblem yang jelas dan mudah diingat untuk perayaan resmi di tingkat nasional.",
      "03": "Struktur logo menentukan hubungan dan proporsi setiap elemen visual untuk menjaga identitas yang konsisten dan mudah dikenali.",
      "04": "Ruang kosong memastikan logo HUT 67 tetap terlihat, seimbang, dan mudah dikenali di berbagai aplikasi.",
      "06": "Tipografi bersifat bersih, hangat, dan meriah sehingga mendukung identitas perayaan dengan pesan yang mudah dibaca dan terasa inklusif.",
      "07": "Karakter mewakili keluarga Pelkat PA dalam tiga generasi: Oma dan Opa, Mama dan Papa, Grace dan Patrick, serta dua relawan muda pelayanan—laki-laki dan perempuan.",
    },
    "character-jeni-and-jeno": {
      "01": "Konsep dan eksplorasi mengembangkan karakter berpasangan yang ramah, enerjik, dan mudah diingat untuk konten edukasi finansial yang lebih dekat dengan audiens muda.",
      "02": "Palet warna menciptakan keseimbangan antara ceria, modern, dan percaya diri agar karakter terasa dinamis tanpa kehilangan kejelasan visual.",
      "03": "Karakter final dibuat dengan ekspresi yang ekspresif dan proporsi yang mudah dikenali agar siap diterapkan dalam media sosial dan materi edukasi.",
      "04": "Aplikasi karakter hadir di konten media sosial dan komunikasi berbasis video serta poster untuk membangun kehadiran merek yang lebih playful dan relatable.",
      "05": "Refleksi menegaskan bahwa karakter ini dirancang untuk membantu audiens merasa lebih dekat, lebih percaya diri, dan lebih termotivasi saat belajar finansial.",
    },
    "character-elof": {
      "01": "Konsep dan eksplorasi membangun Elof sebagai karakter visual yang hangat, ramah, dan mudah diingat untuk komunikasi media sosial serta materi informasi gereja.",
      "02": "Palet warna mencerminkan spirit pelayanan gereja yang hangat, bersih, dan menyampaikan kesejukan dalam setiap komunikasi visual.",
      "03": "Karakter final dibuat dengan bentuk yang sederhana namun ekspresif, agar mudah diaplikasikan di media sosial, poster, dan materi pendukung lainnya.",
      "04": "Aplikasi karakter hadir di konten media sosial dan materi komunikasi gereja untuk membuat identitas lebih hidup, manusiawi, dan mudah didekati.",
      "05": "Refleksi menegaskan bahwa Elof tidak hanya menjadi maskot, tetapi juga alat komunikasi yang memperkuat hubungan komunitas dan pelayanan gereja.",
    },
    "character-tedy": {
      "01": "Konsep dan eksplorasi membangun karakter Tedy dengan tampilan yang ramah dan mudah didekati agar edukasi finansial terasa lebih nyaman untuk audiens umum.",
      "02": "Palet warna menciptakan keseimbangan antara modern, percaya diri, dan menyenangkan sehingga karakter tetap relevan untuk materi edukasi finance.",
      "03": "Karakter final dibuat dengan bentuk yang sederhana dan ekspresif agar mudah diterapkan di media sosial dan materi edukasi.",
      "04": "Aplikasi karakter hadir di konten media sosial yang mengedukasi, membantu menciptakan kehadiran visual yang lebih hangat dan ringan.",
      "05": "Refleksi menegaskan bahwa karakter ini dirancang untuk membuat pembelajaran tentang trading dan finansial terasa lebih santai namun tetap kredibel.",
    },
    "character-emily-the-great": {
      "01": "Konsep dan eksplorasi membangun Emily sebagai karakter yang playful, ekspresif, dan mudah diingat untuk bentuk komunikasi sehari-hari yang lebih santai.",
      "02": "Palet warna mencerminkan karakter yang ceria, modern, dan mudah dikenali, sesuai dengan kebutuhan komunikasi sticker dan konten digital.",
      "03": "Karakter final dibuat agar tetap ekspresif dan fleksibel dalam berbagai pose, sehingga mudah dipakai untuk sticker dan materi digital yang ringan.",
      "04": "Aplikasi karakter dimanfaatkan untuk stiker Telegram dan bentuk komunikasi digital yang lebih interaktif dan dekat dengan audiens.",
      "05": "Refleksi menegaskan bahwa Emily dirancang sebagai karakter yang memikat, menyenangkan, dan mudah dibawa ke dalam keseharian komunikasi digital.",
    },
  };

  const resolveLocalizedGuidelines = (guidelines?: BrandGuidelineSection[]) =>
    guidelines?.map((item) => {
      const translatedDescription =
        lang === "id"
          ? localizedBrandGuidelineDescriptions[baseKey]?.[item.number] ??
            localizedBrandGuidelineDescriptions[normalizedKey]?.[item.number] ??
            localizedBrandGuidelineDescriptions[section.slug ?? ""]?.[item.number]
          : undefined;

      return translatedDescription ? { ...item, description: translatedDescription } : item;
    });

  const idFallbacks: Record<string, Partial<SectionData>> = {
    uksw_salatiga: {
      bio: "Kreativitas minoritas kampus.",
      overview:
        "Membuat konten visual yang menarik untuk platform media sosial universitas, termasuk unggahan promosi, thumbnail video, dan fotografi untuk mendukung berbagai kegiatan dan komunikasi kampus.",
      challenge:
        "Membuat konten yang menarik secara visual dan konsisten untuk berbagai komunikasi kampus sambil beradaptasi dengan berbagai format, audiens, dan kebutuhan kreatif.",
      details: {
        client: "UKSW Salatiga",
        industry: "Pendidikan",
        role: "Desainer Visual Magang",
        year: "2022",
        deliverables: "Konten media sosial, thumbnail, fotografi",
        tools: "Adobe Photoshop, Adobe Illustrator",
      },
    },
    jendelafinansial: {
      bio: "Tips finansial cerdas dan edukasi kekayaan yang sederhana 💡 Kembangkan masa depanmu bersama kami.",
      overview:
        "Mengembangkan konten visual dan aset branding untuk platform edukasi finansial yang membantu Gen Z menjadi lebih sadar secara finansial. Karya ini mencakup pembuatan konten media sosial, desain karakter original, dan visual yang menarik untuk tantangan finansial, berita, dan konten edukasi.",
      challenge:
        "Membuat topik finansial terasa mudah didekati dan menarik bagi Gen Z sambil membangun identitas visual yang khas untuk mengomunikasikan konten edukasi, berita finansial, dan tantangan interaktif dengan cara yang jelas, relatable, dan menarik secara visual.",
      details: {
        client: "Jendela Finansial",
        industry: "Edukasi Keuangan",
        role: "Desainer Visual Utama",
        year: "2024",
        deliverables:
          "Konten media sosial, desain karakter, aset branding, kampanye edukasi",
        tools: "Adobe Photoshop, Adobe Illustrator",
      },
    },
    "jendela-finansial": {
      bio: "Tips finansial cerdas dan edukasi kekayaan yang sederhana 💡 Kembangkan masa depanmu bersama kami.",
      overview:
        "Mengembangkan konten visual dan aset branding untuk platform edukasi finansial yang membantu Gen Z menjadi lebih sadar secara finansial. Karya ini mencakup pembuatan konten media sosial, desain karakter original, dan visual yang menarik untuk tantangan finansial, berita, dan konten edukasi.",
      challenge:
        "Membuat topik finansial terasa mudah didekati dan menarik bagi Gen Z sambil membangun identitas visual yang khas untuk mengomunikasikan konten edukasi, berita finansial, dan tantangan interaktif dengan cara yang jelas, relatable, dan menarik secara visual.",
      details: {
        client: "Jendela Finansial",
        industry: "Edukasi Keuangan",
        role: "Desainer Visual Utama",
        year: "2024",
        deliverables:
          "Konten media sosial, desain karakter, aset branding, kampanye edukasi",
        tools: "Adobe Photoshop, Adobe Illustrator",
      },
    },
    consistrade: {
      bio: "Pendidikan finansial dan trading yang profesional. 📊📉",
      overview:
        "Membangun identitas dan sistem visual untuk brand edukasi finansial dan trading, termasuk logo, karakter brand, dan desain konten media sosial yang mendukung modul pembelajaran digital untuk audiens dari pemula hingga profesional.",
      challenge:
        "Menciptakan identitas trading yang profesional namun tetap ramah dan mudah didekati bagi trader pemula tanpa terasa menakutkan.",
      details: {
        client: "Consistrade",
        industry: "Edukasi Keuangan & Trading",
        role: "Desainer Visual",
        year: "2025",
        deliverables: "Desain logo, karakter brand, konten media sosial",
        tools: "Adobe Photoshop, Adobe Illustrator",
      },
    },
    "consistrade-brand": {
      bio: "Pendidikan finansial dan trading yang profesional. 📊📉",
      overview:
        "Membangun identitas dan sistem visual untuk brand edukasi finansial dan trading, termasuk logo, karakter brand, dan desain konten media sosial yang mendukung modul pembelajaran digital untuk audiens dari pemula hingga profesional.",
      challenge:
        "Menciptakan identitas trading yang profesional namun tetap ramah dan mudah didekati bagi trader pemula tanpa terasa menakutkan.",
      details: {
        client: "Consistrade",
        industry: "Edukasi Keuangan & Trading",
        role: "Desainer Visual",
        year: "2025",
        deliverables: "Desain logo, karakter brand, konten media sosial",
        tools: "Adobe Photoshop, Adobe Illustrator",
      },
    },
    gpibimmanuelpku: {
      bio: "Identitas branding gereja dan sistem visual. 🙏🕊️",
      overview:
        "Mengembangkan identitas visual GPIB Immanuel Pekanbaru dengan merancang logo internal gereja yang merepresentasikan jemaat dan identitasnya di Pekanbaru. Proyek ini juga mencakup pembuatan Elof, mascot yang mewakili GPIB Immanuel Pekanbaru dalam melayani jemaat, serta pengembangan branding media sosial dan materi informasi gereja dengan identitas yang kuat, informatif, dan artistik.",
      challenge:
        "Membangun identitas visual yang kohesif yang menghubungkan warisan pelayanan gereja yang sudah lama berdiri dengan estetika modern yang ramah untuk seluruh jemaat.",
      details: {
        client: "GPIB Immanuel Pekanbaru",
        industry: "Gereja",
        role: "Desainer Visual",
        year: "2025",
        deliverables:
          "Desain logo, branding, desain karakter, desain media sosial, editing video",
        tools: "Illustrator, Figma, Photoshop",
      },
    },
    "gpib-immanuel-pekanbaru": {
      bio: "Identitas branding gereja dan sistem visual. 🙏🕊️",
      overview:
        "Mengembangkan identitas visual GPIB Immanuel Pekanbaru dengan merancang logo internal gereja yang merepresentasikan jemaat dan identitasnya di Pekanbaru. Proyek ini juga mencakup pembuatan Elof, mascot yang mewakili GPIB Immanuel Pekanbaru dalam melayani jemaat, serta pengembangan branding media sosial dan materi informasi gereja dengan identitas yang kuat, informatif, dan artistik.",
      challenge:
        "Membangun identitas visual yang kohesif yang menghubungkan warisan pelayanan gereja yang sudah lama berdiri dengan estetika modern yang ramah untuk seluruh jemaat.",
      details: {
        client: "GPIB Immanuel Pekanbaru",
        industry: "Gereja",
        role: "Desainer Visual",
        year: "2025",
        deliverables:
          "Desain logo, branding, desain karakter, desain media sosial, editing video",
        tools: "Illustrator, Figma, Photoshop",
      },
    },
    "pelkat-pa-gpib-immanuel-pekanbaru": {
      bio: "Layanan anak-anak di hari Minggu.",
      overview:
        "Membuat konten visual yang ceria dan menarik untuk acara pelayanan anak serta komunikasi spiritual harian. Desain dikembangkan agar terasa hidup, hangat, dan mudah didekati sambil tetap menjaga identitas visual yang jelas dan konsisten.",
      challenge:
        "Menciptakan visual yang jelas dan inspiratif yang sesuai untuk anak-anak sekaligus tetap selaras dengan nilai dan tone pelayanan gereja.",
      details: {
        client: "Pelkat PA GPIB Immanuel Pekanbaru",
        industry: "Pelayanan Anak",
        role: "Desainer Visual",
        year: "2025",
        deliverables: "Aset acara, konten media sosial, dan carousel post",
        tools: "Adobe Illustrator, Canva",
      },
    },
    jims_honey_sukabumi: {
      bio: "Konten media sosial untuk Jims Honey Sukabumi.",
      overview:
        "Membuat desain post media sosial yang jelas, konsisten, dan menarik untuk komunikasi brand di platform digital.",
      challenge:
        "Membangun visual yang konsisten dan mudah diingat untuk kebutuhan promosi produk serta komunikasi merek secara online.",
      details: {
        client: "Jims Honey Sukabumi",
        industry: "Makanan & Minuman",
        role: "Visual Designer",
        year: "2025",
        deliverables: "Logo dan post media sosial",
        tools: "Canva, Photoshop",
      },
    },
    sanne_skin_beauty: {
      bio: "Konten media sosial untuk Sanne Skin & Beauty.",
      overview:
        "Membuat desain post media sosial yang rapi, konsisten, dan terarah untuk memperkuat komunikasi brand skincare di platform digital.",
      challenge:
        "Menyusun visual yang konsisten dan mudah dikenali agar brand terasa profesional, terpercaya, dan menarik untuk audiens yang ingin membeli produk perawatan kulit.",
      details: {
        client: "Sanne Skin & Beauty",
        industry: "Beauty & Skincare",
        role: "Visual Designer",
        year: "2025",
        deliverables: "Logo dan post media sosial",
        tools: "Canva, Photoshop",
      },
    },
    sambal_lauq: {
      bio: "Konten media sosial untuk Sambal Lauq.",
      overview:
        "Membuat desain post media sosial yang jelas, menarik, dan konsisten untuk mendukung komunikasi produk kuliner di platform digital.",
      challenge:
        "Menghadirkan visual yang konsisten dan kuat agar merek makanan terasa lebih mudah dikenali, menarik, dan relevan di media sosial.",
      details: {
        client: "Sambal Lauq",
        industry: "Makanan & Minuman",
        role: "Visual Designer",
        year: "2025",
        deliverables: "Logo dan post media sosial",
        tools: "Canva, Photoshop",
      },
    },
  };

  const fallback =
    lang === "id"
      ? idFallbacks[baseKey] ?? idFallbacks[normalizedKey] ?? idFallbacks[section.username ?? ""]
      : undefined;

  const idCategoryMap: Record<string, string> = {
    "social-media-design": "DESAIN MEDIA SOSIAL",
    "brand-identity": "IDENTITAS MEREK",
    "logo-design": "DESAIN LOGO",
    "thumbnail-design": "DESAIN THUMBNAIL",
    "character-design": "DESAIN KARAKTER",
    "live-stream-design": "DESAIN LIVE STREAM",
    "desain-lain": "DESAIN LAINNYA",
    "jendela-finansial": "IDENTITAS MEREK",
    "consistrade-brand": "IDENTITAS MEREK",
    "gpib-immanuel-pekanbaru": "IDENTITAS MEREK",
    "pelkat-pa-gpib-immanuel-pekanbaru": "IDENTITAS MEREK",
    "character-jeni-and-jeno": "DESAIN KARAKTER",
    "character-elof": "DESAIN KARAKTER",
    "character-tedy": "DESAIN KARAKTER",
    "character-teddy": "DESAIN KARAKTER",
    "character-emily-the-great": "DESAIN KARAKTER",
    "character-emily": "DESAIN KARAKTER",
  };

  return {
    ...section,
    title: localized?.title ?? section.title,
    category: section.category,
    bio:
      lang === "id"
        ? localized?.bio ??
          localizedProjectContent[baseKey]?.bio ??
          localizedProjectContent[normalizedKey]?.bio ??
          localizedProjectContent[section.slug ?? ""]?.bio ??
          fallback?.bio ??
          section.bio
        : localized?.bio ?? fallback?.bio ?? section.bio,
    overview:
      lang === "id"
        ? localized?.overview ??
          localizedProjectContent[baseKey]?.overview ??
          localizedProjectContent[normalizedKey]?.overview ??
          localizedProjectContent[section.slug ?? ""]?.overview ??
          fallback?.overview ??
          section.overview
        : localized?.overview ?? fallback?.overview ?? section.overview,
    challenge:
      lang === "id"
        ? localized?.challenge ??
          localizedProjectContent[baseKey]?.challenge ??
          localizedProjectContent[normalizedKey]?.challenge ??
          localizedProjectContent[section.slug ?? ""]?.challenge ??
          fallback?.challenge ??
          section.challenge
        : localized?.challenge ?? fallback?.challenge ?? section.challenge,
    bigIdea:
      lang === "id"
        ? localizedProjectContent[baseKey]?.bigIdea ??
          localizedProjectContent[normalizedKey]?.bigIdea ??
          localizedProjectContent[section.slug ?? ""]?.bigIdea ??
          localizedProjectContent[baseKey]?.overview ??
          localizedProjectContent[normalizedKey]?.overview ??
          localizedProjectContent[section.slug ?? ""]?.overview ??
          section.bigIdea ??
          section.overview
        : section.bigIdea ?? section.overview,
    brandGuidelines: resolveLocalizedGuidelines(section.brandGuidelines),
    details: {
      ...section.details,
      ...(localized?.details ?? {}),
      ...(fallback?.details ?? {}),
    },
  };
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
      year: "2025",
      deliverables: "Logo and social media posts",
      tools: "canva, photoshop",
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
      year: "2025",
      deliverables: "Logo and social media posts",
      tools: "canva, photoshop",
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
      year: "2025",
      deliverables: "Logo and social media posts",
      tools: "canva, photoshop",
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
      "Jendela Finansial is designed as an educational and interactive social media platform that makes financial topics feel fun, approachable, and relevant to everyday life.\n\nThe content system combines financial education with interactive challenges, comics, character-based storytelling, and monthly templates such as Add Yours and Twibbon.\n\nTo create a consistent and recognizable Instagram feed, content follows three visual themes in a repeating sequence:\n\nBlue → White → Yellow 🔁\n\nThis recurring color rhythm creates a visually organized feed while keeping the content varied, engaging, and easy to recognize when audiences browse the profile.",
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
    characterProject: {
      slug: "character-jeni-and-jeno",
    },
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
    characterProject: {
      slug: "character-elof",
    },
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
        description: "",
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
    characterProject: {
      slug: "character-tedy",
    },
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
        description: "",
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
      role: "Winner Logo Design Competition",
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

export function getProjectBySlug(slug: string, lang: Locale = "en") {
  const existingProject = projectCaseStudies.find((project) => project.slug === slug);
  if (existingProject) return localizeSectionData(existingProject, lang);

  const characterCollection = portfolioCollections.find(
    (collection) => collection.slug === "character-design"
  );
  const legacyCharacterNames: Record<string, string> = {
    "character-emily": "Emily the Great",
    "character-teddy": "Tedy",
  };
  const character = characterCollection?.items.find(
    (item) =>
      getCharacterProjectSlug(item.title) === slug ||
      legacyCharacterNames[slug] === item.title
  );

  if (!character) return undefined;

  const name = character.characterName ?? character.title;
  const imageDimensions: Record<string, { width: number; height: number }> = {
    "/portfolio/jeni-jeno.avif": { width: 1117, height: 1408 },
    "/portfolio/elof.avif": { width: 1620, height: 2025 },
    "/portfolio/teddy.avif": { width: 1620, height: 2025 },
    "/portfolio/emily.avif": { width: 3375, height: 4219 },
    "/portfolio/character-elof.avif": { width: 3840, height: 2160 },
    "/portfolio/character-emily.avif": { width: 3840, height: 2160 },
    "/portfolio/character-emily1.avif": { width: 3840, height: 2160 },
    "/portfolio/character-jeni.avif": { width: 3840, height: 2160 },
    "/portfolio/character-jenijeno.avif": { width: 1920, height: 1080 },
    "/portfolio/character-jenijeno1.avif": { width: 1920, height: 1080 },
    "/portfolio/character-jeno.avif": { width: 3840, height: 2160 },
    "/portfolio/character-teddy.avif": { width: 3840, height: 2160 },
    "/portfolio/character-teddy1.avif": { width: 3840, height: 2160 },
    "/portfolio/jendela-1.avif": { width: 3544, height: 4430 },
    "/portfolio/jendela-highlight1.avif": { width: 4501, height: 4500 },
    "/portfolio/jendela-highlight2.avif": { width: 4501, height: 4500 },
    "/portfolio/jendela-highlight3.avif": { width: 4500, height: 4500 },
    "/portfolio/jendela-finansial.avif": { width: 1620, height: 2025 },
    "/portfolio/jendela-story4.avif": { width: 750, height: 1333 },
  };
  const toGuidelineImage = (src: string, alt: string): BrandGuidelineImage => ({
    src,
    alt,
    ...(imageDimensions[src] ?? { width: 1600, height: 2000 }),
  });
  const explorationLabels: Record<string, string> = {
    "/portfolio/character-elof.avif": "Sketch / Character Exploration",
    "/portfolio/character-emily.avif": "Character Sketch / Exploration",
    "/portfolio/character-jenijeno.avif": "Full-Body Character Sketch",
    "/portfolio/character-jenijeno1.avif": "Expression Sketch / Exploration",
    "/portfolio/character-teddy.avif": "Character Sketch / Exploration",
  };
  const finalImages = character.images.length > 0 ? character.images : [character.cover];
  const explorationDescription = [
    character.characterExploration ?? character.characterConcept ?? character.description,
    character.visualStyle?.length
      ? `Keywords: ${character.visualStyle.join(" · ")}`
      : undefined,
  ].filter(Boolean).join("\n\n");
  const characterApplicationDescriptions: Record<string, string> = {
    Elof: "Elof was developed as a visual character for social media content, helping bring the brand to life across both video and poster-based communication.",
    "Jeni & Jeno": "Jeni & Jeno were applied across social media content, appearing in both video and poster-based communication to create a more playful and relatable brand presence.",
    Tedy: "Tedy was applied to social media content across both video and poster-based communication, helping create a friendly and approachable visual presence for the brand.",
    "Emily the Great": "Emily was developed as a character for Telegram stickers, bringing her playful and expressive personality into a fun and engaging form of everyday communication.",
  };
  const characterProjectMetadata: Record<
    string,
    Pick<SectionDetails, "year" | "deliverables" | "tools">
  > = {
    "Jeni & Jeno": {
      year: "2024",
      deliverables:
        "Character design for social media and video content for financial education.",
      tools: "Adobe Illustrator",
    },
    "Emily the Great": {
      year: "2025",
      deliverables: "Character design for Telegram stickers.",
      tools: "Adobe Illustrator",
    },
    Tedy: {
      year: "2025",
      deliverables: "Character design for social media content for financial education.",
      tools: "Adobe Illustrator",
    },
    Elof: {
      year: "2026",
      deliverables:
        "Character design for social media and supporting materials for church ministry information at GPIB Immanuel Pekanbaru.",
      tools: "Adobe Illustrator",
    },
  };
  const characterGuidelines: BrandGuidelineSection[] = [
    {
      number: "01",
      title: "CONCEPT & EXPLORATION",
      description: explorationDescription,
      images: (character.characterExplorationImages ?? []).map((src, index) => {
        const label = explorationLabels[src] ?? `Concept and exploration ${index + 1}`;
        return {
          ...toGuidelineImage(src, `${name} ${label.toLowerCase()}`),
          caption: label,
        };
      }),
    },
    {
      number: "02",
      title: "COLORS",
      description: character.colorPaletteDescription ?? "",
      images: [],
    },
    {
      number: "03",
      title: "FINAL CHARACTER",
      description: character.characterFinalDescription ?? "",
      images: finalImages.map((src, index) => {
        const characterLabel =
          name === "Jeni & Jeno" ? (index === 0 ? "Jeni" : "Jeno") : name;
        return {
          ...toGuidelineImage(src, `${characterLabel} final character artwork`),
          ...(name === "Jeni & Jeno" ? { caption: `${characterLabel} — Final Character` } : {}),
        };
      }),
    },
    {
      number: "04",
      title: "APPLICATIONS",
      description: characterApplicationDescriptions[name] ?? "",
      images:
        name === "Emily the Great"
          ? [
              toGuidelineImage(
                "/portfolio/character-emily2.avif",
                "Emily Telegram stickers"
              ),
            ]
          : [],
    },
    {
      number: "05",
      title: "REFLECTION",
      description: character.reflection ?? "",
      images: [],
    },
  ];

  const localizedCharacterProject = {
    slug,
    category: "CHARACTER DESIGN",
    title: name,
    username: slug,
    bio: character.description,
    avatarImage: character.cover,
    avatarText: name.slice(0, 2).toUpperCase(),
    avatarBg: "from-pink-400 to-rose-500",
    posts: [{ src: character.cover, alt: `${name} character artwork` }],
    details: {
      client: "—",
      industry: "Character Design & Illustration",
      role: character.visualStyle?.join(" · ") ?? "Character Illustration",
      ...characterProjectMetadata[name],
    },
    overview: character.characterBrief ?? character.description,
    challenge: character.characterPurpose ?? "",
    bigIdea: character.characterConcept ?? character.characterExploration ?? character.description,
    projectImages: [],
    visualStyle: character.visualStyle,
    brandGuidelines: characterGuidelines,
    characterColorPalette: character.colorPalette?.map((swatch) => swatch.hex),
    characterColorPaletteDescription: character.colorPaletteDescription,
  } satisfies SectionData;

  return localizeSectionData(localizedCharacterProject, lang);
}

export function getCharacterProjectSlug(title: string) {
  const normalizedTitle = title
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

  return `character-${normalizedTitle}`;
}
