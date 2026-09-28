"use client";

import Image from "next/image";
import Link from "next/link";
import { notFound, useParams } from "next/navigation";
import { ArrowLeft } from "lucide-react";

import { getProjectBySlug } from "../../[slug]/portfolio-data";
import { useLanguage } from "@/context/LanguageContext";

export default function ProjectDetailPage() {
  const { t } = useLanguage();

  const params = useParams();
  const slug = params?.slug as string;

  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const images = project.projectImages ?? project.posts;
  const isGpibProject = slug === "gpib-immanuel-pekanbaru";
  const coverImage = project.posts?.[0]?.src ?? images?.[0]?.src;

  const bigIdea = isGpibProject
    ? "Developing a cohesive visual identity for GPIB Immanuel Pekanbaru through internal church branding, character design, social media visuals, and informative communication materials."
    : project.bigIdea || project.overview;

  const designApproach = isGpibProject
    ? "I designed internal GPIB logos to visually represent the Immanuel congregation in Pekanbaru, created Elof as a character representing the church in serving its congregation, and developed social media branding and church information materials with a strong, informative, and artistic identity."
    : project.overview;

  return (
    <main className="min-h-screen overflow-x-hidden bg-white text-[#2D2433] selection:bg-pink-100 selection:text-pink-900">

      {/* =========================
          HEADER
      ========================== */}
      <div className="mx-auto max-w-6xl px-5 pb-6 pt-24 sm:px-8 sm:pb-8 sm:pt-28 lg:px-10 lg:pt-32">

        <div className="mb-7 sm:mb-9">
          <Link
            href="/portfolio/brand-identity"
            className="inline-flex items-center gap-2 py-1 text-[10px] font-mono font-bold uppercase tracking-wider text-[#6B6570] transition-colors hover:text-pink-600 sm:text-xs"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            BACK TO BRAND IDENTITY
          </Link>
        </div>

        {/* FACEBOOK-STYLE COVER */}
        {coverImage && (
          <div className="relative mb-7 aspect-[820/312] w-full overflow-hidden rounded-2xl border border-pink-100 bg-pink-50 shadow-[0_18px_45px_-20px_rgba(233,106,152,0.25)] sm:mb-9 sm:rounded-3xl">
            <Image
              src={coverImage}
              alt={`${project.title} cover`}
              fill
              priority
              sizes="(max-width: 1280px) 100vw, 1152px"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#2D2433]/20 via-transparent to-white/5" />
          </div>
        )}

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

      {/* =========================
          PROJECT STORY
      ========================== */}
      <section className="mx-auto max-w-6xl px-5 pb-8 sm:px-8 sm:pb-12 lg:px-10">
        <div className="grid gap-8 md:grid-cols-2 md:gap-12 lg:gap-20">
          <div>
            <span className="inline-flex rounded-full border border-pink-200 bg-pink-50 px-3 py-1.5 text-[9px] font-mono font-bold uppercase tracking-[0.16em] text-pink-600 sm:px-3.5 sm:py-2 sm:text-[10px]">
              BIG IDEA
            </span>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-[#6B6570] sm:text-base sm:leading-8">
              {bigIdea}
            </p>
          </div>

          <div>
            <span className="inline-flex rounded-full border border-pink-200 bg-pink-50 px-3 py-1.5 text-[9px] font-mono font-bold uppercase tracking-[0.16em] text-pink-600 sm:px-3.5 sm:py-2 sm:text-[10px]">
              DESIGN APPROACH
            </span>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-[#6B6570] sm:text-base sm:leading-8">
              {designApproach}
            </p>
          </div>
        </div>

        {project.challenge && (
          <div className="mt-10 border-t border-pink-100 pt-8 sm:mt-14 sm:pt-10">
            <div className="max-w-4xl">
              <span className="inline-flex rounded-full border border-pink-200 bg-pink-50 px-3 py-1.5 text-[9px] font-mono font-bold uppercase tracking-[0.16em] text-pink-600 sm:px-3.5 sm:py-2 sm:text-[10px]">
                CHALLENGE
              </span>
              <p className="mt-4 text-sm leading-7 text-[#6B6570] sm:text-base sm:leading-8">
                {project.challenge}
              </p>
            </div>
          </div>
        )}
      </section>

      {/* =========================
          PROJECT DETAILS
      ========================== */}
      <section className="mx-auto max-w-6xl px-5 pb-10 sm:px-8 sm:pb-16 lg:px-10">
        <div className="rounded-2xl border border-pink-100 bg-pink-50/40 p-5 sm:rounded-3xl sm:p-7 lg:p-8">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <div>
              <span className="block text-[9px] font-mono font-bold uppercase tracking-[0.16em] text-pink-500 sm:text-[10px]">Year</span>
              <span className="mt-1.5 block text-sm font-bold text-[#2D2433]">{project.details.year}</span>
            </div>
            <div>
              <span className="block text-[9px] font-mono font-bold uppercase tracking-[0.16em] text-pink-500 sm:text-[10px]">Deliverables</span>
              <span className="mt-1.5 block text-sm font-bold leading-relaxed text-[#2D2433]">{project.details.deliverables}</span>
            </div>
            <div>
              <span className="block text-[9px] font-mono font-bold uppercase tracking-[0.16em] text-pink-500 sm:text-[10px]">Tools</span>
              <span className="mt-1.5 block text-sm font-bold leading-relaxed text-[#2D2433]">{project.details.tools}</span>
            </div>
          </div>
        </div>
      </section>

      {/* =========================
          BRAND DEVELOPMENT
      ========================== */}
      <section className="mx-auto max-w-6xl px-4 pb-12 pt-3 sm:px-8 sm:pb-20 sm:pt-5 lg:px-10">
        <div className="mb-5 flex items-center justify-between sm:mb-7">
          <span className="inline-flex rounded-full border border-pink-200 bg-pink-50 px-3 py-1.5 text-[9px] font-mono font-bold uppercase tracking-[0.16em] text-pink-600 sm:px-3.5 sm:py-2 sm:text-[10px]">
            BRAND DEVELOPMENT
          </span>
          <span className="text-[9px] font-mono font-bold uppercase tracking-wider text-[#A39BA4] sm:text-[10px]">
            {images.length.toString().padStart(2, "0")} {images.length === 1 ? "IMAGE" : "IMAGES"}
          </span>
        </div>

        <div className="space-y-5 sm:space-y-8">
          {images.map((image, index) => (
            <figure key={`${image.src}-${index}`} className="overflow-hidden rounded-2xl border border-pink-100 bg-white shadow-[0_18px_45px_-25px_rgba(233,106,152,0.25)] sm:rounded-3xl">
              <Image
                src={image.src}
                alt={image.alt || `${project.title} ${index + 1}`}
                width={1920}
                height={1080}
                priority={index === 0}
                sizes="(max-width: 1280px) 100vw, 1152px"
                className="h-auto w-full object-cover"
              />
              {image.caption && (
                <figcaption className="px-4 py-3 text-xs leading-relaxed text-[#6B6570] sm:px-6 sm:py-4 sm:text-sm">
                  {image.caption}
                </figcaption>
              )}
            </figure>
          ))}
        </div>
      </section>

      {/* =========================
          FOOTER NAVIGATION
      ========================== */}
      <div className="mx-auto max-w-6xl px-5 pb-16 sm:px-8 sm:pb-24 lg:px-10">
        <Link
          href="/portfolio/brand-identity"
          className="inline-flex items-center gap-2 rounded-full border border-pink-200 bg-pink-50 px-5 py-2.5 text-[10px] font-mono font-bold uppercase tracking-wider text-pink-600 transition-all hover:-translate-x-1 hover:bg-pink-100 sm:px-6 sm:py-3 sm:text-xs"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          BACK TO BRAND IDENTITY
        </Link>
      </div>
    </main>
  );
}
