"use client";

import { useState } from "react";
import SummerCampBanner from "./SummerCampBanner";

// ── Add/edit years here. `content: "banner"` renders the existing
//    SummerCampBanner (poster + form). Leave content null for years
//    that don't have material yet — they'll show a placeholder.
const CAMP_YEARS = [
    { year: "2027", label: "2027", content: "banner" as const },
    { year: "2026", label: "2026", content: null },
    { year: "2006", label: "2006", content: null },
];

export default function CampTimeline() {
    const [activeYear, setActiveYear] = useState(CAMP_YEARS[0].year);
    const active = CAMP_YEARS.find((y) => y.year === activeYear)!;
    const activeIndex = CAMP_YEARS.findIndex((y) => y.year === activeYear);

    // % position of the active dot along the row/column, used to fill the
    // line up to that point (progress-bar style) instead of a flat gray line.
    const fillPercent =
        CAMP_YEARS.length > 1
            ? (activeIndex / (CAMP_YEARS.length - 1)) * 100
            : 0;

    const contentBlock =
        active.content === "banner" ? (
            <SummerCampBanner />
        ) : (
            <div className="flex flex-col items-center justify-center text-center gap-2 border border-dashed border-gray-300 rounded-lg bg-gray-50 w-full h-[560px]">
                <p className="text-burgundy-800 font-bold text-lg">
                    {active.label}
                </p>
                <p className="text-gray-500 text-sm">Under Construction</p>
            </div>
        );

    return (
        <div className="w-full flex flex-col xl:flex-row xl:items-start xl:justify-center xl:gap-10">
            {/* ── Horizontal tabs — shown below xl breakpoint ── */}
            <div className="xl:hidden -mt-4 md:-mt-6 mb-6">
                <div className="flex items-baseline gap-3 mb-4">
                    <h3 className="text-burgundy-800 font-extrabold text-2xl md:text-3xl tracking-tight">
                        Timeline
                    </h3>
                    <span className="text-gray-400 text-xs md:text-sm uppercase tracking-widest">
                        Browse by year
                    </span>
                </div>

                <div className="relative pt-[7px]">
                    <div className="absolute left-[7px] right-[7px] top-[7px] h-[2px] bg-gray-200" />
                    <div
                        className="absolute left-[7px] top-[7px] h-[2px] bg-burgundy-700 transition-all duration-300 ease-out"
                        style={{
                            width: `calc(${fillPercent}% - ${
                                fillPercent > 0 ? "14px" : "0px"
                            })`,
                        }}
                    />

                    <div className="flex gap-6 md:gap-12 overflow-x-auto scrollbar-none pb-2">
                        {CAMP_YEARS.map((y) => {
                            const isActive = y.year === activeYear;
                            return (
                                <button
                                    key={y.year}
                                    type="button"
                                    onClick={() => setActiveYear(y.year)}
                                    className="relative flex flex-col items-center shrink-0 group -mt-[7px]"
                                >
                                    <span
                                        className={
                                            "relative z-10 rounded-full transition-all duration-300 " +
                                            (isActive
                                                ? "w-[14px] h-[14px] bg-burgundy-700 shadow-[0_0_0_4px_rgba(139,26,26,0.18)]"
                                                : "w-[14px] h-[14px] bg-white border-2 border-gray-300 group-hover:border-burgundy-400 group-hover:scale-110")
                                        }
                                    />
                                    <span
                                        className={
                                            "mt-2 font-bold transition-all duration-200 whitespace-nowrap " +
                                            (isActive
                                                ? "text-burgundy-700 text-xl md:text-2xl"
                                                : "text-gray-400 text-base md:text-lg group-hover:text-burgundy-500")
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

            {/* ── Vertical timeline — shown at xl and above, anchored left of the banner ── */}
            <div className="hidden xl:flex xl:flex-col xl:shrink-0 xl:w-[150px] xl:pt-10">
                <h3 className="text-burgundy-800 font-extrabold text-xl tracking-tight mb-1">
                    Timeline
                </h3>
                <span className="text-gray-400 text-[11px] uppercase tracking-widest mb-7">
                    Browse by year
                </span>

                <div className="relative flex flex-col gap-8 pl-1">
                    <div className="absolute left-[7px] top-[7px] bottom-[7px] w-[2px] bg-gray-200" />
                    <div
                        className="absolute left-[7px] top-[7px] w-[2px] bg-burgundy-700 transition-all duration-300 ease-out"
                        style={{
                            height: `calc(${fillPercent}% - ${
                                fillPercent > 0 ? "14px" : "0px"
                            })`,
                        }}
                    />

                    {CAMP_YEARS.map((y) => {
                        const isActive = y.year === activeYear;
                        return (
                            <button
                                key={y.year}
                                type="button"
                                onClick={() => setActiveYear(y.year)}
                                className="relative z-10 flex items-center gap-3 group text-left"
                            >
                                <span
                                    className={
                                        "shrink-0 rounded-full transition-all duration-300 " +
                                        (isActive
                                            ? "w-[14px] h-[14px] bg-burgundy-700 shadow-[0_0_0_4px_rgba(139,26,26,0.18)]"
                                            : "w-[14px] h-[14px] bg-white border-2 border-gray-300 group-hover:border-burgundy-400 group-hover:scale-110")
                                    }
                                />
                                <span className="flex flex-col">
                                    <span
                                        className={
                                            "font-bold transition-all duration-200 " +
                                            (isActive
                                                ? "text-burgundy-700 text-lg"
                                                : "text-gray-400 text-base group-hover:text-burgundy-500")
                                        }
                                    >
                                        {y.label}
                                    </span>
                                </span>
                            </button>
                        );
                    })}
                </div>
            </div>

            {/* ── Content — single shared instance, positioned by the flex row above ── */}
            <div className="w-full max-w-[900px] mx-auto xl:mx-0 xl:shrink-0">
                {contentBlock}
            </div>
        </div>
    );
}
