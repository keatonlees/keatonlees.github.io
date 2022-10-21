// ----- imports -----
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Mousewheel, Navigation } from "swiper";
import { motion } from "framer-motion";
// import ReactTooltip from "react-tooltip";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLongArrowAltRight,
  // faChevronUp,
} from "@fortawesome/free-solid-svg-icons";
import MouseTooltip from "react-sticky-mouse-tooltip";

// ----- components -----
import Landing from "../components/Landing";
import MegaText from "../components/MegaText";
import ScrollDown from "../components/ScrollDown";
// import ImageCollage from "../components/ImageCollage";
import ContactSlide from "../components/ContactSlide";

// ----- util -----
import { ProjectList } from "../util/ProjectList";
import { motionVariants } from "../util/MotionVariants";

// ----- styles -----
import "../styles/Projects.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/mousewheel";
import "swiper/css/navigation";
SwiperCore.use([Pagination, Mousewheel, Navigation]);

function Projects(props) {
  const [swiperControl, setSwiperControl] = useState({});
  // const [currentProject, setCurrentProject] = useState(
  //   Math.floor(Math.random() * ProjectList.length)
  // );
  const [currentProject, setCurrentProject] = useState(0);
  const [percentage, setPercentage] = useState(0);
  const numOfSlides = 3;
  const handleSlideChange = (index) => {
    setPercentage((index / numOfSlides) * 100);
  };
  const [tooltipVisible, setTooltipVisible] = useState(false);

  useEffect(() => {
    props.setProjectImageInitial({
      width: "300px",
      height: "400px",
    });
    return () => {};
  }, [props, props.setProjectImageInitial]);

  const projectImages = [];
  ProjectList.forEach((element) => {
    projectImages.push(element.overlay);
  });

  const handleProjectChange = (i) => {
    setCurrentProject(i);
  };

  return (
    <>
      <MegaText text="Projects" percentage={percentage} />
      <MouseTooltip
        visible={tooltipVisible}
        offsetX={15}
        offsetY={10}
        className="project-tooltip-container"
      >
        <div className="project-tooltip">
          View project
          <FontAwesomeIcon
            icon={faLongArrowAltRight}
            className="projects-tooltip-arrow"
          />
        </div>
      </MouseTooltip>
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
                page="projects"
                words={["done", "created", "developed", "made", "coded"]}
                subTitle="Let me take you on a journey through designing, developing and testing various projects"
              />
            </div>
            <div className="landing-grid-item-two">
              {/* <ImageCollage images={projectImages} /> */}
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="projects-container">
          <div className="projects-section-top"></div>
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
            <Link
              to={"/projects" + ProjectList[currentProject].url}
              onMouseEnter={() => {
                setTooltipVisible(true);
              }}
              onMouseLeave={() => {
                setTooltipVisible(false);
              }}
            >
              <motion.img
                src={ProjectList[currentProject].cover}
                alt="projects_image"
                className="projects-item-image"
                key={currentProject}
                variants={motionVariants}
                initial={"hide"}
                animate={"showElement"}
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
            <Swiper
              spaceBetween={5}
              slidesPerView={4}
              centeredSlides={true}
              style={{ height: "50%", margin: "0px 30%" }}
              className="project-selector-swiper"
              onSlideChange={(event) => handleProjectChange(event.activeIndex)}
            >
              {ProjectList.map((data, i) => {
                return (
                  <SwiperSlide
                    key={i}
                    style={{ margin: "0px" }}
                    className="project-selector-swiperslide"
                  >
                    <div className="project-selector-img-container">
                      <img
                        src={data.selector}
                        alt="projects_selector"
                        className="projects-selector-img"
                      />
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </motion.div>
        </SwiperSlide>

        <SwiperSlide className="center-slide">
          <ContactSlide />
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
                    <img
                      src={data.cover}
                      className="projects-mobile-image"
                      alt="mobile_img"
                    />
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
