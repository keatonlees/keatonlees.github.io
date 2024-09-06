// ==================== IMPORTS ====================
import React from "react";
import { motion, useIsPresent } from "framer-motion";

// ==================== STYLES ====================
import "./ColourWipe.sass";

function ColourWipe() {
  const isPresent = useIsPresent();

  return (
    <motion.div
      className="colour-wipe"
      initial={{ scaleY: 1 }}
      animate={{
        scaleY: 0,
        transition: { duration: 0.8, ease: "circOut", delay: 0.3 },
      }}
      exit={{
        scaleY: 1,
        transition: { duration: 0.8, ease: "circIn", delay: 0.1 },
      }}
      style={{ originY: isPresent ? 0 : 1 }}
    />
  );
}

export default ColourWipe;
