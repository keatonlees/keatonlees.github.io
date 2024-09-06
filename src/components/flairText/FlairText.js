// ----- imports -----
import React from "react";

// ----- components -----
import { TbArrowWaveLeftDown } from "react-icons/tb";

// ----- images -----
import arrow from "../images/arrow-loop.svg";

// ----- styles -----
import "../styles/FlairText.sass";

function FlairText(props) {
  let flairText = <div></div>;

  if (props.flair === "home-cv") {
    flairText = (
      <div className={`flairText ${props.flair}`}>
        <p>My CV!</p>
      </div>
    );
  } else if (props.flair === "home-scroll" && props.index === 0) {
    flairText = (
      <div className={`flairText ${props.flair}`}>
        <p>
          Scroll <br /> down!
        </p>
      </div>
    );
  } else if (props.flair === "home-name") {
    flairText = (
      <div className={`flairText ${props.flair}`}>
        <p>Hello there!</p>
      </div>
    );
  } else if (props.flair === "about-landing") {
    flairText = (
      <div className={`flairText ${props.flair}`}>
        <p>That's Me!</p>
        <TbArrowWaveLeftDown className="arrow about-landing-arrow" />
      </div>
    );
  } else if (props.flair === "notfound-error") {
    flairText = (
      <div className={`flairText ${props.flair}`}>
        <p>ERROR!</p>
      </div>
    );
  } else if (props.flair === "notfound-uhoh") {
    flairText = (
      <div className={`flairText ${props.flair}`}>
        <p>UH OH</p>
      </div>
    );
  } else if (props.flair === "notfound-notgood") {
    flairText = (
      <div className={`flairText ${props.flair}`}>
        <p>NOT GOOD</p>
      </div>
    );
  }

  return <>{flairText}</>;
}

export default FlairText;
