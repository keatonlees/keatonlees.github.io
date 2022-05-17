// ----- imports -----
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Mousewheel } from "swiper";
import { motion } from "framer-motion";
import ReactTooltip from "react-tooltip";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLongArrowAltRight,
  faChevronUp,
} from "@fortawesome/free-solid-svg-icons";

// ----- components -----
import Landing from "../components/Landing";
import MegaText from "../components/MegaText";
import ScrollDown from "../components/ScrollDown";
import ImageCollage from "../components/ImageCollage";

// ----- util -----
import { ProjectList } from "../util/ProjectList";
import { motionVariants } from "../util/MotionVariants";

// ----- styles -----
import "../styles/Projects.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/mousewheel";
SwiperCore.use([Pagination, Mousewheel]);

function Projects(props) {
  const [swiperControl, setSwiperControl] = useState({});
  // const [currentProject, setCurrentProject] = useState(
  //   Math.floor(Math.random() * ProjectList.length)
  // );
  const [currentProject, setCurrentProject] = useState(0);
  const [percentage, setPercentage] = useState(0);
  const numOfSlides = 2;
  const handleSlideChange = (index) => {
    setPercentage((index / numOfSlides) * 100);
  };

  useEffect(() => {
    props.setProjectImageInitial({
      width: "300px",
      height: "400px",
    });
    return () => {};
  }, [props.setProjectImageInitial]);

  const projectImages = [];
  ProjectList.forEach((element) => {
    projectImages.push(element.overlay);
  });

  const handleProjectChange = (i) => {
    setCurrentProject(i);
  };

  const handleHoverStart = () => {
    const element = document.getElementById("see-project");
    element.style.opacity = 1;
  };
  const handleHoverEnd = () => {
    const element = document.getElementById("see-project");
    element.style.opacity = 0;
  };

  return (
    <>
      <MegaText text="Projects" percentage={percentage} />
      <ScrollDown swiperControl={swiperControl} />
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
          <div className="landing-grid-container">
            <div className="landing-grid-item-one">
              <Landing
                preTitle="My Projects"
                title="What I've Done"
                subTitle="Let me take you on a journey through designing, developing and testing various projects"
              />
            </div>
            <div className="landing-grid-item-two">
              <ImageCollage images={projectImages} />
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="projects-container">
          <div className="projects-section-top">
            <motion.h1
              className="projects-title"
              key={currentProject}
              variants={motionVariants}
              initial={"hideAbove"}
              animate={"showElement"}
              exit={"exitMoveUp"}
            >
              {ProjectList[currentProject].name}
            </motion.h1>
          </div>

          <div className="projects-section-middle-left">
            <motion.div
              className="projects-content-left"
              key={currentProject}
              variants={motionVariants}
              initial={"hideLeft"}
              whileInView={"showElement"}
              exit={"exitMoveLeft"}
            >
              <p className="project-content-timeframe">
                {ProjectList[currentProject].timeframe}
              </p>
              <p className="project-content-description">
                {ProjectList[currentProject].description}
              </p>
              <div className="project-content-tags-container">
                {ProjectList[currentProject].tags.map((data, i) => {
                  return (
                    <p key={i} className="project-content-tags">
                      {data}
                    </p>
                  );
                })}
              </div>
            </motion.div>
          </div>

          <div className="projects-section-middle-center">
            <Link to={"/projects" + ProjectList[currentProject].url}>
              <motion.img
                src={ProjectList[currentProject].cover}
                alt="projects_image"
                className="projects-item-image"
                key={currentProject}
                variants={motionVariants}
                initial={"hide"}
                animate={"showElement"}
                onHoverStart={handleHoverStart}
                onHoverEnd={handleHoverEnd}
                style={{
                  width: props.projectImageInitial.width,
                  height: props.projectImageInitial.height,
                }}
              />
            </Link>
          </div>

          <motion.div
            className="projects-section-middle-right"
            key={currentProject}
          >
            <motion.div
              className="projects-content-right"
              variants={motionVariants}
              initial={"hideRight"}
              whileInView={"showElement"}
              exit={"exitMoveRight"}
            >
              <h1 className="projects-large-counter">
                {ProjectList.length - ProjectList[currentProject].id + 1 < 10
                  ? `0${
                      ProjectList.length - ProjectList[currentProject].id + 1
                    }`
                  : ProjectList.length - ProjectList[currentProject].id + 1}
              </h1>
              <div className="projects-see-project" id="see-project">
                View project
                <FontAwesomeIcon
                  icon={faLongArrowAltRight}
                  className="projects-see-project-arrow"
                />
              </div>
            </motion.div>
            <motion.img
              src={ProjectList[currentProject].overlay}
              alt="projects_overlay"
              className="projects-item-overlay"
              variants={motionVariants}
              initial={"hideBelow"}
              whileInView={"showElement"}
              exit={"exitMoveDown"}
            />
          </motion.div>

          <motion.div
            className="projects-section-bottom"
            variants={motionVariants}
            initial={"hide"}
            whileInView={"showElement"}
            exit={"exitMoveDown"}
          >
            <div className="projects-selector-container">
              {ProjectList.map((data, i) => {
                return (
                  <div
                    key={i}
                    className="projects-selector-item"
                    onClick={() => handleProjectChange(i)}
                    data-tip={data.name}
                    data-for="project-selector"
                  >
                    <img
                      src={data.selector}
                      alt="projects_selector"
                      className="projects-selector-img"
                    />
                    {i === currentProject ? (
                      <div className="projects-selector-icon"></div>
                    ) : null}
                  </div>
                );
              })}
              <ReactTooltip
                className="tooltip"
                id="project-selector"
                effect="solid"
                delayHide={400}
              />
            </div>
          </motion.div>
        </SwiperSlide>

        <SwiperSlide className="projects-container-mobile">
          <motion.div
            className="projects-mobile-grid"
            variants={motionVariants}
            initial={"hide"}
            whileInView={"showElement"}
            exit={"exitFade"}
          >
            {ProjectList.map((data, i) => {
              return (
                <div className="projects-mobile-item" key={i}>
                  <Link to={`/projects${data.url}`}>
                    <img src={data.cover} className="projects-mobile-image" />
                  </Link>
                </div>
              );
            })}
          </motion.div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default Projects;
