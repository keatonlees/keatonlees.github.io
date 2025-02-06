// ==================== LIBRARIES ====================
import { Link } from "react-router-dom/cjs/react-router-dom";

// ==================== UTIL ====================
import { FW } from "../../constants/FontWeights";

// ==================== COMPONENTS ====================
import Text from "../../temp/text/Text";

// ==================== STYLES ====================
import "../../App.sass";
import "./Button.sass";

function Button({
  props,
  children,
  className,
  variant = "solid",
  extLink = null,
  navLink = null,
  onClick = null,
  fs = "md",
  fw = "normal",
  fc = "base",
}) {
  if (navLink) {
    return (
      <Link to={navLink} className={`link btn btn-solid`} {...props}>
        <Text className="btn-solid-text">{children}</Text>
      </Link>
    );
  }

  if (extLink) {
    return (
      <a
        href={extLink}
        style={{ fontWeight: FW["medium"] }}
        className="link extLink"
        target="_blank"
        rel="noreferrer"
      >
        {children}
      </a>
    );
  }

  switch (variant) {
    case "solid":
      return (
        <div onClick={onClick} className="btn btn-solid">
          <Text className="btn-solid-text">{children}</Text>
        </div>
      );

    case "outline":
      return (
        <div onClick={onClick} className="btn btn-outline">
          <Text className="btn-outline-text">Outline</Text>
        </div>
      );

    case "ghost":
      return (
        <div onClick={onClick} className="btn btn-ghost">
          <Text className="btn-ghost-text">Ghost</Text>
        </div>
      );

    default:
      return null;
  }
}

export default Button;
