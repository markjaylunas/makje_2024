import { siteConfig } from "@/lib/config";
import { Button } from "@nextui-org/react";
import NextLink from "next/link";
import { Icons } from "../ui/icons";

export function Footer() {
  return (
    <footer
      id="footer"
      className="border-t border-default-100 py-6 md:px-8 md:py-0"
    >
      <div className="container mx-auto flex flex-col items-center justify-center gap-4 space-y-4 py-8">
        <section className="flex flex-col sm:flex-row gap-6 sm:gap-12">
          <Button
            as={NextLink}
            href={siteConfig.links.github}
            target="_blank"
            startContent={<Icons.github className="size-6" />}
            variant="light"
            size="lg"
          >
            Github
          </Button>
          <Button
            as={NextLink}
            href={siteConfig.links.linkedIn}
            target="_blank"
            startContent={<Icons.linkedIn className="size-6" />}
            variant="light"
            size="lg"
          >
            LinkedIn
          </Button>

          <Button
            as={NextLink}
            href={siteConfig.links.email}
            target="_blank"
            startContent={<Icons.email className="size-6" />}
            variant="light"
            size="lg"
          >
            Email
          </Button>
        </section>

        <p className="text-balance text-center text-sm leading-loose text-muted-foreground md:text-left">
          Dev&nbsp;
          <a
            href={siteConfig.links.github}
            target="_blank"
            rel="noreferrer"
            className="font-medium underline underline-offset-4"
          >
            makje
          </a>
          .
        </p>
      </div>
    </footer>
  );
}
