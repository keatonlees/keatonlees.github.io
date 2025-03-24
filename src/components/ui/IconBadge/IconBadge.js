import Text from "../Text/Text";

import "./IconBadge.sass";

function IconBadge({ text, className = "", ...props }) {
  const imageName = text
    .toLowerCase()
    .replace(".", "")
    .replace("-", "")
    .replace(" ", "_");
  const image = require(`../../../images/icon_${imageName}.png`);

  return (
    <div className={`badge shadow ${className}`} {...props}>
      <img src={image} className="badge-icon" alt="icon badge" loading="lazy" />
      <Text variant="p" className="badge-text">
        {text}
      </Text>
    </div>
  );
}

export default IconBadge;
