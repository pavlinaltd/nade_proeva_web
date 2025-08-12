import { Link } from "react-router-dom";
import { ExternalLink, BookOpen, FileText, Image, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

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
    <div className="animate-fade-in space-y-12 md:space-y-24">
      {/* Hero Section */}
      <section className="relative p-5 md:p-10 lg:p-20 rounded-lg overflow-hidden bg-gradient-to-b from-yellow-400 to-yellow-500 text-white">
        <div className="flex flex-col md:flex-row justify-center items-center gap-5 md:gap-10">
          <img
            src="/images/nade.jpg"
            alt="Professor Dr. Nade Proeva"
            className="w-2/5 lg:w-1/2 h-auto object-cover rounded-lg block"
          />
          <div className="container mx-auto px-4 relative z-10">
            <div className="flex gap-10 max-w-3xl mx-auto text-left">
              <div className="flex flex-col justify-center text-justify sm:text-lg md:text-xl lg:text-2xl xl:text-3xl italic">
                <h1 className=" text-black font-bold">
                  "The study of history is not just about uncovering the past, but understanding the complex tapestry of human experience that shapes our present and future."
                </h1>
                <span className="self-end">
                  <img
                    title="Nade Proeva"
                    src="/images/sign-luna.png"
                    className="aspect-auto w-[150px] md:w-[200px] xl:w-[300px] mt-[-40px] mb-[-40px]"
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
      <section className="container mx-auto px-4 w-full lg:w-4/5">
        <div className="flex flex-col sm:flex-row items-center justify-between md:justify-around gap-4 rounded-lg">
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
      <section className="container mx-auto px-4 w-full lg:w-3/5 ">
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

      {/* Book Feature Section */}
      <section className="container mx-auto px-4 w-full lg:w-4/5">
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-12 md:gap-24">
            <img 
              className="max-w-[50%] md:max-w-[25%] rounded-lg"
              src="/images/from-her-lessons.png"
              alt=""
            />
            <img 
              className="max-w-[50%] md:max-w-[25%] rounded-lg"
              src="/images/book-promo.jpg"
              alt=""
            />
          </div>
      </section>

      {/* Fund Call-to-Action */}
      <section className="container mx-auto px-4 w-full lg:w-4/5">
        <div className="bg-amber-50 border border-burgundy-900 rounded-lg p-8">
          <h2 className="sm:text-lg lg:text-2xl xl:text-3xl font-semibold text-burgundy-800 text-center mb-4">
            Support the Nade Proeva Scholarship Endowment
          </h2>
            <p className="text-gray-800 text-center max-w-2xl mx-auto xl:text-lg">
            Your patronage to the Endowment Fund will help empower the next generation
            of historians committed to exploring and preserving Macedonian history and culture. To grow the Endowment, contact
            <span> <a href="mailto:info@macedonianarts.org" className="text-burgundy-700 hover:underline">info@macedonianarts.org</a></span>
            </p>
        </div>
      </section>
    </div>
  );
};

export default Home;
