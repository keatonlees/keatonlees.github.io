import { FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";

import "./ArrowLink.sass";

function ArrowLink({ to, label, variant = "link", className = "", ...props }) {
  const type = variant === "link" ? "hover-underline" : "button";

  return (
    <Link to={to} className={`arrow-link ${type} ${className}`} {...props}>
      {label}
      <FiArrowRight className="arrow" />
    </Link>
  );
}

export default ArrowLink;
