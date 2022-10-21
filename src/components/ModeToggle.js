// ----- imports -----
import React from "react";
import useDarkMode from "use-dark-mode";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

// ----- styles -----
import "../styles/ModeToggle.css";

function ModeToggle() {
  const darkMode = useDarkMode(true);

  return (
    <div className="toggle-container">
      <p onClick={darkMode.toggle}>
        {darkMode.value ? (
          <FontAwesomeIcon icon={faSun} className="toggle-icon" />
        ) : (
          <FontAwesomeIcon icon={faMoon} className="toggle-icon" />
        )}
      </p>
    </div>
  );
}

export default ModeToggle;
