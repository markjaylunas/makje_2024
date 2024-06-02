import { Button } from "@nextui-org/react";
import { Icons } from "../ui/icons";
import ShinnyWrapper from "../ui/shiny-wrapper";
import { Spotlight } from "./spotlight";

export default function HeroSection() {
  return (
    <section className="h-[calc(100dvh-4rem)] px-8 md:px-24 flex flex-col items-center justify-evenly">
      <Spotlight
        className="-top-0 left-0 md:-top-28 md:left-24 lg:-top-56 lg:left-72"
        fill="white"
      />

      <Icons.logo
        className=" size-44 relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] "
        aria-label="Makje"
      />

      <div>
        <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
          I&apos;m Makje. <br /> A web developer.
        </h1>

        <p className="mt-4 font-normal text-pretty text-xl md:text-3xl text-neutral-300 max-w-lg text-center mx-auto">
          Crafting a faster, personalized web with modern frontend technologies.
        </p>

        <div className="mt-12 md:mt-8 flex gap-4 md:gap-8 justify-center items-center flex-wrap">
          <Button className="p-0 w-fit h-fit ">
            <ShinnyWrapper>Get in Touch</ShinnyWrapper>
          </Button>

          <Button className="p-0 w-fit h-fit">
            <ShinnyWrapper>Get in Touch</ShinnyWrapper>
          </Button>
        </div>
      </div>
    </section>
  );
}
