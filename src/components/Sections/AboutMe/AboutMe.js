// @ts-nocheck
// @ts-ignore
import { motion, useScroll, useTransform } from "motion/react";

import taekwondo from "../../../images/ab_taekwondo.jpg";
import track from "../../../images/ab_track.jpg";
import headshot from "../../../images/headshot_grad.JPG";
import Text from "../../ui/Text/Text";
import Heading from "../Heading/Heading";

import "./AboutMe.sass";

function AboutMe() {
  const { scrollYProgress } = useScroll();
  const radius = useTransform(scrollYProgress, [0, 1], [0, 2000]);

  const words = ["life", "work", "skills", "passions", "hobbies", "travels"];

  return (
    <div className="about-me">
      <div className="about-left-container">
        <Heading
          title="The inside scoop on my"
          list={words}
          subtitle="A dive into my professional and personal sides of life. Somewhere to view my journey and skills, but also my passions and adventures. And yes, I'm the smaller one."
        />
        <motion.div
          className="about-summary"
          initial={{ opacity: 0, x: -20 }}
          animate={{
            opacity: 1,
            x: 0,
            transition: { duration: 0.6, delay: 2.6 },
          }}
        >
          <Text variant="p">
            As a Systems Design Engineering grad from the University of
            Waterloo, I've developed a deep passion for solving complex problems
            through technology and design. Over the years, I've worked in
            diverse roles that helped me build a strong technical foundation.
            These well-rounded perspectives taught me how technology can shape
            the world and change the way we see and do things in life.
          </Text>
        </motion.div>
      </div>
      <motion.div
        className="about-right-container"
        style={{ borderBottomLeftRadius: radius }}
      >
        <div className="image-container-top">
          <motion.div
            className="image-container-left"
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: { duration: 0.6, delay: 2 },
            }}
          >
            <img
              src={headshot}
              alt="headshot"
              className="image-cover"
              loading="lazy"
            />
          </motion.div>
          <motion.div
            className="image-container-right"
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: { duration: 0.6, delay: 2.3 },
            }}
          >
            <img
              src={taekwondo}
              alt="headshot"
              className="image-cover"
              loading="lazy"
            />
          </motion.div>
        </div>
        <motion.div
          className="image-container-bottom"
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { duration: 0.6, delay: 2.6 },
          }}
        >
          <img
            src={track}
            alt="headshot"
            className="image-cover"
            loading="lazy"
          />
        </motion.div>
      </motion.div>
    </div>
  );
}

export default AboutMe;
