import { cn } from "@/lib/utils";
import { Button } from "@nextui-org/react";
import AnimatedGridPattern from "../ui/animated-grid-pattern";
import GridPattern from "../ui/grid-pattern";
import { Icons } from "../ui/icons";
import ShinnyWrapper from "../ui/shiny-wrapper";
import { Spotlight } from "../ui/spotlight";
import ContentMotion from "./content-motion";
import SpotlightMotion from "./spotlight-motion";

export default function HeroSection() {
  return (
    <section className="relative w-full">
      <Spotlight className="left-24 -top-10 md:left-44" fill="white" />

      <ContentMotion className="relative h-[calc(100dvh-4rem)] px-8 md:px-24 flex flex-col items-center justify-center sm:justify-evenly">
        <Icons.logo
          className="z-10 size-32 md:size-44 relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] "
          aria-label="Makje"
        />

        <div className="z-10 flex flex-col items-center">
          <h1 className="text-shadow text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
            I&apos;m Makje. <br /> A web developer.
          </h1>

          <p className="mt-4 px-8 sm:px-0 text-shadow-lg font-normal text-pretty text-xl md:text-3xl text-neutral-300 max-w-lg text-center mx-auto">
            Building a faster, personalized web with modern technologies.
          </p>

          <Button className="m-24 shadow-sm md:mt-8 p-0 w-fit h-fit">
            <ShinnyWrapper className="text-2xl sm:text-xl">
              Let&apos;s Connect
            </ShinnyWrapper>
          </Button>
        </div>
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
