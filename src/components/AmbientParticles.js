// ----- imports -----
import React from "react";
import Particles from "react-tsparticles";

// ----- pages -----

// ----- components -----

// ----- styles -----

function AmbientParticles() {
  return (
    <Particles
      className="particles"
      options={{
        particles: {
          color: {
            value: "#353535",
          },
          links: {
            color: "#353535",
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
      }}
    />
  );
}

export default AmbientParticles;
