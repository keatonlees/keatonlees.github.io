import { useEffect, useState } from "react";

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
      <div className="heading-title-container">
        <Text variant="h1" className="heading-title">
          {title}
        </Text>
        <Text variant="h1" className="heading-title">
          <ReactTextTransition springConfig={presets.gentle}>
            {list[index]}
          </ReactTextTransition>
        </Text>
      </div>
      <Text variant="h2" className="subtitle">
        {subtitle}
      </Text>
    </div>
  );
}

export default Heading;
