import Card from "@/components/home/card";
import { DEPLOY_URL } from "@/lib/constants";
import { Github, Twitter } from "@/components/shared/icons";
import WebVitals from "@/components/home/web-vitals";
import ComponentGrid from "@/components/home/component-grid";
import Image from "next/image";
import { nFormatter } from "@/lib/utils";

export default async function Home() {
  const { stargazers_count: stars } = await fetch(
    "https://api.github.com/repos/steven-tey/precedent",
    {
      ...(process.env.GITHUB_OAUTH_TOKEN && {
        headers: {
          Authorization: `Bearer ${process.env.GITHUB_OAUTH_TOKEN}`,
          "Content-Type": "application/json",
        },
      }),
      // data will revalidate every 24 hours
      next: { revalidate: 86400 },
    },
  )
    .then((res) => res.json())
    .catch((e) => console.log(e));

  return (
    <>
      <div className="z-10 w-full max-w-xl px-5 xl:px-0">

        {/* greeting section */}
        <p className="mx-auto mb-5 flex max-w-fit animate-fade-up items-center justify-center space-x-2 overflow-hidden text-sm font-semibold text-white">
            Selamat Datang di
        </p>
        <h1
          className="animate-fade-up bg-gradient-to-br from-white to-slate-200 bg-clip-text text-center font-display font-bold tracking-[-0.02em] text-transparent opacity-0 drop-shadow-sm [text-wrap:balance] md:text-8xl md:leading-[5rem] sm:text-6xl sm:leading-[5rem] uppercase"
          style={{ animationDelay: "0.15s", animationFillMode: "forwards" }}
        >
          Basengok
        </h1>
        <p
          className="mt-6 animate-fade-up text-center text-gray-200 opacity-0 [text-wrap:balance] md:text-xl sm:text-base"
          style={{ animationDelay: "0.25s", animationFillMode: "forwards" }}
        >
          DINAS KEBUDAYAAN, KEPEMUDAAN, OLAHRAGA DAN PARIWISATA KABUPATEN PULANG PISAU.
        </p>
        <div
          className="mx-auto mt-6 flex animate-fade-up items-center justify-center space-x-5 opacity-0"
          style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}
        >
          <a
            className="group flex max-w-fit items-center justify-center space-x-2 rounded-full border border-black bg-black px-5 py-2 text-sm text-white transition-colors hover:bg-white hover:text-black"
            href={DEPLOY_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            <p>Explore Pulang Pisau</p>
            <svg xmlns="http://www.w3.org/2000/svg"
              fill="none" 
              viewBox="0 0 24 24" 
              strokeWidth={1.5} 
              stroke="currentColor" 
              className="h-4 w-4 ml-1">
                <path
                strokeLinecap="round" 
                strokeLinejoin="round" 
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
                />
            </svg>
          </a>
        </div>
      </div>
      
      {/* hero image */}
        <div className="absolute inset-0">
          <Image fill
            src="/landing.jpg"
            alt="Lake with mountains in the background, blue sky and green trees along the shore"
            layout={'fill'} 
            objectFit={'cover'}
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
    </>
  );
}
