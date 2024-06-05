import { cn } from "@/lib/utils";
import { Button } from "@nextui-org/react";
import AnimatedGridPattern from "../ui/animated-grid-pattern";
import { FlipWords } from "../ui/flip-words";
import { Icons } from "../ui/icons";
import ShinnyWrapper from "../ui/shiny-wrapper";
import { Spotlight } from "../ui/spotlight";
import ContentMotion from "./content-motion";
import SpotlightMotion from "./spotlight-motion";

export default function HeroSection() {
  const words = [
    "responsive",
    "fast",
    "dynamic",
    "interactive",
    "modern",
    "scalable",
    "efficient",
    "robust",
    "intuitive",
    "innovative",
  ].sort((a, b) => b.length - a.length);
  return (
    <section className="relative w-full">
      <Spotlight className="left-24 -top-10 md:left-44" fill="white" />

      <ContentMotion className="relative z-10 px-4 h-[calc(100dvh-4rem)]  flex flex-col items-center justify-center gap-6 mx-auto">
        <Icons.logo
          className="z-10 size-32 md:size-44 relative drop-shadow-[0_0_1rem_#ffffff70] "
          aria-label="Makje"
        />

        <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-br from-neutral-50 to-neutral-400 bg-opacity-50">
          I&apos;m Makje. <br /> A web developer.
        </h1>

        <p className="px-0 text-neutral-500 font-normal text-pretty text-xl sm:text-2xl max-w-md text-center drop-shadow-[0_0_1rem_#000000]">
          Building a web experience with modern technologies that is
          <span className="inline-block text-left min-w-36">
            <FlipWords words={words.map((w) => w + ".")} />
          </span>
        </p>

        <Button className="shadow-sm w-full sm:w-fit p-0 h-fit mt-8">
          <ShinnyWrapper className="text-xl w-full px-3 py-1">
            Let&apos;s Connect
          </ShinnyWrapper>
        </Button>
      </ContentMotion>

      <SpotlightMotion>
        <AnimatedGridPattern
          numSquares={100}
          maxOpacity={0.1}
          duration={2}
          repeatDelay={2}
          className={cn(
            "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)] sm:[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
            "inset-x-0 inset-y-[-50%] h-[200%] "
          )}
        />
      </SpotlightMotion>
    </section>
  );
}
