"use client";

import { useEffect, useState } from "react";
import {
    VideoPlayer,
    VideoPlayerContent,
    VideoPlayerControlBar,
    VideoPlayerMuteButton,
    VideoPlayerPlayButton,
    VideoPlayerSeekBackwardButton,
    VideoPlayerSeekForwardButton,
    VideoPlayerTimeDisplay,
    VideoPlayerTimeRange,
    VideoPlayerVolumeRange,
    VideoPlayerFullscreenButton,
} from "@/components/ui/shadcn-io/video-player";

export default function MAC_CENTER() {
    const [open, setOpen] = useState(false);

    // Lock scroll when modal open
    useEffect(() => {
        document.body.style.overflow = open ? "hidden" : "";
        return () => {
            document.body.style.overflow = "";
        };
    }, [open]);

    // Close on Escape
    useEffect(() => {
        const handler = (e) => {
            if (e.key === "Escape") setOpen(false);
        };
        window.addEventListener("keydown", handler);
        return () => window.removeEventListener("keydown", handler);
    }, []);

    return (
        <>
            {/* ── Poster Card ── */}
            <div
            // style={{
            //     display: "flex",
            //     flexDirection: "column",
            //     alignItems: "center",
            //     justifyContent: "center",
            //     gap: 16,
            //     width: "100%",
            //     height: "100%",
            // }}
            >
                <VideoPlayer className="video-player w-full max-w-[420px] rounded-lg mx-auto">
                    <VideoPlayerContent
                        crossOrigin=""
                        preload="auto"
                        slot="media"
                        src="/videos/center_vid.mp4"
                        className="object-contain"
                    />
                    <VideoPlayerControlBar>
                        <VideoPlayerPlayButton />
                        <VideoPlayerTimeRange />
                        <VideoPlayerMuteButton />
                        <VideoPlayerFullscreenButton />
                    </VideoPlayerControlBar>
                </VideoPlayer>
                <p style={{ textAlign: "justify" }}>
                    MACEDONIA – Center for Historical Studies "Nade Proeva" is
                    dedicated to advancing the study, preservation, and public
                    understanding of Macedonia's rich historical and cultural
                    heritage. Inspired by the life and scholarship of Professor
                    Nade Proeva, the Center promotes rigorous historical
                    research, supports emerging scholars, encourages
                    international academic collaboration, and develops
                    educational programs that inspire future generations to
                    explore the past through evidence, critical inquiry, and
                    intellectual integrity.
                </p>
            </div>

            {/* ── Modal Overlay ── */}
            {open && (
                <div
                    onClick={(e) => {
                        if (e.target === e.currentTarget) setOpen(false);
                    }}
                >
                    <div className="camp-modal">
                        {/* Close */}

                        {/* ── Left: Image ── */}
                        <div className="camp-modal-image">
                            {/* <img
                                src="/images/summer_camp/camp27.jpg"
                                alt="Camp poster"
                            /> */}
                            <span>© The Nade Proeva Endowment Fund</span>
                        </div>

                        {/* ── Right: Content ── */}
                        <div>
                            {/* Description */}
                            <h2>Macedonian Center</h2>

                            <div>
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
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
