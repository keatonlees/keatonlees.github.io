import { motion } from "motion/react";

import IconBadge from "../ui/IconBadge/IconBadge";

import "./BadgeGroup.sass";

function BadgeGroup({ list, thisSite = [], favStack = [], workStack = [] }) {
  return (
    <div className="badge-group">
      {list.map((item, i) => {
        let classes = "";

        if (thisSite.includes(item)) classes = classes + " this-site";
        if (favStack.includes(item)) classes = classes + " fav-stack";
        if (workStack.includes(item)) classes = classes + " work-stack";
        return (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
              transition: { duration: 0.6, delay: 0.4 + i * 0.1 },
            }}
            viewport={{ once: true, amount: 0.6 }}
          >
            <IconBadge key={i} text={item} className={classes} />
          </motion.div>
        );
      })}
    </div>
  );
}

export default BadgeGroup;
