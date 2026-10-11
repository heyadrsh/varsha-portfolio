"use client";

import { useState } from "react";

interface StickerProps {
  id: string;
  style: React.CSSProperties;
  lightSrc: string;
  darkSrc?: string;
  width?: number;
  height?: number;
}

function DraggableSticker({ id, style, lightSrc, darkSrc }: StickerProps) {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);

  const onMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    const startX = e.clientX - pos.x;
    const startY = e.clientY - pos.y;

    const onMouseMove = (ev: MouseEvent) => {
      setPos({ x: ev.clientX - startX, y: ev.clientY - startY });
    };

    const onMouseUp = () => {
      setIsDragging(false);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);
  };

  const onTouchStart = (e: React.TouchEvent) => {
    if (e.touches.length !== 1) return;
    setIsDragging(true);
    const touch = e.touches[0];
    const startX = touch.clientX - pos.x;
    const startY = touch.clientY - pos.y;

    const onTouchMove = (ev: TouchEvent) => {
      if (ev.touches.length !== 1) return;
      const t = ev.touches[0];
      setPos({ x: t.clientX - startX, y: t.clientY - startY });
    };

    const onTouchEnd = () => {
      setIsDragging(false);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchend", onTouchEnd);
    };

    window.addEventListener("touchmove", onTouchMove, { passive: true });
    window.addEventListener("touchend", onTouchEnd);
  };

  const dynamicTransform = `translate(${pos.x}px, ${pos.y}px) scale(${isDragging ? 1.05 : 1})`;
  const hasDualTheme = Boolean(darkSrc && darkSrc !== lightSrc);

  return (
    <div
      data-id={id}
      className={`collage-item collage-item-image ${isDragging ? "is-dragging" : ""}`}
      style={{
        ...style,
        transform: `${style.transform} ${dynamicTransform}`,
        cursor: isDragging ? "grabbing" : "grab",
      }}
      onMouseDown={onMouseDown}
      onTouchStart={onTouchStart}
    >
      <img
        alt=""
        draggable="false"
        loading="lazy"
        className={hasDualTheme ? "collage-light-only" : "collage-both-modes"}
        style={{ color: "transparent", width: "100%", height: "auto" }}
        src={lightSrc}
      />
      {hasDualTheme && darkSrc && (
        <img
          alt=""
          draggable="false"
          loading="lazy"
          className="collage-dark-only"
          style={{
            color: "transparent",
            width: "100%",
            height: "100%",
            position: "absolute",
            inset: 0,
            objectFit: "contain",
          }}
          src={darkSrc}
        />
      )}
    </div>
  );
}

export default function DraggableCollage() {
  return (
    <>
      {/* ─────────────────────────────────────────────────────────────
          DESKTOP & TABLET COLLAGE (Wide 880:480 landscape ratio)
          Exact original composition preserved for large screens
          ───────────────────────────────────────────────────────────── */}
      <div className="footer-banner footer-banner-desktop">
        <div className="footer-collage" style={{ aspectRatio: "880 / 480" }} aria-hidden="true">
          {/* MacBook Pro Laptop */}
          <DraggableSticker
            id="macbook"
            style={{
              left: "5%",
              top: "22%",
              width: "17%",
              transform: "rotate(calc(-4deg + var(--hover-nudge, 0deg)))",
              zIndex: 2,
            }}
            lightSrc="/Collage/Light mode/Macbook.webp"
            darkSrc="/Collage/Dark mode/mac-macbook-pro-finish-select-202601-14inch-silver 1.webp"
          />

          {/* YouTube Brand Sticker */}
          <DraggableSticker
            id="youtube"
            style={{
              left: "13%",
              top: "48%",
              width: "9%",
              transform: "rotate(calc(-14deg + var(--hover-nudge, 0deg)))",
              zIndex: 25,
            }}
            lightSrc="/Collage/varsha/youtube.webp"
          />

          {/* Varsha in Black Saree (Courtyard / Stone Wall) */}
          <DraggableSticker
            id="varsha-saree-black"
            style={{
              left: "22%",
              top: "-10%",
              width: "21%",
              transform: "rotate(calc(-7deg + var(--hover-nudge, 0deg)))",
              zIndex: 10,
            }}
            lightSrc="/Collage/varsha/light/saree_black.webp"
          />

          {/* Minimal Cat Illustration */}
          <DraggableSticker
            id="cat"
            style={{
              left: "34%",
              top: "52%",
              width: "9%",
              transform: "rotate(calc(7deg + var(--hover-nudge, 0deg)))",
              zIndex: 8,
            }}
            lightSrc="/Collage/Light mode/Cat.svg"
            darkSrc="/Collage/Dark mode/Cat.svg"
          />

          {/* YouTube Studio Creator Sticker */}
          <DraggableSticker
            id="youtube-studio"
            style={{
              left: "43%",
              top: "54%",
              width: "7.5%",
              transform: "rotate(calc(-6deg + var(--hover-nudge, 0deg)))",
              zIndex: 24,
            }}
            lightSrc="/Collage/varsha/youtube-studio.webp"
          />

          {/* Varsha at Miranda House Graduation Day */}
          <DraggableSticker
            id="varsha-miranda"
            style={{
              left: "48%",
              top: "8%",
              width: "24%",
              transform: "rotate(calc(-3deg + var(--hover-nudge, 0deg)))",
              zIndex: 12,
            }}
            lightSrc="/Collage/varsha/light/miranda.webp"
          />

          {/* Varsha in Red Saree (Grand Chandelier Hall) */}
          <DraggableSticker
            id="varsha-saree-red"
            style={{
              left: "68%",
              top: "-10%",
              width: "22%",
              transform: "rotate(calc(6deg + var(--hover-nudge, 0deg)))",
              zIndex: 14,
            }}
            lightSrc="/Collage/varsha/light/saree_red.webp"
          />

          {/* Leica Vintage Camera */}
          <DraggableSticker
            id="leica"
            style={{
              left: "77%",
              top: "40%",
              width: "12%",
              transform: "rotate(calc(-8deg + var(--hover-nudge, 0deg)))",
              zIndex: 20,
            }}
            lightSrc="/Collage/Light mode/Leica.webp"
          />

          {/* Pinterest Brand Sticker */}
          <DraggableSticker
            id="pinterest"
            style={{
              left: "64%",
              top: "50%",
              width: "7.5%",
              transform: "rotate(calc(-8deg + var(--hover-nudge, 0deg)))",
              zIndex: 25,
            }}
            lightSrc="/Collage/varsha/pinterest.svg"
          />

          {/* Instagram Brand Sticker */}
          <DraggableSticker
            id="instagram"
            style={{
              left: "86%",
              top: "56%",
              width: "8.5%",
              transform: "rotate(calc(12deg + var(--hover-nudge, 0deg)))",
              zIndex: 26,
            }}
            lightSrc="/Collage/varsha/instagram.webp"
          />
        </div>
      </div>

      {/* ─────────────────────────────────────────────────────────────
          MOBILE & PHONE COLLAGE (Portrait ratio 390:510)
          Optimized specifically for phone screens so photos are
          large, crystal clear, prominent, and touch-draggable
          ───────────────────────────────────────────────────────────── */}
      <div className="footer-banner-mobile">
        <div className="footer-collage-mobile" style={{ aspectRatio: "390 / 510" }} aria-hidden="true">
          {/* Top Left: Varsha in Black Saree */}
          <DraggableSticker
            id="m-varsha-saree-black"
            style={{
              left: "3%",
              top: "2%",
              width: "45%",
              transform: "rotate(calc(-5deg + var(--hover-nudge, 0deg)))",
              zIndex: 10,
            }}
            lightSrc="/Collage/varsha/light/saree_black.webp"
          />

          {/* Top Right: Varsha in Red Saree */}
          <DraggableSticker
            id="m-varsha-saree-red"
            style={{
              left: "52%",
              top: "1%",
              width: "45%",
              transform: "rotate(calc(4deg + var(--hover-nudge, 0deg)))",
              zIndex: 11,
            }}
            lightSrc="/Collage/varsha/light/saree_red.webp"
          />

          {/* Top Overlap: YouTube Brand Sticker */}
          <DraggableSticker
            id="m-youtube"
            style={{
              left: "38%",
              top: "16%",
              width: "22%",
              transform: "rotate(calc(-12deg + var(--hover-nudge, 0deg)))",
              zIndex: 25,
            }}
            lightSrc="/Collage/varsha/youtube.webp"
          />

          {/* Centerpiece: Varsha at Miranda House Graduation Day */}
          <DraggableSticker
            id="m-varsha-miranda"
            style={{
              left: "25%",
              top: "27%",
              width: "50%",
              transform: "rotate(calc(-2deg + var(--hover-nudge, 0deg)))",
              zIndex: 16,
            }}
            lightSrc="/Collage/varsha/light/miranda.webp"
          />

          {/* Middle Left: Instagram Brand Sticker */}
          <DraggableSticker
            id="m-instagram"
            style={{
              left: "4%",
              top: "38%",
              width: "18%",
              transform: "rotate(calc(10deg + var(--hover-nudge, 0deg)))",
              zIndex: 26,
            }}
            lightSrc="/Collage/varsha/instagram.webp"
          />

          {/* Middle Left: Pinterest Brand Sticker */}
          <DraggableSticker
            id="m-pinterest"
            style={{
              left: "4%",
              top: "52%",
              width: "18%",
              transform: "rotate(calc(-8deg + var(--hover-nudge, 0deg)))",
              zIndex: 25,
            }}
            lightSrc="/Collage/varsha/pinterest.svg"
          />

          {/* Middle Right: YouTube Studio Creator Badge */}
          <DraggableSticker
            id="m-youtube-studio"
            style={{
              left: "75%",
              top: "36%",
              width: "19%",
              transform: "rotate(calc(-8deg + var(--hover-nudge, 0deg)))",
              zIndex: 24,
            }}
            lightSrc="/Collage/varsha/youtube-studio.webp"
          />

          {/* Right Side: Cat Illustration (non-overlapping) */}
          <DraggableSticker
            id="m-cat"
            style={{
              left: "76%",
              top: "54%",
              width: "22%",
              transform: "rotate(calc(4deg + var(--hover-nudge, 0deg)))",
              zIndex: 22,
            }}
            lightSrc="/Collage/Light mode/Cat.svg"
            darkSrc="/Collage/Dark mode/Cat.svg"
          />

          {/* Bottom Left: MacBook Pro */}
          <DraggableSticker
            id="m-macbook"
            style={{
              left: "3%",
              top: "66%",
              width: "40%",
              transform: "rotate(calc(-6deg + var(--hover-nudge, 0deg)))",
              zIndex: 10,
            }}
            lightSrc="/Collage/Light mode/Macbook.webp"
            darkSrc="/Collage/Dark mode/mac-macbook-pro-finish-select-202601-14inch-silver 1.webp"
          />

          {/* Bottom Right: Leica Vintage Camera */}
          <DraggableSticker
            id="m-leica"
            style={{
              left: "58%",
              top: "67%",
              width: "36%",
              transform: "rotate(calc(6deg + var(--hover-nudge, 0deg)))",
              zIndex: 12,
            }}
            lightSrc="/Collage/Light mode/Leica.webp"
          />
        </div>
      </div>
    </>
  );
}
