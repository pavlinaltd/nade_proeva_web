"use client";

import { useState, useRef, useEffect } from "react";
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
  date: string;
}

// data
const videos: VideoItem[] = [
  {
    format: "mp4",
    src: "/videos/Speech-2004-Prilep.mp4",
    title:
      "The unveiling of the Alexander the Great monument in Prilep, Macedonia - 2003",
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
  title: "Historical Focus — Историски Фокус",
  code: "A — 001",
  date: "July 19, 2024",
};

const audios: AudioItem[] = [
  {
    src: "/videos/audio/footprints-in-time.mp4",
    title: "Footprints in Time — Траги во Времето",
    code: "A — 001",
    date: "May 6, 2018",
  },
  {
    src: "/videos/audio/from-our-unforgettable-past.mp4",
    title: "From Our Unforgettable Past — Од Нашиот Незаборав",
    code: "A — 002",
    date: "March 3, 2001",
  },
  {
    src: "/videos/audio/historical-focus-dec-26.mp4",
    title: "Historical Focus — Историски Фокус",
    code: "A — 003",
    date: "December 26, 1998",
  },
  {
    src: "/videos/audio/studies-of-the-ancient-macedonians.mp4",
    title: "Studies of the Ancient Macedonians — Студии за Античките Македонци",
    code: "A — 004",
    date: "1997",
  },
  {
    src: "/videos/audio/the-ylirians.mp4",
    title:
      "The Ylirians From Bardilis to Gentij — Илирите Од Бардилис до Гентиј",
    code: "A — 005",
    date: "June 12, 1997",
  },
  {
    src: "/videos/audio/historical-focus-march-23.mp4",
    title: "Historical Focus — Историски Фокус",
    code: "A — 006",
    date: "March 23, 1996",
  },
  {
    src: "/videos/audio/traditions-and-currents.mp4",
    title: "Traditions and Currents — Традиции и Текови",
    code: "A — 007",
    date: "March 12, 1991",
  },
];

// videoplayer
const VideoPlayerItem = ({
  src,
  className,
  autoPlay,
}: {
  src: string;
  className?: string;
  autoPlay?: boolean;
}) => (
  <VideoPlayer
    className={`video-player w-full overflow-hidden aspect-video shadow-lg ${className ?? ""}`}
  >
    <VideoPlayerContent
      crossOrigin=""
      preload="auto"
      slot="media"
      src={src}
      autoPlay={autoPlay}
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

// record disc
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

// page
export default function Media() {
  const [activeVideoIdx, setActiveVideoIdx] = useState(0);
  const [playingMobileIdx, setPlayingMobileIdx] = useState<number | null>(null);
  const [activeAudioIdx, setActiveAudioIdx] = useState<number | null>(0);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const filmstripRef = useRef<HTMLDivElement>(null);
  const [filmstripWidth, setFilmstripWidth] = useState<number | null>(null);

  const selectedVideo = videos[activeVideoIdx];
  const selectedAudio =
    activeAudioIdx === null ? mainAudio : audios[activeAudioIdx];

  const handleSelectVideo = (idx: number) => {
    setActiveVideoIdx(idx);
  };

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
      <div className="text-center lg:mx-20">
        {/* video */}

        {/* video - content */}
        <section className="animate-fade-in">
          {/* desktop view */}
          <div className="hidden lg:block">
            <div className="mx-auto w-full max-w-6xl px-1">
              {/* Film strip */}
              <div
                className="overflow-x-auto pb-3 w-full"
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
                  <div className="flex gap-3 px-3 items-center">
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
                                  backgroundSize: "cover",
                                  backgroundPosition: "center",
                                }
                              : {}
                          }
                        >
                          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent pointer-events-none" />
                          <span className="absolute top-1.5 left-1.5 text-[9px] text-[#C8962A] font-mono tracking-wide">
                            V — {String(i + 1).padStart(3, "0")}
                          </span>
                          <div className="w-7 h-7 rounded-full border border-[#C8962A]/80 flex items-center justify-center z-10">
                            <div
                              style={{
                                width: 0,
                                height: 0,
                                borderTop: "5px solid transparent",
                                borderBottom: "5px solid transparent",
                                borderLeft: "9px solid #C8962A",
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

              {/* video player*/}
              <div className="mt-10">
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
                    className="rounded-lg border border-[#C8962A]/40 w-full"
                  />
                )}
              </div>

              {/* Info bar */}
              <div className="mt-10 bg-[#cdcfd1] rounded px-3 py-3">
                <div className="text-[9px] text-[#000000] tracking-[2px] uppercase font-mono mb-1">
                  V — {String(activeVideoIdx + 1).padStart(3, "0")}
                  {selectedVideo.year ? ` · ${selectedVideo.year}` : ""}
                </div>
                <div className="text-sm text-[#000000] font-medium mb-0.5">
                  {selectedVideo.caption || selectedVideo.title}
                </div>
                <div className="text-xs text-[#000000] italic leading-relaxed line-clamp-1">
                  {selectedVideo.title}
                </div>
              </div>
            </div>
          </div>

          {/*mobile view - stacked */}
          <div className="lg:hidden flex flex-col gap-10 px-6 pt-5">
            {videos.map((v, i) => (
              <div key={i} className="bg-[#cdcfd1] rounded-sm p-3">
                {/* title */}
                <div className="text-[13px] text-[#000000] tracking-[2px] uppercase font-mono mb-3">
                  V — {String(i + 1).padStart(3, "0")}
                  {v.year ? ` · ${v.year}` : ""}
                </div>
                <div className="text-[13px] text-[#000000] font-medium mb-4">
                  {v.caption || v.title}
                </div>

                {/* thumbnail + video player */}
                <div className="aspect-video w-full overflow-hidden relative border border-[#333] rounded-lg">
                  {playingMobileIdx === i ? (
                    v.format === "youtube" ? (
                      <iframe
                        key={v.src}
                        className="aspect-video w-full h-full"
                        src={`${v.src}?autoplay=1`}
                        title={v.title}
                        allowFullScreen
                        allow="autoplay; fullscreen"
                      />
                    ) : (
                      <VideoPlayerItem
                        key={v.src}
                        src={v.src}
                        className="h-full"
                        autoPlay
                      />
                    )
                  ) : (
                    <button
                      onClick={() => setPlayingMobileIdx(i)}
                      className="w-full h-full relative cursor-pointer group focus:outline-none block"
                      style={
                        v.thumbnail
                          ? {
                              backgroundImage: `url(${v.thumbnail})`,
                              backgroundSize: "cover",
                              backgroundPosition: "center",
                            }
                          : {}
                      }
                    >
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent pointer-events-none" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-10 h-10 rounded-full border border-[#C8962A]/80 flex items-center justify-center z-10">
                          <div
                            style={{
                              width: 0,
                              height: 0,
                              borderTop: "6px solid transparent",
                              borderBottom: "6px solid transparent",
                              borderLeft: "11px solid #C8962A",
                              marginLeft: 2,
                            }}
                          />
                        </div>
                      </div>
                    </button>
                  )}
                </div>

                {/* info bar */}
                <div className="text-[13px] text-[#000000] italic leading-relaxed mt-4">
                  {v.title}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* audio */}

        {/* audio - content */}
        <section className="animate-fade-in pt-10">
          {/* desktop view */}
          <div className="hidden lg:block">
            <div className="mx-auto w-full max-w-6xl px-1">
              {/* record shelf */}
              <div
                className="flex gap-5 items-start justify-start xl:justify-center overflow-x-auto bg-[#cdcfd1] rounded-sm py-4 px-3 w-full"
                style={{
                  scrollbarWidth: "thin",
                  scrollbarColor: "#8B1A1A #e8e0d0",
                }}
              >
                {audios.map((a, i) => (
                  <button
                    key={i}
                    onClick={() => handleSelectRecord(i)}
                    className="flex-shrink-0 w-32 grid grid-rows-[16px_auto_1fr_16px] items-start justify-items-center text-center focus:outline-none group"
                  >
                    <div className="text-[9px] text-[#000000] font-mono tracking-wide leading-none">
                      {a.code}
                    </div>
                    <RecordDisc
                      spinning={activeAudioIdx === i && isAudioPlaying}
                    />
                    <div
                      className={`text-[11px] leading-tight line-clamp-3
            		${activeAudioIdx === i ? "text-[#000000]" : "text-[#000000] group-hover:text-[#C8962A]"}`}
                    >
                      {a.title}
                    </div>
                    <div className="text-[9px] text-[#000000] font-mono tracking-wide leading-none">
                      {a.date}
                    </div>
                  </button>
                ))}
              </div>
              {/* info bar */}
              <div className="mt-10 bg-[#cdcfd1] rounded px-3 py-3">
                <div className="text-[9px] text-[#000000] tracking-[2px] uppercase font-mono mb-1">
                  Now Playing
                </div>
                <div className="text-sm text-[#000000] font-medium mb-0.5">
                  {selectedAudio.code}
                </div>
                <div className="text-xs text-[#000000] italic leading-relaxed line-clamp-1">
                  {selectedAudio.title}
                </div>
              </div>

              {/* audio player */}
              <div className="mt-10">
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
          </div>

          {/*mobile view - stacked */}
          <div className="lg:hidden px-6">
            {/* stacked audios */}
            <div className="flex flex-col gap-3">
              {audios.map((a, i) => (
                <button
                  key={i}
                  onClick={() => handleSelectRecord(i)}
                  className="flex items-center gap-3 text-center bg-[#cdcfd1] rounded-sm p-4 focus:outline-none group"
                >
                  <div
                    className="w-8 h-8 rounded-full bg-[#8B1A1A] flex-shrink-0 flex items-center justify-center"
                    style={{
                      animation:
                        activeAudioIdx === i && isAudioPlaying
                          ? "spin 4s linear infinite"
                          : "none",
                    }}
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-[#dfddd9]" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-[13px] text-[#000000] font-mono tracking-wide mb-0.5">
                      {a.code}
                    </div>
                    <div
                      className={`text-[13px] leading-tight font-medium line-clamp-2 ${
                        activeAudioIdx === i
                          ? "text-[#8B1A1A] font-medium"
                          : "text-[#000000]"
                      }`}
                    >
                      {a.title}
                    </div>
                    <div className="text-[11px] text-[#000000] font-mono tracking-wide mb-0.5">
                      {a.date}
                    </div>
                  </div>
                </button>
              ))}
            </div>

            {/* info bar */}
            <div className="mt-10 bg-[#cdcfd1] rounded px-3 py-3">
              <div className="text-[9px] text-[#000000] tracking-[2px] uppercase font-mono mb-1">
                Now Playing
              </div>
              <div className="text-sm text-[#000000] font-medium mb-0.5">
                {selectedAudio.code}
              </div>
              <div className="text-xs text-[#000000] italic leading-relaxed line-clamp-1">
                {selectedAudio.title}
              </div>
            </div>

            {/* audio player */}

            <div className="mt-10">
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

        <style>
          {`
          @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
            `}
        </style>
      </div>
    </>
  );
}
