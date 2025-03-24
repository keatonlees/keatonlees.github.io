import { motion, useScroll } from "motion/react";

import NavBar from "../components/NavBar/NavBar";
import PageTransition from "../components/PageTransition/PageTransition";
import Contact from "../components/Sections/Contact/Contact";
import Dashboard from "../components/Sections/Dashboard/Dashboard";
import Hero from "../components/Sections/Hero/Hero";
import Spotlight from "../components/Sections/Spotlight/Spotlight";

function Home() {
  const { scrollYProgress } = useScroll();

  return (
    <>
      <PageTransition text="Keaton Lees" />
      <NavBar />

      <Hero />
      <Dashboard />
      <Spotlight />
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

export default Home;
