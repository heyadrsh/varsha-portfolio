import Link from "next/link";
import type { Metadata } from "next";
import ThemeToggle from "@/components/ThemeToggle";
import LiveClock from "@/components/LiveClock";

export const metadata: Metadata = {
  title: "The 3-Second Hook — Varshii ✨",
  description: "Hook architecture, pacing, and retention engineering in viral short-form video.",
};

export default function HookPlaybookPage() {
  return (
    <main className="site">
      <ThemeToggle />
      <section className="intro-section article-page" aria-label="Article">
        <div className="content">
          <nav className="article-index appear" aria-label="Contents" style={{ "--appear-delay": "0ms" } as React.CSSProperties}>
            <h2 className="article-index-title">
              <Link className="article-index-back" aria-label="Back to home" href="/">
                <svg viewBox="-1 -1 12.5 12.224" width="10" height="10" fill="none" aria-hidden="true" overflow="visible">
                  <path d="M 3.592 0 L 6.77 0 C 8.83 0 10.5 1.67 10.5 3.73 L 10.5 3.73 C 10.5 5.79 8.83 7.461 6.77 7.461 L 0 7.461 L 0.138 7.461" stroke="currentColor" strokeWidth="0.88" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M 2.763 10.224 L 0 7.461 L 2.763 4.697" stroke="currentColor" strokeWidth="0.88" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
              001
            </h2>
            <ol className="article-index-list">
              <li><a href="#the-dropoff">The 3-Second Rule</a></li>
              <li><a href="#visual-pacing">Pacing & Cuts</a></li>
              <li><a href="#retention-loop">The Loop Framework</a></li>
            </ol>
          </nav>

          <header className="article-header appear" style={{ "--appear-delay": "0ms" } as React.CSSProperties}>
            <h1 className="article-title">the 3-second hook</h1>
            <p className="article-meta">Playbook · Short-form Video Marketing · 40M+ Views</p>
          </header>

          <article className="article-body">
            <section id="the-dropoff" className="article-section">
              <h2 className="article-subhead">The first 3 seconds define the algorithm</h2>
              <div className="article-prose">
                <p>
                  On Instagram Reels and TikTok, 65% of your audience drops off within the first 2.5 seconds if there isn&apos;t a visual or contextual interruption.
                </p>
                <p>
                  A viral hook isn&apos;t just clickbait text on screen. It is an unanswered question, an unexpected movement, or a pattern interrupt that forces the thumb to stop scrolling.
                </p>
                <blockquote>
                  Stop selling the content in the intro. Deliver value in frame one.
                </blockquote>
              </div>
            </section>

            <section id="visual-pacing" className="article-section">
              <h2 className="article-subhead">Pacing and micro-cuts</h2>
              <div className="article-prose">
                <p>
                  Attention spans are ruthless. Shifting camera angles, subtle zooms every 2–3 seconds, and sound design keep audience retention above 85% through the halfway mark.
                </p>
                <p>
                  When the retention curve stays flat, the algorithm pushes the content to explore feeds and non-followers.
                </p>
              </div>
            </section>

            <section id="retention-loop" className="article-section">
              <h2 className="article-subhead">Seamless end-to-beginning loops</h2>
              <div className="article-prose">
                <p>
                  The highest-performing Reels connect the last sentence smoothly into the first hook phrase. Viewers re-watch without realizing the video restarted, multiplying your watch time metrics.
                </p>
              </div>
            </section>
          </article>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-row">
          <LiveClock />
          <span className="footer-sign is-visible" role="img" aria-label="Signature"></span>
        </div>
      </footer>
    </main>
  );
}
