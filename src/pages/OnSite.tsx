import { useState } from "react";
import { Expand, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionHeader from "@/components/SectionHeader";

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
        title="FIELD WORK"
        subtitle="Sharing history with her students and foreign visitors interested in Macedonia's archeological past"
      />

      <div className="animate-fade-in lg:mx-20">
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          // className="flex flex-wrap gap-6 items-start justify-between align-left"
        >
          {photos.map((photo, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-md cursor-pointer transform h-auto"
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
                <span className={`absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-200 bg-black/30`}>
                <Expand
                  className={`text-white drop-shadow-2xl w-14 h-14
                    ${photo.orientation === "vertical" ? "w-14 h-14" : "w-10 h-10"}
                  `}
                />
                </span>
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
              'w-[1000px] bg-white overflow-hidden shadow-2xl'
            }
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage.src}
              alt=""
              className="w-full h-auto object-fit"
            />
            <Button
              variant="secondary"
              size="icon"
              className="absolute top-4 right-4 rounded-full border border-white text-white bg-burgundy-700 hover:bg-burgundy-900"
              onClick={closeLightbox}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default OnSite;
