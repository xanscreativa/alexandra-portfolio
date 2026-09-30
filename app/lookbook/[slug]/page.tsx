import type { Metadata } from "next";
import { notFound } from "next/navigation";

import LookbookViewer from "@/components/lookbook/LookbookViewer";

const lookbooks = {
  parahita: {
    title: "Lookbook Klaster Parahita",
    pdf: "/lookbook/Lookbook Klaster Parahita.pdf",
  },
  "kab-pati": {
    title: "Lookbook Klaster Kab Pati",
    pdf: "/lookbook/Lookbook Klaster Kab Pati.pdf",
  },
  "semarang-surakarta": {
    title: "Lookbook Klaster Kota Semarang & Kota Surakarta",
    pdf: "/lookbook/Lookbook Klaster Kota Semarang & Kota Surakarta.pdf",
  },
} as const;

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return Object.keys(lookbooks).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const lookbook = lookbooks[slug as keyof typeof lookbooks];

  return {
    title: lookbook ? `${lookbook.title} | XANS Portfolio` : "Lookbook | XANS Portfolio",
  };
}

export default async function LookbookPage({ params }: Props) {
  const { slug } = await params;
  const lookbook = lookbooks[slug as keyof typeof lookbooks];

  if (!lookbook) notFound();

  return (
    <main className="min-h-screen bg-[#FFFDFC] px-3 pb-10 pt-8 text-[#2D2433] sm:px-6 sm:pt-10">
      <LookbookViewer pdf={lookbook.pdf} title={lookbook.title} />
    </main>
  );
}
