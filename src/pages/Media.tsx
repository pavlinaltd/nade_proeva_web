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

    <Tabs defaultValue="audio" className="w-full mb-8">
      <TabsList className="grid w-full grid-cols-2 mb-6">
        <TabsTrigger value="audio">Audio</TabsTrigger>
        <TabsTrigger value="video">Video</TabsTrigger>
      </TabsList>
      
      <TabsContent value="audio" className="animate-fade-in">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Podium */}
          <img 
            src="/images/podium.webp" 
            alt="Podium"
            className="w-full h-auto rounded-lg shadow-md mb-6"
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
      </TabsContent>
      
      <TabsContent value="video" className="animate-fade-in">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((video, index) => (
            <div
              key={index} 
              className="bg-white rounded-lg overflow-hidden shadow-md"
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
                {/* FIXME: h3 needs better styling */}
                <h3 className="font-playfair font-semibold text-memorial-900 mb-1">{video.caption}</h3>
                {video.caption && <p className="text-sm text-gray-700 mb-2">{video.caption}</p>}
                {video.year && <p className="text-sm text-gray-500 mb-2">{video.location} - {video.year}</p>}
              </div>
            </div>
          ))}
        </div>
      </TabsContent>
    </Tabs>
    </>
  )

};

export default Media;