import { Icons } from "../ui/icons";
import { Spotlight } from "./spotlight";

export default function HeroSection() {
  return (
    <section>
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div>
        <Icons.logo
          className="size-44 relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] "
          aria-label="Makje"
        />

        <h1 className="text-pretty text-4xl md:text-5xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
          I&apos;m Makje. Crafting a faster, personalized web with modern
          frontend technologies.
        </h1>
      </div>
    </section>
  );
}
