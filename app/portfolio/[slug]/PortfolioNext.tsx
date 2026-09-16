import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { PortfolioCollection } from "@/data/portfolio";

export default function PortfolioNext({ nextCollection }: { nextCollection: PortfolioCollection }) {
  return (
    <div className="mx-auto max-w-6xl px-6 pb-20 sm:px-8 sm:pb-24 lg:px-10">
      <div className="flex flex-col gap-3 border-t border-pink-100 pt-7 sm:flex-row sm:items-center sm:justify-between sm:pt-8">
        <span className="text-xs font-mono font-bold text-[#6B6570]">Next project</span>
        <Link href={`/portfolio/${nextCollection.slug}`} className="group inline-flex items-center gap-3 text-base font-bold text-[#2D2433] hover:text-pink-600 sm:text-lg">
          <span>{nextCollection.title}</span>
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1 sm:h-5 sm:w-5" />
        </Link>
      </div>
    </div>
  );
}
