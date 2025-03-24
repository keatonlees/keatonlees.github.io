import { motion } from "motion/react";
import { FiArrowDown } from "react-icons/fi";

import "./ScrollDown.sass";

function ScrollDown() {
  const handleClick = () => {
    console.log("clicked");
    window.scrollBy({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <motion.div
      className="scroll-down"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 4.4, duration: 0.6 } }}
      onClick={handleClick}
    >
      <FiArrowDown />
    </motion.div>
  );
}

export default ScrollDown;
