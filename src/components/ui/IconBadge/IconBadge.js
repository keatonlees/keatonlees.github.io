import Text from "../Text/Text";

import "./IconBadge.sass";

function IconBadge({ text, ...props }) {
  const imageName = text.toLowerCase().replace(".", "");
  const image = require(`../../../images/icon_${imageName}.png`);

  return (
    <div className="badge" {...props}>
      <img src={image} className="icon" alt="icon badge" />
      <Text variant="p" className="text">
        {text}
      </Text>
    </div>
  );
}

export default IconBadge;
