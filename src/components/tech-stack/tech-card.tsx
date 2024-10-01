import { TechStack } from "@/lib/types";
import NextLink from "next/link";
import { IconRevealMatrix } from "../ui/icon-reveal-matrix";
import { Icons } from "../ui/icons";

const iconProps = {
  className: "size-14",
};

export default function TechCard({ title, icon, colors, href }: TechStack[0]) {
  return (
    <NextLink href={href} target="_blank">
      <figure className="relative border border-neutral-800 border-dashed p-1 w-40 sm:w-48 lg:w-56 aspect-4/3 cursor-pointer overflow-hidden">
        <IconRevealMatrix
          title={title}
          icon={Icons[icon](iconProps)}
          colors={colors}
          key={title}
        />
      </figure>
    </NextLink>
  );
}
