import SectionHeader from "@/components/SectionHeader";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

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
    // {
    //   type: "audio",
    //   src: "/audio/interview.mp3",
    //   title: "Interview with Professor Proeva",
    //   caption: "Discussing her research on ancient Macedonian identity.",
    //   year: "2015"
    // }
  ];

  const videos: VideoItem[] = [
    {
      type: "video",
      src: "/videos/Speech-2004-Prilep.mp4",
      title: "Interview on Ancient Macedonian Identity",
      caption: "At the unveiling of the Alexander the Great monument",
      location: "Prilep, Macedonia",
      year: "2003"
    }
  ]

  return (
    <>
    <SectionHeader
      title="Media"
      subtitle="Subtitle"
    />

    {/* Content Wrapper */}
    <div className="flex justify-center mt-4 gap-[10rem] items-start">
      {/* Audio */}
      <div className="flex flex-col w-2/5 bg-gradient-to-b from-burgundy-700 to-burgundy-900 rounded-md p-10">
        {/* Header */}
        <h3 className="text-3xl font-bold text-center text-white">Audio</h3>
        <hr className="my-8 border-2 rounded-full"/>
        {/* Podium */}
        <img
          src="/images/nade-podium.jpg" 
          alt="Podium"
          className="w-[300] h-[500] rounded-lg shadow-md"
        />
        {/* Items */}
        {audios.map((photo, index) => (
          <div 
            key={index} 
            className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow cursor-pointer hover-scale"
            // onClick={() => openLightbox(photo)}
            // Don't need lightbox for audio
          >
            <div className="aspect-video overflow-hidden">
              <img 
                src={photo.src} 
                alt={photo.title} 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4">
              {photo.year && <p className="text-sm text-gray-500 mb-2">{photo.year}</p>}
              {photo.caption && <p className="text-sm text-gray-700">{photo.caption}</p>}
            </div>
          </div>
        ))}
      </div>

      {/* Video */}
      <div className="flex flex-col w-2/5 bg-gradient-to-b from-burgundy-700 to-burgundy-900 rounded-md p-10">
        {/* Header */}
        <h3 className="text-3xl font-bold text-center text-white">Video</h3>
        <hr className="my-8 border-2 rounded-full"/>
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
    </div>
    </>
  )

};

export default Media;