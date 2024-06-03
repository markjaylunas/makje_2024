"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ReactNode } from "react";

export default function ShinnyWrapper({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ "--x": "100%", scale: 1 } as any}
      animate={{ "--x": "-100%" } as any}
      whileTap={{ scale: 0.97 }}
      transition={{
        repeat: Infinity,
        repeatType: "loop",
        repeatDelay: 1,
        type: "spring",
        stiffness: 20,
        damping: 15,
        mass: 2,
        scale: {
          type: "spring",
          stiffness: 10,
          damping: 5,
          mass: 0.1,
        },
      }}
      className="px-6 py-3 rounded-md relative radial-gradient h-full w-ful"
    >
      <span
        className={cn(
          "text-neutral-100 tracking-wide font-light block relative linear-mask",
          className
        )}
      >
        {children}
      </span>
      <span className="block absolute inset-0 rounded-md p-px linear-overlay" />
    </motion.div>
  );
}
