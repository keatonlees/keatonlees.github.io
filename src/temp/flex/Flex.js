// ==================== LIBRARIES ====================
import { motion } from "framer-motion";

// ==================== UTIL ====================
// ==================== COMPONENTS ====================
// ==================== STYLES ====================
import "./Flex.sass";

function Flex({
  props,
  children,
  className,
  a = "flex-start",
  j = "left",
  d = "row",
}) {
  return (
    <motion.div
      {...props}
      className={`flex-layout ${className}`}
      style={{ alignItems: a, justifyContent: j, flexDirection: d }}
    >
      {children}
    </motion.div>
  );
}

export default Flex;
