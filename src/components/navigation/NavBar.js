// ==================== LIBRARIES ====================
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import useDarkMode from "use-dark-mode";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

// ==================== UTIL ====================
import useWindowDimensions from "../../util/WindowDimensions.js";

// ==================== COMPONENTS ====================
import ModeToggle from "../modeToggle/ModeToggle";

// ==================== STYLES ====================
import "./NavBar.sass";

// ==================== FILES ====================
import logoDark from "../../images/logo_dark.png";
import logoLight from "../../images/logo_light.png";
import resume from "../../files/KeatonLeesResume.pdf";
import { Text } from "../../foundations/index.js";

function NavBar() {
  const darkMode = useDarkMode(true);
  const { width } = useWindowDimensions();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location, setLocation] = useState("");

  const path = useLocation();
  useEffect(() => {
    setLocation(path.pathname);
  }, [path]);

  const closeMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="navbar-container glass">
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

        {width <= 768 ? (
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
                <Text fs="xl" className="mobile-link-item-active">
                  Home
                </Text>
              ) : (
                <Link
                  to="/"
                  className="mobile-link-item mobile-hover"
                  onClick={() => {
                    closeMenu();
                    setLocation("/");
                  }}
                >
                  <Text fs="xl">Home</Text>
                </Link>
              )}

              {location === "/about" ? (
                <Text fs="xl" className="mobile-link-item-active">
                  About
                </Text>
              ) : (
                <Link
                  to="/about"
                  className="mobile-link-item mobile-hover"
                  onClick={() => {
                    closeMenu();
                    setLocation("/about");
                  }}
                >
                  <Text fs="xl">About</Text>
                </Link>
              )}

              {location === "/projects" ? (
                <Text fs="xl" className="mobile-link-item-active">
                  Projects
                </Text>
              ) : (
                <Link
                  to="/projects"
                  className="mobile-link-item mobile-hover"
                  onClick={() => {
                    closeMenu();
                    setLocation("/projects");
                  }}
                >
                  <Text fs="xl">Projects</Text>
                </Link>
              )}

              <Link
                to="/"
                className="mobile-link-item mobile-hover"
                onClick={() => {}}
              >
                <Text fs="xl">Resume</Text>
              </Link>
            </div>
          </div>
        ) : (
          <div className="navbar-links">
            {location === "/" ? (
              <Text className="navbar-link-item-active">Home</Text>
            ) : (
              <Link
                to="/"
                className="navbar-link-item hover-underline"
                onClick={() => {
                  setLocation("/");
                }}
              >
                <Text>Home</Text>
              </Link>
            )}

            {location === "/about" ? (
              <Text className="navbar-link-item-active">About</Text>
            ) : (
              <Link
                to="/about"
                className="navbar-link-item hover-underline"
                onClick={() => {
                  setLocation("/about");
                }}
              >
                <Text>About</Text>
              </Link>
            )}

            {location === "/projects" ? (
              <Text className="navbar-link-item-active">Projects</Text>
            ) : (
              <Link
                to="/projects"
                className="navbar-link-item hover-underline"
                onClick={() => {
                  setLocation("/projects");
                }}
              >
                <Text>Projects</Text>
              </Link>
            )}

            {/* {location === "/blogs" ? (
              <Text className="navbar-link-item-active">Blogs</Text>
            ) : (
              <Link
                to="/blogs"
                className="navbar-link-item hover-underline"
                onClick={() => {
                  setLocation("/blogs");
                }}
              >
                <Text>Blogs</Text>
              </Link>
            )} */}

            <a
              href={resume}
              target="_blank"
              rel="noreferrer"
              className="navbar-link-item hover-underline"
            >
              <Text>Resume</Text>
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

export default NavBar;
