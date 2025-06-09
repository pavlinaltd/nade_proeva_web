import { X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import TranslatorImage from "@/components/Translator";
import SectionHeader from "@/components/SectionHeader";

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
        "images/columns/Neglecting-Facts-1.jpeg",
        "images/columns/Neglecting-Facts-2.jpeg",
        "images/columns/Neglecting-Facts-3.jpeg"
      ]
    },
    {
      type: "image",
      title: "Column 1: Nova Makedonija",
      caption: "Caption",
      year: "Year",
      pageImages: [
        "images/columns/column-3.jpg"
      ]
    },
    // {
    //   type: "image",
    //   title: "Column 2: Nova Makedonija",
    //   caption: "Caption",
    //   year: "Year",
    //   pageImages: [
    //     "images/columns/Column_2_Nova_Makedonija.JPG"
    //   ]
    // },
    {
      type: "image",
      title: "Column 1: Nova Makedonija",
      caption: "Caption",
      year: "Year",
      pageImages: [
        "images/columns/column-4.jpg"
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
    <SectionHeader
      title="COLUMNS"
      subtitle="Read Professor Nade Proeva's columns in their original text.
        Click a picture to enlarge it and swipe to read any additional pages."
    />

    <div
      className="flex flex-col flex-wrap max-h-[500px] items-start gap-6"
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
          className="max-w-4xl w-full overflow-hidden shadow-2xl flex justify-center"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Carousel */}
          <Carousel className="w-full max-w-2xl bg-white rounded-sm">
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
            <CarouselPrevious className="text-white bg-burgundy-700 hover:bg-burgundy-900"/>
            <CarouselNext className="text-white bg-burgundy-700 hover:bg-burgundy-900" />
          </Carousel>
          <Button 
              variant="secondary"
              size="icon"
              className="absolute top-4 right-4 rounded-full bg-white/80 hover:bg-white"
              onClick={closeLightbox}
            >
              <X className="h-4 w-4" />
            </Button>
        </div>
      </div>
    )}
    </>
  )
};

export default Columns;