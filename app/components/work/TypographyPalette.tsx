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

  const activeThemes = themes?.length
    ? themes
    : slug === "jendela-finansial"
      ? JENDELA_THEMES
      : [fallbackTheme];

  return (
    <>
      <style>{`
        ${activeThemes
          .flatMap((theme, themeIndex) =>
            ROLE_META.map((item, roleIndex) => {
              const font = theme[item.key];
              if (!font.src) return "";
              const family = getRegisteredFamily(font, themeIndex, roleIndex);
              return `@font-face { font-family: '${family}'; src: url('${font.src}') format('woff2'); font-display: swap; }`;
            }),
          )
          .join("\n")}
      `}</style>

      <div className="w-full rounded-2xl bg-white px-3 py-4 sm:px-5 sm:py-5">
        <div className="space-y-5 sm:space-y-6">
          {activeThemes.map((theme, themeIndex) => (
            <div
              key={theme.name}
              className="rounded-2xl border border-pink-100 bg-[#FFFBFD] p-3 sm:p-4"
            >
              <div className="mb-3 flex items-center justify-between gap-3 sm:mb-4">
                <div className="flex min-w-0 items-center gap-2.5">
                  <span
                    className="h-2.5 w-2.5 flex-shrink-0 rounded-full"
                    style={{ backgroundColor: theme.tone }}
                  />
                  <p className="truncate text-[9px] font-bold uppercase tracking-[0.14em] text-[#2D2433] sm:text-[10px]">
                    {theme.name}
                  </p>
                </div>
                <span className="text-[7px] font-mono uppercase tracking-[0.14em] text-[#A39BA4] sm:text-[8px]">
                  TYPE SYSTEM
                </span>
              </div>

              <div className="grid grid-cols-3 gap-2 sm:gap-3">
                {ROLE_META.map((item, roleIndex) => {
                  const font = theme[item.key];
                  const registeredFamily = getRegisteredFamily(font, themeIndex, roleIndex);

                  return (
                    <div key={item.role} className="min-w-0 text-center">
                      <div
                        className="mx-auto flex aspect-square w-full max-w-[82px] items-center justify-center rounded-[14px] sm:max-w-[92px] sm:rounded-[16px]"
                        style={{ backgroundColor: item.bg }}
                      >
                        <span
                          className="text-2xl leading-none text-[#5F7FBE] sm:text-3xl"
                          style={{ fontFamily: `'${registeredFamily}', sans-serif` }}
                        >
                          Aa
                        </span>
                      </div>

                      <p
                        className="mt-2 truncate text-[7px] font-semibold leading-3 text-[#2D2433] sm:mt-2.5 sm:text-[9px]"
                        style={{ fontFamily: `'${registeredFamily}', sans-serif` }}
                        title={font.family}
                      >
                        {font.family}
                      </p>
                      <p className="mt-0.5 text-[7px] leading-3 text-[#6B6570] sm:text-[8px]">
                        ({item.role})
                      </p>
                    </div>
                  );
                })}
              </div>

              <div className="mt-4 border-t border-pink-100 pt-3 text-center sm:mt-5 sm:pt-4">
                <p
                  className="break-words text-[10px] leading-4 text-[#2D2433] sm:text-xs sm:leading-5"
                  style={{
                    fontFamily: `'${getRegisteredFamily(theme.body, themeIndex, 2)}', sans-serif`,
                  }}
                >
                  Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm Nn Oo Pp Qq Rr Ss Tt Uu Vv Ww Xx Yy Zz
                </p>
                <p className="mt-1 font-mono text-[6px] uppercase tracking-[0.16em] text-[#8A808A] sm:text-[7px]">
                  {theme.heading.family} · {theme.subheading.family} · {theme.body.family}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
