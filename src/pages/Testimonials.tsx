import SectionHeader from "@/components/SectionHeader";
import { X, ExternalLink } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

interface MediaItem {
  type: "image" | "video" | "link";
  src: string;
  thumbnail?: string;
  title: string;
  orientation?: "horizontal" | "vertical";
}

const LinkItem = ({ item }: { item: MediaItem }) => (
  <div
    className="bg-burgundy-600 hover:bg-burgundy-700 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer h-min"
    // Don't need lightbox for link
  >
    <div className="p-4">
      <a
        href={item.src}
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

const ImageItem = ({ item, openLightbox }: { item: MediaItem; openLightbox: (image: MediaItem) => void }) => (
  <div
    className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl cursor-pointer transform transition-transform duration-200 hover:scale-105 h-min"
    onClick={() => openLightbox(item)}
  >
    <img
      src={item.src}
      alt={item.title}
      className="w-auto h-auto object-cover"
    />
  </div>
);

const Testimonials = () => {

  const [selectedImage, setSelectedImage] = useState<MediaItem | null>(null);

  const media: MediaItem[] = [
    {
      type: "image",
      src: "/images/memories/intro.png",
      title: "Title",
      orientation: "vertical",
    },
    {
      type: "image",
      src: "/images/memories/chapeau.jpeg",
      title: "Title",
      orientation: "vertical",
    },
    {
      type: "link",
      src: "https://pretsedatel.mk/en/president-siljanovska-davkova-expresses-condolences-on-the-occasion-of-the-death-of-nade-proeva/",
      title: "From the President's Cabinet"
    }
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

    <video
      src="/images/memories/nade.mp4"
      className="w-3/4 h-full object-cover mb-6 mx-auto"
      controls muted
      controlsList="nodownload"
    >
      Your browser does not support the video tag.
    </video>
    <div className="animate-fade-in grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="grid gap-6">
        {media
        .filter((_, index) => index % 2 === 0)
        .map((item, index) =>
          item.type !== "link" ? (
          <ImageItem key={index} item={item} openLightbox={openLightbox} />
        ) : (
          <LinkItem key={index} item={item} />
        ))}
      </div>
      <div className="grid gap-6">
        {media
        .filter((_, index) => index % 2 === 1)
        .map((item, index) =>
          item.type !== "link" ? (
          <ImageItem key={index} item={item} openLightbox={openLightbox} />
        ) : (
          <LinkItem key={index} item={item} />
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