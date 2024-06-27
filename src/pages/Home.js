// ----- imports -----
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Mousewheel } from "swiper";
import { motion } from "framer-motion";

// ----- components -----
import Landing from "../components/Landing";
import MegaText from "../components/MegaText";
import ScrollDown from "../components/ScrollDown";

import headshot from "../images/headshot2-nobg.png";

import { ProjectList } from "../util/ProjectList";

import { Link } from "react-router-dom";

// ----- images -----
import cplusplus from "../images/tool-cplusplus.png";
import css from "../images/tool-css.png";
import firebase from "../images/tool-firebase.png";
import flask from "../images/tool-flask.png";
import heroku from "../images/tool-heroku.png";
import html from "../images/tool-html.png";
import java from "../images/tool-java.png";
import js from "../images/tool-js.png";
import mysql from "../images/tool-mysql.png";
import nodejs from "../images/tool-nodejs.png";
import python from "../images/tool-python.png";
import react from "../images/tool-react.png";

// ----- styles -----
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/mousewheel";
import ScrollToTop from "../components/ScrollToTop";
import { motionVariants } from "../util/MotionVariants";
import ContactSlide from "../components/ContactSlide";
SwiperCore.use([Pagination, Mousewheel]);

function Home(props) {
  const [swiperControl, setSwiperControl] = useState({});
  const [percentage, setPercentage] = useState(0);
  const numOfSlides = 4;
  const handleSlideChange = (index) => {
    setPercentage((index / numOfSlides) * 100);
  };

  return (
    <>
      <MegaText text="KeatonLees" percentage={percentage} />
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
        allowTouchMove={false}
        onSlideChange={(event) => handleSlideChange(event.activeIndex)}
      >
        <SwiperSlide className="center-slide">
          <div className="landing-grid-container">
            <div className="landing-grid-item-one">
              <Landing
                preTitle="Keaton Lees"
                page="home"
                words={[
                  "Software Developer",
                  "Tech Enthusiast",
                  "Gym Aficionado",
                  "Lively Gamer",
                  "Fascinated Traveller",
                  "Sushi Lover",
                ]}
                subTitle="A Systems Design Engineering Graduate from The University of Waterloo. Currently looking for full time employment! Previously at CanvassAI, PiinPoint, and Jamlabs Data Science."
                pageLinks={true}
              />
            </div>
            <div className="landing-grid-item-two">
              <motion.img
                variants={motionVariants}
                initial={"hide"}
                animate={"showElement"}
                exit={"exitFade"}
                src={headshot}
                className="landing-headshot"
              />
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="center-slide">
          <div className="about-tools-container">
            <h1 className="about-heading">About Me</h1>
            <div className="about-tools-row">
              <div className="about-tools-col tools1">
                <p>My Recent Experiences</p>
                <div className="about-experience-container-home">
                  <div className="about-experience-row">
                    <div className="about-experience-items">
                      <div className="about-experience-item">
                        <p className="about-experience-title">
                          Software Developer Intern @{" "}
                          <a
                            href="https://www.canvass.io/"
                            target="_blank"
                            rel="noreferrer"
                            className="about-experience-company about-experience-company-hover"
                          >
                            CanvassAI
                          </a>
                        </p>
                        <p className="about-experience-description">
                          Worked on adding numerous data analysis features and
                          optimizing analysis methods for Canvass' Industrial AI
                          platform
                        </p>
                        <p className="about-experience-description">
                          Spearheaded 2 frontend features to enhance data
                          readability for users by 40% using Typescript and
                          ChakraUI
                        </p>
                        <p className="about-experience-description">
                          Restructured end-to-end HTTPS requests that updated
                          Redux stores and states decreasing data fetch time by
                          30%
                        </p>
                        <p className="about-experience-description">
                          Ensured error-free code and optimal implementation
                          using Jest and React Testing Library with 100% testing
                          coverage
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="about-experience-row">
                    <div className="about-experience-items">
                      <div className="about-experience-item">
                        <p className="about-experience-title">
                          Full-Stack Developer Intern @{" "}
                          <a
                            href="https://www.piinpoint.com/"
                            target="_blank"
                            rel="noreferrer"
                            className="about-experience-company about-experience-company-hover"
                          >
                            PiinPoint
                          </a>
                        </p>
                        <p className="about-experience-description">
                          Launched Sitematch, an extensive feature that
                          streamlines property analysis and 3rd party realtor
                          communication
                        </p>
                        <p className="about-experience-description">
                          Contributed 10+ React components into the reusable
                          companywide library for PiinPoint's location
                          intelligence platform
                        </p>
                        <p className="about-experience-description">
                          Implemented eye-catching interfaces that increased
                          retention time by 25% for clients including Sobeys and
                          Tim Hortons
                        </p>
                        <p className="about-experience-description">
                          Refactored 90% of legacy code by migrating stores and
                          actions from Reflux to Redux, significantly reducing
                          tech debt
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="about-tools-col tools2">
                <p>Development Tools</p>
                <div className="about-tools-tools">
                  <img src={js} className="about-tools-img" alt="tool" />
                  <img src={react} className="about-tools-img" alt="tool" />
                  <img src={html} className="about-tools-img" alt="tool" />
                  <img src={css} className="about-tools-img" alt="tool" />
                  <img src={python} className="about-tools-img" alt="tool" />
                  <img src={nodejs} className="about-tools-img" alt="tool" />
                  <img src={flask} className="about-tools-img" alt="tool" />
                  <img src={java} className="about-tools-img" alt="tool" />
                  <img src={cplusplus} className="about-tools-img" alt="tool" />
                  <img src={mysql} className="about-tools-img" alt="tool" />
                  <img src={firebase} className="about-tools-img" alt="tool" />
                  <img src={heroku} className="about-tools-img" alt="tool" />
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="center-slide">
          <motion.div
            className="project-grid-container two-col"
            variants={motionVariants}
            initial={"hideBelow"}
            whileInView={"showElementDelayed"}
            exit={"exitFade"}
            viewport={{ once: true }}
          >
            <div className="project-grid-text text-left">
              <div>
                <h1 className="about-heading">Featured Project</h1>
                <p className="project-paragraph">
                  Octo-Do is a web-based to-do list application developed as a
                  company project during my Summer 2021 co-op using ReactJS,
                  Node.js and MySQL. This flexible application allows a user to
                  allocate their tasks from their complete task list into a
                  daily task list with the ability to divide tasks up hourly.
                </p>
                <br />
                <p className="project-paragraph">
                  There was a need for this specific type of to-do list
                  application. The ability to split up each type of task into a
                  daily schdule allows a user to allocate their time accordingly
                  while still having the flexibility to change tasks around if a
                  situation were to arise.
                </p>
                <br />
                <p className="project-paragraph">
                  When deciding which languages to develop Octo-Do with, I was
                  considering the complexity of the database and how I would
                  host such an application. The frontend is built in ReactJS for
                  it's modularity, .map() functionality and selection of
                  libraries, including the drag-and-drop library used,
                  react-beautiful-dnd. The backend was constructed in Node.js
                  and MySQL, all hosted on Heroku.
                </p>
                <br />
                <Link
                  to="/projects/Octodo"
                  className="page-link-item hvr-underline-from-left"
                >
                  Check out Octo-Do
                </Link>
              </div>
            </div>
            <div className="project-grid-image">
              <img
                src={ProjectList[0].images[0]}
                alt="project_image"
                className="project-image"
              />
            </div>
          </motion.div>
        </SwiperSlide>

        <SwiperSlide className="center-slide">
          <ContactSlide />
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default Home;
