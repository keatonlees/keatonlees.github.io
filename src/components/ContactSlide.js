// ----- imports -----
import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

// ----- pages -----

// ----- components -----

// ----- util -----

// ----- styles -----
import "../styles/ContactSlide.css";

function ContactSlide() {
  const openInNewTab = (url) => {
    window.open(url, "_blank").focus();
  };

  const openEmail = (email) => {
    window.open(`mailto:${email}`).focus();
  };

  return (
    <div
      className="contact-container"
      onClick={() => {
        openEmail("klees@uwaterloo.ca");
      }}
    >
      <div className="contact-item">
        <FontAwesomeIcon icon={faEnvelope} className="contactSlide-icon" />
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
        <FontAwesomeIcon icon={faGithub} className="contactSlide-icon" />
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
        <FontAwesomeIcon icon={faLinkedin} className="contactSlide-icon" />
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
          openInNewTab("https://www.instagram.com/kleez3dprints/");
        }}
      >
        <FontAwesomeIcon icon={faInstagram} className="contactSlide-icon" />
        <h1
          className="contact-text contact-text-animate"
          data-text="@kleez3dprints"
        >
          @kleez3dprints
        </h1>
      </div>
    </div>
  );
}

export default ContactSlide;
