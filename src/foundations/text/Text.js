// ==================== LIBRARIES ====================
import { motion } from "framer-motion";

// ==================== UTIL ====================
import { FS } from "../../constants/FontSizes.js";
import { FW } from "../../constants/FontWeights.js";

// ==================== STYLES ====================
import "./Text.sass";

function Text({
  props,
  children,
  className,
  fs = "md",
  fw = "normal",
  fc = "base",
}) {
  return (
    <motion.p
      {...props}
      style={{ fontSize: FS[fs], fontWeight: FW[fw] }}
      className={`${fc} ${className}`}
    >
      {children}
    </motion.p>
  );
}

export default Text;
