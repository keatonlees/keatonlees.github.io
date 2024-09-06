// ==================== LIBRARIES ====================
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ReactTextTransition, { presets } from "react-text-transition";
import Marquee from "react-fast-marquee";

// ==================== UTIL ====================
import useWindowDimensions from "../../util/WindowDimensions.js";
import { wordSpeed } from "../constants/Constants";
import {
  staggerParent,
  staggerChildFromLeft,
  staggerChildFadeIn,
} from "../motionVariants/MotionVariants.js";
import { phone, desktop } from "../constants/Breakpoints.js";

// ==================== COMPONENTS ====================
import Text from "../text/Text";

// ==================== STYLES ====================
import "../../App.sass";
import "./Landing.sass";

function Landing({ bg, title, description, image, link, wordSet1, wordSet2 }) {
  const { width, height } = useWindowDimensions();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      wordSet2[index + 1] ? setIndex(index + 1) : setIndex(0);
    }, wordSpeed);
    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index]);

  const numLines = Math.floor(height / 10);
  let bgContent = [];
  for (let i = 0; i < numLines; i++) {
    bgContent.push(
      <Marquee
        key={i}
        speed={5}
        autoFill
        direction={i % 2 === 0 ? "left" : "right"}
      >
        <Text fs="6xl" fw="bold" className="bg-text">
          {bg}
        </Text>
      </Marquee>
    );
  }

  return (
    <div className="landing-container">
      <div className="bg-container">{bgContent}</div>

      <motion.div
        className="dim landing-content"
        variants={staggerParent}
        initial="hidden"
        animate="show"
      >
        <motion.div variants={staggerChildFromLeft} className="glass glass-bg">
          <Text fs={width <= phone ? "sm" : "md"} fw="bold" className="title">
            {title}
          </Text>
        </motion.div>

        <motion.div variants={staggerChildFromLeft} className="glass glass-bg">
          {description}
        </motion.div>

        <motion.div variants={staggerChildFromLeft} className="glass glass-bg">
          {link}
        </motion.div>
      </motion.div>

      <motion.div
        className="landing-image-container"
        variants={staggerParent}
        initial="hidden"
        animate="show"
      >
        <motion.img
          src={image}
          className="landing-image"
          variants={staggerChildFadeIn}
          alt="landing"
        />
      </motion.div>

      <motion.div
        className="dim landing-title"
        variants={staggerParent}
        initial="hidden"
        animate="show"
      >
        <motion.div variants={staggerChildFadeIn} className="glass glass-bg">
          {wordSet1.length > 1 ? (
            <ReactTextTransition springConfig={presets.gentle}>
              <Text fs={width <= desktop ? "xl" : "5xl"} fw="bold">
                {wordSet1[index]}
              </Text>
            </ReactTextTransition>
          ) : (
            <Text fs={width <= desktop ? "xl" : "5xl"} fw="bold">
              {wordSet1[0]}
            </Text>
          )}
        </motion.div>

        <motion.div variants={staggerChildFadeIn} className="glass glass-bg">
          <ReactTextTransition springConfig={presets.gentle}>
            <Text fs={width <= desktop ? "xl" : "5xl"} fw="bold">
              {wordSet2[index]}
            </Text>
          </ReactTextTransition>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Landing;
