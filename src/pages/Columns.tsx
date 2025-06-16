import { X, Expand } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import SectionHeader from "@/components/SectionHeader";

interface MediaItem {
  type: "image";
  title: string;
  year?: string;
  pageImages?: string[];
  orientation: "horizontal" | "vertical";
}

const Columns = () => {
  const [selectedImage, setSelectedImage] = useState<MediaItem | null>(null);

  const columns: MediaItem[] = [
    {
      type: "image",
      title: "Neglecting Well-Known Facts",
      pageImages: [
        "images/columns/Neglecting-Facts-1.jpeg",
        "images/columns/Neglecting-Facts-2.jpeg",
        "images/columns/Neglecting-Facts-3.jpeg"
      ],
      orientation: "vertical"
    },
    {
      type: "image",
      title: "Quo Vadis Scientia Nostra",
      pageImages: [
        "images/columns/quo-vadis.jpg"
      ],
      orientation: "vertical"
    },
    {
      type: "image",
      title: "Еден човек со грчко презиме ... си ја има мувата на капата и си ја ишка",
      pageImages: [
        "images/columns/eden.jpg"
      ],
      orientation: "vertical"
    },
    {
      type: "image",
      title: "Златната маска на Македонците",
      pageImages: [
        "images/columns/zlatnata-1.jpg",
        "images/columns/zlatnata-2.jpg",
        "images/columns/zlatnata-3.jpg",
        "images/columns/zlatnata-4.jpg",
      ],
      orientation: "vertical"
    },
    {
      type: "image",
      title: "Господа политичари, настрана рацете од историската наука",
      pageImages: [
        "images/columns/gospoda-1.jpg",
        "images/columns/gospoda-2.jpg",
      ],
      orientation: "vertical"
    },
    {
      type: "image",
      title: "Column 1: Nova Makedonija",
      pageImages: [
        "images/columns/column-3.jpg"
      ],
      orientation: "horizontal"
    },
    {
      type: "image",
      title: "Column 1: Nova Makedonija",
      pageImages: [
        "images/columns/column-4.jpg"
      ],
      orientation: "horizontal"
    },
    {
      type: "image",
      title: "Column 1: Nova Makedonija",
      pageImages: [
        "images/columns/icsh.jpg"
      ],
      orientation: "horizontal"
    },
    {
      type: "image",
      title: "Column 1: Nova Makedonija",
      pageImages: [
        "images/columns/fran.jpg"
      ],
      orientation: "horizontal"
    },
    {
      type: "image",
      title: "Column 1: Nova Makedonija",
      pageImages: [
        "images/columns/instit.jpg"
      ],
      orientation: "horizontal"
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
      title="PRESS"
      subtitle="Translators or AI tools can be used to translate these texts."
    />

    <div className="animate-fade-in">
      <div className="columns-4 gap-0">
        {columns.map((col, index) => (
            <div
            key={index}
            className="group relative rounded-lg overflow-hidden shadow-md hover:shadow-xl cursor-pointer transition-all duration-300"
            onClick={() => openLightbox(col)}
            >
            <div className="overflow-hidden">
              <img
              src={col.pageImages?.[0] || ""}
              alt={col.title}
              className="w-[360px] h-full object-fit"
              />
              <span className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-black/30">
              <Expand 
                className={ col.orientation === "vertical" ?
                  "w-14 h-14 text-white drop-shadow-2xl" :
                  "w-10 h-10 text-white drop-shadow-2xl"}
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