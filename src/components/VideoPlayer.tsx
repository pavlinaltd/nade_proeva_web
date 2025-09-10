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
  VideoPlayerFullscreenButton
} from "@/components/ui/shadcn-io/video-player";

const VideoPlayerItem = ({ src, className }: { src: string, className?: string }) => (
  <VideoPlayer className={`video-player overflow-hidden aspect-video shadow-lg ${className ?? ""}`}>
    <VideoPlayerContent
      crossOrigin=""
      preload="auto"
      slot="media"
      src={src}
    />
    <VideoPlayerControlBar>
      <VideoPlayerPlayButton />
      <VideoPlayerSeekBackwardButton className="hidden md:inline-flex" />
      <VideoPlayerSeekForwardButton className="hidden md:inline-flex" />
      <VideoPlayerTimeRange />
      <VideoPlayerTimeDisplay showDuration />
      <VideoPlayerMuteButton />
      <VideoPlayerVolumeRange className="hidden md:inline-flex" />
      <VideoPlayerFullscreenButton />
    </VideoPlayerControlBar>
  </VideoPlayer>
);

export default VideoPlayerItem;