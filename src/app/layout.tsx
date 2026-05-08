import type { Metadata } from "next";
import "../index.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata: Metadata = {
    // ... keep everything the same
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <head>{/* ... keep everything the same */}</head>
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
    );
}
