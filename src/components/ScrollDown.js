// ----- imports -----
import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMouse, faChevronDown } from "@fortawesome/free-solid-svg-icons";

// ----- styles -----
import "../styles/ScrollDown.css";
import { motionVariants } from "../util/MotionVariants";

function ScrollDown(props) {
  const handleClick = () => {
    props.swiperControl.slideNext();
  };

  return (
    <>
      {props.swiperControl.activeIndex === 0 ? (
        <motion.div
          className="scrolldown-container"
          onClick={handleClick}
          variants={motionVariants}
          initial={"hide"}
          animate={"showScroll"}
          exit={"exitMoveDown"}
        >
          <FontAwesomeIcon icon={faMouse} className="scrolldown-mouse" />
          <p className="scrolldown-text">Scroll</p>
          <FontAwesomeIcon icon={faChevronDown} className="scrolldown-arrow" />
        </motion.div>
      ) : null}
    </>
  );
}

export default ScrollDown;
