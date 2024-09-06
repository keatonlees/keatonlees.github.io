// ==================== UTIL ====================
import useWindowDimensions from "../../../util/WindowDimensions";
import { phone } from "../../../foundations/constants/Breakpoints";

// ==================== COMPONENTS ====================
import { Button, Landing, SlideLayout, Text } from "../../../foundations";
import Snippet from "../../snippet/Snippet";

// ==================== IMAGES ====================
import project from "../../../images/project_first_nobg.png";

function ProjectsLanding() {
  const { width } = useWindowDimensions();

  const wordSet1 = ["What I've"];
  const wordSet2 = ["created", "developed", "coded", "fabricated"];

  return (
    <SlideLayout a="center" j="center">
      <Snippet
        x="20vw"
        y="30vh"
        variant="state"
        name="projects"
        str="created"
      />
      <Landing
        bg="MYPROJECTS"
        title="My Projects"
        description={
          <Text
            fs={width <= phone ? "sm" : "md"}
            fw="light"
            className="description"
          >
            A walkthrough of my various projects from small to large. Here's all
            the things I have built and the things I am thinking of doing.
          </Text>
        }
        image={project}
        link={
          <Button
            navLink="/about"
            fs={width <= phone ? "sm" : "md"}
            fw="bold"
            className="hover-underline"
          >
            Not Now? Read About Me!
          </Button>
        }
        wordSet1={wordSet1}
        wordSet2={wordSet2}
      />
    </SlideLayout>
  );
}

export default ProjectsLanding;

// // ----- imports -----
// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import { motion } from "framer-motion";
// import ReactTextTransition, { presets } from "react-text-transition";

// // ----- util -----
// import { wordSpeed } from "../util/Constants.js";
// import { staggerParent, staggerChild } from "../util/MotionVariants";

// // ----- styles -----
// import "../styles/Landing.sass";

// function ProjectLanding() {
//   const [index, setIndex] = useState(0);
//   const words = ["created", "developed", "coded", "fabricated"];

//   useEffect(() => {
//     const interval = setInterval(() => {
//       words[index + 1] ? setIndex(index + 1) : setIndex(0);
//     }, wordSpeed);
//     return () => clearInterval(interval);
//   }, [index]);

//   return (
//     <div className="landing-container">
//       <div className="landing-bgtext">
//         <h1>Projects</h1>
//       </div>

//       <motion.div
//         className="landing-content"
//         variants={staggerParent}
//         initial="hidden"
//         animate="show"
//       >
//         <motion.p className="content-name" variants={staggerChild}>
//           My Projects
//         </motion.p>
//         <motion.h1 className="content-title" variants={staggerChild}>
//           What I've{" "}
//           <ReactTextTransition springConfig={presets.gentle} inline>
//             {words[index]}
//           </ReactTextTransition>
//         </motion.h1>
//         <motion.p className="content-description" variants={staggerChild}>
//           A walkthrough of my various projects from small to large. Here's all
//           the things I have built and the things I am thinking of building.
//         </motion.p>
//         <motion.p className="content-link" variants={staggerChild}>
//           <Link
//             to="/about"
//             className="bold content-link-item content-link-hover"
//           >
//             Not Now? Read About Me!
//           </Link>
//         </motion.p>
//       </motion.div>

//       {/* <div className="homelanding-image">image</div> */}
//     </div>
//   );
// }

// export default ProjectLanding;
