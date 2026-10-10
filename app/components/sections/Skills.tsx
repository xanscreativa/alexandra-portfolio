"use client";

import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import adobeIllustrator from "@iconify-icons/logos/adobe-illustrator";
import adobePhotoshop from "@iconify-icons/logos/adobe-photoshop";
import adobePremiere from "@iconify-icons/logos/adobe-premiere";
import adobeLightroom from "@iconify-icons/logos/adobe-lightroom";
import canva from "@iconify-icons/devicon/canva";
import capcut from "@iconify-icons/selfhst/capcut";
import figma from "@iconify-icons/logos/figma";
import visualStudioCode from "@iconify-icons/logos/visual-studio-code";
import FadeUp from "@/components/animation/FadeUp";
import { useLanguage } from "@/context/LanguageContext";

type TranslationKey =
  keyof typeof import("@/data/translations").translations.en;

interface ToolItem {
  name: string;
  levelText: "Expert" | "Advanced" | "Intermediate";
  levelKey: TranslationKey;
  rating: 4 | 4.8;
  icon: React.ReactNode;
}

const MAX_RATING = 5;

interface SkillCategory {
  category: string;
  categoryKey: TranslationKey;
  categoryIcon: React.ReactNode;
  description: string;
  descriptionKey: TranslationKey;
  tools: ToolItem[];
  isFullWidth?: boolean;
  creativePills?: { label: string; key: TranslationKey }[];
}

const Icons = {
  Camera: (
    <svg
      className="h-[11px] w-[11px] transition-transform duration-300 group-hover/tool:scale-110 sm:h-5 sm:w-5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#E96A98"
      strokeWidth="2"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
      />
    </svg>
  ),

  CreativeSpark: (
    <svg
      className="h-3.5 w-3.5 text-[#E96A98] transition-colors duration-300 group-hover:text-white group-hover/tool:scale-110 sm:h-5 sm:w-5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M5 3v4M3 5h4M6 17v4m-2-2h4m11-16l2.5 2.5L17 8l-2.5-2.5L17 3zm0 11l2.5 2.5L17 19l-2.5-2.5L17 14zM9 11l3-3 3 3-3 3-3-3z"
      />
    </svg>
  ),
};

const softwareIconClass = "h-[22px] w-auto transition-transform duration-300 group-hover/tool:scale-110 sm:h-8";

const SoftwareIcons = {
  Illustrator: <Icon icon={adobeIllustrator} className={softwareIconClass} aria-hidden="true" />,
  Photoshop: <Icon icon={adobePhotoshop} className={softwareIconClass} aria-hidden="true" />,
  Canva: <Icon icon={canva} className={softwareIconClass} aria-hidden="true" />,
  Premiere: <Icon icon={adobePremiere} className={softwareIconClass} aria-hidden="true" />,
  CapCut: <Icon icon={capcut} className={softwareIconClass} aria-hidden="true" />,
  Figma: <Icon icon={figma} className={softwareIconClass} aria-hidden="true" />,
  VSCode: <Icon icon={visualStudioCode} className={softwareIconClass} aria-hidden="true" />,
  Lightroom: <Icon icon={adobeLightroom} className={softwareIconClass} aria-hidden="true" />,
};

const skills: SkillCategory[] = [
  {
    category: "Graphic Design",
    categoryKey: "skillsGraphicDesign",
    description: "Visual identity, typography, & marketing assets.",
    descriptionKey: "skillsGraphicDescription",
    categoryIcon: (
      <svg
        className="h-3.5 w-3.5 text-pink-500 transition-colors duration-300 group-hover:text-white sm:h-5 sm:w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
        />
      </svg>
    ),
    tools: [
      {
        name: "Adobe Illustrator",
        levelText: "Expert",
        levelKey: "levelExpert",
        rating: 4.8,
        icon: SoftwareIcons.Illustrator,
      },
      {
        name: "Adobe Photoshop",
        levelText: "Expert",
        levelKey: "levelExpert",
        rating: 4.0,
        icon: SoftwareIcons.Photoshop,
      },
      {
        name: "Canva",
        levelText: "Expert",
        levelKey: "levelExpert",
        rating: 4.8,
        icon: SoftwareIcons.Canva,
      },
    ],
  },

  {
    category: "Video Editing",
    categoryKey: "skillsVideoEditing",
    description: "Motion graphics, pacing & color grading.",
    descriptionKey: "skillsVideoDescription",
    categoryIcon: (
      <svg
        className="h-3.5 w-3.5 text-pink-500 transition-colors duration-300 group-hover:text-white sm:h-5 sm:w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
        />
      </svg>
    ),
    tools: [
      {
        name: "Adobe Premiere Pro",
        levelText: "Advanced",
        levelKey: "levelAdvanced",
        rating: 4.0,
        icon: SoftwareIcons.Premiere,
      },
      {
        name: "CapCut",
        levelText: "Expert",
        levelKey: "levelExpert",
        rating: 4.8,
        icon: SoftwareIcons.CapCut,
      },
    ],
  },

  {
    category: "UI / UX",
    categoryKey: "skillsUiUx",
    description: "Wireframing & layout prototyping.",
    descriptionKey: "skillsUiUxDescription",
    categoryIcon: (
      <svg
        className="h-3.5 w-3.5 text-pink-500 transition-colors duration-300 group-hover:text-white sm:h-5 sm:w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
    tools: [
      {
        name: "Figma",
        levelText: "Advanced",
        levelKey: "levelAdvanced",
        rating: 4.0,
        icon: SoftwareIcons.Figma,
      },
      {
        name: "VS Code",
        levelText: "Intermediate",
        levelKey: "levelIntermediate",
        rating: 4.0,
        icon: SoftwareIcons.VSCode,
      },
    ],
  },

  {
    category: "Photography",
    categoryKey: "skillsPhotography",
    description: "Composition, lighting & photo retouching.",
    descriptionKey: "skillsPhotographyDescription",
    categoryIcon: (
      <svg
        className="h-3.5 w-3.5 text-pink-500 transition-colors duration-300 group-hover:text-white sm:h-5 sm:w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
    tools: [
      {
        name: "DSLR & Mirrorless",
        levelText: "Expert",
        levelKey: "levelExpert",
        rating: 4.8,
        icon: Icons.Camera,
      },
      {
        name: "Adobe Lightroom",
        levelText: "Advanced",
        levelKey: "levelAdvanced",
        rating: 4.8,
        icon: SoftwareIcons.Lightroom,
      },
    ],
  },

  {
    category: "Creative Competencies",
    categoryKey: "skillsCreative",
    description: "Core design disciplines informing every project.",
    descriptionKey: "skillsCreativeDescription",
    categoryIcon: Icons.CreativeSpark,
    isFullWidth: true,
    tools: [],
    creativePills: [
      {
        label: "Brand Identity Systems",
        key: "skillBrandSystems",
      },
      {
        label: "Layout & Typography",
        key: "skillLayoutTypography",
      },
      {
        label: "Packaging Design",
        key: "skillPackaging",
      },
      {
        label: "Digital Illustration",
        key: "skillIllustration",
      },
      {
        label: "Editorial Photography",
        key: "skillEditorialPhotography",
      },
      {
        label: "Creative Copywriting",
        key: "skillCreativeCopywriting",
      },
    ],
  },
];

export default function Skills() {
  const { t } = useLanguage();

  return (
    <section
      id="skills"
      className="relative overflow-hidden border-t border-pink-100/60 bg-gradient-to-b from-[#FFFDFB] via-[#FFFFFF] to-[#FFF7FB] pt-12 pb-20 sm:py-32 lg:pt-36 lg:pb-44"
    >
      {/* Background Soft Glow Accents */}
      <div className="pointer-events-none absolute -left-32 top-1/3 h-64 w-64 rounded-full bg-pink-100/40 blur-[120px] sm:-left-44 sm:h-[500px] sm:w-[500px] sm:blur-[180px]" />

      <div className="pointer-events-none absolute -right-32 bottom-1/4 h-64 w-64 rounded-full bg-pink-100/35 blur-[120px] sm:-right-44 sm:h-[500px] sm:w-[500px] sm:blur-[180px]" />

      <div className="relative z-10 mx-auto w-[92%] max-w-7xl sm:w-[92%]">

        {/* HEADER SECTION */}
        <FadeUp>
          <div className="mx-auto mb-8 max-w-2xl text-center sm:mb-20 lg:mb-24">

            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-pink-200/70 bg-white/90 px-3 py-1 shadow-2xs backdrop-blur-md sm:mb-4 sm:px-4 sm:py-1.5">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-pink-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-pink-500" />
              </span>

              <span className="text-[9px] font-mono font-extrabold uppercase tracking-[0.2em] text-pink-600 sm:text-xs">
                {t("skillsBadge")}
              </span>
            </div>

            <FadeUp delay={0.16}>
              <h2 className="text-xl font-black leading-tight text-[#2D2433] sm:text-4xl lg:text-5xl">
                {t("skillsTitlePrefix")}{" "}
                <span className="bg-gradient-to-r from-pink-600 via-pink-500 to-rose-400 bg-clip-text text-transparent">
                  {t("skillsTitleHighlight")}
                </span>
              </h2>
            </FadeUp>

            <FadeUp delay={0.24}>
              <p className="mx-auto mt-2 max-w-xl text-xs leading-normal text-[#6B6570] sm:mt-4 sm:text-base sm:leading-relaxed">
                {t("skillsDescription")}
              </p>
            </FadeUp>

          </div>
        </FadeUp>

        {/* SKILLS CARDS GRID */}
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-6 lg:gap-8">

          {skills.map((skillCategory, index) => {
            const cardDelay = 0.2 + index * 0.08;

            return (
              <div
                key={skillCategory.category}
                className={
                  skillCategory.isFullWidth
                    ? "col-span-full"
                    : "col-span-1"
                }
              >
                <FadeUp delay={cardDelay}>

                  <div
                    className={`group relative rounded-[18px] border border-pink-200/70 bg-white/95 p-4 shadow-[0_4px_16px_rgba(45,36,51,0.025)] backdrop-blur-md transition-all duration-500 ease-out hover:-translate-y-1.5 hover:border-pink-400/60 hover:bg-gradient-to-b hover:from-white hover:to-pink-50/20 hover:shadow-[0_20px_45px_rgba(233,106,152,0.12)] sm:rounded-[32px] sm:p-7 sm:shadow-[0_10px_30px_rgba(45,36,51,0.03)] ${
                      skillCategory.isFullWidth ? "sm:p-8" : ""
                    }`}
                  >

                    <div className="pointer-events-none absolute inset-0 rounded-[20px] bg-gradient-to-br from-pink-100/30 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 sm:rounded-[32px]" />

                    {/* CARD HEADER */}
                    <div className="relative z-10 flex items-start justify-between gap-2 sm:gap-3">

                      <div className="min-w-0">

                        <div className="flex min-w-0 items-center gap-2 sm:gap-3">

                          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl border border-pink-200/80 bg-pink-50/80 text-pink-500 shadow-2xs transition-all duration-500 group-hover:scale-110 group-hover:border-pink-500 group-hover:bg-pink-500 group-hover:text-white sm:h-11 sm:w-11 sm:rounded-2xl">
                            {skillCategory.categoryIcon}
                          </div>

                          <h3 className="min-w-0 text-xs font-black tracking-tight text-[#2D2433] sm:text-xl">
                            {t(skillCategory.categoryKey)}
                          </h3>

                        </div>

                        <p className="mt-1.5 text-[11px] leading-tight text-[#6B6570] sm:mt-2 sm:text-sm sm:leading-relaxed">
                          {t(skillCategory.descriptionKey)}
                        </p>

                      </div>

                    </div>

                    {/* CREATIVE SKILLS BADGES */}
                    {skillCategory.isFullWidth &&
                      skillCategory.creativePills && (
                        <div className="relative z-10 mt-3 flex flex-wrap gap-1.5 sm:mt-6 sm:gap-3">

                          {skillCategory.creativePills.map((pill) => (
                            <span
                              key={pill.key}
                              className="inline-flex items-center rounded-lg border border-pink-200/70 bg-pink-50/70 px-2.5 py-1 text-[11px] font-semibold text-[#6B6570] shadow-[0_2px_8px_rgba(45,36,51,0.01)] transition-all duration-300 hover:border-pink-300 hover:bg-white hover:text-[#2D2433] sm:rounded-xl sm:px-4 sm:py-2 sm:text-xs"
                            >
                              {t(pill.key)}
                            </span>
                          ))}

                        </div>
                      )}

                    {/* SOFTWARE ITEMS */}
                    {skillCategory.tools.length > 0 && (
                      <div className="relative z-10 mt-3 space-y-0 sm:mt-7 sm:space-y-4">

                        {skillCategory.tools.map((tool, toolIdx) => (
                          <div
                            key={tool.name}
                            className="group/tool border-b border-pink-100/90 py-0.5 last:border-b-0 sm:rounded-2xl sm:border sm:border-pink-100/80 sm:bg-pink-50/30 sm:p-4 sm:transition-all sm:duration-300 sm:hover:border-pink-300/80 sm:hover:bg-pink-50/60"
                          >

                            <div className="flex min-h-12 items-center gap-2 sm:min-h-0 sm:gap-3">

                              {/* TOOL ICON + NAME */}
                              <div className="flex min-w-0 flex-1 items-center gap-2 sm:gap-3">

                                <div className="flex h-7 w-7 shrink-0 items-center justify-center sm:h-9 sm:w-9">
                                  {tool.icon}
                                </div>

                                {/* FIX: no truncate, text can wrap naturally */}
                                <span className="min-w-0 flex-1 whitespace-nowrap text-[11px] font-bold leading-tight text-[#2D2433] sm:whitespace-normal sm:break-words sm:text-sm">
                                  {tool.name}
                                </span>

                              </div>

                              {/* LEVEL BADGE */}
                              <span className="shrink-0 rounded-full border border-pink-200/80 bg-pink-50/90 px-1.5 py-0.5 text-[9px] font-mono font-extrabold uppercase tracking-widest text-pink-600 shadow-2xs sm:px-3 sm:py-1 sm:text-[10px]">

                                <span className="sm:hidden">
                                  {t(
                                    tool.levelKey === "levelExpert"
                                      ? "levelExpertShort"
                                      : tool.levelKey === "levelAdvanced"
                                      ? "levelAdvancedShort"
                                      : "levelIntermediateShort"
                                  )}
                                </span>

                                <span className="hidden sm:inline">
                                  {t(tool.levelKey)}
                                </span>

                              </span>

                            </div>

                            {/* PROGRESS BAR */}
                            <div className="mb-1 h-1.5 w-full overflow-hidden rounded-full bg-pink-100/80 p-0.5 sm:mb-0 sm:mt-3.5 sm:h-2">

                              <motion.div
                                initial={{ width: 0 }}
                                whileInView={{
                                  width: `${(tool.rating / MAX_RATING) * 100}%`,
                                }}
                                viewport={{ once: true }}
                                transition={{
                                  duration: 1.1,
                                  delay:
                                    cardDelay +
                                    0.1 +
                                    toolIdx * 0.08,
                                  ease: [0.16, 1, 0.3, 1],
                                }}
                                className="h-full rounded-full bg-[#E85D8E] shadow-[0_0_12px_rgba(236,72,153,0.4)] sm:bg-gradient-to-r sm:from-pink-400 sm:via-pink-500 sm:to-rose-400"
                              />

                            </div>

                          </div>
                        ))}

                      </div>
                    )}

                  </div>

                </FadeUp>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}