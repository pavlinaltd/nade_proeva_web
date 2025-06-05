import { Link } from "react-router-dom";
import { ExternalLink, BookOpen, FileText, Image, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const Home = () => {

  const medals = [
    {
      src: "/images/temp-medal.jpg",
      alt: "Chevalier des Palmes Académiques Medal",
      caption: "Chevalier des Palmes Académiques"
    },
    {
      src: "/images/uni-medal.jpg",
      alt: "University Medal",
      caption: "Caption for University Medal"
    },
    {
      src: "/images/uni-medal.jpg",
      alt: "University Medal",
      caption: "Caption for University Medal"
    },
    {
      src: "/images/uni-medal.jpg",
      alt: "University Medal",
      caption: "Caption for University Medal"
    }
  ];

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="relative py-20 rounded-lg overflow-hidden bg-gradient-to-r from-yellow-500 to-yellow-600 text-white">
        <div className="flex flex-row justify-center px-20 gap-10">
          <img
            src="/images/nade.jpg"
            alt="Professor Dr. Nade Proeva"
            className="max-w-md h-auto border-0 object-cover rounded-lg"
          ></img>
          <div className="container mx-auto px-4 relative z-10">
            <div className="flex gap-10 max-w-3xl mx-auto text-left">
              <div className="flex flex-col justify-center text-justify gap-10">
                <h1 className="text-4xl md:text-3xl lg:text-4xl italic mb-6 text-burgundy-900 font-bold">
                  "The study of history is not just about uncovering the past, but understanding the complex tapestry of human experience that shapes our present and future." -
                  <span className="lg:text-2xl md:text-xl font-bold font-droidserif mb-8 leading-relaxed self-end"><i> Nade Proeva</i></span>
                </h1>
                <h1 className="text-4xl md:text-3xl lg:text-4xl mb-6 font-bold text-black">
                  "Проучувањето на историјата не е само откривање на минатото, туку и разбирање на сложената и богата ткаенина на човечкото искуство што го обликува нашето сегашно и идно постоење." -
                  <span ><i className="lg:text-3xl md:text-xl font-bold font-droidserif mb-8 leading-relaxed self-end"> Наде Проева</i></span>
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="container mx-0 px-4">
        <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
          <div className="text-lg text-justify w-4/5">
            {/* <h2 className="text-3xl font-bold text-memorial-900 mb-4">
              Remembering a Scholar
            </h2> */}
            <p className="text-gray-700 mb-4 leading-relaxed">
              <strong>Professor Dr. Nade Proeva</strong> was a distinguished Macedonian historian and classicist who
              served as a full professor at the Faculty of Philosophy, Department of History, at Ss.
              Cyril and Methodius University in Skopje, Macedonia from 1984 until her retirement in 2014.
            </p>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Born on September 9, 1949 in the town of Resen,  in the SFR of Macedonia, (YU) she pursued 
              her higher education at the University of Belgrade, graduating with a degree in Classical Archaeology in 1973.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Renowned for her rigorous scholarship and commitment to historical integrity, her work focused
              particularly on the history of ancient Macedonia, where she left a lasting legacy. Professor Proeva
              made enduring contributions to the academic community in her bellowed Macedonia and beyond.
            </p>
          </div>
        </div>
      </section>


      <h1 className="text-3xl text-center text-burgundy-800 font-bold">AWARDS IN RECOGNITION OF HER CONTRIBUTIONS TO EDUCATION AND ACADEMIC RESEARCH</h1>

      <div className="flex flex-row justify-around gap-4">
        <div className="flex flex-col text-center items-center gap-2">
          <img
            src="/images/temp-medal.jpg"
            alt=""
            width="150"
            height="400"
            className="rounded-lg"
          />
          <p>Chevalier des Palmes Académiques</p>
        </div>
        <div className="flex flex-col text-center items-center gap-2">
          <img
            src="/images/uni-medal.jpg"
            alt=""
            width="150"
            height="400"
            className="rounded-lg"
          />
          <p>Filozovski Fakultet</p>
        </div>
        <img
          src="/images/uni-medal.jpg"
          alt=""
          width="150"
          height="400"
          className="rounded-lg object-cover"
        />
        <img
          src="/images/uni-medal.jpg"
          alt=""
          width="150"
          height="400"
          className="rounded-lg object-cover"
        />
      </div>

      <div className="rounded-lg overflow-hidden shadow-md bg-slate-300 p-3">
        <video
          controls
          controlsList="nodownload"
          className="aspect-video"
        >
          <source src="/videos/NADE.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Fund Call-to-Action */}
      <section className="container mx-auto px-4 max-w-4xl">
        <div className="bg-amber-50 border border-burgundy-900/50 rounded-lg p-8 text-center">
          <div className="w-16 h-16 bg-burgundy-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Heart className="h-8 w-8 text-red-600" />
          </div>
          <h2 className="text-3xl font-semibold text-burgundy-800 mb-4">
            Support the Nade Proeva Scholarship Endowment
          </h2>
          <p className="text-gray-800 mb-6 max-w-2xl mx-auto">
            Your contribution to the endowment will help support the next generation 
            of historians dedicated to studying Macedonian history and culture.
          </p>
          <Button asChild className="bg-amber-500 border-amber-600/50 border-2 hover:bg-amber-600 text-white">
            <Link to="/donate">Contribute</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;
