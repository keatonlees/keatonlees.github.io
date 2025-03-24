import { motion, useScroll } from "motion/react";

import NavBar from "../components/NavBar/NavBar";
import PageTransition from "../components/PageTransition/PageTransition";
import Contact from "../components/Sections/Contact/Contact";
import MyProjects from "../components/Sections/MyProjects/MyProjects";
import ProjectPage from "../components/Sections/ProjectPage/ProjectPage";
import { ProjectList } from "../data/ProjectList";

function Projects() {
  const { scrollYProgress } = useScroll();

  return (
    <>
      <PageTransition text="My Projects" />
      <NavBar />

      <MyProjects />
      {ProjectList.map((data, i) => {
        return <ProjectPage key={i} data={data} index={i} />;
      })}
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

export default Projects;
