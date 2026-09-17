import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";

const lookbooks = [
  {
    title: "Lookbook 01",
    subtitle: "Klaster Parahita",
    href: "https://online.fliphtml5.com/xanscreativa/Lookbook-Klaster-Parahita/",
    image: "/portfolio/lookbook-parahita.avif",
  },
  {
    title: "Lookbook 02",
    subtitle: "Klaster Kab. Pati",
    href: "https://online.fliphtml5.com/xanscreativa/Lookbook-Klaster-Kab-Pati/",
    image: "/portfolio/lookbook-pati.avif",
  },
  {
    title: "Lookbook 03",
    subtitle: "Klaster Kota Semarang & Kota Surakarta",
    href: "https://online.fliphtml5.com/xanscreativa/jzyt/",
    image: "/portfolio/lookbook-semarang.avif",
  },
];

export default function MilenialsBatikEcoFashionPage() {
  return (
    <main className="min-h-screen bg-[#FFFDFC] text-[#2D2433]">
      <section className="mx-auto max-w-6xl px-5 pb-20 pt-8 sm:px-8 sm:pt-12 lg:px-10">
        <Link
          href="/portfolio"
          className="mb-10 inline-flex items-center gap-2 text-sm font-semibold text-[#6B6570] transition-colors hover:text-[#E85D8E]"
        >
          <ArrowLeft size={17} />
          Back to Portfolio
        </Link>

        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div className="relative mx-auto w-full max-w-md overflow-hidden rounded-[28px] border border-pink-100 bg-pink-50 shadow-[0_20px_60px_-25px_rgba(233,106,152,0.35)]">
            <Image
              src="/portfolio/milenial.avif"
              alt="Milenial's Batik Eco-Fashion"
              width={900}
              height={1125}
              className="h-auto w-full object-cover"
              priority
            />
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-pink-600">
              Fashion Design · 2026
            </p>
            <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
              Milenial&apos;s Batik Eco-Fashion
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-[#6B6570] sm:text-lg">
              Visual design project presented through three lookbook designs,
              packaging design, and print media for a cohesive batik fashion
              presentation.
            </p>
          </div>
        </div>

        <div className="mt-20">
          <div className="mb-8">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-pink-600">
              Lookbooks
            </p>
            <h2 className="mt-2 text-2xl font-bold sm:text-3xl">
              Explore the three lookbooks
            </h2>
            <p className="mt-2 text-sm leading-6 text-[#6B6570]">
              Klik salah satu lookbook untuk membuka versi digital lengkapnya.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {lookbooks.map((lookbook, index) => (
              <a
                key={lookbook.href}
                href={lookbook.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group block rounded-[24px] border border-pink-100 bg-white p-3 shadow-[0_12px_35px_-18px_rgba(45,36,51,0.25)] transition-all duration-300 hover:-translate-y-2 hover:border-pink-200 hover:shadow-[0_24px_45px_-18px_rgba(233,106,152,0.28)]"
              >
                <div className="relative aspect-[4/5] overflow-hidden rounded-[18px] bg-pink-50">
                  <Image
                    src={lookbook.image}
                    alt={`${lookbook.title} - ${lookbook.subtitle}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2D2433]/55 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between text-white">
                    <div>
                      <p className="text-sm font-bold">{lookbook.title}</p>
                      <p className="mt-0.5 text-xs text-white/80">
                        {lookbook.subtitle}
                      </p>
                    </div>
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-[#2D2433] shadow-lg transition-transform duration-300 group-hover:rotate-6">
                      <ExternalLink size={16} />
                    </span>
                  </div>
                </div>
                <div className="flex items-center justify-between px-2 pb-2 pt-4">
                  <span className="text-xs font-semibold uppercase tracking-[0.14em] text-[#6B6570]">
                    Open Lookbook
                  </span>
                  <span className="text-xs font-bold text-pink-600">
                    0{index + 1}
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>

        <div className="mt-20 grid gap-6 md:grid-cols-2">
          <article className="rounded-[28px] border border-pink-100 bg-white p-6 shadow-[0_12px_35px_-20px_rgba(45,36,51,0.2)] sm:p-8">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-pink-600">
              Packaging
            </p>
            <h2 className="mt-2 text-2xl font-bold">Packaging Design</h2>
            <div className="mt-6 overflow-hidden rounded-2xl bg-pink-50">
              <Image
                src="/portfolio/milenial.avif"
                alt="Milenial's Batik Eco-Fashion packaging design"
                width={900}
                height={1125}
                className="h-auto w-full object-cover"
              />
            </div>
          </article>

          <article className="rounded-[28px] border border-pink-100 bg-white p-6 shadow-[0_12px_35px_-20px_rgba(45,36,51,0.2)] sm:p-8">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-pink-600">
              Print Design
            </p>
            <h2 className="mt-2 text-2xl font-bold">Print Media</h2>
            <div className="mt-6 overflow-hidden rounded-2xl bg-pink-50">
              <Image
                src="/portfolio/milenial.avif"
                alt="Milenial's Batik Eco-Fashion print media design"
                width={900}
                height={1125}
                className="h-auto w-full object-cover"
              />
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}
