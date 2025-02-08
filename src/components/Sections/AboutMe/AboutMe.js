// @ts-ignore
import headshot from "../../../images/grad.JPG";
import Text from "../../ui/Text/Text";
import Title from "../../ui/Title/Title";

import "./AboutMe.sass";

function AboutMe() {
  return (
    <div className="about-me">
      {/* ===== IMAGE ===== */}
      <div className="image-container">
        <img src={headshot} alt="headshot" />
      </div>

      {/* ===== CONTENT ===== */}
      <div className="content-container">
        <Title variant="lg" className="title">
          About Me
        </Title>
        <Text className="content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          laoreet rutrum lobortis. Etiam lobortis auctor velit tempus posuere.
          Vestibulum sodales turpis rutrum velit rhoncus gravida. Aliquam mollis
          ligula eros, et facilisis metus semper sit amet. Proin pulvinar
          placerat magna. Nunc a massa tellus. Morbi a ultrices libero. Etiam
          egestas eleifend dignissim. Donec venenatis leo vitae efficitur
          accumsan.
        </Text>
        <Text className="content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          laoreet rutrum lobortis. Etiam lobortis auctor velit tempus posuere.
          Vestibulum sodales turpis rutrum velit rhoncus gravida. Aliquam mollis
          ligula eros, et facilisis metus semper sit amet. Proin pulvinar
          placerat magna. Nunc a massa tellus. Morbi a ultrices libero. Etiam
          egestas eleifend dignissim. Donec venenatis leo vitae efficitur
          accumsan.
        </Text>
      </div>
    </div>
  );
}

export default AboutMe;
