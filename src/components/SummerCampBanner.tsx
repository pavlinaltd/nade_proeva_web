"use client";

import { useEffect, useState } from "react";

export default function SummerCampBanner() {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        document.body.style.overflow = open ? "hidden" : "";
        return () => {
            document.body.style.overflow = "";
        };
    }, [open]);

    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            if (e.key === "Escape") setOpen(false);
        };
        window.addEventListener("keydown", handler);
        return () => window.removeEventListener("keydown", handler);
    }, []);

    return (
        <>
            {/* ── Announcement Bar ── */}
            <button
                onClick={() => setOpen(true)}
                onMouseEnter={(e) =>
                    (e.currentTarget.style.background = "#a01f1f")
                }
                onMouseLeave={(e) =>
                    (e.currentTarget.style.background = "#8B1A1A")
                }
                style={{
                    width: "100%",
                    background: "#8B1A1A",
                    color: "#fff",
                    border: "none",
                    cursor: "pointer",
                    textAlign: "center",
                    padding: "11px 20px",
                    fontFamily: "'Montserrat', sans-serif",
                    fontSize: 14,
                    fontWeight: 600,
                    letterSpacing: "0.01em",
                    display: "block",
                }}
            >
                <span style={{ color: "#f5c842" }}>Summer Camp 2026</span> —
                Registration Open! Click to learn more →
            </button>

            {/* ── Modal Overlay ── */}
            {open && (
                <div
                    onClick={(e) => {
                        if (e.target === e.currentTarget) setOpen(false);
                    }}
                    style={{
                        position: "fixed",
                        inset: 0,
                        zIndex: 1000,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: 20,
                        background: "rgba(20,10,10,0.55)",
                        backdropFilter: "blur(2px)",
                        animation: "campFadeIn 0.22s ease",
                    }}
                >
                    <div className="camp-modal">
                        {/* Close */}
                        <button
                            onClick={() => setOpen(false)}
                            aria-label="Close"
                            onMouseEnter={(e) =>
                                (e.currentTarget.style.color = "#8B1A1A")
                            }
                            onMouseLeave={(e) =>
                                (e.currentTarget.style.color = "#555")
                            }
                            style={{
                                position: "absolute",
                                top: 14,
                                right: 18,
                                background: "none",
                                border: "none",
                                fontSize: 26,
                                lineHeight: 1,
                                color: "#555",
                                cursor: "pointer",
                                padding: "4px 8px",
                                borderRadius: 4,
                                zIndex: 10,
                            }}
                        >
                            ×
                        </button>

                        {/* Left: Image */}
                        <div className="camp-modal-image">
                            <img
                                src="/images/summer_camp/camp_2026.png"
                                alt="Students at an archaeological dig site near Lake Prespa"
                                style={{
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "cover",
                                    display: "block",
                                }}
                            />
                            <span
                                style={{
                                    position: "absolute",
                                    bottom: 10,
                                    left: 10,
                                    fontSize: 11,
                                    fontStyle: "italic",
                                    color: "rgba(255,255,255,0.75)",
                                }}
                            >
                                © The Nade Proeva Endowment Fund
                            </span>
                        </div>

                        {/* Right: Content */}
                        <div
                            style={{
                                padding: "44px 40px 40px",
                                display: "flex",
                                flexDirection: "column",
                                gap: 18,
                            }}
                        >
                            <h2
                                style={{
                                    fontFamily: "'Montserrat', sans-serif",
                                    fontSize: 26,
                                    fontWeight: 700,
                                    color: "#8B1A1A",
                                    lineHeight: 1.2,
                                    margin: 0,
                                }}
                            >
                                Summer Camp 2026
                            </h2>

                            <div
                                style={{
                                    flex: 1,
                                    fontSize: 16.5,
                                    lineHeight: 1.72,
                                    color: "#222",
                                    fontFamily: "'EB Garamond', Georgia, serif",
                                    textAlign: "justify",
                                }}
                            >
                                <p style={{ margin: 0 }}>
                                    On the shores of Lake Prespa—one of Europe's
                                    ancient waters—this initiative opens history
                                    as a living field of discovery, identity,
                                    and thought.
                                </p>
                                <p style={{ margin: "14px 0 0" }}>
                                    Through work with sources, methods, and
                                    themes from ancient to modern history, this
                                    annual educational program fosters curiosity
                                    and analytical skills. Named in honor of
                                    Professor Dr. Nade Proeva, the camp
                                    continues her legacy of historical
                                    scholarship and cultural study. <br />
                                    Details are announced annually.
                                </p>
                            </div>

                            <a
                                href="mailto:historycamp@nadeproeva.net?subject=Inquiry&body="
                                onMouseEnter={(e) =>
                                    (e.currentTarget.style.background =
                                        "#6e1414")
                                }
                                onMouseLeave={(e) =>
                                    (e.currentTarget.style.background =
                                        "#8B1A1A")
                                }
                                style={{
                                    display: "block",
                                    background: "#8B1A1A",
                                    color: "#fff",
                                    fontFamily: "'Montserrat', sans-serif",
                                    fontSize: 14,
                                    fontWeight: 600,
                                    textAlign: "center",
                                    padding: "16px 24px",
                                    borderRadius: 4,
                                    textDecoration: "none",
                                }}
                            >
                                Inquiries: historycamp@nadeproeva.net
                            </a>
                        </div>
                    </div>
                </div>
            )}

            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400;0,600;1,400&family=Montserrat:wght@600;700&display=swap');

        @keyframes campFadeIn  { from { opacity: 0; } to { opacity: 1; } }
        @keyframes campSlideUp { from { opacity: 0; transform: translateY(28px) scale(0.97); } to { opacity: 1; transform: none; } }

        .camp-modal {
          background: #fff;
          border-radius: 6px;
          max-width: 880px;
          width: 100%;
          display: grid;
          grid-template-columns: 1fr 1fr;
          overflow: hidden;
          box-shadow: 0 24px 80px rgba(0,0,0,0.3);
          position: relative;
          animation: campSlideUp 0.26s cubic-bezier(.22,.68,0,1.2);
          max-height: 90vh;
          overflow-y: auto;
        }

        .camp-modal-image {
          position: relative;
          min-height: 420px;
          overflow: hidden;
        }

        @media (max-width: 640px) {
          .camp-modal {
            grid-template-columns: 1fr;
            max-height: 88vh;
          }
          .camp-modal-image {
            min-height: 220px;
            max-height: 240px;
          }
        }
      `}</style>
        </>
    );
}
