import type { Project } from "../../types/project";

interface Props {
  project: Project;
}

export default function WorkTypography({ project }: Props) {
  const fontFamily =
    typeof project.typography === "string"
      ? project.typography
      : project.typography?.fontFamily || "Plus Jakarta Sans";

  const fontDescription =
    typeof project.typography === "string"
      ? "Primary typeface used across the visual identity."
      : project.typography?.description || "Primary typeface used across the visual identity.";

  const typeStyles = [
    {
      label: "Small Print",
      role: "Heading",
      weight: 700,
      sample: "Aa",
      background: "#F8D9E5",
    },
    {
      label: fontFamily,
      role: "Subheading",
      weight: 600,
      sample: "Aa",
      background: "#FCEEF3",
    },
    {
      label: fontFamily,
      role: "Body Text",
      weight: 400,
      sample: "Aa",
      background: "#F7F5F0",
    },
  ];

  return (
    <section className="bg-[#FFFDFB] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto w-[92%] max-w-7xl">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="uppercase tracking-[0.35em] text-pink-500">Typography</p>
            <h2 className="mt-3 text-3xl font-black text-[#2D2433] sm:text-4xl lg:text-5xl">
              Typography System
            </h2>
          </div>
          <p className="max-w-md text-sm leading-6 text-[#6B6570] sm:text-right">
            {fontDescription}
          </p>
        </div>

        <div className="mt-10 rounded-[28px] bg-white p-4 sm:p-6 lg:p-8">
          <div className="grid grid-cols-3 gap-x-3 sm:gap-x-6 lg:gap-x-10">
            {typeStyles.map((style) => (
              <div key={style.role} className="min-w-0">
                <div
                  className="flex h-24 w-full items-center justify-center rounded-[20px] sm:h-32 sm:rounded-[24px] lg:h-36"
                  style={{ backgroundColor: style.background }}
                >
                  <span
                    className="text-4xl leading-none text-[#5F7FBE] sm:text-5xl lg:text-6xl"
                    style={{
                      fontFamily: `'${fontFamily}', sans-serif`,
                      fontWeight: style.weight,
                    }}
                  >
                    {style.sample}
                  </span>
                </div>

                <div className="mt-4 text-center">
                  <p
                    className="truncate text-[10px] font-semibold text-[#2D2433] sm:text-sm lg:text-base"
                    style={{
                      fontFamily: `'${fontFamily}', sans-serif`,
                      fontWeight: style.weight,
                    }}
                    title={style.label}
                  >
                    {style.label}
                  </p>
                  <p className="mt-1 text-[9px] leading-3 text-[#6B6570] sm:text-xs lg:text-sm">
                    ({style.role})
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 border-t border-[#F1E5EA] pt-6">
            <p
              className="break-words text-center text-lg text-[#2D2433] sm:text-xl lg:text-2xl"
              style={{ fontFamily: `'${fontFamily}', sans-serif` }}
            >
              Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm Nn Oo Pp Qq Rr Ss Tt Uu Vv Ww Xx Yy Zz
            </p>
            <p className="mt-2 text-center font-mono text-[9px] uppercase tracking-[0.18em] text-[#8A808A] sm:text-[10px]">
              {fontFamily} · 1234567890
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
