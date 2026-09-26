"use client";

import FadeUp from "../animation/FadeUp";
import { useLanguage } from "@/context/LanguageContext";

export default function About() {
  const { t } = useLanguage();

  return (
    <section
      id="about"
      className="relative overflow-hidden border-t border-pink-100/60 bg-gradient-to-b from-[#FFFDFC] via-[#FFFFFF] to-[#FFF7FB] py-20 sm:py-28 lg:py-36 text-[#2D2433]"
    >
      {/* Ambient Background Glows */}
      <div className="pointer-events-none absolute -left-32 top-16 h-64 w-64 rounded-full bg-pink-100/40 blur-[90px] sm:-left-44 sm:h-[450px] sm:w-[450px] sm:blur-[140px]" />
      <div className="pointer-events-none absolute -right-32 bottom-12 h-64 w-64 rounded-full bg-rose-100/35 blur-[90px] sm:-right-44 sm:h-[450px] sm:w-[450px] sm:blur-[140px]" />

      <div className="relative mx-auto w-[86%] max-w-4xl sm:w-[88%]">
        <FadeUp delay={0.2}>
          <div className="mb-6 flex justify-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-pink-200/80 bg-white/90 px-3.5 py-1.5 shadow-2xs backdrop-blur-md">
              <span className="h-1.5 w-1.5 rounded-full bg-pink-500 animate-pulse" />
              <span className="text-[9px] font-mono font-extrabold uppercase tracking-[0.28em] text-pink-600 sm:text-xs">
                {t("aboutBadge")}
              </span>
            </div>
          </div>
        </FadeUp>

        <FadeUp delay={0.35}>
          <div className="mx-auto max-w-3xl space-y-5 text-center text-sm leading-8 text-[#6B6570] sm:text-lg sm:leading-9">
            <p>{t("aboutDesc1")}</p>
            <p>{t("aboutDesc2")}</p>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
