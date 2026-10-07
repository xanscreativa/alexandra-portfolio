"use client";

import Image from "next/image";
import Link from "next/link";
import { notFound, useParams } from "next/navigation";
import { ArrowLeft } from "lucide-react";

import { getProjectBySlug } from "../../[slug]/portfolio-data";
import ColorPalette from "@/components/work/ColorPalette";
import TypographyPalette from "@/components/work/TypographyPalette";

const guidelineSlots = [
  ["01", "LOGO", "Logo utama, variasi logo, dan penjelasan sistem identitas."],
  ["02", "COLORS", "Primary color, secondary color, dan palet warna pendukung."],
  ["03", "TYPOGRAPHY", "Primary font, supporting font, dan aturan hierarchy."],
  ["04", "ELEMENT", "Elemen visual yang membangun karakter dan konsistensi brand."],
  ["05", "SUPPORTING ELEMENT", "Ikon, simbol, pattern, dan elemen pendukung komunikasi."],
  ["06", "CHARACTER", "Character / mascot beserta variasi pose dan penggunaannya."],
] as const;

const otherBrandGuidelineSlots = [
  ["01", "LOGO", ""],
  ["04", "ELEMENT", ""],
  ["05", "SUPPORTING ELEMENT", ""],
  ["06", "CHARACTER", ""],
] as const;

const gpibBrandGuidelineSlots = [
  ["01", "LOGO", ""],
  ["02", "MEANING", ""],
  ["03", "COLORS", ""],
  ["04", "TYPOGRAPHY", ""],
  ["05", "SUPPORTING ELEMENT", ""],
  ["06", "CHARACTER", ""],
] as const;

const consistradeBrandGuidelineSlots = [
  ["01", "LOGO", ""],
  ["02", "LOGO MEANING", ""],
  ["03", "COLORS", ""],
  ["04", "TYPOGRAPHY", ""],
  ["05", "ELEMENT", ""],
  ["06", "CHARACTER", ""],
] as const;

const hut63BrandGuidelineSlots = [
  ["01", "LOGO", ""],
  ["02", "MEANING", ""],
  ["03", "CLEAR SPACE", ""],
  ["04", "SIZE", ""],
  ["05", "COLORS", ""],
  ["06", "TYPOGRAPHY", ""],
  ["07", "MERCHANDISE", ""],
] as const;

const hut67BrandGuidelineSlots = [
  ["01", "LOGO", ""],
  ["02", "MEANING", ""],
  ["03", "LOGO STRUCTURE", ""],
  ["04", "CLEAR SPACE", ""],
  ["05", "COLORS", ""],
  ["06", "TYPOGRAPHY", ""],
  ["07", "CHARACTER", ""],
  ["08", "MERCHANDISE", ""],
] as const;

const jendelaGuidelineDescriptions: Record<string, string> = {
  "01": "The existing logo provided by the client served as the foundation for developing the brand's visual language. The visual system was then extended through color, typography, graphic elements, and supporting assets to create a cohesive and recognizable identity.",
  "02": "The color palette combines blue, yellow, white, and deep navy to create a balance between trust, optimism, and clarity. Blue represents trust, stability, and credibility, while yellow brings optimism, energy, and approachability. White provides clarity and breathing space, while deep navy adds contrast and professionalism.",
  "03": "Three distinct typographic themes create a visual language that feels fun, approachable, and educational. The variation helps make complex financial topics feel lighter, more engaging, and easier for audiences to explore and understand.",
  "04": "The visual elements incorporate authentic photographic documentation from various sources to create a relatable and contemporary feel. Object-based photography is edited using selected brand colors, such as white–yellow or white–blue combinations, depending on the visual theme. Photography featuring people uses black-and-white or grayscale treatment to maintain consistency while keeping the overall composition clean and focused.",
  "05": "A subtle grid system is used as the foundation for the background, adapting to the brand's blue, yellow, and white themes. With approximately 15% transparency, the grid adds texture and visual depth without making the background feel busy or tiring to read. Speech bubbles create a more interactive and conversational feel, while arrows provide additional visual direction and support the information hierarchy.",
};

const brandColorPalettes: Record<string, string[]> = {
  "jendela-finansial": ["#087FC7", "#FFB719", "#FFFFFF", "#5F8FD1", "#FFF4D6", "#202B3C"],
  "consistrade-brand": ["#081651", "#2846A9", "#72B6F5", "#7C60D7", "#CF71EA", "#F9F6FC"],
  "gpib-immanuel-pekanbaru": ["#164A8A", "#3C72B5", "#C9A85C", "#AFC7DE", "#F7F5F0", "#243247"],
  "pelkat-pa-gpib-immanuel-pekanbaru": ["#8BCB8A", "#A9DDF0", "#FFD98E", "#F5B6C8", "#FFF9F2", "#40504A"],
  "hut-63-pelkat-pa": ["#2A8639", "#F4A83E", "#6DC043", "#76C944", "#FCD64B", "#FCF7F3"],
  "hut-67-pelkat-pa": ["#EE6597", "#FAAF40", "#8BC53F", "#D8A1BD", "#FBBAC8", "#FCF7F3"],
};

const brandBanners: Record<string, string> = {
  "jendela-finansial": "/portfolio/banner-jendela.avif",
  "consistrade-brand": "/portfolio/banner-consistrade.avif",
  "hut-67-pelkat-pa": "/portfolio/banner-hut67.avif",
  "hut-63-pelkat-pa": "/portfolio/banner-hut63.avif",
  "gpib-immanuel-pekanbaru": "/portfolio/banner-gpib.avif",
  "pelkat-pa-gpib-immanuel-pekanbaru": "/portfolio/banner-pelkatpa.avif",
  "character-elof": "/portfolio/banner-elof.avif",
  "character-jeni-and-jeno": "/portfolio/banner-jenijeno.avif",
  "character-tedy": "/portfolio/banner-teddy.avif",
  "character-emily-the-great": "/portfolio/banner-emily.avif",
  "character-teddy": "/portfolio/banner-teddy.avif",
  "character-emily": "/portfolio/banner-emily.avif",
};

const brandTypography: Record<string, { fontFamily: string; fontSrc?: string }> = {
  "jendela-finansial": { fontFamily: "Plus Jakarta Sans" },
  "consistrade-brand": { fontFamily: "Plus Jakarta Sans" },
  "hut-67-pelkat-pa": { fontFamily: "Plus Jakarta Sans" },
  "hut-63-pelkat-pa": { fontFamily: "Plus Jakarta Sans" },
  "gpib-immanuel-pekanbaru": { fontFamily: "Plus Jakarta Sans" },
  "pelkat-pa-gpib-immanuel-pekanbaru": { fontFamily: "Plus Jakarta Sans" },
};

export default function ProjectDetailPage() {
  const params = useParams();
  const slug = params?.slug as string;
  const project = getProjectBySlug(slug);

  if (!project) notFound();

  const images = project.projectImages ?? project.posts;
  const isBrandProject = project.category?.toUpperCase() === "BRAND IDENTITY";
  const isCharacterProject = project.category?.toUpperCase() === "CHARACTER DESIGN";
  const isGuidelineProject = isBrandProject || isCharacterProject;
  const isJendelaProject = slug === "jendela-finansial";
  const isGpibProject = slug === "gpib-immanuel-pekanbaru";
  const isConsistradeProject = slug === "consistrade-brand";
  const isHut63Project = slug === "hut-63-pelkat-pa";
  const isHut67Project = slug === "hut-67-pelkat-pa";
  const characterSocialMediaHref =
    slug === "character-jeni-and-jeno"
      ? "/portfolio/social-media-design#jendela-finansial"
      : slug === "character-tedy" || slug === "character-teddy"
        ? "/portfolio/social-media-design#consistrade"
        : undefined;
  const coverImage = brandBanners[slug] ?? project.posts?.[0]?.src ?? images?.[0]?.src;
  const colorPalette = brandColorPalettes[slug] ?? project.characterColorPalette;
  const characterGuidelineSlots = project.brandGuidelines?.map(
    (section) => [section.number, section.title, section.description] as const
  ) ?? [];
  const typography = brandTypography[slug] ?? { fontFamily: "Plus Jakarta Sans" };

  const designApproach = slug === "gpib-immanuel-pekanbaru"
    ? "I translated the concept into a practical visual system by redesigning the internal church logo, developing Elof as the church mascot, establishing colors, typography, graphic elements, and supporting symbols, then applying the system across social media and church information materials for a more consistent communication experience."
    : project.overview;

  const renderCharacterDescription = (description: string) => {
    const label = "Keywords:";
    const labelIndex = description.indexOf(label);

    if (labelIndex === -1) return description;

    return (
      <>
        {description.slice(0, labelIndex)}
        <span className="text-[#E96A98]">{label}</span>
        {description.slice(labelIndex + label.length)}
      </>
    );
  };

  return (
    <main className="min-h-screen overflow-x-hidden bg-white text-[#2D2433] selection:bg-pink-100 selection:text-pink-900">
      {coverImage && (
        <section className="w-full pt-[57px] md:pt-[53px]">
          <div className="relative aspect-[820/312] w-full overflow-hidden bg-pink-50">
            <Image src={coverImage} alt={`${project.title} cover`} fill priority sizes="100vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#2D2433]/20 via-transparent to-white/5" />
          </div>
        </section>
      )}

      <div className="mx-auto max-w-6xl px-5 pb-6 pt-7 sm:px-8 sm:pb-8 sm:pt-10 lg:px-10">
        <div className="mb-7 sm:mb-9">
          <Link href={isCharacterProject ? "/portfolio/character-design" : "/portfolio/brand-identity"} className="inline-flex items-center gap-2 py-1 text-[10px] font-mono font-bold uppercase tracking-wider text-[#6B6570] transition-colors hover:text-pink-600 sm:text-xs">
            <ArrowLeft className="h-3.5 w-3.5" />
            {isCharacterProject ? "BACK TO CHARACTER DESIGN" : "BACK TO BRAND IDENTITY"}
          </Link>
        </div>
        <div className="max-w-5xl">
          {isCharacterProject ? (
            <>
              <h1 className="max-w-5xl text-3xl font-extrabold uppercase leading-[0.94] tracking-tight text-[#2D2433] sm:text-5xl lg:text-6xl">{project.title}</h1>
              {project.visualStyle?.length ? (
                <p className="mt-4 text-xs font-medium leading-relaxed text-[#E96A98] sm:text-sm">
                  {project.visualStyle.join(" • ")}
                </p>
              ) : null}
            </>
          ) : (
            <>
              <span className="inline-flex rounded-full border border-pink-200 bg-pink-50 px-3 py-1.5 text-[9px] font-mono font-bold uppercase tracking-[0.16em] text-pink-600 sm:px-3.5 sm:py-2 sm:text-[10px]">{project.category}</span>
              <h1 className={`mt-4 max-w-5xl ${isGuidelineProject ? "text-3xl sm:text-5xl lg:text-6xl" : "text-4xl sm:text-6xl lg:text-7xl"} font-extrabold uppercase leading-[0.94] tracking-tight text-[#2D2433] sm:mt-5`}>{project.title}</h1>
              <div className="mt-8 grid grid-cols-3 border-y border-pink-100 sm:mt-10">
                <div className="border-r border-pink-100 py-4 pr-3 sm:py-5 sm:pr-6"><p className="text-[9px] font-mono font-bold uppercase tracking-[0.16em] text-pink-500 sm:text-[10px]">Client</p><p className="mt-1.5 text-xs font-semibold leading-relaxed text-[#2D2433] sm:text-sm">{project.details.client}</p></div>
                <div className="border-r border-pink-100 px-3 py-4 sm:px-6 sm:py-5"><p className="text-[9px] font-mono font-bold uppercase tracking-[0.16em] text-pink-500 sm:text-[10px]">Industry</p><p className="mt-1.5 text-xs font-semibold leading-relaxed text-[#2D2433] sm:text-sm">{project.details.industry}</p></div>
                <div className="py-4 pl-3 sm:py-5 sm:pl-6"><p className="text-[9px] font-mono font-bold uppercase tracking-[0.16em] text-pink-500 sm:text-[10px]">Role</p><p className="mt-1.5 text-xs font-semibold leading-relaxed text-[#2D2433] sm:text-sm">{project.details.role}</p></div>
              </div>
            </>
          )}
        </div>
      </div>

      <section className="mx-auto max-w-6xl px-5 pb-8 sm:px-8 sm:pb-12 lg:px-10">
        {isGuidelineProject ? (
          <div>
            <span className="inline-flex rounded-full border border-pink-200 bg-pink-50 px-3 py-1.5 text-[9px] font-mono font-bold uppercase tracking-[0.16em] text-pink-600 sm:px-3.5 sm:py-2 sm:text-[10px]">{isCharacterProject ? "BRIEF" : "DESIGN APPROACH"}</span>
            <p className="mt-4 max-w-4xl text-sm leading-7 text-[#6B6570] sm:text-base sm:leading-8">{designApproach}</p>
          </div>
        ) : (
          <div className="grid gap-8 md:grid-cols-2 md:gap-12 lg:gap-20">
            <div>
              <span className="inline-flex rounded-full border border-pink-200 bg-pink-50 px-3 py-1.5 text-[9px] font-mono font-bold uppercase tracking-[0.16em] text-pink-600 sm:px-3.5 sm:py-2 sm:text-[10px]">BIG IDEA</span>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-[#6B6570] sm:text-base sm:leading-8">{project.bigIdea || project.overview}</p>
            </div>
            <div>
              <span className="inline-flex rounded-full border border-pink-200 bg-pink-50 px-3 py-1.5 text-[9px] font-mono font-bold uppercase tracking-[0.16em] text-pink-600 sm:px-3.5 sm:py-2 sm:text-[10px]">DESIGN APPROACH</span>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-[#6B6570] sm:text-base sm:leading-8">{designApproach}</p>
            </div>
          </div>
        )}
        {project.challenge && (
          <div className="mt-10 border-t border-pink-100 pt-8 sm:mt-14 sm:pt-10">
            <div className="max-w-4xl">
              <span className="inline-flex rounded-full border border-pink-200 bg-pink-50 px-3 py-1.5 text-[9px] font-mono font-bold uppercase tracking-[0.16em] text-pink-600 sm:px-3.5 sm:py-2 sm:text-[10px]">{isCharacterProject ? "PURPOSE" : "CHALLENGE"}</span>
              <p className="mt-4 text-sm leading-7 text-[#6B6570] sm:text-base sm:leading-8">{project.challenge}</p>
            </div>
          </div>
        )}
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-10 sm:px-8 sm:pb-16 lg:px-10">
        <div className="rounded-2xl border border-pink-100 bg-pink-50/40 p-5 sm:rounded-3xl sm:p-7 lg:p-8">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <div><span className="block text-[9px] font-mono font-bold uppercase tracking-[0.16em] text-pink-500 sm:text-[10px]">Year</span><span className="mt-1.5 block text-sm font-bold text-[#2D2433]">{project.details.year}</span></div>
            <div><span className="block text-[9px] font-mono font-bold uppercase tracking-[0.16em] text-pink-500 sm:text-[10px]">Deliverables</span><span className="mt-1.5 block text-sm font-bold leading-relaxed text-[#2D2433]">{project.details.deliverables}</span></div>
            <div><span className="block text-[9px] font-mono font-bold uppercase tracking-[0.16em] text-pink-500 sm:text-[10px]">Tools</span><span className="mt-1.5 block text-sm font-bold leading-relaxed text-[#2D2433]">{project.details.tools}</span></div>
          </div>
        </div>
      </section>

      {isGuidelineProject ? (
        <section className="mx-auto max-w-6xl px-4 pb-12 pt-3 sm:px-8 sm:pb-20 sm:pt-5 lg:px-10">
          {isJendelaProject && (
            <div className="mb-8 max-w-4xl">
              <span className="inline-flex rounded-full border border-pink-200 bg-pink-50 px-3 py-1.5 text-[9px] font-mono font-bold uppercase tracking-[0.16em] text-pink-600 sm:px-3.5 sm:py-2 sm:text-[10px]">BIG IDEA</span>
              <p className="mt-4 whitespace-pre-line text-sm leading-7 text-[#6B6570] sm:text-base sm:leading-8">{project.bigIdea}</p>
            </div>
          )}
          <div className="mb-6 flex items-end justify-between gap-4 sm:mb-8">
            <div>
              {!isCharacterProject && (
                <span className="inline-flex rounded-full border border-pink-200 bg-pink-50 px-3 py-1.5 text-[9px] font-mono font-bold uppercase tracking-[0.16em] text-pink-600 sm:px-3.5 sm:py-2 sm:text-[10px]">BRAND DEVELOPMENT</span>
              )}
              <h2 className={`${isCharacterProject ? "" : "mt-3 "}text-2xl font-extrabold uppercase tracking-tight text-[#2D2433] sm:text-3xl`}>{isCharacterProject ? "CHARACTER DEVELOPMENT" : "Brand Guideline"}</h2>
            </div>
            {!isCharacterProject && (
              <span className="hidden rounded-full border border-pink-100 bg-white px-3 py-1 text-[8px] font-mono font-bold uppercase tracking-wider text-[#A39BA4] sm:block">{isHut67Project ? "8 BRAND SECTIONS" : isJendelaProject ? "6 IMAGE SLOTS" : "4 IMAGE SLOTS"}</span>
            )}
          </div>
          <div className="space-y-5 sm:space-y-7">
            {(isCharacterProject
              ? characterGuidelineSlots
              : isJendelaProject
              ? guidelineSlots
              : slug === "gpib-immanuel-pekanbaru"
                ? gpibBrandGuidelineSlots
                : isConsistradeProject
                  ? consistradeBrandGuidelineSlots
                  : isHut63Project
                    ? hut63BrandGuidelineSlots
                    : isHut67Project
                      ? hut67BrandGuidelineSlots
                      : otherBrandGuidelineSlots
            ).map(([number, title, description], index) => {
              const image = images[index];
              const guideline = project.brandGuidelines?.find(
                (section) => section.number === number
              );
              const sectionImages = isJendelaProject
                ? []
                : guideline?.images ?? [];
              const sectionDescription = isJendelaProject
                ? jendelaGuidelineDescriptions[number]
                : guideline?.description ?? description;
              const isCharacterColors =
                isCharacterProject && number === "02" && title === "COLORS";
              const isCharacterApplications =
                isCharacterProject && number === "04" && title === "APPLICATIONS";
              const isBrandCharacterSection =
                Boolean(project.characterProject) &&
                number === "06" &&
                title === "CHARACTER";
              const characterSectionImage = isBrandCharacterSection
                ? isJendelaProject
                  ? image
                  : sectionImages[0]
                : undefined;
              const isColorSection =
                isCharacterColors ||
                (isJendelaProject && number === "02") ||
                (isGpibProject && number === "03") ||
                (isConsistradeProject && number === "03") ||
                (isHut63Project && number === "05") ||
                (isHut67Project && number === "05");
              const isTypographySection =
                (isJendelaProject && number === "03") ||
                (isGpibProject && number === "04") ||
                (isConsistradeProject && number === "04") ||
                (isHut63Project && number === "06") ||
                (isHut67Project && number === "06");

              if (number === "02" && isHut63Project && project.brandMeaning) {
                return (
                  <article key={number} className="overflow-hidden rounded-[24px] border border-pink-100 bg-[#FFFBFD] shadow-[0_18px_50px_-25px_rgba(45,36,51,0.22)] sm:rounded-[30px]">
                    <div className="flex items-center gap-4 border-b border-pink-100 px-4 py-4 sm:px-6 sm:py-5">
                      <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-pink-50 text-[10px] font-mono font-bold text-pink-600 sm:h-11 sm:w-11 sm:text-xs">02</span>
                      <h3 className="text-sm font-extrabold uppercase tracking-wide text-[#2D2433] sm:text-base">MEANING</h3>
                    </div>
                    <div className="px-4 pt-5 sm:px-6 sm:pt-7">
                      <div className="mx-auto w-full max-w-2xl overflow-hidden rounded-2xl bg-white">
                        <Image
                          src="/portfolio/branding-hut63b.avif"
                          alt="HUT 63 logo meaning"
                          width={2430}
                          height={2430}
                          sizes="(max-width: 640px) 100vw, 672px"
                          className="h-auto w-full object-contain"
                        />
                      </div>
                    </div>
                    <ol className="space-y-4 p-4 sm:space-y-5 sm:p-6">
                      {project.brandMeaning.map((item, index) => (
                        <li key={item.title || item.description} className="flex gap-4 rounded-2xl border border-pink-100 bg-white p-4 sm:gap-5 sm:p-5">
                          <span
                            className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#56B48C] text-[10px] font-mono font-medium text-transparent"
                            style={{ WebkitTextStroke: "0.75px #FFFFFF" }}
                          >
                            {index + 1}
                          </span>
                          <p className="text-sm leading-7 text-[#6B6570] sm:text-base sm:leading-8">{item.description}</p>
                        </li>
                      ))}
                    </ol>
                  </article>
                );
              }

              if (number === "02" && project.brandMeaning) {
                const isCompactListProject = isHut63Project;
                const isHut67MeaningGrid = isHut67Project;
                const isConsistradeMeaning = isConsistradeProject;

                return (
                  <article key={number} className="overflow-hidden rounded-[24px] border border-pink-100 bg-[#FFFBFD] shadow-[0_18px_50px_-25px_rgba(45,36,51,0.22)] sm:rounded-[30px]">
                    <div className="flex items-center gap-4 border-b border-pink-100 px-4 py-4 sm:px-6 sm:py-5">
                      <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-pink-50 text-[10px] font-mono font-bold text-pink-600 sm:h-11 sm:w-11 sm:text-xs">02</span>
                      <h3 className={`text-sm font-extrabold uppercase tracking-wide sm:text-base ${isHut67Project ? "text-primary" : "text-[#2D2433]"}`}>MEANING</h3>
                    </div>
                    <div className={`grid gap-3 p-3 sm:gap-4 sm:p-5 ${isHut67MeaningGrid ? "grid-cols-1 md:grid-cols-6" : isCompactListProject ? "md:grid-cols-1" : isConsistradeMeaning ? "md:grid-cols-5 lg:grid-cols-1" : "md:grid-cols-5"}`}>
                      {project.brandMeaning.map((item) => (
                        <div
                          key={item.src + item.title}
                          className={`min-w-0 rounded-2xl border border-pink-100 bg-white ${isHut67MeaningGrid ? "flex items-center gap-3 p-2.5 sm:gap-3 md:flex-col md:items-center md:gap-2 md:p-2.5" : isCompactListProject ? "flex items-center gap-3 p-3 md:gap-4" : `flex items-center gap-4 p-3 md:flex-col md:items-center md:gap-3 ${isConsistradeMeaning ? "lg:gap-3 lg:p-5" : ""}`}`}
                        >
                          <div className={`relative shrink-0 overflow-hidden rounded-xl bg-pink-50 ${isHut67MeaningGrid ? "h-[76px] w-[76px] sm:h-[80px] sm:w-[80px] md:h-[clamp(4.25rem,5vw,6.25rem)] md:w-[clamp(4.25rem,5vw,6.25rem)]" : `h-[72px] w-[72px] md:h-[clamp(4rem,7vw,6rem)] md:w-[clamp(4rem,7vw,6rem)] ${isConsistradeMeaning ? "lg:h-52 lg:w-52" : ""}`}`}>
                            <Image
                              src={item.src}
                              alt={item.alt || "Logo meaning"}
                              width={item.width}
                              height={item.height}
                              sizes={isHut67MeaningGrid ? "(max-width: 767px) 80px, (max-width: 1280px) 6vw, 120px" : "(max-width: 767px) 72px, (max-width: 1280px) 8vw, 112px"}
                              className="h-full w-full object-contain"
                            />
                          </div>
                          <p className={`text-xs leading-relaxed text-[#6B6570] ${isHut67MeaningGrid ? "flex-1 md:flex-none md:text-center" : isCompactListProject ? "flex-1 md:text-sm" : `flex-1 md:flex-none md:text-center ${isConsistradeMeaning ? "lg:w-full lg:max-w-125" : ""}`}`}>
                            {item.title && (
                              <span className={`${isHut67MeaningGrid ? `mb-1 block font-bold md:mb-1 ${isHut67Project ? "text-primary" : "text-[#2D2433]"}` : isCompactListProject ? "mr-2 inline-block min-w-[2.25rem] font-bold text-[#2D2433]" : "mb-1 block font-bold text-[#2D2433]"}`}>
                                {isHut67Project ? item.title.replace(/^\d+\s*[-–—]\s*/, "") : item.title}
                              </span>
                            )}
                            {item.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </article>
                );
              }

              return (
                <article key={number} className="overflow-hidden rounded-[24px] border border-pink-100 bg-[#FFFBFD] shadow-[0_18px_50px_-25px_rgba(45,36,51,0.22)] sm:rounded-[30px]">
                  <div className={`${isBrandCharacterSection ? "flex items-center gap-3 sm:gap-4" : "flex items-center justify-between gap-4"} border-b border-pink-100 px-4 py-4 sm:px-6 sm:py-5`}>
                    {isBrandCharacterSection ? (
                      <>
                        <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-pink-50 text-[10px] font-mono font-bold text-pink-600 sm:h-11 sm:w-11 sm:text-xs">{number}</span>
                        <h3 className="text-sm font-extrabold uppercase tracking-wide text-[#2D2433] sm:text-base">{title}</h3>
                      </>
                    ) : (
                      <>
                        <div className="flex items-center gap-3 sm:gap-4">
                          <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-pink-50 text-[10px] font-mono font-bold text-pink-600 sm:h-11 sm:w-11 sm:text-xs">{number}</span>
                          <div>
                            <h3 className="text-sm font-extrabold uppercase tracking-wide text-[#2D2433] sm:text-base">{title}</h3>
                          </div>
                        </div>
                        <span className="hidden rounded-full border border-pink-100 bg-white px-3 py-1 text-[8px] font-mono font-bold uppercase tracking-wider text-[#A39BA4] sm:block">
                          {isCharacterProject
                            ? number === "03"
                              ? "FINAL ARTWORK"
                              : number === "02"
                                ? "COLOR GUIDE"
                              : number === "04"
                                ? "APPLICATIONS"
                                : "PROJECT DETAILS"
                            : isColorSection && colorPalette
                            ? "COLOR GUIDE"
                            : isTypographySection
                              ? "TYPE GUIDE"
                              : isJendelaProject
                                ? image
                                  ? "IMAGE READY"
                                  : "ADD IMAGE"
                                : sectionImages.length > 0
                                  ? "IMAGE READY"
                                  : "ADD IMAGE"}
                        </span>
                      </>
                    )}
                  </div>
                  <div className={isBrandCharacterSection ? "flex flex-col items-start gap-5 p-4 sm:p-6" : isCharacterApplications ? "flex flex-col items-start gap-5 p-3 sm:p-5" : "p-3 sm:p-5"}>
                    {isBrandCharacterSection && characterSectionImage && project.characterProject ? (
                      <>
                        <div className="mx-auto w-full overflow-hidden rounded-2xl bg-white lg:w-[50vw] lg:max-w-200">
                          <Image
                            src={characterSectionImage.src}
                            alt={characterSectionImage.alt || `${project.title} character artwork`}
                            width={characterSectionImage.width ?? 1920}
                            height={characterSectionImage.height ?? 1080}
                            sizes="(max-width: 640px) 100vw, 1152px"
                            className="h-auto w-full object-contain"
                          />
                        </div>
                        <Link href={`/portfolio/project/${project.characterProject.slug}`} className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-center text-[10px] font-mono font-bold uppercase tracking-wider text-white transition-colors hover:bg-primary-hover focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary sm:w-fit sm:px-6 sm:text-xs">
                          VIEW CHARACTER PROJECT <span aria-hidden="true">→</span>
                        </Link>
                      </>
                    ) : isCharacterProject && number === "02" && sectionImages.length === 0 && !isCharacterColors ? (
                      <p className="text-xs leading-relaxed text-[#6B6570] whitespace-pre-line sm:text-sm lg:text-base">{renderCharacterDescription(sectionDescription)}</p>
                    ) : isCharacterProject && number === "05" ? (
                      <p className="text-xs leading-relaxed text-[#6B6570] whitespace-pre-line sm:text-sm lg:text-base">{renderCharacterDescription(sectionDescription)}</p>
                    ) : isColorSection && colorPalette ? (
                      <div className="rounded-2xl bg-white px-4 py-6 sm:px-6 sm:py-8"><ColorPalette colors={colorPalette} /></div>
                    ) : isTypographySection ? (
                      <TypographyPalette {...typography} />
                    ) : isJendelaProject && image ? (
                      <div className="relative mx-auto w-full overflow-hidden rounded-2xl bg-white lg:w-[50vw] lg:max-w-200"><Image src={image.src} alt={image.alt || `${project.title} ${title}`} width={1920} height={1080} sizes="(max-width: 1280px) 100vw, 1152px" className="h-auto w-full object-contain" /></div>
                    ) : isCharacterApplications ? (
                      <>
                        {sectionImages.length > 0 && (
                          <div className={`grid w-full grid-cols-1 gap-3 sm:grid-cols-2 ${sectionImages.length === 1 ? "lg:grid-cols-1" : ""}`}>
                            {sectionImages.map((sectionImage, imageIndex) => (
                              <div
                                key={`${sectionImage.src}-${imageIndex}`}
                                className={`relative mx-auto w-full overflow-hidden rounded-2xl bg-white ${sectionImages.length === 1 ? "lg:w-[50vw] lg:max-w-200" : ""}`}
                              >
                                <Image
                                  src={sectionImage.src}
                                  alt={sectionImage.alt || `${project.title} ${title}`}
                                  width={sectionImage.width}
                                  height={sectionImage.height}
                                  sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 576px"
                                  className="h-auto w-full object-contain"
                                />
                                {sectionImage.caption && (
                                  <p className="px-3 py-2 text-center text-[10px] font-semibold uppercase tracking-wider text-[#6B6570] sm:text-xs">
                                    {sectionImage.caption}
                                  </p>
                                )}
                              </div>
                            ))}
                          </div>
                        )}
                        <p className="max-w-3xl text-xs leading-6 text-[#6B6570] sm:text-sm sm:leading-7">
                          {sectionDescription}
                        </p>
                        {characterSocialMediaHref && (
                          <Link href={characterSocialMediaHref} className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-center text-[10px] font-mono font-bold uppercase tracking-wider text-white transition-colors hover:bg-primary-hover focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary sm:w-fit sm:px-6 sm:text-xs">
                            VIEW SOCIAL MEDIA PROJECT <span aria-hidden="true">→</span>
                          </Link>
                        )}
                      </>
                    ) : !isJendelaProject && sectionImages.length > 0 ? (
                      <div className={`grid grid-cols-1 gap-3 sm:grid-cols-2 ${sectionImages.length === 1 ? "lg:grid-cols-1" : ""}`}>
                        {sectionImages.map((sectionImage, imageIndex) => (
                          <div
                            key={`${sectionImage.src}-${imageIndex}`}
                            className={`relative mx-auto w-full overflow-hidden rounded-2xl bg-white ${sectionImages.length === 1 ? "lg:w-[50vw] lg:max-w-200" : ""}`}
                          >
                            <Image
                              src={sectionImage.src}
                              alt={sectionImage.alt || `${project.title} ${title}`}
                              width={sectionImage.width}
                              height={sectionImage.height}
                              sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 576px"
                              className="h-auto w-full object-contain"
                            />
                            {sectionImage.caption && (
                              <p className="px-3 py-2 text-center text-[10px] font-semibold uppercase tracking-wider text-[#6B6570] sm:text-xs">
                                {sectionImage.caption}
                              </p>
                            )}
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="flex min-h-[240px] items-center justify-center rounded-2xl border-2 border-dashed border-pink-200 bg-white sm:min-h-[380px]"><div className="px-6 text-center"><div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-pink-50 text-xl font-light text-pink-400">+</div><p className="mt-3 text-xs font-bold uppercase tracking-wider text-[#6B6570]">Add {title} image</p><p className="mt-1 text-[10px] leading-relaxed text-[#A39BA4]">{isJendelaProject ? "Tambahkan file ke public/portfolio lalu masukkan path-nya ke projectImages." : `Add branding-[project]${Number(number)}.avif to public/portfolio; append -2, -3 for additional images.`}</p></div></div>
                    )}
                    {isJendelaProject && !isBrandCharacterSection && (
                      <p className="mt-4 px-1 text-xs leading-6 text-[#6B6570] sm:px-2 sm:text-sm sm:leading-7">{sectionDescription}</p>
                    )}
                  </div>
                  {!isBrandCharacterSection && !isJendelaProject && !isColorSection && !isTypographySection && !isCharacterApplications && !(isCharacterProject && (number === "02" && sectionImages.length === 0 || number === "05" || !sectionDescription)) && (
                    <p className={`px-4 pb-4 text-xs leading-6 text-[#6B6570] sm:px-7 sm:pb-6 sm:text-sm sm:leading-7 ${isCharacterProject ? "whitespace-pre-line" : ""}`}>
                      {isCharacterProject ? renderCharacterDescription(sectionDescription) : sectionDescription}
                    </p>
                  )}
                </article>
              );
            })}
            {isJendelaProject && (
              <article className="overflow-hidden rounded-[24px] border border-pink-100 bg-[#FFFBFD] shadow-[0_18px_50px_-25px_rgba(45,36,51,0.22)] sm:rounded-[30px]">
                <div className="flex items-center gap-3 border-b border-pink-100 px-4 py-4 sm:gap-4 sm:px-6 sm:py-5">
                  <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-pink-50 text-[10px] font-mono font-bold text-pink-600 sm:h-11 sm:w-11 sm:text-xs">07</span>
                  <h3 className="text-sm font-extrabold uppercase tracking-wide text-[#2D2433] sm:text-base">SOCIAL MEDIA</h3>
                </div>
                <div className="flex flex-col items-start gap-5 p-4 sm:p-6">
                  <p className="max-w-3xl text-xs leading-6 text-[#6B6570] sm:text-sm sm:leading-7">Explore how the Jendela Finansial visual identity is applied across social media through educational, interactive, and engaging content.</p>
                  <Link href="/portfolio/social-media-design#jendela-finansial" className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-center text-[10px] font-mono font-bold uppercase tracking-wider text-white transition-colors hover:bg-primary-hover focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary sm:w-fit sm:px-6 sm:text-xs">
                    VIEW SOCIAL MEDIA PROJECT <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </article>
            )}
            {slug === "pelkat-pa-gpib-immanuel-pekanbaru" && (
              <article className="overflow-hidden rounded-[24px] border border-pink-100 bg-[#FFFBFD] shadow-[0_18px_50px_-25px_rgba(45,36,51,0.22)] sm:rounded-[30px]">
                <div className="flex items-center gap-3 border-b border-pink-100 px-4 py-4 sm:gap-4 sm:px-6 sm:py-5">
                  <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-pink-50 text-[10px] font-mono font-bold text-pink-600 sm:h-11 sm:w-11 sm:text-xs">07</span>
                  <h3 className="text-sm font-extrabold uppercase tracking-wide text-[#2D2433] sm:text-base">SOCIAL MEDIA</h3>
                </div>
                <div className="flex flex-col items-start gap-5 p-4 sm:p-6">
                  <p className="max-w-3xl text-xs leading-6 text-[#6B6570] sm:text-sm sm:leading-7">
                    Explore how the Pelkat PA GPIB Immanuel Pekanbaru visual identity is applied across social media through engaging, informative, and community-focused content.
                  </p>
                  <Link href="/portfolio/social-media-design#pelkat-pa" className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-center text-[10px] font-mono font-bold uppercase tracking-wider text-white transition-colors hover:bg-primary-hover focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary sm:w-fit sm:px-6 sm:text-xs">
                    VIEW SOCIAL MEDIA PROJECT <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </article>
            )}
            {isConsistradeProject && (
              <article className="overflow-hidden rounded-[24px] border border-pink-100 bg-[#FFFBFD] shadow-[0_18px_50px_-25px_rgba(45,36,51,0.22)] sm:rounded-[30px]">
                <div className="flex items-center gap-3 border-b border-pink-100 px-4 py-4 sm:gap-4 sm:px-6 sm:py-5">
                  <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-pink-50 text-[10px] font-mono font-bold text-pink-600 sm:h-11 sm:w-11 sm:text-xs">07</span>
                  <h3 className="text-sm font-extrabold uppercase tracking-wide text-[#2D2433] sm:text-base">SOCIAL MEDIA</h3>
                </div>
                <div className="flex flex-col items-start gap-5 p-4 sm:p-6">
                  <p className="max-w-3xl text-xs leading-6 text-[#6B6570] sm:text-sm sm:leading-7">
                    Explore how the Consistrade visual identity is applied across educational social content, trading insights, and community-driven digital marketing.
                  </p>
                  <Link href="/portfolio/social-media-design#consistrade" className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-center text-[10px] font-mono font-bold uppercase tracking-wider text-white transition-colors hover:bg-primary-hover focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary sm:w-fit sm:px-6 sm:text-xs">
                    VIEW SOCIAL MEDIA PROJECT <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </article>
            )}
          </div>
        </section>
      ) : (
        <section className="mx-auto max-w-6xl px-4 pb-12 pt-3 sm:px-8 sm:pb-20 sm:pt-5 lg:px-10">
          <div className="mb-6 flex items-center justify-between sm:mb-8"><span className="inline-flex rounded-full border border-pink-200 bg-pink-50 px-3 py-1.5 text-[9px] font-mono font-bold uppercase tracking-[0.16em] text-pink-600 sm:px-3.5 sm:py-2 sm:text-[10px]">PROJECT GALLERY</span><span className="text-[9px] font-mono font-bold uppercase tracking-wider text-[#A39BA4] sm:text-[10px]">{images.length.toString().padStart(2, "0")} {images.length === 1 ? "IMAGE" : "IMAGES"}</span></div>
          <div className="space-y-5 sm:space-y-8">{images.map((image, index) => (<figure key={`${image.src}-${index}`} className="overflow-hidden rounded-2xl border border-pink-100 bg-white shadow-[0_18px_45px_-25px_rgba(233,106,152,0.25)] sm:rounded-3xl"><Image src={image.src} alt={image.alt || `${project.title} ${index + 1}`} width={1920} height={1080} priority={index === 0} sizes="(max-width: 1280px) 100vw, 1152px" className="h-auto w-full object-cover" />{image.caption && <figcaption className="px-4 py-3 text-xs leading-relaxed text-[#6B6570] sm:px-6 sm:py-4 sm:text-sm">{image.caption}</figcaption>}</figure>))}</div>
        </section>
      )}

      <div className="mx-auto max-w-6xl px-5 pb-16 sm:px-8 sm:pb-24 lg:px-10">
        <Link href={isCharacterProject ? "/portfolio/character-design" : "/portfolio/brand-identity"} className="inline-flex items-center gap-2 rounded-full border border-pink-200 bg-pink-50 px-5 py-2.5 text-[10px] font-mono font-bold uppercase tracking-wider text-pink-600 transition-all hover:-translate-x-1 hover:bg-pink-100 sm:px-6 sm:py-3 sm:text-xs"><ArrowLeft className="h-3.5 w-3.5" />{isCharacterProject ? "BACK TO CHARACTER DESIGN" : "BACK TO BRAND IDENTITY"}</Link>
      </div>
    </main>
  );
}
