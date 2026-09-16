"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { X, ArrowLeft, ArrowRight } from "lucide-react";
import type { PortfolioCollection } from "@/data/portfolio";
import {
  GalleryItem,
  desainLainItems,
  liveStreamItems,
  liveProfiles,
  defaultThumbnailGrid,
  socialSections,
  brandSections,
  logoSections,
} from "./portfolio-data";
import { TikTokLiveMockup } from "./TikTokLiveMockup";

interface ActiveModalState { sectionTitle: string; posts: GalleryItem[]; currentIndex: number; isSquare: boolean; isPortrait1080x1920?: boolean; isCoverFB?: boolean; }

export default function PortfolioGallery({ collection }: { collection: PortfolioCollection }) {
  const { t } = useLanguage();
  const [activeModalState, setActiveModalState] = useState<ActiveModalState | null>(null);
  const [expandedSections, setExpandedSections] = useState<Record<number, boolean>>({});
  const [dragOffset, setDragOffset] = useState(0);
  const [startPos, setStartPos] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const isSocialMedia = collection.slug === "social-media-design";
  const isBrandIdentity = collection.slug === "brand-identity";
  const isLogoDesign = collection.slug === "logo-design";
  const isCharacterDesign = collection.slug === "character-design";
  const isThumbnailDesign = collection.slug === "thumbnail-design";
  const isLiveStreamDesign = collection.slug === "live-stream-design";
  const isDesainLain = collection.slug === "desain-lain";
  const gallery = isDesainLain ? desainLainItems : isLiveStreamDesign ? liveStreamItems : collection.gallery?.length ? collection.gallery : defaultThumbnailGrid;
  const totalModalImages = activeModalState?.posts.length ?? 0;

  const openPostModal = (sectionTitle: string, postItem: GalleryItem, isSquare: boolean, isPortrait1080x1920?: boolean, isCoverFB?: boolean) => {
    const source = isLiveStreamDesign ? liveStreamItems : postItem.subSlides?.length ? postItem.subSlides : [postItem];
    const currentIndex = isLiveStreamDesign ? Math.max(0, liveStreamItems.findIndex((item) => item.src === postItem.src)) : 0;
    setActiveModalState({ sectionTitle, posts: source, currentIndex, isSquare, isPortrait1080x1920, isCoverFB });
  };

  const handleNext = () => setActiveModalState((p) => p && p.posts.length > 1 ? { ...p, currentIndex: (p.currentIndex + 1) % p.posts.length } : p);
  const handlePrev = () => setActiveModalState((p) => p && p.posts.length > 1 ? { ...p, currentIndex: p.currentIndex === 0 ? p.posts.length - 1 : p.currentIndex - 1 } : p);

  const currentPost = useMemo(() => activeModalState ? activeModalState.posts[activeModalState.currentIndex] : null, [activeModalState]);

  return (
    <>
      <div className="mx-auto mb-20 max-w-6xl px-4 sm:mb-28 sm:px-8 lg:px-10">
        {isBrandIdentity || isLogoDesign || isCharacterDesign ? (
          <div className={isCharacterDesign ? "grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-6" : "grid grid-cols-2 gap-4 lg:grid-cols-3 lg:gap-6"}>
            {(isCharacterDesign ? collection.items.map((item) => ({ title:item.title, src:item.cover, details:null, onClick:undefined })) : (isBrandIdentity ? brandSections : logoSections).map((s) => ({ title:s.title, src:s.posts[0].src, details:s.details, onClick:undefined }))).map((item, i) => (
              <div key={i} className="group cursor-pointer overflow-hidden rounded-2xl border border-pink-200/80 bg-white p-3.5 shadow-sm transition-all hover:-translate-y-1 sm:p-5" onClick={() => !isCharacterDesign && openPostModal(item.title, {src:item.src, alt:item.title}, false)}>
                <div className={`relative w-full overflow-hidden rounded-xl border border-pink-100 bg-pink-50/50 ${isBrandIdentity ? "aspect-[4/5]" : isCharacterDesign ? "aspect-[4/5]" : "aspect-square"}`}>
                  <Image src={item.src} alt={item.title} fill sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 33vw" loading="lazy" className="object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <h3 className="mt-3.5 text-sm font-bold text-[#2D2433] sm:text-base">{item.title}</h3>
              </div>
            ))}
          </div>
        ) : isSocialMedia ? (
          <div className="space-y-12 sm:space-y-16">
            {socialSections.map((section, sIndex) => {
              const isExpanded = expandedSections[sIndex] || false;
              const isSquare = section.title === "UKSW";
              return <div key={sIndex} className="relative mx-auto space-y-4 rounded-2xl border border-pink-200/80 bg-white p-3 shadow-sm sm:space-y-6 sm:rounded-[36px] sm:p-8">
                <div className="flex items-center justify-between border-b border-pink-100 pb-3"><div className="flex items-center gap-3"><div className="relative h-9 w-9 overflow-hidden rounded-full border border-pink-300 sm:h-12 sm:w-12">{section.avatarImage ? <Image src={section.avatarImage} alt={`${section.username} profile`} fill sizes="48px" loading="lazy" className="object-cover" /> : section.avatarText}</div><div><h4 className="text-[11px] font-bold sm:text-sm">{section.username}</h4><p className="max-w-[240px] truncate text-[9px] text-[#6B6570] sm:text-xs">{section.bio}</p></div></div><span className="rounded-full border border-pink-200 bg-pink-50 px-2.5 py-1 text-[9px] font-mono font-bold text-pink-600 sm:text-xs">{section.posts.length} {t("items")}</span></div>
                <div className="grid grid-cols-3 gap-2 sm:gap-4">{section.posts.map((item, itemIndex) => <div key={itemIndex} onClick={() => openPostModal(section.title, item, isSquare)} className={`group relative cursor-pointer overflow-hidden rounded-lg border border-pink-100 bg-pink-50 ${isSquare ? "aspect-square" : "aspect-[4/5]"}`}><Image src={item.src} alt={item.alt || section.title} fill sizes="33vw" loading="lazy" className="object-cover transition-transform duration-500 group-hover:scale-105" /></div>)}</div>
                <button onClick={() => setExpandedSections((p) => ({...p,[sIndex]:!isExpanded}))} className="w-full rounded-xl border border-pink-200 bg-pink-50 px-4 py-2 text-xs font-mono font-bold text-pink-600 sm:hidden">{isExpanded ? t("hideDetails") : t("showDetails")}</button>
                <div className={isExpanded ? "block" : "hidden sm:block"}><div className="grid gap-6 border-t border-pink-100/60 pt-4 md:grid-cols-2"><div><h3 className="text-xs font-mono font-bold uppercase tracking-widest text-pink-600">{t("overview")}</h3><p className="mt-3 text-sm leading-relaxed text-[#6B6570]">{section.overview}</p></div><div><h3 className="text-xs font-mono font-bold uppercase tracking-widest text-pink-600">{t("challenge")}</h3><p className="mt-3 text-sm leading-relaxed text-[#6B6570]">{section.challenge}</p></div></div></div>
              </div>;
            })}
          </div>
        ) : isDesainLain ? (
          <div className="flex flex-col gap-6">{gallery.map((item, index) => <div key={index} onClick={() => openPostModal(collection.title, item, false, false, true)} className="group cursor-pointer overflow-hidden rounded-2xl border border-pink-200/80 bg-white p-3 shadow-sm"><div className="relative w-full overflow-hidden rounded-xl bg-pink-50" style={{aspectRatio:"820 / 312"}}><Image src={item.src} alt={item.alt || item.caption || `Design ${index+1}`} fill sizes="(max-width: 1152px) 100vw, 1152px" loading="lazy" className="object-cover transition-transform duration-500 group-hover:scale-105" /></div><p className="mt-3 px-2 pb-1 text-xs leading-relaxed text-[#2D2433] sm:text-sm">{item.caption || item.alt}</p></div>)}</div>
        ) : (
          <div className="relative mx-auto rounded-2xl border border-pink-200/80 bg-white p-3 shadow-sm sm:rounded-[36px] sm:p-8">
            {isLiveStreamDesign ? <div className="grid grid-cols-2 gap-3 sm:gap-5 md:grid-cols-4">{liveStreamItems.map((item,index) => { const profile=liveProfiles[index]; return <div key={item.src} onClick={() => openPostModal(collection.title,item,false,true)} className="group cursor-pointer"><TikTokLiveMockup item={item} username={profile.username} avatarImage={profile.avatarImage} avatarText={profile.avatarText} avatarBg={profile.avatarBg} title={profile.title}/><p className="mt-2 truncate text-xs font-bold">{profile.title}</p></div>})}</div> : <div className="grid grid-cols-3 gap-2 sm:gap-4">{gallery.map((item,index)=><div key={index} onClick={() => openPostModal(collection.title,item,false,isThumbnailDesign)} className={`group relative cursor-pointer overflow-hidden rounded-lg border border-pink-100 bg-pink-50 ${isThumbnailDesign ? "aspect-[9/16]" : "aspect-[4/5]"}`}>{item.isVideo ? <video src={item.src} autoPlay loop muted playsInline className="h-full w-full object-cover" /> : <Image src={item.src} alt={item.alt || `Item ${index+1}`} fill sizes="33vw" loading="lazy" className="object-cover transition-transform duration-500 group-hover:scale-105" />}</div>)}</div>}
          </div>
        )}
      </div>

      <div className="mx-auto max-w-6xl px-6 pb-20 sm:px-8 sm:pb-24 lg:px-10"><div className="flex flex-col gap-3 border-t border-pink-100 pt-7 sm:flex-row sm:items-center sm:justify-between sm:pt-8"><span className="text-xs font-mono font-bold text-[#6B6570]">{t("nextProject")}</span><Link href={`/portfolio/${nextCollection.slug}`} className="group inline-flex items-center gap-3 text-base font-bold text-[#2D2433] hover:text-pink-600 sm:text-lg"><span>{nextCollection.title}</span><ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" /></Link></div></div>

      {activeModalState && currentPost && <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-3 backdrop-blur-sm" onClick={() => setActiveModalState(null)}><button onClick={() => setActiveModalState(null)} className="absolute right-4 top-4 z-50 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white"><X className="h-5 w-5" /></button>{totalModalImages > 1 && <><button onClick={(e) => {e.stopPropagation();handlePrev();}} className="absolute left-3 top-1/2 z-50 rounded-full bg-white/10 p-3 text-white"><ArrowLeft/></button><button onClick={(e) => {e.stopPropagation();handleNext();}} className="absolute right-3 top-1/2 z-50 rounded-full bg-white/10 p-3 text-white"><ArrowRight/></button></>}<div onClick={(e)=>e.stopPropagation()} className={`relative h-[82vh] w-full ${activeModalState.isCoverFB ? "max-w-3xl" : activeModalState.isPortrait1080x1920 ? "max-w-[380px]" : "max-w-2xl"}`}><Image src={currentPost.src} alt={currentPost.alt || t("portfolioItem")} fill priority sizes="(max-width: 640px) 92vw, 760px" className="object-contain"/></div></div>}
    </>
  );
}
