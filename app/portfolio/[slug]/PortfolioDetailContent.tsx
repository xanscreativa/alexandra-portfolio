"use client";

import type { PortfolioCollection } from "@/data/portfolio";
import PortfolioGallery from "./PortfolioGallery";

export default function PortfolioDetailContent({ collection, nextCollection }: { collection: PortfolioCollection; nextCollection: PortfolioCollection }) {
  return (
    <>
      <PortfolioGallery collection={collection} />
    </>
  );
}
