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
  promoVideo?: string;
  promoAudio?: string;
}

const BookCard = ({ book }: { book: BookProps }) => {
  return (
    // Original
    <div className="bg-amber-50 rounded-md shadow-lg overflow-hidden flex flex-col sm:flex-row flex-wrap lg:flex-nowrap ">
      {/* Book image */}
      <div className="w-full md:w-1/2 lg:w-1/3 flex order-0">
        <img
          src={book.imageUrl}
          alt={book.title}
          className="object-cover"
        />
      </div>
      {/* Text content */}
      <div className="flex gap-16 w-full lg:w-1/2 p-6 order-1 sm:order-2 lg:order-1">
        <div
          className="flex flex-col justify-between"
        >
          <div>
            <h3 className="md:text-lg lg:text-xl font-semibold text-burgundy-800 mb-2">{book.title}</h3>
            {book.originalTitle && (
              <p className="text-xs md:text-sm lg:text-base text-gray-600 mb-2">Original title: {book.originalTitle}</p>
            )}
            <div className="text-xs md:text-sm lg:text-base text-gray-500 mb-4">
              {book.author && <p>Author: {book.author}</p>}
              <p>Editor: {book.editor}</p>
              {book.translator && <p>Translator: {book.translator}</p>}
              <p>{book.year} • {book.publisher}</p>
              <p>Series: {book.series} {book.volume && `• Volume ${book.volume}`}</p>
            </div>
            <p className="text-xs md:text-sm lg:text-base text-gray-700 text-justify mb-4">{book.description}</p>
          </div>
          {book.amazonUrl ? (
            <Button className="flex items-center gap-2 bg-burgundy-600 hover:bg-burgundy-700 text-white" asChild>
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
      </div>
      {/* Promo section */}
      {(book.promoImage || book.promoAudio || book.promoVideo) && (
        <div className="flex flex-col order-2 md:order-1 lg:order-2 justify-center items-center gap-10 w-full md:w-1/2 lg:w-1/3 bg-burgundy-900 p-6">
          {book.promoImage && (
            <img
              src={book.promoImage}
              alt=""
              className="shadow-lg rounded-sm w-[595px]"
            />
          )}

          {book.promoVideo && (
            <video
              controls
              controlsList="nodownload"
              className="w-full h-full rounded-lg shadow-lg bg-black"
            >
              <source src={book.promoVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )}

          {book.promoAudio && (
            <audio
              controls
              controlsList="nodownload"
            >
              <source src={book.promoAudio} type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          )}
        </div>
      )}
    </div>
  );
};

const BookTable = ({ books }: { books: BookProps[] }) => {
  return (
    <div className="rounded-md border border-burgundy-900 my-8 overflow-x-auto">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="rounded-tl-md">Title</TableHead>
            <TableHead>Original Title</TableHead>
            <TableHead>Author/Editor</TableHead>
            <TableHead>Series</TableHead>
            <TableHead>Year</TableHead>
            <TableHead>Publisher</TableHead>
            <TableHead className="rounded-tr-md border-r-0">ISBN</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {books.map((book, index) => (
            <TableRow className={index % 2 === 0 ? "bg-gray-100" : "bg-gray-200"} key={index}>
              <TableCell className={index === books.length - 1 && "rounded-bl-md"}>{book.title}</TableCell>
              <TableCell>{book.originalTitle || "-"}</TableCell>
              <TableCell>{book.author || book.editor}</TableCell>
              <TableCell>{book.series} {book.volume && `Vol. ${book.volume}`}</TableCell>
              <TableCell>{book.year}</TableCell>
              <TableCell>{book.publisher}</TableCell>
              <TableCell className={index === books.length - 1 ? "rounded-br-md border-r-0" : "border-r-0"}>{book.isbn || "-"}</TableCell>
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
      title: "Studies of the Ancient Macedonians",
      originalTitle: "Студии за Античките Македонци",
      author: "Nade Proeva",
      editor: "Nade Proeva",
      year: "1997",
      publisher: "Macedonia Prima, Ohrid",
      series: "HISTORIA ANTIQUA MACEDONICA",
      volume: "5",
      description: "A comprehensive analysis of ancient Macedonian society, culture, and political structures. This groundbreaking work challenges traditional interpretations of ancient Macedonian identity and provides new insights based on archaeological and epigraphic evidence.",
      imageUrl: "/images/books/studii.jpg",
      isbn: "9989-619-26-3",
      amazonUrl: "",
      promoVideo: "/images/books/studies-promo.mp4"
    },
    {
      title: "Cradle of Macedonian Statehood",
      originalTitle: "Лулката на Македонската Државност",
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
      originalTitle: "Историја на Аргеадите",
      author: "Nade Proeva",
      editor: "Vojislav Sarakinski",
      year: "2004",
      publisher: "Grafotisok, Skopje, Macedonia",
      series: "HISTORIA ANTIQUA MACEDONICA",
      volume: "8",
      description: "An in-depth examination of the Argead dynasty of ancient Macedonia, from its mythical origins to the reign of Alexander the Great. This work provides a critical reassessment of primary sources and recent archaeological discoveries.",
      imageUrl: "/images/books/istoriya.jpg",
      isbn: "",
      amazonUrl: "",
      promoImage: "/images/books/istorija-promo.jpg",
    },
    {
      title: "History of Epigonites",
      originalTitle: "Историја на Епигоните",
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
      originalTitle: "Александар Македонски",
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
      imageUrl: "/images/books/religiyata.jpg",
      isbn: "978-9989-2978-5-4",
      amazonUrl: "",
      promoImage: "/images/books/launch-of-religion.jpg",
      promoAudio: "/audio/16-04-2014-Religion-of-Antique-Macedonians.mp3"
    },
    {
      title: "Macedonia: A Nation on the Betting Table",
      originalTitle: "Триптих за Македонскиот Идентитет",
      author: "Nade Proeva",
      editor: "Nikola Minov",
      year: "2018",
      publisher: "Ilino Int., Skopje",
      series: "Monograph Series",
      volume: "2",
      description: "A scholarly analysis of the development of Macedonian identity through three distinct historical periods, examining cultural continuity and evolution of national consciousness.",
      imageUrl: "/images/books/triptych.jpg",
      isbn: "978-608-245-363-7",
      amazonUrl: "",
      promoImage: "/images/books/triptych-promo.jpg",
    },
    {
      title: "National Awareness of the Macedonian Slavs",
      originalTitle: "Народносната Свест на Македонските Словени",
      author: "Angel Dinev",
      editor: "Nikola Minov",
      translator: "Nade Proeva",
      year: "2022",
      publisher: "Ilino Int., Skopje",
      series: "Monograph Series",
      volume: "3",
      description: "An examination of the development of national consciousness among Macedonian Slavs throughout history, with particular focus on identity formation processes during the 19th and early 20th centuries.",
      imageUrl: "",
      isbn: "978-608-66974-0-2",
    }
  ];

  return (
    <div>
      <SectionHeader
        title="BOOKS"
        subtitle="Professor Dr. Nade Proeva authored and edited several influential books on ancient Macedonian history, culture, and society. Her works are distinguished by their rigorous methodology and innovative interpretations."
      />

      <div className="animate-fade-in">
        <div className="space-y-8 sm:mx-20">
          {books.filter((book) => book.author === "Nade Proeva").map((book, index) => (
            <BookCard key={index} book={book} />
          ))}
        </div>

        <div className="my-12">
          <h3 className="font-semibold text-burgundy-900 mb-4">Complete Bibliography</h3>
          <p className="text-gray-700 mb-6">
            Below is a comprehensive listing of books authored, edited, or translated by Professor Dr. Nade Proeva as part of her scholarly contribution to ancient Macedonian studies.
          </p>
          
          <BookTable books={books} />
        </div>

        <div className="mt-12 bg-amber-50 rounded-lg p-6 border border-burgundy-900">
          <h3 className="md:text-lg lg:text-xl font-semibold text-burgundy-800 mb-4">Additional Publications</h3>
          <p className="text-xs sm:text-sm lg:text-base text-gray-700 mb-4">
            Besides these published volumes, Professor Proeva contributed chapters to numerous edited volumes and encyclopedias on ancient history. She was the editor of two important series: <em>Bibliotheca Miscellanea Byzantino-Macedonica</em> and <em>Historia Antiqua Macedonica (HAM)</em>, for which she wrote prefaces, notes, indexes and created maps.
          </p>
          <p className="text-xs sm:text-sm lg:text-base text-gray-700 mb-6">
            For a complete bibliography of her works, including articles and papers, please contact the Department of History at Ss. Cyril and Methodius University in Skopje or email <a href="mailto:info@macedonianarts.org" className="text-burgundy-700 hover:underline">info@macedonianarts.org</a>.
          </p>
          
          <Button
            className="flex items-center gap-2 text-white bg-burgundy-600 hover:bg-burgundy-700"
            variant="ghost" asChild
          >
            <a href="https://www.amazon.com/s?k=Nade+Proeva" target="_blank" rel="noopener noreferrer">
              <ExternalLink size={16} />
              Browse Professor Proeva's Books on Amazon
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Books;
