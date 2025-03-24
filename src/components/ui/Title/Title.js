import { motion } from "motion/react";

import Text from "../Text/Text";

import "./Title.sass";

function Title({
  children,
  variant = "md",
  mode = "light",
  className = "",
  ...props
}) {
  return (
    <motion.div
      className={`title-container title-${mode} ${className}`}
      {...props}
      initial={{ opacity: 0, x: -20 }}
      whileInView={{
        opacity: 1,
        x: 0,
        transition: { duration: 0.6, delay: 0.3 },
      }}
      viewport={{ once: true, amount: 0.6 }}
    >
      <Text variant="h1" className={`title-text-${variant}`}>
        {children}
      </Text>
      <div className={`dash dash-${mode}`} />
    </motion.div>
  );
}

export default Title;
