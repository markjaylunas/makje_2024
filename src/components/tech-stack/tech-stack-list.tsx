"use client";

import { techStackList } from "@/lib/tech-stack-constants";
import { cn } from "@/lib/utils";
import { Button } from "@nextui-org/react";
import { useState } from "react";
import { Icons } from "../ui/icons";
import TechCard from "./tech-card";

export default function TechStackList() {
  const [isShowAll, setIsShowAll] = useState(false);

  const minTechList = techStackList.slice(0, 7);
  const list = isShowAll ? techStackList : minTechList;
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 w-fit mx-auto">
      {list.map((tech) => (
        <TechCard key={tech.title} {...tech} />
      ))}
      <figure className="relative border border-neutral-800 border-dashed p-1 w-40 sm:w-48 lg:w-56 aspect-4/3 cursor-pointer overflow-hidden flex justify-center items-center">
        <Button
          variant="bordered"
          onClick={() => setIsShowAll((v) => !v)}
          endContent={
            <Icons.chevronDown className={cn(isShowAll && "rotate-180")} />
          }
        >
          {!isShowAll ? "Show all tech" : "Collapse"}
        </Button>
      </figure>
    </div>
  );
}
