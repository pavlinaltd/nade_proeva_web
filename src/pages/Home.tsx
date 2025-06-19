import { Link } from "react-router-dom";
import { ExternalLink, BookOpen, FileText, Image, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const Home = () => {

  const medals = [
    {
      medal: "/images/chevalier.jpg",
      certificate: "/images/palmes-academiques.jpg",
      alt: "Chevalier des Palmes Académiques Medal",
      title: "Chevalier des Palmes Académiques"
    },
    {
      medal: "/images/award-unknown.jpg",
      certificate: "/images/sertifikat.jpg",
      alt: "Filozovski Fakultet",
      title: "Filozovski Fakultet"
    },
  ];  

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="relative p-10 lg:p-20 rounded-lg overflow-hidden bg-gradient-to-b from-yellow-500 to-yellow-600 text-white">
        <div className="flex flex-col lg:flex-row justify-center items-center gap-10">
          <img
            src="/images/nade.jpg"
            alt="Professor Dr. Nade Proeva"
            className="w-1/2 h-auto border-0 object-cover rounded-lg block"
          ></img>
          <div className="container mx-auto px-4 relative z-10">
            <div className="flex gap-10 max-w-3xl mx-auto text-left">
              <div className="flex flex-col justify-center text-justify sm:text-lg lg:text-2xl xl:text-3xl italic">
                <h1 className=" text-black font-bold">
                  "The study of history is not just about uncovering the past, but understanding the complex tapestry of human experience that shapes our present and future."
                </h1>
                <span className="self-end">
                  <img
                    title="Nade Proeva"
                    src="/images/sign-luna.png"
                    className="aspect-auto hidden md:block md:w-[200px] lg:w-[200px] xl:w-[300px] md:mt-[-40px] md:mb-[-40px]"
                  />
                </span>
                <br />
                <h1 className="font-bold text-burgundy-900">
                  "Проучувањето на историјата не е само откривање на минатото, туку и разбирање на сложената и богата ткаенина на човечкото искуство што го обликува нашето сегашно и идно постоење."
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="container mx-0 px-4">
        <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
          <div className="text-xs md:text-base lg:text-base xl:text-lg text-justify w-4/5">
            {/* <h2 className="text-3xl font-bold text-memorial-900 mb-4">
              Remembering a Scholar
            </h2> */}
            <p className="text-gray-700 mb-4 leading-relaxed">
              <strong>Professor Dr. Nade Proeva</strong> was a distinguished Macedonian historian and classicist who
              served as a full professor at the Faculty of Philosophy, Department of History, at Ss.
              Cyril and Methodius University in Skopje, Macedonia from 1984 until her retirement in 2014.
            </p>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Born on September 9, 1949, in the town of Resen, in the Socialist Republic of Macedonia
              (then part of the SFR Yugoslavia), Nade Proeva pursued her higher education at the
              University of Belgrade, earning a degree in Classical Archaeology in 1973.
              She went on to defend her master's thesis, <i>Typology of Tombstones in the Yugoslav Part
              of the Roman Province of Macedonia</i>, at the Faculty of Philosophy in Belgrade in 1978.
              Her academic journey culminated in the successful defense of her doctoral dissertation,
              <i>The Influence of Settlers on the Development of Cultural Conditions in the Roman Province of Macedonia</i>, in 1992.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Renowned for her intellectual rigor and unwavering commitment to historical truth,
              Professor Proeva devoted her scholarly career to the study of ancient Macedonia.
              Her research left a profound and lasting impact on the field, earning her a respected place
              among historians and archaeologists. Through her teaching, publications,
              and dedication to scholarship, she made enduring contributions to the academic life
              of her beloved Macedonia and to the broader international community.
            </p>
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="container mx-0 px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 w-4/5 mx-auto bg-yellow-500 p-5 rounded-lg">
          <img
            src={medals[0].certificate}
            alt={medals[0].title}
            width="150"
            height="400"
            className="rounded-lg"
          />
          <img
            src={medals[0].medal}
            alt={medals[0].title}
            width="150"
            height="400"
            className="rounded-lg"
          />
          <h1 className="text-2xl lg:text-3xl font-vollkornsc self-start text-burgundy-800 font-bold">HONORS</h1>
          <img
            src={medals[1].certificate}
            alt={medals[1].title}
            width="150"
            height="400"
            className="rounded-lg"
          />
          <img
            src={medals[1].medal}
            alt={medals[1].title}
            width="150"
            height="400"
            className="rounded-lg"
          />
        </div>
      </section>

      {/* Video Section */}
      <section className="container mx-0 px-4">
        <div className="flex justify-center overflow-hidden w-4/5 mx-auto">
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

      {/* Fund Call-to-Action */}
      <section className="container mx-auto px-4 w-2/3">
        <div className="bg-amber-50 border border-burgundy-900/50 rounded-lg p-8 text-center">
          <h2 className="sm:text-lg lg:text-2xl xl:text-3xl font-semibold text-burgundy-800 mb-4">
            Support the Nade Proeva Scholarship Endowment
          </h2>
          <p className="text-gray-800 max-w-2xl mx-auto text-xs md:text-sm lg:text-base xl:text-lg">
            Your contribution to the endowment will help support the next generation
            of historians dedicated to studying Macedonian history and culture. To grow the endowment, contact&nbsp;
            <Link to="mailto:info@macedonianarts.org" className="text-burgundy-700 hover:underline">info@macedonianarts.org</Link>.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;
