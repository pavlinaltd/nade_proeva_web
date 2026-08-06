"use client";
import { Expand } from "lucide-react";
import React, { useState } from "react";
import { useSearchParams } from "next/navigation";

import "./camp-content.css";

const DAYS = [
    {
        id: 1,
        label: "Getting to Know Each Other",
        image: "/images/summer_camp/imgs/1.png",
    },
    {
        id: 2,
        label: "Objective and Goals",
        image: "/images/summer_camp/imgs/2.jpg",
    },
    {
        id: 3,
        label: "Lesson in History",
        image: "/images/summer_camp/imgs/3.png",
    },
    { id: 4, label: "The Debate", image: "/images/summer_camp/imgs/4.png" },
    {
        id: 5,
        label: "Interpreting History",
        image: "/images/summer_camp/imgs/5.png",
    },
];
const DAYS2 = [
    { id: 1, image: "/images/summer_camp/imgs/1.png" },
    { id: 2, image: "/images/summer_camp/imgs/2.jpg" },
    { id: 3, image: "/images/summer_camp/imgs/3.png" },
    { id: 4, image: "/images/summer_camp/imgs/4.png" },
    { id: 5, image: "/images/summer_camp/imgs/5.png" },
    { id: 6, image: "/images/summer_camp/imgs/6.jpg" },
    { id: 7, image: "/images/summer_camp/imgs/7.jpg" },
    { id: 8, image: "/images/summer_camp/imgs/8.png" },
];

const LESSONS = [
    {
        id: 1,
        label: "Lesson 1",
        videoSrc: "/images/summer_camp/lessons/lesson1.mov",
        poster: "",
    },
    {
        id: 2,
        label: "Lesson 2",
        videoSrc: "/images/summer_camp/lessons/lesson2.mov",
        poster: "",
    },
];

const TESTIMONIALS = [
    {
        id: 1,
        image: "/images/summer_camp/testimonials/people/1.jpg",
        docURL: "/images/summer_camp/testimonials/test1.docx",
        title: "Nektarija Ilievska",
    },
    {
        id: 2,
        image: "/images/summer_camp/testimonials/people/2.jpg",
        docURL: "/images/summer_camp/testimonials/test2.docx",
        title: "Kirjana Miloshevska",
    },
    {
        id: 3,
        image: "/images/summer_camp/testimonials/people/3.jpg",
        docURL: "/images/summer_camp/testimonials/test3.docx",
        title: "Sofija Gakova",
    },
    {
        id: 4,
        image: "/images/summer_camp/testimonials/people/4.jpg",
        docURL: "/images/summer_camp/testimonials/test4.docx",
        title: "Valentina Spaseska",
    },
    {
        id: 5,
        image: "/images/summer_camp/testimonials/people/5.jpg",
        docURL: "/images/summer_camp/testimonials/test5.docx",
        title: "Atanas Taškoski",
    },
];
const HERO_DOC_THUMBNAIL = "/images/summer_camp/thumbnail.png";
const HERO_DOC_URL = "/images/summer_camp/camp_doc.pdf";

export default function CampContent() {
    const [activeDay, setActiveDay] = useState(1);
    const [isDocModalOpen, setIsDocModalOpen] = useState(false);
    const searchParams = useSearchParams();
    const year = searchParams.get("year") || new Date().getFullYear();
    const [delayOffset, setDelayOffset] = useState(0); // in seconds
    const ANIMATION_DURATION = 50; // matches the 70s in ccp-marquee-scroll
    const STEP_SECONDS = 5;

    const handleManualScroll = (direction: "left" | "right") => {
        setDelayOffset((prev) => {
            let next =
                direction === "right"
                    ? prev + STEP_SECONDS
                    : prev - STEP_SECONDS;
            next =
                ((next % ANIMATION_DURATION) + ANIMATION_DURATION) %
                ANIMATION_DURATION;
            return next;
        });
    };
    return (
        <div className="ccp-page">
            {/* doc + podcast, side by side */}
            <section className="ccp-section">
                <div className="ccp-container">
                    <div className="ccp-vp-grid">
                        {/* doc */}
                        <div className="ccp-vp-video">
                            <div className="ccp-hero-media">
                                <button
                                    type="button"
                                    className="ccp-hero-doc-thumb group relative"
                                    onClick={() => setIsDocModalOpen(true)}
                                    aria-haspopup="dialog"
                                    aria-label="Open document"
                                >
                                    <img
                                        src={HERO_DOC_THUMBNAIL}
                                        alt="Document preview"
                                    />
                                    <span className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-black/30">
                                        <Expand className="text-white drop-shadow-2xl w-10 h-10" />
                                    </span>
                                </button>
                            </div>
                        </div>

                        {/* podcast, simplified */}
                        <div className="ccp-podcast-simple">
                            <div className="ccp-podcast-simple-photo">
                                <img
                                    src="/images/summer_camp/podcast/1.jpg"
                                    alt="Podcast recording session"
                                />
                                <span
                                    className="ccp-podcast-simple-icon"
                                    aria-hidden="true"
                                >
                                    <svg
                                        viewBox="0 0 24 24"
                                        width="20"
                                        height="20"
                                    >
                                        <path
                                            fill="currentColor"
                                            d="M12 3a4 4 0 0 0-4 4v5a4 4 0 0 0 8 0V7a4 4 0 0 0-4-4zm7 9a1 1 0 0 0-2 0 5 5 0 0 1-10 0 1 1 0 0 0-2 0 7 7 0 0 0 6 6.92V21H9a1 1 0 0 0 0 2h6a1 1 0 0 0 0-2h-2v-2.08A7 7 0 0 0 19 12z"
                                        />
                                    </svg>
                                </span>
                            </div>

                            <a
                                className="ccp-podcast-simple-btn"
                                href="https://youtu.be/AtBbixSiAQU?si=xn3gT7aDobLQVClY"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Listen to the podcast
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            {/* day grid */}
            <section className="ccp-section">
                <div className="ccp-container">
                    <h2 className="ccp-heading">
                        A Quest for Knowledge and Discovery
                    </h2>
                    <div className="ccp-day-grid">
                        {DAYS.map((day) => (
                            <button
                                key={day.id}
                                type="button"
                                className={`ccp-day-card${activeDay === day.id ? " is-active" : ""}`}
                                onClick={() => setActiveDay(day.id)}
                            >
                                <div className="ccp-day-images">
                                    <img src={day.image} alt={day.label} />
                                </div>
                                <div className="ccp-day-label">{day.label}</div>
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* gallery carousal */}
            <section className="ccp-section">
                <div className="ccp-container">
                    <h2 className="ccp-heading">Gallery</h2>
                    <div className="ccp-carousel-stage">
                        <button
                            type="button"
                            className="ccp-carousel-btn ccp-carousel-btn--left"
                            onClick={() => handleManualScroll("left")}
                            aria-label="Previous"
                        >
                            &#8249;
                        </button>
                        <div
                            className="ccp-carousel-track"
                            style={{ animationDelay: `-${delayOffset}s` }}
                        >
                            {[...DAYS2, ...DAYS2].map((day, i) => (
                                <div
                                    key={`${day.id}-${i}`}
                                    className="ccp-carousel-item"
                                >
                                    <img src={day.image} />
                                </div>
                            ))}
                        </div>
                        <button
                            type="button"
                            className="ccp-carousel-btn ccp-carousel-btn--right"
                            onClick={() => handleManualScroll("right")}
                            aria-label="Next"
                        >
                            &#8250;
                        </button>
                    </div>
                </div>
            </section>

            {/* lessons */}
            <section className="ccp-section">
                <div className="ccp-container">
                    <h2 className="ccp-heading">Lessons</h2>
                    <div className="ccp-lesson-grid">
                        {LESSONS.map((lesson) => (
                            <div key={lesson.id} className="ccp-lesson-card">
                                <div className="ccp-lesson-media">
                                    <video
                                        controls
                                        preload="metadata"
                                        poster={lesson.poster}
                                        src={lesson.videoSrc}
                                    >
                                        {/* TODO: add <source src="" type="video/mp4" /> if using multiple formats */}
                                    </video>
                                </div>
                                <div className="ccp-lesson-title">
                                    {lesson.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="ccp-section">
                <div className="ccp-container">
                    <h2 className="ccp-heading ccp-heading-center">
                        Testimonials
                    </h2>
                    <div className="ccp-testimonial-grid">
                        {TESTIMONIALS.map((t) => (
                            <div key={t.id} className="ccp-testimonial-card">
                                <a
                                    className="ccp-testimonial-photo"
                                    href={t.docURL || "#"}
                                    target="_blank"
                                >
                                    <img
                                        src={t.image}
                                        alt={t.title || "Customer"}
                                    />
                                </a>
                                <div className="ccp-testimonial-body">
                                    <div className="ccp-testimonial-title">
                                        {t.title || "Name"}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            {isDocModalOpen && (
                <div
                    className="ccp-doc-modal-overlay"
                    role="dialog"
                    aria-modal="true"
                    onClick={() => setIsDocModalOpen(false)}
                >
                    <div
                        className="ccp-doc-modal-content"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            type="button"
                            className="ccp-doc-modal-close"
                            onClick={() => setIsDocModalOpen(false)}
                            aria-label="Close document"
                        >
                            &times;
                        </button>
                        <iframe
                            className="ccp-doc-modal-iframe"
                            src={HERO_DOC_URL}
                            title="Document"
                        />
                        <a
                            className="ccp-doc-modal-fallback"
                            href={HERO_DOC_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Open in new tab
                        </a>
                    </div>
                </div>
            )}
        </div>
    );
}
