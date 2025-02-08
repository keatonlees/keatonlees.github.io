import { motion, useIsPresent } from "motion/react";

import Text from "../ui/Text/Text";

import "./PageTransition.sass";

function PageTransition({ text = "Keaton Lees" }) {
  const isPresent = useIsPresent();

  return (
    <motion.div
      className="colour-wipe"
      initial={{ scaleY: 1 }}
      animate={{
        scaleY: 0,
        transition: { duration: 0.8, ease: "circOut", delay: 1.2 },
      }}
      exit={{
        scaleY: 1,
        transition: { duration: 0.8, ease: "circIn", delay: 0.1 },
      }}
      style={{ originY: isPresent ? 1 : 0 }}
    >
      <motion.div
        initial={{ opacity: 1 }}
        animate={{
          opacity: 0,
          transition: { duration: 0.4, ease: "circOut", delay: 0.5 },
        }}
      >
        <Text variant="h1">{text}</Text>
      </motion.div>
    </motion.div>
  );
}

export default PageTransition;
