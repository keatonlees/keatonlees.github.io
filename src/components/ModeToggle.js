// ----- imports -----
import React from "react";
import useDarkMode from "use-dark-mode";
import Toggle from "react-toggle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

// ----- styles -----
import "react-toggle/style.css";
import "../styles/ModeToggle.css";

function ModeToggle() {
  const darkMode = useDarkMode(true);

  return (
    <div className="toggle-container">
      <Toggle
        className="toggle-switch"
        checked={darkMode.value}
        onChange={darkMode.toggle}
        icons={{
          checked: <FontAwesomeIcon icon={faMoon} className="toggle-icon" />,
          unchecked: <FontAwesomeIcon icon={faSun} className="toggle-icon" />,
        }}
      />
    </div>
  );
}

export default ModeToggle;
