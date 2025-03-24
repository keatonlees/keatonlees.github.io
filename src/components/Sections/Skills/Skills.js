// @ts-nocheck
import { useEffect } from "react";

import { motion } from "motion/react";

import BadgeGroup from "../../BadgeGroup/BadgeGroup";
import Text from "../../ui/Text/Text";
import Title from "../../ui/Title/Title";

import "./Skills.sass";

function Skills() {
  const frontend_skills = [
    "JavaScript",
    "TypeScript",
    "React",
    "React Native",
    "Next.js",
    "Redux",
    "HTML5",
    "CSS3",
    "SASS",
    "TailwindCSS",
    "Framer Motion",
  ];

  const backend_skills = [
    "Python",
    "Java",
    "Node.js",
    "Express",
    "Flask",
    "Django",
    "MySQL",
    "NoSQL",
    "MongoDB",
    "DynamoDB",
    "S3",
    "Supabase",
    "Railway",
  ];

  const other_tools = [
    "AWS",
    "Docker",
    "Figma",
    "Firebase",
    "Git",
    "GitHub",
    "Jest",
    "Jira",
  ];

  const thisSite = [
    "JavaScript",
    "React",
    "SASS",
    "Framer Motion",
    "Git",
    "GitHub",
  ];

  const favStack = [
    "TypeScript",
    "Next.js",
    "TailwindCSS",
    "Python",
    "Flask",
    "DynamoDB",
    "AWS",
    "Firebase",
    "Git",
    "GitHub",
  ];

  const workStack = [
    "TypeScript",
    "React Native",
    "TailwindCSS",
    "NoSQL",
    "Firebase",
    "Git",
    "GitHub",
  ];

  useEffect(() => {
    const setHovered = (target) => {
      target.forEach((item) => {
        item.style.setProperty("background-color", "var(--color-accent)");
        item.style.setProperty("color", "var(--color-bg)");
      });
    };
    const setNormal = (target) => {
      target.forEach((item) => {
        item.style.setProperty("background-color", "var(--color-primary)");
        item.style.setProperty("color", "var(--color-text)");
      });
    };

    const thisSiteHover = document.querySelector(".this-site-hover");
    const thisSiteTarget = document.querySelectorAll(".this-site");
    if (thisSiteHover) {
      thisSiteHover.addEventListener("mouseenter", () =>
        setHovered(thisSiteTarget),
      );
      thisSiteHover.addEventListener("mouseleave", () =>
        setNormal(thisSiteTarget),
      );
    }

    const favStackHover = document.querySelector(".fav-stack-hover");
    const favStackTarget = document.querySelectorAll(".fav-stack");
    if (favStackHover) {
      favStackHover.addEventListener("mouseenter", () =>
        setHovered(favStackTarget),
      );
      favStackHover.addEventListener("mouseleave", () =>
        setNormal(favStackTarget),
      );
    }

    const workStackHover = document.querySelector(".work-stack-hover");
    const workStackTarget = document.querySelectorAll(".work-stack");
    if (workStackHover) {
      workStackHover.addEventListener("mouseenter", () =>
        setHovered(workStackTarget),
      );
      workStackHover.addEventListener("mouseleave", () =>
        setNormal(workStackTarget),
      );
    }

    return () => {
      thisSiteHover?.removeEventListener("mouseenter", () => {});
      thisSiteHover?.removeEventListener("mouseleave", () => {});
      favStackHover?.removeEventListener("mouseenter", () => {});
      favStackHover?.removeEventListener("mouseleave", () => {});
      workStackHover?.removeEventListener("mouseenter", () => {});
      workStackHover?.removeEventListener("mouseleave", () => {});
    };
  }, []);

  return (
    <div className="skills-container" id="skills">
      <div className="tech-skills">
        <Title variant="lg">Technical Skills</Title>

        <div className="skills-section-container">
          <div className="frontend-skills">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{
                opacity: 1,
                x: 0,
                transition: { duration: 0.6, delay: 0.3 },
              }}
              viewport={{ once: true, amount: 0.6 }}
            >
              <Text variant="h1" className="skills-title">
                Frontend
              </Text>
            </motion.div>
            <BadgeGroup
              list={frontend_skills}
              thisSite={thisSite}
              favStack={favStack}
              workStack={workStack}
            />
          </div>

          <div className="backend-skills">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{
                opacity: 1,
                x: 0,
                transition: { duration: 0.6, delay: 0.3 },
              }}
              viewport={{ once: true, amount: 0.6 }}
            >
              <Text variant="h1" className="skills-title">
                Backend
              </Text>
            </motion.div>
            <BadgeGroup
              list={backend_skills}
              thisSite={thisSite}
              favStack={favStack}
              workStack={workStack}
            />
          </div>

          <div className="other-skills">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{
                opacity: 1,
                x: 0,
                transition: { duration: 0.6, delay: 0.3 },
              }}
              viewport={{ once: true, amount: 0.6 }}
            >
              <Text variant="h1" className="skills-title">
                Other Tools
              </Text>
            </motion.div>
            <BadgeGroup
              list={other_tools}
              thisSite={thisSite}
              favStack={favStack}
              workStack={workStack}
            />
          </div>
        </div>
      </div>
      <div className="select-skills">
        <div className="hover-bubble this-site-hover">
          How this site is built
        </div>
        <div className="hover-bubble fav-stack-hover">My go to stack</div>
        <div className="hover-bubble work-stack-hover">
          Currently using at work
        </div>
        <div className="detail-bubble"></div>
        <div className="detail-bubble"></div>
        <div className="detail-bubble"></div>
        <div className="detail-bubble"></div>
        <div className="detail-bubble"></div>
        <div className="detail-bubble"></div>
      </div>
    </div>
  );
}

export default Skills;
