import { motion } from "motion/react";

import Text from "../../ui/Text/Text";
import Title from "../../ui/Title/Title";

import "./Education.sass";

function Education() {
  return (
    <div className="education-container">
      <div className="summary-continuation">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: { duration: 0.6, delay: 0.3 },
          }}
          viewport={{ once: true, amount: 0.6 }}
        >
          <Text variant="p" className="summary-text">
            In addition to my professional work, I've always had a passion for
            continuous learning. I'm constantly exploring new technologies,
            experimenting with eye-catching designs, and refining my
            problem-solving skills. I find inspiration everywhere, whether it's
            from the designs I encounter daily or from the ever-evolving world
            of tech. Creating something beautiful requires the perfect
            intersection between art and engineering.
          </Text>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: { duration: 0.6, delay: 0.3 },
          }}
          viewport={{ once: true, amount: 0.6 }}
        >
          <Text variant="p" className="summary-text">
            When I'm not coding, I play an excessive amount of volleyball, both
            having played seriously and coached multiple years. Hit me up if you
            want hit some balls or chat about tech!
          </Text>
        </motion.div>
      </div>
      <div className="educations">
        <Title variant="lg">Education</Title>
        <motion.div
          className="item"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: { duration: 0.6, delay: 0.3 },
          }}
          viewport={{ once: true, amount: 0.6 }}
        >
          <Text variant="h1" className="title">
            University of Toronto <span className="timeframe">Pursuing</span>
          </Text>
          <Text variant="h1" className="subtitle">
            <span className="degree">
              Artificial Intelligence, Continuing Studies
            </span>
          </Text>
          <Text variant="p" className="subtitle">
            Machine Learning, Deep Learning, Intelligent Agents
          </Text>
        </motion.div>
        <motion.div
          className="item"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: { duration: 0.6, delay: 0.3 },
          }}
          viewport={{ once: true, amount: 0.6 }}
        >
          <Text variant="h1" className="title">
            University of Waterloo <span className="timeframe">2024</span>
          </Text>
          <Text variant="h1" className="subtitle">
            <span className="degree">
              Systems Design Engineering (BASc), Computing Option
            </span>
          </Text>
          <Text variant="p" className="subtitle">
            Algorithm Design and Analysis, Data Structures and Algorithms,
            Fundamentals of Computational Intelligence
          </Text>
        </motion.div>
      </div>
    </div>
  );
}

export default Education;
