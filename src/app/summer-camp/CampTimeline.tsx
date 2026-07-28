"use client";

import { useState, useRef } from "react";
import { useRouter } from "next/navigation";

import SummerCampBanner from "./SummerCampBanner";
import { Label } from "recharts";
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
            router.push("/camp-content");
        } else if (y.year === "2027") {
            showTooltip(y.year);
        } else {
            router.push("/not-found");
        }
    };

    return (
        <div className="w-full flex flex-col xl:flex-row xl:items-start xl:justify-center xl:gap-10">
            {/*horizontal tabs*/}
            <div className="xl:hidden -mt-8 md:-mt-10 mb-6">
                <div className="flex items-baseline gap-3 mb-4">
                    <h3 className="text-burgundy-800 font-extrabold text-2xl md:text-3xl tracking-tight">
                        Timeline
                    </h3>
                </div>

                <div className="relative">
                    <div className="absolute left-2 right-2 top-[15px] z-0 h-[2px] bg-gray-200 " />

                    <div className="flex gap-3 md:gap-6 overflow-x-auto scrollbar-none pt-2 pb-2">
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
                                                : "bg-gray-100 border-2 border-gray-300")
                                        }
                                    />
                                    <span
                                        className={
                                            "mt-2 font-bold transition-all duration-200 whitespace-nowrap " +
                                            (y.active
                                                ? "text-burgundy-700 text-xl md:text-2xl group-hover:text-burgundy-800"
                                                : "text-gray-300 text-base md:text-lg")
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
            <div className="hidden xl:flex xl:flex-col xl:shrink-0 xl:w-[150px] xl:pt-0">
                <h3 className="text-burgundy-800 font-extrabold text-3xl tracking-tight mb-4">
                    Timeline
                </h3>

                <div className="relative flex flex-col gap-6">
                    <div className="absolute left-[7px] top-2 bottom-2 w-[2px] bg-gray-200" />

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
                                            : "bg-white border-2 border-gray-200")
                                    }
                                />
                                <span className="flex flex-col relative">
                                    <span
                                        className={
                                            "font-bold transition-all duration-200 " +
                                            (y.active
                                                ? "text-burgundy-700 text-lg group-hover:text-burgundy-800"
                                                : "text-gray-300 text-base")
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
            <div className="w-full max-w-[900px] mx-auto xl:mx-0 xl:shrink-0">
                <SummerCampBanner />
            </div>
        </div>
    );
}
