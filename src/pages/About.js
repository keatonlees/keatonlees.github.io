import { motion, useScroll } from "motion/react";

import NavBar from "../components/NavBar/NavBar";
import PageTransition from "../components/PageTransition/PageTransition";
import AboutMe from "../components/Sections/AboutMe/AboutMe";
import Contact from "../components/Sections/Contact/Contact";
import Education from "../components/Sections/Education/Education";
import Experiences from "../components/Sections/Experiences/Experiences";
import Skills from "../components/Sections/Skills/Skills";

function About() {
  const { scrollYProgress } = useScroll();

  return (
    <>
      <PageTransition text="About Me" />
      <NavBar />

      <AboutMe />
      <Education />
      <Experiences />
      <Skills />
      <Contact />

      <motion.div
        className="progress-bar"
        style={{
          scaleX: scrollYProgress,
        }}
      />
    </>
  );
}

export default About;
