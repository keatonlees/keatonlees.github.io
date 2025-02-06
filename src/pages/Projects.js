// // ==================== COMPONENTS ====================
// import { PageLayout } from "../foundations";
// import ProjectLanding from "../components/projects/projectsLanding/ProjectsLanding";
// import ProjectsBuilt from "../components/projects/projectsBuilt/ProjectsBuilt";
// import ContactSlide from "../components/contact/ContactSlide";

// // ==================== STYLES ====================
// import "../App.sass";

// function Projects() {
//   const bullets = [
//     "Landing",
//     "Creations",
//     // "Ideas",
//     //  "Timetravel",
//     "Contact",
//   ];

//   const slides = [
//     <ProjectLanding />,
//     <ProjectsBuilt />,
//     // <h1>Ideas</h1>,
//     // <h1>Timetravel</h1>,
//     <ContactSlide />,
//   ];

//   return <PageLayout bullets={bullets} slides={slides} />;
// }

// export default Projects;

// //   // const projectImages = [];
// //   // ProjectList.forEach((element) => {
// //   //   projectImages.push(element.overlay);
// //   // });

// //   // const handleProjectChange = (i) => {
// //   //   setCurrentProject(i);
// //   // };

// //   return (
// //     <Suspense fallback={<p>Loading list...</p>}>
// //       {/* <ColourWipe /> */}
// //       {/* <NavBar /> */}
// //       {/* <ContactSidebar /> */}
// //       {/* <ScrollDown swiper={swiper} index={slideIndex} /> */}
// //       {/* <ScrollTop swiper={swiper} index={slideIndex} /> */}

// //       {/* <MegaText text="Projects" percentage={percentage} /> */}
// //       {/* <MouseTooltip
// //         visible={tooltipVisible}
// //         offsetX={15}
// //         offsetY={10}
// //         className="project-tooltip-container"
// //       >
// //         <div className="project-tooltip">
// //           View project
// //           <FontAwesomeIcon
// //             icon={faLongArrowAltRight}
// //             className="projects-tooltip-arrow"
// //           />
// //         </div>
// //       </MouseTooltip> */}
// //       {/* <ScrollDown swiperControl={swiperControl} /> */}
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
// //           {/* <ProjectLanding /> */}
// //         </SwiperSlide>

// //         <SwiperSlide className="center-slide">
// //           {/* <ProjectsBuilt /> */}
// //           {/* <div className="projects-section-top"></div>
// //           <div className="projects-section-middle-left">
// //             <motion.div
// //               className="projects-content-left"
// //               key={currentProject}
// //               variants={motionVariants}
// //               initial={"hideLeft"}
// //               whileInView={"showElement"}
// //               exit={"exitMoveLeft"}
// //             >
// //               <p className="project-content-timeframe">
// //                 {ProjectList[currentProject].timeframe}
// //               </p>
// //               <p className="project-content-description">
// //                 {ProjectList[currentProject].description}
// //               </p>
// //               <div className="project-content-tags-container">
// //                 {ProjectList[currentProject].tags.map((data, i) => {
// //                   return (
// //                     <p key={i} className="project-content-tags">
// //                       {data}
// //                     </p>
// //                   );
// //                 })}
// //               </div>
// //             </motion.div>
// //           </div>
// //           <div className="projects-section-middle-center">
// //             <Link
// //               to={"/projects" + ProjectList[currentProject].url}
// //               onMouseEnter={() => {
// //                 setTooltipVisible(true);
// //               }}
// //               onMouseLeave={() => {
// //                 setTooltipVisible(false);
// //               }}
// //             >
// //               <motion.img
// //                 src={ProjectList[currentProject].cover}
// //                 alt="projects_image"
// //                 className="projects-item-image"
// //                 key={currentProject}
// //                 variants={motionVariants}
// //                 initial={"hide"}
// //                 animate={"showElement"}
// //                 style={{
// //                   width: props.projectImageInitial.width,
// //                   height: props.projectImageInitial.height,
// //                 }}
// //               />
// //             </Link>
// //           </div>
// //           <motion.div
// //             className="projects-section-middle-right"
// //             key={currentProject}
// //           >
// //             <motion.div
// //               className="projects-content-right"
// //               variants={motionVariants}
// //               initial={"hideRight"}
// //               whileInView={"showElement"}
// //               exit={"exitMoveRight"}
// //             >
// //               <h1 className="projects-large-counter">
// //                 {ProjectList.length - ProjectList[currentProject].id + 1 < 10
// //                   ? `0${
// //                       ProjectList.length - ProjectList[currentProject].id + 1
// //                     }`
// //                   : ProjectList.length - ProjectList[currentProject].id + 1}
// //               </h1>
// //             </motion.div>
// //             <motion.img
// //               src={ProjectList[currentProject].overlay}
// //               alt="projects_overlay"
// //               className="projects-item-overlay"
// //               variants={motionVariants}
// //               initial={"hideBelow"}
// //               whileInView={"showElement"}
// //               exit={"exitMoveDown"}
// //             />
// //           </motion.div>
// //           <motion.div
// //             className="projects-section-bottom"
// //             variants={motionVariants}
// //             initial={"hide"}
// //             whileInView={"showElement"}
// //             exit={"exitMoveDown"}
// //           >
// //             <Swiper
// //               spaceBetween={5}
// //               slidesPerView={4}
// //               centeredSlides={true}
// //               style={{ height: "50%", margin: "0px 30%" }}
// //               className="project-selector-swiper"
// //               onSlideChange={(event) => handleProjectChange(event.activeIndex)}
// //             >
// //               {ProjectList.map((data, i) => {
// //                 return (
// //                   <SwiperSlide
// //                     key={i}
// //                     style={{ margin: "0px" }}
// //                     className="project-selector-swiperslide"
// //                   >
// //                     <div className="project-selector-img-container">
// //                       <img
// //                         src={data.selector}
// //                         alt="projects_selector"
// //                         className="projects-selector-img"
// //                       />
// //                     </div>
// //                   </SwiperSlide>
// //                 );
// //               })}
// //             </Swiper>
// //           </motion.div> */}
// //         </SwiperSlide>

// //         <SwiperSlide className="center-slide">
// //           <h1>What's in the works</h1>
// //         </SwiperSlide>

// //         <SwiperSlide className="center-slide">
// //           <h1>Travel back in time</h1>
// //         </SwiperSlide>

// //         <SwiperSlide className="center-slide">
// //           {/* <ContactSlide /> */}
// //         </SwiperSlide>

// //         {/* <SwiperSlide className="projects-container-mobile"> */}
// //         {/* <motion.div
// //             className="projects-mobile-grid"
// //             variants={motionVariants}
// //             initial={"hide"}
// //             whileInView={"showElement"}
// //             exit={"exitFade"}
// //           >
// //             {ProjectList.map((data, i) => {
// //               return (
// //                 <div className="projects-mobile-item" key={i}>
// //                   <Link to={`/projects${data.url}`}>
// //                     <img
// //                       src={data.cover}
// //                       className="projects-mobile-image"
// //                       alt="mobile_img"
// //                     />
// //                   </Link>
// //                 </div>
// //               );
// //             })}
// //           </motion.div> */}
// //         {/* </SwiperSlide> */}
// //       </Swiper>
// //     </Suspense>
// //   );
// // }

// // export default Projects;
