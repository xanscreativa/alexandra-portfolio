"use client";

type ColorPaletteProps = {
  colors: string[];
};

const colorNames: Record<string, string> = {
  "#EE6597": "Pink",
  "#FAAF40": "Orange",
  "#8BC53F": "Green",
  "#D8A1BD": "Dusty Pink",
  "#FBBAC8": "Soft Pink",
  "#FCF7F3": "Cream",
  "#2A8639": "Forest Green",
  "#F4A83E": "Warm Orange",
  "#6DC043": "Leaf Green",
  "#76C944": "Fresh Green",
  "#FCD64B": "Warm Yellow",
  "#087FC7": "Blue",
  "#FFB719": "Yellow",
  "#FFFFFF": "White",
  "#5F8FD1": "Light Blue",
  "#FFF4D6": "Cream",
  "#202B3C": "Deep Navy",
  "#081651": "Navy",
  "#2846A9": "Royal Blue",
  "#72B6F5": "Sky Blue",
  "#7C60D7": "Violet",
  "#CF71EA": "Lilac",
  "#F9F6FC": "Soft White",
  "#164A8A": "Deep Blue",
  "#3C72B5": "Calm Blue",
  "#C9A85C": "Muted Gold",
  "#AFC7DE": "Soft Blue",
  "#F7F5F0": "Warm Ivory",
  "#243247": "Slate",
  "#8BCB8A": "Soft Green",
  "#A9DDF0": "Baby Blue",
  "#FFD98E": "Warm Yellow",
  "#F5B6C8": "Soft Pink",
  "#FFF9F2": "Cream",
  "#40504A": "Sage",
};

export default function ColorPalette({ colors }: ColorPaletteProps) {
  return (
    <div className="w-full overflow-hidden">
      <div className="flex w-full flex-nowrap items-start justify-between gap-1 sm:gap-2 md:gap-3">
        {colors.map((hex) => {
          const normalized = hex.toUpperCase();
          const name = colorNames[normalized] || "Color";

          return (
            <div
              key={hex}
              className="flex min-w-0 flex-1 flex-col items-center text-center"
            >
              <div
                aria-label={`${name} ${hex}`}
                className="aspect-square w-full max-w-[52px] rounded-full sm:max-w-[76px] md:max-w-[96px]"
                style={{ backgroundColor: hex }}
              />
              <p className="mt-1 min-h-[2rem] max-w-[58px] text-[7px] font-semibold leading-[1.1] text-[#2D2433] sm:mt-2 sm:min-h-[2.25rem] sm:max-w-[80px] sm:text-[9px] md:text-xs">
                {name}
              </p>
              <p className="mt-0.5 whitespace-nowrap text-[7px] font-mono tracking-tight text-[#6B6570] sm:text-[9px] md:text-xs">
                {hex.toUpperCase()}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
