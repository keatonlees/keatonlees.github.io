// ----- imports -----
import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

// ----- util -----
import { ProjectList } from "../util/ProjectList";
import { motionVariants } from "../util/MotionVariants";

// ----- styles -----
import "../styles/ProjectLinks.css";

function ProjectLinks(props) {
  return (
    <motion.div
      className="projectlinks-container"
      variants={motionVariants}
      initial={"hideBelow"}
      animate={"showProjectBtns"}
      exit={"exitFade"}
    >
      {ProjectList[props.index].link !== "" ? (
        <a
          href={ProjectList[props.index].link}
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faLink} className="projectlinks-link" />
        </a>
      ) : null}

      {ProjectList[props.index].github !== "" ? (
        <a
          href={ProjectList[props.index].github}
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} className="projectlinks-link" />
        </a>
      ) : null}
    </motion.div>
  );
}

export default ProjectLinks;
