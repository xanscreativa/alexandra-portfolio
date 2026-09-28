import type { Project } from "../../types/project";

interface Props {
  project: Project;
}

export default function WorkTypography({ project }: Props) {
  const fontFamily =
    typeof project.typography === "string"
      ? project.typography
      : project.typography?.fontFamily || "Plus Jakarta Sans";

  const styles = [
    { role: "Heading", weight: 800, bg: "#F8D9E5" },
    { role: "Subheading", weight: 600, bg: "#FCEEF3" },
    { role: "Body Text", weight: 400, bg: "#F7F5F0" },
  ];

  return (
    <div className="w-full rounded-2xl bg-white px-3 py-5 sm:px-5 sm:py-7">
      <div className="grid grid-cols-3 gap-x-3 sm:gap-x-6 lg:gap-x-10">
        {styles.map((style) => (
          <div key={style.role} className="min-w-0 text-center">
            <div
              className="flex aspect-square w-full items-center justify-center rounded-[18px] sm:rounded-[22px]"
              style={{ backgroundColor: style.bg }}
            >
              <span
                className="text-3xl leading-none text-[#5F7FBE] sm:text-5xl lg:text-6xl"
                style={{
                  fontFamily: `'${fontFamily}', sans-serif`,
                  fontWeight: style.weight,
                }}
              >
                Aa
              </span>
            </div>

            <p
              className="mt-3 text-[9px] font-semibold leading-3 text-[#2D2433] sm:mt-4 sm:text-xs lg:text-sm"
              style={{
                fontFamily: `'${fontFamily}', sans-serif`,
                fontWeight: style.weight,
              }}
            >
              {fontFamily}
            </p>
            <p className="mt-1 text-[8px] leading-3 text-[#6B6570] sm:text-[10px] lg:text-xs">
              ({style.role})
            </p>
          </div>
        ))}
      </div>

      <div className="mt-6 border-t border-pink-100 pt-4 text-center sm:mt-7 sm:pt-5">
        <p
          className="break-words text-sm text-[#2D2433] sm:text-base lg:text-lg"
          style={{ fontFamily: `'${fontFamily}', sans-serif` }}
        >
          Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm Nn Oo Pp Qq Rr Ss Tt Uu Vv Ww Xx Yy Zz
        </p>
        <p className="mt-1.5 font-mono text-[8px] uppercase tracking-[0.16em] text-[#8A808A] sm:text-[9px]">
          {fontFamily} · 1234567890
        </p>
      </div>
    </div>
  );
}
