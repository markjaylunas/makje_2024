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

      <ContentMotion className="relative z-10 h-[calc(100dvh-4rem)] px-8 md:px-24 flex flex-col items-center justify-center">
        <Icons.logo
          className="z-10 size-32 md:size-44 relative drop-shadow-[0_0_1rem_#ffffff70] "
          aria-label="Makje"
        />

        <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-br from-neutral-50 to-neutral-400 bg-opacity-50">
          I&apos;m Makje. <br /> A web developer.
        </h1>

        <p className="mt-4 px-0 font-normal text-pretty text-xl text-neutral-400 max-w-lg text-center drop-shadow-[0_0_1rem_#000000]">
          Building
          <span className="inline-block text-left w-32">
            <FlipWords words={words} />
          </span>
          <br />
          web with modern technologies.
        </p>

        <Button className="m-24 shadow-sm md:mt-8 p-0 w-fit h-fit">
          <ShinnyWrapper className="text-2xl sm:text-xl">
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
            "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]",
            "inset-x-0 inset-y-[-50%] h-[200%] "
          )}
        />
      </SpotlightMotion>
    </section>
  );
}
