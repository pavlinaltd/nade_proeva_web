"use client";

import { useState, useRef, useEffect } from "react";
import SectionHeader from "@/components/SectionHeader";
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

/* ─────────────────────────────── types ─────────────────────────────── */

interface VideoItem {
    format?: string;
    src: string;
    title: string;
    caption?: string;
    year?: string;
    thumbnail?: string;
}

interface AudioItem {
    src: string;
    title: string;
    code: string;
}

/* ─────────────────────────────── data ──────────────────────────────── */

const videos: VideoItem[] = [
    {
        format: "mp4",
        src: "/videos/Speech-2004-Prilep.mp4",
        title: "The unveiling of the Alexander the Great monument in Prilep, Macedonia - 2003",
        caption:
            "The unveiling of the Alexander the Great monument in Prilep, Macedonia - 2003",
        year: "2003",
        thumbnail: "/images/thumbnail/video1.png",
    },
    {
        format: "mp4",
        src: "/videos/ON-TV-NOVA-2005.mp4",
        title: "Strumica, Macedonia, TV NOVA - 2005",
        caption: "Strumica, Macedonia, TV NOVA - 2005",
        year: "2005",
        thumbnail: "/images/thumbnail/video2.png",
    },
    {
        format: "youtube",
        src: "https://www.youtube.com/embed/BttNSpnJ92k",
        title: "Промовирана книгата „Историјата на античките Македонци",
        caption: "Промовирана книгата „Историјата на античките Македонци",
        year: "2024",
        thumbnail: "/images/thumbnail/video3.png",
    },
    {
        format: "youtube",
        src: "https://www.youtube.com/embed/ZihWB1FxgqI",
        title: "ЗАСПИЈ АКО МОЖЕШ (08.02.2023) ГОСТИН: НАДЕ ПРОЕВА",
        caption: "ЗАСПИЈ АКО МОЖЕШ (08.02.2023) ГОСТИН: НАДЕ ПРОЕВА",
        year: "2023",
        thumbnail: "/images/thumbnail/video4.png",
    },
    {
        format: "youtube",
        src: "https://www.youtube.com/embed/xH2QAYmX9YM",
        title: "Н ПРОЕВА, КОРЕНИТЕ НИ СЕ СЛОВЕНСКИ 23 04 2015",
        caption: "Н ПРОЕВА, КОРЕНИТЕ НИ СЕ СЛОВЕНСКИ 23 04 2015",
        year: "2015",
        thumbnail: "/images/thumbnail/video5.png",
    },
    {
        format: "mp4",
        src: "/videos/AnticMacedonians.mp4",
        title: "Interview — Macedonian National TV",
        caption: "Interview — Macedonian National TV",
        year: "",
        thumbnail: "/images/thumbnail/video6.png",
    },
];

const mainAudio: AudioItem = {
    src: "https://www.youtube.com/embed/PABGFsmHnhk",
    title: "Historical Focus — Историски Фокус, July 19, 2024",
    code: "A — 001",
};

const audios: AudioItem[] = [
    {
        src: "/videos/audio/footprints-in-time.mp4",
        title: "Footprints in Time — Траги во Времето, May 6, 2018",
        code: "A — 002",
    },
    {
        src: "/videos/audio/from-our-unforgettable-past.mp4",
        title: "From Our Unforgettable Past — Од Нашиот Незаборав, March 3, 2001",
        code: "A — 003",
    },
    {
        src: "/videos/audio/historical-focus-dec-26.mp4",
        title: "Historical Focus — Историски Фокус, December 26, 1998",
        code: "A — 004",
    },
    {
        src: "/videos/audio/studies-of-the-ancient-macedonians.mp4",
        title: "Studies of the Ancient Macedonians — Студии за Античките Македонци, 1997",
        code: "A — 005",
    },
    {
        src: "/videos/audio/the-ylirians.mp4",
        title: "The Ylirians From Bardilis to Gentij — Илирите Од Бардилис до Гентиј, June 12, 1997",
        code: "A — 006",
    },
    {
        src: "/videos/audio/historical-focus-march-23.mp4",
        title: "Historical Focus — Историски Фокус, March 23, 1996",
        code: "A — 007",
    },
    {
        src: "/videos/audio/traditions-and-currents.mp4",
        title: "Traditions and Currents — Традиции и Текови, March 12, 1991",
        code: "A — 008",
    },
];

/* ─────────────────────── VideoPlayerItem ───────────────────────────── */

const VideoPlayerItem = ({
    src,
    className,
}: {
    src: string;
    className?: string;
}) => (
    <VideoPlayer
        className={`video-player overflow-hidden aspect-video shadow-lg ${className ?? ""}`}
    >
        <VideoPlayerContent
            crossOrigin=""
            preload="auto"
            slot="media"
            src={src}
        />
        <VideoPlayerControlBar>
            <VideoPlayerPlayButton />
            <VideoPlayerSeekBackwardButton className="hidden xl:inline-flex" />
            <VideoPlayerSeekForwardButton className="hidden xl:inline-flex" />
            <VideoPlayerTimeRange />
            <VideoPlayerTimeDisplay showDuration />
            <VideoPlayerMuteButton />
            <VideoPlayerVolumeRange className="hidden md:inline-flex" />
            <VideoPlayerFullscreenButton />
        </VideoPlayerControlBar>
    </VideoPlayer>
);

/* ─────────────────────── Record disc ───────────────────────────────── */

const RecordDisc = ({ spinning }: { spinning: boolean }) => (
    <div
        className="relative w-28 h-28 rounded-full bg-[#3a3a3a] border-2 border-[#222] flex items-center justify-center mx-auto mb-2.5"
        style={{ animation: spinning ? "spin 4s linear infinite" : "none" }}
    >
        {[0, 8, 16, 24].map((inset) => (
            <div
                key={inset}
                className="absolute rounded-full border border-[#6e6e6e]"
                style={{ inset }}
            />
        ))}
        <div className="relative z-10 w-11 h-11 rounded-full bg-[#8B1A1A] flex flex-col items-center justify-center">
            <div className="w-1.5 h-1.5 rounded-full bg-[#dfddd9] mb-0.5" />
            <span className="text-[6px] text-[#f7f3ee] tracking-wide text-center leading-tight">
                MAC
            </span>
        </div>
    </div>
);

/* ══════════════════════════════ PAGE ═══════════════════════════════════ */

export default function Media() {
    // Video: track active index; player always visible (first video shown on load)
    const [activeVideoIdx, setActiveVideoIdx] = useState(0);

    // Audio: null = mainAudio selected; player always visible once a record is picked
    // Start with null so mainAudio is selected and shown by default
    const [activeAudioIdx, setActiveAudioIdx] = useState<number | null>(0);
    const [isAudioPlaying, setIsAudioPlaying] = useState(false);
    const filmstripRef = useRef<HTMLDivElement>(null);
    const [filmstripWidth, setFilmstripWidth] = useState<number | null>(null);

    const selectedVideo = videos[activeVideoIdx];
    const selectedAudio =
        activeAudioIdx === null ? mainAudio : audios[activeAudioIdx];

    /* Clicking a film frame immediately switches the player to that video */
    const handleSelectVideo = (idx: number) => {
        setActiveVideoIdx(idx);
    };

    /* Clicking a record immediately switches the audio player to that track */
    const handleSelectRecord = (idx: number | null) => {
        setActiveAudioIdx(idx);
        setIsAudioPlaying(false);
    };
    useEffect(() => {
        if (filmstripRef.current) {
            setFilmstripWidth(filmstripRef.current.offsetWidth);
        }
    }, []);

    return (
        <>
            <div className=" mb-4 pt-3 text-center lg:mx-20">
                <h2 className="text-2xl uppercase lg:text-3xl font-bold font-vollkornsc text-burgundy-900">
                    Video
                </h2>
            </div>
            {/* ── CINEMA / VIDEO SECTION ─────────────────────────────────── */}
            <section className="animate-fade-in">
                {/* Section label */}
                <div className="flex items-center gap-3 px-6 mb-5">
                    <div className="flex-1 h-px bg-[#8B1A1A]" />
                    <span className="text-[10px] text-[#8B1A1A] font-mono">
                        scroll →
                    </span>
                </div>

                {/* Film strip */}
                <div className="flex justify-center px-6">
                    <div
                        className="overflow-x-auto pb-3 w-full max-w-6xl"
                        style={{
                            scrollbarWidth: "thin",
                            scrollbarColor: "#8B1A1A #e8e0d0",
                        }}
                    >
                        <div
                            ref={filmstripRef}
                            className="flex bg-[#cdcfd1] rounded-sm w-full"
                            style={{ padding: "10px 0" }}
                        >
                            <div className="flex gap-10 px-1 items-center overflow-x-auto">
                                {videos.map((v, i) => (
                                    <button
                                        key={i}
                                        onClick={() => handleSelectVideo(i)}
                                        className="w-44 flex-shrink-0 relative cursor-pointer group focus:outline-none"
                                    >
                                        <div
                                            className={`bg-[#3e3b3b] h-28 overflow-hidden flex items-center justify-center border transition-all duration-200
                      ${activeVideoIdx === i ? "border-[#C8962A] border-2" : "border-[#333] group-hover:border-[#C8962A]"}`}
                                            style={
                                                v.thumbnail
                                                    ? {
                                                          backgroundImage: `url(${v.thumbnail})`,
                                                          backgroundSize:
                                                              "cover",
                                                          backgroundPosition:
                                                              "center",
                                                      }
                                                    : {}
                                            }
                                        >
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent pointer-events-none" />
                                            <span className="absolute top-1.5 left-1.5 text-[9px] text-[#C8962A] font-mono tracking-wide">
                                                V —{" "}
                                                {String(i + 1).padStart(3, "0")}
                                            </span>
                                            <div className="w-7 h-7 rounded-full border border-[#C8962A]/80 flex items-center justify-center z-10">
                                                <div
                                                    style={{
                                                        width: 0,
                                                        height: 0,
                                                        borderTop:
                                                            "5px solid transparent",
                                                        borderBottom:
                                                            "5px solid transparent",
                                                        borderLeft:
                                                            "9px solid #C8962A",
                                                        marginLeft: 2,
                                                    }}
                                                />
                                            </div>
                                            <div className="absolute bottom-1.5 left-1.5 right-1.5 text-left">
                                                {v.year && (
                                                    <div className="text-[9px] text-[#C8962A] font-mono">
                                                        {v.year}
                                                    </div>
                                                )}
                                                <div className="text-[10px] text-[#e8e0d0] leading-tight mt-0.5 line-clamp-2">
                                                    {v.caption || v.title}
                                                </div>
                                            </div>
                                        </div>
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                {/* Info bar (no play button — player is always shown below) */}
                <div className="mt-3 flex justify-center px-6">
                    <div className="bg-[#cdcfd1] rounded px-4 py-3 w-full max-w-6xl">
                        <div className="text-[9px] text-[#000000] tracking-[2px] uppercase font-mono mb-1">
                            V — {String(activeVideoIdx + 1).padStart(3, "0")}
                            {selectedVideo.year
                                ? ` · ${selectedVideo.year}`
                                : ""}
                        </div>
                        <div className="text-sm text-[#000000] font-medium mb-0.5">
                            {selectedVideo.caption || selectedVideo.title}
                        </div>
                        <div className="text-xs text-[#000000] italic leading-relaxed line-clamp-1">
                            {selectedVideo.title}
                        </div>
                    </div>
                </div>

                {/* ── Video player — always visible, consistent size ── */}
                <div className="mx-6 mt-4 flex justify-center">
                    {/* Fixed max-width so all videos are the same size regardless of screen */}
                    <div className="w-full max-w-2xl">
                        {selectedVideo.format === "youtube" ? (
                            <iframe
                                key={selectedVideo.src}
                                className="aspect-video w-full rounded-lg border border-[#C8962A]/40"
                                src={selectedVideo.src}
                                title={selectedVideo.title}
                                allowFullScreen
                            />
                        ) : (
                            <VideoPlayerItem
                                key={selectedVideo.src}
                                src={selectedVideo.src}
                                className="rounded-lg border border-[#C8962A]/40"
                            />
                        )}
                    </div>
                </div>
            </section>
            <div className=" mb-4 pt-9 text-center lg:mx-20">
                <h2 className="text-2xl uppercase lg:text-3xl font-bold font-vollkornsc text-burgundy-900">
                    Audio
                </h2>
            </div>
            {/* ── CINEMA / VIDEO SECTION ─────────────────────────────────── */}
            <section className="animate-fade-in">
                {/* Section label */}
                <div className="flex items-center gap-3 px-6 mb-5">
                    <div className="flex-1 h-px bg-[#8B1A1A]" />
                    <span className="text-[10px] text-[#8B1A1A] font-mono">
                        scroll →
                    </span>
                </div>

                {/* Record shelf */}
                <div className="flex px-6 justify-center">
                    <div
                        className="flex gap-5 overflow-x-auto bg-[#cdcfd1] rounded-sm py-4 px-4 w-full max-w-6xl"
                        style={{
                            scrollbarWidth: "thin",
                            scrollbarColor: "#8B1A1A #e8e0d0",
                        }}
                    >
                        {/* Audio files */}
                        {audios.map((a, i) => (
                            <button
                                key={i}
                                onClick={() => handleSelectRecord(i)}
                                className="flex-shrink-0 w-32 text-center focus:outline-none group"
                            >
                                <div className="text-[9px] text-[#000000] font-mono tracking-wide mb-1">
                                    {a.code}
                                </div>
                                <RecordDisc
                                    spinning={
                                        activeAudioIdx === i && isAudioPlaying
                                    }
                                />
                                <div
                                    className={`text-[11px] leading-tight mb-1 transition-colors line-clamp-3
                ${activeAudioIdx === i ? "text-[#000000]" : "text-[#000000] group-hover:text-[#C8962A]"}`}
                                >
                                    {a.title}
                                </div>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Now listening info bar */}
                <div className="mt-3 flex justify-center px-6">
                    <div className="bg-[#cdcfd1] rounded px-4 pt-4 pb-4 w-full max-w-6xl">
                        <div className="text-[9px] text-[#000000] tracking-[2px] uppercase font-mono mb-2">
                            Now Playing
                        </div>
                        <div className="text-sm text-[#000000] font-medium mb-1">
                            {selectedAudio.code}
                        </div>
                        <div className="text-xs text-[#000000] italic leading-relaxed line-clamp-2">
                            {selectedAudio.title}
                        </div>
                    </div>
                </div>

                {/* ── Audio player — separate bar ── */}
                <div className="mt-3 mx-6">
                    <div className=" rounded px-4 py-4">
                        {activeAudioIdx === null ? (
                            <div
                                className="w-full overflow-hidden rounded"
                                style={{ height: 38 }}
                            >
                                <iframe
                                    key={mainAudio.src}
                                    className="w-full"
                                    style={{ height: 120, marginTop: -82 }}
                                    src={`${mainAudio.src}?autoplay=0`}
                                    title={mainAudio.title}
                                />
                            </div>
                        ) : (
                            <audio
                                key={selectedAudio.src}
                                src={selectedAudio.src}
                                controls
                                className="w-full rounded"
                                style={{
                                    accentColor: "#c0b6b6",
                                    colorScheme: "dark",
                                }}
                                onPlay={() => setIsAudioPlaying(true)}
                                onPause={() => setIsAudioPlaying(false)}
                                onEnded={() => setIsAudioPlaying(false)}
                            />
                        )}
                    </div>
                </div>
            </section>

            <style>{`
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
      `}</style>
        </>
    );
}
