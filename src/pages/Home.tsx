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
  VideoPlayerFullscreenButton
} from "@/components/ui/shadcn-io/video-player";

const Home = () => {

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
    <div className="animate-fade-in space-y-16">
      {/* Hero Section */}
      <section className="relative p-5 md:p-10 lg:p-20 rounded-lg bg-gradient-to-b from-burgundy-700 to-burgundy-800 text-white">
        <div className="flex flex-col md:flex-row justify-center items-center gap-5 md:gap-10">
          <img
            src="/images/nade.jpg"
            alt="Professor Dr. Nade Proeva"
            className="w-2/5 lg:w-1/2 h-auto object-cover rounded-lg block"
          />
          <div className="container mx-auto px-4 relative z-10">
            <div className="flex gap-10 max-w-3xl mx-auto text-left">
              <div className="flex flex-col justify-center text-justify text-lg sm:text-xl lg:text-2xl xl:text-3xl italic">
                <h1 className=" text-white sm:font-bold">
                  "The study of history is not just about uncovering the past, but understanding the complex tapestry of human experience that shapes our present and future."
                </h1>
                <span className="self-end">
                  <img
                    title="Nade Proeva"
                    src="/images/signature-white.png"
                    className="aspect-auto w-[150px] md:w-[200px] xl:w-[300px] mt-[-40px] mb-[-40px]"
                  />
                </span>
                <br />
                <h1 className="sm:font-bold text-yellow-400">
                  "Проучувањето на историјата не е само откривање на минатото, туку и разбирање на сложената и богата ткаенина на човечкото искуство што го обликува нашето сегашно и идно постоење."
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="container mx-auto px-4 w-full lg:w-4/5">
        <div className="flex flex-col gap-8 justify-center items-center text-justify text-black">
          <p className="leading-relaxed lg:text-xl">
            <strong>Professor Dr. Nade Proeva</strong> was a distinguished Macedonian historian and classicist who
            served as a full professor at the Faculty of Philosophy, Department of History, at Ss.
            Cyril and Methodius University in Skopje, Macedonia from 1984 until her retirement in 2014.
          </p>
          <p className="leading-relaxed lg:text-xl">
            Born on September 9, 1949, in the town of Resen, in the Socialist Republic of Macedonia
            (then part of the SFR Yugoslavia), Nade Proeva pursued her higher education at the
            University of Belgrade, earning a degree in Classical Archaeology in 1973.
            She went on to defend her master's thesis, <i>Typology of Tombstones in the Yugoslav Part
            of the Roman Province of Macedonia</i>, at the Faculty of Philosophy in Belgrade in 1978.
            Her academic journey culminated in the successful defense of her doctoral dissertation,
            <i>The Influence of Settlers on the Development of Cultural Conditions in the Roman Province of Macedonia</i>, in 1992.
          </p>
          <p className="leading-relaxed lg:text-xl">
            Renowned for her intellectual rigor and unwavering commitment to historical truth,
            Professor Proeva devoted her scholarly career to the study of ancient Macedonia.
            Her research left a profound and lasting impact on the field, earning her a respected place
            among historians and archaeologists. Through her teaching, publications,
            and dedication to scholarship, she made enduring contributions to the academic life
            of her beloved Macedonia and to the broader international community.
          </p>
        </div>
      </section>

      {/* Awards Section */}
      <section className="container mx-auto px-4 py-4 w-full lg:w-4/5">
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

      {/* Video Section */}
      <section className="container mx-auto px-4 py-4 w-full lg:w-4/5">
        <VideoPlayer className={'video-player overflow-hidden aspect-video shadow-lg rounded-lg'}>
            <VideoPlayerContent
              crossOrigin=""
              preload="auto"
              slot="media"
              src="/videos/Homepage.mp4"
            />
            <VideoPlayerControlBar>
              <VideoPlayerPlayButton />
              <VideoPlayerSeekBackwardButton className="hidden md:inline-flex" />
              <VideoPlayerSeekForwardButton className="hidden md:inline-flex" />
              <VideoPlayerTimeRange />
              <VideoPlayerTimeDisplay showDuration className="hidden md:inline-flex" />
              <VideoPlayerMuteButton />
              <VideoPlayerVolumeRange className="hidden md:inline-flex" />
              <VideoPlayerFullscreenButton />
            </VideoPlayerControlBar>
          </VideoPlayer>
      </section>

      {/* Combined */}
      <section className="container flex flex-col justify-between gap-10 md:gap-20 mx-auto px-4 w-full lg:w-2/3 xl:w-4/5">
        {/* Book Feature Section */}
        <div className="flex flex-col sm:flex-row mx-auto w-full xl:w-2/3 justify-center items-center gap-6 rounded-lg">
          <img
            className={`w-[250px] md:self-stretch rounded-lg object-contain bg-white`}
            src="/images/from-her-lectures.jpg"
            alt="From Her Lectures: Our Words Book Cover"
          />

          <div className="text-black text-justify mx-auto p-2">
            <p className="lg:text-xl">
              This volume is a tribute by six former students of Professor Dr. Nade Proeva, who came together to honor her legacy.
              It brings together their writings on Macedonian history, spanning archaeology, ethnology, anthropology, mythology, and religion from antiquity to the present.
              Through these pages, they celebrate their teacher's lasting influence and honor her lifelong devotion to truth, scholarship, and her beloved homeland, Macedonia.
            </p>
          </div>
        </div>

        {/* Fund Call-to-Action */}
        <div className="mx-auto w-full xl:w-2/3 flex flex-col items-center sm:block">
          <img
            className={`w-[250px] md:self-stretch rounded-lg object-contain sm:ml-5 sm:float-right`}
            style={{shapeOutside: 'polygon(36% 0, 27% 12%, 29% 24%, 9% 35%, 6% 51%, 12% 70%, 31% 100%, 44% 100%, 100% 0)'}}
            src="/images/logo-text.jpg"
            alt="Nade Proeva Endowment Fund Logo"
            draggable={false}
          />
          <div className="text-black text-justify sm:text-right mx-auto p-2">
            <p className="lg:text-xl">
              Your support of the <i>Nade Proeva Endowment Fund</i> will help inspire and empower the next generation
              of historians dedicated to researching, preserving, and sharing Macedonian historical past. To help grow the Endowment contact{' '}
              <a href="mailto:info@macedonianarts.org" className="text-red-600 hover:underline">
                info@macedonianarts.org
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
