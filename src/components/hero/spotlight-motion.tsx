"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SpotlightMotionProps {
  children: ReactNode;
}

const SpotlightMotion = ({ children }: SpotlightMotionProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="absolute inset-0 h-full w-full overflow-hidden"
    >
      {children}
    </motion.div>
  );
};

export default SpotlightMotion;
