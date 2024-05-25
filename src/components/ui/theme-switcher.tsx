"use client";

import { Switch } from "@nextui-org/react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Icons } from "./icons";

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <Switch
      isSelected={theme !== "dark"}
      onValueChange={(value) => setTheme(value ? "light" : "dark")}
      aria-label="Theme switcher"
      startContent={<Icons.sun />}
      endContent={<Icons.moon />}
    />
  );
}
