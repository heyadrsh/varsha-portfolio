"use client";

import { useState } from "react";
import ThemeToggle from "@/components/ThemeToggle";
import TextScramble from "@/components/TextScramble";
import LiveClock from "@/components/LiveClock";
import CopyButton from "@/components/CopyButton";
import DraggableCollage from "@/components/DraggableCollage";
import ProofModal, { ProofModalData } from "@/components/ProofModal";

export default function Home() {
  const [activeProof, setActiveProof] = useState<ProofModalData | null>(null);

  return (
    <main className="site">
      <ThemeToggle />
      <ProofModal data={activeProof} onClose={() => setActiveProof(null)} />
      <section className="intro-section" aria-label="Introduction">
        <div className="content">
          <div className="avatar-wrap appear" style={{ "--appear-delay": "0ms", width: "58px", height: "58px", minWidth: "58px", maxWidth: "58px", overflow: "hidden" } as React.CSSProperties}>
            <span className="avatar-swap" aria-hidden="true" style={{ width: "58px", height: "58px", display: "block", position: "relative" }}>
              <img
                className="avatar avatar-still"
                src="/assets/avatar.webp"
                alt="Varsha Rajput"
                draggable="false"
                style={{ width: "58px", height: "58px", borderRadius: "14px", objectFit: "cover" }}
              />
            </span>
          </div>
          <div className="stack">
            <div className="body-copy">
              <div className="greetings appear" aria-label="Greetings" style={{ "--appear-delay": "40ms" } as React.CSSProperties}>
                <span>hello,</span>
                <span lang="hi">नमस्ते<span className="greetings-comma">,</span></span>
                <span lang="ja">こんにちは</span>
              </div>
              <div className="information">
                <p className="appear" style={{ "--appear-delay": "75ms" } as React.CSSProperties}>
                  I’m Varsha, a social media strategist and content creator building high-retention audience loops.
                </p>
                <p className="appear" style={{ "--appear-delay": "110ms" } as React.CSSProperties}>
                  Scaled creator channels to 265K+ on YouTube (131M+ views), 34.5M+ Reels reach, and 29M+ monthly impressions on Pinterest.
                </p>
                <p className="appear" style={{ "--appear-delay": "145ms" } as React.CSSProperties}>
                  Work spans viral scripting and B2B marketing at{" "}
                  <a href="https://in.linkedin.com/company/datbanks" target="_blank" rel="noopener noreferrer">
                    <TextScramble text="DATBANKS" />
                  </a>, aesthetic curation with{" "}
                  <a href="https://www.instagram.com/varsirizz" target="_blank" rel="noopener noreferrer">
                    <TextScramble text="@varsirizz" />
                  </a>{" "}
                  and{" "}
                  <a href="https://pin.it/2hr86RLNb" target="_blank" rel="noopener noreferrer">
                    <TextScramble text="Pinterest Hub" />
                  </a>,
                  <br className="desktop-line-break" />{" "}
                  <span className="solana-shimmer">Commerce graduate</span> from Miranda House (DU){" "}
                  <a href="https://www.linkedin.com/in/varsha-rajput-664240402/" target="_blank" rel="noopener noreferrer">
                    <TextScramble text="and more" />
                  </a>.
                </p>
                <p className="appear" style={{ "--appear-delay": "180ms" } as React.CSSProperties}>
                  Explore verified work proofs below.
                </p>
              </div>
            </div>

            <div className="link-groups">
              {/* Experience Section */}
              <div className="link-divider" aria-hidden="true"></div>
              <section className="link-section appear" aria-labelledby="Experience-title" style={{ "--appear-delay": "215ms" } as React.CSSProperties}>
                <h2 id="Experience-title">Experience</h2>
                <div className="link-row">
                  <div className="names">
                    <a href="https://in.linkedin.com/company/datbanks" target="_blank" rel="noopener noreferrer">
                      <TextScramble text="DATBANKS" />
                    </a>
                  </div>
                  <div className="dates"><span>AI Infrastructure Intern</span></div>
                  <div className="names">
                    <a href="https://youtube.com/@kahlawat_fp" target="_blank" rel="noopener noreferrer">
                      <TextScramble text="Kahlawat Channels" />
                    </a>
                  </div>
                  <div className="dates"><span>YouTube Strategist</span></div>
                  <div className="names">
                    <a href="https://www.instagram.com/varsirizz" target="_blank" rel="noopener noreferrer">
                      <TextScramble text="Independent Creator" />
                    </a>
                  </div>
                  <div className="dates"><span>2024 — Present</span></div>
                </div>
              </section>

              {/* Campaigns & Case Studies with Interactive Analytics Popups */}
              <div className="link-divider" aria-hidden="true"></div>
              <section id="campaigns" className="link-section appear" aria-labelledby="Campaigns-title" style={{ "--appear-delay": "245ms" } as React.CSSProperties}>
                <h2 id="Campaigns-title">Verified Proofs of Work (Click to view Analytics)</h2>
                <div className="link-row">
                  {/* Instagram Reels 34.5M Views */}
                  <div className="names">
                    <button
                      type="button"
                      className="clickable-proof-link"
                      onClick={() =>
                        setActiveProof({
                          title: "34.5M+ Instagram Reels Reach",
                          category: "Short-Form Virality & Scripting",
                          metric: "3,45,43,420 Views · 2.24 Cr Viewers · 93% Non-Followers",
                          description:
                            "Engineered viral hook frameworks on Instagram Reels, with top viral reels crossing 31.8M and 1.3M views individually. 93.1% reach driven via algorithmic discovery from non-followers.",
                          imageSrc: "/proofs/WhatsApp Image 2026-10-11 at 00.03.46.jpeg",
                          externalUrl: "https://www.instagram.com/varsirizz",
                        })
                      }
                    >
                      <TextScramble text="Viral Reels Campaign" />
                    </button>
                  </div>
                  <div className="dates"><span>34.5M Views ↗</span></div>

                  {/* YouTube 265K Subs */}
                  <div className="names">
                    <button
                      type="button"
                      className="clickable-proof-link"
                      onClick={() =>
                        setActiveProof({
                          title: "265K+ Subscribers YouTube Ecosystem",
                          category: "Long-Form & Shorts Channel Management",
                          metric: "265,296 Subscribers · 131.6M Views · 5.5M Likes",
                          description:
                            "End-to-end management for high-growth YouTube creator channel (@kahlawat_fp). Structured thumbnail A/B testing, script pacing, and title packaging resulting in 131M+ total views and 64K+ comments.",
                          imageSrc: "/proofs/WhatsApp Image 2026-10-11 at 00.05.19.jpeg",
                          externalUrl: "https://youtube.com/@kahlawat_fp",
                        })
                      }
                    >
                      <TextScramble text="YouTube Flagship (@kahlawat_fp)" />
                    </button>
                  </div>
                  <div className="dates"><span>265K Subs · 131M Views ↗</span></div>

                  {/* Second YouTube Channel 0 to 30K */}
                  <div className="names">
                    <button
                      type="button"
                      className="clickable-proof-link"
                      onClick={() =>
                        setActiveProof({
                          title: "0 to 30K Fast-Track Scaling (@kartikahlawatt)",
                          category: "Audience Niche Strategy",
                          metric: "29,983 Subscribers · 4.0M Views · 183K Likes",
                          description:
                            "Launched second creator channel from zero to 30,000 subscribers by identifying audience engagement trends and scaling short-form viral storytelling.",
                          imageSrc: "/proofs/WhatsApp Image 2026-10-11 at 00.04.44.jpeg",
                          externalUrl: "https://youtube.com/@kartikahlawatt",
                        })
                      }
                    >
                      <TextScramble text="Growth Engine (@kartikahlawatt)" />
                    </button>
                  </div>
                  <div className="dates"><span>30K Subs · 4M Views ↗</span></div>

                  {/* Pinterest 29M Monthly Views */}
                  <div className="names">
                    <button
                      type="button"
                      className="clickable-proof-link"
                      onClick={() =>
                        setActiveProof({
                          title: "Pinterest SEO & Visual Marketing (29M Monthly)",
                          category: "Evergreen Discovery & Curation",
                          metric: "29L Monthly Views · 10K Followers · 9.2M Impressions",
                          description:
                            "Curated aesthetic fashion and visual trend boards on Pinterest (@kahlawattt), driving 2.6M total audience reach, 24.4K pin saves, and evergreen search discovery.",
                          imageSrc: "/proofs/WhatsApp Image 2026-10-10 at 23.33.26 (1).jpeg",
                          externalUrl: "https://pin.it/2hr86RLNb",
                        })
                      }
                    >
                      <TextScramble text="Pinterest Fashion (@kahlawattt)" />
                    </button>
                  </div>
                  <div className="dates"><span>29M Monthly Views ↗</span></div>

                  {/* Pinterest Account 2 - 24M Views */}
                  <div className="names">
                    <button
                      type="button"
                      className="clickable-proof-link"
                      onClick={() =>
                        setActiveProof({
                          title: "Aura Outfitx Pinterest Aesthetic (24M Monthly)",
                          category: "Fashion Moodboards & Creator Hub",
                          metric: "24L Monthly Views · 8.4M Impressions · 30.3K Saves",
                          description:
                            "Managed @auraboutfitx Pinterest hub. Generated 4.1M total audience engagement, 503K top pin impressions, and 30K+ saves through trend-spotting in Gen-Z fashion aesthetic.",
                          imageSrc: "/proofs/WhatsApp Image 2026-10-11 at 00.00.59.jpeg",
                          externalUrl: "https://pin.it/5l4hb20TU",
                        })
                      }
                    >
                      <TextScramble text="Pinterest Hub (@auraboutfitx)" />
                    </button>
                  </div>
                  <div className="dates"><span>24M Monthly Views ↗</span></div>

                  {/* Ahlawat Bros YouTube */}
                  <div className="names">
                    <button
                      type="button"
                      className="clickable-proof-link"
                      onClick={() =>
                        setActiveProof({
                          title: "New Channel Launch (@ahlawatbros)",
                          category: "Multi-Channel Production",
                          metric: "4,424 Subscribers · 167.6K Views · 10.6K Likes",
                          description:
                            "Planned launch content roadmap, YouTube Shorts sequencing, and community engagement for @ahlawatbros collaborative brand.",
                          imageSrc: "/proofs/WhatsApp Image 2026-10-11 at 00.06.27.jpeg",
                          externalUrl: "https://youtube.com/@ahlawatbros",
                        })
                      }
                    >
                      <TextScramble text="Channel Launch (@ahlawatbros)" />
                    </button>
                  </div>
                  <div className="dates"><span>Channel Launch ↗</span></div>

                  {/* DATBANKS B2B */}
                  <div className="names">
                    <a href="https://in.linkedin.com/company/datbanks" target="_blank" rel="noopener noreferrer">
                      <TextScramble text="DATBANKS Enterprise" />
                    </a>
                  </div>
                  <div className="dates"><span>LinkedIn Thought Leadership</span></div>
                </div>
              </section>

              {/* Playbook / Strategy Notes */}
              <div className="link-divider" aria-hidden="true"></div>
              <section className="link-section appear" aria-labelledby="Notes-title" style={{ "--appear-delay": "275ms" } as React.CSSProperties}>
                <h2 id="Notes-title">Playbook</h2>
                <div className="link-row">
                  <div className="names">
                    <a href="/radius">
                      <TextScramble text="The 3-Second Hook" />
                    </a>
                  </div>
                  <div className="dates"><span>Short-form</span></div>
                  <div className="names">
                    <a href="/overconsumption">
                      <TextScramble text="Audience Retention" />
                    </a>
                  </div>
                  <div className="dates"><span>Long-form</span></div>
                </div>
              </section>

              {/* Certifications & Education */}
              <div className="link-divider" aria-hidden="true"></div>
              <section className="link-section appear" aria-labelledby="Education-title" style={{ "--appear-delay": "305ms" } as React.CSSProperties}>
                <h2 id="Education-title">Education & Certifications</h2>
                <div className="link-row">
                  <div className="names">
                    <a href="https://www.mirandahouse.ac.in/" target="_blank" rel="noopener noreferrer">
                      <TextScramble text="Miranda House (DU)" />
                    </a>
                  </div>
                  <div className="dates"><span>B.Com (Honours) — NIRF #1 College</span></div>
                  <div className="names">
                    <a href="https://www.coursera.org/professional-certificates/meta-social-media-marketing" target="_blank" rel="noopener noreferrer">
                      <TextScramble text="Meta Certified Marketing" />
                    </a>
                  </div>
                  <div className="dates"><span>Meta Certification</span></div>
                  <div className="names">
                    <a href="https://skillshop.exceedlms.com/" target="_blank" rel="noopener noreferrer">
                      <TextScramble text="Google Analytics & E-com" />
                    </a>
                  </div>
                  <div className="dates"><span>Google Skillshop</span></div>
                  <div className="names">
                    <a href="https://academy.hubspot.com/courses/content-marketing" target="_blank" rel="noopener noreferrer">
                      <TextScramble text="HubSpot Content Strategy" />
                    </a>
                  </div>
                  <div className="dates"><span>HubSpot Academy</span></div>
                </div>
              </section>

              {/* Connect Section */}
              <div className="link-divider" aria-hidden="true"></div>
              <section className="connect-section appear" aria-labelledby="Connect-title" style={{ "--appear-delay": "335ms" } as React.CSSProperties}>
                <h2 id="Connect-title">Connect & Availability</h2>
                <div className="connect-copy">
                  <p>Immediate joiner available for full-time Content Creator Executive & Social Media Manager positions.</p>
                  <p>
                    The best way to reach me is via email at{" "}
                    <span style={{ whiteSpace: "nowrap" }}>
                      <a href="mailto:varsirizz@gmail.com">
                        <TextScramble text="varsirizz@gmail.com" />
                      </a>
                      <CopyButton text="varsirizz@gmail.com" />
                    </span>{" "}
                    or connect on{" "}
                    <a href="https://www.linkedin.com/in/varsha-rajput-664240402/" target="_blank" rel="noopener noreferrer">
                      <TextScramble text="LinkedIn" />
                    </a>{" "}
                    and call / WhatsApp at{" "}
                    <a href="tel:+918527696902">
                      <TextScramble text="+91 8527696902" />
                    </a>.
                  </p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Interactive Collage of Stickers */}
      <DraggableCollage />

      {/* Footer */}
      <footer className="footer">
        <div className="footer-row">
          <LiveClock />
          <span className="footer-sign is-visible" role="img" aria-label="Signature"></span>
        </div>
      </footer>
    </main>
  );
}
