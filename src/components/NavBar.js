// ----- imports -----
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

// ----- components -----
import ModeToggle from "./ModeToggle";

// ----- styles -----
import "../styles/NavBar.css";

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleClick = () => {
    setIsMenuOpen(() => !isMenuOpen);
  };
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const scrollToSection = (number) => {
    scroll.scrollTo(window.innerHeight * number, { duration: 0 });
  };

  return (
    <div className="navbar-container">
      <div className="navbar-left">Logo</div>
      <div className="navbar-right">
        <div className="navbar-toggle">
          <ModeToggle />
        </div>

        <div className="navbar-bars" onClick={handleClick}>
          {isMenuOpen ? (
            <FontAwesomeIcon icon={faTimes} />
          ) : (
            <FontAwesomeIcon icon={faBars} />
          )}
        </div>

        <div className={isMenuOpen ? "navbar-links-mobile" : "navbar-links"}>
          <Link
            to="/"
            className="navbar-link-item"
            onClick={() => {
              closeMenu();
              scrollToSection(0);
            }}
          >
            Home
          </Link>
          <Link
            to="/about"
            className="navbar-link-item"
            onClick={() => {
              closeMenu();
              scrollToSection(0);
            }}
          >
            About
          </Link>
          <Link
            to="/projects"
            className="navbar-link-item"
            onClick={() => {
              closeMenu();
              scrollToSection(0);
            }}
          >
            Projects
          </Link>
          <Link
            to="/"
            className="navbar-link-item"
            onClick={() => {
              closeMenu();
              scrollToSection(0);
            }}
          >
            Resume
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
