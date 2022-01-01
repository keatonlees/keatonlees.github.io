// ----- imports -----
import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

// ----- styles -----
import "../styles/Contact.css";

function Contact() {
  const openInNewTab = (url) => {
    window.open(url, "_blank").focus();
  };

  const openEmail = (email) => {
    window.open(`mailto:${email}`).focus();
  };

  return (
    <div className="contact-container">
      <div className="contact-left">
        <FontAwesomeIcon
          icon={faEnvelope}
          className="contact-icon"
          onClick={() => {
            openEmail("klees@uwaterloo.ca");
          }}
        />
        <FontAwesomeIcon
          icon={faGithub}
          className="contact-icon"
          onClick={() => {
            openInNewTab("https://github.com/keatonlees");
          }}
        />
        <FontAwesomeIcon
          icon={faLinkedin}
          className="contact-icon"
          onClick={() => {
            openInNewTab("https://www.linkedin.com/in/keatonlees/");
          }}
        />
        <FontAwesomeIcon
          icon={faInstagram}
          className="contact-icon"
          onClick={() => {
            openInNewTab("https://www.instagram.com/kleez3dprints/");
          }}
        />
        <div className="contact-line"></div>
      </div>
      <div className="contact-right">
        <p
          className="contact-email"
          onClick={() => {
            openEmail("klees@uwaterloo.ca");
          }}
        >
          klees@uwaterloo.ca
        </p>
        <div className="contact-line"></div>
      </div>
    </div>
  );
}

export default Contact;
