// ----- imports -----
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import useDarkMode from "use-dark-mode";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

// ----- components -----
import ModeToggle from "./ModeToggle";

// ----- styles -----
import "../styles/NavBar.css";

// ----- logo -----
import logoDark from "../images/logo_dark.png";
import logoLight from "../images/logo_light.png";

import resume from "../files/KeatonLeesResume2022.pdf";

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}
function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );
  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
}

function NavBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location, setLocation] = useState("");
  const { width } = useWindowDimensions();

  const path = useLocation();
  useEffect(() => {
    setLocation(path.pathname);
  }, [path]);

  const closeMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const darkMode = useDarkMode(true);

  return (
    <div className="navbar-container">
      <div className="navbar-left">
        <img
          src={darkMode.value ? logoLight : logoDark}
          alt="navbar_logo"
          className="navbar-logo"
        />
      </div>
      <div className="navbar-right">
        <div className="navbar-toggle">
          <ModeToggle />
        </div>

        {width < 992 ? (
          <div className="mobile-links-container">
            <button
              className="mobile-menu-button"
              onClick={() =>
                setIsMobileMenuOpen((isMobileMenuOpen) => !isMobileMenuOpen)
              }
            >
              <div
                className={
                  isMobileMenuOpen ? "mobile-bar-one open" : "mobile-bar-one"
                }
              />
              <div
                className={
                  isMobileMenuOpen ? "mobile-bar-two open" : "mobile-bar-two"
                }
              />
              <div
                className={
                  isMobileMenuOpen
                    ? "mobile-bar-three open"
                    : "mobile-bar-three"
                }
              />
            </button>

            <div
              className={
                isMobileMenuOpen
                  ? "mobile-links-overlay open"
                  : "mobile-links-overlay"
              }
            >
              {location === "/" ? (
                <p className="mobile-link-item-active">Home</p>
              ) : (
                <Link
                  to="/"
                  className="mobile-link-item hvr-underline-from-center"
                  onClick={() => {
                    closeMenu();
                    setLocation("/");
                  }}
                >
                  Home
                </Link>
              )}

              {location === "/about" ? (
                <p className="mobile-link-item-active">About</p>
              ) : (
                <Link
                  to="/about"
                  className="mobile-link-item hvr-underline-from-center"
                  onClick={() => {
                    closeMenu();
                    setLocation("/about");
                  }}
                >
                  About
                </Link>
              )}

              {location === "/projects" ? (
                <p className="mobile-link-item-active">Projects</p>
              ) : (
                <Link
                  to="/projects"
                  className="mobile-link-item hvr-underline-from-center"
                  onClick={() => {
                    closeMenu();
                    setLocation("/projects");
                  }}
                >
                  Projects
                </Link>
              )}

              <Link to="/" className="mobile-link-item" onClick={() => {}}>
                Resume
              </Link>
            </div>
          </div>
        ) : (
          <div className="navbar-links">
            {location === "/" ? (
              <p className="navbar-link-item-active">Home</p>
            ) : (
              <Link
                to="/"
                className="navbar-link-item hvr-underline-from-center"
                onClick={() => {
                  setLocation("/");
                }}
              >
                Home
              </Link>
            )}

            {location === "/about" ? (
              <p className="navbar-link-item-active">About</p>
            ) : (
              <Link
                to="/about"
                className="navbar-link-item hvr-underline-from-center"
                onClick={() => {
                  setLocation("/about");
                }}
              >
                About
              </Link>
            )}

            {location === "/projects" ? (
              <p className="navbar-link-item-active">Projects</p>
            ) : (
              <Link
                to="/projects"
                className="navbar-link-item hvr-underline-from-center"
                onClick={() => {
                  setLocation("/projects");
                }}
              >
                Projects
              </Link>
            )}

            <a
              href={resume}
              target="_blank"
              rel="noreferrer"
              className="navbar-link-item"
            >
              Resume
            </a>
          </div>
        )}

        {/* <div className="navbar-bars" onClick={handleClick}></div> */}
      </div>
    </div>
  );
}

export default NavBar;
