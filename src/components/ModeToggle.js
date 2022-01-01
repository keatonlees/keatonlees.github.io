// ----- imports -----
import React from "react";
import useDarkMode from "use-dark-mode";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

// ----- styles -----
import "../styles/ModeToggle.css";

function ModeToggle() {
  const darkMode = useDarkMode(false);

  return (
    <div className="toggle-container" onClick={darkMode.toggle}>
      {darkMode.value ? (
        <FontAwesomeIcon icon={faSun} />
      ) : (
        <FontAwesomeIcon icon={faMoon} />
      )}
    </div>
  );
}

export default ModeToggle;
