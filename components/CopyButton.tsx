"use client";

import { useState } from "react";

interface CopyButtonProps {
  text: string;
}

export default function CopyButton({ text }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 1000);
  };

  return (
    <button
      type="button"
      className="copy-button"
      aria-label={`Copy ${text}`}
      title={copied ? "Copied!" : "Copy email"}
      onClick={handleCopy}
      style={{ opacity: copied ? 0.5 : 1, transition: "opacity 0.2s" }}
    >
      <svg
        viewBox="0 0 24 24"
        width="14"
        height="14"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M10 8h10s2 0 2 2v10s0 2 -2 2H10s-2 0 -2 -2V10s0 -2 2 -2"></path>
        <path d="M4 16c-1.1 0 -2 -0.9 -2 -2V4c0 -1.1 0.9 -2 2 -2h10c1.1 0 2 0.9 2 2"></path>
      </svg>
    </button>
  );
}
