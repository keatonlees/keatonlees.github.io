// ----- imports -----
import React from "react";

// ----- styles -----
import "../styles/Landing.css";

function Landing({ preTitle, title, subTitle }) {
  return (
    <div className="landing-container">
      <h1 className="pre-title">{preTitle}</h1>
      <h1 className="title">{title}</h1>
      <h1 className="sub-title">{subTitle}</h1>
    </div>
  );
}

export default Landing;
