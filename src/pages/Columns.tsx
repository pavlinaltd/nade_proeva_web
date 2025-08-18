import { X, Expand } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import SectionHeader from "@/components/SectionHeader";
import { Switch } from "@/components/ui/switch";

interface MediaItem {
  title: string;
  year?: string;
  pageImagesOriginal?: string[];
  pageImagesEnglish?: string[];
  orientation: "horizontal" | "vertical";
}

const Columns = () => {
  const [selectedImage, setSelectedImage] = useState<MediaItem | null>(null);
  const [isEnglish, setIsEnglish] = useState(false);

  const columns: MediaItem[] = [
    // VERTICAL
    {
      title: "Златната маска на Македонците",
      pageImagesOriginal: [
        "images/columns/zlatnata-1.jpg",
        "images/columns/zlatnata-2.jpg",
        "images/columns/zlatnata-3.jpg",
        "images/columns/zlatnata-4.jpg",
      ],
      pageImagesEnglish: [
        "images/columns/zlatnata-1-eng.jpg",
        "images/columns/zlatnata-2-eng.jpg",
        "images/columns/zlatnata-3-eng.jpg",
        "images/columns/zlatnata-4-eng.jpg",
      ],
      orientation: "vertical"
    },
    {
      title: "Neglecting Well-Known Facts",
      pageImagesOriginal: [
        "images/columns/Neglecting-Facts-1.jpeg",
        "images/columns/Neglecting-Facts-2.jpeg",
        "images/columns/Neglecting-Facts-3.jpeg"
      ],
      orientation: "vertical"
    },
    {
      title: "Еден човек со грчко презиме ... си ја има мувата на капата и си ја ишка",
      pageImagesOriginal: [
        "images/columns/eden.jpg"
      ],
      pageImagesEnglish: [
        "images/columns/eden-eng.jpg"
      ],
      orientation: "vertical"
    },
    {
      title: "Господа политичари, настрана рацете од историската наука",
      pageImagesOriginal: [
        "images/columns/gospoda-1.jpg",
        "images/columns/gospoda-2.jpg",
      ],
      pageImagesEnglish: [
        "images/columns/gospoda-1-eng.jpg",
        "images/columns/gospoda-2-eng.jpg",
      ],
      orientation: "vertical"
    },
    // HORIZONTAL
    {
      title: "Бугарското китење со туѓи перја и нашиот громогласен молк",
      pageImagesOriginal: [
        "images/columns/bugarskoto.jpg"
      ],
      pageImagesEnglish: [
        "images/columns/bugarskoto-eng.jpg"
      ],
      orientation: "horizontal"
    },
    {
      title: "Бугарска койија на грчкото однесување",
      pageImagesOriginal: [
        "images/columns/bugarska.jpg"
      ],
      pageImagesEnglish: [
        "images/columns/bugarska-eng.jpg"
      ],
      orientation: "horizontal"
    },
    {
      title: "Историјата можат да ја одбранаш само историчарите",
      pageImagesOriginal: [
        "images/columns/istoriyata.jpg"
      ],
      pageImagesEnglish: [
        "images/columns/istoriyata-eng.jpg"
      ],
      orientation: "horizontal"
    },
    {
      title: "Француска цивилизациска утка на отворањето на ЛОИ",
      pageImagesOriginal: [
        "images/columns/fran.jpg"
      ],
      pageImagesEnglish: [
        "images/columns/fran-eng.jpg"
      ],
      orientation: "horizontal"
    },
    {
      title: "Институционализирање на неинституционалното",
      pageImagesOriginal: [
        "images/columns/instit.jpg"
      ],
      pageImagesEnglish: [
        "images/columns/instit-eng.jpg"
      ],
      orientation: "horizontal"
    },
    {
      title: "Кога политичарите решаваат научни проблеми",
      pageImagesOriginal: [
        "images/columns/koga.jpg"
      ],
      pageImagesEnglish: [
        "images/columns/koga-eng.jpg"
      ],
      orientation: "horizontal"
    },
    {
      title: "Европското лицемерие и нашите мекотели",
      pageImagesOriginal: [
        "images/columns/evropskoto.jpg"
      ],
      pageImagesEnglish: [
        "images/columns/evropskoto-eng.jpg"
      ],
      orientation: "horizontal"
    },
    {
      title: "Бушкај штреба да ја бијат йолитичарите",
      pageImagesOriginal: [
        "images/columns/bushkai.jpg"
      ],
      pageImagesEnglish: [
        "images/columns/bushkai-eng.jpg"
      ],
      orientation: "horizontal"
    },
    {
      title: "Националните митови што оживуваат денес се лажни и штетни",
      pageImagesOriginal: [
        "images/columns/natsionalnite.jpg"
      ],
      pageImagesEnglish: [
        "images/columns/natsionalnite-eng.jpg"
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
      subtitle="Use the switch to toggle between the original publications and their English translations by Google Translate."
    />

    <div className="animate-fade-in">
      {/* Language Switch */}
      <div className="flex items-center gap-2 mb-6 justify-start">
        <span
          className={isEnglish ? "text-gray-400 transition-colors duration-400" : "text-black transition-colors duration-200"}
        >
          Original
        </span>
        <Switch
          id="language-switch"
          aria-label="Switch to English"
          className="data-[state=unchecked]:bg-burgundy-600 data-[state=checked]:bg-burgundy-700"
          checked={isEnglish}
          onCheckedChange={setIsEnglish}
        />
        <span className={`transition-colors duration-400 ${isEnglish ? "text-black " : "text-gray-400"}`}>English</span>
      </div>

      {/* Content */}
      <div
        className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6"
      >
        {columns.map((col, index) => (
          <div
            key={index}
            className={`relative rounded-lg overflow-hidden shadow-md hover:shadow-xl cursor-pointer transition-all duration-300 mx-auto`}
            onClick={() => openLightbox(col)}
          >
            <div className={`${col.orientation === "horizontal" && "h-[200px]"} mx-auto`}>
              <img
              src={isEnglish ? col.pageImagesEnglish?.[0] || col.pageImagesOriginal?.[0] : col.pageImagesOriginal?.[0]}
              alt={col.title}
              className={`${col.orientation === "vertical" ? "object-scale-down" : "aspect-square h-[200px] object-cover"} object-left-top`}
              />
              <span className={`absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-200 bg-black/30`}>
              <Expand
                className={`text-white drop-shadow-2xl w-14 h-14
                  ${col.orientation === "vertical" ? "w-14 h-14" : "w-10 h-10"}
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
          className={`overflow-hidden shadow-2xl flex justify-center ${selectedImage.orientation === "vertical" ? "w-[900px] " : "w-[1200px] "}`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Carousel */}
          <Carousel
            // className="w-full max-w-2xl bg-white rounded-sm"
            className={
              selectedImage.orientation === "vertical" ? 'w-[700px] bg-white rounded-sm' :
              'w-[1000px] bg-white rounded-sm'
            }
          >
            <CarouselContent>
              {isEnglish && selectedImage.pageImagesEnglish ? selectedImage.pageImagesEnglish?.map((image, index) => (
                <div 
                  key={index} 
                  className="flex-shrink-0 w-full h-auto"
                >
                  <img 
                    src={image} 
                    alt={`${selectedImage.title} page ${index + 1}`} 
                    className="w-full h-auto object-fit"
                  />
                </div>
              )) : selectedImage.pageImagesOriginal?.map((image, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-full h-auto"
                >
                  <img
                    src={image}
                    alt={`${selectedImage.title} page ${index + 1}`}
                    className="w-full h-auto object-cover"
                  />
                </div>
              ))}
            </CarouselContent>
            <CarouselPrevious className="text-white bg-burgundy-700 hover:bg-burgundy-900" />
            <CarouselNext className="text-white bg-burgundy-700 hover:bg-burgundy-900"/>
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