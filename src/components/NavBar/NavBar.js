import { useState } from "react";

import { motion } from "motion/react";
import { Link, useLocation } from "react-router-dom";

// @ts-ignore
import resume from "../../files/KeatonLeesResume.pdf";
import logo_dark from "../../images/logo_dark.png";
import logo_light from "../../images/logo_light.png";
import { useTheme } from "../../lib/ThemeContext";
import ThemeToggle from "../ThemeToggle/ThemeToggle";

import "./NavBar.sass";

function NavBar() {
  const path = useLocation();
  const { theme } = useTheme();
  const isLight = theme === "light";

  const [isOpen, setIsOpen] = useState(false);

  const staggerParent = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 2.8,
      },
    },
  };
  const staggerChild = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { duration: 0.6 },
    },
  };

  return (
    <motion.div
      className="navbar glass shadow"
      initial={{ y: "-200%" }}
      animate={{ y: 0, transition: { duration: 0.6, delay: 1.8 } }}
    >
      <motion.div
        className="navbar-left-container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.6, delay: 2.5 } }}
      >
        <img
          src={isLight ? logo_dark : logo_light}
          alt="navbar-logo"
          className="navbar-logo"
        />
      </motion.div>

      <motion.div
        className="navbar-desktop"
        variants={staggerParent}
        initial="hidden"
        animate="show"
      >
        <motion.div variants={staggerChild}>
          <Link
            to="/"
            className={`link hover-underline ${path.pathname === "/" ? "active" : ""}`}
          >
            Home
          </Link>
        </motion.div>

        <motion.div variants={staggerChild}>/</motion.div>

        <motion.div variants={staggerChild}>
          <Link
            to="/about"
            className={`link hover-underline ${path.pathname === "/about" ? "active" : ""}`}
          >
            About
          </Link>
        </motion.div>

        <motion.div variants={staggerChild}>/</motion.div>

        <motion.div variants={staggerChild}>
          <Link
            to="/projects"
            className={`link hover-underline ${path.pathname === "/projects" ? "active" : ""}`}
          >
            Projects
          </Link>
        </motion.div>

        <motion.div variants={staggerChild}>/</motion.div>

        <motion.a
          href={resume}
          target="_blank"
          rel="noreferrer"
          className="link hover-underline"
          variants={staggerChild}
        >
          Resume
        </motion.a>
      </motion.div>

      <motion.div
        className="navbar-right-container"
        variants={staggerParent}
        initial="hidden"
        animate="show"
      >
        <motion.div variants={staggerChild}>
          <ThemeToggle />
        </motion.div>
        <motion.div className="navbar-mobile" variants={staggerChild}>
          <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
            <div
              className="hamburger-bar"
              style={{
                transform: isOpen ? "rotate(45deg) translate(1px, -3px)" : "",
              }}
            />
            <div
              className="hamburger-bar"
              style={{
                opacity: isOpen ? 0 : 1,
              }}
            />
            <div
              className="hamburger-bar"
              style={{
                transform: isOpen ? "rotate(-45deg) translate(1px, 3px)" : "",
              }}
            />
          </div>

          <motion.div
            className="mobile-menu glass shadow"
            initial={{ scaleY: 0, display: "none" }}
            animate={{
              scaleY: isOpen ? 1 : 0,
              display: isOpen ? "flex" : "none",
              transition: { delay: isOpen ? 0 : 0.2 },
            }}
          >
            <motion.div
              className="mobile-menu-content"
              initial={{ opacity: 0 }}
              animate={{
                opacity: isOpen ? 1 : 0,
                transition: { delay: isOpen ? 0.2 : 0 },
              }}
            >
              <Link
                to="/"
                className={`link ${path.pathname === "/" ? "active" : ""}`}
              >
                Home
              </Link>
              <Link
                to="/about"
                className={`link ${path.pathname === "/about" ? "active" : ""}`}
              >
                About
              </Link>
              <Link
                to="/projects"
                className={`link ${path.pathname === "/projects" ? "active" : ""}`}
              >
                Projects
              </Link>
              <a
                href={resume}
                target="_blank"
                rel="noreferrer"
                className="link"
              >
                Resume
              </a>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default NavBar;
