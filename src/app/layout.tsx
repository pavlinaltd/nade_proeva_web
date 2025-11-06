import type { Metadata } from 'next'
import '../index.css';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: 'Professor Dr. Nade Proeva',
  description: 'Memorial website dedicated to Professor Dr. Nade Proeva, renowned Macedonian historian and academic.',
  authors: {name: 'Corie Beale', url: 'https://www.linkedin.com/in/coriebeale/'},
  keywords: ["Nade Proeva", "Macedonia", "academic", "history", "Endowment Fund", "Macedonian Arts Council"],
  creator: 'Corie Beale',
  openGraph: {
    title: 'Professor Dr. Nade Proeva',
    description: 'Memorial website dedicated to Professor Dr Nade Proeva, renowned Macedonian historian and academic.',
    type: 'website',
    images: '/images/nade.jpg',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
  <html lang="en">
    <head>
      <link rel="icon" href="/favicon.ico" />
      <link rel="manifest" href="/site.webmanifest" />

      <meta name="twitter:card" content="summary_large_image" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link rel="stylesheet" href="https://use.typekit.net/grz5nwz.css" />
    </head>

    <body>
      <div id="root">
        <div className="flex flex-col bg-white">
          <Navbar />
          <main className="w-full max-w-[1450px] min-h-screen px-4 py-8 md:py-12 animate-fade-in mx-auto">
            {children}
          </main>
          <Footer />
        </div>
      </div>
    </body>
  </html>
  )
}