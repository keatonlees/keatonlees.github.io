// ----- imports -----
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Mousewheel } from "swiper";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ReactTooltip from "react-tooltip";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

// ----- components -----
import BackButton from "../../components/BackButton";
import MegaText from "../../components/MegaText";
import ScrollDown from "../../components/ScrollDown";
import ScrollToTop from "../../components/ScrollToTop";

// ---- util -----
import { motionVariants } from "../../util/MotionVariants";
import { ProjectList } from "../../util/ProjectList";

// ----- styles -----
import "../../styles/Project.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/mousewheel";
import ProjectLinks from "../../components/ProjectLinks";
SwiperCore.use([Pagination, Mousewheel]);

function ProjectDK(props) {
  const [swiperControl, setSwiperControl] = useState({});
  const index = ProjectList.findIndex(
    (element) => element.name === "Donkey Kong"
  );
  // const index = 1;
  const [previewIndex, setPreviewIndex] = useState(index);
  const cubicTransition = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.96] };

  const [percentage, setPercentage] = useState(0);
  const numOfSlides = 6;
  const handleSlideChange = (index) => {
    setPercentage((index / numOfSlides) * 100);
  };

  const handlePreviewStart = (nav) => {
    let image = document.getElementById("previewImage");

    if (nav === "prev") {
      setPreviewIndex(index - 1);
      image.style.opacity = 1;
    } else if (nav === "next") {
      setPreviewIndex(index + 1);
      image.style.opacity = 1;
    }
  };
  const handlePreviewEnd = () => {
    let image = document.getElementById("previewImage");
    image.style.opacity = 0;
  };

  const customVariants = {
    hideBannerImage: {
      width: props.projectImageInitial.width,
      height: props.projectImageInitial.height,
    },
    showBannerImage: {
      width: props.projectImageFinal.width,
      height: props.projectImageFinal.height,
      transition: cubicTransition,
    },
    exitFade: motionVariants.exitFade,
  };

  return (
    <>
      <MegaText text="Donkey Kong" percentage={percentage} />
      <ScrollDown swiperControl={swiperControl} />
      <ScrollToTop swiperControl={swiperControl} />
      <BackButton />
      <ProjectLinks index={index} />
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
        <SwiperSlide className="banner-container">
          <motion.div
            className="project-banner-container-top"
            variants={motionVariants}
            initial={"hide"}
            animate={"showBannerText"}
            exit={"exitMoveUp"}
          >
            <div className="project-banner-title" style={{ textAlign: "left" }}>
              {ProjectList[index].name}
            </div>
            <div
              className="project-banner-number"
              style={{ textAlign: "right" }}
            >
              {ProjectList.length - ProjectList[index].id + 1 < 10
                ? `0${ProjectList.length - ProjectList[index].id + 1}`
                : ProjectList.length - ProjectList[index].id + 1}
            </div>
          </motion.div>
          <motion.img
            src={ProjectList[index].cover}
            alt="project_banner"
            className="project-banner-image"
            variants={customVariants}
            initial={"hideBannerImage"}
            animate={"showBannerImage"}
            exit={"exitFade"}
          />
          <motion.div
            className="project-banner-container-bottom"
            variants={motionVariants}
            initial={"hide"}
            animate={"showBannerText"}
            exit={"exitMoveDown"}
          >
            <div style={{ textAlign: "left" }}>
              <span className="accent-colour">
                <b>Role: </b>
              </span>
              {ProjectList[index].role}
            </div>
            <div style={{ textAlign: "center" }}>
              <span className="accent-colour">
                <b>Type: </b>
              </span>
              {ProjectList[index].type}
            </div>
            <div style={{ textAlign: "right" }}>
              <span className="accent-colour">
                <b>Timeframe: </b>
              </span>
              {ProjectList[index].timeframe}
            </div>
          </motion.div>
        </SwiperSlide>

        {/* <SwiperSlide className="center-slide">
          <motion.div
            className="project-grid-container two-col"
            variants={motionVariants}
            initial={"hideBelow"}
            whileInView={"showElementDelayed"}
            exit={"exitFade"}
            viewport={{ once: true }}
          >
            <div className="project-grid-text text-left">
              <h1 className="project-vertical-text">The What</h1>
              <div>
                <p className="project-paragraph">
                  Octo-Do is a web-based to-do list application developed as a
                  company project during my Summer 2021 co-op using ReactJS,
                  Node.js and MySQL. This flexible application allows a user to
                  allocate their tasks from their complete task list into a
                  daily task list with the ability to divide tasks up hourly.
                </p>
                <br />
                <p className="project-paragraph">
                  Once a user has signed up, they are met with the home screen
                  which has been visually divided in half. The right half
                  includes all the user's tasks in a list format and the ability
                  to add, edit and delete each task. On the left hand side is a
                  user's daily tasks, listed out hourly with the ability to
                  change the start and end hours depending on the user's
                  preferred length of day. The user can drag-and-drop tasks from
                  their complete list to populate their daily list corresponding
                  to their needs. When a user has completed the day, they can
                  reset their daily list and repeat the process the next day
                  with new tasks.
                </p>
              </div>
            </div>

            <div className="project-grid-image">
              <img
                src={ProjectList[index].images[0]}
                alt="project_image"
                className="project-image"
              />
            </div>
          </motion.div>
        </SwiperSlide>

        <SwiperSlide className="center-slide">
          <motion.div
            className="project-grid-container two-col-reverse"
            variants={motionVariants}
            initial={"hideBelow"}
            whileInView={"showElementDelayed"}
            exit={"exitFade"}
            viewport={{ once: true }}
          >
            <div className="project-grid-text text-right">
              <h1 className="project-vertical-text">The Why</h1>
              <div>
                <p className="project-paragraph">
                  There was a need for this specific type of to-do list
                  application. The ability to split up each type of task into a
                  daily schdule allows a user to allocate their time accordingly
                  while still having the flexibility to change tasks around if a
                  situation were to arise.
                </p>
                <br />
                <p className="project-paragraph">
                  Octo-Do should be able to be used for any circumstance
                  including use cases outside of work, including school and
                  other fields. The main goals were to be flexible for a user
                  including the dragging-and-dropping, editing and clearing
                  functions. This way, it is up to the users' discretion with
                  how they want to move, edit and organize their scheudled
                  tasks.
                </p>
              </div>
            </div>

            <div className="project-grid-image">
              <img
                src={ProjectList[index].images[1]}
                alt="project_image"
                className="project-image"
              />
            </div>
          </motion.div>
        </SwiperSlide>

        <SwiperSlide className="center-slide">
          <motion.div
            className="project-grid-container two-row"
            variants={motionVariants}
            initial={"hideBelow"}
            whileInView={"showElementDelayed"}
            exit={"exitFade"}
            viewport={{ once: true }}
          >
            <div className="project-grid-text text-right row-width">
              <h1 className="project-vertical-text">The How</h1>
              <div>
                <p className="project-paragraph">
                  When deciding which languages to develop Octo-Do with, I was
                  considering the complexity of the database and how I would
                  host such an application. The frontend is built in ReactJS for
                  it's modularity, .map() functionality and selection of
                  libraries, including the drag-and-drop library used,
                  react-beautiful-dnd.
                </p>
                <br />
                <p className="project-paragraph">
                  For the backend, I chose to use Node.js and Axios for it's
                  simplicity, which seemed to be a better fit than alternatives,
                  such as Flask, which had more problems arise when attempting
                  to deploy to Heroku. As for the database, although Heroku
                  native supports PostgreSQL, I chose to use the Heroku's
                  ClearDB add-on for MySQL as I found it was easier to
                  externally view tables when developing. Additionally, Heroku
                  was chosing as the hosting platform as it had the ability to
                  host the frontend, backend and database all in one location.
                  Lastly, I used Firebase for their developer-friendly
                  authentication for user accounts.
                </p>
                <br />
                <p className="project-paragraph">
                  When developing Octo-Do, the biggest problem I encountered was
                  the time taken to retrieve data from the database. Firstly,
                  since I was currently using a free tier of Heroku, it was
                  limited in terms of speed at which it can read and write.
                  Secondly, the first couple iterations of my code were
                  unoptimized in terms of refreshing data on every change.
                  Initially, on every change, the entire page would update which
                  would take a large amount of time to update, sometimes not
                  updating at all. I then refactored the code so that only the
                  component that had changed would be updated, reducing the time
                  taken to update by almost triple.
                </p>
              </div>
            </div>

            <div className="project-grid-image project-tool-logos-container">
              {ProjectList[index].toolLogos.map((data, i) => {
                return (
                  <img
                    src={data}
                    key={i}
                    alt="project_image"
                    className="project-tool-logos"
                    data-tip={ProjectList[index].toolList[i]}
                    data-for="project-logos"
                  />
                );
              })}
              <ReactTooltip
                className="tooltip"
                id="project-logos"
                effect="solid"
                place="bottom"
                delayHide={400}
              />
            </div>
          </motion.div>
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
            <div className="project-grid-text text-right">
              <h1 className="project-vertical-text">Reflection</h1>
              <div>
                <p className="project-paragraph">
                  Working through most of the minor errors and bugs of Octo-Do,
                  it eventually reached a finished and usable state. I created a
                  theme and drew a logo to match the concept and implemented it
                  into the signup and landing page. During the final testing
                  phases, I found very few bugs and looked at what future
                  features Octo-Do could benefit from.
                </p>
                <br />
                <p className="project-paragraph">
                  The first and most prevalent improvement for Octo-Do would be
                  to upgrade the hosting and database service to further
                  decrease the refresh time. Although I am not continously
                  developing Octo-Do, it would require payment to upgrade the
                  Heroku service and add-on plan in order to increase the read
                  and write limits.
                </p>
                <br />
                <p className="project-paragraph">
                  The second improvement would be to give much more
                  customization options to the user. Currently, a user cannot
                  change many of the elements which should be flexible. These
                  elements include what time their day starts and ends, the
                  accent colour, the default day and time when creating a task,
                  an automatic clearing of daily tasks, and various other
                  customization features.
                </p>
                <br />
                <p className="project-paragraph">
                  The last improvement would require a great deal of time, but
                  it would be to create a mobile version of Octo-Do. This would
                  be a massive benefit as the connectivity would allow any
                  employee to check their schedule from their phone; a well used
                  device. Currently, the mobile view of the web version is
                  difficult to use and challenging to read.
                </p>
              </div>
            </div>

            <div className="project-grid-image">
              <img
                src={ProjectList[index].overlay}
                alt="project_image"
                className="project-overlay"
              />
            </div>
          </motion.div>
        </SwiperSlide> */}

        <SwiperSlide className="center-slide">
          <div className="project-nav-container">
            <div className="project-prev-container">
              {index - 1 > -1 ? (
                <Link
                  to={"/projects" + ProjectList[index - 1].url}
                  className="project-nav-link"
                >
                  <motion.div
                    className="project-prev-text"
                    variants={motionVariants}
                    whileHover={"grow"}
                    onHoverStart={() => handlePreviewStart("prev")}
                    onHoverEnd={handlePreviewEnd}
                  >
                    <FontAwesomeIcon
                      icon={faChevronLeft}
                      className="project-nav-arrow arrow-left"
                    />
                    <div>
                      <p className="project-nav-pretitle">Previous Project</p>
                      <p className="project-nav-title">
                        {ProjectList[index - 1].name}
                      </p>
                    </div>
                  </motion.div>
                </Link>
              ) : null}
            </div>
            <div className="project-preview-container">
              <img
                src={ProjectList[previewIndex].cover}
                className="project-preview-image"
                id="previewImage"
                style={{
                  width: props.projectImageInitial.width,
                  height: props.projectImageInitial.height,
                }}
              />
            </div>
            <div className="project-next-container">
              {index - 1 < ProjectList.length ? (
                <Link
                  to={"/projects" + ProjectList[index + 1].url}
                  className="project-nav-link"
                >
                  <motion.div
                    className="project-next-text"
                    variants={motionVariants}
                    whileHover={"grow"}
                    onHoverStart={() => handlePreviewStart("next")}
                    onHoverEnd={handlePreviewEnd}
                  >
                    <div>
                      <p className="project-nav-pretitle">Next Project</p>
                      <p className="project-nav-title">
                        {ProjectList[index + 1].name}
                      </p>
                    </div>
                    <FontAwesomeIcon
                      icon={faChevronRight}
                      className="project-nav-arrow arrow-right"
                    />
                  </motion.div>
                </Link>
              ) : null}
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default ProjectDK;
