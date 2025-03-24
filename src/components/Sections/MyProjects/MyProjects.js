import { motion } from "motion/react";

import ProjectGraphics from "../../ProjectGraphics/ProjectGraphics";
import Text from "../../ui/Text/Text";
import Heading from "../Heading/Heading";

import "./MyProjects.sass";

function MyProjects() {
  const words = ["coded", "developed", "created"];

  return (
    <div className="my-projects">
      <motion.div
        className="my-projects-left-container"
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { duration: 0.6, delay: 2 },
        }}
      >
        <ProjectGraphics />
      </motion.div>
      <div className="my-projects-right-container">
        <Heading
          title="A collection of what I've"
          list={words}
          subtitle="A walkthrough of my various projects from small to large. Here's all the things I have built and the things I am thinking of doing."
        />
        <motion.div
          className="my-projects-summary"
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
    </div>
  );
}

export default MyProjects;
