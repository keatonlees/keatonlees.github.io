import { motion, useScroll } from "motion/react";

import NavBar from "../components/NavBar/NavBar";
import PageTransition from "../components/PageTransition/PageTransition";
import AboutMe from "../components/Sections/AboutMe/AboutMe";
import Contact from "../components/Sections/Contact/Contact";
import Education from "../components/Sections/Education/Education";
import Experiences from "../components/Sections/Experiences/Experiences";
import Heading from "../components/Sections/Heading/Heading";

function About() {
  const { scrollYProgress } = useScroll();

  const words = ["life", "work", "skills", "passions", "hobbies", "travels"];

  return (
    <>
      <PageTransition text="About Me" />
      <NavBar />

      <Heading
        title="The inside scoop on my"
        list={words}
        subtitle="A dive into my professional side"
      />
      <AboutMe />
      <Education />
      <Experiences />
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
