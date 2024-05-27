import Card from "@/components/home/card";
import ComponentGrid from "@/components/home/component-grid";
import WebVitals from "@/components/home/web-vitals";
import { DEPLOY_URL } from "@/lib/constants";
import { ChevronRight } from "lucide-react";
import Image from "next/image";

export default async function Home() {

  return (
    <>
        <div className="grid w-full max-w-screen-xl animate-fade-up grid-cols-1 gap-5 px-5 md:grid-cols-3 xl:px-0 z-10 -mt-12">
        {features.map(({ title, description, demo, large }) => (
          <Card
            title={title}
            key={title}
            description={description}
            demo={
              title === "Beautiful, reusable components" ? (
                <ComponentGrid />
              ) : (
                demo
              )
            }
            large={large}
          />
        ))}
        </div>
    </>
  );
}

const features = [
  {
    title: "Beautiful, reusable components",
    description:
      "Pre-built beautiful, a11y-first components, powered by [Tailwind CSS](https://tailwindcss.com/), [Radix UI](https://www.radix-ui.com/), and [Framer Motion](https://framer.com/motion)",
    large: true,
  },
  {
    title: "Performance first",
    description:
      "Built on [Next.js](https://nextjs.org/) primitives like `@next/font` and `next/image` for stellar performance.",
    demo: <WebVitals />,
  },
];