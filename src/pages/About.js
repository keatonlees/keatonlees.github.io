// // ==================== COMPONENTS ====================
// import { PageLayout } from "../foundations";
// import AboutLanding from "../components/about/aboutLanding/AboutLanding";

// // ==================== STYLES ====================
// import "../App.sass";
// import ContactSlide from "../components/contact/ContactSlide";
// import AboutPassions from "../components/about/aboutPassions/AboutPassions";
// import { useState } from "react";
// import AboutIntro from "../components/about/aboutIntro/AboutIntro";
// import AboutExperiences from "../components/about/aboutExperience/AboutExperiences";
// import AboutSkills from "../components/about/aboutSkills/AboutSkills";

// function About() {
//   const [sI, setSI] = useState(0);

//   const bullets = [
//     "Landing",
//     "Intro",
//     "Experiences",
//     "Skills",
//     // "Passions",
//     "Contact",
//   ];
//   const slides = [
//     <AboutLanding />,
//     <AboutIntro />,
//     <AboutExperiences />,
//     <AboutSkills />,
//     // <AboutPassions slideIndex={sI} />,
//     <ContactSlide />,
//   ];

//   return <PageLayout bullets={bullets} slides={slides} setSI={setSI} />;
// }

// export default About;

// // // ----- imports -----
// // import React, { useState } from "react";
// // import { Swiper, SwiperSlide } from "swiper/react";
// // import SwiperCore, { Pagination, Mousewheel } from "swiper";
// // // import { motion } from "framer-motion";

// // // import { motion } from "framer-motion";
// // // import {
// // //   Accordion,
// // //   AccordionItem,
// // //   AccordionItemButton,
// // //   AccordionItemHeading,
// // //   AccordionItemPanel,
// // // } from "react-accessible-accordion";

// // // ----- components -----
// // import ColourWipe from "../components/ColourWipe";
// // import NavBar from "../components/NavBar";
// // import ContactSidebar from "../components/ContactSidebar";
// // import ScrollDown from "../components/ScrollDown";
// // import ScrollTop from "../components/ScrollTop";
// // // import ContactSlide from "../components/ContactSlide";
// // // import FlairText from "../components/FlairText";

// // // import AboutLanding from "../components/AboutLanding";
// // // import AboutIntro from "../components/AboutIntro";
// // // import AboutExperiences from "../components/AboutExperiences";
// // // import AboutSkills from "../components/AboutSkills";
// // // import AboutAdventures from "../components/AboutAdventures";

// // // ----- util -----
// // import { scrollSpeed } from "../util/Constants.js";
// // import useWindowDimensions from "../util/WindowDimensions.js";
// // // import { ExperienceList } from "../util/ExperienceList";

// // // ----- styles -----
// // import "swiper/css";
// // import "swiper/css/pagination";
// // import "swiper/css/mousewheel";

// // // ----- images -----
// // // import arduino from "../images/tool-arduino.png";
// // // import cplusplus from "../images/tool-cplusplus.png";
// // // import csharp from "../images/tool-csharp.png";
// // // import css from "../images/tool-css.png";
// // // import figma from "../images/tool-figma.png";
// // // import firebase from "../images/tool-firebase.png";
// // // import flask from "../images/tool-flask.png";
// // // import git from "../images/tool-git.png";
// // // import heroku from "../images/tool-heroku.png";
// // // import html from "../images/tool-html.png";
// // // import java from "../images/tool-java.png";
// // // import js from "../images/tool-js.png";
// // // import mongodb from "../images/tool-mongodb.png";
// // // import mysql from "../images/tool-mysql.png";
// // // import nodejs from "../images/tool-nodejs.png";
// // // import printing from "../images/tool-printing.png";
// // // import python from "../images/tool-python.png";
// // // import raspi from "../images/tool-raspi.png";
// // // import react from "../images/tool-react.png";
// // // import redux from "../images/tool-redux.png";
// // // import solidworks from "../images/tool-solidworks.png";
// // // import unity from "../images/tool-unity.png";

// // // import placeholder from "../images/placeholder.png";
// // // import taiwan from "../images/taiwan.jpg";
// // // import xbox from "../images/xbox.jpg";
// // // import printer from "../images/printer.jpg";
// // // import computer from "../images/computer.jpg";
// // // import ironman from "../images/ironman.jpg";
// // // import track from "../images/track.jpg";
// // // import cooking from "../images/cooking.jpg";
// // // import volleyball from "../images/volleyball.jpg";
// // // import taekwondo from "../images/taekwondo.jpg";
// // // import piano from "../images/piano.jpg";
// // // import arduinoBoard from "../images/arduino.jpg";
// // // import ContactSlide from "../components/ContactSlide";

// // SwiperCore.use([Pagination, Mousewheel]);

// // function About(props) {
// //   const { width } = useWindowDimensions();

// //   const [swiper, setSwiper] = useState({});
// //   const [slideIndex, setSlideIndex] = useState(0);

// //   const bullets =
// //     width > 768
// //       ? [
// //           "Landing",
// //           "Intro",
// //           "Experiences",
// //           "Skills",
// //           "Passions",
// //           // "Adventures",
// //           "Contact",
// //         ]
// //       : ["Landing", "Intro", "Experiences", "Skills", "Passions", "Contact"];

// //   const customBullet = (index, className) => {
// //     return (
// //       '<span class="customBullet ' +
// //       className +
// //       '"><p>' +
// //       bullets[index] +
// //       "</p></span>"
// //     );
// //   };

// //   return (
// //     <>
// //       {/* <ColourWipe />
// //       <NavBar />
// //       <ContactSidebar />
// //       <ScrollDown swiper={swiper} index={slideIndex} />
// //       <ScrollTop swiper={swiper} index={slideIndex} /> */}
// //       <Swiper
// //         direction={"vertical"}
// //         slidesPerView={1}
// //         speed={scrollSpeed}
// //         pagination={{
// //           clickable: true,
// //           renderBullet: (index, className) => {
// //             return customBullet(index, className);
// //           },
// //         }}
// //         mousewheel={true}
// //         allowTouchMove={false}
// //         onInit={(e) => setSwiper(e)}
// //         onSlideChange={(e) => setSlideIndex(e.activeIndex)}
// //       >
// //         <SwiperSlide className="center-slide">
// //           {/* <AboutLanding /> */}
// //         </SwiperSlide>

// //         <SwiperSlide className="center-slide">
// //           {/* <AboutIntro /> */}
// //         </SwiperSlide>

// //         <SwiperSlide className="center-slide">
// //           {/* <AboutExperiences /> */}
// //         </SwiperSlide>

// //         <SwiperSlide className="center-slide">
// //           {/* <AboutSkills /> */}
// //         </SwiperSlide>

// //         <SwiperSlide className="center-slide">
// //           <h1>My passions</h1>
// //           {/* <div className="about-interests-container">
// //             <h1 className="about-heading">Hobbies and Interests</h1>
// //             <div className="about-interests-items">
// //               <div className="about-interests-item item1">
// //                 <img
// //                   src={track}
// //                   className="about-interests-img"
// //                   alt="interest"
// //                 />
// //                 <div className="about-interests-overlay about-light-colour">
// //                   <h1 className="about-interests-title">Track and Field</h1>
// //                   <p className="about-interests-description">
// //                     I competed in high school and club track for 9 years and
// //                     coached track for 3 years. My main events were 100m sprint,
// //                     200m sprint, long jump and 4x100m relay and during my senior
// //                     year of high school, I competed in decathlon.
// //                   </p>
// //                 </div>
// //               </div>

// //               <div className="about-interests-item item2">
// //                 <img
// //                   src={cooking}
// //                   className="about-interests-img"
// //                   alt="interest"
// //                 />
// //                 <div className="about-interests-overlay about-light-colour">
// //                   <h1 className="about-interests-title">Cooking</h1>
// //                   <p className="about-interests-description">
// //                     After moving away from my parent's cooking, I learned to
// //                     make a variety of recipes.
// //                   </p>
// //                 </div>
// //               </div>

// //               <div className="about-interests-item item3">
// //                 <img
// //                   src={computer}
// //                   className="about-interests-img"
// //                   alt="interest"
// //                 />
// //                 <div className="about-interests-overlay about-light-colour">
// //                   <h1 className="about-interests-title">Technology</h1>
// //                   <p className="about-interests-description">
// //                     I'm always trying to keep up with the lastest technology,
// //                     whether it be robotics, phones or video games. In the summer
// //                     of 2021, I also built my own desktop computer.
// //                   </p>
// //                 </div>
// //               </div>

// //               <div className="about-interests-item item4">
// //                 <img
// //                   src={taiwan}
// //                   className="about-interests-img"
// //                   alt="interest"
// //                 />
// //                 <div className="about-interests-overlay about-light-colour">
// //                   <h1 className="about-interests-title">Traveling</h1>
// //                   <p className="about-interests-description">
// //                     I absolutely love traveling and have been all over the world
// //                     including Austrailia, Paris, and Taiwan (pictured here).
// //                   </p>
// //                 </div>
// //               </div>

// //               <div className="about-interests-item item5">
// //                 <img
// //                   src={taekwondo}
// //                   className="about-interests-img"
// //                   alt="interest"
// //                 />
// //                 <div className="about-interests-overlay about-light-colour">
// //                   <h1 className="about-interests-title">Taekwondo</h1>
// //                   <p className="about-interests-description">
// //                     I competed in Taekwondo for 11 years, but stopped in 2018
// //                     due to starting University. In my time of doing Taekwondo, I
// //                     reached my 3rd Degree Black Belt.
// //                   </p>
// //                 </div>
// //               </div>

// //               <div className="about-interests-item item6">
// //                 <img
// //                   src={ironman}
// //                   className="about-interests-img"
// //                   alt="interest"
// //                 />
// //                 <div className="about-interests-overlay about-light-colour">
// //                   <h1 className="about-interests-title">3D-Printing</h1>
// //                   <p className="about-interests-description">
// //                     In 2018, I got a 3D-printer and since then I have been
// //                     printing various character models, fidget toys, practical
// //                     tools, and more.
// //                   </p>
// //                 </div>
// //               </div>

// //               <div className="about-interests-item item7">
// //                 <img
// //                   src={volleyball}
// //                   className="about-interests-img"
// //                   alt="interest"
// //                 />
// //                 <div className="about-interests-overlay about-light-colour">
// //                   <h1 className="about-interests-title">Volleyball</h1>
// //                   <p className="about-interests-description">
// //                     I played volleyball for 6 years, competing in both school
// //                     and club, indoor and beach, and coached for 2 years. My high
// //                     school team were back-to-back provinical champions along
// //                     with my club team also being provincial champions.
// //                   </p>
// //                 </div>
// //               </div>

// //               <div className="about-interests-item item8">
// //                 <img
// //                   src={arduinoBoard}
// //                   className="about-interests-img"
// //                   alt="interest"
// //                 />
// //                 <div className="about-interests-overlay about-light-colour">
// //                   <h1 className="about-interests-title">Mini-Projects</h1>
// //                   <p className="about-interests-description">
// //                     When I am in the mood, I like messing around with random
// //                     electronics including Arduinos and Raspberry Pis.
// //                   </p>
// //                 </div>
// //               </div>

// //               <div className="about-interests-item item9">
// //                 <img
// //                   src={xbox}
// //                   className="about-interests-img"
// //                   alt="interest"
// //                 />
// //                 <div className="about-interests-overlay about-light-colour">
// //                   <h1 className="about-interests-title">Gaming</h1>
// //                   <p className="about-interests-description">
// //                     In my spare time, you can find me playing Valorant, Apex
// //                     Legends and various other games.
// //                   </p>
// //                 </div>
// //               </div>

// //               <div className="about-interests-item item10">
// //                 <img
// //                   src={piano}
// //                   className="about-interests-img"
// //                   alt="interest"
// //                 />
// //                 <div className="about-interests-overlay about-light-colour">
// //                   <h1 className="about-interests-title">Music</h1>
// //                   <p className="about-interests-description">
// //                     Growing up I played drums and percussion, and taught myself
// //                     how to piano and guitar
// //                   </p>
// //                 </div>
// //               </div>
// //             </div>
// //           </div> */}
// //         </SwiperSlide>

// //         {/* <SwiperSlide className="center-slide hide-mobile">
// //           <AboutAdventures />
// //         </SwiperSlide> */}

// //         <SwiperSlide className="center-slide">
// //           {/* <ContactSlide /> */}
// //         </SwiperSlide>
// //       </Swiper>
// //     </>
// //   );
// // }

// // export default About;
