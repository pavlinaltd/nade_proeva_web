"use client";

import { useState, useEffect } from "react";
import { X } from "lucide-react";
import {
    VideoPlayer,
    VideoPlayerContent,
    VideoPlayerControlBar,
    VideoPlayerPlayButton,
    VideoPlayerTimeRange,
    VideoPlayerMuteButton,
    VideoPlayerFullscreenButton,
} from "@/components/ui/shadcn-io/video-player";

const MODAL_VIDEO_WIDTH = 920;

export function FilmWithPoster() {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        if (!isOpen) return;

        document.body.style.overflow = "hidden";

        const onKeyDown = (e) => {
            if (e.key === "Escape") setIsOpen(false);
        };
        window.addEventListener("keydown", onKeyDown);

        return () => {
            document.body.style.overflow = "";
            window.removeEventListener("keydown", onKeyDown);
        };
    }, [isOpen]);

    return (
        <>
            {/* Thumbnail */}
            <div className="flex flex-col mx-auto"></div>
            <div
                onClick={() => setIsOpen(true)}
                role="button"
                tabIndex={0}
                aria-label="Play film"
                className="relative rounded-lg overflow-hidden cursor-pointer mx-auto"
            >
                <VideoPlayer className="video-player pointer-events-none">
                    <VideoPlayerContent
                        crossOrigin=""
                        preload="auto"
                        slot="media"
                        src="/videos/Homepage.mp4"
                        poster="/images/thumbnail/poster_final.jpg"
                    />
                    <VideoPlayerControlBar>
                        <VideoPlayerPlayButton />
                        <VideoPlayerTimeRange />
                        <VideoPlayerMuteButton />
                        <VideoPlayerFullscreenButton />
                    </VideoPlayerControlBar>
                </VideoPlayer>
                <div className="absolute inset-0" />
            </div>

            {/* Modal */}
            {isOpen && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 overflow-y-auto"
                    onClick={() => setIsOpen(false)}
                >
                    <div
                        style={{ width: MODAL_VIDEO_WIDTH }}
                        className="relative my-auto"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            type="button"
                            onClick={() => setIsOpen(false)}
                            aria-label="Close video"
                            className="absolute -top-12 right-0 flex items-center justify-center w-10 h-10 rounded-full bg-black/60 text-white hover:bg-black/80 transition-colors shadow-lg"
                        >
                            <X className="w-6 h-6" strokeWidth={2.5} />
                        </button>
                        <VideoPlayer className="video-player rounded-lg overflow-hidden">
                            <VideoPlayerContent
                                crossOrigin=""
                                preload="auto"
                                slot="media"
                                src="/videos/Homepage.mp4"
                                poster="/images/thumbnail/poster_final.jpg"
                                autoPlay
                            />
                            <VideoPlayerControlBar>
                                <VideoPlayerPlayButton />
                                <VideoPlayerTimeRange />
                                <VideoPlayerMuteButton />
                                <VideoPlayerFullscreenButton />
                            </VideoPlayerControlBar>
                        </VideoPlayer>
                    </div>
                </div>
            )}
        </>
    );
}
export default FilmWithPoster;
