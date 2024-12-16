// ==================== LIBRARIES ====================
import { motion } from "framer-motion";

// ==================== UTIL ====================
import { SlideLayout, Text } from "../../../foundations";

// ==================== STYLES ====================
import "./AboutSkills.sass";
import {
  staggerChildFadeIn,
  staggerParent,
} from "../../../foundations/motionVariants/MotionVariants";

function AboutSkills() {
  const frontend = [
    "javascript",
    "typescript",
    "react",
    "next.js",
    "redux",
    "html5",
    "css3",
    "sass/scss",
    "tailwindcss",
  ];
  const backend = [
    "python",
    "java",
    "node.js",
    "express",
    "flask",
    "django",
    "mysql",
    "nosql",
    "mongodb",
  ];
  const tools = [
    "aws",
    "circleci",
    "docker",
    "figma",
    "firebase",
    "git",
    "jest",
    "jira",
  ];

  return (
    <SlideLayout a="center" j="center">
      <motion.div
        className="skills-container"
        variants={staggerParent}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <motion.div variants={staggerChildFadeIn} className="skills">
          <Text fs="lg" fw="semibold">
            Frontend Skills
          </Text>
          <div className="skills-items">
            {frontend.map((item, i) => {
              return (
                <div key={i}>
                  <Text>{item}</Text>
                </div>
              );
            })}
          </div>
        </motion.div>

        <motion.div variants={staggerChildFadeIn} className="skills">
          <Text fs="lg" fw="semibold">
            Backend Skills
          </Text>
          <div className="skills-items">
            {backend.map((item, i) => {
              return <div key={i}>{item}</div>;
            })}
          </div>
        </motion.div>

        <motion.div variants={staggerChildFadeIn} className="skills">
          <Text fs="lg" fw="semibold">
            Other Tools
          </Text>
          <div className="skills-items">
            {tools.map((item, i) => {
              return <div key={i}>{item}</div>;
            })}
          </div>
        </motion.div>
      </motion.div>
    </SlideLayout>
  );
}

export default AboutSkills;
