import SectionHeader from "@/components/SectionHeader";
import VideoPlayerItem from "../components/VideoPlayer";

interface VideoItem {
  format?: string;
  src: string;
  title: string;
  caption?: string;
}

// const VideoPlayerItem = ({ item, className }: { item: VideoItem, className?: string }) => (
//   <VideoPlayer className={`video-player overflow-hidden aspect-video shadow-lg ${className ?? ""}`}>
//     <VideoPlayerContent
//       crossOrigin=""
//       preload="auto"
//       slot="media"
//       src={item.src}
//     />
//     <VideoPlayerControlBar>
//       <VideoPlayerPlayButton />
//       <VideoPlayerSeekBackwardButton className="hidden md:inline-flex" />
//       <VideoPlayerSeekForwardButton className="hidden md:inline-flex" />
//       <VideoPlayerTimeRange />
//       <VideoPlayerTimeDisplay showDuration />
//       <VideoPlayerMuteButton />
//       <VideoPlayerVolumeRange className="hidden md:inline-flex" />
//       <VideoPlayerFullscreenButton />
//     </VideoPlayerControlBar>
//   </VideoPlayer>
// );

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
      src: "/videos/audio/studies-of-the-ancient-macedonians.mp4",
      title: "Studies of the Ancient Macedonians - Студии за Античките Македонци, 1997",
    },
    {
      src: "/videos/audio/the-ylirians.mp4",
      title: "The Ylirians From Bardilis to Gentij - Илирите Од Бардилис до Гентиј, June 12, 1997",
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
      title: "Video of the unveiling of the Alexander the Great monument in Prilep, Macedonia - 2003",
      caption: "The unveiling of the Alexander the Great monument in Prilep, Macedonia - 2003",
    },
    {
      format: "mpg",
      src: "/videos/ON-TV-NOVA-2005.mp4",
      title: "TV NOVA in Strumica, Macedonia - 2005",
      caption: "Strumica, Macedonia, TV NOVA - 2005",
    },
    {
      format: "youtube",
      src: "https://www.youtube.com/embed/BttNSpnJ92k",
      title: "Промовирана книгата „Историјата на античките Македонци“",
    },
    {
      format: "mp4",
      src: "/videos/video0.mp4",
      title: "",
      caption: "TBD"
    },
    {
      format: "mp4",
      src: "/videos/AnticMacedonians.mp4",
      title: "",
      caption: "AnticMacedonians"
    }
  ]

  return (
    <>
    <SectionHeader
      title="MEDIA"
      subtitle="Browse Professor Dr. Nade Proeva's speeches and presentations."
    />

    {/* Content Wrapper */}
    <div className="animate-fade-in sm:mx-20">
      <div className="flex flex-col lg:flex-row justify-center mt-4 items-start gap-20 lg:gap-10">

        {/* Video */}
        <div className="flex flex-col gap-10 mx-auto w-full md:w-4/5 lg:w-1/2">
          <h3 className="text-2xl font-bold text-center text-burgundy-900">VIDEO</h3>
          {/* Items */}
          {videos.map((video, index) => (
            <div
              key={index}
              className="relative w-full flex flex-col"
            >{ video.format === "youtube" ? 
              (
                <iframe
                  className="aspect-video w-full object-cover rounded-lg border-l border-r border-burgundy-700"
                  src={video.src}
                  title={video.title}
                >
                </iframe>
              ) : (
                <>
                <div className="rounded-t-lg p-3 md:p-4 bg-gradient-to-b from-burgundy-700/90 from-50% via-burgundy-700/70 via-70% to-transparent to-100% absolute top-0 left-0 z-10 w-full">
                  <p className="font-droidsans text-white xl:text-lg font-bold mb-1">{video.caption}</p>
                </div>
              
                <VideoPlayerItem
                  src={video.src}
                  className="rounded-lg border-l border-r border-burgundy-700"
                />
                </>
              )
            }
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
                src={audio.src}
                className="border border-burgundy-700 rounded-lg"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
    </>
  )

};

export default Media;