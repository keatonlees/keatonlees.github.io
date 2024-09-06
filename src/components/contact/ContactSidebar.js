// ==================== LIBRARIES ====================
import { FaEnvelope } from "react-icons/fa";
import { BsLinkedin, BsGithub } from "react-icons/bs";

// ==================== STYLES ====================
import "./ContactSidebar.sass";

function ContactSidebar() {
  const openInNewTab = (url) => {
    window.open(url, "_blank").focus();
  };

  const openEmail = (email) => {
    window.open(`mailto:${email}`).focus();
  };

  return (
    <div className="contact-container">
      <div className="contact-items">
        <FaEnvelope
          className="contact-icon"
          onClick={() => {
            openEmail("klees@uwaterloo.ca");
          }}
        />
        <BsGithub
          className="contact-icon"
          onClick={() => {
            openInNewTab("https://github.com/keatonlees");
          }}
        />
        <BsLinkedin
          className="contact-icon"
          onClick={() => {
            openInNewTab("https://www.linkedin.com/in/keatonlees/");
          }}
        />
      </div>
    </div>
  );
}

export default ContactSidebar;
