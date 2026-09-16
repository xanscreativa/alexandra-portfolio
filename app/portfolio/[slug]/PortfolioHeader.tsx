"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import type { PortfolioCollection } from "@/data/portfolio";

export default function PortfolioHeader({ collection }: { collection: PortfolioCollection }) {
  const { t, lang, toggleLang } = useLanguage();

  return (
    <>
      <div className="mx-auto max-w-6xl px-6 pb-8 pt-24 sm:px-8 sm:pb-10 sm:pt-28 lg:px-10 lg:pt-32">
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4 sm:mb-10">
          <Link href="/#portfolio" className="inline-flex items-center gap-2 py-1 text-xs font-mono font-bold tracking-wider text-[#6B6570] transition-colors hover:text-pink-600">
            <ArrowLeft className="h-4 w-4" />
            {t("back")}
          </Link>
          <button onClick={toggleLang} className="flex items-center gap-1.5 rounded-full border border-pink-200 bg-pink-50 px-3 py-1.5 text-xs font-mono font-bold text-pink-600 shadow-sm transition hover:bg-pink-100">
            <span>🌐</span>{lang.toUpperCase()}
          </button>
        </div>
        <div className="max-w-4xl space-y-4">
          <span className="inline-block rounded-full border border-pink-200 bg-pink-50 px-3 py-1 text-[11px] font-mono font-bold uppercase tracking-widest text-pink-600 sm:text-xs">{collection.category}</span>
          <h1 className="text-3xl font-extrabold leading-tight tracking-tight text-[#2D2433] sm:text-5xl lg:text-6xl">{collection.title}</h1>
          <p className="max-w-3xl text-sm leading-relaxed text-[#6B6570] sm:text-lg">{collection.tagline}</p>
        </div>
      </div>
      <div className="mx-auto max-w-6xl px-4 sm:px-8 lg:px-10">
        <div className="relative overflow-hidden rounded-2xl border border-pink-200/80 bg-white p-3 shadow-sm sm:rounded-[36px] sm:p-4">
          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl bg-pink-50 sm:rounded-[28px]">
            <Image src={collection.cover} alt={collection.title} fill priority sizes="(max-width: 768px) 92vw, 1200px" className="object-cover" />
          </div>
        </div>
      </div>
    </>
  );
}
