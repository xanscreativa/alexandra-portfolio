"use client";

import Link from "next/link";
import {
  Download,
  ArrowLeft,
  Mail,
  MapPin,
  Globe,
  Award,
  BookOpen,
  Briefcase,
  GraduationCap,
  Wrench,
} from "lucide-react";
import type { ReactNode } from "react";
import { useLanguage } from "@/context/LanguageContext";

type ExperienceEntry = {
  titleKey: string;
  dateKey: string;
  company?: string;
  descriptionKey?: string;
};

const professionalExperiences: ExperienceEntry[] = [
  { titleKey: "experienceVideoEditor", dateKey: "date2024_2026", company: "PT. Tera Infinity Ultima", descriptionKey: "experienceVideoEditorDescription" },
  { titleKey: "experienceFreelanceDesigner", dateKey: "date2022Present", company: "Self-employed", descriptionKey: "experienceFreelanceDesignerDescription" },
];

const teachingExperiences: ExperienceEntry[] = [
  { titleKey: "experienceGraphicTeacher", dateKey: "date2025Present", company: "SMP Kalam Kudus Pekanbaru", descriptionKey: "experienceGraphicTeacherDescription" },
  { titleKey: "experiencePaintingTeacher", dateKey: "date2025Present", company: "SMP Kalam Kudus Pekanbaru", descriptionKey: "experiencePaintingTeacherDescription" },
  { titleKey: "experienceDesignClubCoach", dateKey: "date2026Present", company: "Forum Anak GPIB Immanuel Pekanbaru", descriptionKey: "experienceDesignClubCoachDescription" },
];

const additionalDesignExperiences: ExperienceEntry[] = [
  { titleKey: "experienceIntern", dateKey: "dateThreeMonths2022", company: "Biro Promosi, Humas dan Alumni, Satya Wacana Christian University" },
  { titleKey: "experiencePackagingLecturer", dateKey: "dateFourMonths2022", company: "Visual Communication Design Major, SWCU" },
  { titleKey: "experienceResearchGraphicDesigner", dateKey: "dateOneYear2022", company: "Productive Innovative Research Team (Rispro), SWCU" },
  { titleKey: "experienceResearchAssistant", dateKey: "date2021_2022", company: "“Milenial's Batik Eco-Fashion” — Matching Fund Kedaireka Program, SWCU", descriptionKey: "experienceResearchAssistantDescription" },
  { titleKey: "experiencePhotographerIntern", dateKey: "dateThreeMonths2021", company: "Dreams Studio Salatiga" },
  { titleKey: "experiencePhotographyLecturer", dateKey: "dateFourMonths2021", company: "Visual Communication Design Major, SWCU" },
];

const designSkills = ["skillGraphicDesign", "skillBranding", "skillIllustration", "skillPackaging", "skillLayout", "skillVideoEditing", "skillPhotography"];
const creativeCollaborationSkills = ["skillArtDirection", "skillTeamLeadership", "skillTeaching", "skillCopywriting", "skillAICreative", "skillPrint", "skillMarketing"];
const software = ["Adobe Illustrator", "Adobe Premiere Pro", "Adobe Photoshop", "Figma", "CapCut", "Canva"];

export default function ResumePage() {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen bg-[#FFFDFC] text-[#2D2433] px-6 pt-16 pb-24 sm:px-8 sm:pt-28 sm:pb-10 lg:px-10">
      <div className="mx-auto max-w-5xl">
        <div className="mb-6 flex items-center justify-between sm:mb-8">
          <Link href="/" className="group inline-flex items-center gap-2 text-xs font-semibold text-[#77717A] transition-colors hover:text-pink-600 sm:text-sm">
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            {t("resumeSection.backHome")}
          </Link>
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-1.5 rounded-full bg-pink-500 px-3.5 py-2 text-[10px] font-bold text-white shadow-lg shadow-pink-200 transition-all hover:-translate-y-0.5 hover:bg-pink-600 hover:shadow-xl sm:px-6 sm:py-3 sm:text-xs sm:gap-2">
            <Download className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
            <span>{t("resumeSection.downloadPdf")}</span>
          </a>
        </div>

        <div className="overflow-hidden rounded-[26px] border border-pink-100 bg-white shadow-[0_20px_60px_rgba(45,36,51,0.10)]">
          <header className="relative overflow-hidden border-b border-pink-100 px-5 py-7 sm:px-10 sm:py-10 lg:px-12">
            <div className="pointer-events-none absolute -right-20 -top-24 h-64 w-64 rounded-full bg-pink-100/70 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-28 -left-20 h-52 w-52 rounded-full bg-pink-50 blur-3xl" />
            <div className="relative">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-pink-100 bg-pink-50 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.14em] text-pink-600">
                <span className="h-2 w-2 rounded-full bg-pink-500" />
                {t("resumeSection.badge")}
              </div>
              <div className="grid gap-7 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
                <div>
                  <h1 className="max-w-2xl text-[28px] font-extrabold leading-[1.08] tracking-tight text-[#2D2433] sm:text-4xl lg:text-5xl">
                    Dorothea Alexandra
                    <span className="block">
                      <span className="text-[#2D2433]">Manuputty,</span><span className="text-pink-500"> S.Ds</span>
                    </span>
                  </h1>
                  <p className="mt-3 text-sm font-semibold text-[#77717A] sm:text-base">{t("resumeSection.role")}</p>
                </div>
                <div className="grid gap-2.5 text-[11px] text-[#6B6570] sm:text-xs">
                  <a href="mailto:alexandra.dorothea16@gmail.com" className="flex items-center gap-2.5 transition-colors hover:text-pink-600">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-pink-50 text-pink-500"><Mail className="h-3.5 w-3.5" /></span>
                    <span className="break-all">alexandra.dorothea16@gmail.com</span>
                  </a>
                  <div className="flex items-center gap-2.5">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-pink-50 text-pink-500"><MapPin className="h-3.5 w-3.5" /></span>
                    Pekanbaru, Indonesia
                  </div>
                  <div className="flex flex-wrap gap-2 pt-1">
                    <a href="https://xandra-portfolio.vercel.app/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 rounded-full border border-pink-100 px-3 py-1.5 font-medium text-[#6B6570] transition-all hover:border-pink-300 hover:bg-pink-50 hover:text-pink-600"><Globe className="h-3 w-3" />{t("resumeSection.portfolioLink")}</a>
                  </div>
                </div>
              </div>
            </div>
          </header>

          <div className="px-5 py-7 sm:px-10 sm:py-10 lg:px-12">
            <section className="mb-10">
              <SectionTitle icon={<BookOpen className="h-4 w-4" />} title={t("resumeSection.summaryTitle")} />
              <div className="rounded-2xl bg-pink-50/60 p-4 sm:p-5">
                <p className="text-[11px] leading-[1.7] text-[#6B6570] sm:text-sm sm:leading-relaxed">{t("resumeSection.summary")}</p>
              </div>
            </section>

            <section className="mb-10">
              <SectionTitle icon={<Briefcase className="h-4 w-4" />} title={t("resumeSection.workTitle")} />
              <ExperienceTimeline experiences={professionalExperiences.map((experience) => ({
                title: t(`resumeSection.${experience.titleKey}`),
                date: t(`resumeSection.${experience.dateKey}`),
                company: experience.company,
                description: experience.descriptionKey ? t(`resumeSection.${experience.descriptionKey}`) : undefined,
              }))} />
            </section>

            <section className="mb-10">
              <SectionTitle icon={<BookOpen className="h-4 w-4" />} title={t("resumeSection.teachingTitle")} />
              <ExperienceTimeline experiences={teachingExperiences.map((experience) => ({
                title: t(`resumeSection.${experience.titleKey}`),
                date: t(`resumeSection.${experience.dateKey}`),
                company: experience.company,
                description: experience.descriptionKey ? t(`resumeSection.${experience.descriptionKey}`) : undefined,
              }))} />
            </section>

            <section className="mb-10">
              <SectionTitle icon={<Briefcase className="h-4 w-4" />} title={t("resumeSection.additionalExperienceTitle")} />
              <ExperienceTimeline experiences={additionalDesignExperiences.map((experience) => ({
                title: t(`resumeSection.${experience.titleKey}`),
                date: t(`resumeSection.${experience.dateKey}`),
                company: experience.company,
                description: experience.descriptionKey ? t(`resumeSection.${experience.descriptionKey}`) : undefined,
              }))} />
            </section>

            <section className="mb-10">
              <SectionTitle icon={<BookOpen className="h-4 w-4" />} title={t("resumeSection.volunteerTitle")} />
              <div className="rounded-2xl border border-pink-100 bg-white p-4 shadow-sm sm:p-5">
                <ul className="space-y-3 text-[10.5px] leading-[1.6] text-[#77717A] sm:text-xs">
                  <li className="flex gap-2"><span className="text-pink-400">•</span><span><strong>{t("resumeSection.volunteerGraphicDesignLabel")}</strong> — GPIB Children&apos;s Ministry Council ({t("resumeSection.date2022Present")}): {t("resumeSection.volunteerGraphicDesignDescription")}</span></li>
                  <li className="flex gap-2"><span className="text-pink-400">•</span><span><strong>{t("resumeSection.volunteerCommitteeLabel")}</strong> — GPIB Taman Sari Salatiga (2020 – 2023) and GPIB Immanuel Pekanbaru ({t("resumeSection.date2025Present")}): {t("resumeSection.volunteerCommitteeDescription")}</span></li>
                  <li className="flex gap-2"><span className="text-pink-400">•</span><span><strong>{t("resumeSection.volunteerVolunteer")}</strong> — Pelkat PA GPIB ({t("resumeSection.date2017Present")}): {t("resumeSection.volunteerVolunteerDescription")}</span></li>
                </ul>
              </div>
            </section>

            <section className="mb-10">
              <SectionTitle icon={<GraduationCap className="h-4 w-4" />} title={t("resumeSection.educationTitle")} />
              <div className="rounded-2xl border border-pink-100 bg-white p-4 shadow-sm sm:p-5">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="text-sm font-bold text-[#2D2433] sm:text-base">Satya Wacana Christian University (SWCU)</h3>
                    <p className="mt-1 text-[10px] font-semibold text-pink-600 sm:text-xs">{t("resumeSection.educationDegree")}</p>
                  </div>
                  <span className="w-fit rounded-full bg-pink-50 px-2.5 py-1 text-[9px] font-bold text-pink-600 sm:text-[10px]">2018 – 2023</span>
                </div>
              </div>
            </section>

            <section className="mb-10">
              <SectionTitle icon={<Briefcase className="h-4 w-4" />} title={t("resumeSection.selectedProjectsTitle")} />
              <div className="rounded-2xl border border-pink-100 bg-pink-50/40 p-4 sm:p-5">
                <h3 className="text-sm font-bold text-[#2D2433] sm:text-base">Milenial&apos;s Batik Eco-Fashion</h3>
                <p className="mt-1 text-[10px] font-semibold text-pink-600 sm:text-xs">{t("resumeSection.selectedProjectSubtitle")}</p>
                <ul className="mt-3 space-y-1.5 text-[10.5px] leading-[1.6] text-[#77717A] sm:text-xs">
                  <li>• {t("resumeSection.selectedProjectItemOne")}</li>
                  <li>• {t("resumeSection.selectedProjectItemTwo")}</li>
                  <li>• {t("resumeSection.selectedProjectItemThree")}</li>
                  <li>• {t("resumeSection.selectedProjectItemFour")}</li>
                </ul>
              </div>
            </section>

            <section className="mb-10">
              <SectionTitle icon={<Wrench className="h-4 w-4" />} title={t("resumeSection.skillsTitle")} />
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-pink-100 bg-pink-50/40 p-4 sm:p-5">
                  <p className="mb-2 text-[9px] font-extrabold uppercase tracking-[0.16em] text-[#8A828C]">{t("resumeSection.designSkillsTitle")}</p>
                  <div className="flex flex-wrap gap-1.5">{designSkills.map((skillKey) => <span key={skillKey} className="rounded-full border border-pink-100 bg-white px-2.5 py-1.5 text-[9px] font-semibold text-pink-700 shadow-sm sm:text-[10px]">{t(`resumeSection.${skillKey}`)}</span>)}</div>
                  <p className="mb-2 mt-4 text-[9px] font-extrabold uppercase tracking-[0.16em] text-[#8A828C]">{t("resumeSection.creativeCollaborationTitle")}</p>
                  <div className="flex flex-wrap gap-1.5">{creativeCollaborationSkills.map((skillKey) => <span key={skillKey} className="rounded-full border border-pink-100 bg-white px-2.5 py-1.5 text-[9px] font-semibold text-pink-700 shadow-sm sm:text-[10px]">{t(`resumeSection.${skillKey}`)}</span>)}</div>
                </div>
                <div className="rounded-2xl border border-pink-100 bg-pink-50/40 p-4 sm:p-5">
                  <p className="mb-3 text-[9px] font-extrabold uppercase tracking-[0.16em] text-[#8A828C]">{t("resumeSection.software")}</p>
                  <div className="flex flex-wrap gap-1.5">{software.map((item) => <span key={item} className="rounded-full border border-pink-100 bg-white px-2.5 py-1.5 text-[9px] font-semibold text-pink-700 shadow-sm sm:text-[10px]">{item}</span>)}</div>
                </div>
              </div>
            </section>

            <div className="grid gap-5 lg:grid-cols-2">
              <section>
                <SectionTitle icon={<Award className="h-4 w-4" />} title={t("resumeSection.certificationsTitle")} />
                <div className="space-y-3">
                  <AchievementCard title={t("resumeSection.certificationShima")} subtitle={t("resumeSection.certificationShimaSubtitle")} />
                  <AchievementCard title={t("resumeSection.certificationFigma")} subtitle={t("resumeSection.certificationFigmaSubtitle")} />
                </div>
              </section>
              <section>
                <SectionTitle icon={<Award className="h-4 w-4" />} title={t("resumeSection.awardsTitle")} />
                <div className="space-y-3">
                  <AchievementCard title={t("resumeSection.awardLogo")} subtitle={t("resumeSection.awardLogoSubtitle")} />
                  <AchievementCard title={t("resumeSection.awardPackaging")} subtitle={t("resumeSection.awardPackagingSubtitle")} />
                </div>
              </section>
            </div>
          </div>

          <div className="h-1.5 bg-gradient-to-r from-pink-300 via-pink-500 to-pink-300" />
        </div>

        <p className="mt-5 text-center text-[9px] font-medium text-[#A39CA5]">{t("resumeSection.footer")}</p>
      </div>
    </main>
  );
}

function ExperienceTimeline({ experiences }: { experiences: { title: string; date: string; company?: string; description?: string }[] }) {
  return (
    <div className="relative ml-1 space-y-7 border-l border-pink-200 pl-5 sm:ml-2 sm:pl-7">
      {experiences.map((experience, index) => (
        <div key={`${experience.title}-${index}`} className="relative">
          <span className="absolute -left-[25px] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-white bg-pink-500 shadow-[0_0_0_3px_rgba(244,114,182,0.15)] sm:-left-[35px]" />
          <div className="rounded-xl transition-colors hover:bg-pink-50/40 sm:p-1">
            <div className="flex flex-col gap-1.5 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
              <div>
                <h3 className="text-sm font-bold leading-snug text-[#2D2433] sm:text-base">{experience.title}</h3>
                {experience.company && <p className="mt-1 text-[11px] font-semibold text-pink-600 sm:text-xs">{experience.company}</p>}
              </div>
              <span className="w-fit shrink-0 rounded-full bg-pink-50 px-2.5 py-1 text-[9px] font-bold text-pink-600 sm:text-[10px]">{experience.date}</span>
            </div>
            {experience.description && <p className="mt-2.5 max-w-3xl text-[10.5px] leading-[1.65] text-[#77717A] sm:text-xs sm:leading-relaxed">{experience.description}</p>}
          </div>
        </div>
      ))}
    </div>
  );
}

function SectionTitle({ icon, title }: { icon: ReactNode; title: string }) {
  return (
    <div className="mb-4 flex items-center gap-3">
      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-pink-500 text-white shadow-sm shadow-pink-200">{icon}</div>
      <div className="flex-1">
        <h2 className="text-sm font-extrabold tracking-tight text-[#2D2433] sm:text-lg">{title}</h2>
        <div className="mt-1 h-px w-full bg-pink-100" />
      </div>
    </div>
  );
}

function AchievementCard({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className="group rounded-2xl border border-pink-100 bg-pink-50/40 p-4 transition-all hover:-translate-y-0.5 hover:border-pink-200 hover:bg-pink-50 sm:p-5">
      <div className="flex gap-3">
        <div className="mt-0.5 h-2 w-2 shrink-0 rounded-full bg-pink-500" />
        <div>
          <p className="text-[11px] font-bold leading-snug text-[#2D2433] sm:text-xs">{title}</p>
          <p className="mt-1 text-[9px] font-medium leading-relaxed text-pink-600 sm:text-[10px]">{subtitle}</p>
        </div>
      </div>
    </div>
  );
}
