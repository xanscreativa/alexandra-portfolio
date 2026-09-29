"use client";

import { useState } from "react";
import Image from "next/image";

import type { GalleryItem } from "./portfolio-data";

function InstagramPreview({
  image,
  className,
  sizes,
  compact,
}: {
  image: GalleryItem;
  className: string;
  sizes: string;
  compact: boolean;
}) {
  const [hasError, setHasError] = useState(false);

  return (
    <div className={`relative ${className}`}>
      <div
        aria-hidden="true"
        className={`absolute rounded-full ${compact ? "-inset-[3px]" : "-inset-1.5"}`}
        style={{
          background:
            "linear-gradient(135deg, var(--primary), #F8A8C8, #E85D8E, #F6C1D8)",
        }}
      />
      <div
        aria-hidden="true"
        className={`absolute rounded-full bg-white ${compact ? "-inset-px" : "-inset-0.5"}`}
      />
      <div className="relative h-full w-full overflow-hidden rounded-full border border-pink-100 bg-pink-50">
        {hasError ? (
          <div
            role="img"
            aria-label={image.alt ?? "Instagram preview"}
            className="absolute inset-0 bg-linear-to-br from-pink-100 via-white to-emerald-100"
          />
        ) : (
          <Image
            src={image.src}
            alt={image.alt ?? "Instagram preview"}
            fill
            sizes={sizes}
            className="object-cover"
            onError={() => setHasError(true)}
          />
        )}
      </div>
    </div>
  );
}

export function InstagramHighlights({
  images,
  compact = false,
}: {
  images: GalleryItem[];
  compact?: boolean;
}) {
  return (
    <section className="space-y-3" aria-label="Instagram Highlights">
      <h3 className="text-[10px] font-mono font-bold uppercase tracking-widest text-pink-600 sm:text-xs">
        Instagram Highlights
      </h3>
      <div
        className={compact
          ? "grid w-full grid-cols-7 items-start gap-1.5 sm:gap-3"
          : "mx-auto flex w-fit max-w-full flex-nowrap items-start justify-center gap-4 sm:gap-6"}
      >
        {images.map((image, index) => (
          <div key={image.src} className={`flex flex-col items-center gap-1.5 ${compact ? "min-w-0" : "shrink-0"}`}>
            <InstagramPreview
              image={image}
              sizes={compact ? "(max-width: 640px) 14vw, 64px" : "(max-width: 640px) 16vw, 96px"}
              compact={compact}
              className={`aspect-square rounded-full ${compact ? "w-full max-w-12 sm:max-w-16" : "w-[clamp(2.25rem,14vw,9rem)]"}`}
            />
            <span className={`w-full wrap-break-word text-center leading-tight text-[#6B6570] ${compact ? "text-[7px] sm:text-[9px]" : "text-[8px] sm:text-[10px]"}`}>
              {image.title ?? `Highlight ${index + 1}`}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

export function InstagramStories({ images }: { images: GalleryItem[] }) {
  return (
    <section className="space-y-3" aria-label="Instagram Stories">
      <h3 className="text-[10px] font-mono font-bold uppercase tracking-widest text-pink-600 sm:text-xs">
        Instagram Stories
      </h3>
      <div className="mx-auto grid w-full max-w-160 grid-cols-5 gap-2 sm:gap-3">
        {images.map((image, index) => (
          <div key={image.src} className="min-w-0 text-center">
            <div className="relative aspect-9/16 w-full overflow-hidden rounded-md border border-pink-100 bg-pink-50 sm:rounded-lg">
              {image.src.toLowerCase().endsWith(".webm") ? (
                <video
                  src={image.src}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  aria-label={image.alt ?? "Instagram story"}
                  className="absolute inset-0 h-full w-full object-cover"
                />
              ) : (
                <Image
                  src={image.src}
                  alt={image.alt ?? "Instagram story"}
                  fill
                  sizes="(max-width: 640px) 20vw, 128px"
                  className="object-cover"
                />
              )}
            </div>
            <span className="mt-1 block truncate text-[8px] leading-tight text-[#6B6570] sm:text-[10px]">
              Story {index + 1}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
