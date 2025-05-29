
import { Link } from "react-router-dom";
import { ExternalLink, BookOpen, FileText, Image, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const Home = () => {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="relative py-20 rounded-lg overflow-hidden bg-gradient-to-r from-burgundy-900 to-burgundy-700 text-white">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold mb-6">
              Professor Nade Proeva
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-100">
              September 9, 1949 - November 6, 2024
            </p>
            <p className="text-lg md:text-xl mb-8 leading-relaxed">
              A distinguished Macedonian historian, academic, and devoted educator 
              whose work illuminated ancient Macedonian history.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="bg-white text-memorial-900 hover:bg-gray-100">
                <Link to="/about">About Her Life</Link>
              </Button>
              <Button asChild size="lg" className="bg-red-600 hover:bg-red-700 text-white">
                <Link to="/donate">Support the Scholarship</Link>
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 bg-memorial-950/30 mix-blend-multiply"></div>
      </section>

      {/* Introduction Section */}
      <section className="container mx-auto px-4 max-w-4xl">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="md:w-1/3">
            <div className="rounded-lg overflow-hidden shadow-md bg-white p-3">
              <img 
                src="/nade.jpg" 
                alt="Professor Nade Proeva" 
                className="w-full h-auto rounded"
              />
            </div>
          </div>
          <div className="md:w-2/3">
            <h2 className="text-3xl font-playfair font-semibold text-memorial-900 mb-4">
              Remembering a Scholar
            </h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Professor Nade Proeva was a Macedonian historian, classicist, and full professor at Ss. Cyril and Methodius 
              University at the Faculty of Philosophy - Department of History in Skopje from 1984 until her retirement in 2015. 
              Born in Resen on September 9, 1949, she completed her higher education at the University of Belgrade, graduating 
              in Classical Archaeology in 1973.
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Through her rigorous scholarship and dedication to historical accuracy, she made invaluable contributions to academia 
              and to Macedonian cultural heritage, specializing in ancient Macedonian history.
            </p>
            <div className="flex items-center">
              <Button asChild variant="outline" className="flex items-center gap-2">
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <ExternalLink size={16} />
                  <span>Watch Documentary</span>
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Sections Preview */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-playfair font-semibold text-center text-memorial-900 mb-12">
            Explore Her Legacy
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Preview cards */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover-scale">
              <div className="p-6">
                <div className="w-12 h-12 bg-memorial-100 rounded-full flex items-center justify-center mb-4">
                  <BookOpen className="h-6 w-6 text-memorial-700" />
                </div>
                <h3 className="text-xl font-playfair font-semibold mb-3 text-memorial-900">Life & Career</h3>
                <p className="text-gray-600 mb-4">
                  Discover her academic journey, teaching history, and personal life.
                </p>
                <Button asChild variant="link" className="p-0 h-auto text-memorial-700">
                  <Link to="/about">Learn More</Link>
                </Button>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover-scale">
              <div className="p-6">
                <div className="w-12 h-12 bg-memorial-100 rounded-full flex items-center justify-center mb-4">
                  <BookOpen className="h-6 w-6 text-memorial-700" />
                </div>
                <h3 className="text-xl font-playfair font-semibold mb-3 text-memorial-900">Books</h3>
                <p className="text-gray-600 mb-4">
                  Explore her published works and academic contributions.
                </p>
                <Button asChild variant="link" className="p-0 h-auto text-memorial-700">
                  <Link to="/books">View Books</Link>
                </Button>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover-scale">
              <div className="p-6">
                <div className="w-12 h-12 bg-memorial-100 rounded-full flex items-center justify-center mb-4">
                  <FileText className="h-6 w-6 text-memorial-700" />
                </div>
                <h3 className="text-xl font-playfair font-semibold mb-3 text-memorial-900">Papers</h3>
                <p className="text-gray-600 mb-4">
                  Access her academic papers and scholarly research.
                </p>
                <Button asChild variant="link" className="p-0 h-auto text-memorial-700">
                  <Link to="/papers">Read Papers</Link>
                </Button>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover-scale">
              <div className="p-6">
                <div className="w-12 h-12 bg-memorial-100 rounded-full flex items-center justify-center mb-4">
                  <Image className="h-6 w-6 text-memorial-700" />
                </div>
                <h3 className="text-xl font-playfair font-semibold mb-3 text-memorial-900">Gallery</h3>
                <p className="text-gray-600 mb-4">
                  View photos, videos, and media coverage of her work.
                </p>
                <Button asChild variant="link" className="p-0 h-auto text-memorial-700">
                  <Link to="/gallery">View Gallery</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scholarship Call-to-Action */}
      <section className="container mx-auto px-4 max-w-4xl">
        <div className="bg-memorial-50 border border-memorial-100 rounded-lg p-8 text-center">
          <div className="w-16 h-16 bg-memorial-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Heart className="h-8 w-8 text-red-600" />
          </div>
          <h2 className="text-3xl font-playfair font-semibold text-memorial-900 mb-4">
            Support the Nade Proeva Scholarship Fund
          </h2>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            Your contribution to the scholarship fund will help support the next generation 
            of historians dedicated to studying Macedonian history and culture.
          </p>
          <Button asChild className="bg-red-600 hover:bg-red-700 text-white">
            <Link to="/donate">Make a Donation</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;
