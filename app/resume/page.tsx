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

type VolunteerExperienceEntry = {
  titleKey: string;
  organizationKey: string;
  dateKey: string;
  descriptionKey: string;
};

const professionalExperiences: ExperienceEntry[] = [
  { titleKey: "experienceFreelanceDesigner", dateKey: "dateJul2022Present", company: "Freelance", descriptionKey: "experienceFreelanceDesignerDescription" },
  { titleKey: "experienceTeraDesigner", dateKey: "dateFeb2024Sep2026", company: "PT. Tera Infinity Ultima", descriptionKey: "experienceTeraDesignerDescription" },
];

const teachingExperiences: ExperienceEntry[] = [
  { titleKey: "experienceGraphicTeacher", dateKey: "dateAug2025Present", company: "SMP Kristen Kalam Kudus Pekanbaru", descriptionKey: "experienceGraphicTeacherDescription" },
  { titleKey: "experiencePaintingTeacher", dateKey: "dateAug2025Present", company: "SMP Kristen Kalam Kudus Pekanbaru", descriptionKey: "experiencePaintingTeacherDescription" },
  { titleKey: "experienceGraphicTutor", dateKey: "dateJan2026Present", company: "GPIB Immanuel Pekanbaru", descriptionKey: "experienceGraphicTutorDescription" },
];

const additionalDesignExperiences: ExperienceEntry[] = [
  { titleKey: "experienceResearchAssistant", dateKey: "dateJul2021Aug2023", company: "Universitas Kristen Satya Wacana", descriptionKey: "experienceResearchAssistantDescription" },
  { titleKey: "experienceIntern", dateKey: "dateFebApr2022", company: "Universitas Kristen Satya Wacana", descriptionKey: "experienceInternDescription" },
  { titleKey: "experienceDreamsDesigner", dateKey: "dateAugNov2021", company: "Dreams Studio", descriptionKey: "experienceDreamsDesignerDescription" },
];

const volunteerExperiences: VolunteerExperienceEntry[] = [
  { titleKey: "volunteerSundaySchoolTeacher", organizationKey: "volunteerSundaySchoolOrganization", dateKey: "dateSep2018Present", descriptionKey: "volunteerSundaySchoolTeacherDescription" },
  { titleKey: "volunteerCreativeDesigner", organizationKey: "volunteerCreativeTeamOrganization", dateKey: "dateJul2026Present", descriptionKey: "volunteerCreativeDesignerDescription" },
  { titleKey: "volunteerSocialMediaDesigner", organizationKey: "volunteerSocialMediaOrganization", dateKey: "dateFeb2022Present", descriptionKey: "volunteerSocialMediaDesignerDescription" },
  { titleKey: "volunteerSecretary", organizationKey: "volunteerSecretaryOrganization", dateKey: "dateApr2025Present", descriptionKey: "volunteerSecretaryDescription" },
  { titleKey: "volunteerInfocommCoordinator", organizationKey: "volunteerInfocommOrganization", dateKey: "dateApr2021Apr2023", descriptionKey: "volunteerInfocommCoordinatorDescription" },
];

const designSkills = ["skillBrandDesign", "skillLogoDesign", "skillGraphicDesign", "skillWebDesign", "skillCommercialPhotography", "skillVideoEditing", "skillPackagingDesign"];
const creativeCollaborationSkills = ["skillTeamwork", "skillMicrosoftOffice", "skillAdministration"];

export default function ResumePage() {
  const { t } = useLanguage();
  const handleDownloadPdf = () => {
    const previousTitle = document.title;
    const restoreTitle = () => {
      document.title = previousTitle;
    };

    window.addEventListener("afterprint", restoreTitle, { once: true });
    document.title = "Dorothea-Alexandra-Manuputty-Resume";
    window.print();
  };

  return (
    <main className="resume-document min-h-screen bg-[#FFFDFC] text-[#2D2433] px-6 pt-16 pb-24 sm:px-8 sm:pt-28 sm:pb-10 lg:px-10">
      <div className="mx-auto max-w-5xl">
        <div className="resume-toolbar mb-6 flex items-center justify-between sm:mb-8">
          <Link href="/" className="group inline-flex items-center gap-2 text-xs font-semibold text-[#77717A] transition-colors hover:text-pink-600 sm:text-sm">
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            {t("resumeSection.backHome")}
          </Link>
          <button type="button" onClick={handleDownloadPdf} className="inline-flex items-center justify-center gap-1.5 rounded-full bg-pink-500 px-3.5 py-2 text-[10px] font-bold text-white shadow-lg shadow-pink-200 transition-all hover:-translate-y-0.5 hover:bg-pink-600 hover:shadow-xl sm:px-6 sm:py-3 sm:text-xs sm:gap-2">
            <Download className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
            <span>{t("resumeSection.downloadPdf")}</span>
          </button>
        </div>

        <div className="resume-sheet overflow-hidden rounded-[26px] border border-pink-100 bg-white shadow-[0_20px_60px_rgba(45,36,51,0.10)]">
          <header className="relative overflow-hidden border-b border-pink-100 px-5 py-7 sm:px-10 sm:py-10 lg:px-12">
            <div className="pointer-events-none absolute -right-20 -top-24 h-64 w-64 rounded-full bg-pink-100/70 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-28 -left-20 h-52 w-52 rounded-full bg-pink-50 blur-3xl" />
            <div className="relative">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-pink-100 bg-pink-50 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.14em] text-pink-600">
                <span className="h-2 w-2 rounded-full bg-pink-500" />
                {t("resumeSection.badge")}
              </div>
              <div className="resume-header-grid grid gap-7 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
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
                    <a href="https://xandra-portfolio.vercel.app/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 rounded-full border border-pink-100 px-3 py-1.5 font-medium text-[#6B6570] transition-all hover:border-pink-300 hover:bg-pink-50 hover:text-pink-600"><Globe className="h-3 w-3" />{t("resumeSection.websiteLink")}</a>
                    <a href="https://www.behance.net/dorothealexand" target="_blank" rel="noopener noreferrer" className="inline-flex items-center rounded-full border border-pink-100 px-3 py-1.5 font-medium text-[#6B6570] transition-all hover:border-pink-300 hover:bg-pink-50 hover:text-pink-600">Behance</a>
                    <a href="https://www.linkedin.com/in/dorotheaalexandra" target="_blank" rel="noopener noreferrer" className="inline-flex items-center rounded-full border border-pink-100 px-3 py-1.5 font-medium text-[#6B6570] transition-all hover:border-pink-300 hover:bg-pink-50 hover:text-pink-600">LinkedIn</a>
                  </div>
                </div>
              </div>
            </div>
          </header>

          <div className="resume-content px-5 py-7 sm:px-10 sm:py-10 lg:px-12">
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
              <div className="grid gap-4 lg:grid-cols-2">
                {volunteerExperiences.map((experience) => (
                  <article key={experience.titleKey} className="resume-entry-card min-w-0 rounded-2xl border border-pink-100 bg-white p-4 shadow-sm transition-colors hover:border-pink-200 sm:p-5">
                    <h3 className="text-sm font-bold leading-snug text-[#2D2433] sm:text-base">{t(`resumeSection.${experience.titleKey}`)}</h3>
                    <p className="mt-1 break-words text-xs font-medium leading-relaxed text-[#77717A] sm:text-[13px]">{t(`resumeSection.${experience.organizationKey}`)}</p>
                    <span className="mt-3 inline-flex max-w-full break-words rounded-full bg-pink-50 px-2.5 py-1 text-[10px] font-semibold leading-relaxed text-pink-600 sm:text-[11px]">{t(`resumeSection.${experience.dateKey}`)}</span>
                    <p className="mt-3 text-xs leading-[1.7] text-[#6B6570] sm:text-[13px] sm:leading-relaxed">{t(`resumeSection.${experience.descriptionKey}`)}</p>
                  </article>
                ))}
              </div>
            </section>

            <section className="mb-10">
              <SectionTitle icon={<GraduationCap className="h-4 w-4" />} title={t("resumeSection.educationTitle")} />
              <div className="rounded-2xl border border-pink-100 bg-white p-4 shadow-sm sm:p-5">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="text-sm font-bold text-[#2D2433] sm:text-base">Universitas Kristen Satya Wacana</h3>
                    <p className="mt-1 text-[10px] font-semibold text-pink-600 sm:text-xs">{t("resumeSection.educationDegree")}</p>
                    <p className="mt-2 max-w-3xl text-[10.5px] leading-[1.65] text-[#77717A] sm:text-xs">{t("resumeSection.educationDescription")}</p>
                  </div>
                  <span className="w-fit rounded-full bg-pink-50 px-2.5 py-1 text-[9px] font-bold text-pink-600 sm:text-[10px]">{t("resumeSection.educationDate")}</span>
                </div>
              </div>
            </section>

            <section className="mb-10">
              <SectionTitle icon={<Wrench className="h-4 w-4" />} title={t("resumeSection.skillsTitle")} />
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-pink-100 bg-pink-50/40 p-4 sm:p-5">
                  <p className="mb-2 text-[9px] font-extrabold uppercase tracking-[0.16em] text-[#8A828C]">{t("resumeSection.designSkillsTitle")}</p>
                  <div className="flex flex-wrap gap-1.5">{designSkills.map((skillKey) => <span key={skillKey} className="rounded-full border border-pink-100 bg-white px-2.5 py-1.5 text-[9px] font-semibold text-pink-700 shadow-sm sm:text-[10px]">{t(`resumeSection.${skillKey}`)}</span>)}</div>
                </div>
                <div className="rounded-2xl border border-pink-100 bg-pink-50/40 p-4 sm:p-5">
                  <p className="mb-2 text-[9px] font-extrabold uppercase tracking-[0.16em] text-[#8A828C]">{t("resumeSection.creativeCollaborationTitle")}</p>
                  <div className="flex flex-wrap gap-1.5">{creativeCollaborationSkills.map((skillKey) => <span key={skillKey} className="rounded-full border border-pink-100 bg-white px-2.5 py-1.5 text-[9px] font-semibold text-pink-700 shadow-sm sm:text-[10px]">{t(`resumeSection.${skillKey}`)}</span>)}</div>
                </div>
              </div>
            </section>

            <section className="mb-10">
              <SectionTitle icon={<Award className="h-4 w-4" />} title={t("resumeSection.certificationsTitle")} />
              <div className="grid gap-3 md:grid-cols-2">
                  <AchievementCard
                    title={t("resumeSection.certificationShima")}
                    period={t("resumeSection.certificationShimaYear")}
                    metadata={[{ label: t("resumeSection.organizerLabel"), value: t("resumeSection.certificationShimaOrganizer") }]}
                    description={t("resumeSection.certificationShimaDescription")}
                  />
                  <AchievementCard
                    title={t("resumeSection.certificationFigma")}
                    period={t("resumeSection.certificationFigmaYear")}
                    metadata={[{ label: t("resumeSection.organizerLabel"), value: t("resumeSection.certificationFigmaOrganizer") }]}
                    description={t("resumeSection.certificationFigmaDescription")}
                  />
              </div>
            </section>
            <section className="mb-10">
              <SectionTitle icon={<Award className="h-4 w-4" />} title={t("resumeSection.awardsTitle")} />
              <div className="grid gap-3 md:grid-cols-2">
                  <AchievementCard
                    title={t("resumeSection.awardLogo")}
                    period={t("resumeSection.awardDate")}
                    metadata={[
                      { label: t("resumeSection.categoryLabel"), value: t("resumeSection.awardLogoCategory") },
                    ]}
                    description={t("resumeSection.awardLogoDescription")}
                  />
                  <AchievementCard
                    title={t("resumeSection.awardPackaging")}
                    period={t("resumeSection.awardDate")}
                    metadata={[
                      { label: t("resumeSection.categoryLabel"), value: t("resumeSection.awardPackagingCategory") },
                      { label: t("resumeSection.organizerLabel"), value: t("resumeSection.awardPackagingOrganizer") },
                    ]}
                    description={t("resumeSection.awardPackagingDescription")}
                  />
              </div>
            </section>
          </div>

          <div className="resume-bottom-accent h-1.5 bg-gradient-to-r from-pink-300 via-pink-500 to-pink-300" />
        </div>

        <p className="mt-5 text-center text-[9px] font-medium text-[#A39CA5]">{t("resumeSection.footer")}</p>
      </div>
    </main>
  );
}

function ExperienceTimeline({ experiences }: { experiences: { title: string; date: string; company?: string; description?: string }[] }) {
  return (
    <div className="resume-experience-list relative ml-1 space-y-7 border-l border-pink-200 pl-5 sm:ml-2 sm:pl-7">
      {experiences.map((experience, index) => (
        <div key={`${experience.title}-${index}`} className="resume-experience-item relative">
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

function AchievementCard({
  title,
  period,
  metadata,
  description,
}: {
  title: string;
  period: string;
  metadata: { label: string; value: string }[];
  description: string;
}) {
  return (
    <article className="resume-entry-card min-w-0 rounded-2xl border border-pink-100 bg-white p-4 shadow-sm transition-colors hover:border-pink-200 sm:p-4">
      <div className="flex min-w-0 items-start gap-2.5">
        <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-pink-500" />
        <div className="min-w-0 flex-1">
          <h3 className="break-words text-sm font-semibold leading-snug text-[#2D2433] sm:text-[15px]">{title}</h3>
          <div className="mt-2.5 flex flex-wrap items-center gap-x-2 gap-y-1.5">
            <span className="rounded-full bg-pink-50 px-2.5 py-1 text-[10px] font-semibold leading-tight text-pink-700">{period}</span>
            {metadata.map((item) => (
              <p key={item.label} className="min-w-0 break-words text-[11px] leading-relaxed text-[#77717A]">
                <span className="font-semibold text-[#6B6570]">{item.label}: </span>
                {item.value}
              </p>
            ))}
          </div>
          <p className="mt-2.5 text-xs leading-[1.7] text-[#6B6570]">{description}</p>
        </div>
      </div>
    </article>
  );
}
