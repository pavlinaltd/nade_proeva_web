"use client";

import SectionHeader from "@/components/SectionHeader";
import { X, ExternalLink, Expand } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";

interface MediaItem {
    type: "image" | "video" | "link";
    title: string;
    srcOriginal?: string; // For language toggle
    srcEnglish?: string; // For language toggle
    targetSrc?: string; // For setting image in lightbox
    videoSrc?: string; //video playback
    orientation?: "horizontal" | "vertical" | "cover";
    externalLink?: string;
}

const LinkItem = ({ item }: { item: MediaItem }) => (
    <a
        href={item.srcOriginal}
        target="_blank"
        title={item.title}
        className="no-underline text-white bg-burgundy-700 hover:bg-burgundy-900 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer w-full p-4 flex items-center justify-start"
    >
        <div className="flex items-center gap-4 text-sm w-full">
            <ExternalLink />
            <p>{item.title}</p>
        </div>
    </a>
);

// Uniform frame for every press image — same size, same crop behavior
// (object-contain so nothing is ever cut off), regardless of the source's
// native aspect ratio (a Facebook post, a newspaper column, a book cover).
const PressCard = ({
    item,
    isEnglish,
    onOpen,
}: {
    item: MediaItem;
    isEnglish: boolean;
    onOpen: (item: MediaItem) => void;
}) => (
    <div
        className="group relative rounded-lg overflow-hidden shadow-md hover:shadow-xl cursor-pointer transition-all duration-300 bg-white flex flex-col"
        onClick={() => onOpen(item)}
    >
        <div className="relative h-64 sm:h-72 flex items-stretch justify-center bg-gray-50">
            <img
                src={isEnglish ? item.srcEnglish : item.srcOriginal}
                className="max-h-full max-w-full w-auto h-auto object-contain"
            />
            <span className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-black/30">
                <Expand className="text-white drop-shadow-2xl w-10 h-10" />
            </span>
        </div>
    </div>
);

export default function RememberingNade() {
    const [selectedImage, setSelectedImage] = useState<MediaItem | null>(null);
    const [isEnglish, setIsEnglish] = useState(false);

    const students: MediaItem = {
        type: "image",
        srcOriginal: "/images/memories/class-dismissed.jpg",
        videoSrc: "/videos/comments.mp4",
        title: "From her students",
    };

    // Every image-based press mention — all shown in full, uniformly framed.
    const pressImages: MediaItem[] = [
        {
            type: "image",
            srcOriginal: "/images/memories/chapeau.jpeg",
            srcEnglish: "/images/memories/chapeau-eng.jpeg",
            title: "Chapeau bas, madame Proeva!",
            orientation: "vertical",
        },
        {
            type: "image",
            srcOriginal: "/images/memories/fb-post.jpg",
            srcEnglish: "/images/memories/fb-post-eng.jpg",
            title: "Facebook post",
            orientation: "vertical",
        },
        {
            type: "image",
            srcOriginal: "/images/memories/coverpage.png",
            srcEnglish: "/images/memories/coverpage_eng.png",
            title: "Zbornik Narodnog Muzeja Srbije",
            orientation: "cover",
            externalLink: "/images/memories/archeo_book.pdf",
        },
    ];

    // Text-only press mentions (no image available) — plain link cards.
    const links: MediaItem[] = [
        {
            type: "link",
            srcOriginal:
                "https://pretsedatel.mk/en/president-siljanovska-davkova-expresses-condolences-on-the-occasion-of-the-death-of-nade-proeva/",
            title: "From the President's Cabinet",
        },
        {
            type: "link",
            srcOriginal:
                "https://www.slobodenpecat.mk/hr/pochina-renomiranata-istoricharka-nade-proeva-beshe-ekspert-za-stariot-vek-i-antichkite-makedonci/",
            title: "Sloboden Pecat",
        },
        {
            type: "link",
            srcOriginal:
                "https://meta.mk/na-75-godishna-vozrast-pochina-profesorkata-nade-proeva/",
            title: "Meta",
        },
        {
            type: "link",
            srcOriginal:
                "https://lider.mk/pochina-najgolemata-ekspertka-za-antichka-makedonija-profesorkata-proeva-kje-bide-zakopana-na-grobishtata-vo-butel/",
            title: "Lider",
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
                title="REMEMBERING NADE"
                subtitle="Through the voices of those who knew her best."
            />

            <div className="lg:mx-20 flex flex-col items-center gap-12">
                {/* Image Feature: from her students */}
                <div
                    className="relative rounded-lg overflow-hidden shadow-md hover:shadow-xl cursor-pointer transition-all duration-300"
                    onClick={() => openLightbox(students)}
                >
                    <div>
                        <img
                            src={students.srcOriginal}
                            alt={students.title}
                            className="object-cover mx-auto block"
                        />
                        <span className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-200 bg-black/30">
                            <Expand className="text-white drop-shadow-2xl w-14 h-14" />
                        </span>
                    </div>
                </div>

                {/* Book Feature  */}
                <div className="animate-fade-in w-full bg-gray-50 rounded-2xl sm:p-4 md:p-5 flex flex-col md:flex-row items-center gap-10 md:gap-16">
                    <div className="flex-shrink-0">
                        <img
                            className="w-64 sm:w-72 md:w-80 rounded-lg object-contain hover-lift shadow-md"
                            src="/images/from-her-lectures.jpg"
                            alt="From Her Lectures: Our Words Book Cover"
                        />
                    </div>
                    <div className="flex-1 flex flex-col items-center gap-5 max-w-xl mx-auto">
                        <h3 className="text-black text-2xl font-semibold text-center">
                            From Her Lectures, in Our Words
                        </h3>
                        <p className="text-black text-base leading-relaxed text-justify">
                            This volume is a tribute by five former students of
                            Professor Dr. Nade Proeva, who came together to
                            honor her legacy. It brings together their writings
                            on Macedonian history, spanning archaeology,
                            ethnology, anthropology, mythology, and religion
                            from antiquity to the present. Through these pages,
                            they celebrate their teacher's lasting influence and
                            honor her lifelong devotion to truth, scholarship,
                            and her beloved homeland, Macedonia.
                        </p>
                        <a
                            href="/images/instead-of-a-foreword.pdf"
                            target="_blank"
                            title="Introduction"
                            className="no-underline text-white bg-burgundy-700 hover:bg-burgundy-900 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer w-full max-w-xl p-4 flex items-center justify-center gap-2 text-sm"
                        >
                            <ExternalLink className="w-4 h-4" />
                            <p>Instead of a Foreword...</p>
                        </a>
                    </div>
                </div>
                {/* Language Switch */}
                <div className="flex flex-col lg:flex-row items-center gap-2 -mt-6 self-start lg:self-center">
                    <div className="flex items-center gap-2 justify-start text-lg">
                        <p
                            className={
                                isEnglish
                                    ? "text-gray-400 transition-colors duration-400"
                                    : "text-black transition-colors duration-200"
                            }
                        >
                            Original
                        </p>
                        <Switch
                            id="language-switch"
                            aria-label="Switch to English or Original"
                            className="data-[state=unchecked]:bg-burgundy-700 data-[state=checked]:bg-burgundy-900"
                            checked={isEnglish}
                            onCheckedChange={setIsEnglish}
                        />
                        <p
                            className={`transition-colors duration-400 ${isEnglish ? "text-black " : "text-gray-400"}`}
                        >
                            English
                        </p>
                    </div>
                    <p className="text-center md:text-left italic text-gray-500">
                        * Translations are done by Google Translate and may have
                        errors.
                    </p>
                </div>
                {/* Press Wall */}
                <div className="w-full">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {pressImages.map((item, index) => (
                            <PressCard
                                key={index}
                                item={item}
                                isEnglish={isEnglish}
                                onOpen={openLightbox}
                            />
                        ))}
                    </div>
                </div>

                {/* Additional coverage — text-only mentions */}
                <div className="w-full">
                    <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 content-stretch gap-4">
                        {links.map((link, index) => (
                            <LinkItem key={index} item={link} />
                        ))}
                    </div>
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
                            selectedImage.externalLink
                                ? "w-[90vw] max-w-[700px] h-[90vh] bg-white rounded-lg shadow-2xl overflow-hidden"
                                : selectedImage.orientation === "vertical"
                                  ? "w-[600px] bg-white rounded-lg overflow-hidden shadow-2xl"
                                  : selectedImage.orientation === "cover"
                                    ? "w-[90vw] max-w-[400px] bg-white rounded-lg shadow-2xl"
                                    : "w-[1000px] bg-white rounded-lg overflow-hidden shadow-2xl"
                        }
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="relative h-full">
                            {selectedImage.externalLink ? (
                                <iframe
                                    src={selectedImage.externalLink}
                                    title={selectedImage.title}
                                    className="w-full h-full"
                                />
                            ) : selectedImage.videoSrc ? (
                                <video
                                    src={selectedImage.videoSrc}
                                    controls
                                    autoPlay
                                    className="w-full h-auto"
                                />
                            ) : (
                                <img
                                    src={
                                        selectedImage.targetSrc
                                            ? selectedImage.targetSrc
                                            : isEnglish
                                              ? selectedImage.srcEnglish
                                              : selectedImage.srcOriginal
                                    }
                                    alt={selectedImage.title}
                                    className="w-full h-auto object-fit"
                                />
                            )}
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
}
