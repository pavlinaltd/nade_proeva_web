"use client";

import { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";

// ── Fill these in from your EmailJS dashboard ──────────────────────────────
const EMAILJS_SERVICE_ID = "YOUR_SERVICE_ID";
const EMAILJS_TEMPLATE_ID = "YOUR_TEMPLATE_ID";
const EMAILJS_PUBLIC_KEY = "YOUR_PUBLIC_KEY";
// ──────────────────────────────────────────────────────────────────────────

type FormState = "idle" | "sending" | "success" | "error";

export default function SummerCampBanner() {
    const [open, setOpen] = useState(false);
    const [formState, setFormState] = useState<FormState>("idle");
    const formRef = useRef<HTMLFormElement>(null);

    // Lock scroll when modal open
    useEffect(() => {
        document.body.style.overflow = open ? "hidden" : "";
        return () => {
            document.body.style.overflow = "";
        };
    }, [open]);

    // Close on Escape
    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            if (e.key === "Escape") setOpen(false);
        };
        window.addEventListener("keydown", handler);
        return () => window.removeEventListener("keydown", handler);
    }, []);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!formRef.current) return;
        setFormState("sending");
        try {
            await emailjs.sendForm(
                EMAILJS_SERVICE_ID,
                EMAILJS_TEMPLATE_ID,
                formRef.current,
                EMAILJS_PUBLIC_KEY,
            );
            setFormState("success");
            formRef.current.reset();
        } catch {
            setFormState("error");
        }
    };

    return (
        <>
            {/* ── Poster Card ── */}
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: 16,
                    width: "100%",
                    height: "100%",
                }}
            >
                <h2
                    style={{
                        fontFamily: "'Montserrat', sans-serif",
                        fontSize: 22,
                        fontWeight: 700,
                        color: "#8B1A1A",
                        margin: 0,
                        letterSpacing: "0.02em",
                    }}
                >
                    Summer Camp 2026
                </h2>
                <img
                    src="/images/summer_camp/camp_2026.png"
                    alt="The Nade Proeva History Camp 2026 Poster"
                    onClick={() => setOpen(true)}
                    style={{
                        cursor: "pointer",
                        borderRadius: 8,
                        width: "100%",
                        maxWidth: 420,
                        objectFit: "contain",
                        display: "block",
                        boxShadow: "0 8px 32px rgba(0,0,0,0.18)",
                        transition: "transform 0.2s, box-shadow 0.2s",
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.transform = "scale(1.02)";
                        e.currentTarget.style.boxShadow =
                            "0 16px 48px rgba(0,0,0,0.26)";
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.transform = "scale(1)";
                        e.currentTarget.style.boxShadow =
                            "0 8px 32px rgba(0,0,0,0.18)";
                    }}
                />
                <button
                    onClick={() => setOpen(true)}
                    onMouseEnter={(e) =>
                        (e.currentTarget.style.background = "#6e1414")
                    }
                    onMouseLeave={(e) =>
                        (e.currentTarget.style.background = "#8B1A1A")
                    }
                    style={{
                        background: "#8B1A1A",
                        color: "#fff",
                        border: "none",
                        cursor: "pointer",
                        padding: "12px 36px",
                        borderRadius: 4,
                        fontFamily: "'Montserrat', sans-serif",
                        fontSize: 14,
                        fontWeight: 700,
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                        transition: "background 0.2s",
                        width: "100%",
                        marginTop: "auto",
                    }}
                >
                    Apply
                </button>
            </div>

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
                        padding: "16px",
                        overflowY: "auto",
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

                        {/* ── Left: Image ── */}
                        <div className="camp-modal-image">
                            <img
                                src="/images/summer_camp/camp_2026.png"
                                alt="Camp poster"
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

                        {/* ── Right: Content + Form ── */}
                        <div
                            style={{
                                padding: "44px 40px 40px",
                                display: "flex",
                                flexDirection: "column",
                                gap: 18,
                                overflowY: "auto",
                                maxHeight: "90vh",
                            }}
                        >
                            {/* Description */}
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
                                    fontSize: 15.5,
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
                                <p style={{ margin: "12px 0 0" }}>
                                    Through work with sources, methods, and
                                    themes from ancient to modern history, this
                                    annual educational program fosters curiosity
                                    and analytical skills. Named in honor of
                                    Professor Dr. Nade Proeva, the camp
                                    continues her legacy of historical
                                    scholarship and cultural study. Details are
                                    announced annually.
                                </p>
                            </div>

                            {/* Divider */}
                            <hr
                                style={{
                                    border: "none",
                                    borderTop: "1px solid #e5e5e5",
                                    margin: 0,
                                }}
                            />

                            {/* Form */}
                            <form
                                ref={formRef}
                                onSubmit={handleSubmit}
                                style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: 12,
                                }}
                            >
                                <h3
                                    style={{
                                        fontFamily: "'Montserrat', sans-serif",
                                        fontSize: 15,
                                        fontWeight: 700,
                                        color: "#8B1A1A",
                                        margin: 0,
                                        textTransform: "uppercase",
                                        letterSpacing: "0.06em",
                                    }}
                                >
                                    Register Interest
                                </h3>

                                <input
                                    name="from_name"
                                    type="text"
                                    placeholder="Full Name"
                                    required
                                    style={inputStyle}
                                    onFocus={(e) =>
                                        (e.currentTarget.style.borderColor =
                                            "#8B1A1A")
                                    }
                                    onBlur={(e) =>
                                        (e.currentTarget.style.borderColor =
                                            "#ddd")
                                    }
                                />
                                <input
                                    name="reply_to"
                                    type="email"
                                    placeholder="Email Address"
                                    required
                                    style={inputStyle}
                                    onFocus={(e) =>
                                        (e.currentTarget.style.borderColor =
                                            "#8B1A1A")
                                    }
                                    onBlur={(e) =>
                                        (e.currentTarget.style.borderColor =
                                            "#ddd")
                                    }
                                />
                                <textarea
                                    name="message"
                                    placeholder="Message / Questions"
                                    rows={4}
                                    required
                                    style={{
                                        ...inputStyle,
                                        resize: "vertical",
                                    }}
                                    onFocus={(e) =>
                                        (e.currentTarget.style.borderColor =
                                            "#8B1A1A")
                                    }
                                    onBlur={(e) =>
                                        (e.currentTarget.style.borderColor =
                                            "#ddd")
                                    }
                                />

                                <button
                                    type="submit"
                                    disabled={formState === "sending"}
                                    onMouseEnter={(e) => {
                                        if (formState !== "sending")
                                            e.currentTarget.style.background =
                                                "#6e1414";
                                    }}
                                    onMouseLeave={(e) => {
                                        if (formState !== "sending")
                                            e.currentTarget.style.background =
                                                "#8B1A1A";
                                    }}
                                    style={{
                                        background: "#8B1A1A",
                                        color: "#fff",
                                        border: "none",
                                        cursor:
                                            formState === "sending"
                                                ? "not-allowed"
                                                : "pointer",
                                        padding: "13px 24px",
                                        borderRadius: 4,
                                        fontFamily: "'Montserrat', sans-serif",
                                        fontSize: 14,
                                        fontWeight: 700,
                                        letterSpacing: "0.05em",
                                        opacity:
                                            formState === "sending" ? 0.7 : 1,
                                        transition: "background 0.2s",
                                    }}
                                >
                                    {formState === "sending"
                                        ? "Sending..."
                                        : "Submit"}
                                </button>

                                {formState === "success" && (
                                    <p
                                        style={{
                                            color: "#2e7d32",
                                            fontFamily:
                                                "'Montserrat', sans-serif",
                                            fontSize: 13,
                                            margin: 0,
                                        }}
                                    >
                                        ✓ Your message was sent! We'll be in
                                        touch soon.
                                    </p>
                                )}
                                {formState === "error" && (
                                    <p
                                        style={{
                                            color: "#c62828",
                                            fontFamily:
                                                "'Montserrat', sans-serif",
                                            fontSize: 13,
                                            margin: 0,
                                        }}
                                    >
                                        Something went wrong. Please email us
                                        directly at historycamp@nadeproeva.net
                                    </p>
                                )}
                            </form>
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
                    max-width: 900px;
                    width: 100%;
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    overflow: hidden;
                    box-shadow: 0 24px 80px rgba(0,0,0,0.3);
                    position: relative;
                    animation: campSlideUp 0.26s cubic-bezier(.22,.68,0,1.2);
                    max-height: 90vh;
                }

                .camp-modal-image {
                    position: relative;
                    overflow: hidden;
                    height: 100%;   
                    min-height: 300px;
                }

                .camp-modal-image img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    object-position: center top;
                    display: block;
                }

                @media (max-width: 640px) {
                    .camp-modal {
                        grid-template-columns: 1fr;
                        width: calc(100vw - 32px);
                        max-height: 92vh;
                        overflow-y: auto;
                    }
                    .camp-modal-image {
                        height: auto;
                    }
                    .camp-modal-image img {
                        height: auto;
                        object-fit: contain;   
                    }
                }
            `}</style>
        </>
    );
}

const inputStyle: React.CSSProperties = {
    padding: "10px 14px",
    border: "1px solid #ddd",
    borderRadius: 4,
    fontFamily: "'EB Garamond', Georgia, serif",
    fontSize: 15,
    outline: "none",
    transition: "border-color 0.2s",
    width: "100%",
};
