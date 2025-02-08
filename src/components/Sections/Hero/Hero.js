import { useEffect, useState } from "react";

import { motion, useScroll, useTransform } from "motion/react";
import ReactTextTransition, { presets } from "react-text-transition";

import headshot from "../../../images/headshot.png";
import MarqueeText from "../../MarqueeText/MarqueeText";
import Socials from "../../Socials/Socials";
import Text from "../../ui/Text/Text";

import "./Hero.sass";

import planets from "../../../images/planets.png";

function Hero() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0px", "300px"]);

  const [index, setIndex] = useState(0);
  const wordSet = ["Software Developer", "Avid Traveler"];

  const [position1, setPosition1] = useState({ top: 0, left: 0 });
  const [position2, setPosition2] = useState({ bottom: 0, right: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      wordSet[index + 1] ? setIndex(index + 1) : setIndex(0);
    }, 3000);
    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index]);

  useEffect(() => {
    const interval = setInterval(() => {
      const max_width = window.innerWidth - 300;
      const max_height = window.innerHeight - 300;
      setPosition1({
        top: Math.floor(Math.random() * max_height),
        left: Math.floor(Math.random() * max_width),
      });
      setPosition2({
        bottom: Math.floor(Math.random() * max_height),
        right: Math.floor(Math.random() * max_width),
      });
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hero">
      {/* Blobs */}
      <div
        className="blob blob-1"
        style={{ top: `${position1.top}px`, left: `${position1.left}px` }}
      />
      <div
        className="blob blob-2"
        style={{
          bottom: `${position2.bottom}px`,
          right: `${position2.right}px`,
        }}
      />

      {/* Flairs */}
      <motion.div
        className="flair coords"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 4.4, duration: 0.6 } }}
      >
        <Text variant="h1">53.7267° N, 127.6476° W</Text>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 4.4, duration: 0.6 } }}
      >
        <img src={planets} alt="planets" className="flair planets planets-1" />
        <img src={planets} alt="planets" className="flair planets planets-2" />
      </motion.div>

      {/* Marquees */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 4.4, duration: 0.6 } }}
      >
        <MarqueeText
          text="heythere"
          width={500}
          coords={{ left: -100, top: 100 }}
          angle={-45}
          className="hero-marquee"
        />
        <MarqueeText
          text="scrolldown"
          width={500}
          coords={{ right: -100, bottom: 100 }}
          angle={-45}
          className="hero-marquee"
        />
      </motion.div>

      <div className="hero-content">
        <motion.div
          className="social-content"
          style={{ y }}
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1, transition: { delay: 3.2 } }}
        >
          <Socials className="hero-socials" />
        </motion.div>

        {/* Mega Text */}
        <motion.div className="mega-text" style={{ y }}>
          <h1>Keaton Lees</h1>
        </motion.div>

        {/* Content */}
        <motion.div className="sub-content" style={{ y }}>
          <motion.div
            className="content-left"
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1, transition: { delay: 2.8 } }}
          >
            <Text variant="h1" className="sub-text">
              Systems Design Engineering Grad from the University of Waterloo
            </Text>
          </motion.div>

          <motion.div
            className="content-right"
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1, transition: { delay: 3 } }}
          >
            <ReactTextTransition springConfig={presets.gentle}>
              <Text variant="h1" className="transition-text">
                {wordSet[index]}
              </Text>
            </ReactTextTransition>
          </motion.div>
        </motion.div>

        {/* Image */}
        <motion.img
          src={headshot}
          alt="self portrait"
          className="mega-image"
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { delay: 3.4, ease: "easeInOut" },
          }}
        />
      </div>
    </div>
  );
}

export default Hero;
