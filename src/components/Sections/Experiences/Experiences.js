import { motion } from "motion/react";

import { ExperienceList } from "../../../data/ExperienceList";
import Text from "../../ui/Text/Text";
import Title from "../../ui/Title/Title";

import "./Experiences.sass";

function Experiences() {
  return (
    <div className="experiences" id="experiences">
      <Title variant="lg">Experiences</Title>

      <div className="experiences-container">
        {ExperienceList.map((experience, i) => (
          <motion.div
            key={i}
            className="experience"
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
              className={`exp-company ${experience.link ? "exp-link" : ""}`}
              onClick={() => experience.link && window.open(experience.link)}
            >
              {experience.company}
            </Text>
            <Text variant="h2" className="exp-title">
              <span className="exp-position">{experience.title}</span>{" "}
              <span className="exp-timeframe">{experience.timeframe}</span>
            </Text>
            <ul className="exp-points">
              {experience.points.map((point, j) => (
                <li key={j}>
                  <Text variant="p" className="exp-point">
                    {point}
                  </Text>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Experiences;
