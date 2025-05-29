import { useState } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionHeader from "@/components/SectionHeader";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface MediaItem {
  type: "image" | "video";
  src: string;
  thumbnail?: string;
  title: string;
  caption?: string;
  year?: string;
}

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<MediaItem | null>(null);

  const photos: MediaItem[] = [
    {
      type: "image",
      src: "/lovable-uploads/2ef56b0a-f180-4990-9f80-6f37c63e77de.png",
      title: "Press Conference",
      caption: "Professor Proeva speaking at a press conference discussing her research on ancient Macedonian history, circa 1998.",
      year: "1998"
    },
    {
      type: "image",
      src: "/lovable-uploads/5d1835c6-1681-427e-aa7d-25a3e8bb20a7.png",
      title: "Academic Seminar",
      caption: "Professor Proeva presenting her findings at an academic seminar on Macedonian cultural heritage at the University of Skopje.",
      year: "2000"
    },
    {
      type: "image",
      src: "/lovable-uploads/660bb366-35d6-4b6f-bc49-ae9c81a462ec.png",
      title: "Media Interview",
      caption: "Professor Proeva during a media interview about her groundbreaking research on ancient Macedonian identity, with the Macedonian flag visible.",
      year: "2002"
    },
    {
      type: "image",
      src: "/lovable-uploads/b91fd4ae-3268-4a67-9c4d-9c2bc84bdb77.png",
      title: "Conference Lecture",
      caption: "Professor Proeva delivering a lecture at an international conference on ancient history in Athens, highlighting her expertise in classical studies.",
      year: "1995"
    },
    {
      type: "image",
      src: "/lovable-uploads/44b706b2-4703-46fa-bff5-f685fd5cc269.png",
      title: "Public Lecture",
      caption: "Professor Proeva giving a public lecture on the history of ancient Macedonia to a large audience at the National Library in Skopje.",
      year: "2007"
    }
  ];

  const videos: MediaItem[] = [
    {
      type: "video",
      src: "#",
      thumbnail: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05",
      title: "Interview on Ancient Macedonian Identity",
      caption: "Professor Proeva discusses her research on ancient Macedonian ethnic identity and cultural distinctiveness.",
      year: "2015"
    },
    {
      type: "video",
      src: "#",
      thumbnail: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb",
      title: "Documentary: The Macedonian Question",
      caption: "A short documentary featuring Professor Proeva's insights on the historical Macedonian question.",
      year: "2008"
    },
    {
      type: "video",
      src: "#",
      thumbnail: "https://images.unsplash.com/photo-1472396961693-142e6e269027",
      title: "Lecture on Alexander the Great",
      caption: "A recorded lecture on Alexander the Great from a Macedonian historical perspective.",
      year: "2016"
    }
  ];

  const news: MediaItem[] = [
    {
      type: "image",
      src: "/lovable-uploads/2ef56b0a-f180-4990-9f80-6f37c63e77de.png",
      title: "Press Coverage",
      caption: "Professor Proeva speaking to journalists about her latest research findings on ancient Macedonian civilization.",
      year: "1999"
    },
    {
      type: "image",
      src: "/lovable-uploads/44b706b2-4703-46fa-bff5-f685fd5cc269.png",
      title: "Award Ceremony Coverage",
      caption: "Media coverage of Professor Proeva's lecture at the ceremony where she received the State Award for Academic Achievement in History.",
      year: "2008"
    }
  ];

  const openLightbox = (image: MediaItem) => {
    setSelectedImage(image);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = "auto";
  };

  return (
    <div>
      <SectionHeader
        title="Locations"
        subtitle="Explore photos, videos, and media related to Professor Proeva's academic career and public appearances."
      />

      <Tabs defaultValue="photos" className="w-full mb-8">
        <TabsList className="grid w-full grid-cols-3 mb-6">
          <TabsTrigger value="photos">Photographs</TabsTrigger>
          <TabsTrigger value="videos">Videos</TabsTrigger>
          <TabsTrigger value="news">Media Coverage</TabsTrigger>
        </TabsList>
        
        <TabsContent value="photos" className="animate-fade-in">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {photos.map((photo, index) => (
              <div 
                key={index} 
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow cursor-pointer hover-scale"
                onClick={() => openLightbox(photo)}
              >
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={photo.src} 
                    alt={photo.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-playfair font-semibold text-memorial-900 mb-1">{photo.title}</h3>
                  {photo.year && <p className="text-sm text-gray-500 mb-2">{photo.year}</p>}
                  {photo.caption && <p className="text-sm text-gray-700">{photo.caption}</p>}
                </div>
              </div>
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="videos" className="animate-fade-in">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {videos.map((video, index) => (
              <div 
                key={index} 
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow cursor-pointer hover-scale"
              >
                <div className="aspect-video relative overflow-hidden">
                  <img 
                    src={video.thumbnail || video.src} 
                    alt={video.title} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-white/80 flex items-center justify-center">
                      <div className="w-0 h-0 border-t-8 border-t-transparent border-l-16 border-l-memorial-700 border-b-8 border-b-transparent ml-1"></div>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-playfair font-semibold text-memorial-900 mb-1">{video.title}</h3>
                  {video.year && <p className="text-sm text-gray-500 mb-2">{video.year}</p>}
                  {video.caption && <p className="text-sm text-gray-700">{video.caption}</p>}
                </div>
              </div>
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="news" className="animate-fade-in">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {news.map((item, index) => (
              <div 
                key={index} 
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow cursor-pointer hover-scale"
                onClick={() => item.type === "image" ? openLightbox(item) : null}
              >
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={item.thumbnail || item.src} 
                    alt={item.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-playfair font-semibold text-memorial-900 mb-1">{item.title}</h3>
                  {item.year && <p className="text-sm text-gray-500 mb-2">{item.year}</p>}
                  {item.caption && <p className="text-sm text-gray-700">{item.caption}</p>}
                </div>
              </div>
            ))}
          </div>
        </TabsContent>
      </Tabs>

      {/* Lightbox */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <div 
            className="max-w-4xl w-full bg-white rounded-lg overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <img 
                src={selectedImage.src} 
                alt={selectedImage.title} 
                className="w-full h-auto"
              />
              <Button 
                variant="secondary"
                size="icon"
                className="absolute top-4 right-4 rounded-full bg-white/80 hover:bg-white"
                onClick={closeLightbox}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-playfair font-semibold text-memorial-900 mb-2">
                {selectedImage.title}
              </h3>
              {selectedImage.year && (
                <p className="text-sm text-gray-500 mb-3">{selectedImage.year}</p>
              )}
              {selectedImage.caption && (
                <p className="text-gray-700">{selectedImage.caption}</p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
