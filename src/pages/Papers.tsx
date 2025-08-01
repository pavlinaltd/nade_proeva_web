
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionHeader from "@/components/SectionHeader";

interface PaperProps {
  title: string;
  journal?: string;
  year: string;
  url: string;
  abstract?: string;
}

interface PaperProps {
  title: string;
  year: string;
  journal?: string;
  url: string;
  abstract?: string;
}

const Papers = () => {
  const papers: PaperProps[] = [
    {
      title: "The legend of Philemon and Baucis and the reminiscence of afterlife beliefs on Roman tombstones in Macedonia",
      year: "2024",
      journal: "Epic, Society and Religion in the Ancient Near Eastern and Mediterranean cultures",
      url: "https://www.academia.edu/91218402/The_legend_of_Philemon_and_Baucis_and_the_reminiscence_of_afterlife_beliefs_on_Roman_tombstones_in_Macedonia_Epic_Society_and_Religion_in_the_Ancient_Near_Eastern_and_Mediterranean_cultures_Tartu_July_16_18_2021",
      abstract: "This paper explores the connection between the ancient belief in eternal life, as depicted in the myth of Philemon and Baucis, and its reflection in Roman-era funerary practices in Upper Macedonia."
    },
    {
      title: "Who Were the Authors of the Trebenište Culture and the Gold Funeral Masks?",
      year: "2006",
      journal: "Macedonian Affairs",
      url: "https://www.academia.edu/1439976/Nade_Proeva_WHO_WERE_THE_AUTHORS_OF_THE_TREBENIŠTE_CULTURE_AND_THE_GOLD_FUNERAL_MASKS",
      abstract: "This article investigates the authorship of the Trebenište culture and the gold funeral masks, analyzing archaeological finds and their implications for understanding ancient Macedonian society."
    },
    {
      title: "A Brief Chronology of Historical Events",
      year: "2009",
      journal: "Journal of Historical Studies",
      url: "https://www.academia.edu/6808303/MACEDONIA_A_BRIEF_CHRONOLOGY_OF_HISTORICAL_EVENTS",
      abstract: "A list of events in chronological order regarding Macedonian history between the Iron Age and April 8th, 1993."
    },
    {
      title: "Sur l'Iconographie des Stèles Funéraires du «Type Tikveš» en Macédoine à l'Époque Romaine",
      year: "2013",
      url: "https://www.academia.edu/3750406/SUR_L_ICONOGRAPHIE_DES_ST%C3%88LES_FUN%C3%89RAIRES_DU_TYPE_TIKVE%C5%A0_EN_MAC%C3%89DOINE_%C3%80_L_%C3%89POQUE_ROMAINE",
      abstract: "This paper examines a group of funeral stelae from Upper Macedonia that feature unique motifs like human figures shaped as trees, grapevines, and agricultural tools."
    },
    {
      title: "100 Years of Trebenište",
      year: "2019",
      journal: "Vjesnik za arheologiju i historiju dalmatinsku",
      url: "https://www.academia.edu/42127116/100_years_of_Trebenishte",
      abstract: "This paper reviews an exhibition held at the Archaeological Museum in Skopje in 2019, marking the 100th anniversary of the discovery of two gold funeral masks in the Trebeništa necropolis."
    },
    {
      title: "Националните митови во современа Европа и негирањето на македонскиот идентитет",
      year: "2012",
      journal: "Slavia Meridionalis 12",
      url: "https://www.academia.edu/23385214/%D0%9D%D0%B0%D1%86%D0%B8%D0%BE%D0%BD%D0%B0%D0%BB%D0%BD%D0%B8%D1%82%D0%B5_%D0%BC%D0%B8%D1%82%D0%BE%D0%B2%D0%B8_%D0%B2%D0%BE_%D1%81%D0%BE%D0%B2%D1%80%D0%B5%D0%BC%D0%B5%D0%BD%D0%B0_%D0%95%D0%B2%D1%80%D0%BE%D0%BF%D0%B0_%D0%B8_%D0%BD%D0%B5%D0%B3%D0%B8%D1%80%D0%B0%D1%9A%D0%B5%D1%82%D0%BE_%D0%BD%D0%B0_%D0%BC%D0%B0%D0%BA%D0%B5%D0%B4%D0%BE%D0%BD%D1%81%D0%BA%D0%B8%D0%BE%D1%82_%D0%B8%D0%B4%D0%B5%D0%BD%D1%82%D0%B8%D1%82%D0%B5%D1%82",
      abstract: "This paper analyzes the political pressures and blackmail faced by the Republic of Macedonia following its 1991 independence, particularly regarding the dispute over its name. It critiques the role of NATO, the EU, and national myths—especially the revival of ancient Macedonian identity—in shaping the country's international recognition and identity politics."
    },
    {
      title: "On the Names of Thracia and Eastern Macedonia...",
      year: "2017",
      url: "https://www.academia.edu/34673739/On_the_Names_of_Thracia_and_Eastern_Macedonia_%CE%9A%CE%A1%CE%91%CE%A4%CE%99%CE%A3%CE%A4%CE%9F%CE%A3_%D0%A1%D0%B1%D0%BE%D1%80%D0%BD%D0%B8%D0%BA_%D0%B2_%D1%87%D0%B5%D1%81%D1%82_%D0%BD%D0%B0_%D0%BF%D1%80%D0%BE%D1%84%D0%B5%D1%81%D0%BE%D1%80_%D0%9F%D0%B5%D1%82%D1%8A%D1%80_%D0%94%D0%B5%D0%BB%D0%B5%D0%B2_%D0%A1%D0%BE%D1%84%D0%B8%D1%8F_2017_%D1%81%D1%82%D1%80_75_82Proeva_2017_PD_body_color",
      abstract: "This paper examines how ancient authors used the term Thracia, noting the differences between its ethnic and political boundaries. Nade Proeva proposes a distinction between Thracia stricto sensu (narrowly defined) and Thracia lato sensu (broadly defined), arguing that the term often referred to geographical regions, such as coastal or mainland tribes, without necessarily implying ethnic identity, and suggests using the method of Namengebiet to clarify the boundaries of these areas."
    },
    {
      title: "The Engelanes / Encheleis and the Golden Mask from the Trebenište Culture",
      year: "2006",
      journal: "Sofia University",
      url: "https://www.academia.edu/3085496/THE_ENGELANES_ENCHELEIS_AND_THE_GOLDEN_MASK_FROM_THE_TREBENI%C5%A0TE_CULTURE",
      abstract: "This passage discusses Professor M. Garašanin's analysis of the golden funerary masks from the Trebenište culture, which he attributed to the Engelanes/Encheleis tribe."
    },
    {
      title: "Exegi Monumentum Aere Perennius",
      year: "2010",
      journal: "Review of the Institute of History and Archaeology RIHA",
      url: "https://js.ugd.edu.mk/index.php/riha/article/view/5525",
      abstract: "The paper is written in honor of and in tribute to Nade Proeva's former student, the late Aleksandar Stojcev, a History Ph.D. specializing in military history."
    },
  ];

  return (
    <div>
      <SectionHeader
        title="ACADEMIC PAPERS"
        subtitle="
          Professor Proeva's scholarly legacy encompasses over fifty academic publications,
          including articles, book reviews, conference papers, and encyclopedia entries.
          Her work involved meticulous research, innovative methodology, and insightful analysis.
          Many of her works are accessible through academic databases such as academia.edu or by
          contacting the Department of History at Ss. Cyril and Methodius University in Skopje, Macedonia.
          A list of her most popular papers are here."
      />
      <div className="animate-fade-in">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-between">
          {papers.map((paper, index) => (
            <div key={index} className="bg-gray-100 rounded-lg border border-gray-200 p-6 shadow-lg flex flex-col justify-between">
              <div>
                <h4 className="text-lg font-semibold text-burgundy-800 mb-2">
                  {paper.title}
                </h4>
                <div className="text-sm text-gray-500 mb-3">
                  {paper.year}
                  {paper.journal && ` • ${paper.journal}`}
                </div>
                {paper.abstract && (
                  <p className="text-gray-700 mb-4">{paper.abstract}</p>
                )}
              </div>
              <Button asChild variant="ghost" size="sm" className="self-endflex items-center gap-2 bg-burgundy-600 hover:bg-burgundy-700 text-white">
                <a href={paper.url} target="_blank" rel="noopener noreferrer">
                  <span>Read on Academia.edu</span>
                  <ExternalLink size={16} />
                </a>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Papers;
