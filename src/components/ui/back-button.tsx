"use client";

import { Button } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { Icons } from "./icons";

export default function BackButton({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const onBack = () => router.back();

  return (
    <Button
      onClick={onBack}
      className="flex gap-1"
      startContent={<Icons.arrowBack className="size-4" />}
    >
      {children}
    </Button>
  );
}
