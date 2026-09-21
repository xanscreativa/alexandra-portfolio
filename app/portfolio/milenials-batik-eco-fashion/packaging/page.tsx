import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

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
      <section className="mx-auto max-w-6xl px-5 pb-20 pt-8 sm:px-8 sm:pt-12 lg:px-10">
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
                Packaging Design · 0{index + 1}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>
    </main>
  );
}
