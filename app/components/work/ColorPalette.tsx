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
    <div className="w-full overflow-hidden px-1 sm:px-2">
      <div className="grid w-full grid-cols-6 items-start gap-x-2.5 sm:gap-x-3 lg:gap-x-5">
        {colors.map((color) => {
          const hex = color.toUpperCase();
          const name = COLOR_NAMES[hex] ?? "Color";

          return (
            <div key={color} className="flex min-w-0 flex-col items-center text-center">
              <div
                className="h-11 w-11 shrink-0 rounded-full border border-black/10 sm:h-[68px] sm:w-[68px] lg:h-[96px] lg:w-[96px]"
                style={{ backgroundColor: color }}
                aria-label={`${name} ${hex}`}
              />
              <p className="mt-2 min-h-[28px] w-full break-words text-[9px] font-semibold leading-3 text-[#2D2433] sm:mt-3 sm:min-h-[32px] sm:text-[10px] sm:leading-4 lg:text-xs">
                {name}
              </p>
              <p className="mt-0.5 whitespace-nowrap font-mono text-[7px] leading-3 text-[#6B6570] sm:text-[9px] lg:text-xs">
                {hex}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
