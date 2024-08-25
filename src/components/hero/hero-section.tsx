import { siteConfig } from "@/lib/config";
import { cn } from "@/lib/utils";
import { Button, Tooltip } from "@nextui-org/react";
import NextLink from "next/link";
import AnimatedGridPattern from "../ui/animated-grid-pattern";
import { Icons } from "../ui/icons";
import ShinnyWrapper from "../ui/shiny-wrapper";
import { Spotlight } from "../ui/spotlight";
import ContentMotion from "./content-motion";
import SpotlightMotion from "./spotlight-motion";

export default function HeroSection() {
  return (
    <section className="relative w-full">
      <Spotlight className="left-24 -top-10 md:left-44" fill="white" />

      <ContentMotion className="relative z-10 px-8 h-[calc(100dvh-4rem)]  flex flex-col items-center justify-center gap-6 mx-auto">
        <Icons.logo
          className="z-10 size-32 md:size-44 relative drop-shadow-[0_0_1rem_#ffffff70] "
          aria-label="Makje"
        />

        <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-br from-neutral-50 to-neutral-400 bg-opacity-50">
          Makje. <br /> The web developer.
        </h1>

        <p className="px-0 text-neutral-500 font-normal text-pretty text-xl sm:text-2xl max-w-md text-center drop-shadow-[0_0_1rem_#000000]">
          Building a faster, personalized web with modern technologies.
        </p>

        <section className="flex flex-col sm:flex-row gap-6 sm:gap-12 mt-8">
          <Tooltip
            delay={500}
            showArrow={true}
            content={siteConfig.links.github}
          >
            <Button
              as={NextLink}
              href={siteConfig.links.github}
              target="_blank"
              variant="light"
              size="md"
              className="shadow-sm w-full sm:w-fit p-0 h-fit"
            >
              <ShinnyWrapper className="text-lg w-full px-1 text-center flex justify-center items-center gap-2">
                <Icons.github className="size-6" />
                Github
              </ShinnyWrapper>
            </Button>
          </Tooltip>

          <Tooltip
            delay={500}
            showArrow={true}
            content={siteConfig.links.linkedIn}
          >
            <Button
              as={NextLink}
              href={siteConfig.links.linkedIn}
              target="_blank"
              variant="light"
              size="md"
              className="shadow-sm w-full sm:w-fit p-0 h-fit"
            >
              <ShinnyWrapper
                repeatDelay={1.5}
                className="text-lg w-full px-1 text-center flex justify-center items-center gap-2"
              >
                <Icons.linkedIn className="size-6" />
                LinkedIn
              </ShinnyWrapper>
            </Button>
          </Tooltip>
          <Tooltip
            delay={500}
            showArrow={true}
            content={siteConfig.links.email}
          >
            <Button
              as={NextLink}
              href={siteConfig.links.email}
              target="_blank"
              variant="light"
              size="md"
              className="shadow-sm w-full sm:w-fit p-0 h-fit"
            >
              <ShinnyWrapper
                repeatDelay={2}
                className="text-lg w-full px-1 text-center flex justify-center items-center gap-2"
              >
                <Icons.email className="size-6" />
                Email
              </ShinnyWrapper>
            </Button>
          </Tooltip>
        </section>
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
