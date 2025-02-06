// ==================== IMPORTS ====================
import React from "react";
import { motion, useIsPresent } from "framer-motion";

// ==================== STYLES ====================
import "./PageTransition.sass";

function PageTransition() {
  const isPresent = useIsPresent();

  return (
    <motion.div
      className="colour-wipe"
      initial={{ scaleY: 1 }}
      animate={{
        scaleY: 0,
        transition: { duration: 0.8, ease: "circOut", delay: 2 },
      }}
      exit={{
        scaleY: 1,
        transition: { duration: 0.8, ease: "circIn", delay: 0.1 },
      }}
      style={{ originY: isPresent ? 1 : 0 }}
    >
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: 0, transition: { delay: 1 } }}
      >
        Designed by Keaton
      </motion.div>
    </motion.div>
  );
}

export default PageTransition;
