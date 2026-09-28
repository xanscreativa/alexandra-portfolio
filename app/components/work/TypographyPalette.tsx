"use client";

import { useParams } from "next/navigation";

type TypographyFont = {
  family: string;
  src?: string;
};

type TypographyTheme = {
  name: string;
  tone: string;
  heading: TypographyFont;
  subheading: TypographyFont;
  body: TypographyFont;
  note?: string;
};

type TypographyPaletteProps = {
  fontFamily?: string;
  fontSrc?: string;
  themes?: TypographyTheme[];
};

const ROLE_META = [
  { key: "heading", role: "Heading", bg: "#F8D9E5" },
  { key: "subheading", role: "Subheading", bg: "#FCEEF3" },
  { key: "body", role: "Body Text", bg: "#F7F5F0" },
] as const;

const JENDELA_THEMES: TypographyTheme[] = [
  {
    name: "Blue Theme",
    tone: "#087FC7",
    heading: { family: "Small Print", src: "/fonts/branding/SmallPrint.woff2" },
    subheading: { family: "Poppins", src: "/fonts/branding/Poppins.woff2" },
    body: { family: "Mulish", src: "/fonts/branding/Mulish.woff2" },
  },
  {
    name: "Yellow Theme",
    tone: "#FFB719",
    heading: { family: "Alphakind", src: "/fonts/branding/Alphakind.woff2" },
    subheading: { family: "Poppins", src: "/fonts/branding/Poppins.woff2" },
    body: { family: "Mulish", src: "/fonts/branding/Mulish.woff2" },
  },
  {
    name: "White Theme",
    tone: "#D7D2C9",
    heading: { family: "Peach Days", src: "/fonts/branding/PeachDays.woff2" },
    subheading: { family: "Dish Out", src: "/fonts/branding/DishOut.woff2" },
    body: { family: "Mulish", src: "/fonts/branding/Mulish.woff2" },
  },
];

const HUT67_THEMES: TypographyTheme[] = [
  {
    name: "HUT 67 Type",
    tone: "#2A8639",
    heading: { family: "Howdybun", src: "/fonts/branding/Howdybun.woff2" },
    subheading: { family: "Open Sans Condensed", src: "/fonts/branding/OpenSansCondensed.woff2" },
    body: { family: "Outfit", src: "/fonts/branding/Outfit.woff2" },
    note: "BRAND TYPE SYSTEM",
  },
];

const getRegisteredFamily = (font: TypographyFont, themeIndex: number, roleIndex: number) =>
  font.src
    ? `Typography-${themeIndex}-${roleIndex}-${font.family.replace(/[^a-zA-Z0-9]/g, "")}`
    : font.family;

export default function TypographyPalette({
  fontFamily = "Plus Jakarta Sans",
  fontSrc,
  themes,
}: TypographyPaletteProps) {
  const params = useParams();
  const slug = params?.slug as string | undefined;

  const fallbackTheme: TypographyTheme = {
    name: "Primary",
    tone: "#E85D8E",
    heading: { family: fontFamily, src: fontSrc },
    subheading: { family: fontFamily, src: fontSrc },
    body: { family: fontFamily, src: fontSrc },
  };

  if (slug === "hut-63-pelkat-pa") {
    return (
      <div className="w-full rounded-2xl bg-white px-4 py-5 sm:px-6 sm:py-6">
        <div className="rounded-2xl border border-pink-100 bg-[#FFFBFD] p-4 sm:p-5">
          <div className="flex items-start gap-3">
            <span className="mt-1 h-2.5 w-2.5 flex-shrink-0 rounded-full bg-[#2A8639]" />
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#2D2433] sm:text-xs">
                Typography
              </p>
              <p className="mt-2 max-w-2xl text-xs leading-6 text-[#6B6570] sm:text-sm sm:leading-7">
                The typography uses a rounded sans serif style, with decorative typography applied to the logo. Serif fonts such as Times New Roman should be avoided.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const activeThemes = themes?.length
    ? themes
    : slug === "jendela-finansial"
      ? JENDELA_THEMES
      : slug === "hut-67-pelkat-pa"
        ? HUT67_THEMES
        : [fallbackTheme];

  return (
    <>
      <style>{`${activeThemes
        .flatMap((theme, themeIndex) =>
          ROLE_META.map((item, roleIndex) => {
            const font = theme[item.key];
            if (!font.src) return "";
            const family = getRegisteredFamily(font, themeIndex, roleIndex);
            return `@font-face { font-family: '${family}'; src: url('${font.src}') format('woff2'); font-display: swap; }`;
          }),
        )
        .join("\n")}`}</style>

      <div className="w-full rounded-2xl bg-white px-3 py-4 sm:px-5 sm:py-5">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-3 sm:gap-3 lg:gap-4">
          {activeThemes.map((theme, themeIndex) => (
            <div key={theme.name} className="rounded-2xl border border-pink-100 bg-[#FFFBFD] p-3 sm:p-3 lg:p-4">
              <div className="mb-3 flex items-center justify-between gap-2 lg:mb-4">
                <div className="flex min-w-0 items-center gap-2">
                  <span className="h-2.5 w-2.5 flex-shrink-0 rounded-full" style={{ backgroundColor: theme.tone }} />
                  <p className="truncate text-[9px] font-bold uppercase tracking-[0.14em] text-[#2D2433] lg:text-[10px]">{theme.name}</p>
                </div>
                <span className="hidden max-w-[180px] text-right text-[7px] font-mono uppercase tracking-[0.1em] text-[#A39BA4] lg:inline lg:text-[8px]">{theme.note ?? "TYPE SYSTEM"}</span>
              </div>

              <div className="grid grid-cols-3 gap-2 lg:gap-3">
                {ROLE_META.map((item, roleIndex) => {
                  const font = theme[item.key];
                  const registeredFamily = getRegisteredFamily(font, themeIndex, roleIndex);
                  return (
                    <div key={item.role} className="min-w-0 text-center">
                      <div className="mx-auto flex aspect-square w-full max-w-[41px] items-center justify-center rounded-[9px] lg:max-w-[46px] lg:rounded-[10px]" style={{ backgroundColor: item.bg }}>
                        <span className="text-lg leading-none text-[#5F7FBE] lg:text-xl" style={{ fontFamily: `'${registeredFamily}', sans-serif` }}>Aa</span>
                      </div>
                      <p className="mt-2 truncate text-[7px] font-semibold leading-3 text-[#2D2433] lg:mt-2.5 lg:text-[9px]" style={{ fontFamily: `'${registeredFamily}', sans-serif` }} title={font.family}>{font.family}</p>
                      <p className="mt-0.5 text-[7px] leading-3 text-[#6B6570] lg:text-[8px]">({item.role})</p>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
