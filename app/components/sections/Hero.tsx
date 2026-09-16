"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight, Clock, Globe, Sparkles } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

const socials = [
  { label: "Instagram", href: "https://instagram.com/xansstudio", icon: "◎" },
  { label: "LinkedIn", href: "https://linkedin.com/in/dorotheaalexandra/", icon: "in" },
  { label: "Behance", href: "https://behance.com/dorothealexand", icon: "Bē" },
  { label: "YouTube", href: "https://youtube.com/@xans.creativa", icon: "▷" },
];

export default function Hero() {
  const { t, lang } = useLanguage();
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      setTime(
        new Intl.DateTimeFormat(lang === "id" ? "id-ID" : "en-US", {
          timeZone: "Asia/Jakarta",
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        }).format(new Date())
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 10000);
    return () => clearInterval(interval);
  }, [lang]);

  const navLinks = [
    { label: t("navWork"), href: "#portfolio" },
    { label: t("about"), href: "/about" },
    { label: t("services"), href: "/services" },
    { label: t("contact"), href: "#contact" },
  ];

  return (
    <section
      id="hero"
      className="relative min-h-[100vh] overflow-hidden bg-[#FFFDFC] text-[#2D2433]"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_91%_55%,rgba(232,93,142,0.16),transparent_34%)]" />
      <div className="pointer-events-none absolute right-0 top-[16%] h-[58%] w-[42%] bg-gradient-to-br from-transparent via-[#FFF8FB] to-[#F9DCE8]" />

      <div className="relative z-10 mx-auto flex min-h-[100vh] w-[90%] max-w-[1920px] flex-col pt-14 sm:pt-16 lg:pt-[58px]">
        {/* PERSONAL BRAND */}
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#D45D88] text-white shadow-sm">
            <Sparkles className="h-5 w-5" strokeWidth={2} />
          </div>
          <span className="text-base font-black tracking-[0.22em] text-[#2D2433] sm:text-lg">
            XANS STUDIO
          </span>
        </div>

        <div className="mt-10 grid flex-1 grid-cols-1 items-start gap-12 lg:mt-8 lg:grid-cols-[1.03fr_0.97fr] lg:gap-14">
          {/* LEFT */}
          <div className="pt-2 lg:pt-0">
            <p className="text-sm font-extrabold uppercase tracking-[0.06em] text-[#D45D88] sm:text-base">
              {t("roleSubtitle")}
            </p>

            <h1 className="mt-4 max-w-[760px] text-[clamp(2.8rem,4.6vw,4.8rem)] font-black leading-[0.98] tracking-[-0.045em]">
              {t("footerHeadline1")}
              <br />
              <span className="text-[#D45D88]">{t("footerHeadline2")}</span>
            </h1>

            <p className="mt-10 max-w-[620px] text-base leading-[1.65] text-[#6B6570] sm:text-lg">
              {t("heroDescription")}
            </p>

            <div className="mt-9 inline-flex items-center gap-4 rounded-full border border-[#E85D8E]/20 bg-white/75 px-4 py-2 text-xs font-medium text-[#6B6570] shadow-sm backdrop-blur-sm sm:text-sm">
              <span className="inline-flex items-center gap-2">
                <Globe className="h-4 w-4 text-[#D45D88]" />
                {t("footerLocation")}
              </span>
              <span className="h-4 w-px bg-[#E85D8E]/25" />
              <span className="inline-flex items-center gap-2">
                <Clock className="h-4 w-4 text-[#D45D88]" />
                {time || t("timezoneFallback")}
              </span>
            </div>
          </div>

          {/* RIGHT — REFERENCE CAPSULES */}
          <div className="self-start pt-1 lg:pt-14">
            <div className="flex h-[66px] w-full items-center rounded-full border border-[#E85D8E]/30 bg-white/35 px-7 sm:px-8 lg:px-8">
              <span className="w-[22%] shrink-0 text-[11px] font-extrabold uppercase tracking-[0.22em] text-[#D45D88] sm:text-xs">
                {t("footerExplore")}
              </span>

              <nav className="flex flex-1 items-center justify-between gap-3 text-[13px] font-bold sm:text-[15px] lg:text-[16px]">
                {navLinks.map((item, index) => (
                  <span key={item.label} className="flex items-center gap-4 lg:gap-7">
                    <Link
                      href={item.href}
                      className="whitespace-nowrap transition-colors hover:text-[#D45D88]"
                    >
                      {item.label}
                    </Link>
                    {index < navLinks.length - 1 && (
                      <span className="text-[#D45D88]">•</span>
                    )}
                  </span>
                ))}
              </nav>
            </div>

            <div className="mt-[18px] flex h-[66px] w-full items-center rounded-full border border-[#E85D8E]/30 bg-white/35 px-7 sm:px-8 lg:px-8">
              <span className="w-[22%] shrink-0 text-[11px] font-extrabold uppercase tracking-[0.22em] text-[#D45D88] sm:text-xs">
                {t("footerConnect")}
              </span>

              <div className="flex flex-1 items-center justify-between gap-3 text-[11px] font-bold sm:text-[13px] lg:text-[14px]">
                {socials.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 whitespace-nowrap transition-colors hover:text-[#D45D88]"
                  >
                    <span className="flex min-w-[18px] items-center justify-center text-sm font-extrabold text-[#D45D88] sm:text-base">
                      {item.icon}
                    </span>
                    <span>{item.label}</span>
                    <ArrowUpRight className="h-3 w-3 text-[#8B8790] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="h-8 shrink-0 sm:h-12" />
      </div>
    </section>
  );
}
