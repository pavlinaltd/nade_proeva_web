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

  const audios = [
    {
      type: "audio",
      src: "/audio/interview.mp3",
      title: "ISTORISKI FOKUS-STUDII NA ANTICHKITE MAKEDONCI",
    },
    {
      type: "audio",
      src: "/audio/interview.mp3",
      title: "TRADICII I TEKOVI - ANTICHKI MAKEDONCI",
    },
    {
      type: "audio",
      src: "/audio/interview.mp3",
      title: "ISTORISKI FOKUS-STUDII NA ANTICHKITE MAKEDONCI",
    },
    {
      type: "audio",
      src: "/audio/interview.mp3",
      title: "TRADICII I TEKOVI - ANTICHKI MAKEDONCI",
    },
    {
      type: "audio",
      src: "/audio/interview.mp3",
      title: "ISTORISKI FOKUS-STUDII NA ANTICHKITE MAKEDONCI",
    },
    {
      type: "audio",
      src: "/audio/interview.mp3",
      title: "TRADICII I TEKOVI - ANTICHKI MAKEDONCI",
    },
    {
      type: "audio",
      src: "/audio/interview.mp3",
      title: "ISTORISKI FOKUS-STUDII NA ANTICHKITE MAKEDONCI",
    },
    {
      type: "audio",
      src: "/audio/interview.mp3",
      title: "TRADICII I TEKOVI - ANTICHKI MAKEDONCI",
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
    {/* Header */}
    <div className="flex justify-around mt-10 mb-8">
      <h3 className="text-2xl font-bold text-center text-burgundy-900">VIDEO</h3>
      <h3 className="text-2xl font-bold text-center text-burgundy-900">AUDIO</h3>
    </div>
    <hr className="my-8 border-2 rounded-full"/>
    <div className="flex justify-center mt-4 items-start gap-10">
      {/* Video */}
      <div className="flex flex-col gap-10 w-1/2 rounded-md">
        {/* Items */}
        {videos.map((video, index) => (
          <div
            key={index}
            className="bg-white rounded-lg overflow-hidden shadow-md"
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
              <h3 className="font-droidsans text-black mb-1">{video.caption}</h3>
            </div>
          </div>
        ))}
      </div>

      {/* Audio */}
      <div className="flex flex-col w-1/2 gap-10 rounded-md">
        {/* Podium */}
        <img
          src="/images/nade-podium.jpg" 
          alt="Podium"
          className="object-cover rounded-lg shadow-md"
        />
        {/* Items */}
        {audios.map((audio, index) => (
          <div 
            key={index} 
            className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow cursor-pointer h-min"
            // onClick={() => openLightbox(photo)}
            // Don't need lightbox for audio
          >
            <div className="p-4">
              <a
                href="/audio/16-04-2014-Religion-of-Antique-Macedonians.mp3"
                title=""
                className="flex gap-4 justify-start items-center hover:underline"
              ><Headphones />
                {audio.title && <p className="text-sm text-gray-700">{audio.title}</p>}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  )

};

export default Media;