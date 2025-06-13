import { useState } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionHeader from "@/components/SectionHeader";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface Photo {
  type: "image" | "video";
  src: string;
  orientation: "vertical" | "horizontal";
}

const OnSite = () => {
  const [selectedImage, setSelectedImage] = useState<Photo | null>(null);

  const photos: Photo[] = [
    {
      type: "image",
      src: "/images/onsite/0.jpeg",
      orientation: "horizontal"
    },
    {
      type: "image",
      src: "/images/onsite/1.jpeg",
      orientation: "horizontal"
    },
    {
      type: "image",
      src: "/images/onsite/11.jpg",
      orientation: "horizontal"
    },
    {
      type: "image",
      src: "/images/onsite/2.jpg",
      orientation: "horizontal"
    },
    {
      type: "image",
      src: "/images/onsite/4.jpg",
      orientation: "horizontal"
    },
    {
      type: "image",
      src: "/images/onsite/5.jpg",
      orientation: "horizontal"
    },
    {
      type: "image",
      src: "/images/onsite/6.jpg",
      orientation: "horizontal"
    },
    {
      type: "image",
      src: "/images/onsite/7.jpeg",
      orientation: "horizontal"
    },
    {
      type: "image",
      src: "/images/onsite/8.jpg",
      orientation: "horizontal"
    },
    {
      type: "image",
      src: "/images/onsite/13.jpg",
      orientation: "horizontal"
    },
    {
      type: "image",
      src: "/images/onsite/14.jpg",
      orientation: "horizontal"
    },
    {
      type: "image",
      src: "/images/onsite/15.jpg",
      orientation: "horizontal"
    },
    {
      type: "image",
      src: "/images/onsite/7D.jpg",
      orientation: "vertical"
    },
    {
      type: "image",
      src: "/images/onsite/7A.jpg",
      orientation: "vertical"
    },
    {
      type: "image",
      src: "/images/onsite/16.jpg",
      orientation: "vertical"
    },
    {
      type: "image",
      src: "/images/onsite/7C.jpeg",
      orientation: "vertical"
    },
    {
      type: "image",
      src: "/images/onsite/3.jpg",
      orientation: "vertical"
    },
    {
      type: "image",
      src: "/images/onsite/12.jpg",
      orientation: "vertical"
    },
  ];

  // const videos: MediaItem[] = [
  //   {
  //     type: "video",
  //     src: "#",
  //     thumbnail: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05",
  //     title: "Interview on Ancient Macedonian Identity",
  //     caption: "Professor Proeva discusses her research on ancient Macedonian ethnic identity and cultural distinctiveness.",
  //     year: "2015"
  //   },
  //   {
  //     type: "video",
  //     src: "#",
  //     thumbnail: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb",
  //     title: "Documentary: The Macedonian Question",
  //     caption: "A short documentary featuring Professor Proeva's insights on the historical Macedonian question.",
  //     year: "2008"
  //   },
  //   {
  //     type: "video",
  //     src: "#",
  //     thumbnail: "https://images.unsplash.com/photo-1472396961693-142e6e269027",
  //     title: "Lecture on Alexander the Great",
  //     caption: "A recorded lecture on Alexander the Great from a Macedonian historical perspective.",
  //     year: "2016"
  //   }
  // ];

  // const news: MediaItem[] = [
  //   {
  //     type: "image",
  //     src: "/lovable-uploads/2ef56b0a-f180-4990-9f80-6f37c63e77de.png",
  //     title: "Press Coverage",
  //     caption: "Professor Proeva speaking to journalists about her latest research findings on ancient Macedonian civilization.",
  //     year: "1999"
  //   },
  //   {
  //     type: "image",
  //     src: "/lovable-uploads/44b706b2-4703-46fa-bff5-f685fd5cc269.png",
  //     title: "Award Ceremony Coverage",
  //     caption: "Media coverage of Professor Proeva's lecture at the ceremony where she received the State Award for Academic Achievement in History.",
  //     year: "2008"
  //   }
  // ];

  const openLightbox = (image: Photo) => {
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
        title="SHARING HISTORY"
        subtitle="...with her students and foreign visitors interested in Macedonia's archeological past."
      />

      <div className="animate-fade-in">
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          // className="flex flex-wrap gap-6 items-start justify-between align-left"
        >
          {photos.map((photo, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl cursor-pointer transform transition-transform duration-200 hover:scale-105 h-auto"//TODO: fix widths to fit max margins
              onClick={() => openLightbox(photo)}
            >
              <div className="overflow-hidden">
                <img
                  src={photo.src}
                  alt=""
                  className={photo.orientation === "vertical" ? 'object-cover w-full h-[600px]' :
                    'object-cover w-full h-[300px]'
                  }
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <div
            className={
              selectedImage.orientation === "vertical" ? 'w-[600px] bg-white rounded-lg overflow-hidden shadow-2xl' :
              'w-[1000px] bg-white rounded-lg overflow-hidden shadow-2xl'
            }
            // className="max-w-xl w-full bg-white rounded-lg overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <img
                src={selectedImage.src}
                alt=""
                className="w-full h-auto object-fit"
              />
              <Button
                variant="secondary"
                size="icon"
                className="absolute top-4 right-4 rounded-full bg-white/80 hover:bg-burgundy-500 hover:text-white"
                onClick={closeLightbox}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OnSite;
