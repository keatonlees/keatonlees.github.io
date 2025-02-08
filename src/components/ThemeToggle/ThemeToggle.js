import { motion } from "motion/react";
import { FiMoon, FiSun } from "react-icons/fi";

import { useTheme } from "../../lib/ThemeContext";

import "./ThemeToggle.sass";

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isLight = theme === "light";

  return (
    <motion.div
      className="toggle"
      onClick={toggleTheme}
      initial={{ rotate: 0 }}
      animate={{ rotate: isLight ? 0 : 45 }}
      transition={{ duration: 0.1, ease: "linear" }}
    >
      {isLight ? <FiMoon /> : <FiSun />}
    </motion.div>
  );
}

export default ThemeToggle;
