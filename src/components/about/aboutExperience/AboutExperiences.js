// ==================== LIBRARIES ====================
import { useState } from "react";
import { motion } from "framer-motion";

// ==================== UTIL ====================
import { ExperienceList } from "../../../data/ExperienceList";
import useWindowDimensions from "../../../util/WindowDimensions";
import { tablet } from "../../../foundations/constants/Breakpoints";
import {
  staggerChildFadeIn,
  staggerParent,
} from "../../../foundations/motionVariants/MotionVariants";

// ==================== STYLES ====================
import "./AboutExperiences.sass";
import { Button, SlideLayout, Text } from "../../../foundations";

function AboutExperiences() {
  const { width } = useWindowDimensions();

  const years = [2023, 2022, 2021, 2020];
  const numberExperiences = [
    ExperienceList[2023].length,
    ExperienceList[2022].length,
    ExperienceList[2021].length,
    ExperienceList[2020].length,
  ];
  const [year, setYear] = useState(years[0]);

  const handleClick = (num) => {
    setYear(num);
  };

  return (
    <SlideLayout a="center" j="center">
      <motion.div
        className="experiences-container"
        variants={staggerParent}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <motion.div
          className="experiences-timeline"
          variants={staggerChildFadeIn}
        >
          <div className="experiences-timeline-line"></div>
          <div className="experiences-years">
            <Text fw="semibold" className="experiences-title">
              My Experiences
            </Text>
            {years.map((yearCount, i) => {
              return (
                <div
                  key={i}
                  className={
                    year === yearCount
                      ? "experiences-year-active"
                      : "experiences-year"
                  }
                  onClick={() => handleClick(yearCount)}
                >
                  {/* <div className="experiences-year-ball"></div> */}
                  <Text fw="semibold" className="text">
                    {yearCount}
                  </Text>
                  <Text fw="thin" className="text experiences-year-text">
                    {numberExperiences[i]}{" "}
                    {numberExperiences[i] > 1 ? "experiences" : "experience"}
                  </Text>
                </div>
              );
            })}
          </div>
        </motion.div>

        <motion.div
          className="experiences-content"
          variants={staggerChildFadeIn}
        >
          {ExperienceList[year] ? (
            <>
              {ExperienceList[year].map((item, i) => {
                return (
                  <div key={i} className="content-item">
                    {i > 0 ? <div className="divider"></div> : null}
                    <div className="content-item-title">
                      <Text fs={width <= tablet ? "sm" : "md"}>
                        {item.title}&nbsp;
                      </Text>
                      {item.link ? (
                        <Text
                          fs={width <= tablet ? "sm" : "md"}
                          fw="bold"
                          className="company"
                        >
                          @{" "}
                          <Button extLink={item.link} className="button">
                            {item.company}
                          </Button>
                        </Text>
                      ) : (
                        <Text
                          fs={width <= tablet ? "sm" : "md"}
                          fw="bold"
                          className="company"
                        >
                          @ {item.company}
                        </Text>
                      )}
                    </div>

                    <div className="content-item-description">
                      {item.description.map((point, i) => {
                        return (
                          <div key={i} className="point">
                            <Text fs="sm">{point}</Text>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </>
          ) : null}
        </motion.div>
      </motion.div>
    </SlideLayout>
  );
}

export default AboutExperiences;
