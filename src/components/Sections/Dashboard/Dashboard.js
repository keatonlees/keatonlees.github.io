import { motion } from "motion/react";

import { DashboardList } from "../../../data/ExperienceList";
import BadgeGroup from "../../BadgeGroup/BadgeGroup";
import ColorSquares from "../../Flairs/ColorSquares";
import ArrowLink from "../../ui/ArrowLink/ArrowLink";
import Text from "../../ui/Text/Text";
import Title from "../../ui/Title/Title";

import "./Dashboard.sass";

function Dashboard() {
  const skills = [
    "TypeScript",
    "React",
    "Next.js",
    "TailwindCSS",
    "Python",
    "Node.js",
    "Flask",
    "MySQL",
    "NoSQL",
    "MongoDB",
  ];

  return (
    <div className="dashboard">
      {/* ===== FLAIRS ===== */}
      <ColorSquares variant="h" className="db-color-square" />
      {/* <SquareGrid variant="h" className="db-square-grid" /> */}

      <div className="dashboard-left">
        {/* ===== ABOUT ===== */}
        <div className="about">
          <Title variant="lg">About Me</Title>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: { duration: 0.6, delay: 0.3 },
            }}
            viewport={{ once: true, amount: 0.6 }}
          >
            <Text variant="p" className="about-text">
              Hey! I'm Keaton, an engineering grad from UWaterloo. I've built
              AI-powered tools at CanvassAI, launched location intelligence and
              relator features at PiinPoint, and restructured payment processes
              at Jamlabs. I specialize in React, TypeScript, Python, and
              data-driven solutions. Beyond coding, I love exploring upcoming
              electronics, creating tech content, and breaking code. You'll
              often catch me on the volleyball court, discovering new foods, or
              planning my next adventure. I'm always up for a chat, so feel free
              to reach out!
            </Text>
          </motion.div>
        </div>

        {/* ===== SKILLS ===== */}
        <div className="skills">
          <Title variant="lg">Notable Skills</Title>

          <BadgeGroup list={skills} />
        </div>

        <ArrowLink to="/about#skills" label="More Skills" variant="button" />
      </div>

      <div className="dashboard-right">
        <Title variant="lg">Recent Experiences</Title>

        {/* ===== EXPERIENCES ===== */}
        <div className="db-experiences">
          {DashboardList.map((experience, i) => {
            return (
              <motion.div
                className="db-experience"
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  transition: { duration: 0.6, delay: 0.3 },
                }}
                viewport={{ once: true, amount: 0.6 }}
              >
                <Text
                  variant="h1"
                  className={`db-company ${experience.link ? "db-link" : ""}`}
                  onClick={() =>
                    experience.link && window.open(experience.link)
                  }
                >
                  {experience.company}
                </Text>
                <Text variant="h2" className="db-title">
                  <span className="db-position">{experience.title}</span>{" "}
                  <span className="db-timeframe">{experience.timeframe}</span>
                </Text>
                <ul className="db-glance">
                  <li>
                    <Text variant="p">{experience.glance}</Text>
                  </li>
                </ul>
              </motion.div>
            );
          })}
        </div>

        <ArrowLink
          to="/about#experiences"
          label="View All Experiences"
          variant="button"
        />
      </div>
    </div>
  );
}

export default Dashboard;
