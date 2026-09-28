type TypographyPaletteProps = {
  fontFamily?: string;
  fontSrc?: string;
};

const TYPOGRAPHY_ROLES = [
  { role: "Heading", weight: 800, bg: "#F8D9E5" },
  { role: "Subheading", weight: 600, bg: "#FCEEF3" },
  { role: "Body Text", weight: 400, bg: "#F7F5F0" },
] as const;

export default function TypographyPalette({
  fontFamily = "Plus Jakarta Sans",
  fontSrc,
}: TypographyPaletteProps) {
  return (
    <>
      {fontSrc && (
        <style>{`
          @font-face {
            font-family: '${fontFamily}';
            src: url('${fontSrc}') format('woff2');
            font-display: swap;
          }
        `}</style>
      )}

      <div className="w-full rounded-2xl bg-white px-3 py-4 sm:px-5 sm:py-5">
        <div className="mx-auto grid max-w-[420px] grid-cols-3 gap-x-2 sm:gap-x-4">
          {TYPOGRAPHY_ROLES.map((item) => (
            <div key={item.role} className="min-w-0 text-center">
              <div
                className="mx-auto flex aspect-square w-full max-w-[96px] items-center justify-center rounded-[16px] sm:max-w-[104px] sm:rounded-[18px]"
                style={{ backgroundColor: item.bg }}
              >
                <span
                  className="text-3xl leading-none text-[#5F7FBE] sm:text-4xl"
                  style={{
                    fontFamily: `'${fontFamily}', sans-serif`,
                    fontWeight: item.weight,
                  }}
                >
                  Aa
                </span>
              </div>

              <p
                className="mt-2.5 truncate text-[8px] font-semibold leading-3 text-[#2D2433] sm:mt-3 sm:text-[10px]"
                style={{
                  fontFamily: `'${fontFamily}', sans-serif`,
                  fontWeight: item.weight,
                }}
                title={fontFamily}
              >
                {fontFamily}
              </p>
              <p className="mt-0.5 text-[8px] leading-3 text-[#6B6570] sm:text-[9px]">
                ({item.role})
              </p>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-5 max-w-[420px] border-t border-pink-100 pt-3 text-center sm:mt-6 sm:pt-4">
          <p
            className="break-words text-xs leading-5 text-[#2D2433] sm:text-sm sm:leading-6"
            style={{ fontFamily: `'${fontFamily}', sans-serif` }}
          >
            Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm Nn Oo Pp Qq Rr Ss Tt Uu Vv Ww Xx Yy Zz
          </p>
          <p className="mt-1 font-mono text-[7px] uppercase tracking-[0.16em] text-[#8A808A] sm:text-[8px]">
            {fontFamily} · 1234567890
          </p>
        </div>
      </div>
    </>
  );
}
