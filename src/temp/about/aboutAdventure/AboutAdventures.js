// ----- imports -----
import React, { useState } from "react";

// ----- pages -----

// ----- components -----
import { VectorMap } from "@south-paw/react-vector-maps";

// ----- util -----
import worldMap from "../util/worldMap.json";
import useMousePosition from "../util/MousePosition";

// ----- styles -----
import "../styles/AboutAdventures.sass";

// ----- images -----
import placeholder from "../images/placeholder.png";

import canada_1 from "../images/adv_canada_1.jpg";
import australia_1 from "../images/adv_australia_1.jpg";
import france_1 from "../images/adv_france_1.JPG";
import malaysia_1 from "../images/adv_malaysia_1.JPG";
import taiwan_1 from "../images/adv_taiwan_1.JPG";
import thailand_1 from "../images/adv_thailand_1.JPG";
import uk_1 from "../images/adv_uk_1.jpg";
import us_1 from "../images/adv_us_1.JPG";

function AboutAdventures() {
  const mousePosition = useMousePosition();

  const highlighted = [
    "ca",
    "au",
    "fr",
    "hk",
    "my",
    "sg",
    "tw",
    "th",
    "gb",
    "us",
  ];
  const locations = [
    "Canada",
    "Australia",
    "France",
    "Hong Kong",
    "Malaysia",
    "Singapore",
    "Taiwan",
    "Thailand",
    "United Kingdom",
    "United States",
  ];
  const locationData = {
    Canada: {
      year: "Permanent Resident",
      description:
        "I was raised in British Columbia, but go to the University of Waterloo in Ontario. In my totally educated opinion, I think the west coast is better than the east coast.",
      image: canada_1,
      rating: "Lots of Maple Syrup / 10",
    },
    Australia: {
      year: "2018",
      description:
        "From exploring downtown Sydney, to swimming in the Great Barrier Reef, to eating crocodile, to driving through floods in Cairns, to petting kangaroos and koalas, Australia was a blast!",
      image: australia_1,
      rating: "9 Kangaroos / 10",
    },
    France: {
      year: "2016",
      description:
        "My most vivid memories of France were eating croissants for breakfast daily, playing chicken as we darted across 12 lanes to see the Arc de Triomphe, and painfully walking down nearly 700 stairs after visiting the Eiffel Tower.",
      image: france_1,
      rating: "8 Croissants / 10",
    },
    HongKong: {
      year: "year",
      description: "description",
      image: placeholder,
      rating: "",
    },
    Malaysia: {
      year: "2010",
      description:
        "I will always remember how shocked I was when one second it's beautifully hot out, the next its beautifully hot out but thunderstorming. Daily. Also super huge cockroaches. Big nope. Other than that, Malaysia is cool!",
      image: malaysia_1,
      rating: "7.5 Lightning Strikes / 10",
    },
    Singapore: {
      year: "year",
      description: "description",
      image: placeholder,
      rating: "8.5 / 10",
    },
    Taiwan: {
      year: "2019",
      description: "description",
      image: taiwan_1,
      rating: "8 / 10",
    },
    Thailand: {
      year: "2017",
      description:
        "To be honest, I didn't like Bangkok for it's dense, unclean feeling. However, the white sands on the islands of Koh Samui were stunning. McDonald's had some really fascinating options too...like fast food congee.",
      image: thailand_1,
      rating: "7 Lizards / 10",
    },
    UnitedKingdom: {
      year: "2016",
      description:
        "Turns out the London Eye isn't really an eye, London Bridge isn't falling down, and Big Ben is in fact pretty big.",
      image: uk_1,
      rating: "8 Cups of Tea / 10",
    },
    UnitedStates: {
      year: "Frequent Traveler",
      description:
        "Living so close to the border provides lots of opportunities to travel to fun places like Seattle, Long Beach, San Fran, New York, Florida and more!",
      image: us_1,
      rating: "Too many states / 50",
    },
  };

  const layerProps = {
    onMouseEnter: ({ target }) => handleMapEnter(target),
    onMouseLeave: ({ target }) => handleMapLeave(target),
  };
  const [currentHover, setCurrentHover] = useState("");
  const [hoverFrom, setHoverFrom] = useState("");

  const handleMapEnter = (target) => {
    const name = target.attributes.name.value;
    const id = target.attributes.id.value;

    if (highlighted.includes(id)) {
      setCurrentHover(name);
      setHoverFrom("map");
    }
  };

  const handleMapLeave = () => {
    setCurrentHover("");
    setHoverFrom("");
  };

  const handleLegendEnter = (target) => {
    setCurrentHover(target);
    setHoverFrom("legend");
  };

  const handleLegendLeave = () => {
    setCurrentHover("");
    setHoverFrom("");
  };

  const data = currentHover.replace(/\s/g, "");

  const Tooltip = () => (
    <div
      className="tooltip-container"
      style={{
        top: mousePosition.y,
        left: mousePosition.x,
        display: currentHover ? "block" : "none",
        transform:
          hoverFrom === "map" ? "translateY(-50%)" : "translateY(-100%)",
      }}
    >
      <h1 className="tooltip-title">{currentHover}</h1>

      {locationData[data] ? (
        <p className="tooltip-subtitle">{locationData[data].year}</p>
      ) : null}

      {locationData[data] ? (
        <p className="tooltip-description">{locationData[data].description}</p>
      ) : null}

      {locationData[data] ? (
        <p className="tooltip-rating">Rating: {locationData[data].rating}</p>
      ) : null}

      {locationData[data] ? (
        <div className="image-container">
          <img
            src={locationData[data].image}
            className="image"
            alt="location"
            loading="lazy"
          />
        </div>
      ) : null}
    </div>
  );

  return (
    <div className="adventures-container">
      <h1>My Adventures</h1>
      <div className="adventures-map">
        <Tooltip />
        <VectorMap
          {...worldMap}
          currentLayers={highlighted}
          layerProps={layerProps}
          className="vector-map"
        />
      </div>
      <div className="adventures-legend">
        {locations.map((item, i) => {
          return (
            <div
              className={
                item === currentHover ? "legend-active" : "legend-item"
              }
              key={i}
              onMouseEnter={() => handleLegendEnter(item)}
              onMouseLeave={() => handleLegendLeave()}
            >
              {item}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default AboutAdventures;
