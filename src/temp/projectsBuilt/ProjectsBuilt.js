// ==================== LIBRARIES ====================
import { useState } from "react";
import { RiArrowLeftSFill, RiArrowRightSFill } from "react-icons/ri";
import { motion } from "framer-motion";

// ==================== UTIL ====================
import { ProjectList } from "../../data/ProjectList";

// ==================== COMPONENTS ====================
import BuiltContent from "./BuiltContent";

// ==================== STYLES ====================
import "./ProjectsBuilt.sass";
import {
  staggerChildFromBottom,
  staggerChildFromLeft,
  staggerChildFromRight,
  staggerParent,
} from "../../foundations/motionVariants/MotionVariants";

function ProjectsBuilt() {
  const [index, setIndex] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);

  const navigate = (nav) => {
    if (nav === "prev") {
      index - 1 < 0 ? setIndex(ProjectList.length - 1) : setIndex(index - 1);
    } else if (nav === "next") {
      index + 1 > ProjectList.length - 1 ? setIndex(0) : setIndex(index + 1);
    }
  };

  const calcIndex = (index, change) => {
    let res = index + change;
    if (res > ProjectList.length - 1) {
      if (change > +1)
        index === ProjectList.length - change ? (res = 0) : (res = 1);
      else res = 0;
    } else if (res < 0) {
      if (change < -1)
        index === 0
          ? (res = ProjectList.length - 2)
          : (res = ProjectList.length - 1);
      else res = ProjectList.length - 1;
    }
    return res;
  };

  return (
    <motion.div
      className="build-container"
      variants={staggerParent}
      initial="hidden"
      whileInView="show"
    >
      <div className="build-container-top">
        {/* left section */}
        <motion.div
          className="build-left"
          variants={staggerChildFromLeft}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {/* prev = front, cur = middle, next = back */}
          {ProjectList.map((project, i) => {
            const indexPrev = calcIndex(index, -1);
            const indexNext = calcIndex(index, +1);
            const indexNextNext = calcIndex(index, +2);
            let className = "content-container";

            if (i === index) className = "content-container is-active";
            else if (i === indexPrev) className = "content-container is-prev";
            else if (i === indexNext) className = "content-container is-next";
            else if (i === indexNextNext)
              className = "content-container is-next-next";
            else className = "content-container is-hidden";

            return (
              <div className={className} key={i}>
                <img
                  src={project.overlay}
                  className="content-image"
                  alt="build-img"
                />
              </div>
            );
          })}
        </motion.div>

        {/* right section */}
        <motion.div
          className="build-right"
          variants={staggerChildFromRight}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <BuiltContent
            i={index}
            isExpanded={isExpanded}
            setIsExpanded={setIsExpanded}
          />
        </motion.div>
      </div>

      {/* bottom navigation */}
      <motion.div
        className="build-container-bot"
        variants={staggerChildFromBottom}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <div className="nav nav-arrow" onClick={() => navigate("prev")}>
          <RiArrowLeftSFill />
        </div>

        {ProjectList.map((_, i) => {
          return (
            <div
              className={i === index ? "nav nav-active" : "nav nav-inactive"}
              onClick={() => setIndex(i)}
              key={i}
            >
              <div className="nav-dot"></div>
            </div>
          );
        })}

        <div className="nav nav-arrow" onClick={() => navigate("next")}>
          <RiArrowRightSFill />
        </div>
      </motion.div>
    </motion.div>
  );
}

export default ProjectsBuilt;
