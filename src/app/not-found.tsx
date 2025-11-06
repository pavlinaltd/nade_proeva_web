import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Page() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center gap-5">
      <h1 className="text-6xl md:text-8xl font-bold text-burgundy-900 mb-4">404</h1>
      <p className="text-xl text-black mb-8">We couldn't find up the page you're looking for.</p>
      <Button asChild className="flex items-center gap-2 bg-burgundy-700 hover:bg-burgundy-900 text-white">
        <Link href="/">
          <ArrowLeft size={16} />
          <span>Back to Home</span>
        </Link>
      </Button>
    </div>
  );
}