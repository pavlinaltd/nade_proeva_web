import { ReactNode } from "react";

interface CardPairProps {
  img: string;
  alt: string;
  text: ReactNode;
  imgClass?: string;
}
const CardPair = ({img, alt, text, imgClass}: CardPairProps) => {
  return (
    <div className="flex flex-col sm:flex-row mx-auto w-full justify-center items-center sm:items-start gap-6 bg-gray-100 border border-gray-300 rounded-lg p-5">
      <img
        className={`w-[200px] md:self-stretch rounded-lg object-contain bg-white ${imgClass}`}
        src={img}
        alt={alt}
      />

      <div className="text-black text-justify justify-evenly mx-auto p-2">
        <p>{text}</p>
      </div>
    </div>
  )
}

const Home = () => {

  const medals = [
    {
      src: "/images/chevalier.png",
      title: "Chevalier des Palmes Académiques",
    },
    {
      src: "/images/certifikat.jpg",
      title: "Filozovski Fakultet",
    },
  ];

  return (
    <div className="animate-fade-in space-y-5 md:space-y-10">
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
        <div className="flex flex-col gap-4 justify-center items-center text-justify text-gray-700 xl:text-lg">
          <p className="leading-relaxed">
            <strong>Professor Dr. Nade Proeva</strong> was a distinguished Macedonian historian and classicist who
            served as a full professor at the Faculty of Philosophy, Department of History, at Ss.
            Cyril and Methodius University in Skopje, Macedonia from 1984 until her retirement in 2014.
          </p>
          <p className="leading-relaxed">
            Born on September 9, 1949, in the town of Resen, in the Socialist Republic of Macedonia
            (then part of the SFR Yugoslavia), Nade Proeva pursued her higher education at the
            University of Belgrade, earning a degree in Classical Archaeology in 1973.
            She went on to defend her master's thesis, <i>Typology of Tombstones in the Yugoslav Part
            of the Roman Province of Macedonia</i>, at the Faculty of Philosophy in Belgrade in 1978.
            Her academic journey culminated in the successful defense of her doctoral dissertation,
            <i>The Influence of Settlers on the Development of Cultural Conditions in the Roman Province of Macedonia</i>, in 1992.
          </p>
          <p className="leading-relaxed">
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
      <section className="container mx-auto px-4 py-4 w-full lg:w-3/5">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 rounded-lg">
          {medals.map((medal, index) => (
            <img
              key={index}
              src={medal.src}
              alt={`${medal.title} Certificate and Medal`}
              title={medal.title}
              className="rounded-lg max-h-[200px] max-w-[400px] bg-gradient-to-b to-yellow-600 from-yellow-300 p-3"
            />
          ))}
        </div>
      </section>

      {/* Video Section */}
      <section className="container mx-auto px-4 py-4 w-full lg:w-4/5">
        <div className="flex justify-center overflow-hidden">
          <video
            controls
            controlsList="nodownload"
            className="aspect-video rounded-lg"
          >
            <source src="/videos/NADE.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </section>

      {/* Combined */}
      <section className="container flex flex-col justify-between gap-5 md:gap-10 mx-auto px-4 w-full lg:w-4/5 xl:w-3/5">
        {/* Book Feature Section */}
        <CardPair
          img={"/images/from-her-lectures.jpg"}
          alt={"From Her Lectures: Our Words Book Cover"}
          text={
            <>This volume is a tribute by six former students of Professor Dr. Nade Proeva, who came together to honor her legacy.
            It brings together their writings on Macedonian history, spanning archaeology, ethnology, anthropology, mythology, and religion from antiquity to the present.
            Through these pages, they celebrate their teacher's lasting influence and honor her lifelong devotion to truth, scholarship, and her beloved homeland, Macedonia.
            </>
          }
        />

        {/* Fund Call-to-Action */}
        <CardPair
          img={"/images/logo-text.jpg"}
          alt={"Nade Proeva Endowment Fund Logo"}
          text={
            <>
            Your support of the <i>Nade Proeva Endowment Fund</i> will help inspire and empower the next generation
            of historians dedicated to researching, preserving, and sharing Macedonian historical past. To help grow the Endowment contact{' '}
            <a href="mailto:info@macedonianarts.org" className="text-red-600 hover:underline">
              info@macedonianarts.org
            </a>
            .
            </>
          }
          imgClass={"py-5"}
        />
      </section>
    </div>
  );
};

export default Home;
