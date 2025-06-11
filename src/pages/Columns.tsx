import { X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import TranslatorImage from "@/components/Translator";
import SectionHeader from "@/components/SectionHeader";

interface MediaItem {
  type: "image" | "pdf";
  title: string;
  caption?: string;
  year?: string;
  pageImages?: string[];
  orientation: "horizontal" | "vertical";
}

const Columns = () => {
  const [selectedImage, setSelectedImage] = useState<MediaItem | null>(null);

  const columnsForeign: MediaItem[] = [
    {
      type: "image",
      title: "Neglecting Well-Known Facts",
      caption: "Caption",
      year: "Year",
      pageImages: [
        "images/columns/Neglecting-Facts-1.jpeg",
        "images/columns/Neglecting-Facts-2.jpeg",
        "images/columns/Neglecting-Facts-3.jpeg"
      ],
      orientation: "vertical"
    },
    {
      type: "image",
      title: "Title",
      caption: "Caption",
      year: "Year",
      pageImages: [
        "images/columns/vert-1.jpg",
        "images/columns/vert-2.jpg",
      ],
      orientation: "vertical"
    },
    {
      type: "image",
      title: "Title",
      caption: "Caption",
      year: "Year",
      pageImages: [
        "images/columns/vert-1.jpg",
        "images/columns/vert-2.jpg",
      ],
      orientation: "vertical"
    },
  ];

  const columnsOriginal: MediaItem[] = [
    {
      type: "image",
      title: "Column 1: Nova Makedonija",
      caption: "Caption",
      year: "Year",
      pageImages: [
        "images/columns/column-3.jpg"
      ],
      orientation: "horizontal"
    },
    {
      type: "image",
      title: "Column 1: Nova Makedonija",
      caption: "Caption",
      year: "Year",
      pageImages: [
        "images/columns/column-4.jpg"
      ],
      orientation: "horizontal"
    },
    {
      type: "image",
      title: "Column 1: Nova Makedonija",
      caption: "Caption",
      year: "Year",
      pageImages: [
        "images/columns/col-1.jpg"
      ],
      orientation: "horizontal"
    },
  ]

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
      subtitle="Read Professor Dr. Nade Proeva's columns in their original text.
        Click a picture to enlarge it and swipe to read any additional pages. You
        may use any translator or AI tool to translate these texts."
    />

    {/* <a href="images/columns/UTRINSKI-24-10-2006.pdf" target="_blank">Column</a> */}

    <div className="flex flex-col gap-10">    
      <div className="flex flex-row max-h-[500px] items-start gap-6 justify-between">
        {columnsForeign.map((column, index) => (
          <div
            key={index}
            className="rounded-lg overflow-hidden shadow-md hover:shadow-xl cursor-pointer transform transition-transform duration-200 hover:scale-105"
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

      <div className="flex h-[600px] items-start gap-6 justify-between">
        {columnsOriginal.map((column, index) => (
          <div
            key={index}
            className="rounded-lg overflow-hidden shadow-md hover:shadow-xl cursor-pointer w-1/2 transform transition-transform duration-200 hover:scale-105"
            onClick={() => openLightbox(column)}
          >
            <div className="overflow-hidden">
              <img
                src={column.pageImages?.[0] || ""}
                alt={column.title}
                className="w-full h-[350px] object-left-top object-cover"
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