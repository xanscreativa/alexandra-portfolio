import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";

const gallery = [
  {
    src: "/portfolio/milenial-packaging1.avif",
    alt: "Milenial's Batik Eco-Fashion packaging concept",
  },
  {
    src: "/portfolio/milenial-packaging2.avif",
    alt: "Milenial's Batik Eco-Fashion primary packaging",
  },
  {
    src: "/portfolio/milenial-packaging3.avif",
    alt: "Milenial's Batik Eco-Fashion packaging label",
  },
];

export default function MilenialPackagingPage() {
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
            A sustainable packaging concept for Parahita Craft built around
            three principles: sustainable, empowering, and stylish. The system
            uses reusable materials, supports local artisans, and extends the
            life of packaging through multifunctional designs.
          </p>

          <a
            href="https://www.insiden24.com/ragam/3968758733/luar-biasa-sandra-manuputy-mahasiswa-universitas-kristen-satya-salatiga-membuat-packing-yang-sustainable"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-full border border-pink-200 bg-pink-50 px-4 py-2.5 text-sm font-semibold text-pink-700 transition-colors hover:border-pink-300 hover:bg-pink-100"
          >
            Featured in InsideN24
            <ExternalLink size={15} />
          </a>
        </div>

        <div className="mt-14 grid gap-8">
          {gallery.map((item, index) => (
            <figure
              key={item.src}
              className="overflow-hidden rounded-[28px] border border-pink-100 bg-white p-3 shadow-[0_16px_45px_-24px_rgba(45,36,51,0.25)]"
            >
              <div className="relative aspect-video overflow-hidden rounded-[22px] bg-pink-50">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 1100px"
                  priority={index === 0}
                />
              </div>
              <figcaption className="px-2 pb-2 pt-4 text-xs font-semibold uppercase tracking-[0.14em] text-[#6B6570]">
                {["PRIMER PACKAGING", "SECONDARY PACKAGING", "SHIPPING PACKAGING"][index]}
              </figcaption>
              <p className="px-2 pb-4 pt-1 text-sm leading-6 text-[#6B6570]">
                {[
                  "The primary packaging uses doorslag paper to wrap the product. A community logo sticker serves as a seal, keeping the fabric neatly folded.",
                  "A roll-up packaging design that functions as both a tote bag and a tumbler or water bottle holder. Inspired by “HASTA KARYA,” it represents the power of hands in creating meaningful work. The design combines sustainable, empowering, and stylish elements, using blacu fabric and batik fabric scraps with coconut shell buttons. Reusable and locally crafted, it supports local artisans while creating a unique and fashionable experience.",
                  "A single-wall corrugated cardboard box measuring 30 × 23 × 8 cm, designed for product shipping. Black ink is used for the packaging information, while a 10 × 18 cm kraft paper sticker serves as the receipt and thank-you seal. The unlaminated sticker allows Parahita Craft to write in the provided space."
                ][index]}
              </p>
            </figure>
          ))}
        </div>
      </section>
    </main>
  );
}
