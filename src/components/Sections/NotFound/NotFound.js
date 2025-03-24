import MarqueeText from "../../MarqueeText/MarqueeText";
import ArrowLink from "../../ui/ArrowLink/ArrowLink";
import Text from "../../ui/Text/Text";

import "./NotFound.sass";

function NotFound() {
  return (
    <div className="not-found">
      {/* Marquees */}
      <MarqueeText
        text="danger!"
        width={800}
        coords={{ left: -140, top: 140 }}
        angle={-45}
      />
      <MarqueeText
        text="warning!"
        width={800}
        coords={{ right: -140, bottom: 140 }}
        angle={-45}
      />

      <Text variant="h1" className="title">
        404
      </Text>
      <Text variant="h1" className="subtitle">
        How'd you get here?
      </Text>
      <Text variant="p" className="content">
        Unfortunately, the page you are looking for does not exist. You should
        probably go back to the website before you get caught.
      </Text>

      <ArrowLink to="/" label="Go Home" variant="button" />
    </div>
  );
}

export default NotFound;
