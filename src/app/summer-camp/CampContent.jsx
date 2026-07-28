import React, { useState } from "react";

/**
 * CourseContentPage
 * ------------------
 * Layout (per provided reference doc):
 *   1. Hero video clip — "A quest for knowledge and discovery"
 *   2. Five-day program strip (Day 1 – Day 5), each with its own image
 *   3. Podcast tile — single image that links out to a podcast
 *   4. Two lesson videos, side by side (Lesson 1 / Lesson 2)
 *   5. Testimonials grid
 *
 * All real content (video sources, images, copy, links) is left as
 * clearly-marked placeholders — swap them out wherever you see
 * "TODO" / placeholder props.
 *
 * Fully responsive: 5-col -> 2-col -> 1-col grids depending on
 * viewport, no external CSS/Tailwind dependency required.
 */

// ---- Placeholder data -------------------------------------------------
// Replace these arrays/objects with your real content.

const DAYS = [
    { id: 1, label: "Day 1", image: null },
    { id: 2, label: "Day 2", image: null },
    { id: 3, label: "Day 3", image: null },
    { id: 4, label: "Day 4", image: null },
    { id: 5, label: "Day 5", image: null },
];

const LESSONS = [
    { id: 1, label: "Lesson 1", videoSrc: null, poster: null },
    { id: 2, label: "Lesson 2", videoSrc: null, poster: null },
];

const TESTIMONIALS = [
    { id: 1, quote: "", name: "", role: "", avatar: null },
    { id: 2, quote: "", name: "", role: "", avatar: null },
    { id: 3, quote: "", name: "", role: "", avatar: null },
    { id: 4, quote: "", name: "", role: "", avatar: null },
];

export default function CampContent() {
    const [activeDay, setActiveDay] = useState(1);

    return (
        <div className="ccp-page">
            <style>{`
        .ccp-page {
          --ink: #1b2430;
          --ink-soft: #4b5768;
          --paper: #faf8f4;
          --card: #ffffff;
          --accent: #c2703d;
          --accent-soft: #f0dfce;
          --line: #e6e0d6;
          --radius: 14px;
          --maxw: 1180px;

          background: var(--paper);
          color: var(--ink);
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Inter, sans-serif;
          line-height: 1.5;
        }

        .ccp-container {
          max-width: var(--maxw);
          margin: 0 auto;
          padding: 0 20px;
        }

        .ccp-section {
          padding: 48px 0;
        }

        .ccp-section + .ccp-section {
          border-top: 1px solid var(--line);
        }

        .ccp-eyebrow {
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--accent);
          margin: 0 0 8px;
        }

        .ccp-heading {
          font-size: clamp(22px, 3vw, 32px);
          font-weight: 700;
          margin: 0 0 28px;
          letter-spacing: -0.01em;
        }

        /* ---- Hero video ---- */
        .ccp-hero-media {
          position: relative;
          width: 100%;
          aspect-ratio: 16 / 9;
          border-radius: var(--radius);
          background: #0f1620;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .ccp-hero-media video,
        .ccp-hero-media img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .ccp-placeholder-tag {
          color: #cfd6de;
          font-size: 14px;
          font-weight: 500;
          border: 1px dashed #4b5768;
          padding: 10px 16px;
          border-radius: 8px;
        }

        .ccp-hero-caption {
          margin-top: 18px;
          font-size: clamp(18px, 2.4vw, 26px);
          font-weight: 600;
          text-align: center;
        }

        /* ---- Day grid ---- */
        .ccp-day-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 16px;
        }

        .ccp-day-card {
          background: var(--card);
          border: 1px solid var(--line);
          border-radius: var(--radius);
          overflow: hidden;
          cursor: pointer;
          transition: box-shadow 0.2s ease, transform 0.2s ease, border-color 0.2s ease;
          display: flex;
          flex-direction: column;
        }

        .ccp-day-card:hover {
          box-shadow: 0 8px 20px rgba(27, 36, 48, 0.08);
          transform: translateY(-2px);
        }

        .ccp-day-card.is-active {
          border-color: var(--accent);
          box-shadow: 0 0 0 2px var(--accent-soft);
        }

        .ccp-day-thumb {
          aspect-ratio: 4 / 3;
          background: #efe9df;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .ccp-day-thumb img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .ccp-day-label {
          text-align: center;
          font-weight: 600;
          font-size: 14px;
          padding: 10px 8px;
        }

        /* ---- Podcast tile ---- */
        .ccp-podcast-link {
          display: block;
          max-width: 480px;
          margin: 0 auto;
          border-radius: var(--radius);
          overflow: hidden;
          border: 1px solid var(--line);
          background: var(--card);
          text-decoration: none;
          color: inherit;
          transition: box-shadow 0.2s ease, transform 0.2s ease;
        }

        .ccp-podcast-link:hover {
          box-shadow: 0 10px 24px rgba(27, 36, 48, 0.1);
          transform: translateY(-2px);
        }

        .ccp-podcast-thumb {
          aspect-ratio: 1 / 1;
          background: #efe9df;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .ccp-podcast-thumb img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .ccp-podcast-footer {
          padding: 14px 16px;
          font-size: 14px;
          font-weight: 600;
          text-align: center;
        }

        /* ---- Lessons ---- */
        .ccp-lesson-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
        }

        .ccp-lesson-card {
          background: var(--card);
          border: 1px solid var(--line);
          border-radius: var(--radius);
          overflow: hidden;
        }

        .ccp-lesson-media {
          position: relative;
          width: 100%;
          aspect-ratio: 16 / 9;
          background: #0f1620;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .ccp-lesson-media video {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .ccp-lesson-title {
          padding: 14px 16px;
          font-weight: 600;
          font-size: 15px;
        }

        /* ---- Testimonials ---- */
        .ccp-testimonial-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
        }

        .ccp-testimonial-card {
          background: var(--card);
          border: 1px solid var(--line);
          border-radius: var(--radius);
          padding: 20px;
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .ccp-testimonial-quote {
          font-size: 14px;
          color: var(--ink-soft);
          flex-grow: 1;
          min-height: 60px;
        }

        .ccp-testimonial-person {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .ccp-avatar {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: #efe9df;
          flex-shrink: 0;
          overflow: hidden;
        }

        .ccp-avatar img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .ccp-testimonial-name {
          font-size: 13px;
          font-weight: 700;
        }

        .ccp-testimonial-role {
          font-size: 12px;
          color: var(--ink-soft);
        }

        /* ---- Responsive breakpoints ---- */
        @media (max-width: 900px) {
          .ccp-day-grid {
            grid-template-columns: repeat(3, 1fr);
          }
          .ccp-testimonial-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 640px) {
          .ccp-section {
            padding: 32px 0;
          }
          .ccp-day-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .ccp-lesson-grid {
            grid-template-columns: 1fr;
          }
          .ccp-testimonial-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 420px) {
          .ccp-day-grid {
            grid-template-columns: 1fr 1fr;
          }
        }
      `}</style>

            {/* 1. HERO — video clip */}
            <section className="ccp-section">
                <div className="ccp-container">
                    <p className="ccp-eyebrow">Video clip</p>
                    <div className="ccp-hero-media">
                        {/* TODO: replace with <video controls src={...} poster={...} /> */}
                        <span className="ccp-placeholder-tag">
                            Hero video placeholder
                        </span>
                    </div>
                    <p className="ccp-hero-caption">
                        {/* TODO: replace with real caption text */}A quest for
                        knowledge and discovery
                    </p>
                </div>
            </section>

            {/* 2. FIVE-DAY PROGRAM STRIP */}
            <section className="ccp-section">
                <div className="ccp-container">
                    <h2 className="ccp-heading">Program overview</h2>
                    <div className="ccp-day-grid">
                        {DAYS.map((day) => (
                            <button
                                key={day.id}
                                type="button"
                                className={`ccp-day-card${activeDay === day.id ? " is-active" : ""}`}
                                onClick={() => setActiveDay(day.id)}
                            >
                                <div className="ccp-day-thumb">
                                    {day.image ? (
                                        <img src={day.image} alt={day.label} />
                                    ) : (
                                        <span className="ccp-placeholder-tag">
                                            {day.label} image
                                        </span>
                                    )}
                                </div>
                                <div className="ccp-day-label">{day.label}</div>
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. PODCAST TILE */}
            <section className="ccp-section">
                <div className="ccp-container">
                    {/* TODO: replace href with the real podcast link */}
                    <a
                        className="ccp-podcast-link"
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <div className="ccp-podcast-thumb">
                            {/* TODO: replace with real podcast cover image */}
                            <span className="ccp-placeholder-tag">
                                Podcast image placeholder
                            </span>
                        </div>
                        <div className="ccp-podcast-footer">
                            Listen to the podcast
                        </div>
                    </a>
                </div>
            </section>

            {/* 4. LESSON VIDEOS */}
            <section className="ccp-section">
                <div className="ccp-container">
                    <h2 className="ccp-heading">Lessons</h2>
                    <div className="ccp-lesson-grid">
                        {LESSONS.map((lesson) => (
                            <div key={lesson.id} className="ccp-lesson-card">
                                <div className="ccp-lesson-media">
                                    {/* TODO: replace with <video controls src={lesson.videoSrc} poster={lesson.poster} /> */}
                                    <span className="ccp-placeholder-tag">
                                        {lesson.label} video placeholder
                                    </span>
                                </div>
                                <div className="ccp-lesson-title">
                                    {lesson.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5. TESTIMONIALS */}
            <section className="ccp-section">
                <div className="ccp-container">
                    <h2 className="ccp-heading">Testimonials</h2>
                    <div className="ccp-testimonial-grid">
                        {TESTIMONIALS.map((t) => (
                            <div key={t.id} className="ccp-testimonial-card">
                                <p className="ccp-testimonial-quote">
                                    {t.quote ||
                                        "Testimonial quote placeholder…"}
                                </p>
                                <div className="ccp-testimonial-person">
                                    <div className="ccp-avatar">
                                        {t.avatar && (
                                            <img
                                                src={t.avatar}
                                                alt={t.name || "Avatar"}
                                            />
                                        )}
                                    </div>
                                    <div>
                                        <div className="ccp-testimonial-name">
                                            {t.name || "Name"}
                                        </div>
                                        <div className="ccp-testimonial-role">
                                            {t.role || "Role / Title"}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
