// ----- imports -----
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretLeft } from "@fortawesome/free-solid-svg-icons";

// ----- util -----
import { motionVariants } from "../util/MotionVariants";

// ----- styles -----
import "../styles/BackButton.css";

function BackButton() {
  return (
    <Link to="/projects" className="back-btn-link">
      <motion.div
        className="back-btn-container"
        variants={motionVariants}
        initial={"hideAbove"}
        animate={"showProjectBtns"}
        exit={"exitFade"}
        whileHover={"grow"}
      >
        <FontAwesomeIcon icon={faCaretLeft} className="back-btn-icon" />
        Back to Projects
      </motion.div>
    </Link>
  );
}

export default BackButton;
