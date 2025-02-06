// ==================== LIBRARIES ====================
// import useDarkMode from "use-dark-mode";
import { BsMoonStarsFill, BsSunFill } from "react-icons/bs";

// ==================== UTIL ====================
import { FS } from "../../constants/FontSizes";

// ==================== STYLES ====================
import "./ModeToggle.sass";

function ModeToggle() {
  const darkMode = true;

  return (
    <div className="toggle-container">
      {/* <p onClick={darkMode.toggle} style={{ fontSize: FS["md"] }}> */}
      {darkMode ? <BsSunFill /> : <BsMoonStarsFill />}
      {/* </p> */}
    </div>
  );
}

export default ModeToggle;
