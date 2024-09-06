// ==================== LIBRARIES ====================
import { FaEnvelope } from "react-icons/fa";
import { BsLinkedin, BsGithub } from "react-icons/bs";

// ==================== STYLES ====================
import "./ContactSlide.sass";

function ContactSlide() {
  const openInNewTab = (url) => {
    window.open(url, "_blank").focus();
  };

  const openEmail = (email) => {
    window.open(`mailto:${email}`).focus();
  };

  return (
    <div className="contact-container">
      <div
        className="contact-item"
        onClick={() => {
          openEmail("klees@uwaterloo.ca");
        }}
      >
        <FaEnvelope className="contactSlide-icon" />
        <h1
          className="contact-text contact-text-animate"
          data-text="klees@uwaterloo.ca"
        >
          klees@uwaterloo.ca
        </h1>
      </div>
      <div
        className="contact-item"
        onClick={() => {
          openInNewTab("https://github.com/keatonlees");
        }}
      >
        <BsGithub className="contactSlide-icon" />
        <h1
          className="contact-text contact-text-animate"
          data-text="/keatonlees"
        >
          /keatonlees
        </h1>
      </div>
      <div
        className="contact-item"
        onClick={() => {
          openInNewTab("https://www.linkedin.com/in/keatonlees/");
        }}
      >
        <BsLinkedin className="contactSlide-icon" />
        <h1
          className="contact-text contact-text-animate"
          data-text="/keatonlees"
        >
          /keatonlees
        </h1>
      </div>

      <p className="contact-footer">© 2024 Keaton Lees | Developed with 💖</p>
    </div>
  );
}

export default ContactSlide;
