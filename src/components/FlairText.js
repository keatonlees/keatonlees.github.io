// ----- imports -----
import React from "react";

// ----- pages -----

// ----- components -----

// ----- util -----

// ----- styles -----
import "../App.css";

function FlairText(props) {
  return (
    <p
      className="flairtext"
      style={{
        fontSize: props.size,
        left: props.left,
        right: props.right,
        top: props.top,
        bottom: props.bottom,
      }}
    >
      {props.text}
    </p>
  );
}

export default FlairText;
