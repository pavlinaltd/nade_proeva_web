"use client";

import {
  VideoPlayer,
  VideoPlayerContent,
  VideoPlayerControlBar,
  VideoPlayerMuteButton,
  VideoPlayerPlayButton,
  VideoPlayerFullscreenButton,
  VideoPlayerTimeRange,
} from "@/components/ui/shadcn-io/video-player";
import { useRouter } from "next/navigation";

export default function MAC_CENTER() {
  const router = useRouter();

  return (
    <div className="flex flex-col h-full gap-6">
      {/* Video */}
      <VideoPlayer className="video-player w-full max-w-[420px] rounded-lg mx-auto">
        <VideoPlayerContent
          crossOrigin=""
          preload="auto"
          slot="media"
          src="/videos/center_vid.mp4"
          className="object-contain"
          autoPlay
          muted
          loop
          playsInline
        />
        <VideoPlayerControlBar>
          <VideoPlayerPlayButton />
          <VideoPlayerTimeRange />
          <VideoPlayerMuteButton />
          <VideoPlayerFullscreenButton />
        </VideoPlayerControlBar>
      </VideoPlayer>

      <div className="flex-1 flex flex-col justify-between p-2">
        <p
          style={{
            textAlign: "justify",
            fontSize: "15px",
            lineHeight: "1.5",
            marginTop: "10px",
          }}
        >
          MACEDONICA – Center for Historical Studies "Nade Proeva" is dedicated
          to advancing the study, preservation, and public understanding of
          Macedonia's rich historical and cultural heritage. Inspired by the
          life and scholarship of Professor Dr. Nade Proeva, the Center promotes
          rigorous historical research, supports emerging scholars, encourages
          international academic collaboration, and develops educational
          programs that inspire future generations to explore the past through
          evidence, critical inquiry, and intellectual integrity.
        </p>

        <button
          onClick={() => router.push("/mac-center")}
          style={{ backgroundColor: "#8B1A1A", marginTop: "40px" }}
          className="block w-full text-center text-white font-bold py-3 rounded hover:opacity-90 transition-opacity"
        >
          Visit the Center
        </button>
      </div>
    </div>
  );
}
