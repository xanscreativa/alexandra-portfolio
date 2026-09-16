"use client";

import { notFound, useParams } from "next/navigation";
import { getPortfolioBySlug, getNextPortfolio } from "@/data/portfolio";
import PortfolioHeader from "./PortfolioHeader";
import PortfolioGallery from "./PortfolioGallery";
import PortfolioNext from "./PortfolioNext";

export default function PortfolioDetailPage() {
  const params = useParams<{ slug: string }>();
  const slug = params?.slug;
  const collection = slug ? getPortfolioBySlug(slug) : undefined;

  if (!collection) notFound();

  const nextCollection = getNextPortfolio(slug);

  return (
    <main className="min-h-screen overflow-x-hidden bg-white text-[#2D2433] selection:bg-pink-100 selection:text-pink-900">
      <PortfolioHeader collection={collection} />
      <PortfolioGallery collection={collection} />
      <PortfolioNext nextCollection={nextCollection} />
    </main>
  );
}
