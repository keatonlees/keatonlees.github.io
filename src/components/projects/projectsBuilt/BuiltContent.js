// ==================== LIBRARIES ====================
import { motion } from "framer-motion";
import {
  BsArrowDownRightCircleFill,
  BsArrowUpLeftCircleFill,
} from "react-icons/bs";

// ==================== UTIL ====================
import { ProjectList as PL } from "../../../data/ProjectList";

// ==================== COMPONENTS ====================
import { Text } from "../../../foundations";

// ==================== STYLES ====================
import "./BuiltContent.sass";

function BuiltContent({ i, isExpanded, setIsExpanded }) {
  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <motion.div className="container" layout>
      <motion.div
        className="title-container"
        layout="position"
        transition={{ delay: 0 }}
      >
        <Text fs="16xl" fw="bold" className="number">
          {i > 9 ? i + 1 : `0` + (i + 1)}
        </Text>
        <Text fs="5xl" fw="bold" className="title">
          {PL[i].name}
        </Text>
        <Text className="timeframe">{PL[i].timeframe}</Text>
      </motion.div>
      <motion.div
        className={isExpanded ? "card-expanded" : "card"}
        layout
        transition={{
          layout: { duration: 0.8, type: "spring", bounce: 0.2 },
        }}
      >
        {/* top row */}
        <motion.div className={isExpanded ? "row-top-expanded" : "row-top"}>
          {/* summary card */}
          <motion.div
            className={isExpanded ? "top-left-expanded" : "top-left"}
            layout="position"
          >
            {PL[i].description}
          </motion.div>

          {/* expanded card */}
          {isExpanded && (
            <motion.div
              className="top-right"
              layout="position"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              {PL[i].toolLogos.map((logo, i) => {
                return <img key={i} src={logo} alt="logo" loading="lazy" />;
              })}
            </motion.div>
          )}
        </motion.div>

        {/* bot row */}
        {isExpanded && (
          <motion.div
            className="row-bot"
            layout="position"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {PL[i].image && (
              <div className="images">
                <img
                  className="project-img"
                  src={PL[i].image}
                  alt="project"
                  loading="lazy"
                />
                <p className="caption">{PL[i].caption}</p>
              </div>
            )}
            <div className="paras">
              {PL[i].paragraphs.map((para, i) => {
                return <p>{para}</p>;
              })}
              <div className="links">
                {PL[i].link !== "" && (
                  <a
                    href={PL[i].link}
                    target="_blank"
                    rel="noreferrer"
                    className="link-item"
                  >
                    Check it out!
                  </a>
                )}
                {PL[i].github !== "" && (
                  <a
                    href={PL[i].github}
                    target="_blank"
                    rel="noreferrer"
                    className="link-item"
                  >
                    GitHub!
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        )}

        {/* expand button */}
        {isExpanded ? (
          <motion.div
            className="collapse-button"
            layout="position"
            onClick={toggleExpand}
          >
            <BsArrowUpLeftCircleFill />
          </motion.div>
        ) : (
          <motion.div
            className="expand-button"
            layout="position"
            onClick={toggleExpand}
          >
            <BsArrowDownRightCircleFill />
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  );
}

export default BuiltContent;
