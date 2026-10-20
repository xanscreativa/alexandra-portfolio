"use client";

import { usePathname } from "next/navigation";
import { useLanguage } from "@/context/LanguageContext";

export default function Loading() {
  const pathname = usePathname();
  const { t } = useLanguage();
  const showSocialMediaHint =
    pathname.replace(/\/$/, "") === "/portfolio/social-media-design";

  return (
    <div
      className="fixed inset-0 z-[99999] flex items-center justify-center bg-[#FFFDFB]/35 backdrop-blur-[6px]"
      aria-label="Loading"
      role="status"
    >
      <div className="flex flex-col items-center gap-4">
        <div className="h-10 w-10 animate-spin rounded-full border-[3px] border-[#E85D8E]/25 border-t-[#E85D8E]" />
        <span className="text-xs font-medium tracking-[0.18em] text-[#2D2433]/70">
          LOADING
        </span>
      </div>
      {showSocialMediaHint && (
        <p className="absolute inset-x-4 bottom-8 mx-auto max-w-lg px-2 text-center text-xs leading-relaxed text-[#2D2433]/70 sm:bottom-10 sm:text-sm">
          {t("socialCarouselLoadingHint")}
        </p>
      )}
    </div>
  );
}
