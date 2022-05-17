// ----- imports -----
import React from "react";
import { motion } from "framer-motion";

// ----- util -----
import { motionVariants } from "../util/MotionVariants";

// ----- styles -----
import "../styles/MegaText.css";

function MegaText(props) {
  return (
    <motion.div
      className="megatext-container"
      variants={motionVariants}
      initial={"hide"}
      animate={"showMegaText"}
      exit={"exitFade"}
      style={{ left: `-${props.percentage}%` }}
    >
      <h1 className="megatext-text">{props.text}</h1>
    </motion.div>
  );
}

export default MegaText;
