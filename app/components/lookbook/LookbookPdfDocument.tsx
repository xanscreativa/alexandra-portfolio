"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import HTMLFlipBook from "react-pageflip";
import { motion } from "framer-motion";
import { Document, Page, pdfjs } from "react-pdf";
import styles from "./LookbookViewer.module.css";

type PageFlipApi = {
  flipNext: () => void;
  flipPrev: () => void;
  turnToPage: (pageNumber: number) => void;
  update: () => void;
};

type PageFlipRef = { pageFlip: () => PageFlipApi };

type BookController = {
  next: () => void;
  previous: () => void;
  turnToPage: (pageNumber: number) => void;
  update: () => void;
};

type PdfDocumentInfo = {
  numPages: number;
  getPage: (pageNumber: number) => Promise<{
    getViewport: (options: { scale: number }) => { width: number; height: number };
  }>;
};

type Props = {
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

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url,
).toString();

function LazyPdfThumbnail({
  pageNumber,
  pageAspectRatio,
  isActive,
  onClick,
}: {
  pageNumber: number;
  pageAspectRatio: number;
  isActive: boolean;
  onClick: () => void;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container || !("IntersectionObserver" in window)) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "400px" },
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  const isCover = pageNumber === 1;

  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={isCover ? "Open cover" : `Open page ${pageNumber - 1}`}
      aria-current={isActive ? "page" : undefined}
      className={`group w-full min-w-0 rounded-xl border bg-white p-2 text-left shadow-sm transition hover:-translate-y-0.5 hover:shadow-md ${
        isActive
          ? "border-pink-500 ring-2 ring-pink-200"
          : "border-[#EDE5E9] hover:border-pink-200"
      }`}
    >
      <div
        ref={containerRef}
        className="relative flex w-full items-start justify-center overflow-hidden rounded-md bg-[#F8F3F5]"
        style={{ aspectRatio: String(pageAspectRatio) }}
      >
        {isVisible ? (
          <Page
            pageNumber={pageNumber}
            width={140}
            renderTextLayer={false}
            renderAnnotationLayer={false}
            className="m-0 max-w-full"
          />
        ) : (
          <span className="absolute inset-0 animate-pulse bg-[#F8F3F5]" />
        )}
      </div>
      <span className="mt-2 block truncate text-center text-[10px] font-semibold uppercase tracking-[0.12em] text-[#6B6570] sm:text-xs">
        {isCover ? "Cover" : `Page ${String(pageNumber - 1).padStart(2, "0")}`}
      </span>
    </button>
  );
}

export default function LookbookPdfDocument({
  pdf,
  mode,
  coverMode,
  pageCount,
  pageNumbers,
  pageWidth,
  pageHeight,
  coverWidth,
  coverYOffset,
  pageAspectRatio,
  coverAspectRatio,
  currentBookPageIndex,
  activePdfPages,
  onDocumentLoad,
  onPageSelect,
  onOpenBook,
  onCoverAnimationComplete,
  onBookReady,
  onBookFlip,
  onFlipStart,
}: Props) {
  const bookRef = useRef<PageFlipRef | null>(null);
  const bookFrameRef = useRef<HTMLDivElement>(null);
  const coverPointerStart = useRef<number | null>(null);
  const suppressCoverClick = useRef(false);

  const handleDocumentLoad = async (document: PdfDocumentInfo) => {
    try {
      const [coverPage, contentPage] = await Promise.all([
        document.getPage(1),
        document.getPage(Math.min(2, document.numPages)),
      ]);
      const coverViewport = coverPage.getViewport({ scale: 1 });
      const contentViewport = contentPage.getViewport({ scale: 1 });
      onDocumentLoad(
        document.numPages,
        contentViewport.width / contentViewport.height,
        coverViewport.width / coverViewport.height,
      );
    } catch {
      onDocumentLoad(document.numPages, pageAspectRatio, coverAspectRatio);
    }
  };

  const handleBookInit = () => {
    const pageFlip = bookRef.current?.pageFlip();
    if (!pageFlip) return;

    onBookReady({
      next: () => pageFlip.flipNext(),
      previous: () => pageFlip.flipPrev(),
      turnToPage: (pageNumber) => pageFlip.turnToPage(pageNumber),
      update: () => pageFlip.update(),
    });
  };

  const handleCoverPointerUp = (event: React.PointerEvent<HTMLDivElement>) => {
    if (coverPointerStart.current === null) return;

    const deltaX = event.clientX - coverPointerStart.current;
    coverPointerStart.current = null;
    if (Math.abs(deltaX) < 48) return;

    suppressCoverClick.current = true;
    window.setTimeout(() => {
      suppressCoverClick.current = false;
    }, 0);

    if (deltaX < 0 && coverMode === "closed") onOpenBook();
  };

  useEffect(() => {
    const frame = bookFrameRef.current;
    if (!frame || typeof ResizeObserver === "undefined") return;

    const observer = new ResizeObserver(() => bookRef.current?.pageFlip()?.update());
    observer.observe(frame);
    return () => observer.disconnect();
  }, [pageWidth, pageHeight, pageCount]);

  const normalPageCount = Math.max(0, pageCount - 1);
  const paddedBookPageCount = normalPageCount + (normalPageCount % 2);
  const preloadFirstPage = Math.max(0, currentBookPageIndex - 2);
  const preloadLastPage = Math.min(normalPageCount - 1, currentBookPageIndex + 4);
  const bookPageWidth = Math.max(1, Math.round(pageWidth));
  const bookPageHeight = Math.max(1, Math.round(pageHeight));
  const coverPageWidth = Math.max(1, Math.round(coverWidth));
  const coverPageHeight = Math.max(1, Math.round(coverPageWidth / coverAspectRatio));
  const coverScale = Math.min(1, bookPageWidth / coverPageWidth);
  const showCover = mode === "book" && coverMode !== "open";
  const isClosingCover = coverMode === "closing";
  const bookPages = useMemo(
    () =>
      Array.from({ length: paddedBookPageCount }, (_, bookPageIndex) => {
        const pdfPageNumber = bookPageIndex < normalPageCount
          ? bookPageIndex + 2
          : null;
        const shouldRenderPage =
          pdfPageNumber !== null &&
          bookPageIndex >= preloadFirstPage &&
          bookPageIndex <= preloadLastPage;

        return (
          <div
            key={pdfPageNumber ?? "blank-back-page"}
            className={`${styles.physicalPage} page`}
            data-density="soft"
          >
            <div
              className={`${styles.pageSurface} ${
                pdfPageNumber === null ? styles.blankPage : ""
              }`}
            >
              {shouldRenderPage ? (
                <div className={styles.pageCanvas}>
                  <Page
                    pageNumber={pdfPageNumber}
                    width={bookPageWidth}
                    renderTextLayer={false}
                    renderAnnotationLayer={false}
                  />
                </div>
              ) : (
                <div
                  aria-hidden="true"
                  className={styles.pageCanvas}
                  style={{ aspectRatio: String(pageAspectRatio) }}
                />
              )}
            </div>
          </div>
        );
      }),
    [
      bookPageWidth,
      normalPageCount,
      pageAspectRatio,
      paddedBookPageCount,
      preloadFirstPage,
      preloadLastPage,
    ],
  );

  return (
    <Document
      file={pdf}
      className={styles.pdfDocument}
      onLoadSuccess={handleDocumentLoad}
      loading={
        <div className="flex min-h-48 w-full items-center justify-center text-sm text-[#6B6570]">
          Loading Lookbook…
        </div>
      }
      error={
        <div className="flex min-h-48 w-full items-center justify-center px-6 text-center text-sm text-[#6B6570]">
          This Lookbook could not be loaded. Please refresh and try again.
        </div>
      }
    >
      <div className={styles.pdfViewport}>
        {paddedBookPageCount > 0 && (
          <div
            ref={bookFrameRef}
            className={`${styles.bookScene} ${
              mode === "all" || coverMode === "closed" ? styles.bookHidden : ""
            }`}
            style={{ width: bookPageWidth * 2, height: bookPageHeight }}
            aria-hidden={mode === "all" || coverMode === "closed"}
          >
            <div
              className={styles.bookFrame}
              style={{ width: bookPageWidth * 2, height: bookPageHeight }}
            >
              <HTMLFlipBook
                ref={bookRef}
                className={styles.flipBook}
                style={{ width: "100%", height: "100%" }}
                width={bookPageWidth}
                height={bookPageHeight}
                size="stretch"
                minWidth={1}
                maxWidth={1200}
                minHeight={1}
                maxHeight={1800}
                drawShadow
                flippingTime={850}
                usePortrait={false}
                startPage={0}
                startZIndex={1}
                autoSize
                maxShadowOpacity={0.24}
                showCover={false}
                mobileScrollSupport={false}
                clickEventForward={false}
                useMouseEvents
                swipeDistance={32}
                showPageCorners
                disableFlipByClick={false}
                onInit={handleBookInit}
                onFlip={(event: { data: number }) => onBookFlip(event.data)}
                onChangeState={(event: { data: string }) => {
                  if (event.data === "flipping") onFlipStart();
                }}
              >
                {bookPages}
              </HTMLFlipBook>
              <div className={styles.spine} aria-hidden="true" />
            </div>
          </div>
        )}

        {showCover && (
          <motion.div
            role={coverMode === "closed" ? "button" : undefined}
            tabIndex={coverMode === "closed" ? 0 : undefined}
            aria-label={coverMode === "closed" ? "Open Lookbook cover" : undefined}
            className={styles.coverLayer}
            style={{
              width: coverPageWidth,
              height: coverPageHeight,
              marginLeft: -coverPageWidth / 2,
              marginTop: -coverPageHeight / 2,
              transformOrigin: "left center",
              transformStyle: "preserve-3d",
              backfaceVisibility: "visible",
              touchAction: "pan-y",
            }}
            initial={
              isClosingCover
                ? {
                    x: coverPageWidth / 2,
                    y: coverYOffset,
                    scale: coverScale,
                    rotateY: -164,
                    z: 18,
                    filter: "drop-shadow(18px 24px 20px rgba(45,36,51,0.28))",
                  }
                : false
            }
            animate={
              coverMode === "opening"
                ? {
                    x: [0, coverPageWidth * 0.18, coverPageWidth / 2],
                    y: [0, coverYOffset * 0.35, coverYOffset],
                    scale: [1, Math.max(coverScale, 0.78), coverScale],
                    rotateY: [0, -54, -164],
                    z: [4, 28, 16],
                    filter: [
                      "drop-shadow(0px 14px 16px rgba(45,36,51,0.2))",
                      "drop-shadow(20px 30px 24px rgba(45,36,51,0.32))",
                      "drop-shadow(8px 12px 14px rgba(45,36,51,0.16))",
                    ],
                  }
                : {
                    x: 0,
                    y: 0,
                    scale: 1,
                    rotateY: 0,
                    z: 4,
                    filter: "drop-shadow(0px 12px 14px rgba(45,36,51,0.2))",
                  }
            }
            transition={{ duration: 0.95, ease: [0.22, 0.61, 0.36, 1] }}
            onClick={() => {
              if (suppressCoverClick.current) {
                suppressCoverClick.current = false;
                return;
              }
              if (coverMode === "closed") onOpenBook();
            }}
            onPointerDown={(event) => {
              coverPointerStart.current = event.clientX;
            }}
            onPointerUp={handleCoverPointerUp}
            onPointerCancel={() => {
              coverPointerStart.current = null;
            }}
            onKeyDown={(event) => {
              if (coverMode === "closed" && (event.key === "Enter" || event.key === " ")) {
                event.preventDefault();
                onOpenBook();
              }
            }}
            onAnimationComplete={onCoverAnimationComplete}
          >
            <div className={styles.coverBoard}>
              <div className={styles.coverFront}>
                <Page
                  pageNumber={1}
                  width={bookPageWidth}
                  renderTextLayer={false}
                  renderAnnotationLayer={false}
                  className={styles.coverCanvas}
                />
              </div>
              <div className={styles.coverBack} aria-hidden="true" />
            </div>
          </motion.div>
        )}

        {mode === "all" && (
          <div className={styles.allPagesOverlay}>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-5">
              {pageNumbers.map((pageNumber) => (
                <LazyPdfThumbnail
                  key={pageNumber}
                  pageNumber={pageNumber}
                  pageAspectRatio={pageAspectRatio}
                  isActive={activePdfPages.includes(pageNumber)}
                  onClick={() => onPageSelect(pageNumber)}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </Document>
  );
}
