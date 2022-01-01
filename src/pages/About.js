// ----- imports -----
import React, { useEffect, useState } from "react";
import { animateScroll as scroll } from "react-scroll";
import { useLocation } from "react-router";

// ----- pages -----

// ----- components -----
import Landing from "../components/Landing";

// ----- styles -----
import "../App.css";

function About() {
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
        <Landing
          preTitle="Who am I?"
          title="A Technology Enthusiast"
          subTitle="Also an exercise fanatic, avid traveller and devoted gamer"
        />
      </div>
      <div className="page-section">
        <h1>Space</h1>
        <h1>Space</h1>
        <h1>Space</h1>
        <h1>Space</h1>
      </div>
      <div className="page-section">
        <h1>Space</h1>
        <h1>Space</h1>
        <h1>Space</h1>
        <h1>Space</h1>
      </div>
    </div>
  );
}

export default About;
