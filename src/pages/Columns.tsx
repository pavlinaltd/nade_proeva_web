import { X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

interface MediaItem {
  type: "image" | "video";
  title: string;
  caption?: string;
  year?: string;
  pageImages?: string[];
}

const Columns = () => {
  const [selectedImage, setSelectedImage] = useState<MediaItem | null>(null);

  const columns: MediaItem[] = [
    {
      type: "image",
      title: "Neglecting Well-Known Facts",
      caption: "Caption",
      year: "Year",
      pageImages: [
        "images/Neglecting-Facts-1.jpeg",
        "images/Neglecting-Facts-2.jpeg",
        "images/Neglecting-Facts-3.jpeg"
      ]
    },
    {
      type: "image",
      title: "Column 1: Nova Makedonija",
      caption: "Caption",
      year: "Year",
      pageImages: [
        "images/Column_1_Nova_Makedonija.JPG"
      ]
    },
    {
      type: "image",
      title: "Column 2: Nova Makedonija",
      caption: "Caption",
      year: "Year",
      pageImages: [
        "images/Column_2_Nova_Makedonija.JPG"
      ]
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
    <div
      className="flex items-start gap-6"
    >
      {columns.map((column, index) => (
        <div
          key={index}
          className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow cursor-pointer hover-scale"
          // className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow cursor-pointer hover-scale"
          onClick={() => openLightbox(column)}
        >
          <div className="overflow-hidden">
            <img
              src={column.pageImages?.[0] || ""}
              alt={column.title}
              className="w-[360px] h-full object-fit"
            />
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
          {/* Carousel */}
          <Carousel className="w-full max-w-2xl">
            <CarouselContent>
              {selectedImage.pageImages?.map((image, index) => (
                <div 
                  key={index} 
                  className="flex-shrink-0 w-full h-auto"
                >
                  <img 
                    src={image} 
                    alt={`${selectedImage.title} - ${index + 1}`} 
                    className="w-full h-auto object-fit"
                  />
                </div>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    )}
    </>
  )
};

export default Columns;