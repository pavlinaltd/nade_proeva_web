import SectionHeader from "@/components/SectionHeader";

const About = () => {
  return (
    <>
    <SectionHeader
      title="BIOGRAPHY"
      subtitle="A distinguished historian, classicist, and dedicated educator whose work has left an indelible mark on the study of Macedonian history."
    />      
    <div className="animate-fade-in space-y-6 text-justify lg:mx-20">
      {/* Steinbeck quote */}
      <div className="w-full md:w-1/2 md:float-left bg-yellow-500 p-6 md:p-8 mr-0 md:mr-5 text-black rounded-sm">
        <blockquote className="lg:text-xl">
          "<i>
            I have come to believe that a great teacher is a great artist and that there are as a few as
            there are any other great artists. Teaching might even be the greatest of the arts since the medium is the human mind and spirit.</i>"
        </blockquote>
        <p className="text-right lg:text-xl">
          — John Steinbeck
        </p>
      </div>

      {/* Text content */}
      <p>
        Professor Dr. Nade Proeva was a renowned Macedonian historian and classicist, best known for her
        pioneering work on the history and identity of the ancient Macedonians. She served as a full
        professor at the Faculty of Philosophy, Ss. Cyril and Methodius University in Skopje, where
        she taught from 1984 until her retirement in 2014.
      </p>

      <p>
        Her book <em>History of the Argeads</em> (2004) was the first university textbook in Macedonia
        dedicated to the ancient Macedonians and became a foundational text in the field. As editor of
        the <em>Historia Antiqua Macedonica</em> (HAM) and <em>Bibliotheca Miscellanea Byzantino-Macedonica </em>
        series, she introduced vital historical works to Macedonian readers. Her editions featured translations,
        scholarly notes, indexes, prefaces, and custom maps that significantly enriched the academic landscape.
      </p>

      <p>
        Born in Resen, she completed her early education there and graduated in Classical Archaeology
        from the University of Belgrade in 1973. She began her career as a curator at the National
        Museum in Prilep. In 1978, she earned her master's degree with a thesis on Roman tombstones in
        Macedonia. From 1979 to 1981, she specialized at the Sorbonne University in Paris, studying
        epigraphy, numismatics, and ancient religions. She completed her doctoral dissertation in 1982
        in Belgrade, examining cultural dynamics in the Roman province of Macedonia.
      </p>

      <p>
        Appointed a lecturer in 1984 at the Faculty of Philosophy in Skopje, she taught <em>History of
        the Ancient World</em> and later introduced the course <em>History of the Ancient Macedonians</em>,
        which became a permanent part of the curriculum.
      </p>

      <p>
        Professor Proeva's international academic work included research and lectures across Europe and
        North America. She participated in archaeological excavations in Macedonia, Serbia, Poland, and
        Greece, and collaborated with respected institutions such as MANU, SANU, and the Berlin-Brandenburg
        Academy of Sciences.
      </p>

      <p>
        She presented her work at major conferences, published extensively, and served on numerous
        academic committees. Beyond academia, she was a passionate communicator of history to the
        broader public, regularly appearing in media and contributing to public discussions on cultural heritage.
      </p>

      <p>
        Her life's work was dedicated to preserving the historical legacy of Macedonia, with a special
        focus on the ancient period. She was deeply committed to both academic rigor and public
        understanding of history.
      </p>

      <p>
        Prof. Dr. Nade Proeva passed away in Skopje on November 6, 2024. Her contributions continue
        to influence the field of ancient Macedonian studies and inspire future generations of scholars.
      </p>

      <p>
        An Endowment Fund has been established at a U.S.-based university to support young researchers in
        Macedonian history and archaeology, ensuring that her passion for historical truth, knowledge, and education lives on.
      </p>

      <p>
        For website content and permissions to reprint published works, please email: <a href="mailto:info@macedonianarts.org" className="text-burgundy-700 hover:underline">info@macedonianarts.org</a>
      </p>
    </div>
    </>
  );
};

export default About;
