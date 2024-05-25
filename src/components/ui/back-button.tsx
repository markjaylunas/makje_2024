"use client";

import { Button, ButtonProps } from "@nextui-org/react";
import { useRouter } from "next/navigation";

export default function BackButton({ children, ...props }: ButtonProps) {
  const router = useRouter();
  const onBack = () => router.back();

  return (
    <Button onClick={onBack} {...props}>
      {children}
    </Button>
  );
}
