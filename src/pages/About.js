// ----- imports -----
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Mousewheel } from "swiper";
// import { motion } from "framer-motion";

// ----- components -----
import Landing from "../components/Landing";
import MegaText from "../components/MegaText";
import ScrollDown from "../components/ScrollDown";
import ScrollToTop from "../components/ScrollToTop";
import ImageTimeline from "../components/ImageTimeline";
import { motion } from "framer-motion";

// ----- styles -----
import "../styles/About.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/mousewheel";

// ----- images -----
import arduino from "../images/tool-arduino.png";
import cplusplus from "../images/tool-cplusplus.png";
import csharp from "../images/tool-csharp.png";
import css from "../images/tool-css.png";
import figma from "../images/tool-figma.png";
import firebase from "../images/tool-firebase.png";
import flask from "../images/tool-flask.png";
import git from "../images/tool-git.png";
import heroku from "../images/tool-heroku.png";
import html from "../images/tool-html.png";
import java from "../images/tool-java.png";
import js from "../images/tool-js.png";
import mysql from "../images/tool-mysql.png";
import nodejs from "../images/tool-nodejs.png";
import printing from "../images/tool-printing.png";
import python from "../images/tool-python.png";
import raspi from "../images/tool-raspi.png";
import react from "../images/tool-react.png";
import solidworks from "../images/tool-solidworks.png";
import unity from "../images/tool-unity.png";

import placeholder from "../images/placeholder.png";
import taiwan from "../images/taiwan.jpg";
import xbox from "../images/xbox.jpg";
import printer from "../images/printer.jpg";
import computer from "../images/computer.jpg";
import ironman from "../images/ironman.jpg";
import track from "../images/track.jpg";
import cooking from "../images/cooking.jpg";
import volleyball from "../images/volleyball.jpg";
import taekwondo from "../images/taekwondo.jpg";
import piano from "../images/piano.jpg";
import arduinoBoard from "../images/arduino.jpg";
import ContactSlide from "../components/ContactSlide";

SwiperCore.use([Pagination, Mousewheel]);

function About(props) {
  const [swiperControl, setSwiperControl] = useState({});
  const [percentage, setPercentage] = useState(0);
  const numOfSlides = 5;
  const handleSlideChange = (index) => {
    setPercentage((index / numOfSlides) * 100);
  };

  return (
    <>
      <MegaText text="AboutMe" percentage={percentage} />
      <ScrollDown swiperControl={swiperControl} />
      <ScrollToTop swiperControl={swiperControl} />
      <Swiper
        onInit={(e) => {
          setSwiperControl(e);
        }}
        direction={"vertical"}
        slidesPerView={1}
        speed={props.scrollSpeed}
        pagination={{ clickable: true }}
        mousewheel={true}
        // initialSlide={1}
        allowTouchMove={false}
        onSlideChange={(event) => handleSlideChange(event.activeIndex)}
      >
        <SwiperSlide className="center-slide">
          <motion.div className="landing-grid-container">
            <div className="landing-grid-item-one">
              <Landing
                preTitle="About Me"
                title="Who Am I?"
                subTitle="A technology enthusiast, passionate developer, gym aficionado, amateur chef, lively gamer, fascinated traveller and sushi lover"
              />
            </div>
            <div className="landing-grid-item-two">
              <ImageTimeline />
            </div>
          </motion.div>
        </SwiperSlide>

        <SwiperSlide className="center-slide">
          <div className="about-experience-container">
            <h1 className="about-heading">My Experience</h1>
            <div className="about-experience-row">
              <p className="about-experience-year">2022</p>
              <div className="about-experience-items">
                <div className="about-experience-item">
                  <p className="about-experience-title">
                    Software Engineer{" "}
                    <a
                      href="https://www.jamlabs.com/"
                      target="_blank"
                      rel="noreferrer"
                      className="about-experience-link accent-colour"
                    >
                      @ Jamlabs Data Science
                    </a>
                  </p>
                  <p className="about-experience-description">Description 1</p>
                  <p className="about-experience-description">Description 2</p>
                </div>
              </div>
            </div>

            <div className="about-experience-row">
              <p className="about-experience-year">2021</p>
              <div className="about-experience-items">
                <div className="about-experience-item">
                  <p className="about-experience-title">
                    Full-Stack Engineer{" "}
                    <a className="about-experience-link accent-colour">
                      @ Self-Employed Company
                    </a>
                  </p>
                  <p className="about-experience-description">
                    Developed Octo-Do, a flexible to-do list web application
                    that allows a user to create, edit and delete tasks using
                    React, Node.js and MySQL
                  </p>
                  <p className="about-experience-description">
                    Implemented user authentication using Firebase and deployed
                    completed application to Heroku
                  </p>
                </div>
              </div>
            </div>

            <div className="about-experience-row">
              <p className="about-experience-year">2020</p>
              <div className="about-experience-items">
                <div className="about-experience-item">
                  <p className="about-experience-title">
                    Systems and Controls Engineer{" "}
                    <a
                      href="https://www.ballard.com/"
                      target="_blank"
                      rel="noreferrer"
                      className="about-experience-link accent-colour"
                    >
                      @ Ballard Power Systems
                    </a>
                  </p>
                  <p className="about-experience-description">
                    Developed automated Python scripts to update and maintain
                    sensor database of over 300 fuel cell modules that will be
                    used by a production team of 20 members
                  </p>
                  <p className="about-experience-description">
                    Responsible for assembling and testing over 35 unique
                    components for use in prototype fuel cells
                  </p>
                </div>
                <div className="about-experience-item">
                  <p className="about-experience-title">
                    Systems Engineer{" "}
                    <a
                      href="https://www.ballard.com/"
                      target="_blank"
                      rel="noreferrer"
                      className="about-experience-link accent-colour"
                    >
                      @ Ballard Power Systems
                    </a>
                  </p>
                  <p className="about-experience-description">
                    Developed programs to interface with hydrogen fuel cells
                    using Arduino and Raspberry Pi microcontrollers to decrease
                    testing times by 25%
                  </p>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="center-slide">
          <div className="about-tools-container">
            <h1 className="about-heading">Technical Skills</h1>
            <div className="about-tools-row">
              <div className="about-tools-col tools1">
                <p>Development</p>
                <div className="about-tools-tools">
                  <img src={js} className="about-tools-img" />
                  <img src={react} className="about-tools-img" />
                  <img src={html} className="about-tools-img" />
                  <img src={css} className="about-tools-img" />
                  <img src={python} className="about-tools-img" />
                  <img src={nodejs} className="about-tools-img" />
                  <img src={flask} className="about-tools-img" />
                  <img src={java} className="about-tools-img" />{" "}
                  <img src={cplusplus} className="about-tools-img" />
                  <img src={mysql} className="about-tools-img" />
                  <img src={firebase} className="about-tools-img" />
                  <img src={heroku} className="about-tools-img" />
                </div>
              </div>
              <div className="about-tools-col tools2">
                <p>Tools</p>
                <div className="about-tools-tools">
                  <img src={unity} className="about-tools-img" />
                  <img src={csharp} className="about-tools-img" />
                  <img src={git} className="about-tools-img" />
                  <img src={figma} className="about-tools-img" />
                  <img src={printing} className="about-tools-img" />
                  <img src={raspi} className="about-tools-img" />
                  <img src={arduino} className="about-tools-img" />
                  <img src={solidworks} className="about-tools-img" />
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="center-slide">
          <div className="about-interests-container">
            <h1 className="about-heading">Hobbies and Interests</h1>
            <div className="about-interests-items">
              <div className="about-interests-item item1">
                <img src={track} className="about-interests-img" />
                <div className="about-interests-overlay about-light-colour">
                  <h1 className="about-interests-title">Track and Field</h1>
                  <p className="about-interests-description">
                    I competed in high school and club track for 9 years and
                    coached track for 3 years. My main events were 100m sprint,
                    200m sprint, long jump and 4x100m relay and during my senior
                    year of high school, I competed in decathlon.
                  </p>
                </div>
              </div>

              <div className="about-interests-item item2">
                <img src={cooking} className="about-interests-img" />
                <div className="about-interests-overlay about-light-colour">
                  <h1 className="about-interests-title">Cooking</h1>
                  <p className="about-interests-description">
                    After moving away from my parent's cooking, I learned to
                    make a variety of recipes.
                  </p>
                </div>
              </div>

              <div className="about-interests-item item3">
                <img src={computer} className="about-interests-img" />
                <div className="about-interests-overlay about-light-colour">
                  <h1 className="about-interests-title">Technology</h1>
                  <p className="about-interests-description">
                    I'm always trying to keep up with the lastest technology,
                    whether it be robotics, phones or video games. In the summer
                    of 2021, I also built my own desktop computer.
                  </p>
                </div>
              </div>

              <div className="about-interests-item item4">
                <img src={taiwan} className="about-interests-img" />
                <div className="about-interests-overlay about-light-colour">
                  <h1 className="about-interests-title">Traveling</h1>
                  <p className="about-interests-description">
                    I absolutely love traveling and have been all over the world
                    including Austrailia, Paris, and Taiwan (pictured here).
                  </p>
                </div>
              </div>

              <div className="about-interests-item item5">
                <img src={taekwondo} className="about-interests-img" />
                <div className="about-interests-overlay about-light-colour">
                  <h1 className="about-interests-title">Taekwondo</h1>
                  <p className="about-interests-description">
                    I competed in Taekwondo for 11 years, but stopped in 2018
                    due to starting University. In my time of doing Taekwondo, I
                    reached my 3rd Degree Black Belt.
                  </p>
                </div>
              </div>

              <div className="about-interests-item item6">
                <img src={ironman} className="about-interests-img" />
                <div className="about-interests-overlay about-light-colour">
                  <h1 className="about-interests-title">3D-Printing</h1>
                  <p className="about-interests-description">
                    In 2018, I got a 3D-printer and since then I have been
                    printing various character models, fidget toys, practical
                    tools, and more.
                  </p>
                </div>
              </div>

              <div className="about-interests-item item7">
                <img src={volleyball} className="about-interests-img" />
                <div className="about-interests-overlay about-light-colour">
                  <h1 className="about-interests-title">Volleyball</h1>
                  <p className="about-interests-description">
                    I played volleyball for 6 years, competing in both school
                    and club, indoor and beach, and coached for 2 years. My high
                    school team were back-to-back provinical champions along
                    with my club team also being provincial champions.
                  </p>
                </div>
              </div>

              <div className="about-interests-item item8">
                <img src={arduinoBoard} className="about-interests-img" />
                <div className="about-interests-overlay about-light-colour">
                  <h1 className="about-interests-title">Mini-Projects</h1>
                  <p className="about-interests-description">
                    When I am in the mood, I like messing around with random
                    electronics including Arduinos and Raspberry Pis.
                  </p>
                </div>
              </div>

              <div className="about-interests-item item9">
                <img src={xbox} className="about-interests-img" />
                <div className="about-interests-overlay about-light-colour">
                  <h1 className="about-interests-title">Gaming</h1>
                  <p className="about-interests-description">
                    In my spare time, you can find me playing Valorant, Apex
                    Legends and various other games.
                  </p>
                </div>
              </div>

              <div className="about-interests-item item10">
                <img src={piano} className="about-interests-img" />
                <div className="about-interests-overlay about-light-colour">
                  <h1 className="about-interests-title">Music</h1>
                  <p className="about-interests-description">
                    Growing up I played drums and percussion, and taught myself
                    how to piano and guitar
                  </p>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* <SwiperSlide className="center-slide">
          <p>Travel</p>
        </SwiperSlide> */}

        <SwiperSlide className="center-slide">
          <ContactSlide />
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default About;
