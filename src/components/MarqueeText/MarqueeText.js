import Marquee from "react-fast-marquee";

import "./MarqueeText.sass";

function MarqueeText({ text, width = 200, coords, angle = 0, className = "" }) {
  return (
    <Marquee
      className={`marquee ${className}`}
      autoFill
      speed={40}
      style={{
        width: width,
        transform: `rotate(${angle}deg)`,
        ...coords,
      }}
    >
      {text}
    </Marquee>
  );
}

export default MarqueeText;
