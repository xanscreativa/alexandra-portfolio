type ColorPaletteProps = {
  colors: string[];
};

const COLOR_NAMES: Record<string, string> = {
  "#EE6597": "Pink",
  "#FAAF40": "Orange",
  "#8BC53F": "Green",
  "#D8A1BD": "Dusty Pink",
  "#FBBAC8": "Soft Pink",
  "#FCF7F3": "Cream",
  "#2A8639": "Green",
  "#F4A83E": "Orange",
  "#6DC043": "Fresh Green",
  "#76C944": "Lime Green",
  "#FCD64B": "Warm Yellow",
  "#087FC7": "Blue",
  "#FFB719": "Golden Yellow",
  "#FFFFFF": "White",
  "#5F8FD1": "Sky Blue",
  "#FFF4D6": "Soft Cream",
  "#202B3C": "Deep Navy",
  "#081651": "Deep Navy",
  "#2846A9": "Royal Blue",
  "#72B6F5": "Sky Blue",
  "#7C60D7": "Soft Violet",
  "#CF71EA": "Lilac",
  "#F9F6FC": "Soft Lavender",
  "#164A8A": "Deep Blue",
  "#3C72B5": "Calm Blue",
  "#C9A85C": "Muted Gold",
  "#AFC7DE": "Soft Blue",
  "#F7F5F0": "Warm Ivory",
  "#243247": "Deep Slate",
  "#8BCB8A": "Soft Green",
  "#A9DDF0": "Baby Blue",
  "#FFD98E": "Warm Yellow",
  "#F5B6C8": "Soft Pink",
  "#FFF9F2": "Warm Cream",
  "#40504A": "Sage Dark",
};

export default function ColorPalette({ colors }: ColorPaletteProps) {
  if (!colors.length) return null;

  return (
    <div className="w-full overflow-x-auto pb-2">
      <div className="flex min-w-max items-start justify-between gap-6 sm:gap-8 lg:gap-10">
        {colors.map((color) => {
          const hex = color.toUpperCase();
          const name = COLOR_NAMES[hex] ?? "Color";

          return (
            <div
              key={color}
              className="flex w-[72px] shrink-0 flex-col items-center text-center sm:w-[88px] lg:w-[104px]"
            >
              <div
                className="h-[72px] w-[72px] rounded-full border border-black/10 shadow-[0_5px_12px_rgba(45,36,51,0.16)] sm:h-[88px] sm:w-[88px] lg:h-[104px] lg:w-[104px]"
                style={{ backgroundColor: color }}
                aria-label={`${name} ${hex}`}
              />
              <p className="mt-3 min-h-[32px] text-[10px] font-semibold leading-4 text-[#2D2433] sm:text-xs">
                {name}
              </p>
              <p className="mt-1 font-mono text-[10px] leading-4 text-[#6B6570] sm:text-xs">
                {hex}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
