"use client";

import { useState, useRef } from "react";
import { useRouter } from "next/navigation";

import SummerCampBanner from "./SummerCampBanner";
import { Label } from "recharts";
import "./banner-camp.css";
// import CampContent from "./CampContent.jsx";

const CAMP_YEARS = Array.from({ length: 11 }, (_, i) => {
    const year = 2026 + i;
    return {
        year: String(year),
        label: String(year),
        active: year === 2026,
    };
});
export default function CampTimeline() {
    const [tooltipYr, setTooltipYr] = useState<string | null>(null);
    const tooltipTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
    const [showCampContent, setShowCampContent] = useState(false);
    const showTooltip = (year: string) => {
        if (tooltipTimeout.current) clearTimeout(tooltipTimeout.current);
        setTooltipYr(year);
        tooltipTimeout.current = setTimeout(() => setTooltipYr(null), 1500);
    };
    const router = useRouter();

    const handleYearClick = (y: (typeof CAMP_YEARS)[number]) => {
        if (y.active) {
            router.push("/summer-camp");
        } else if (y.year === "2027") {
            showTooltip(y.year);
        } else {
            router.push("/not-found");
        }
    };

    return (
        <div className="camp-timeline-box">
            <div className="w-full flex flex-col xl:flex-row xl:items-start xl:justify-center">
                {/*horizontal tabs*/}
                <div className="xl:hidden">
                    <div className="relative">
                        <div className="absolute left-2 right-2 top-[15px] z-0 h-[2px] bg-[#646161] " />

                        <div className="flex gap-3 md:gap-10 overflow-x-auto scrollbar-none pt-2 pb-2">
                            {CAMP_YEARS.map((y) => {
                                return (
                                    <button
                                        key={y.year}
                                        type="button"
                                        onClick={() => handleYearClick(y)}
                                        className={
                                            "relative z-10 flex flex-col items-center shrink-0 group " +
                                            (y.active
                                                ? "cursor-pointer"
                                                : "cursor-default")
                                        }
                                    >
                                        <span
                                            className={
                                                "relative z-10 rounded-full transition-all duration-300 w-4 h-4 " +
                                                (y.active
                                                    ? "bg-burgundy-700 shadow-[0_0_0_4px_rgba(139,26,26,0.18)] group-hover:scale-110"
                                                    : "bg-white border-2 border-[#646161]")
                                            }
                                        />
                                        <span
                                            className={
                                                "mt-2 font-bold transition-all duration-200 whitespace-nowrap " +
                                                (y.active
                                                    ? "text-burgundy-700 text-xl md:text-2xl group-hover:text-burgundy-800"
                                                    : "text-[#646161] text-base md:text-lg")
                                            }
                                        >
                                            {y.label}
                                        </span>
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                </div>

                {/* vertical timeline*/}
                <div className="hidden xl:flex xl:flex-col mt-8 ml-4">
                    <div className="relative flex flex-col gap-[25]">
                        <div className="absolute left-[7px] top-2 bottom-2 w-[2px] bg-[#646161]" />

                        {CAMP_YEARS.map((y) => {
                            return (
                                <button
                                    key={y.year}
                                    type="button"
                                    onClick={() => handleYearClick(y)}
                                    className={
                                        "relative z-10 flex items-center gap-3 group text-left " +
                                        (y.active
                                            ? "cursor-pointer"
                                            : "cursor-default")
                                    }
                                >
                                    <span
                                        className={
                                            "shrink-0 rounded-full transition-all duration-300 w-4 h-4 " +
                                            (y.active
                                                ? "bg-burgundy-700 shadow-[0_0_0_4px_rgba(139,26,26,0.18)] group-hover:scale-110"
                                                : "bg-white border-2 border-[#646161]")
                                        }
                                    />
                                    <span className="flex flex-col relative">
                                        <span
                                            className={
                                                "font-bold transition-all duration-200 " +
                                                (y.active
                                                    ? "text-burgundy-700 text-lg group-hover:text-burgundy-800"
                                                    : "text-[#646161] text-base")
                                            }
                                        >
                                            {y.label}
                                        </span>
                                        {tooltipYr === y.year &&
                                            y.year === "2027" && (
                                                <span className="absolute left-full ml-3 top-1/2 -translate-y-1/2 z-20 whitespace-nowrap rounded-md bg-gray-800 text-white text-xs px-2 py-1 shadow-lg">
                                                    Registration open!
                                                </span>
                                            )}
                                    </span>
                                </button>
                            );
                        })}
                    </div>
                </div>

                {/* summer camp */}
                <div className="w-full max-w-[900px] mx-auto xl:mx-0 xl:shrink-0 xl:p-3 md:mx-0">
                    <SummerCampBanner />
                </div>
            </div>
        </div>
    );
}
