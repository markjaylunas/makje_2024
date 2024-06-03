"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

type Props = {
  children: React.ReactNode;
} & React.HTMLProps<HTMLDivElement>;

export default function ContentMotion({ children, className }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      transition={{ duration: 0.5 }}
      className={cn(
        "absolute inset-0 h-full w-full overflow-hidden",
        className
      )}
    >
      {children}
    </motion.div>
  );
}
