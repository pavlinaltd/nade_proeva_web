"use client";

import { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./banner-camp.css";

const EMAILJS_SERVICE_ID = "service_2o4yeke";
const EMAILJS_TEMPLATE_ID = "template_74ehr9d";
const EMAILJS_PUBLIC_KEY = "cjNm2rVeIdnpFrpeM";
// ──────────────────────────────────────────────────────────────────────────

type FormState = "idle" | "sending" | "success" | "error";

export default function SummerCampBanner() {
    const [formState, setFormState] = useState<FormState>("idle");
    const formRef = useRef<HTMLFormElement>(null);

    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 900 && mobileOpen) {
                setMobileOpen(false);
            }
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [mobileOpen]);
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
            <div className="camp-modal">
                {/* Poster */}
                <div
                    className="camp-modal-image"
                    onClick={() => setMobileOpen(true)}
                >
                    <img
                        src="/images/summer_camp/camp27.jpg"
                        alt="Summer Camp Poster"
                    />

                    {/* Smaller screens */}
                    <button
                        type="button"
                        className="camp-apply-btn"
                        onClick={() => setMobileOpen(true)}
                    >
                        Apply Now
                    </button>
                </div>

                {/* Content + Form */}
                <div
                    className={
                        "camp-modal-content" +
                        (mobileOpen ? " camp-modal-content--open" : "")
                    }
                >
                    {/* Modal - small screens */}
                    <button
                        type="button"
                        className="camp-close-btn"
                        onClick={() => setMobileOpen(false)}
                        aria-label="Close"
                    >
                        &times;
                    </button>
                    {/* Description */}
                    {/* <h2 className="camp-title">Summer Camp 2027</h2> */}

                    <div className="camp-desc">
                        <span className="camp-desc-block">
                            On the shores of Lake Prespa—one of Europe's ancient
                            waters—this initiative opens history as a living
                            field of discovery, identity,<br></br> and thought.
                        </span>
                        <span className="camp-desc-block">
                            Through work with sources, methods, and themes from
                            ancient to modern history, this annual educational
                            program fosters curiosity and analytical skills.
                            Named in honor of Professor Dr. Nade Proeva, the
                            camp continues her legacy of historical scholarship
                            and cultural study. Details are announced annually.
                        </span>
                    </div>

                    {/* Divider */}
                    <hr className="camp-divider" />

                    {/* Form */}
                    <form
                        ref={formRef}
                        onSubmit={handleSubmit}
                        className="camp-form"
                    >
                        <h3 className="form-title">Register Interest</h3>

                        <input
                            name="from_name"
                            type="text"
                            className="camp-input"
                            placeholder="Full Name"
                            required
                            style={inputStyle}
                            onFocus={(e) =>
                                (e.currentTarget.style.borderColor = "#8B1A1A")
                            }
                            onBlur={(e) =>
                                (e.currentTarget.style.borderColor = "#ddd")
                            }
                        />
                        <div className="camp-form-row">
                            <input
                                name="school"
                                type="text"
                                className="camp-input"
                                placeholder="School / University"
                                style={{
                                    ...inputStyle,
                                    width: "auto",
                                    flex: 1,
                                }}
                                onFocus={(e) =>
                                    (e.currentTarget.style.borderColor =
                                        "#8B1A1A")
                                }
                                onBlur={(e) =>
                                    (e.currentTarget.style.borderColor = "#ddd")
                                }
                            />
                            <input
                                name="gpa"
                                type="text"
                                className="camp-input"
                                placeholder="GPA"
                                style={{ ...inputStyle, maxWidth: 120 }}
                                onFocus={(e) =>
                                    (e.currentTarget.style.borderColor =
                                        "#8B1A1A")
                                }
                                onBlur={(e) =>
                                    (e.currentTarget.style.borderColor = "#ddd")
                                }
                            />
                        </div>
                        <input
                            name="reply_to"
                            type="email"
                            className="camp-input"
                            placeholder="Email Address"
                            required
                            style={inputStyle}
                            onFocus={(e) =>
                                (e.currentTarget.style.borderColor = "#8B1A1A")
                            }
                            onBlur={(e) =>
                                (e.currentTarget.style.borderColor = "#ddd")
                            }
                        />
                        <textarea
                            name="message"
                            placeholder="Message / Questions"
                            rows={4}
                            required
                            className="camp-input"
                            style={{
                                ...inputStyle,
                                resize: "vertical",
                            }}
                            onFocus={(e) =>
                                (e.currentTarget.style.borderColor = "#8B1A1A")
                            }
                            onBlur={(e) =>
                                (e.currentTarget.style.borderColor = "#ddd")
                            }
                        />

                        <button
                            type="submit"
                            disabled={formState === "sending"}
                            className="camp-submit"
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
                        >
                            {formState === "sending" ? "Sending..." : "Submit"}
                        </button>

                        {formState === "success" && (
                            <p className="camp-success">
                                ✓ Your message was sent! We'll be in touch soon.
                            </p>
                        )}
                        {formState === "error" && (
                            <p className="camp-error">
                                Something went wrong. Please email us directly
                                at historycamp@nadeproeva.net
                            </p>
                        )}
                    </form>
                </div>
            </div>
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
    boxSizing: "border-box",
};
