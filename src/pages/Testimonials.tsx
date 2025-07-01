import SectionHeader from "@/components/SectionHeader";
import { NavigationMenu, NavigationMenuContent, NavigationMenuIndicator, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

interface MediaItem {
  type: "image" | "video";
  src: string;
  thumbnail?: string;
  title: string;
  orientation: "horizontal" | "vertical";
}

const Testimonials = () => {

  const [selectedImage, setSelectedImage] = useState<MediaItem | null>(null);

  const media: MediaItem[] = [
    {
      type: "video",
      src: "/images/memories/nade.mp4",
      title: "Title",
      orientation: "horizontal",
    },
    {
      type: "image",
      src: "/images/memories/intro.png",
      title: "Title",
      orientation: "vertical",
    },
    {
      type: "image",
      src: "/images/memories/bilyana.jpg",
      title: "Title",
      orientation: "vertical",
    },
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
    <>
    <SectionHeader
      title="TESTIMONIALS"
      subtitle="What people had to say about Professor Proeva."
    />

    <div className="animate-fade-in grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {media.map((item, index) => (
        <div 
          key={index}
          className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow cursor-pointer hover-scale"
          onClick={() => openLightbox(item)}
        >
          <div className="aspect-video overflow-hidden">
            {item.type === "video" ? (
              <video
                src={item.src}
                className="w-full h-full object-cover"
                controls
                controlsList="nodownload"
              />
            ) : (
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-full object-cover"
              />
            )}
          </div>
        </div>
      ))}
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
          onClick={(e) => e.stopPropagation()}
        >
          <div className="relative">
            <img
              src={selectedImage.src}
              alt=""
              className="w-full h-auto object-fit"
            />
            <Button
              // variant="secondary"
              // size="icon"
              className="absolute top-4 right-4 rounded-full bg-white/80 hover:bg-burgundy-500 hover:text-white"
              onClick={closeLightbox}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    )}
    </>
  );
};

export default Testimonials;