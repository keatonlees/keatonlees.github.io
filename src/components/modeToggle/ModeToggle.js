// ==================== LIBRARIES ====================
import useDarkMode from "use-dark-mode";
import { BsMoonStarsFill, BsSunFill } from "react-icons/bs";

// ==================== UTIL ====================
import { FS } from "../../foundations/constants/FontSizes";

// ==================== STYLES ====================
import "./ModeToggle.sass";

function ModeToggle() {
  const darkMode = useDarkMode(true);

  return (
    <div className="toggle-container">
      <p onClick={darkMode.toggle} style={{ fontSize: FS["md"] }}>
        {darkMode.value ? <BsSunFill /> : <BsMoonStarsFill />}
      </p>
    </div>
  );
}

export default ModeToggle;
