// ----- imports -----
import React from "react";
import { motion } from "framer-motion";

// ----- util -----
import { motionVariants } from "../util/MotionVariants";

// ----- styles -----
import "../styles/ImageCollage.css";

function ImageCollage(props) {
  var elements = document.getElementsByClassName("collage-image");
  var increase_amount = (Math.PI * 2) / elements.length;
  var x = 0,
    y = 0,
    angle = 0,
    element;

  var container_width = 35; // vw
  var container_height = 50; // vh
  var image_width = 8; // vw

  for (var i = 0; i < elements.length; i++) {
    element = elements[i];
    x =
      (container_width / 2 - image_width / 2) * Math.cos(angle) +
      (container_width / 2 - image_width / 2);
    y =
      (container_height / 2 - image_width) * Math.sin(angle) +
      (container_height / 2 - image_width);
    element.style.right = x + "vw";
    element.style.top = y + "vh";
    angle -= increase_amount;
  }

  return (
    <>
      <motion.div
        className="landing-container"
        variants={motionVariants}
        initial={"hide"}
        whileInView={"showElement"}
        exit={"exitFade"}
        className="collage-container"
        style={{
          width: container_width + "vw",
          height: container_height + "vh",
        }}
      >
        {props.images.map((data, i) => {
          return (
            <img
              src={data}
              key={i}
              id="collage-image"
              className="collage-image"
              style={{ width: image_width + "vw" }}
            />
          );
        })}
      </motion.div>
    </>
  );
}

export default ImageCollage;
