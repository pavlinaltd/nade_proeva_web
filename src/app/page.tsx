import {
    VideoPlayer,
    VideoPlayerContent,
    VideoPlayerControlBar,
    VideoPlayerMuteButton,
    VideoPlayerPlayButton,
    VideoPlayerSeekBackwardButton,
    VideoPlayerSeekForwardButton,
    VideoPlayerTimeDisplay,
    VideoPlayerTimeRange,
    VideoPlayerVolumeRange,
    VideoPlayerFullscreenButton,
} from "@/components/ui/shadcn-io/video-player";
import { ExternalLink } from "lucide-react";
import CampTimeline from "../app/summer-camp/CampTimeline";
import MacedonianCenter from "./mac-center/MacedonianCenter";
import FilmWithPoster from "./film-poster/FilmWithPoster";

export default function Home() {
    const medals = [
        {
            src: "/images/chevalier.png",
            title: "Chevalier des Palmes Académiques",
        },
        {
            src: "/images/faculty-skopje.jpg",
            title: "Faculty of Philosophy in Skopje",
        },
        {
            src: "/images/certifikat.jpg",
            title: "Filozovski Fakultet",
        },
    ];

    return (
        <div className="animate-fade-in space-y-10">
            {/* Hero Section */}

            <section className="relative p-5 md:p-10 rounded-lg bg-gradient-to-b from-burgundy-700 to-burgundy-800 text-white mx-0 mb-8 md:mx-[60px] md:mb-[60px]">
                <div className="flex flex-col md:flex-row justify-center items-center gap-5 md:gap-10">
                    <img
                        src="/images/nade.jpg"
                        alt="Professor Dr. Nade Proeva"
                        className="w-2/5 lg:w-1/2 h-auto object-cover rounded-lg block"
                    />

                    <div className="max-w-2xl flex flex-col gap-6 text-left">
                        {/* eng quote */}
                        <h1 className="text-justify text-lg sm:text-xl lg:text-2xl xl:text-3xl italic sm:font-bold text-white">
                            "The study of history is not just about uncovering
                            the past, but understanding the complex tapestry of
                            human experience that shapes our present and
                            future."
                        </h1>

                        {/* sign */}
                        <img
                            title="Nade Proeva"
                            src="/images/signature-white.png"
                            className="self-center w-[120px] md:w-[180px] xl:w-[240px] aspect-auto"
                        />

                        {/* macedonian quote */}
                        <h1 className="text-justify text-lg sm:text-xl lg:text-2xl xl:text-3xl italic sm:font-bold text-yellow-400">
                            "Проучувањето на историјата не е само откривање на
                            минатото, туку и разбирање на сложената и богата
                            ткаенина на човечкото искуство што го обликува
                            нашето сегашно и идно постоење."
                        </h1>
                    </div>
                </div>
            </section>
            {/* Introduction Section */}
            <section className="container mx-auto px-4 w-full lg:w-4/5">
                <div className="flex flex-col gap-8 justify-center items-center text-justify text-black">
                    <p className="leading-relaxed lg:text-xl">
                        <strong>Professor Dr. Nade Proeva</strong> was a
                        distinguished Macedonian historian and classicist who
                        served as a full professor at the Faculty of Philosophy,
                        Department of History, at Ss. Cyril and Methodius
                        University in Skopje, Macedonia from 1984 until her
                        retirement in 2014.
                    </p>
                    <p className="leading-relaxed lg:text-xl">
                        Born on September 9, 1949, in the town of Resen, in the
                        Socialist Republic of Macedonia (then part of the SFR
                        Yugoslavia), Nade Proeva pursued her higher education at
                        the University of Belgrade, earning a degree in
                        Classical Archaeology in 1973. She went on to defend her
                        master's thesis,{" "}
                        <i>
                            Typology of Tombstones in the Yugoslav Part of the
                            Roman Province of Macedonia
                        </i>
                        , at the Faculty of Philosophy in Belgrade in 1978. Her
                        academic journey culminated in the successful defense of
                        her doctoral dissertation,
                        <i>
                            The Influence of Settlers on the Development of
                            Cultural Conditions in the Roman Province of
                            Macedonia
                        </i>
                        , in 1992.
                    </p>
                    <p className="leading-relaxed lg:text-xl">
                        Renowned for her intellectual rigor and unwavering
                        commitment to historical truth, Professor Proeva devoted
                        her scholarly career to the study of ancient Macedonia.
                        Her research left a profound and lasting impact on the
                        field, earning her a respected place among historians
                        and archaeologists. Through her teaching, publications,
                        and dedication to scholarship, she made enduring
                        contributions to the academic life of her beloved
                        Macedonia and to the broader international community.
                    </p>
                </div>
            </section>
            {/* New Medal Feature Section */}
            <section className="container px-4 w-full lg:w-4/5">
                <div className="bg-gray-50 rounded-lg shadow-sm p-2 md:p-10">
                    <h2 className="text-burgundy-800 text-2xl md:text-3xl font-bold text-center mb-8">
                        The Order of{" "}
                        <span className="text-burgundy-600 font-extrabold">
                            8 September
                        </span>
                    </h2>

                    <div className="flex flex-col lg:flex-row gap-4 lg:gap-10 lg:items-stretch">
                        <img
                            src="/images/new_medal.jpg"
                            alt="The Order of 8 September Medal"
                            title="The Order of 8 September"
                            className="rounded-lg max-w-full lg:max-w-[48%] h-auto hover-lift"
                        />

                        <div className="flex flex-col justify-between overflow-hidden">
                            <p className="text-black text-justify text-xs md:text-base leading-snug">
                                The Order of{" "}
                                <strong className="font-semibold">
                                    8 September
                                </strong>{" "}
                                is one of the highest state decorations of the
                                Republic of North Macedonia. Bestowed by the
                                President of the Republic, it is awarded to
                                citizens, institutions, organizations, and
                                distinguished foreign individuals whose work has
                                made an exceptional contribution to the
                                development, international reputation, and
                                advancement of the country. Named after 8
                                September 1991, the day of Macedonia's
                                independence referendum, the Order recognizes
                                achievements of lasting national significance.
                                Professor Dr. Nade Proeva was posthumously
                                awarded this high honor in recognition of her
                                outstanding contribution to Macedonian
                                historiography and her lifelong dedication to
                                the study, preservation, and affirmation of
                                Macedonia's historical and cultural heritage.
                            </p>

                            <div className="flex gap-3 justify-center mt-4">
                                <a
                                    href="https://pretsedatel.mk/proeva_23062026/"
                                    target="_blank"
                                    className="no-underline text-white bg-burgundy-700 hover:bg-burgundy-900 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 text-center px-4 py-2 text-sm"
                                >
                                    Pretsedatel.mk
                                </a>
                                <a
                                    href="https://www.google.com/search?smstk=ChhZZkhWWkxqQys0ZDkxd3RLZSt0ckY1MD0QAQ%3D%3D&smstidx=0&q=orden+8-mi+septemvri+na+rm+od+1991+do+denes+dobitnici&udm=50&csuir=1&aep=34&kgs=87ed4bea5fe327bb&shem=epsd1%2Crimspwouoe&shndl=37&shmd=H4sIAAAAAAAA_3WNQQrCMBBF7U7cCC5dBZeCjV0oKt4lTJshHTCTMIm2yx7LM3geD2AFXYm7z-O__2fPYrYLYpHVYeNJJYwZ_U1IMSjxKlhVHY-VskGNHUxjqCkzNbQ8tznHdNK667rSpQyZmrIJXicEadpNlOCDBvImtSBocnv1NQNdyshutfjaLgR3wRJIryf9MB-K-_RRmH_b5MFh0rUAW2L3sZ1xApaQs676H2ZGny2INdV-a-P7_gXBiv3g9wAAAA&shmds=v1_ARwrE23MNEsLQqANb-J20jY2jS9joerNtBWPjDfiZUWtrtEMxw&source=sh%2Fx%2Faim%2Fm1%2F4"
                                    target="_blank"
                                    className="no-underline text-white bg-burgundy-700 hover:bg-burgundy-900 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 text-center px-4 py-2 text-sm"
                                >
                                    Google Search
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Awards Section */}
            <section className="container mx-auto px-4 w-full lg:w-4/5">
                <div className="flex flex-col md:flex-row items-center justify-between gap-10 rounded-lg">
                    {medals.map((medal, index) => (
                        <img
                            key={index}
                            src={medal.src}
                            alt={`${medal.title} Certificate and Medal`}
                            title={medal.title}
                            className="rounded-lg w-2/3 lg:w-1/3 min-w-0"
                        />
                    ))}
                </div>
            </section>

            {/* camp+timelines */}
            <hr style={{ borderColor: "#ab2345", color: "#ab2345" }} />
            <section className="container w-full lg:w-4/5">
                <CampTimeline />
            </section>

            {/* Video film + macedonian center */}
            <section className="container flex flex-col justify-between gap-10 md:gap-20 mx-auto px-4 w-full lg:w-[77%] xl:w-[90%]">
                <div className="flex flex-col lg:flex-row gap-4 items-stretch">
                    {/* Video Feature Section */}
                    <div className="flex flex-col flex-1 p-5 rounded-xl bg-gray-100 shadow-sm">
                        <FilmWithPoster />
                    </div>
                    {/* poster center — right side */}
                    <div className="flex flex-col flex-1 p-5 rounded-xl bg-gray-100 shadow-sm">
                        <MacedonianCenter />
                    </div>
                </div>
            </section>

            {false && (
                <section className="container flex flex-col gap-10 md:gap-20 mx-auto px-4 w-full lg:w-2/3 xl:w-4/5 justify-items-center">
                    {/* book feature section */}
                    <div className="flex flex-col items-center sm:flex-row sm:items-center gap-8 sm:gap-10 justify-center mx-auto w-fill">
                        {/* Book Cover */}
                        <div className="flex-shrink-0 w-full sm:w-1/4 max-w-[220px] mx-auto sm:max-w-none">
                            <img
                                className="w-full rounded-lg object-contain bg-white hover-lift"
                                src="/images/from-her-lectures.jpg"
                                alt="From Her Lectures: Our Words Book Cover"
                            />
                        </div>

                        {/* Text + Button */}
                        <div className="flex flex-col gap-6 w-full sm:w-3/5 max-w-lg">
                            <p className="text-black text-center sm:text-justify text-base sm:text-xl leading-relaxed">
                                This volume is a tribute by five former students
                                of Professor Dr. Nade Proeva, who came together
                                to honor her legacy. It brings together their
                                writings on Macedonian history, spanning
                                archaeology, ethnology, anthropology, mythology,
                                and religion from antiquity to the present.
                                Through these pages, they celebrate their
                                teacher's lasting influence and honor her
                                lifelong devotion to truth, scholarship, and her
                                beloved homeland, Macedonia.
                            </p>
                            <a
                                href="/images/instead-of-a-foreword.pdf"
                                target="_blank"
                                title="Introduction"
                                className="no-underline text-white bg-burgundy-700 hover:bg-burgundy-900 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer p-4 flex items-center justify-start"
                            >
                                <div className="flex items-center gap-4 text-sm">
                                    <ExternalLink />
                                    <p>Instead of a Foreword...</p>
                                </div>
                            </a>
                        </div>
                    </div>
                </section>
            )}
        </div>
    );
}
