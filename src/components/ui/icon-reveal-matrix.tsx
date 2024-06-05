"use client";
import React from "react";

import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect";
import { AnimatePresence, motion } from "framer-motion";

export function IconRevealMatrix({
  title,
  icon,
  colors,
}: {
  title: string;
  icon: React.ReactNode;
  colors: number[][];
}) {
  return (
    <>
      <Card title={title} icon={icon}>
        <CanvasRevealEffect
          colors={colors}
          animationSpeed={5}
          containerClassName="bg-transparent"
          opacities={[0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.8, 0.9, 1]}
          dotSize={2}
          showGradient
        />
        <div className="absolute inset-0 [mask-image:radial-gradient(70px_at_center,white,transparent)] bg-black/50 dark:bg-black/90" />
      </Card>
    </>
  );
}

const Card = ({
  title,
  icon,
  children,
}: {
  title: string;
  icon: React.ReactNode;
  children?: React.ReactNode;
}) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group/canvas-card flex items-center justify-center dark:border-white/[0.2] mx-auto relative w-full h-full py-5"
    >
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="h-full w-full absolute inset-0"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-20">
        <div className=" text-center translate-y-2 group-hover/canvas-card:translate-y-0 group-hover/canvas-card:grayscale-0 grayscale transition duration-200 w-full  mx-auto flex items-center justify-center">
          {icon}
        </div>
        <h4 className="text-center translate-y-2 group-hover/canvas-card:translate-y-1 dark:text-white opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black font-bold group-hover/canvas-card:text-white transition duration-200">
          {title}
        </h4>
      </div>
    </div>
  );
};
