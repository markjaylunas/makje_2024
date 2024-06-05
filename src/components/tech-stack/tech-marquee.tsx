import { techStackList } from "@/lib/tech-stack-constants";
import { TechStack } from "@/lib/types";
import { cn } from "@/lib/utils";
import { IconRevealMatrix } from "../ui/icon-reveal-matrix";
import { Icons } from "../ui/icons";
import Marquee from "../ui/marquee";

const iconProps = {
  className: "size-14 bg-black",
};

const TechCard = ({ title, icon, colors }: TechStack[0]) => {
  return (
    <figure
      className={cn("relative w-52 cursor-pointer overflow-hidden rounded-3xl")}
    >
      <IconRevealMatrix
        title={title}
        icon={Icons[icon](iconProps)}
        colors={colors}
        key={title}
      />
    </figure>
  );
};

export default function TechMarquee() {
  return (
    <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background md:shadow-xl">
      <Marquee pauseOnHover className="[--duration:20s]">
        {techStackList.map((tech) => (
          <TechCard key={tech.title} {...tech} />
        ))}
      </Marquee>

      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
    </div>
  );
}
