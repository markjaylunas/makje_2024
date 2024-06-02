import { cn } from "@/lib/utils";
import { Button } from "@nextui-org/react";
import GridPattern from "../ui/grid-pattern";
import { Icons } from "../ui/icons";
import ShinnyWrapper from "../ui/shiny-wrapper";
import { Spotlight } from "../ui/spotlight";
import SpotlightMotion from "./spotlight-motion";

export default function HeroSection() {
  return (
    <section className="relative w-full">
      <div className="relative h-[calc(100dvh-4rem)] px-8 md:px-24 flex flex-col items-center justify-evenly">
        <Spotlight
          className="hidden sm:flex md:left-44 md:-top-20"
          fill="white"
        />

        <Icons.logo
          className="z-10 size-32 md:size-44 relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] "
          aria-label="Makje"
        />

        <div className="z-10 flex flex-col items-center">
          <h1 className="shadow-sm text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
            I&apos;m Makje. <br /> A web developer.
          </h1>

          <p className="mt-4 font-normal text-pretty text-xl md:text-3xl text-neutral-300 max-w-lg text-center mx-auto">
            Building a faster, personalized web with modern technologies.
          </p>

          <Button className="m-24 md:mt-8 p-0 w-fit h-fit">
            <ShinnyWrapper>Let&apos;s Connect</ShinnyWrapper>
          </Button>
        </div>
      </div>
      <SpotlightMotion>
        <GridPattern
          width={20}
          height={20}
          x={-1}
          y={-1}
          className={cn(
            "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]"
          )}
        />
      </SpotlightMotion>
    </section>
  );
}
