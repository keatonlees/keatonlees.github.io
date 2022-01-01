// ----- imports -----
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";
import { useLocation } from "react-router";
import { ProjectList } from "../util/ProjectList";

// ----- pages -----

// ----- components -----
import Landing from "../components/Landing";

// ----- styles -----
import "../App.css";
import "../styles/Projects.css";

// ----- images -----
import placeholder from "../images/placeholder.png";

function Projects({ projectImage }) {
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

  const scrollToSection = (number) => {
    scroll.scrollTo(window.innerHeight * number, { duration: 0 });
  };

  return (
    <div className="page-container">
      <div className="page-section">
        <Landing
          preTitle="A look into what I've done"
          title="My Projects"
          subTitle="Let me take you on a journey through designing, developing and testing"
        />
      </div>
      <div className="page-section section-centered">
        <div className="projects-item">
          <h1 className="project-title">Title</h1>
          <Link
            to="/projects/projecttemplate"
            onClick={() => scrollToSection(0)}
          >
            <img
              src={placeholder}
              className="projects-item-image"
              style={{
                width: projectImage.width,
                height: projectImage.height,
              }}
            />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Projects;
