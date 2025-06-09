import SectionHeader from "@/components/SectionHeader";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Headphones, Mic, MicVocal } from "lucide-react";

interface VideoItem {
  type: "video";
  src: string;
  title: string;
  caption?: string;
  location?: string;
  year?: string;
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
      type: "video",
      src: "/videos/Speech-2004-Prilep.mp4",
      title: "Interview on Ancient Macedonian Identity",
      caption: "At the unveiling of the Alexander the Great monument",
      location: "Prilep, Macedonia",
      year: "2003"
    },
    {
      type: "video",
      src: "/videos/Speech-2004-Prilep.mp4",
      title: "Interview on Ancient Macedonian Identity",
      caption: "At the unveiling of the Alexander the Great monument",
      location: "Prilep, Macedonia",
      year: "2003"
    },
    {
      type: "video",
      src: "/videos/Speech-2004-Prilep.mp4",
      title: "Interview on Ancient Macedonian Identity",
      caption: "At the unveiling of the Alexander the Great monument",
      location: "Prilep, Macedonia",
      year: "2003"
    },
  ]

  return (
    <>
    <SectionHeader
      title="MEDIA"
      subtitle="Browse Professor Nade Proeva's speeches and presentations."
    />

    {/* Content Wrapper */}
    {/* Header */}
    <div className="flex justify-around mt-10 mb-8">
      <h3 className="text-2xl font-bold text-center text-black">VIDEO</h3>
      <h3 className="text-2xl font-bold text-center text-black">AUDIO</h3>
    </div>
    <hr className="my-8 border-2 rounded-full"/>
    <div className="flex justify-center mt-4 gap-[10rem] items-start">
      {/* Video */}
      <div className="flex flex-col gap-10 w-2/5  rounded-md p-10">
        {/* Items */}
        {videos.map((video, index) => (
          <div
            key={index}
            className="bg-white rounded-lg overflow-hidden shadow-md"
            // had margin 200px, removed for more consistency
          >
            <div className="aspect-[4/3] relative">
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
            </div>
            <div className="p-4">
              <h3 className="font-droidsans font-semibold text-memorial-900 mb-1">{video.caption}</h3>
              {video.year && <p className="text-sm text-gray-500 mb-2">{video.location} - {video.year}</p>}
            </div>
          </div>
        ))}
      </div>

      {/* Audio */}
      <div className="flex flex-col w-2/5 rounded-md p-10">
        {/* Podium */}
        <img
          src="/images/nade-podium.jpg" 
          alt="Podium"
          className="h-[450px] object-cover rounded-lg shadow-md"
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