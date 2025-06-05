import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionHeader from "@/components/SectionHeader";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table";

interface BookProps {
  title: string;
  originalTitle?: string;
  author?: string;
  editor: string;
  translator?: string;
  year: string;
  publisher: string;
  series: string;
  volume?: string;
  description: string;
  imageUrl: string;
  isbn?: string;
  amazonUrl?: string;
  promoImage?: string;
  promoAudio?: string;
}

const BookCard = ({ book }: { book: BookProps }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col md:flex-row">
      <div className="md:w-1/3 p-6 flex items-center justify-center bg-gray-50">
        <img 
          src={book.imageUrl} 
          alt={book.title} 
          className="max-w-full h-auto max-h-[300px] object-contain rounded"
        />
      </div>
      <div className="flex gap-8 md:w-2/3 p-6">
        <div
          // className={book.promoImage || book.promoAudio ? "flex flex-col w-1/2" : "flex flex-col w-full"}
          className="flex flex-col w-1/2"
        >
          <h3 className="text-xl font-semibold text-burgundy-900 mb-2">{book.title}</h3>
          {book.originalTitle && (
            <p className="text-sm text-gray-600 mb-2">Original title: {book.originalTitle}</p>
          )}
          <div className="text-sm text-gray-500 mb-4">
            {book.author && <p>Author: {book.author}</p>}
            <p>Editor: {book.editor}</p>
            {book.translator && <p>Translator: {book.translator}</p>}
            <p>{book.year} • {book.publisher}</p>
            <p>Series: {book.series} {book.volume && `• Volume ${book.volume}`}</p>
          </div>
          <p className="text-gray-700 mb-4">{book.description}</p>
          {book.amazonUrl ? (
            <Button className="flex items-center gap-2 bg-amber-500 hover:bg-amber-600" asChild>
              <a href={book.amazonUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink size={16} />
                Find on Amazon Books
              </a>
            </Button>) : (
            <Button className="flex items-center bg-gray-900" disabled>
              Coming Soon to Amazon Books
            </Button>
          )}
        </div>
        
        {book.promoImage || book.promoAudio ? (
          <div className="flex flex-col items-center gap-10 self-center w-1/2">
          {book.promoImage && (
            <img
              src="/images/religion-book-promotional.jpg"
              alt=""
              className="border-gray-600 border-4 rounded-sm"
            />
          )}
          
          {book.promoAudio && (
            <audio controls>
              <source src="/audio/16-04-2014-Religion-of-Antique-Macedonians.mp3" type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          )}
        </div>
        )
        : <></>}
      </div>
    </div>
  );
};

const BookTable = ({ books }: { books: BookProps[] }) => {
  return (
    <div className="rounded-md border my-8">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Title</TableHead>
            <TableHead>Original Title</TableHead>
            <TableHead>Author/Editor</TableHead>
            <TableHead>Series</TableHead>
            <TableHead>Year</TableHead>
            <TableHead>Publisher</TableHead>
            <TableHead>ISBN</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {books.map((book, index) => (
            <TableRow key={index}>
              <TableCell className="font-medium">{book.title}</TableCell>
              <TableCell>{book.originalTitle || "-"}</TableCell>
              <TableCell>{book.author || book.editor}</TableCell>
              <TableCell>{book.series} {book.volume && `Vol. ${book.volume}`}</TableCell>
              <TableCell>{book.year}</TableCell>
              <TableCell>{book.publisher}</TableCell>
              <TableCell>{book.isbn || "-"}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

const Books = () => {
  const books: BookProps[] = [
    {
      title: "Studies for Ancient Macedonians",
      originalTitle: "Studii za Antičkite Makedonci",
      author: "Nade Proeva",
      editor: "Nade Proeva",
      year: "1997",
      publisher: "Macedonia Prima, Ohrid",
      series: "HISTORIA ANTIQUA MACEDONICA",
      volume: "5",
      description: "A comprehensive analysis of ancient Macedonian society, culture, and political structures. This groundbreaking work challenges traditional interpretations of ancient Macedonian identity and provides new insights based on archaeological and epigraphic evidence.",
      imageUrl: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05",
      isbn: "9989-619-26-3",
      amazonUrl: ""
    },
    {
      title: "Cradle of Macedonian Statehood",
      originalTitle: "Lulkata na Makedonskata Državnost",
      author: "Alfred Delakoulonša",
      editor: "Nade Proeva",
      translator: "Nade Proeva",
      year: "2000",
      publisher: "Macedonia Prima, Ohrid",
      series: "HISTORIA ANTIQUA MACEDONICA",
      volume: "6",
      description: "An exploration of the origins and early development of Macedonian statehood, examining archaeological evidence, historical sources, and the emergence of political institutions in the region.",
      imageUrl: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05",
      isbn: "9989-619-40-9",
    },
    {
      title: "History of the Argeadites",
      originalTitle: "Istorija na Argeadite",
      author: "Nade Proeva",
      editor: "Vojislav Sarakinski",
      year: "2004",
      publisher: "Grafotisok, Skopje, Macedonia",
      series: "HISTORIA ANTIQUA MACEDONICA",
      volume: "8",
      description: "An in-depth examination of the Argead dynasty of ancient Macedonia, from its mythical origins to the reign of Alexander the Great. This work provides a critical reassessment of primary sources and recent archaeological discoveries.",
      imageUrl: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb",
      isbn: "",
      amazonUrl: ""
    },
    {
      title: "History of Epigonites",
      originalTitle: "Istorija na Epigonite",
      author: "Fanula Papazoglu",
      editor: "Nade Proeva",
      translator: "Vojislav Sarakinski",
      year: "2009",
      publisher: "Grafotisok, Skopje, Macedonia",
      series: "HISTORIA ANTIQUA MACEDONICA",
      volume: "9",
      description: "A scholarly analysis of the period following Alexander the Great's death, examining the complex power dynamics and conflicts among his successors known as the Epigoni.",
      imageUrl: "https://images.unsplash.com/photo-1472396961693-142e6e269027",
      isbn: "",
    },
    {
      title: "Alexander of Macedon",
      originalTitle: "Aleksandar Makedonski",
      editor: "Nade Proeva",
      translator: "Vojislav Sarakinski",
      year: "2012",
      publisher: "Grafotisok, Skopje, Macedonia",
      series: "HISTORIA ANTIQUA MACEDONICA",
      volume: "10",
      description: "A detailed biographical work on Alexander the Great, examining his conquests, policies, and lasting impact on world history through a critical historical lens.",
      imageUrl: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05",
      isbn: "978-9989-2978-2-3",
    },
    {
      title: "Religion of the Ancient Macedonians",
      originalTitle: "Религијата на Античките Македонци",
      author: "Nade Proeva",
      editor: "Nade Proeva",
      year: "2014",
      publisher: "Grafotisok, Skopje, Macedonia",
      series: "HISTORIA ANTIQUA MACEDONICA",
      volume: "11",
      description: "A detailed study of religious practices, beliefs, and mythological traditions in ancient Macedonia. This book explores both the indigenous elements of Macedonian religion and the syncretic influences from neighboring cultures.",
      imageUrl: "/lovable-uploads/a914d7e4-d98e-4959-a9d7-917951c81625.png",
      isbn: "978-9989-2978-5-4",
      amazonUrl: "",
      promoImage: "/images/religion-book-promotional.jpg",
      promoAudio: "/audio/16-04-2014-Religion-of-Antique-.mp3"
    },
    {
      title: "Triptych for Macedonian Identity",
      originalTitle: "Триптих за Македонскиот идентитет",
      author: "Nade Proeva",
      editor: "Nikola Minov",
      year: "2018",
      publisher: "Ilino Int., Skopje",
      series: "Monograph Series",
      volume: "2",
      description: "A scholarly analysis of the development of Macedonian identity through three distinct historical periods, examining cultural continuity and evolution of national consciousness.",
      imageUrl: "/lovable-uploads/e1908f6c-4b04-4e2b-ac65-0eef5d1277e5.png",
      isbn: "978-608-245-363-7",
      amazonUrl: ""
    },
    {
      title: "National Awareness of the Macedonian Slavs",
      originalTitle: "Народносната свест на македонските Словени",
      author: "Angel Dinev",
      editor: "Nikola Minov",
      translator: "Nade Proeva",
      year: "2022",
      publisher: "Ilino Int., Skopje",
      series: "Monograph Series",
      volume: "3",
      description: "An examination of the development of national consciousness among Macedonian Slavs throughout history, with particular focus on identity formation processes during the 19th and early 20th centuries.",
      imageUrl: "/lovable-uploads/ebecb8bf-e9a1-4310-804f-140346e65835.png",
      isbn: "978-608-66974-0-2",
    }
  ];

  return (
    <div>
      <SectionHeader
        title="Books by Professor Nade Proeva"
        subtitle="Professor Proeva authored and edited several influential books on ancient Macedonian history, culture, and society. Her works are distinguished by their rigorous methodology and innovative interpretations."
      />

      <div className="space-y-8">
        {books.filter((book) => book.author === "Nade Proeva").map((book, index) => (
          <BookCard key={index} book={book} />
        ))}
      </div>

      <div className="my-12">
        <h3 className="text-xl font-semibold text-burgundy-900 mb-4">Complete Bibliography</h3>
        <p className="text-gray-700 mb-6">
          Below is a comprehensive listing of books authored, edited, or translated by Professor Nade Proeva as part of her scholarly contribution to ancient Macedonian studies.
        </p>
        
        <BookTable books={books} />
      </div>

      <div className="mt-12 bg-burgundy-50 rounded-lg p-6 border border-burgundy-100">
        <h3 className="text-xl font-semibold text-burgundy-900 mb-4">Additional Publications</h3>
        <p className="text-gray-700 mb-4">
          Besides these published volumes, Professor Proeva contributed chapters to numerous edited volumes and encyclopedias on ancient history. She was the editor of two important series: <em>Bibliotheca Miscellanea Byzantino-Macedonica</em> and <em>Historia Antiqua Macedonica (HAM)</em>, for which she wrote prefaces, notes, indexes and created maps.
        </p>
        <p className="text-gray-700 mb-6">
          For a complete bibliography of her works, including articles and papers, please contact the Department of History at Ss. Cyril and Methodius University in Skopje or email <a href="mailto:info@macedonianarts.org" className="text-burgundy-700 hover:underline">info@macedonianarts.org</a>.
        </p>
        
        <Button
          className="flex items-center gap-2 bg-amber-400 text-black hover:bg-amber-500 hover:text-black"
          variant="ghost" asChild
        >
          <a href="https://www.amazon.com/s?k=Nade+Proeva" target="_blank" rel="noopener noreferrer">
            <ExternalLink size={16} />
            Browse Professor Proeva's Books on Amazon
          </a>
        </Button>
      </div>
    </div>
  );
};

export default Books;
