import SectionHeader from "@/components/SectionHeader";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Headphones, Mic, MicVocal } from "lucide-react";

interface VideoItem {
  type: "localVideo" | "youtube";
  format: string;
  src: string;
  title: string;
  caption?: string;
}

const Media = () => {

  const mainAudio =
  {
    type: "audio",
    src: "https://www.youtube.com/embed/PABGFsmHnhk",
    english: "Historical Focus",
    original: "Историски Фокус",
    date: "July 19, 2024",
  }

  const audios = [
    {
      type: "audio",
      src: "https://www.youtube.com/embed/oKxR2oMCB9g",
      english: "Footprints in Time",
      original: "Траги во Времето",
      date: "May 6, 2018",
    },
    {
      type: "audio",
      src: "https://www.youtube.com/embed/eQgpEdjkIXg",
      english: "From Our Unforgettable Past",
      original: "Од Нашиот Незаборав",
      date: "March 3, 2001",
    },
    {
      type: "audio",
      src: "https://www.youtube.com/embed/ipM0NKh6434",
      english: "Historical Focus",
      original: "Историски Фокус",
      date: "December 26, 1998",
    },
    {
      type: "audio",
      src: "",
      english: "The Ylirians From Bardilis to Gentij",
      original: "Илирите Од Бардилис до Гентиј",
      date: "June 12, 1997",
    },
    {
      type: "audio",
      src: "https://www.youtube.com/embed/vt61kJYEQog",
      english: "Studies of the Ancient Macedonians",
      original: "Студии за Античките Македонци",
      date: "1997",
    },
    {
      type: "audio",
      src: "https://www.youtube.com/embed/lM6Ebzbn2q8",
      english: "Historical Focus",
      original: "Историски Фокус",
      date: "March 23, 1996",
    },
    {
      type: "audio",
      src: "",
      english: "Historical Focus",
      original: "Историски Фокус",
      date: "March 23, 1996",
    },
    {
      type: "audio",
      src: "https://www.youtube.com/embed/a4KN2nO9czc",
      english: "Traditions and Currents",
      original: "Традиции и Текови",
      date: "March 12, 1991",
    },
  ];

  const videos: VideoItem[] = [
    {
      type: "localVideo",
      format: "mp4",
      src: "/videos/Speech-2004-Prilep.mp4",
      title: "Interview on Ancient Macedonian Identity",
      caption: "The unveiling of the Alexander the Great monument in Prilep, Macedonia - 2003",
    },
    {
      type: "youtube",
      format: "",
      src: "https://www.youtube.com/embed/XQ4uFrdFAUM",
      title: "Interview on Ancient Macedonian Identity",
      caption: "Strumica, Macedonia - 2005",
    },
    {
      type: "localVideo",
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
      {/* Header */}
      <div className="flex justify-around mt-10 mb-8">
        <h3 className="text-2xl font-bold text-center text-burgundy-900">VIDEO</h3>
        <h3 className="text-2xl font-bold text-center text-burgundy-900">AUDIO</h3>
      </div>
      <div className="flex justify-center mt-4 items-start gap-10">
        {/* Video */}
        <div className="flex flex-col gap-10 w-1/2 rounded-md">
          {/* Items */}
          {videos.map((video, index) => (
            <div
              key={index}
              className="bg-gray-200 rounded-lg overflow-hidden shadow-md"
            >
              <div className="aspect-video relative">
                {video.type === "youtube" ? (
                  <iframe
                    className="w-full h-full object-cover"
                    src={video.src}
                    title={video.title}
                  >
                  </iframe>
                ) : (
                <video
                  className="w-full h-full object-cover"
                  controls
                  controlsList="nodownload"
                >
                  <source
                    src={video.src}
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
                )}
              </div>
              <div className="p-4">
                <p className="font-droidsans text-black mb-1">{video.caption}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Audio */}
        <div className="flex flex-col gap-10">
          <div className="bg-gray-200 rounded-lg overflow-hidden shadow-md">
            <div
              className="aspect-video relative">
                <iframe
                  className="w-full h-full object-cover"
                  src={mainAudio.src}
                  title={`${mainAudio.english} - ${mainAudio.original}, ${mainAudio.date}`}
                >
                </iframe>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 rounded-md">
            {/* Items */}
            {audios.map((audio, index) => (
              <div
                key={index}
                className="bg-gray-200 rounded-lg overflow-hidden shadow-md"
              >
                <div
                  key={index}
                  className="aspect-video relative">
                    <iframe
                      className="w-full h-full object-cover"
                      src={audio.src}
                      title={`${audio.english} - ${audio.original}, ${audio.date}`}
                    >
                    </iframe>
                </div>
              </div>
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