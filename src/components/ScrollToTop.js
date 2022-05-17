// ----- imports -----
import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";

// ----- styles -----
import "../styles/ScrollToTop.css";
import { motionVariants } from "../util/MotionVariants";

function ScrollToTop(props) {
  const handleClick = () => {
    props.swiperControl.slideTo(0);
  };

  return (
    <>
      {props.swiperControl.activeIndex > 0 ? (
        <motion.div
          className="scrolltotop-container"
          onClick={handleClick}
          variants={motionVariants}
          initial={"hide"}
          animate={"showScroll"}
          exit={"exitFade"}
        >
          <p className="scrolltotop-text">Scroll To Top</p>
          <div className="scrolltotop-arrow-container">
            <FontAwesomeIcon icon={faChevronUp} className="scrolltotop-arrow" />
          </div>
        </motion.div>
      ) : null}
    </>
  );
}

export default ScrollToTop;
