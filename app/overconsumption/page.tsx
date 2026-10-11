import Link from "next/link";
import type { Metadata } from "next";
import ThemeToggle from "@/components/ThemeToggle";
import LiveClock from "@/components/LiveClock";

export const metadata: Metadata = {
  title: "Audience Retention & Long-Form Growth — Varshii ✨",
  description: "Scaling YouTube channels from zero to 265K+ subscribers using data-backed retention strategies.",
};

export default function LongFormGrowthPage() {
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
              002
            </h2>
            <ol className="article-index-list">
              <li><a href="#thumbnail-ctr">CTR & Packaging</a></li>
              <li><a href="#retention-graph">Retention Dips</a></li>
              <li><a href="#scaling-framework">The 0 to 30K Blueprint</a></li>
            </ol>
          </nav>

          <header className="article-header appear" style={{ "--appear-delay": "0ms" } as React.CSSProperties}>
            <h1 className="article-title">audience retention</h1>
            <p className="article-meta">Playbook · YouTube Organic Scaling · 265K+ Community</p>
          </header>

          <article className="article-body">
            <section id="thumbnail-ctr" className="article-section">
              <h2 className="article-subhead">Packaging: Title & Thumbnail synergy</h2>
              <div className="article-prose">
                <p>
                  Thumbnails don&apos;t exist to summarize the video. They exist to trigger curiosity. A high Click-Through Rate (CTR &gt; 10%) combined with high retention is the golden formula on YouTube.
                </p>
                <p>
                  A/B testing color contrasts, emotional facial expressions, and keeping thumbnail text under 4 words consistently yielded 30+ videos with 1M+ views.
                </p>
              </div>
            </section>

            <section id="retention-graph" className="article-section">
              <h2 className="article-subhead">Reading the YouTube Studio retention curve</h2>
              <div className="article-prose">
                <p>
                  Every dip in the retention graph tells a story: boring B-roll, overly long explanations, or predictable jokes. By analyzing weekly drop-offs, we cut the fluff before publishing.
                </p>
                <blockquote>
                  Retention isn&apos;t about keeping everyone — it&apos;s about never losing the right viewer.
                </blockquote>
              </div>
            </section>

            <section id="scaling-framework" className="article-section">
              <h2 className="article-subhead">The 0 to 30K repeatable framework</h2>
              <div className="article-prose">
                <p>
                  Taking a brand new channel from 0 to 30K subscribers proved that viral success isn&apos;t luck. It&apos;s competitor gap mining, consistent format testing, and delivering on the promise of the title.
                </p>
              </div>
            </section>
          </article>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-row">
          <LiveClock />
          <span className="footer-sign is-visible" role="img" aria-label="Varsha Signature">
            <img src="/sign-light.webp" alt="Varsha Rajput" className="sign-light-only" draggable={false} />
            <img src="/sign-dark.webp" alt="Varsha Rajput" className="sign-dark-only" draggable={false} />
          </span>
        </div>
      </footer>
    </main>
  );
}
