// ----- imports -----
import React from "react";
import Particles from "react-tsparticles";
import useDarkMode from "use-dark-mode";

function AmbientParticles() {
  const darkMode = useDarkMode(true);

  const particleOptions = {
    particles: {
      color: {
        value: darkMode.value ? "#2f2f2f" : "#d3d3d3",
      },
      links: {
        color: darkMode.value ? "#2f2f2f" : "#d3d3d3",
        distance: 100,
        enable: true,
        opacity: 0.5,
        width: 1,
      },
      collisions: {
        enable: true,
      },
      move: {
        direction: "none",
        enable: true,
        outMode: "bounce",
        random: false,
        speed: 0.25,
        straight: false,
      },
      number: {
        density: {
          enable: true,
          value_area: 800,
        },
        value: 80,
      },
      opacity: {
        value: 0.5,
      },
      shape: {
        type: "circle",
      },
      size: {
        random: true,
        value: 2,
      },
    },
  };

  return <Particles className="particles" options={particleOptions} />;
}

export default AmbientParticles;
