// ----- imports -----
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { animateScroll as scroll } from "react-scroll";
import { useLocation } from "react-router";

// ----- pages -----

// ----- components -----

// ----- styles -----
import "../../styles/Project.css";

// ----- images -----
import placeholder from "../../images/placeholder.png";

function ProjectTemplate({ projectImage }) {
  window.addEventListener("wheel", (event) => event.preventDefault(), {
    passive: false,
  });

  // get current section
  const [currentSection, setCurrentSection] = useState(0);
  const pathname = useLocation();
  useEffect(() => {
    setCurrentSection(Math.round(window.scrollY / window.innerHeight));
  }, [pathname]);

  // snap scrolling
  let scrollAmount = 0;
  let threshold = 500;
  let numOfSections = 2;
  useEffect(() => {
    const onScroll = (event) => {
      if (
        (event.deltaY > 0 && currentSection === numOfSections) ||
        (event.deltaY < 0 && currentSection === 0)
      ) {
        scrollAmount = 0;
      } else {
        scrollAmount += event.deltaY;
        if (scrollAmount > threshold) {
          scrollAmount = 0;
          setCurrentSection(() => currentSection + 1);
        } else if (scrollAmount < -threshold) {
          scrollAmount = 0;
          setCurrentSection(() => currentSection - 1);
        }
      }
      scroll.scrollTo(window.innerHeight * currentSection);
    };
    window.addEventListener("wheel", onScroll);
    return () => window.removeEventListener("wheel", onScroll);
  }, [currentSection]);

  return (
    <div className="page-container">
      <div className="page-section">
        <div className="project-banner">
          {/* <div className="project-banner-bg"></div> */}
          <motion.img
            src={placeholder}
            className="project-banner-image"
            initial={{ width: projectImage.width, height: projectImage.height }}
            animate={{ width: "100%", height: "100%" }}
            transition={{ duration: 1 }}
          />
        </div>
      </div>
      <div className="page-section">
        <h1>Content</h1>
        <h1>Content</h1>
        <h1>Content</h1>
      </div>
    </div>
  );
}

export default ProjectTemplate;
