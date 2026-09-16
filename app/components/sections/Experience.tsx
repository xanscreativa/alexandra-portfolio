"use client";

import FadeUp from "@/components/animation/FadeUp";

const experiences = [
  {
    year: "2026",
    title: "Design Club Coach",
    company: "Forum Anak GPIB Immanuel Pekanbaru",
    duration: "2026 — Present",
  },
  {
    year: "2025",
    title: "Video Editor & Graphic Designer",
    company: "PT. Tera Infinity Ultima",
    duration: "2025 — 2026",
  },
  {
    year: "2025",
    title: "Graphic Design Extracurricular Teacher",
    company: "SMP Kalam Kudus Pekanbaru",
    duration: "2025 — 2026",
  },
  {
    year: "2025",
    title: "Painting Extracurricular Teacher",
    company: "SMP Kalam Kudus Pekanbaru",
    duration: "2025 — 2026",
  },
  {
    year: "2023",
    title: "Graphic Designer",
    company: "PT. Tera Infinity Ultima",
    duration: "2023 — 2025",
  },
  {
    year: "2022",
    title: "Graphic Designer (Internship)",
    company: "Biro Promosi, Humas dan Alumni, Satya Wacana Christian University",
    duration: "3 Months",
  },
  {
    year: "2022",
    title: "Packaging Assistant Lecturer",
    company: "Visual Communication Design Major, SWCU",
    duration: "4 Months",
  },
  {
    year: "2021",
    title: "Research Project Assistant",
    company: "Matching Fund Kedaireka Program — “Milenial’s Batik Eco-Fashion”",
    duration: "2021 — 2022",
  },
  {
    year: "2021",
    title: "Research Project Assistant (Graphic Designer)",
    company: "Productive Innovative Research Team (Rispro), SWCU",
    duration: "1 Year",
  },
  {
    year: "2021",
    title: "Graphic Design & Photographer (Internship)",
    company: "Dreams Studio Salatiga",
    duration: "3 Months",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="bg-[#FFF8FA] py-32">
      <div className="mx-auto w-[92%] max-w-6xl">
        <p className="text-center uppercase tracking-[0.4em] text-pink-500">
          Experience
        </p>

        <h2 className="mt-4 text-center text-5xl font-black text-[#2D2433]">
          My Journey
        </h2>

        <div className="relative mx-auto mt-20 max-w-4xl">
          <div className="absolute left-7 top-0 h-full w-0.5 bg-pink-200" />

          {experiences.map((item, index) => (
            <FadeUp key={item.title + index} delay={index * 0.08}>
              <div className="relative mb-12 flex gap-8">
                <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full bg-[#E85D8E] text-sm font-bold text-white shadow-lg">
                  {item.year}
                </div>

                <div className="flex-1 rounded-[28px] bg-white p-8 shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <h3 className="text-2xl font-bold text-[#2D2433]">
                      {item.title}
                    </h3>

                    <span className="rounded-full bg-pink-100 px-4 py-1 text-sm text-pink-500">
                      {item.duration}
                    </span>
                  </div>

                  <p className="mt-4 leading-8 text-[#6B6570]">
                    {item.company}
                  </p>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}