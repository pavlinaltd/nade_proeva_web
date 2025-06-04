import SectionHeader from "@/components/SectionHeader";
import { NavigationMenu, NavigationMenuContent, NavigationMenuIndicator, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { X } from "lucide-react";
import { useState } from "react";
import { Button } from "react-day-picker";

interface MediaItem {
  type: "image" | "video";
  src: string;
  thumbnail?: string;
  title: string;
  caption?: string;
  year?: string;
}

const Testimonials = () => {

  const [selectedImage, setSelectedImage] = useState<MediaItem | null>(null);

  const testimonials: MediaItem[] = [
    {
      type: "image",
      src: "/images/testimonials.jpg",
      title: "Title",
      caption: "Caption",
      year: "Year",
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
      title="Testimonials"
      subtitle="What people had to say about Professor Proeva."
    />

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {testimonials.map((testimonial, index) => (
        <div 
          key={index}
          className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow cursor-pointer hover-scale"
          onClick={() => openLightbox(testimonial)}
        >
          <div className="aspect-video overflow-hidden">
            <img
              src={testimonial.src}
              alt={testimonial.title}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-4">
            <h3 className="font-semibold text-memorial-900 mb-1">{testimonial.title}</h3>
            {testimonial.year && <p className="text-sm text-gray-500 mb-2">{testimonial.year}</p>}
            {testimonial.caption && <p className="text-sm text-gray-700">{testimonial.caption}</p>}
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
              // variant="secondary"
              // size="icon"
              className="absolute top-4 right-4 rounded-full bg-white/80 hover:bg-white"
              onClick={closeLightbox}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
          <div className="p-6">
            <h3 className="text-xl font-semibold text-memorial-900 mb-2">
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
    </>
  );
};

export default Testimonials;