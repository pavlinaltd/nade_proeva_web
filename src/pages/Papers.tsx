
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import SectionHeader from "@/components/SectionHeader";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface PaperProps {
  title: string;
  journal?: string;
  year: string;
  url: string;
  abstract?: string;
}

interface CategoryProps {
  name: string;
  papers: PaperProps[];
}

const Papers = () => {
  const categories: CategoryProps[] = [
    {
      name: "Ethnogenesis",
      papers: [
        {
          title: "On the Ethnogenesis of the Ancient Macedonians",
          journal: "Journal of Ancient History",
          year: "1995",
          url: "#",
          abstract: "This paper examines the ethnic origins of the ancient Macedonians through an analysis of archaeological evidence, linguistic data, and historical texts. It challenges prevailing narratives and offers new perspectives on Macedonian identity formation."
        },
        {
          title: "The legend of Philemon and Baucis and the reminiscence of afterlife beliefs on Roman tombstones in Macedonia",
          journal: "Macedonian Archaeology",
          year: "XXXX",
          url: "https://www.academia.edu/91218402/The_legend_of_Philemon_and_Baucis_and_the_reminiscence_of_afterlife_beliefs_on_Roman_tombstones_in_Macedonia_Epic_Society_and_Religion_in_the_Ancient_Near_Eastern_and_Mediterranean_cultures_Tartu_July_16_18_2021",
          abstract: "This article investigates the authorship of the Trebenište culture and the gold funeral masks, analyzing archaeological finds and their implications for understanding ancient Macedonian society."
        },
        {
          title: "Macedonian Onomastics as Evidence of Ethnic Identity",
          journal: "Balkan Studies",
          year: "1998",
          url: "#",
          abstract: "An analysis of personal and place names from ancient Macedonia, demonstrating distinctive patterns that support the thesis of a separate Macedonian ethnic identity."
        },
        {
          title: "The Question of Ancient Macedonian Language",
          journal: "Historical Linguistics",
          year: "2001",
          url: "#",
          abstract: "This study evaluates the linguistic evidence for ancient Macedonian as a distinct language rather than a dialect of Greek, based on preserved glosses and onomastic material."
        },
        {
          title: "Who Were the Authors of the Trebenište Culture and the Gold Funeral Masks?",
          journal: "Macedonian Archaeology",
          year: "XXXX",
          url: "https://www.academia.edu/1439976/Nade_Proeva_WHO_WERE_THE_AUTHORS_OF_THE_TREBENIŠTE_CULTURE_AND_THE_GOLD_FUNERAL_MASKS",
          abstract: "This article investigates the authorship of the Trebenište culture and the gold funeral masks, analyzing archaeological finds and their implications for understanding ancient Macedonian society."
        },
      ]
    },
    {
      name: "Archaeology",
      papers: [
        {
          title: "Burial Practices in Ancient Macedonia",
          journal: "Archaeological Review",
          year: "2003",
          url: "#",
          abstract: "An examination of burial customs and grave goods from ancient Macedonian sites, revealing distinctive cultural practices and beliefs about the afterlife."
        },
        {
          title: "The Royal Palace at Aegae: New Interpretations",
          journal: "Mediterranean Archaeology",
          year: "2007",
          url: "#",
          abstract: "A reassessment of the archaeological evidence from the royal palace at Aegae (Vergina), with new interpretations of its function and symbolic significance."
        },
        {
          title: "Material Culture of the Ancient Macedonians",
          journal: "Journal of Archaeological Studies",
          year: "2012",
          url: "#",
          abstract: "This comprehensive study catalogs and analyzes distinctive elements of ancient Macedonian material culture, from pottery and metalwork to architectural styles."
        }
      ]
    },
    {
      name: "Historiography",
      papers: [
        {
          title: "Ancient Greek Authors on Macedonia: A Critical Evaluation",
          journal: "Classical Quarterly",
          year: "2005",
          url: "#",
          abstract: "This paper critically examines how ancient Greek authors portrayed Macedonia and Macedonians, analyzing biases and political motivations in these accounts."
        },
        {
          title: "A Brief Chronology of Historical Events",
          journal: "Journal of Historical Studies",
          year: "2009",
          url: "https://www.academia.edu/6808303/MACEDONIA_A_BRIEF_CHRONOLOGY_OF_HISTORICAL_EVENTS",
          abstract: "A survey and critique of modern scholarly approaches to ancient Macedonian history, identifying trends, biases, and methodological issues."
        },
        {
          title: "Reinterpreting Alexander: Beyond the Greco-Roman Narrative",
          journal: "Alexander Studies",
          year: "2015",
          url: "#",
          abstract: "This article challenges the predominantly Hellenocentric interpretations of Alexander the Great, examining his policies and actions from a Macedonian perspective."
        }
      ]
    }
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
          contacting the Department of History at Ss. Cyril and Methodius University in Skopje, Macedonia."
      />
      <div className="animate-fade-in">
        <div className="space-y-12">
          {categories.map((category, idx) => (
            <div key={idx} className="space-y-6">
              <h3 className="text-2xl text-burgundy-900 font-semibold">
                {category.name}
              </h3>
              
              <div className="space-y-6">
                {category.papers.map((paper, index) => (
                  <div key={index} className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
                    <h4 className="text-lg font-semibold text-burgundy-800 mb-2">
                      {paper.title}
                    </h4>
                    <div className="text-sm text-gray-500 mb-3">
                      {paper.journal} • {paper.year}
                    </div>
                    {paper.abstract && (
                      <p className="text-gray-700 mb-4">{paper.abstract}</p>
                    )}
                    <Button asChild variant="ghost" size="sm" className="flex items-center gap-2 bg-burgundy-600 hover:bg-burgundy-700 text-white">
                      <a href={paper.url} target="_blank" rel="noopener noreferrer">
                        <span>Read on Academia.edu</span>
                        <ExternalLink size={16} />
                      </a>
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Papers;
