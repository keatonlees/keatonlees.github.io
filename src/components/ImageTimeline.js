// ----- imports -----
import React from "react";
import { useEffect, useState } from "react";

// ----- pages -----

// ----- components -----

// ----- util -----

// ----- styles -----

function ImageTimeline() {
  const imageArray = ["a", "b", "c", "d", "e", "f", "g", "h"];

  const state = {
    activeImageIndex: 0,
    timeInterval: 2000,
  };

  useEffect(() => {
    setInterval(() => {
      if (imageArray[state.activeImageIndex]) {
        state.activeImageIndex = state.activeImageIndex + 1;
        state.timeInterval = state.timeInterval / 2;
        console.log(state.activeImageIndex);
      }
    }, state.timeInterval);
  }, []);

  return <p>{/* {imageArray[state.activeImageIndex]} */}</p>;
}

export default ImageTimeline;
