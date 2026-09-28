"use client";

import Image from "next/image";
import Link from "next/link";
import { notFound, useParams } from "next/navigation";
import { ArrowLeft } from "lucide-react";

import { getProjectBySlug } from "../../[slug]/portfolio-data";
import { useLanguage } from "@/context/LanguageContext";
import ColorPalette from "@/components/work/ColorPalette";

const guidelineSlots = [
  ["01", "LOGO", "Logo utama, variasi logo, dan penjelasan sistem identitas."],
  ["02", "COLORS", "Primary color, secondary color, dan palet warna pendukung."],
  ["03", "TYPOGRAPHY", "Primary font, supporting font, dan aturan hierarchy."],
  ["04", "ELEMENT", "Elemen visual yang membangun karakter dan konsistensi brand."],
  ["05", "SUPPORTING ELEMENT", "Ikon, simbol, pattern, dan elemen pendukung komunikasi."],
  ["06", "CHARACTER", "Character / mascot beserta variasi pose dan penggunaannya."],
] as const;

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
};

export default function ProjectDetailPage() {
  const { t } = useLanguage();
  const params = useParams();
  const slug = params?.slug as string;
  const project = getProjectBySlug(slug);

  if (!project) notFound();

  const images = project.projectImages ?? project.posts;
  const isBrandProject = project.category?.toUpperCase() === "BRAND IDENTITY";
  const coverImage = brandBanners[slug] ?? project.posts?.[0]?.src ?? images?.[0]?.src;
  const colorPalette = brandColorPalettes[slug];

  const bigIdea = slug === "gpib-immanuel-pekanbaru"
    ? "Building a visual identity that reflects GPIB Immanuel Pekanbaru as a welcoming, faithful, and active church community. The identity brings together the congregation's heritage, local character, and spirit of service into a visual language that feels recognizable, meaningful, and relevant."
    : project.bigIdea || project.overview;

  const designApproach = slug === "gpib-immanuel-pekanbaru"
    ? "I translated the concept into a practical visual system by redesigning the internal church logo, developing Elof as the church mascot, establishing colors, typography, graphic elements, and supporting symbols, then applying the system across social media and church information materials for a more consistent communication experience."
    : project.overview;

  return (
    <main className="min-h-screen overflow-x-hidden bg-white text-[#2D2433] selection:bg-pink-100 selection:text-pink-900">
      {/* FULL-BLEED BRANDING COVER */}
      {coverImage && (
        <section className="mx-auto max-w-6xl pt-20 sm:pt-24 lg:pt-28">
          <div className="relative aspect-[820/312] w-full overflow-hidden bg-pink-50">
            <Image
              src={coverImage}
              alt={`${project.title} cover`}
              fill
              priority
              sizes="(max-width: 1280px) 100vw, 1200px"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#2D2433]/20 via-transparent to-white/5" />
          </div>
        </section>
      )}

      {/* HEADER */}
      <div className="mx-auto max-w-6xl px-5 pb-6 pt-7 sm:px-8 sm:pb-8 sm:pt-10 lg:px-10">
        <div className="mb-7 sm:mb-9">
          <Link href="/portfolio/brand-identity" className="inline-flex items-center gap-2 py-1 text-[10px] font-mono font-bold uppercase tracking-wider text-[#6B6570] transition-colors hover:text-pink-600 sm:text-xs">
            <ArrowLeft className="h-3.5 w-3.5" />
            BACK TO BRAND IDENTITY
          </Link>
        </div>

        <div className="max-w-5xl">
          <span className="inline-flex rounded-full border border-pink-200 bg-pink-50 px-3 py-1.5 text-[9px] font-mono font-bold uppercase tracking-[0.16em] text-pink-600 sm:px-3.5 sm:py-2 sm:text-[10px]">
            {project.category}
          </span>

          <h1 className="mt-4 max-w-5xl text-4xl font-extrabold uppercase leading-[0.94] tracking-tight text-[#2D2433] sm:mt-5 sm:text-6xl lg:text-7xl">
            {project.title}
          </h1>

          <div className="mt-8 grid grid-cols-3 border-y border-pink-100 sm:mt-10">
            <div className="border-r border-pink-100 py-4 pr-3 sm:py-5 sm:pr-6">
              <p className="text-[9px] font-mono font-bold uppercase tracking-[0.16em] text-pink-500 sm:text-[10px]">Client</p>
              <p className="mt-1.5 text-xs font-semibold leading-relaxed text-[#2D2433] sm:text-sm">{project.details.client}</p>
            </div>
            <div className="border-r border-pink-100 px-3 py-4 sm:px-6 sm:py-5">
              <p className="text-[9px] font-mono font-bold uppercase tracking-[0.16em] text-pink-500 sm:text-[10px]">Industry</p>
              <p className="mt-1.5 text-xs font-semibold leading-relaxed text-[#2D2433] sm:text-sm">{project.details.industry}</p>
            </div>
            <div className="py-4 pl-3 sm:py-5 sm:pl-6">
              <p className="text-[9px] font-mono font-bold uppercase tracking-[0.16em] text-pink-500 sm:text-[10px]">Role</p>
              <p className="mt-1.5 text-xs font-semibold leading-relaxed text-[#2D2433] sm:text-sm">{project.details.role}</p>
            </div>
          </div>
        </div>
      </div>

      {/* PROJECT STORY */}
      <section className="mx-auto max-w-6xl px-5 pb-8 sm:px-8 sm:pb-12 lg:px-10">
        <div className="grid gap-8 md:grid-cols-2 md:gap-12 lg:gap-20">
          <div>
            <span className="inline-flex rounded-full border border-pink-200 bg-pink-50 px-3 py-1.5 text-[9px] font-mono font-bold uppercase tracking-[0.16em] text-pink-600 sm:px-3.5 sm:py-2 sm:text-[10px]">BIG IDEA</span>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-[#6B6570] sm:text-base sm:leading-8">{bigIdea}</p>
          </div>
          <div>
            <span className="inline-flex rounded-full border border-pink-200 bg-pink-50 px-3 py-1.5 text-[9px] font-mono font-bold uppercase tracking-[0.16em] text-pink-600 sm:px-3.5 sm:py-2 sm:text-[10px]">DESIGN APPROACH</span>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-[#6B6570] sm:text-base sm:leading-8">{designApproach}</p>
          </div>
        </div>

        {project.challenge && (
          <div className="mt-10 border-t border-pink-100 pt-8 sm:mt-14 sm:pt-10">
            <div className="max-w-4xl">
              <span className="inline-flex rounded-full border border-pink-200 bg-pink-50 px-3 py-1.5 text-[9px] font-mono font-bold uppercase tracking-[0.16em] text-pink-600 sm:px-3.5 sm:py-2 sm:text-[10px]">CHALLENGE</span>
              <p className="mt-4 text-sm leading-7 text-[#6B6570] sm:text-base sm:leading-8">{project.challenge}</p>
            </div>
          </div>
        )}
      </section>

      {/* PROJECT DETAILS */}
      <section className="mx-auto max-w-6xl px-5 pb-10 sm:px-8 sm:pb-16 lg:px-10">
        <div className="rounded-2xl border border-pink-100 bg-pink-50/40 p-5 sm:rounded-3xl sm:p-7 lg:p-8">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <div><span className="block text-[9px] font-mono font-bold uppercase tracking-[0.16em] text-pink-500 sm:text-[10px]">Year</span><span className="mt-1.5 block text-sm font-bold text-[#2D2433]">{project.details.year}</span></div>
            <div><span className="block text-[9px] font-mono font-bold uppercase tracking-[0.16em] text-pink-500 sm:text-[10px]">Deliverables</span><span className="mt-1.5 block text-sm font-bold leading-relaxed text-[#2D2433]">{project.details.deliverables}</span></div>
            <div><span className="block text-[9px] font-mono font-bold uppercase tracking-[0.16em] text-pink-500 sm:text-[10px]">Tools</span><span className="mt-1.5 block text-sm font-bold leading-relaxed text-[#2D2433]">{project.details.tools}</span></div>
          </div>
        </div>
      </section>

      {/* BRAND DEVELOPMENT / SAME TEMPLATE FOR ALL BRAND PROJECTS */}
      {isBrandProject ? (
        <section className="mx-auto max-w-6xl px-4 pb-12 pt-3 sm:px-8 sm:pb-20 sm:pt-5 lg:px-10">
          <div className="mb-6 flex items-end justify-between gap-4 sm:mb-8">
            <div>
              <span className="inline-flex rounded-full border border-pink-200 bg-pink-50 px-3 py-1.5 text-[9px] font-mono font-bold uppercase tracking-[0.16em] text-pink-600 sm:px-3.5 sm:py-2 sm:text-[10px]">BRAND DEVELOPMENT</span>
              <h2 className="mt-3 text-2xl font-extrabold uppercase tracking-tight text-[#2D2433] sm:text-3xl">Brand Guideline</h2>
            </div>
            <span className="hidden rounded-full border border-pink-100 bg-white px-3 py-1 text-[8px] font-mono font-bold uppercase tracking-wider text-[#A39BA4] sm:block">6 IMAGE SLOTS</span>
          </div>

          <div className="space-y-5 sm:space-y-7">
            {guidelineSlots.map(([number, title, description], index) => {
              const image = images[index];

              return (
                <article key={number} className="overflow-hidden rounded-[24px] border border-pink-100 bg-[#FFFBFD] shadow-[0_18px_50px_-25px_rgba(45,36,51,0.22)] sm:rounded-[30px]">
                  <div className="flex items-center justify-between gap-4 border-b border-pink-100 px-4 py-4 sm:px-6 sm:py-5">
                    <div className="flex items-center gap-3 sm:gap-4">
                      <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-pink-50 text-[10px] font-mono font-bold text-pink-600 sm:h-11 sm:w-11 sm:text-xs">{number}</span>
                      <div>
                        <h3 className="text-sm font-extrabold uppercase tracking-wide text-[#2D2433] sm:text-base">{title}</h3>
                        <p className="mt-0.5 text-[10px] leading-relaxed text-[#8A818C] sm:text-xs">{description}</p>
                      </div>
                    </div>
                    <span className="hidden rounded-full border border-pink-100 bg-white px-3 py-1 text-[8px] font-mono font-bold uppercase tracking-wider text-[#A39BA4] sm:block">{index === 1 && colorPalette ? "COLOR GUIDE" : image ? "IMAGE READY" : "ADD IMAGE"}</span>
                  </div>

                  <div className="p-3 sm:p-5">
                    {index === 1 && colorPalette ? (
                      <div className="rounded-2xl bg-white px-4 py-6 sm:px-6 sm:py-8">
                        <ColorPalette colors={colorPalette} />
                      </div>
                    ) : image ? (
                      <div className="relative w-full overflow-hidden rounded-2xl bg-white">
                        <Image
                          src={image.src}
                          alt={image.alt || `${project.title} ${title}`}
                          width={1920}
                          height={1080}
                          sizes="(max-width: 1280px) 100vw, 1152px"
                          className="h-auto w-full object-contain"
                        />
                      </div>
                    ) : (
                      <div className="flex min-h-[240px] items-center justify-center rounded-2xl border-2 border-dashed border-pink-200 bg-white sm:min-h-[380px]">
                        <div className="px-6 text-center">
                          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-pink-50 text-xl font-light text-pink-400">+</div>
                          <p className="mt-3 text-xs font-bold uppercase tracking-wider text-[#6B6570]">Add {title} image</p>
                          <p className="mt-1 text-[10px] leading-relaxed text-[#A39BA4]">Tambahkan file ke public/portfolio lalu masukkan path-nya ke projectImages.</p>
                        </div>
                      </div>
                    )}
                  </div>
                </article>
              );
            })}
          </div>
        </section>
      ) : (
        <section className="mx-auto max-w-6xl px-4 pb-12 pt-3 sm:px-8 sm:pb-20 sm:pt-5 lg:px-10">
          <div className="mb-6 flex items-center justify-between sm:mb-8">
            <span className="inline-flex rounded-full border border-pink-200 bg-pink-50 px-3 py-1.5 text-[9px] font-mono font-bold uppercase tracking-[0.16em] text-pink-600 sm:px-3.5 sm:py-2 sm:text-[10px]">PROJECT GALLERY</span>
            <span className="text-[9px] font-mono font-bold uppercase tracking-wider text-[#A39BA4] sm:text-[10px]">{images.length.toString().padStart(2, "0")} {images.length === 1 ? "IMAGE" : "IMAGES"}</span>
          </div>
          <div className="space-y-5 sm:space-y-8">
            {images.map((image, index) => (
              <figure key={`${image.src}-${index}`} className="overflow-hidden rounded-2xl border border-pink-100 bg-white shadow-[0_18px_45px_-25px_rgba(233,106,152,0.25)] sm:rounded-3xl">
                <Image src={image.src} alt={image.alt || `${project.title} ${index + 1}`} width={1920} height={1080} priority={index === 0} sizes="(max-width: 1280px) 100vw, 1152px" className="h-auto w-full object-cover" />
                {image.caption && <figcaption className="px-4 py-3 text-xs leading-relaxed text-[#6B6570] sm:px-6 sm:py-4 sm:text-sm">{image.caption}</figcaption>}
              </figure>
            ))}
          </div>
        </section>
      )}

      {/* FOOTER NAVIGATION */}
      <div className="mx-auto max-w-6xl px-5 pb-16 sm:px-8 sm:pb-24 lg:px-10">
        <Link href="/portfolio/brand-identity" className="inline-flex items-center gap-2 rounded-full border border-pink-200 bg-pink-50 px-5 py-2.5 text-[10px] font-mono font-bold uppercase tracking-wider text-pink-600 transition-all hover:-translate-x-1 hover:bg-pink-100 sm:px-6 sm:py-3 sm:text-xs">
          <ArrowLeft className="h-3.5 w-3.5" />
          BACK TO BRAND IDENTITY
        </Link>
      </div>
    </main>
  );
}
