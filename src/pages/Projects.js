import { motion, useScroll } from "motion/react";

import NavBar from "../components/NavBar/NavBar";
import PageTransition from "../components/PageTransition/PageTransition";
import Heading from "../components/Sections/Heading/Heading";

function Projects() {
  const { scrollYProgress } = useScroll();

  const words = ["coded", "developed", "created"];

  return (
    <>
      <PageTransition text="My Projects" />
      <NavBar />

      <Heading
        title="A collection of what I've"
        list={words}
        subtitle="A walkthrough of various projects"
      />

      <motion.div
        className="progress-bar"
        style={{
          scaleX: scrollYProgress,
        }}
      />
    </>
  );
}

export default Projects;
