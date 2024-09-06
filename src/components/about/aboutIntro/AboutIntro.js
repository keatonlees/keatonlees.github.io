// ==================== LIBRARIES ====================
import { motion } from "framer-motion";

// ==================== UTIL ====================
import useWindowDimensions from "../../../util/WindowDimensions";
import { laptop } from "../../../foundations/constants/Breakpoints";
import {
  staggerChildFadeIn,
  staggerParent,
} from "../../../foundations/motionVariants/MotionVariants";
import { SlideLayout, Text } from "../../../foundations";

// ==================== STYLES ====================
import "./AboutIntro.sass";

// ==================== IMAGES ====================
import headshot from "../../../images/grad.JPG";

function AboutIntro() {
  const { width } = useWindowDimensions();

  return (
    <SlideLayout a="center" j="center">
      <motion.div
        className="intro-container"
        variants={staggerParent}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <motion.div variants={staggerChildFadeIn} className="intro-image">
          <img src={headshot} alt="headshot" />
        </motion.div>

        <div className="intro-content">
          <motion.div
            variants={staggerChildFadeIn}
            className="intro-content-intro"
          >
            <Text
              fs={width <= laptop ? "sm" : "md"}
              fw="light"
              className="text"
            >
              Hi! My name is Keaton Lees and I'm a Systems Design Engineering
              Graduate from the University of Waterloo. Previously, I worked at
              CanvassAI, PiinPoint, and Jamlabs Data Science. During my time
              building CanvassAI's AI powered industry tool, I worked closely
              with the development team to implement 2 new frontend features
              using React, TypeScript, Redux and Jest. At PiinPoint, a
              data-focused location company, I developed and integrated a brand
              new feature using React and Python, which had gained traction with
              5 major clients, including Sobeys and Tim Hortons.
              <br></br>
              <br></br>
              Outside of work, you can frequently find me trialing new
              technologies and improving my knowledge of old ones. I
              consistently see real-world designs that I visually enjoy and
              often try to recreate my own version to understand the inner
              workings. Additionally, I enjoy hitting the gym, playing
              volleyball, exploring video games and tasting new foods. If you
              would like to chat, don't hesitate to reach out.
            </Text>
          </motion.div>
          <motion.div
            variants={staggerChildFadeIn}
            className="intro-content-education"
          >
            <Text
              fs={width <= laptop ? "sm" : "md"}
              fw="bold"
              className="school"
            >
              University of Waterloo | Systems Design Engineering (BASc),
              Computing Option
            </Text>
            <Text
              fs={width <= laptop ? "sm" : "md"}
              fw="light"
              className="text"
            >
              Courses: Algorithm Design and Analysis, Data Structures and
              Algorithms, Human Factors of Design
            </Text>
          </motion.div>
        </div>
      </motion.div>
    </SlideLayout>

    // <div className="intro-container">
    //   <div className="intro-container-left">
    //     <div className="intro-summary">
    //       <h1 className="intro-title">Hi! My name is Keaton Lees!</h1>
    //       <p className="intro-paragraph">
    //         Proin orci lectus, ullamcorper id maximus vel, gravida eu ex. Aenean
    //         non eros urna. Donec fringilla blandit dapibus. Vivamus vulputate
    //         velit ex, quis dignissim dui venenatis tristique. Mauris iaculis, ex
    //         at vehicula rutrum, justo leo luctus quam, vitae luctus tellus
    //         libero ac nisl. Interdum et malesuada fames ac ante ipsum primis in
    //         faucibus. Cras quis lectus turpis. Donec eleifend nibh ut lorem
    //         feugiat aliquet. Morbi nunc eros, sagittis sit amet viverra vitae,
    //         ullamcorper ac neque. Nam est risus, ullamcorper nec convallis at,
    //         placerat a arcu. Interdum et malesuada fames ac ante ipsum primis in
    //         faucibus.
    //       </p>
    //       <p className="intro-paragraph">
    //         Proin orci lectus, ullamcorper id maximus vel, gravida eu ex. Aenean
    //         non eros urna. Donec fringilla blandit dapibus. Vivamus vulputate
    //         velit ex, quis dignissim dui venenatis tristique. Mauris iaculis, ex
    //         at vehicula rutrum, justo leo luctus quam, vitae luctus tellus
    //         libero ac nisl. Interdum et malesuada fames ac ante ipsum primis in
    //         faucibus. Cras quis lectus turpis. Donec eleifend nibh ut lorem
    //         feugiat aliquet. Morbi nunc eros, sagittis sit amet viverra vitae,
    //         ullamcorper ac neque. Nam est risus, ullamcorper nec convallis at,
    //         placerat a arcu. Interdum et malesuada fames ac ante ipsum primis in
    //         faucibus.
    //       </p>
    //     </div>

    //     <div className="intro-education">
    //       <h1 className="intro-title">My Education</h1>
    //       <p className="intro-program">
    //         Systems Design Engineering{" "}
    //         <span className="accent-colour bold">
    //           @{" "}
    //           <a
    //             className="education-link"
    //             href="https://uwaterloo.ca/systems-design-engineering/"
    //             target="_blank"
    //             rel="noreferrer"
    //           >
    //             The University of Waterloo
    //           </a>
    //         </span>
    //       </p>
    //       <p className="intro-degree">
    //         Bachelor's of Applied Science (BASc) | 2024 Graduation | 3.7/4.0 GPA
    //       </p>
    //       <p className="intro-description">
    //         Systems Design Engineers learn to address and solve problems that
    //         overstep traditional engineering boundaries by acquiring and
    //         integrating knowledge across numerous disciplines. Many of the
    //         Systems Design Engineering courses apply software, design, computer
    //         and electrical concepts to gain a holistic view of connected
    //         systems.
    //       </p>
    //     </div>
    //   </div>

    //   <div className="intro-container-right">
    //     <div className="image-container">
    //       <img src={headshot} className="headshot" alt="headshot" />
    //     </div>
    //   </div>
    // </div>
  );
}

export default AboutIntro;
