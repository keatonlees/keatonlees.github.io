// ----- imports -----
import React from "react";
import { motion } from "framer-motion";

// ----- util -----
import { motionVariants } from "../util/MotionVariants";

// ----- styles -----
import "../styles/Landing.css";
import { Link } from "react-router-dom";

function Landing(props) {
  return (
    <motion.div
      className="landing-container"
      variants={motionVariants}
      initial={"hide"}
      whileInView={"showElement"}
      exit={"exitFade"}
    >
      {props.preTitle && <h2 className="pre-title">{props.preTitle}</h2>}
      {props.title && <h1 className="title">{props.title}</h1>}
      {props.subTitle && <p className="sub-title">{props.subTitle}</p>}
      {props.pageLinks === true && (
        <p className="page-links">
          {/* <Link
            to="/about"
            className="page-link-item hvr-underline-from-center"
          >
            Read About Me
          </Link>{" "}
          or{" "} */}
          <Link
            to="/projects"
            className="page-link-item hvr-underline-from-center"
          >
            Check out My Projects
          </Link>
        </p>
      )}
    </motion.div>
  );
}

export default Landing;
