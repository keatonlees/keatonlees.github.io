// ----- imports -----
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import ReactTextTransition, { presets } from "react-text-transition";

// ----- util -----
import { motionVariants } from "../util/MotionVariants";

// ----- styles -----
import "../styles/Landing.css";
import { Link } from "react-router-dom";

function Landing(props) {
  const [wordIndex, setWordIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      props.words[wordIndex + 1]
        ? setWordIndex(wordIndex + 1)
        : setWordIndex(0);
    }, 3000);
    return () => clearInterval(interval);
  }, [wordIndex]);

  return (
    <motion.div
      className="landing-container"
      variants={motionVariants}
      initial={"hide"}
      whileInView={"showElement"}
      exit={"exitFade"}
    >
      {props.preTitle && <h2 className="pre-title">{props.preTitle}</h2>}
      {props.page === "home" && (
        <h1 className="title">
          <ReactTextTransition springConfig={presets.gentle} inline>
            {props.words[wordIndex]}
          </ReactTextTransition>
        </h1>
      )}
      {props.page === "about" && (
        <h1 className="title">
          View my{" "}
          <ReactTextTransition springConfig={presets.gentle} inline>
            {props.words[wordIndex]}
          </ReactTextTransition>
        </h1>
      )}
      {props.page === "projects" && (
        <h1 className="title">
          What I've{" "}
          <ReactTextTransition springConfig={presets.gentle} inline>
            {props.words[wordIndex]}
          </ReactTextTransition>
        </h1>
      )}
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
            className="page-link-item hvr-underline-from-left"
          >
            Check out My Projects
          </Link>
        </p>
      )}
    </motion.div>
  );
}

export default Landing;
