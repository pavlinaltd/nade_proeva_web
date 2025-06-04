import SectionHeader from "@/components/SectionHeader";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const About = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <SectionHeader
        title="About Professor Nade Proeva"
        subtitle="A distinguished historian, classicist, and dedicated educator whose work has left an indelible mark on the study of Macedonian history."
      />
      <div className="space-y-6">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="md:w-1/3">
              <div className="rounded-lg overflow-hidden shadow-md">
                <img 
                  src="/nade.jpg" 
                  alt="Professor Proeva" 
                  className="w-full h-auto"
                />
              </div>
            </div>
            <div className="md:w-2/3">
              <h3 className="text-2xl font-semibold text-memorial-800 mb-3">
                A Life of Scholarship
              </h3>
              <p className="text-gray-700 mb-4">
                Prof. Dr. Nade Proeva (Resen, September 9, 1949 – Skopje, November 6, 2024) was a Macedonian historian-classicist and full professor at Ss. Cyril and Methodius University at the Faculty of Philosophy - Department of History in Skopje from 1984 until her retirement in 2015.
              </p>
              <p className="text-gray-700 mb-4">
                Born in Resen on September 9, 1949, she completed her primary and secondary education (gymnasium) there, and continued her higher education at the University of Belgrade where she graduated in Classical Archaeology (Faculty of Philosophy - Belgrade) in 1973 with the thesis "Four Unpublished Late Antique Necropolises from the Prilep Area."
              </p>
            </div>
          </div>
          
          <div className="bg-memorial-50 p-6 rounded-lg border border-memorial-100">
            <h3 className="text-xl font-semibold text-memorial-800 mb-3">
              Academic Journey
            </h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 rounded-full bg-memorial-500 mt-2 mr-3"></span>
                <span>From December 1973 to March 1975, she worked as a curator at the National Museum in Prilep.</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 rounded-full bg-memorial-500 mt-2 mr-3"></span>
                <span>In June 1978, she defended her master's thesis "Typology of Tombstones in the Yugoslav Part of the Roman Province of Macedonia" at the Faculty of Philosophy in Belgrade.</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 rounded-full bg-memorial-500 mt-2 mr-3"></span>
                <span>From 1979 to 1981, she specialized at the Sorbonne University in Paris, where she obtained a diploma in advanced studies in the fields of epigraphy, numismatics, and religion.</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 rounded-full bg-memorial-500 mt-2 mr-3"></span>
                <span>In December 1982, she defended her doctoral thesis: "The Influence of Settlers on the Development of Cultural Conditions in the Roman Province of Macedonia" at the Faculty of Philosophy in Belgrade.</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 rounded-full bg-memorial-500 mt-2 mr-3"></span>
                <span>On March 1, 1984, she was appointed as a lecturer at the Faculty of Philosophy in Skopje (Institute of History) for the subject History of the Ancient World, and from 1993 as an assistant professor for the subject History of Ancient Macedonians.</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold text-memorial-800 mb-3">
              International Experience
            </h3>
            <p className="text-gray-700 mb-4">
              Professor Proeva had numerous study stays abroad: in Wrocław and Gdańsk, Poland, the French Archaeological School in Athens, Greece, the French Institute in Istanbul, Turkey, the Austrian Academy of Sciences in Vienna, Austria, at universities in Nancy and Paris-Nanterre in France, and others.
            </p>
            <p className="text-gray-700">
              She presented at international scientific conferences in France, Canada, Serbia, Bulgaria, Croatia, Estonia, Russia, Romania, Italy, and Poland, and gave lectures in Croatia, Slovenia, France, and the Netherlands.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-memorial-800 mb-3">
              Archaeological Work
            </h3>
            <p className="text-gray-700">
              She participated in archaeological excavations of ancient and medieval sites in Macedonia, Serbia, Poland, and Greece on projects of the Archaeological Institute of Belgrade, the Macedonian Academy of Science and Arts (MANU), the Serbian Academy of Science and Arts (SANU), and the Berlin-Brandenburg Academy of Sciences (BBAN).
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold text-memorial-800 mb-3">
              Publications and Editorial Work
            </h3>
            <p className="text-gray-700">
              Nade Proeva was the editor of two editions: Bibliotheca Miscellanea Byzantino-Macedonica (1.1 and 1.2) and Historia Antiqua Macedonica (HAM), for which she wrote prefaces, notes, indexes, and created maps. In the Historia Antiqua Macedonica series, she published translations of books on the history of ancient Macedonians, and the book "History of the Argeads" (2004) was the first textbook on ancient Macedonians for students at the Faculty of Philosophy (Department of History).
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-memorial-800 mb-3">
              Honors and Recognition
            </h3>
            <p className="text-gray-700">
              She was awarded the Order of Knight of Academic Palms (Chevalier des Palmes Académiques) by the Government of the Republic of France in 1997, recognizing her significant contributions to education and academic research.
            </p>
          </div>
        </div>
      <div className="space-y-6">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="md:w-1/3">
              <div className="rounded-lg overflow-hidden shadow-md">
                <img 
                  src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05" 
                  alt="Professor Proeva teaching" 
                  className="w-full h-auto"
                />
              </div>
            </div>
            <div className="md:w-2/3">
              <h3 className="text-2xl font-semibold text-memorial-800 mb-3">
                Dedicated Educator
              </h3>
              <p className="text-gray-700 mb-4">
                Professor Proeva served as a full professor at Ss. Cyril and Methodius University in Skopje from 1984 until her retirement in 2015, specializing in ancient history and particularly the history of ancient Macedonians.
              </p>
              <p className="text-gray-700">
                As a visiting professor, she gave lectures at universities in France, Croatia, Slovenia, and the Netherlands, sharing her extensive knowledge and research with international academic audiences.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
              <h4 className="text-lg font-semibold text-memorial-800 mb-2">
                Areas of Expertise
              </h4>
              <ul className="space-y-2 text-gray-700">
                <li>History of the Ancient World</li>
                <li>History of Ancient Macedonians</li>
                <li>Classical Archaeology</li>
                <li>Epigraphy and Numismatics</li>
                <li>Ancient Religious Practices</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
              <h4 className="text-lg font-semibold text-memorial-800 mb-2">
                Public Education
              </h4>
              <p className="text-gray-700">
                Beyond her university work, Professor Proeva was an active promoter of historical science, participating in numerous television and radio programs, writing articles, book reviews, and giving interviews in the daily press to make historical knowledge more accessible to the general public.
              </p>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold text-memorial-800 mb-3">
              Academic Impact
            </h3>
            <p className="text-gray-700 mb-4">
              Her book "History of the Argeads" (2004) became the first textbook on ancient Macedonians for students at the Faculty of Philosophy, Department of History, marking an important contribution to education in this specialized field.
            </p>
            <p className="text-gray-700">
              Through her editorial work on series such as Historia Antiqua Macedonica (HAM), she brought important historical texts to Macedonian academic audiences, enriching the available scholarly resources in the field.
            </p>
          </div>
        </div>
      <div className="space-y-6">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="md:w-1/3">
              <div className="rounded-lg overflow-hidden shadow-md">
                <img 
                  src="https://images.unsplash.com/photo-1466442929976-97f336a657be" 
                  alt="Professor Proeva personal life" 
                  className="w-full h-auto"
                />
              </div>
            </div>
            <div className="md:w-2/3">
              <h3 className="text-2xl font-semibold text-memorial-800 mb-3">
                Beyond Academia
              </h3>
              <p className="text-gray-700 mb-4">
                Born in Resen, Macedonia, Professor Proeva maintained strong connections to her homeland throughout her international academic career. She devoted her life to uncovering and preserving the rich history of Macedonia, particularly focusing on ancient Macedonian identity and culture.
              </p>
              <p className="text-gray-700">
                Her passion for archaeology and history took her to numerous archaeological sites across the Mediterranean, combining her professional interests with a deep personal commitment to historical truth and accuracy.
              </p>
            </div>
          </div>
          
          <div className="bg-memorial-50 p-6 rounded-lg border border-memorial-100">
            <h3 className="text-xl font-semibold text-memorial-800 mb-3">
              Cultural Contributions
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
              <div>
                <h4 className="font-semibold mb-2">Public Education</h4>
                <p>
                  Professor Proeva was committed to making historical knowledge accessible to the wider public, regularly participating in media programs and giving interviews to share her expertise beyond academic circles.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">International Recognition</h4>
                <p>
                  Her receipt of the Order of Knight of Academic Palms from France in 1997 highlights the international recognition of her contributions to historical scholarship and education.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Editorial Impact</h4>
                <p>
                  As an editor of important historical series, she helped shape the field of ancient Macedonian studies and made valuable historical texts available to new generations of scholars.
                </p>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold text-memorial-800 mb-3">
              Legacy and Remembrance
            </h3>
            <p className="text-gray-700 mb-4">
              Professor Proeva passed away in Skopje on November 6, 2024, leaving behind a rich legacy of scholarly work, educational contributions, and cultural impact. Her research on ancient Macedonian history and identity continues to influence the field and inspire new generations of historians.
            </p>
            <p className="text-gray-700">
              The scholarship fund established in her name aims to continue her legacy by supporting young scholars pursuing research in Macedonian history and archaeology, ensuring that her dedication to historical truth and academic excellence lives on.
            </p>
            <blockquote className="border-l-4 border-memorial-500 pl-4 italic text-gray-600 mt-6">
              "The study of history is not just about uncovering the past, but understanding the complex tapestry of human experience that shapes our present and future."
              <footer className="text-sm text-gray-500 mt-2 not-italic">
                - Professor Nade Proeva
              </footer>
            </blockquote>
          </div>
        </div>
    </div>
  );
};

export default About;
