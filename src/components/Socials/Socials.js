import { FiGithub, FiInstagram, FiLinkedin, FiMail } from "react-icons/fi";

import "./Socials.sass";

function Socials({ variant = "md", className = "" }) {
  const openInNewTab = (url) => {
    window.open(url, "_blank").focus();
  };

  const openEmail = (email) => {
    window.open(`mailto:${email}`).focus();
  };

  return (
    <div className={`socials socials-${variant}`}>
      <FiMail
        className={`item ${variant} ${className}`}
        onClick={() => openEmail("klees@uwaterloo.ca")}
      />
      <FiLinkedin
        className={`item ${variant} ${className}`}
        onClick={() => openInNewTab("https://www.linkedin.com/in/keatonlees/")}
      />
      <FiGithub
        className={`item ${variant} ${className}`}
        onClick={() => openInNewTab("https://github.com/keatonlees")}
      />
      <FiInstagram
        className={`item ${variant} ${className}`}
        onClick={() => openInNewTab("https://www.instagram.com/ctrlaltkeat/")}
      />
    </div>
  );
}

export default Socials;
