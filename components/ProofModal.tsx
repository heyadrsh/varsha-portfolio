"use client";

import { useEffect } from "react";

export interface ProofModalData {
  title: string;
  category: string;
  metric: string;
  description: string;
  imageSrc: string;
  externalUrl?: string;
}

export default function ProofModal({
  data,
  onClose,
}: {
  data: ProofModalData | null;
  onClose: () => void;
}) {
  // Close on Escape key
  useEffect(() => {
    if (!data) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [data, onClose]);

  if (!data) return null;

  return (
    <div
      className="proof-backdrop"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="proof-modal-title"
    >
      <div className="proof-card" onClick={(e) => e.stopPropagation()}>
        <div className="proof-card-header">
          <div className="proof-card-title-wrap">
            <span className="proof-category">{data.category}</span>
            <h3 id="proof-modal-title" className="proof-title">
              {data.title}
            </h3>
            <span className="proof-metric">{data.metric}</span>
          </div>
          <button
            type="button"
            className="proof-close-btn"
            onClick={onClose}
            aria-label="Close modal"
          >
            <svg
              width="10"
              height="10"
              viewBox="0 0 10 10"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            >
              <line x1="1" y1="1" x2="9" y2="9" />
              <line x1="9" y1="1" x2="1" y2="9" />
            </svg>
          </button>
        </div>

        <p className="proof-desc">{data.description}</p>

        <div className="proof-image-wrap">
          <img src={data.imageSrc} alt={data.title} className="proof-image" />
        </div>

        {data.externalUrl && (
          <div className="proof-footer-action">
            <a
              href={data.externalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="cta-button"
            >
              <span>View Live Channel / Profile</span>
              <svg
                width="11"
                height="11"
                viewBox="0 0 12 12"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M2.5 9.5L9.5 2.5M9.5 2.5H4.5M9.5 2.5V7.5" />
              </svg>
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
