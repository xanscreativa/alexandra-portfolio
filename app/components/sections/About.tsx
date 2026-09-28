"use client";

import Link from "next/link";
import localFont from "next/font/local";
import FadeUp from "../animation/FadeUp";
import { useLanguage } from "@/context/LanguageContext";

const christmasSnowy = localFont({
  src: "../../../public/fonts/branding/ChristmasSnowy.woff2",
  display: "swap",
});

export default function About() {
  const { t } = useLanguage();

  const specialties = [
    t("spec1"),
    t("spec2"),
    t("spec3"),
    t("spec4"),
  ];

  return (
    <section
      id="about"
      className="relative overflow-hidden border-t border-pink-100/60 bg-gradient-to-b from-[#FFFDFC] via-[#FFFFFF] to-[#FFF7FB] pt-16 sm:pt-20 lg:pt-28 pb-20 sm:pb-36 lg:pb-44 text-[#2D2433]"
    >
      <div className="pointer-events-none absolute -left-32 top-16 h-64 w-64 rounded-full bg-pink-100/40 blur-[90px] sm:-left-44 sm:h-[450px] sm:w-[450px] sm:blur-[140px]" />
      <div className="pointer-events-none absolute -right-32 bottom-12 h-64 w-64 rounded-full bg-rose-100/35 blur-[90px] sm:-right-44 sm:h-[450px] sm:w-[450px] sm:blur-[140px]" />

      <div className="relative mx-auto w-[86%] max-w-5xl sm:w-[92%]">
        <div className="mx-auto w-full">
          <FadeUp delay={0.1}>
            <h2 className={`${christmasSnowy.className} text-center text-5xl leading-tight text-pink-500 sm:text-6xl lg:text-7xl`}>
              Hello!
            </h2>
          </FadeUp>

          <FadeUp delay={0.2}>
            <div className="mx-auto mt-5 max-w-3xl space-y-4 text-center text-sm leading-7 text-[#6B6570] sm:mt-6 sm:text-base sm:leading-8 lg:text-lg">
              <p>{t("aboutDesc1")}</p>
              <p>{t("aboutDesc2")}</p>
            </div>
          </FadeUp>

          <FadeUp delay={0.48}>
            <div className="mt-7 border-t border-pink-100/80 pt-6 sm:mt-8 sm:pt-7">
              <p className="text-center text-[9px] font-mono font-bold uppercase tracking-[0.22em] text-pink-400 sm:text-xs">
                {t("specialtiesTitle")}
              </p>
              <div className="-mx-3 mx-auto mt-3 flex w-[calc(100%+24px)] flex-nowrap items-center justify-center gap-1 min-[360px]:gap-1.5 max-[359px]:-mx-[21px] max-[359px]:w-[calc(100%+42px)] sm:mx-auto sm:w-full sm:gap-2.5">
                {specialties.map((item) => (
                  <span
                    key={item}
                    className="inline-flex shrink-0 items-center justify-center whitespace-nowrap rounded-full border border-pink-200/70 bg-white px-0.5 py-1 text-[9px] font-bold tracking-[-0.04em] text-[#2D2433] transition-all duration-300 hover:-translate-y-0.5 hover:border-pink-400 hover:bg-pink-50/70 hover:text-pink-600 hover:shadow-sm hover:shadow-pink-500/10 max-[359px]:px-0 min-[360px]:px-1.5 sm:px-3.5 sm:py-1.5 sm:text-[10px] sm:tracking-normal"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </FadeUp>

          <FadeUp delay={0.56}>
            <div className="mt-8 grid grid-cols-2 items-center gap-x-3 gap-y-5 border-t border-pink-100/80 pt-6 sm:mt-10 sm:gap-x-6 sm:pt-7 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)_auto] md:gap-x-4 lg:gap-x-8">
              <div className="flex min-w-0 items-start gap-2 sm:gap-3">
                <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-pink-200/70 bg-pink-50 text-pink-600 sm:h-8 sm:w-8">
                  <svg className="h-3.5 w-3.5 sm:h-4 sm:w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div className="min-w-0">
                  <p className="text-[8px] font-mono font-bold uppercase tracking-[0.18em] text-pink-400 sm:text-xs">{t("basedIn")}</p>
                  <h4 className="mt-0.5 text-[10px] font-bold leading-snug text-[#2D2433] sm:text-sm lg:text-lg">{t("aboutLocation")}</h4>
                </div>
              </div>

              <div className="flex min-w-0 items-start gap-2 sm:gap-3">
                <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-pink-200/70 bg-pink-50 text-pink-600 sm:h-8 sm:w-8">
                  <span className="relative flex h-2.5 w-2.5"><span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-pink-400 opacity-75" /><span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-pink-600" /></span>
                </div>
                <div className="min-w-0">
                  <p className="text-[8px] font-mono font-bold uppercase tracking-[0.18em] text-pink-400 sm:text-xs">{t("availability")}</p>
                  <h4 className="mt-0.5 text-[10px] font-bold leading-snug text-[#2D2433] sm:text-sm lg:text-lg">{t("availabilityStatus")}</h4>
                </div>
              </div>

              <div className="col-span-2 flex min-w-0 items-center justify-center gap-2 md:col-span-1 md:justify-end md:gap-3">
                <a href="#contact" className="flex w-full items-center justify-center rounded-full bg-gradient-to-r from-pink-600 to-rose-500 px-3.5 py-3.5 text-xs font-bold tracking-wide text-white shadow-md shadow-pink-500/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-pink-500/30 sm:w-auto sm:px-7 sm:text-sm active:scale-98">{t("letsConnect")}</a>
                <Link href="/resume" className="flex w-full items-center justify-center rounded-full border border-pink-200/80 bg-white px-3.5 py-3.5 text-xs font-bold tracking-wide text-[#2D2433] shadow-2xs transition-all duration-300 hover:-translate-y-0.5 hover:border-pink-300 hover:bg-pink-50/50 hover:text-pink-600 sm:w-auto sm:px-7 sm:text-sm active:scale-98">{t("viewResume")}</Link>
              </div>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}