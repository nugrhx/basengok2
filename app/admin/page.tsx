import { DEPLOY_URL } from "@/lib/constants";
import { ChevronRight } from "lucide-react";
import Image from "next/image";

export default async function Home() {

  return (
    <>
      <div className="z-10 w-full max-w-xl px-5 xl:px-0">

        {/* greeting section */}
        <h1
          className="animate-fade-up bg-gradient-to-br from-white to-slate-200 bg-clip-text text-center font-display font-bold tracking-[-0.02em] text-transparent opacity-0 drop-shadow-sm [text-wrap:balance] sm:text-6xl sm:leading-[3rem] md:text-8xl md:leading-[5rem] uppercase"
          style={{ animationDelay: "0.15s", animationFillMode: "forwards" }}
        >
          ADMIN ONLY
        </h1>
        
        <div
          className="mx-auto mt-6 flex animate-fade-up items-center justify-center space-x-5 opacity-0"
          style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}
        >
          
        </div>
      </div>
      
    </>
  );
}
