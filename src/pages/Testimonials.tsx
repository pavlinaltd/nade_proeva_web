import SectionHeader from "@/components/SectionHeader";
import { X, ExternalLink, Expand } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import VideoPlayerItem from "@/components/VideoPlayer";

interface MediaItem {
  type: "image" | "video" | "link";
  title: string;
  srcOriginal?: string; // For language toggle
  srcEnglish?: string;  // For language toggle
  orientation?: "horizontal" | "vertical";
}

const LinkItem = ({ item }: { item: MediaItem }) => (
  <div
    className="bg-burgundy-700 hover:bg-burgundy-900 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer h-min"
    // Don't need lightbox for link
  >
    <div className="p-4">
      <a
        href={item.srcOriginal}
        target="_blank"
        title={item.title}
        className="no-underline text-white"
      >
        <div className="flex items-center gap-4 text-sm w-full">
          <ExternalLink />
          <p>{item.title}</p>
        </div>
      </a>
    </div>
  </div>
);

const ImageItem = ({ item, openLightbox, isEnglish }: { item: MediaItem; openLightbox: (image: MediaItem) => void; isEnglish: boolean }) => (
  <div
    className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl cursor-pointer transform transition-transform duration-200 hover:scale-105 h-min"
    onClick={() => openLightbox(item)}
  >
    <img
      src={isEnglish ? item.srcEnglish : item.srcOriginal}
      alt={item.title}
      className="w-auto h-auto object-cover"
    />
  </div>
);

const Testimonials = () => {
  const [selectedImage, setSelectedImage] = useState<MediaItem | null>(null);
  const [isEnglish, setIsEnglish] = useState(false);

  const columns: MediaItem[] = [
    {
      type: "image",
      srcOriginal: "/images/memories/chapeau.jpeg",
      srcEnglish: "/images/memories/chapeau-eng.jpeg",
      title: "Title",
      orientation: "vertical",
    },
    {
      type: "image",
      srcOriginal: "/images/memories/linkedin-post.jpg",
      srcEnglish: "/images/memories/linkedin-post-eng.jpg",
      title: "Title",
      orientation: "vertical",
    }
  ];

  const link: MediaItem = {
    type: "link",
    srcOriginal: "https://pretsedatel.mk/en/president-siljanovska-davkova-expresses-condolences-on-the-occasion-of-the-death-of-nade-proeva/",
    title: "From the President's Cabinet"
  };

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

    {/* Container */}
    <div className="w-3/4 mx-auto flex flex-col items-center gap-10">
      {/* Video Feature */}
      <VideoPlayerItem
        src={"/images/memories/nade.mp4"}
        className="h-full object-cover mb-6"
      />

      {/* Language Switch */}
      <div className="flex self-start gap-2 mb-6 justify-start">
        <span
          className={isEnglish ? "text-gray-400 transition-colors duration-400" : "text-black transition-colors duration-200"}
        >
          Original
        </span>
        <Switch
          id="language-switch"
          aria-label="Switch to English or Original"
          className="data-[state=unchecked]:bg-burgundy-700 data-[state=checked]:bg-burgundy-900"
          checked={isEnglish}
          onCheckedChange={setIsEnglish}
        />
        <span className={`transition-colors duration-400 ${isEnglish ? "text-black " : "text-gray-400"}`}>English</span>
      </div>

      {/* Column Content */}
      <div className="animate-fade-in flex flex-col lg:flex-row justify-between w-full">
        {columns.map((item, index) =>
          <div
            key={index}
            className={`relative rounded-lg overflow-hidden shadow-md hover:shadow-xl cursor-pointer transition-all duration-300 mx-auto`}
            onClick={() => openLightbox(item)}
          >
            <div className={`h-[400px] mx-auto`}>
              <img
              src={isEnglish ? item.srcEnglish : item.srcOriginal}
              alt={item.title}
              className="aspect-square h-[400px] object-cover"
              />
              <span className={`absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-200 bg-black/30`}>
              <Expand
                className="text-white drop-shadow-2xl w-14 h-14"
              />
              </span>
            </div>
          </div>
        )}
      </div>

      {/* Link Item */}
      <LinkItem item={link} />

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
              src={isEnglish ? selectedImage.srcEnglish : selectedImage.srcOriginal}
              alt={selectedImage.title}
              className="w-full h-auto object-fit"
            />
          </div>
        </div>
        <Button 
          variant="secondary"
          size="icon"
          className="absolute top-4 right-4 rounded-full border border-white text-white bg-burgundy-700 hover:bg-burgundy-900"
          onClick={closeLightbox}
        >
          <X className="h-4 w-4" />
        </Button>
      </div>
    )}
    </>
  );
};

export default Testimonials;