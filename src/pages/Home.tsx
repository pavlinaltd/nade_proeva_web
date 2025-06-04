
import { Link } from "react-router-dom";
import { ExternalLink, BookOpen, FileText, Image, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const Home = () => {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="relative py-20 rounded-lg overflow-hidden bg-gradient-to-r from-burgundy-600 to-burgundy-700 text-white">
        <div className="flex flex-row justify-center px-20 gap-10">
          <img
            src="/images/nade.jpg"
            alt="Professor Dr. Nade Proeva"
            className="max-w-md h-auto border-0 rounded-lg"
          ></img>
          <div className="container mx-auto px-4 relative z-10">
            <div className="flex flex-col gap-20 max-w-3xl mx-auto text-left">
              <div className="flex text-justify">
                <h1 className="text-3xl md:text-3xl lg:text-4xl italic mb-6">
                  "The study of history is not just about uncovering the past, but understanding the complex tapestry of human experience that shapes our present and future." -
                  <span className="lg:text-2xl md:text-xl font-bold font-droidserif mb-8 leading-relaxed self-end">
                    <i> Nade Proeva</i>
                  </span>
                </h1>
              </div>
              <div className="flex flex-col gap-4">
                <img
                  src="/images/temp-medal.jpg"
                  alt=""
                  width="150"
                  height="400"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 bg-memorial-950/30 mix-blend-multiply"></div>
      </section>

      {/* Introduction Section */}
      <section className="container mx-0 px-4">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="text-lg md:w-1/2">
            {/* <h2 className="text-3xl font-bold text-memorial-900 mb-4">
              Remembering a Scholar
            </h2> */}
            <p className="text-gray-700 mb-4 leading-relaxed">
              <strong>Professor Dr. Nade Proeva</strong> was a distinguished Macedonian historian and classicist who
              served as a full professor at the Faculty of Philosophy, Department of History, at Ss.
              Cyril and Methodius University in Skopje, Macedonia from 1984 until her retirement in 2014.
            </p>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Born on September 9, 1949 in the town of Resen,  in the SFR of Macedonia,  (YU) she pursued 
              her higher education at the University of Belgrade, graduating with a degree in Classical Archaeology in 1973.
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Renowned for her rigorous scholarship and commitment to historical integrity, her work focused
              particularly on the history of ancient Macedonia, where she left a lasting legacy. Professor Proeva
              made enduring contributions to the academic community in her bellowed Macedonia and beyond.
            </p>
          </div>
          <div className="md:w-1/2">
            <div className="rounded-lg overflow-hidden shadow-md bg-white p-3">
              <video 
                width="640"
                height="480"
                controls
                controlsList="nodownload"
              >
                <source src="/videos/NADE.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </section>

      {/* Fund Call-to-Action */}
      <section className="container mx-auto px-4 max-w-4xl">
        <div className="bg-memorial-50 border border-memorial-100 rounded-lg p-8 text-center">
          <div className="w-16 h-16 bg-memorial-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Heart className="h-8 w-8 text-red-600" />
          </div>
          <h2 className="text-3xl font-semibold text-memorial-900 mb-4">
            Support the Nade Proeva Endowment Fund
          </h2>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            Your contribution to the endowment fund will help support the next generation 
            of historians dedicated to studying Macedonian history and culture.
          </p>
          <Button asChild className="bg-red-600 hover:bg-red-700 text-white">
            <Link to="/donate">Contribute</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;
