import { motion } from "motion/react";
import { FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";

import Text from "../Text/Text";

import "./ArrowLink.sass";

function ArrowLink({
  to,
  label,
  variant = "internal",
  className = "",
  ...props
}) {
  if (variant === "external") {
    return (
      <a
        href={to}
        className={`arrow-link button ${className}`}
        {...props}
        target="_blank"
        rel="noreferrer"
      >
        <Text variant="p" className="arrow-link-text">
          {label}
        </Text>
        <FiArrowRight className="arrow-link-icon" />
      </a>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, delay: 0.3 },
      }}
      viewport={{ once: true, amount: 0.6 }}
    >
      <Link to={to} className={`arrow-link button ${className}`} {...props}>
        <Text variant="p" className="arrow-link-text">
          {label}
        </Text>
        <FiArrowRight className="arrow-link-icon" />
      </Link>
    </motion.div>
  );
}

export default ArrowLink;
