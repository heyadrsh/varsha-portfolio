"use client";

import { useState, useRef, useEffect } from "react";

const UPPER_GLYPHS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const LOWER_GLYPHS = "abcdefghijklmnopqrstuvwxyz";
const NUM_GLYPHS = "0123456789";

interface TextScrambleProps {
  text: string;
  className?: string;
}

export default function TextScramble({ text, className = "" }: TextScrambleProps) {
  const [displayText, setDisplayText] = useState(text);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    setDisplayText(text);
  }, [text]);

  const handleMouseEnter = () => {
    let iteration = 0;
    if (intervalRef.current) clearInterval(intervalRef.current);

    // Smooth, snappy resolve in ~10 frames (approx 280ms total)
    const step = Math.max(1, Math.ceil(text.length / 10));

    intervalRef.current = setInterval(() => {
      setDisplayText(
        text
          .split("")
          .map((char, index) => {
            // Characters already passed iteration stay resolved
            if (index < iteration) return text[index];
            // Preserve spaces and punctuation so line wraps & word bounds never jump
            if (char === " " || /[^a-zA-Z0-9]/.test(char)) return char;
            // Case-preserving glyph selection maintains uniform typographic width
            if (/[A-Z]/.test(char)) {
              return UPPER_GLYPHS[Math.floor(Math.random() * UPPER_GLYPHS.length)];
            }
            if (/[a-z]/.test(char)) {
              return LOWER_GLYPHS[Math.floor(Math.random() * LOWER_GLYPHS.length)];
            }
            if (/[0-9]/.test(char)) {
              return NUM_GLYPHS[Math.floor(Math.random() * NUM_GLYPHS.length)];
            }
            return char;
          })
          .join("")
      );

      if (iteration >= text.length) {
        if (intervalRef.current) clearInterval(intervalRef.current);
        setDisplayText(text);
      }
      iteration += step;
    }, 28);
  };

  const handleMouseLeave = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    setDisplayText(text);
  };

  return (
    <span
      className={`scramble-text link-label ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        display: "inline-block",
        willChange: "contents",
        fontVariantNumeric: "tabular-nums",
      }}
    >
      <span className="scramble-original">{displayText}</span>
    </span>
  );
}
