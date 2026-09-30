"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import {
  Component,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  useSyncExternalStore,
  type ReactNode,
} from "react";
import {
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  Download,
  Grid2X2,
  Maximize,
  Minimize,
  RotateCcw,
  Share2,
  Volume2,
  VolumeX,
  ZoomIn,
  ZoomOut,
} from "lucide-react";
import styles from "./LookbookViewer.module.css";

type BookController = {
  next: () => void;
  previous: () => void;
  turnToPage: (pageNumber: number) => void;
  update: () => void;
};

type LookbookPdfDocumentProps = {
  pdf: string;
  mode: "book" | "all";
  coverMode: "closed" | "opening" | "open" | "closing";
  pageCount: number;
  pageNumbers: number[];
  pageWidth: number;
  pageHeight: number;
  coverWidth: number;
  coverYOffset: number;
  pageAspectRatio: number;
  coverAspectRatio: number;
  currentBookPageIndex: number;
  activePdfPages: number[];
  onDocumentLoad: (pageCount: number, pageAspectRatio: number, coverAspectRatio: number) => void;
  onPageSelect: (pageNumber: number) => void;
  onOpenBook: () => void;
  onCoverAnimationComplete: () => void;
  onBookReady: (controller: BookController | null) => void;
  onBookFlip: (pageIndex: number) => void;
  onFlipStart: () => void;
};

const PdfDocument = dynamic<LookbookPdfDocumentProps>(
  () => import("./LookbookPdfDocument"),
  {
    ssr: false,
    loading: () => (
      <div className="flex min-h-48 w-full items-center justify-center text-sm text-[#6B6570]">
        Preparing Lookbook…
      </div>
    ),
  },
);

const SOUND_PREFERENCE_KEY = "lookbook-sound-enabled";

function subscribeToSoundPreference(onChange: () => void) {
  window.addEventListener("storage", onChange);
  window.addEventListener("lookbook-sound-change", onChange);
  return () => {
    window.removeEventListener("storage", onChange);
    window.removeEventListener("lookbook-sound-change", onChange);
  };
}

function getSoundPreference() {
  return window.sessionStorage.getItem(SOUND_PREFERENCE_KEY) !== "false";
}

function getServerSoundPreference() {
  return true;
}

class PdfErrorBoundary extends Component<
  { children: ReactNode },
  { hasError: boolean }
> {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex min-h-64 items-center justify-center rounded-2xl border border-pink-100 bg-white px-6 text-center text-sm text-[#6B6570]">
          This Lookbook could not be displayed. Please refresh and try again.
        </div>
      );
    }

    return this.props.children;
  }
}

function ControlButton({
  children,
  label,
  onClick,
  disabled = false,
  active = false,
  className = "",
}: {
  children: ReactNode;
  label: string;
  onClick: () => void;
  disabled?: boolean;
  active?: boolean;
  className?: string;
}) {
  return (
    <button
      type="button"
      aria-label={label}
      title={label}
      onClick={onClick}
      disabled={disabled}
      className={`inline-flex min-h-10 items-center justify-center gap-1.5 rounded-full border px-3 py-2 text-xs font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-500 disabled:cursor-not-allowed disabled:opacity-40 ${
        active
          ? "border-pink-300 bg-pink-50 text-pink-700"
          : "border-[#EDE5E9] bg-white text-[#514954] hover:border-pink-200 hover:text-pink-700"
      } ${className}`}
    >
      {children}
    </button>
  );
}

export default function LookbookViewer({
  pdf,
  title,
}: {
  pdf: string;
  title: string;
}) {
  const viewerRef = useRef<HTMLElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const audioRef = useRef<HTMLAudioElement>(null);
  const bookControllerRef = useRef<BookController | null>(null);

  const [pageCount, setPageCount] = useState(0);
  const [pageAspectRatio, setPageAspectRatio] = useState(0.7);
  const [coverAspectRatio, setCoverAspectRatio] = useState(0.7);
  const [currentBookPageIndex, setCurrentBookPageIndex] = useState(0);
  const [coverMode, setCoverMode] = useState<"closed" | "opening" | "open" | "closing">("closed");
  const [isBookReady, setIsBookReady] = useState(false);
  const [showAllPages, setShowAllPages] = useState(false);
  const [shareCopied, setShareCopied] = useState(false);
  const [zoom, setZoom] = useState(1);
  const soundEnabled = useSyncExternalStore(
    subscribeToSoundPreference,
    getSoundPreference,
    getServerSoundPreference,
  );
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [stageSize, setStageSize] = useState({ width: 0, height: 0 });

  const normalPageCount = Math.max(0, pageCount - 1);
  const isCover = coverMode === "closed" || coverMode === "opening";
  const spreadStart = Math.floor(currentBookPageIndex / 2) * 2 + 1;
  const lastBookPageIndex = Math.max(0, Math.floor((normalPageCount - 1) / 2) * 2);
  const visiblePdfPages = useMemo(() => {
    if (coverMode !== "open") return pageCount > 0 ? [1] : [];

    return [currentBookPageIndex + 2, currentBookPageIndex + 3].filter(
      (pdfPageNumber) => pdfPageNumber <= pageCount,
    );
  }, [coverMode, currentBookPageIndex, pageCount]);
  const allPdfPages = useMemo(
    () => Array.from({ length: pageCount }, (_, index) => index + 1),
    [pageCount],
  );
  const activePdfPages = visiblePdfPages;
  const stagePadding = stageSize.width >= 640 ? 32 : 16;
  const renderWidth = Math.max(
    1,
    Math.floor(
      stageSize.width && stageSize.height
        ? Math.min(
            (stageSize.width - stagePadding) / 2,
        (stageSize.height - stagePadding) * 0.8 * pageAspectRatio,
          ) * zoom
        : 220 * zoom,
    ),
  );
  const renderHeight = Math.max(1, Math.floor(renderWidth / pageAspectRatio));
  const coverWidth = Math.max(
    1,
    Math.floor(
      stageSize.width && stageSize.height
        ? Math.min(stageSize.width * 0.94, stageSize.height * 0.94 * coverAspectRatio)
        : renderWidth,
    ),
  );
  const displayedSpreadEnd = Math.min(spreadStart + 1, normalPageCount);

  const handleDocumentLoad = useCallback((totalPages: number, ratio: number, coverRatio: number) => {
    setPageCount(totalPages);
    if (Number.isFinite(ratio) && ratio > 0) setPageAspectRatio(ratio);
    if (Number.isFinite(coverRatio) && coverRatio > 0) setCoverAspectRatio(coverRatio);
  }, []);

  const playFlip = useCallback(() => {
    if (!soundEnabled || !audioRef.current) return;

    audioRef.current.currentTime = 0;
    void audioRef.current.play().catch(() => {
      // The optional local sound may not have been added yet or may be blocked.
    });
  }, [soundEnabled]);

  const handleBookReady = useCallback((controller: BookController | null) => {
    bookControllerRef.current = controller;
    setIsBookReady(Boolean(controller));
  }, []);

  const handleBookFlip = useCallback((pageIndex: number) => {
    setCurrentBookPageIndex(pageIndex);
  }, []);

  const handleCoverAnimationComplete = useCallback(() => {
    if (coverMode === "opening") {
      setCoverMode("open");
    } else if (coverMode === "closing") {
      bookControllerRef.current?.turnToPage(0);
      setCurrentBookPageIndex(0);
      setCoverMode("closed");
    }
  }, [coverMode]);

  const openBook = useCallback(() => {
    if (coverMode !== "closed" || normalPageCount === 0 || !isBookReady) return;
    bookControllerRef.current?.turnToPage(0);
    setCoverMode("opening");
    playFlip();
  }, [coverMode, isBookReady, normalPageCount, playFlip]);

  const next = useCallback(() => {
    if (coverMode === "closed") {
      openBook();
      return;
    }

    if (coverMode !== "open" || currentBookPageIndex >= lastBookPageIndex) return;
    bookControllerRef.current?.next();
  }, [coverMode, currentBookPageIndex, lastBookPageIndex, openBook]);

  const previous = useCallback(() => {
    if (coverMode !== "open") return;

    if (currentBookPageIndex === 0) {
      setCoverMode("closing");
      playFlip();
    } else {
      bookControllerRef.current?.previous();
    }
  }, [coverMode, currentBookPageIndex, playFlip]);

  const selectPage = useCallback(
    (pdfPageNumber: number) => {
      if (pdfPageNumber === 1) {
        setShowAllPages(false);
        if (coverMode === "open") {
          setCoverMode("closing");
          playFlip();
        }
        return;
      }

      const targetBookPage = Math.floor((pdfPageNumber - 2) / 2) * 2;
      setCurrentBookPageIndex(targetBookPage);
      setShowAllPages(false);

      if (coverMode !== "open") {
        bookControllerRef.current?.turnToPage(targetBookPage);
        setCoverMode("opening");
        playFlip();
      } else if (targetBookPage !== currentBookPageIndex) {
        bookControllerRef.current?.turnToPage(targetBookPage);
      }
    },
    [coverMode, currentBookPageIndex, playFlip],
  );

  useEffect(() => {
    const viewer = viewerRef.current;
    if (!viewer) return;

    const updateFullscreen = () => {
      setIsFullscreen(document.fullscreenElement === viewer);
    };

    document.addEventListener("fullscreenchange", updateFullscreen);
    return () => document.removeEventListener("fullscreenchange", updateFullscreen);
  }, []);

  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;

    const updateSize = () => {
      const bounds = stage.getBoundingClientRect();
      setStageSize({ width: bounds.width, height: bounds.height });
    };

    updateSize();
    const observer = new ResizeObserver(updateSize);
    observer.observe(stage);
    return () => observer.disconnect();
  }, [isFullscreen]);

  const toggleSound = () => {
    window.sessionStorage.setItem(SOUND_PREFERENCE_KEY, String(!soundEnabled));
    window.dispatchEvent(new Event("lookbook-sound-change"));
  };

  const shareLookbook = async () => {
    const url = window.location.href;

    if (navigator.share) {
      try {
        await navigator.share({ title, text: `Read ${title}`, url });
        return;
      } catch (error) {
        if (error instanceof DOMException && error.name === "AbortError") return;
      }
    }

    try {
      await navigator.clipboard.writeText(url);
      setShareCopied(true);
      window.setTimeout(() => setShareCopied(false), 1800);
    } catch {
      // Clipboard access can be unavailable in insecure or restricted contexts.
    }
  };

  const toggleFullscreen = async () => {
    const viewer = viewerRef.current;
    if (!viewer) return;

    try {
      if (document.fullscreenElement === viewer) {
        await document.exitFullscreen();
      } else {
        await viewer.requestFullscreen();
      }
    } catch {
      setIsFullscreen(false);
    }
  };

  const rendererProps: LookbookPdfDocumentProps = {
    pdf,
    mode: showAllPages ? "all" : "book",
    coverMode,
    pageCount,
    pageNumbers: allPdfPages,
    pageWidth: renderWidth,
    pageHeight: renderHeight,
    coverWidth,
    coverYOffset: stageSize.height * -0.03,
    pageAspectRatio,
    coverAspectRatio,
    currentBookPageIndex,
    activePdfPages,
    onDocumentLoad: handleDocumentLoad,
    onPageSelect: selectPage,
    onOpenBook: () => {
      openBook();
    },
    onCoverAnimationComplete: handleCoverAnimationComplete,
    onBookReady: handleBookReady,
    onBookFlip: handleBookFlip,
    onFlipStart: playFlip,
  };

  return (
    <section
      ref={viewerRef}
      className={`mx-auto w-full max-w-7xl rounded-[28px] border border-pink-100 bg-[#FFFDFC] p-3 shadow-[0_24px_70px_-40px_rgba(45,36,51,0.3)] sm:p-6 lg:p-8 ${
        isFullscreen
          ? "fixed inset-0 z-100 h-dvh max-w-none overflow-y-auto rounded-none border-0 p-3 sm:p-6"
          : ""
      }`}
    >
      <audio ref={audioRef} src="/sounds/page-flip.mp3" preload="none" />
      <div className="mb-2 flex flex-wrap items-center justify-between gap-3 sm:mb-4">
        <Link
          href="/portfolio/milenials-batik-eco-fashion"
          className="inline-flex min-h-10 items-center gap-2 rounded-full px-2 text-xs font-semibold text-[#6B6570] transition-colors hover:text-pink-600 focus-visible:outline-2 focus-visible:outline-pink-500"
        >
          <ArrowLeft size={16} />
          Back to Lookbooks
        </Link>
        {isFullscreen && (
          <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-pink-600">
            Fullscreen viewer
          </span>
        )}
      </div>

      <header className="mb-2 text-center sm:mb-3">
        <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-pink-600 sm:text-xs">
          Digital Lookbook
        </p>
        <h1 className="mt-2 text-2xl font-semibold tracking-tight text-[#2D2433] sm:text-3xl">
          {title}
        </h1>
      </header>

      <div className="relative z-30 h-0">
        <div className="pointer-events-auto absolute inset-x-0 top-0 flex flex-wrap items-center justify-center gap-2">
        {isCover ? (
          <>
            <ControlButton
              label="Open Book"
              onClick={openBook}
              disabled={!isBookReady || coverMode !== "closed" || normalPageCount === 0}
              className="bg-[#2D2433] text-white hover:border-[#2D2433] hover:bg-[#443849] hover:text-white"
            >
              <span>Open Book</span>
              <ChevronRight size={15} />
            </ControlButton>
          </>
        ) : (
          <>
            <ControlButton
              label="Previous spread"
              onClick={previous}
              disabled={coverMode !== "open"}
              className="sm:hidden"
            >
              <ChevronLeft size={16} />
              <span>Previous</span>
            </ControlButton>
            <ControlButton
              label="Next spread"
              onClick={next}
              disabled={coverMode !== "open" || currentBookPageIndex >= lastBookPageIndex}
              className="sm:hidden"
            >
              <span>Next</span>
              <ChevronRight size={16} />
            </ControlButton>
          </>
        )}
        <ControlButton
          label={showAllPages ? "Return to book" : "All Pages"}
          onClick={() => setShowAllPages((showing) => !showing)}
          active={showAllPages}
        >
          <Grid2X2 size={15} />
          <span>{showAllPages ? "Book" : "All Pages"}</span>
        </ControlButton>
        <ControlButton
          label={shareCopied ? "Lookbook link copied" : "Share Lookbook"}
          onClick={shareLookbook}
        >
          <Share2 size={15} />
          <span className="hidden sm:inline">{shareCopied ? "Copied" : "Share"}</span>
        </ControlButton>
        <a
          href={pdf}
          download
          aria-label="Download Lookbook PDF"
          title="Download Lookbook PDF"
          className="inline-flex min-h-10 items-center justify-center gap-1.5 rounded-full border border-[#EDE5E9] bg-white px-3 py-2 text-xs font-semibold text-[#514954] transition-colors hover:border-pink-200 hover:text-pink-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-500"
        >
          <Download size={15} />
          <span className="hidden sm:inline">Download</span>
        </a>
        {!isCover && (
          <>
            <ControlButton
              label="Zoom out"
              onClick={() => setZoom((scale) => Math.max(0.7, Number((scale - 0.15).toFixed(2))))}
              disabled={zoom <= 0.7}
            >
              <ZoomOut size={15} />
            </ControlButton>
            <ControlButton
              label="Zoom in"
              onClick={() => setZoom((scale) => Math.min(2.5, Number((scale + 0.15).toFixed(2))))}
              disabled={zoom >= 2.5}
            >
              <ZoomIn size={15} />
            </ControlButton>
            <ControlButton label="Reset zoom to fit" onClick={() => setZoom(1)} active={zoom === 1}>
              <RotateCcw size={14} />
              <span>Fit</span>
            </ControlButton>
          </>
        )}
        <ControlButton label={soundEnabled ? "Sound ON" : "Sound OFF"} onClick={toggleSound} active={soundEnabled}>
          {soundEnabled ? <Volume2 size={15} /> : <VolumeX size={15} />}
          <span className="hidden sm:inline">Sound {soundEnabled ? "ON" : "OFF"}</span>
        </ControlButton>
        <ControlButton
          label={isFullscreen ? "Exit fullscreen" : "Fullscreen"}
          onClick={toggleFullscreen}
        >
          {isFullscreen ? <Minimize size={15} /> : <Maximize size={15} />}
          <span className="hidden sm:inline">{isFullscreen ? "Exit" : "Fullscreen"}</span>
        </ControlButton>
        </div>
      </div>

      <div className="rounded-2xl border border-[#EFE8EB] bg-[#F7F3F4] p-2 sm:p-4">
        <div
          ref={stageRef}
          className={`relative w-full overflow-auto rounded-xl bg-[radial-gradient(ellipse_at_center,#fff_0%,#f6f1f2_72%,#eee7e9_100%)] p-2 sm:p-4 ${styles.viewerStage} min-h-65 sm:min-h-80 ${
            isFullscreen
              ? "h-[calc(100dvh-300px)] sm:h-[calc(100dvh-260px)]"
              : "h-[min(82dvh,920px)]"
          }`}
        >
          <PdfErrorBoundary key={pdf}>
            <PdfDocument {...rendererProps} />
          </PdfErrorBoundary>
          {coverMode === "open" && !showAllPages && (
            <>
              <button
                type="button"
                aria-label="Previous spread"
                title="Previous spread"
                onClick={previous}
                className="absolute left-2 top-1/2 z-30 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/70 bg-white/85 text-[#514954] shadow-md backdrop-blur transition hover:bg-white hover:text-pink-700 disabled:opacity-40 sm:flex"
              >
                <ChevronLeft size={19} />
              </button>
              <button
                type="button"
                aria-label="Next spread"
                title="Next spread"
                onClick={next}
                disabled={currentBookPageIndex >= lastBookPageIndex}
                className="absolute right-2 top-1/2 z-30 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/70 bg-white/85 text-[#514954] shadow-md backdrop-blur transition hover:bg-white hover:text-pink-700 disabled:opacity-40 sm:flex"
              >
                <ChevronRight size={19} />
              </button>
            </>
          )}
        </div>
      </div>

      <div className="mt-3 flex flex-col items-center justify-between gap-2 text-center sm:flex-row sm:text-left">
        <span className="text-xs font-semibold tabular-nums text-[#514954]" aria-live="polite">
          {isCover
            ? `1 / ${pageCount || "—"}`
            : `${spreadStart}–${displayedSpreadEnd} / ${pageCount || "—"}`}
        </span>
        <p className="text-[10px] leading-5 text-[#827A84] sm:text-xs">
          {showAllPages
            ? "Select the cover or any page to jump directly to that part of the Lookbook."
            : isCover
              ? "Click, tap, or swipe the cover to open the Lookbook."
              : "Two-page view · Swipe, click either page, or use the arrows to turn pages."}
        </p>
      </div>
    </section>
  );
}
