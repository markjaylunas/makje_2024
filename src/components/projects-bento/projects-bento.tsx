import IMG_Mathdojo from "@/assets/mathdojo.png";
import IMG_Stream from "@/assets/stream.png";
import { PROJECTS_LINKS } from "@/lib/config";
import {
  Button,
  ButtonGroup,
  Card,
  CardFooter,
  CardHeader,
} from "@nextui-org/react";
import Image from "next/image";
import NextLink from "next/link";
import { Icons } from "../ui/icons";

export default function ProjectsBento() {
  return (
    <section className="mx-auto max-w-[900px] gap-4 grid grid-cols-12 grid-rows-2 px-8">
      <Card
        isFooterBlurred
        className="w-full col-span-12 sm:col-span-5 row-span-2"
      >
        <Image
          unoptimized
          alt="Mathdojo screenshot"
          className="z-0 w-full h-full object-cover"
          src={IMG_Mathdojo}
        />
        <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
          <div className="flex flex-grow gap-2 items-center">
            <div className="flex flex-col">
              <p className="text-tiny text-white/60">Mathdojo is a web game.</p>
              <p className="text-tiny text-white/60">
                Improve your basic math skills.
              </p>
            </div>
          </div>

          <ButtonGroup>
            <Button
              as={NextLink}
              target="_blank"
              href={PROJECTS_LINKS.mathdojo.repo}
              className="text-tiny"
              color="default"
              radius="full"
              size="sm"
              startContent={<Icons.code />}
              variant="shadow"
            >
              Code
            </Button>
            <Button
              as={NextLink}
              target="_blank"
              href={PROJECTS_LINKS.mathdojo.website}
              radius="full"
              size="sm"
              color="secondary"
            >
              Play Now
            </Button>
          </ButtonGroup>
        </CardFooter>
      </Card>

      <Card
        isFooterBlurred
        className="w-full h-[300px] col-span-12 sm:col-span-7"
      >
        <Image
          unoptimized
          alt="Stream screenshot"
          className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
          src={IMG_Stream}
        />
        <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
          <div>
            <p className="text-black text-tiny px-2">
              A streaming web app, discover anime, movies, k-drama, and manga
              here.
            </p>
          </div>

          <ButtonGroup>
            <Button
              as={NextLink}
              target="_blank"
              href={PROJECTS_LINKS.stream.repo}
              className="text-tiny"
              color="default"
              radius="full"
              size="sm"
              startContent={<Icons.code />}
              variant="shadow"
            >
              Code
            </Button>
            <Button
              as={NextLink}
              target="_blank"
              href={PROJECTS_LINKS.stream.website}
              className="text-tiny"
              color="secondary"
              radius="full"
              size="sm"
              variant="shadow"
              endContent={<Icons.arrowUpRight />}
            >
              Live
            </Button>
          </ButtonGroup>
        </CardFooter>
      </Card>

      <Card className="col-span-12 sm:col-span-7 h-[300px] flex justify-center items-center">
        <CardHeader className="absolute z-10 top-1 flex-col !items-start">
          <p className="text-tiny text-white/60 uppercase font-bold">
            Want More
          </p>
          <h4 className="text-white font-medium text-large">
            Project Showcase
          </h4>
        </CardHeader>

        <Button
          isDisabled
          as={NextLink}
          href="/projects"
          color="secondary"
          size="lg"
        >
          View All Projects
        </Button>
      </Card>
    </section>
  );
}
