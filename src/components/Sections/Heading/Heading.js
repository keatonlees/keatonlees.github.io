import { useEffect, useState } from "react";

import { motion } from "motion/react";
import ReactTextTransition, { presets } from "react-text-transition";

import Text from "../../ui/Text/Text";

import "./Heading.sass";

function Heading({ title, list, subtitle }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      list[index + 1] ? setIndex(index + 1) : setIndex(0);
    }, 3000);
    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index]);

  return (
    <div className="heading">
      <motion.div
        className="heading-title-container"
        initial={{ opacity: 0, x: -20 }}
        animate={{
          opacity: 1,
          x: 0,
          transition: { duration: 0.6, delay: 2 },
        }}
      >
        <Text variant="h1" className="heading-title">
          {title}
        </Text>
        <Text variant="h1" className="heading-title">
          <ReactTextTransition springConfig={presets.gentle}>
            {list[index]}
          </ReactTextTransition>
        </Text>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{
          opacity: 1,
          x: 0,
          transition: { duration: 0.6, delay: 2.3 },
        }}
      >
        <Text variant="h2" className="subtitle">
          {subtitle}
        </Text>
      </motion.div>
    </div>
  );
}

export default Heading;
