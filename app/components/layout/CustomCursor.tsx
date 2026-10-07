"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const desktopQuery = window.matchMedia(
      "(min-width: 1024px) and (pointer: fine) and (hover: hover)"
    );
    const updateDesktop = () => setIsActive(desktopQuery.matches);

    updateDesktop();
    desktopQuery.addEventListener("change", updateDesktop);

    return () => {
      desktopQuery.removeEventListener("change", updateDesktop);
    };
  }, []);

  useEffect(() => {
    if (!isActive) {
      return;
    }

    const root = document.documentElement;
    const cursor = cursorRef.current;
    if (!cursor) {
      return;
    }

    let targetX = -100;
    let targetY = -100;
    let animationFrame = 0;

    const renderPosition = () => {
      cursor.style.transform = `translate3d(${targetX - 10}px, ${targetY - 2}px, 0)`;
      animationFrame = 0;
    };

    const handleMouseMove = (event: MouseEvent) => {
      targetX = event.clientX;
      targetY = event.clientY;
      cursor.style.opacity = "1";
      root.classList.add("wand-cursor-active");

      if (!animationFrame) {
        animationFrame = window.requestAnimationFrame(renderPosition);
      }
    };

    const handleMouseLeave = () => {
      cursor.style.opacity = "0";
      root.classList.remove("wand-cursor-active");
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.documentElement.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      root.classList.remove("wand-cursor-active");
      window.removeEventListener("mousemove", handleMouseMove);
      document.documentElement.removeEventListener(
        "mouseleave",
        handleMouseLeave
      );
      window.cancelAnimationFrame(animationFrame);
    };
  }, [isActive]);

  if (!isActive) {
    return null;
  }

  return (
    <div
      ref={cursorRef}
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[999999] will-change-transform"
      style={{ opacity: 0 }}
    >
      <Image
        src="/wand.svg"
        alt=""
        width={39}
        height={40}
        unoptimized
        draggable={false}
      />
    </div>
  );
}
