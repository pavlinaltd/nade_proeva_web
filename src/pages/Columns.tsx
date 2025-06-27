import { X, Expand } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import SectionHeader from "@/components/SectionHeader";
import { Switch } from "@/components/ui/switch";

interface MediaItem {
  type: "image";
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
    {
      type: "image",
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
      type: "image",
      title: "Neglecting Well-Known Facts",
      pageImagesOriginal: [
        "images/columns/Neglecting-Facts-1.jpeg",
        "images/columns/Neglecting-Facts-2.jpeg",
        "images/columns/Neglecting-Facts-3.jpeg"
      ],
      orientation: "vertical"
    },
    {
      type: "image",
      title: "Quo Vadis Scientia Nostra",
      pageImagesOriginal: [
        "images/columns/quo-vadis.jpg"
      ],
      pageImagesEnglish: [
        "images/columns/quo-vadis-eng.jpg"
      ],
      orientation: "vertical"
    },
    {
      type: "image",
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
      type: "image",
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
    {
      type: "image",
      title: "Бугарското китење со туѓи перја и нашиот громогласен молк",
      pageImagesOriginal: [
        "images/columns/bugarskoto.jpg"
      ],
      orientation: "horizontal"
    },
    {
      type: "image",
      title: "Бугарска койија на грчкото однесување",
      pageImagesOriginal: [
        "images/columns/bugarska.jpg"
      ],
      orientation: "horizontal"
    },
    {
      type: "image",
      title: "Историјата можат да ја одбранаш само историчарите",
      pageImagesOriginal: [
        "images/columns/istoriyata.jpg"
      ],
      orientation: "horizontal"
    },
    {
      type: "image",
      title: "Француска цивилизациска утка на отворањето на ЛОИ",
      pageImagesOriginal: [
        "images/columns/fran.jpg"
      ],
      orientation: "horizontal"
    },
    {
      type: "image",
      title: "Институционализирање на неинституционалното",
      pageImagesOriginal: [
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
      subtitle="Use the switch to toggle between the original languages and their English translation by Google Translate."
    />

    <div className="flex items-center gap-2 mb-6 justify-start">
      <div className="flex items-center gap-2">
        <span className="text-sm font-medium text-gray-700">Original</span>
        <Switch
          id="language-switch"
          aria-label="Switch to English"
          className="data-[state=checked]:bg-gray-900"
          checked={isEnglish}
          onCheckedChange={setIsEnglish}
        />
        <span className="text-sm font-medium text-gray-700">ENG</span>
      </div>
    </div>

    <div className="animate-fade-in">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-6 w-fit mx-auto">
        {columns.map((col, index) => (
          <div
            key={index}
            className="group relative rounded-lg overflow-hidden shadow-md hover:shadow-xl cursor-pointer transition-all duration-300"
            onClick={() => openLightbox(col)}
          >
            <div className="overflow-hidden">
              <img
              src={isEnglish ? col.pageImagesEnglish?.[0] || col.pageImagesOriginal?.[0] : col.pageImagesOriginal?.[0]}
              alt={col.title}
              className="w-[360px] h-full object-fit"
              />
              {col.title === "translator test" ? (
                <span className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-black/30">
                  <img src="images/columns/col-3-trans.png" alt="Translator Test" className="w-full h-auto object-fit" />
                </span>
              ) : (
                <span className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-black/30">
                <Expand 
                  className={ col.orientation === "vertical" ?
                    "w-14 h-14 text-white drop-shadow-2xl" :
                    "w-10 h-10 text-white drop-shadow-2xl"}
                />
                </span>
              )}
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
              {isEnglish ? selectedImage.pageImagesEnglish?.map((image, index) => (
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
              )) : selectedImage.pageImagesOriginal?.map((image, index) => (
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