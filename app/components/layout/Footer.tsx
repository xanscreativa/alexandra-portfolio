"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowUpRight, Sparkles, ArrowUp, Globe, Clock } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

type TranslationKey = keyof typeof import("@/data/translations").translations.en;

// Inline Brand Icons
const InstagramIcon = ({ className = "h-3 w-3" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
);
const LinkedinIcon = ({ className = "h-3 w-3" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
);
const YoutubeIcon = ({ className = "h-3 w-3" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.56 49.56 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/><path d="m10 15 5-3-5-3z"/></svg>
);
const BehanceIcon = ({ className = "h-3 w-3" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}><path d="M3 8h4.5a2.5 2.5 0 0 1 0 5 2.5 2.5 0 0 1 0 5H3V8z"/><path d="M3 13h4.5"/><path d="M14 13.5a2.5 2.5 0 1 1 5 0V16h-5a2.5 2.5 0 0 0 2.5 2.5c1.1 0 2-.6 2.3-1.5"/><path d="M14.5 9.5h4"/></svg>
);

const socials = [
  { label: "Instagram", href: "https://instagram.com/xansstudio", icon: InstagramIcon },
  { label: "LinkedIn", href: "https://linkedin.com/in/dorotheaalexandra/", icon: LinkedinIcon },
  { label: "Behance", href: "https://behance.com/dorothealexand", icon: BehanceIcon },
  { label: "YouTube", href: "https://youtube.com/@xans.creativa", icon: YoutubeIcon },
];

const navLinks: { labelKey: TranslationKey; href: string }[] = [
  { labelKey: "navWork", href: "/#portfolio" },
  { labelKey: "about", href: "/about" },
  { labelKey: "services", href: "/services" },
  { labelKey: "contact", href: "/#contact" },
];

export default function Footer() {
  const [time, setTime] = useState<string>("");
  const { t, lang } = useLanguage();
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        new Intl.DateTimeFormat(lang === "id" ? "id-ID" : "en-US", {
          timeZone: "Asia/Jakarta",
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        }).format(now)
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 10000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#FFFDFC] text-[#2D2433] pt-16 pb-12 overflow-hidden border-t border-[#E85D8E]/15 selection:bg-[#E85D8E] selection:text-white">
      
      <div className="relative z-10 mx-auto w-[90%] max-w-none">
        
        {/* MAIN DESKTOP ASYMMETRIC GRID (1.4fr / 0.6fr) */}
        <div className="grid grid-cols-1 gap-10 lg:gap-16 items-start mb-14">
          
          {/* LEFT COLUMN: Brand Identity & Closing Statement */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-6">
            <div className="flex items-center gap-2.5">
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#E85D8E] text-white shadow-2xs">
                <Sparkles className="h-4 w-4" />
              </div>
              <span className="text-sm sm:text-base font-black tracking-[0.2em] text-[#2D2433]">
                XANS STUDIO
              </span>
            </div>

            <div className="space-y-2">
              <p className="text-xs font-bold text-[#E85D8E] tracking-wider uppercase">
                {t("roleSubtitle")}
              </p>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-[#2D2433] leading-[1.15]">
                {t("footerHeadline1")} <br className="hidden sm:block" />
                <span className="text-[#E85D8E]">{t("footerHeadline2")}</span>
              </h2>
            </div>

            <p className="max-w-md text-xs sm:text-sm leading-relaxed text-[#2D2433]/70">
              {t("footerDescription")}
            </p>

            <div className="inline-flex items-center gap-3 rounded-full border border-[#E85D8E]/20 bg-[#E85D8E]/5 px-3.5 py-1.5 text-xs font-mono text-[#2D2433]/80 shadow-2xs backdrop-blur-xs">
              <span className="flex items-center gap-1.5">
                <Globe className="h-3.5 w-3.5 text-[#E85D8E]" />
                <span>{t("footerLocation")}</span>
              </span>
              <span className="text-[#E85D8E]/30">|</span>
              <span className="flex items-center gap-1.5">
                <Clock className="h-3.5 w-3.5 text-[#E85D8E]" />
                <span>{time || t("timezoneFallback")}</span>
              </span>
            </div>
          </div>

          {/* RIGHT COLUMN: Explore & Connect Compact Modules */}
          <div className="lg:col-span-2 flex flex-col gap-12 w-full">
            
            {/* EXPLORE PANEL */}
            <div className="h-[164px] w-full rounded-[82px] border border-[#E85D8E]/[0.18] bg-[#E85D8E]/[0.025] px-10 sm:px-14 lg:px-20 flex items-center">
              <h4 className="shrink-0 w-[27%] text-[24px] sm:text-[28px] lg:text-[34px] font-bold uppercase tracking-[0.22em] text-[#D94D82] whitespace-nowrap">
                {t("footerExplore")}
              </h4>
              <nav className="flex flex-1 min-w-0 items-center justify-between text-[20px] sm:text-[25px] lg:text-[34px] font-bold tracking-[-0.02em] text-[#2D2433]">
                {navLinks.map((link, idx) => (
                  <React.Fragment key={link.labelKey + "-" + link.href + "-" + idx}>
                    <Link
                      href={link.href}
                      className="group inline-flex items-center whitespace-nowrap transition-colors hover:text-[#E85D8E]"
                    >
                      <span>{t(link.labelKey)}</span>
                    </Link>
                    {idx < navLinks.length - 1 && (
                      <span className="mx-3 sm:mx-5 lg:mx-8 text-[#E85D8E] text-[16px] sm:text-[19px] lg:text-[22px] select-none">•</span>
                    )}
                  </React.Fragment>
                ))}
              </nav>
            </div>

            {/* CONNECT PANEL */}
            <div className="h-[164px] w-full rounded-[82px] border border-[#E85D8E]/[0.18] bg-[#E85D8E]/[0.025] px-10 sm:px-14 lg:px-20 flex items-center">
              <h4 className="shrink-0 w-[27%] text-[24px] sm:text-[28px] lg:text-[34px] font-bold uppercase tracking-[0.22em] text-[#D94D82] whitespace-nowrap">
                {t("footerConnect")}
              </h4>
              <div className="flex flex-1 min-w-0 items-center justify-between text-[17px] sm:text-[21px] lg:text-[31px] font-bold tracking-[-0.025em] text-[#2D2433]">
                {socials.map((item) => {
                  const IconComp = item.icon;
                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-2 sm:gap-3 lg:gap-4 whitespace-nowrap transition-colors hover:text-[#E85D8E]"
                    >
                      <IconComp className="h-7 w-7 sm:h-8 sm:w-8 lg:h-10 lg:w-10 text-[#D94D82] group-hover:scale-105 transition-transform shrink-0" />
                      <span>{item.label}</span>
                      <ArrowUpRight className="h-5 w-5 sm:h-6 sm:w-6 lg:h-7 lg:w-7 text-[#8B8790] transition-all group-hover:text-[#E85D8E] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 shrink-0" />
                    </a>
                  );
                })}
              </div>
            </div>

          </div>

        </div>

        {/* SINGLE CLEAN DIVIDER */}
        <div className="h-px w-full bg-[#E85D8E]/15 mb-6" />

        {/* BOTTOM UTILITY BAR */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#2D2433]/60 text-center sm:text-left">
          <p>© {currentYear} Xans Studio. {t("allRightsReserved")}</p>
          
          <p className="flex items-center gap-1.5">
            <span>{t("builtWith")}</span>
            <span className="text-[#E85D8E] animate-pulse">❤️</span>
            <span>{t("by")} <strong className="text-[#2D2433]">XANS</strong></span>
          </p>

          <button
            onClick={scrollToTop}
            className="group inline-flex items-center gap-1.5 rounded-full border border-[#E85D8E]/25 bg-white px-3.5 py-1.5 text-xs font-bold text-[#2D2433] transition-all hover:border-[#E85D8E] hover:bg-[#E85D8E]/10 hover:text-[#E85D8E] shadow-2xs cursor-pointer"
          >
            <span>{t("backToTop")}</span>
            <ArrowUp className="h-3.5 w-3.5 text-[#E85D8E] transition-transform group-hover:-translate-y-0.5" />
          </button>
        </div>

      </div>

      {/* WATERMARK XANS AT THE VERY BOTTOM */}
      <div className="absolute bottom-0 left-0 right-0 flex items-end justify-center pointer-events-none select-none z-0 overflow-hidden">
        <h1 className="text-[22vw] lg:text-[15vw] font-black text-[#E85D8E]/[0.035] tracking-tighter uppercase leading-[0.75] translate-y-[20%]">
          XANS
        </h1>
      </div>

    </footer>
  );
}