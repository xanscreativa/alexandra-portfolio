type ColorPaletteProps = {
  colors: string[];
  compactTypography?: boolean;
};

const COLOR_NAMES: Record<string, string> = {
  "#242222": "MIDNIGHT HAIR",
  "#F9C9A5": "WARM PEACH",
  "#303B9B": "ROYAL BLUE",
  "#08735C": "EMERALD GREEN",
  "#FFBE2E": "SUNNY YELLOW",
  "#F7943D": "SOFT ORANGE",
  "#FAD887": "SOFT CREAM",
  "#FDCE69": "GOLDEN YELLOW",
  "#895336": "WARM BROWN",
  "#221F1B": "DEEP CHARCOAL",
  "#709751": "SAGE GREEN",
  "#C58D5C": "SOFT PEACH",
  "#B91919": "BOLD RED",
  "#8F0D0D": "DEEP BURGUNDY",
  "#161414": "CHARCOAL BLACK",
  "#F4C99E": "WARM PEACH",
  "#D2A221": "METALLIC GOLD",
  "#C97568": "SOFT CORAL",
  "#FDFBFD": "SOFT WHITE",
  "#EED3FB": "LAVENDER",
  "#7C98F3": "SKY BLUE",
  "#FAD2D1": "SOFT PINK",
  "#22201F": "DEEP CHARCOAL",
  "#4C3765": "DEEP PURPLE",
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
  "#1C6B3E": "Deep Green",
  "#60305D": "GPIB Purple",
  "#D99A2B": "Warm Gold",
  "#C94A3F": "Warm Red",
  "#9E378D": "Plum Magenta",
};

const GPIB_OLD_PALETTE = [
  "#164A8A",
  "#3C72B5",
  "#C9A85C",
  "#AFC7DE",
  "#F7F5F0",
  "#243247",
];

const GPIB_PALETTE = [
  "#FFFFFF",
  "#1C6B3E",
  "#60305D",
  "#D99A2B",
  "#C94A3F",
  "#9E378D",
];

function resolvePalette(colors: string[]) {
  const normalized = colors.map((color) => color.toUpperCase());
  const isOldGPIBPalette =
    normalized.length === GPIB_OLD_PALETTE.length &&
    normalized.every((color, index) => color === GPIB_OLD_PALETTE[index]);

  return isOldGPIBPalette ? GPIB_PALETTE : colors;
}

export default function ColorPalette({
  colors,
  compactTypography = false,
}: ColorPaletteProps) {
  if (!colors.length) return null;

  const displayColors = resolvePalette(colors);

  return (
    <div className="w-full px-[2px] sm:px-2">
      <div className="grid w-full grid-cols-3 gap-x-2 gap-y-3 sm:flex sm:flex-nowrap sm:items-start sm:justify-between sm:gap-x-3 lg:gap-x-5">
        {displayColors.map((color) => {
          const hex = color.toUpperCase();
          const name = COLOR_NAMES[hex] ?? "Color";

          return (
            <div key={color} className="flex min-w-0 flex-1 flex-col items-center text-center">
              <div
                className="h-14 w-full shrink-0 rounded-xl border border-black/10 sm:h-[68px] sm:w-[68px] sm:rounded-full lg:h-[96px] lg:w-[96px]"
                style={{ backgroundColor: color }}
                aria-label={`${name} ${hex}`}
              />
              <p className={`mt-1 w-full break-words font-semibold leading-3 text-[#2D2433] sm:mt-3 sm:min-h-4 sm:leading-4 ${compactTypography ? "text-[10px]" : "text-xs sm:text-sm"}`}>
                {name}
              </p>
              <p className={`mt-0.5 whitespace-nowrap font-mono leading-3 text-[#6B6570] ${compactTypography ? "text-[10px]" : "text-xs sm:text-sm"}`}>
                {hex}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
