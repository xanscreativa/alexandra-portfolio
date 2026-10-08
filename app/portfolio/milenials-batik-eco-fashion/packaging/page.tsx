"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const gallerySections = [
  {
    heading: "COMPLEMENTARY PACKAGING & LABEL",
    items: [
      {
        src: "/portfolio/milenial-packaging1.avif",
        alt: "Milenial's Batik Eco-Fashion packaging concept",
        description:
          "The complementary packaging wraps the product and uses a Parahita Craft community logo sticker as the seal.",
      },
    ],
  },
  {
    heading: "PRIMARY PACKAGING",
    description:
      "The multifunctional primary packaging is designed to carry the product and can be transformed into a bottle holder.",
    items: [
      {
        src: "/portfolio/milenial-packaging2.avif",
        alt: "Milenial's Batik Eco-Fashion primary packaging",
      },
      {
        src: "/portfolio/milenial-packaging3.avif",
        alt: "Milenial's Batik Eco-Fashion primary packaging details",
      },
      {
        src: "/portfolio/milenial-packaging4.avif",
        alt: "Milenial's Batik Eco-Fashion primary packaging form",
      },
    ],
  },
  {
    heading: "SHIPPING PACKAGING",
    items: [
      {
        src: "/portfolio/milenial-packaging5.avif",
        alt: "Milenial's Batik Eco-Fashion shipping packaging",
        description:
          "The shipping packaging uses a sliding box for a more distinctive and premium unboxing experience.",
      },
    ],
  },
];

export default function MilenialPackagingPage() {
  const { lang } = useLanguage();

  const description =
    lang === "id"
      ? "Project sustainable packaging untuk Parahita Craft yang dikembangkan dengan konsep “Hasta Karya” dan nilai sustainable, empowering, dan stylish. Project ini mengeksplorasi sistem kemasan untuk produk batik dan eco-fashion, mulai dari kemasan pelengkap, primer, sekunder, hingga pengiriman."
      : "A sustainable packaging design project for Parahita Craft, developed around the concept of “Hasta Karya” and the values of sustainable, empowering, and stylish design. The project explores a packaging system for batik and eco-fashion products, including complementary, primary, secondary, and shipping packaging.";

  const conceptBookLabel =
    lang === "id" ? "LIHAT BUKU KONSEP →" : "VIEW CONCEPT BOOK →";

  return (
    <main className="min-h-screen bg-[#FFFDFC] text-[#2D2433]">
      <section className="mx-auto max-w-6xl px-5 pb-20 pt-20 sm:px-8 sm:pt-24 lg:px-10">
        <Link
          href="/portfolio/milenials-batik-eco-fashion"
          className="mb-10 inline-flex items-center gap-2 text-sm font-semibold text-[#6B6570] transition-colors hover:text-[#E85D8E]"
        >
          <ArrowLeft size={17} />
          Back to Project
        </Link>

        <div className="max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-pink-600">
            Packaging Design · 2021–2022
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
            Milenial&apos;s Batik Eco-Fashion
          </h1>
          <h2 className="mt-4 text-2xl font-bold sm:text-3xl">
            Packaging Design
          </h2>
          <p className="mt-5 text-base leading-7 text-[#6B6570] sm:text-lg">
            {description}
          </p>

          <div className="mt-6 flex flex-row flex-wrap items-start gap-3">
            <a
              href="https://www.insiden24.com/ragam/3968758733/luar-biasa-sandra-manuputy-mahasiswa-universitas-kristen-satya-salatiga-membuat-packing-yang-sustainable"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-pink-200 bg-pink-50 px-4 py-2.5 text-sm font-semibold text-pink-700 transition-colors hover:border-pink-300 hover:bg-pink-100"
            >
              Featured in InsideN24
              <ExternalLink size={15} />
            </a>

            <a
              href="https://heyzine.com/flip-book/cacb00a50b.html"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#E96A98] px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#d95d8d]"
            >
              {conceptBookLabel}
              <ExternalLink size={15} className="text-white" />
            </a>
          </div>
        </div>

        <div className="mt-14 grid gap-8">
          {gallerySections.map((section, sectionIndex) => (
            <div key={section.heading} className="grid gap-5">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#6B6570]">
                {section.heading}
              </p>

              <div className="grid gap-6">
                {"description" in section ? (
                  <figure
                    className="overflow-hidden rounded-[28px] border border-pink-100 bg-white shadow-[0_16px_45px_-24px_rgba(45,36,51,0.25)]"
                  >
                    <div className="grid">
                      {section.items.map((item, itemIndex) => (
                        <div
                          key={`${section.heading}-${item.src}`}
                          className="relative aspect-video bg-pink-50"
                        >
                          <Image
                            src={item.src}
                            alt={item.alt}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 1100px"
                            priority={sectionIndex === 0 && itemIndex === 0}
                          />
                        </div>
                      ))}
                    </div>
                    <p className="px-5 pb-5 pt-4 text-sm leading-6 text-[#6B6570]">
                      {section.description}
                    </p>
                  </figure>
                ) : (
                  section.items.map((item, itemIndex) => (
                    <figure
                      key={`${section.heading}-${item.src}`}
                      className="overflow-hidden rounded-[28px] border border-pink-100 bg-white p-3 shadow-[0_16px_45px_-24px_rgba(45,36,51,0.25)]"
                    >
                      <div className="relative aspect-video overflow-hidden rounded-[22px] bg-pink-50">
                        <Image
                          src={item.src}
                          alt={item.alt}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, 1100px"
                          priority={sectionIndex === 0 && itemIndex === 0}
                        />
                      </div>
                      <p className="px-2 pb-4 pt-4 text-sm leading-6 text-[#6B6570]">
                        {item.description}
                      </p>
                    </figure>
                  ))
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
