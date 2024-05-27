import { DEPLOY_URL } from "@/lib/constants";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {

  return (
    <>
      <div className="z-10 w-full max-w-xl px-5 xl:px-0">

        {/* greeting section */}
        <p className="mx-auto mb-5 flex max-w-fit animate-fade-up items-center justify-center space-x-2 overflow-hidden text-sm font-semibold text-white">
            Selamat Datang di
        </p>
        <h1
          className="animate-fade-up bg-gradient-to-br from-white to-slate-200 bg-clip-text text-center font-display font-bold tracking-[-0.02em] text-transparent opacity-0 drop-shadow-sm [text-wrap:balance] sm:text-6xl sm:leading-[3rem] md:text-8xl md:leading-[5rem] uppercase"
          style={{ animationDelay: "0.15s", animationFillMode: "forwards" }}
        >
          Basengok
        </h1>
        <p
          className="mt-6 animate-fade-up font-sans font-medium text-center text-gray-200 opacity-0 [text-wrap:balance] sm:text-[12px] md:text-xl "
          style={{ animationDelay: "0.25s", animationFillMode: "forwards" }}
        >
          DINAS KEBUDAYAAN, KEPEMUDAAN, OLAHRAGA <br className="min-[768px]:hidden"/> DAN PARIWISATA KABUPATEN PULANG PISAU.
        </p>
        <div
          className="mx-auto mt-6 flex animate-fade-up items-center justify-center space-x-5 opacity-0"
          style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}
        >
          <Link
            className="group flex max-w-fit items-center justify-center space-x-2 rounded-full border border-black bg-black px-5 py-2 text-sm text-white transition-colors hover:bg-white hover:text-black"
            href="/dtw"
          >
            <p>Explore Pulang Pisau</p>
            <ChevronRight size={20} strokeWidth={1.25} absoluteStrokeWidth />
          </Link>
        </div>
      </div>
      
      {/* hero image */}
        <div className="absolute inset-0">
          <Image fill
            src="/landing.jpg"
            alt="Lake with mountains in the background, blue sky and green trees along the shore"
            layout={'fill'} 
            priority={true}
            quality={100}
            objectFit={'cover'}
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
    </>
  );
}
