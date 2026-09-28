"use client";

import { usePathname } from "next/navigation";

type TypographyFont = {
  family: string;
  src?: string;
};
type TypographyTheme = { name: string; tone: string; heading: TypographyFont; subheading: TypographyFont; body: TypographyFont };
type TypographyPaletteProps = { fontFamily?: string; fontSrc?: string; themes?: TypographyTheme[] };
type GpibFont = TypographyFont & { role: "Primary" | "Secondary" | "Body Text" };

const ROLE_META = [
  { key: "heading", role: "Heading" },
  { key: "subheading", role: "Sub Heading" },
  { key: "body", role: "Body Text" },
] as const;

const BRAND_PALETTES: Record<string, string[]> = {
  "jendela-finansial": ["#087FC7", "#FFB719", "#FFFFFF", "#5F8FD1", "#FFF4D6", "#202B3C"],
  "consistrade-brand": ["#081651", "#2846A9", "#72B6F5", "#7C60D7", "#CF71EA", "#F9F6FC"],
  "gpib-immanuel-pekanbaru": ["#164A8A", "#3C72B5", "#C9A85C", "#AFC7DE", "#F7F5F0", "#243247"],
  "pelkat-pa-gpib-immanuel-pekanbaru": ["#8BCB8A", "#A9DDF0", "#FFD98E", "#F5B6C8", "#FFF9F2", "#40504A"],
  "hut-63-pelkat-pa": ["#2A8639", "#F4A83E", "#6DC043", "#76C944", "#FCD64B", "#FCF7F3"],
  "hut-67-pelkat-pa": ["#EE6597", "#FAAF40", "#8BC53F", "#D8A1BD", "#FBBAC8", "#FCF7F3"],
};

const TYPE_COLORS: Record<string, string[]> = {
  "jendela-finansial": ["#087FC7", "#9A6500", "#202B3C"],
  "consistrade-brand": ["#081651", "#2846A9", "#7C60D7"],
  "gpib-immanuel-pekanbaru": ["#164A8A", "#3C72B5", "#80651F"],
  "pelkat-pa-gpib-immanuel-pekanbaru": ["#3D7A42", "#2E7897", "#9A7000"],
  "hut-63-pelkat-pa": ["#2A8639", "#B56A12", "#3D8A25"],
  "hut-67-pelkat-pa": ["#B33F6C", "#B96E16", "#4F7E24"],
};

const JENDELA_THEMES: TypographyTheme[] = [
  { name: "Blue Theme", tone: "#087FC7", heading: { family: "Small Print", src: "/fonts/branding/SmallPrint.woff2" }, subheading: { family: "Poppins", src: "/fonts/branding/Poppins.woff2" }, body: { family: "Mulish", src: "/fonts/branding/Mulish.woff2" } },
  { name: "Yellow Theme", tone: "#FFB719", heading: { family: "Alphakind", src: "/fonts/branding/Alphakind.woff2" }, subheading: { family: "Poppins", src: "/fonts/branding/Poppins.woff2" }, body: { family: "Mulish", src: "/fonts/branding/Mulish.woff2" } },
  { name: "White Theme", tone: "#D7D2C9", heading: { family: "Peach Days", src: "/fonts/branding/PeachDays.woff2" }, subheading: { family: "Dish Out", src: "/fonts/branding/DishOut.woff2" }, body: { family: "Mulish", src: "/fonts/branding/Mulish.woff2" } },
];

const CONSISTRADE_THEME: TypographyTheme = {
  name: "Consistrade Type",
  tone: "#081651",
  heading: { family: "Poppins Black", src: "/fonts/branding/Poppins-Black.woff2" },
  subheading: { family: "Poppins Semi Bold", src: "/fonts/branding/Poppins-SemiBold.woff2" },
  body: { family: "Outfit", src: "/fonts/branding/Outfit.woff2" },
};

const GPIB_FONTS: GpibFont[] = [
  { family: "League Spartan", role: "Primary", src: "/fonts/branding/LeagueSpartan.woff2" },
  { family: "Bebas Neue", role: "Primary", src: "/fonts/branding/BebasNeue.woff2" },
  { family: "Christmas Snowy", role: "Secondary", src: "/fonts/branding/ChristmasSnowy.woff2" },
  { family: "Alucky", role: "Secondary", src: "/fonts/branding/Alucky.woff2" },
  { family: "Afacad", role: "Body Text", src: "/fonts/branding/Afacad.woff2" },
];

const HUT67_THEMES: TypographyTheme[] = [
  { name: "HUT 67 Type", tone: "#EE6597", heading: { family: "Howdybun", src: "/fonts/branding/Howdybun.woff2" }, subheading: { family: "Open Sans Condensed", src: "/fonts/branding/OpenSansCondensed.woff2" }, body: { family: "Outfit", src: "/fonts/branding/Outfit.woff2" } },
];

const getRegisteredFamily = (font: TypographyFont, themeIndex: number, roleIndex: number) =>
  font.src ? `Typography-${themeIndex}-${roleIndex}-${font.family.replace(/[^a-zA-Z0-9]/g, "")}` : font.family;

const withAlpha = (hex: string, alpha: string) => `${hex}${alpha}`;

export default function TypographyPalette({ fontFamily = "Plus Jakarta Sans", fontSrc, themes }: TypographyPaletteProps) {
  const pathname = usePathname();
  const slug = pathname?.split("/").filter(Boolean).pop();

  const fallbackTheme: TypographyTheme = {
    name: "Primary",
    tone: "#E85D8E",
    heading: { family: fontFamily, src: fontSrc },
    subheading: { family: fontFamily, src: fontSrc },
    body: { family: fontFamily, src: fontSrc },
  };

  if (slug === "hut-63-pelkat-pa") {
    return (
      <div className="w-full bg-white px-1 py-2 sm:px-2 sm:py-3">
        <p className="max-w-3xl text-sm leading-7 text-[#6B6570] sm:text-base sm:leading-8">
          The typography uses a rounded sans serif style, with decorative typography applied to the logo. Serif fonts such as Times New Roman should be avoided.
        </p>
      </div>
    );
  }

  if (slug === "pelkat-pa-gpib-immanuel-pekanbaru") {
    return (
      <div className="w-full bg-white px-1 py-2 sm:px-2 sm:py-3">
        <div className="max-w-3xl space-y-2 text-sm leading-6 text-[#40504A] sm:text-base sm:leading-7">
          <p><span className="font-semibold">Heading:</span> Rounded and decorative fonts are used to create a playful, warm, and friendly visual character that suits the children&apos;s ministry identity.</p>
          <p><span className="font-semibold">Body Text:</span> KG Primary and Poppins are used for clear, approachable, and easy-to-read supporting text.</p>
        </div>
      </div>
    );
  }

  const activeThemes = themes?.length
    ? themes
    : slug === "jendela-finansial"
      ? JENDELA_THEMES
      : slug === "consistrade-brand"
        ? [CONSISTRADE_THEME]
        : slug === "gpib-immanuel-pekanbaru"
          ? []
          : slug === "hut-67-pelkat-pa"
            ? HUT67_THEMES
            : [fallbackTheme];

  const palette = BRAND_PALETTES[slug ?? ""] ?? ["#E85D8E", "#F8D9E5", "#2D2433"];
  const typeColors = TYPE_COLORS[slug ?? ""] ?? ["#2D2433", "#2D2433", "#2D2433"];

  return (
    <>
      <style>{`${[
        ...activeThemes.flatMap((theme, themeIndex) => ROLE_META.map((item, roleIndex) => {
          const font = theme[item.key];
          if (!font.src) return "";
          const family = getRegisteredFamily(font, themeIndex, roleIndex);
          return `@font-face { font-family: '${family}'; src: url('${font.src}') format('woff2'); font-display: swap; }`;
        })),
        ...GPIB_FONTS.map((font, index) => `@font-face { font-family: 'GPIB-${index}'; src: url('${font.src}') format('woff2'); font-display: swap; }`),
      ].join("\n")}`}</style>

      <div className="w-full bg-white px-1 py-2 sm:px-2 sm:py-3">
        {slug === "jendela-finansial" ? (
          <div className="space-y-5 sm:space-y-6">
            {activeThemes.map((theme, themeIndex) => (
              <div key={theme.name}>
                <p className="mb-3 text-[9px] font-bold uppercase tracking-[0.14em] sm:text-[10px]" style={{ color: theme.tone }}>{theme.name}</p>
                <div className="grid grid-cols-3 gap-2 sm:gap-3 lg:gap-4">
                  {ROLE_META.map((item, roleIndex) => {
                    const font = theme[item.key];
                    const registeredFamily = getRegisteredFamily(font, themeIndex, roleIndex);
                    const aaColor = typeColors[roleIndex];
                    return (
                      <div key={item.role} className="min-w-0 text-center">
                        <div className="mx-auto flex h-[34px] w-[58px] items-center justify-center rounded-lg sm:h-[36px] sm:w-[64px]" style={{ backgroundColor: withAlpha(theme.tone, "16") }}>
                          <span className="text-lg leading-none sm:text-xl" style={{ color: aaColor, fontFamily: `'${registeredFamily}', sans-serif` }}>Aa</span>
                        </div>
                        <p className="mt-2 break-words text-[10px] font-semibold leading-4 sm:text-[11px] sm:leading-4" style={{ color: aaColor, fontFamily: `'${registeredFamily}', sans-serif` }} title={font.family}>{font.family}</p>
                        <p className="mt-0.5 text-[8px] leading-3 text-[#5A535D] sm:text-[9px]">({item.role})</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        ) : slug === "gpib-immanuel-pekanbaru" ? (
          <div data-typography-layout="gpib-five-fonts" className="grid grid-cols-5 gap-1.5 sm:gap-2 lg:gap-3">
            {GPIB_FONTS.map((font, index) => {
              const roleIndex = font.role === "Primary" ? 0 : font.role === "Secondary" ? 1 : 2;
              const color = typeColors[roleIndex];
              const roleBackground = palette[roleIndex];
              return (
                <div key={`${font.role}-${font.family}`} className="min-w-0 text-center">
                  <div className="mx-auto flex h-[34px] w-[58px] items-center justify-center rounded-lg sm:h-[36px] sm:w-[64px]" style={{ backgroundColor: withAlpha(roleBackground, "16") }}>
                    <span className="text-lg leading-none sm:text-xl" style={{ color, fontFamily: `'GPIB-${index}', sans-serif` }}>Aa</span>
                  </div>
                  <p className="mt-2 break-words text-[10px] font-semibold leading-4 sm:text-[11px] sm:leading-4" style={{ color, fontFamily: `'GPIB-${index}', sans-serif` }} title={font.family}>{font.family}</p>
                  <p className="mt-0.5 text-[8px] leading-3 text-[#5A535D] sm:text-[9px]">({font.role})</p>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="grid grid-cols-3 gap-2 sm:gap-3 lg:gap-4">
            {ROLE_META.map((item, roleIndex) => {
              const font = activeThemes[0][item.key];
              const registeredFamily = getRegisteredFamily(font, 0, roleIndex);
              const roleColor = palette[roleIndex % Math.min(3, palette.length)];
              const aaColor = typeColors[roleIndex];
              return (
                <div key={item.role} className="min-w-0 text-center">
                  <div className="mx-auto flex h-[34px] w-[58px] items-center justify-center rounded-lg sm:h-[36px] sm:w-[64px]" style={{ backgroundColor: withAlpha(roleColor, "16") }}>
                    <span className="text-lg leading-none sm:text-xl" style={{ color: aaColor, fontFamily: `'${registeredFamily}', sans-serif` }}>Aa</span>
                  </div>
                  <p className="mt-2 break-words text-[10px] font-semibold leading-4 sm:text-[11px] sm:leading-4" style={{ color: aaColor, fontFamily: `'${registeredFamily}', sans-serif` }} title={font.family}>{font.family}</p>
                  <p className="mt-0.5 text-[8px] leading-3 text-[#5A535D] sm:text-[9px]">({item.role})</p>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
}
