import BackButton from "@/components/ui/back-button";
import { Icons } from "@/components/ui/icons";
import Link from "@/components/ui/link";
import { Button } from "@nextui-org/button";

export default async function NotFound() {
  return (
    <main className="container mx-auto max-w-lg min-h-screen space-y-8 p-8">
      <h1 className="mt-10 text-center text-4xl font-extrabold tracking-tight lg:text-5xl">
        404 - Not Found
      </h1>
      <p>
        Page you are trying to open does not exist. You may have mistyped the
        address, or the page has been moved to another URL. If you think this is
        an error contact support.
      </p>

      <div className="flex justify-center gap-4 ">
        <BackButton>Get back</BackButton>
        <Link href="/">
          <Button
            color="primary"
            startContent={<Icons.home className="size-4" />}
          >
            Get to home page
          </Button>
        </Link>
      </div>
    </main>
  );
}
