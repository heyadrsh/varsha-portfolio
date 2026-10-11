"use client";

import { useEffect, useRef, useState } from "react";

export default function FooterSignature() {
  const [isDrawing, setIsDrawing] = useState(true);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let hasAnimated = false;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            hasAnimated = true;
            setIsDrawing(false);
            requestAnimationFrame(() => {
              requestAnimationFrame(() => {
                setIsDrawing(true);
              });
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const handleReplay = () => {
    setIsDrawing(false);
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setIsDrawing(true);
      });
    });
  };

  return (
    <span
      ref={ref}
      className={`footer-sign ${isDrawing ? "is-visible is-animating" : ""}`}
      role="img"
      aria-label="Varsha Signature"
      onClick={handleReplay}
      onMouseEnter={handleReplay}
      title="Varsha Rajput — hover or tap to replay signature"
    >
      <img src="/sign-light.webp" alt="Varsha Rajput" className="sign-light-only" draggable={false} />
      <img src="/sign-dark.webp" alt="Varsha Rajput" className="sign-dark-only" draggable={false} />
    </span>
  );
}
