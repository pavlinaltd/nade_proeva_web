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
  VideoPlayerFullscreenButton
} from "@/components/ui/shadcn-io/video-player";

interface VideoItem {
  format?: string;
  src: string;
  title: string;
  caption?: string;
}

const VideoPlayerItem = ({ item, className }: { item: VideoItem, className?: string }) => (
  <VideoPlayer className={`video-player overflow-hidden shadow-lg outline-none ${className ?? ""}`}>
    <VideoPlayerContent
      crossOrigin=""
      preload="auto"
      slot="media"
      src={item.src}
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

const Media = () => {

  const mainAudio: VideoItem =
  {
    src: "https://www.youtube.com/embed/PABGFsmHnhk",
    title: "Historical Focus - Историски Фокус, July 19, 2024",
  }

  const audios: VideoItem[] = [
    {
      src: "/videos/audio/footprints-in-time.mp4",
      title: "Footprints in Time - Траги во Времето, May 6, 2018",
    },
    {
      src: "/videos/audio/from-our-unforgettable-past.mp4",
      title: "From Our Unforgettable Past - Од Нашиот Незаборав, March 3, 2001",
    },
    {
      src: "/videos/audio/historical-focus-dec-26.mp4",
      title: "Historical Focus - Историски Фокус, December 26, 1998",
    },
    {
      src: "",
      title: "The Ylirians From Bardilis to Gentij - Илирите Од Бардилис до Гентиј, June 12, 1997",
    },
    {
      src: "/videos/audio/studies-of-the-ancient-macedonians.mp4",
      title: "Studies of the Ancient Macedonians - Студии за Античките Македонци, 1997",
    },
    {
      src: "/videos/audio/historical-focus-march-23.mp4",
      title: "Historical Focus - Историски Фокус, March 23, 1996",
    },
    {
      src: "/videos/audio/traditions-and-currents.mp4",
      title: "Traditions and Currents - Традиции и Текови, March 12, 1991",
    },
  ];

  const videos: VideoItem[] = [
    {
      format: "mp4",
      src: "/videos/Speech-2004-Prilep.mp4",
      title: "Interview on Ancient Macedonian Identity",
      caption: "The unveiling of the Alexander the Great monument in Prilep, Macedonia - 2003",
    },
    {
      format: "mpg",
      src: "/videos/ON-TV-NOVA-2005.mp4",
      title: "Interview on Ancient Macedonian Identity",
      caption: "Strumica, Macedonia, TV NOVA - 2005",
    },
  ]

  return (
    <>
    <SectionHeader
      title="MEDIA"
      subtitle="Browse Professor Dr. Nade Proeva's speeches and presentations."
    />

    {/* Content Wrapper */}
    <div className="animate-fade-in">
      <div className="flex flex-col lg:flex-row justify-center mt-4 items-start gap-20 lg:gap-10">
        {/* Video */}
        <div className="flex flex-col gap-10 mx-auto w-full md:w-4/5 lg:w-1/2">
          <h3 className="text-2xl font-bold text-center text-burgundy-900">VIDEO</h3>
          {/* Items */}
          {videos.map((video, index) => (
            <div
              key={index}
            >
              <div className="rounded-t-lg p-4 bg-gradient-to-b from-burgundy-700 via-burgundy-700 to-burgundy-950">
                <p className="font-droidsans text-white mb-1">{video.caption}</p>
              </div>
              <VideoPlayerItem
                className="rounded-b-lg border-l border-r border-burgundy-700"
                item={video}
              />
            </div>
          ))}
        </div>

        {/* Audio */}
        <div className="flex flex-col gap-10 mx-auto w-full md:w-4/5 lg:w-1/2">
          <h3 className="text-2xl font-bold text-center text-burgundy-900">AUDIO</h3>
          <div className="bg-gray-200 rounded-lg overflow-hidden shadow-md">
            <div
              className="aspect-video relative">
                <iframe
                  className="w-full h-full object-cover"
                  src={mainAudio.src}
                  title={mainAudio.title}
                >
                </iframe>
            </div>
          </div>
          <div className="flex flex-col gap-10 rounded-md">
            {/* Items */}
            {audios.map((audio, index) => (
              <VideoPlayerItem
                key={index}
                item={audio}
                className="border border-burgundy-700 rounded-lg"
              />
              // <div
              //   key={index} 
              //   className="bg-burgundy-600 hover:bg-burgundy-700 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer h-min"
              //   // onClick={() => openLightbox(photo)}
              //   // Don't need lightbox for audio
              // >
              //   <div className="p-4">
              //     <a
              //       href='' //{audio.src}
              //       target="_blank"
              //       title=""
              //       className="flex gap-4 items-center"
              //     >
              //       <Headphones className="text-white" />
              //       <div className="text-sm flex flex-row text-white w-full justify-between">
              //         <div className="flex-col">
              //           <p /*className="font-bold"*/>{audio.english}</p>
              //           <p>{audio.original}</p>
              //         </div>
              //         <p className="text-burgundy-200 self-center">{audio.date}</p>
              //       </div>
              //     </a>
              //   </div>
              // </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    </>
  )

};

export default Media;