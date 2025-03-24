import { motion } from "motion/react";

import BadgeGroup from "../../BadgeGroup/BadgeGroup";
import MultiDisplay from "../../MultiDisplay/MultiDisplay";
import ArrowLink from "../../ui/ArrowLink/ArrowLink";
import Text from "../../ui/Text/Text";

import "./ProjectPage.sass";

function ProjectPage({ data, index }) {
  return (
    <div className="project-page" id={data.name}>
      <div
        className="project-page-container"
        style={{
          background: `linear-gradient(135deg, transparent 2%, ${data.bgColor1} 2%, ${data.bgColor2} 98%, transparent 98%)`,
        }}
      >
        <motion.div
          className="project-image-container"
          initial={{ opacity: 0 }}
          whileInView={{
            opacity: 1,
            transition: { duration: 0.6, delay: 0.3 },
          }}
          viewport={{ once: true, amount: 0.6 }}
        >
          <MultiDisplay variant={data.images.length} images={data.images} />
        </motion.div>

        <div className="project-text-container">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: { duration: 0.6, delay: 0.3 },
            }}
            viewport={{ once: true, amount: 0.6 }}
          >
            <Text variant="h1" className="project-index">
              0{index + 1}
            </Text>
          </motion.div>

          <div className="project-title-container">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{
                opacity: 1,
                x: 0,
                transition: { duration: 0.6, delay: 0.3 },
              }}
              viewport={{ once: true, amount: 0.6 }}
            >
              <Text variant="h1" className="project-title">
                {data.name}
              </Text>
            </motion.div>
            <div className="project-tech-container">
              <BadgeGroup list={data.tech} />
            </div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{
                opacity: 1,
                x: 0,
                transition: { duration: 0.6, delay: 0.3 },
              }}
              viewport={{ once: true, amount: 0.6 }}
            >
              <Text variant="h2" className="project-glance">
                {data.glance}
              </Text>
            </motion.div>
          </div>

          <div className="project-description-container">
            {data.points.map((point, i) => (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  transition: { duration: 0.6, delay: 0.3 },
                }}
                viewport={{ once: true, amount: 0.6 }}
              >
                <Text key={i} variant="p" className="project-description">
                  {point}
                </Text>
              </motion.div>
            ))}

            <div className="project-links-container">
              {data.link && (
                <ArrowLink variant="external" to={data.link} label="View" />
              )}
              {data.github && (
                <ArrowLink variant="external" to={data.github} label="GitHub" />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectPage;
