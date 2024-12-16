// ==================== UTIL ====================
import useWindowDimensions from "../../../util/WindowDimensions";
import { phone } from "../../../foundations/constants/Breakpoints";

// ==================== COMPONENTS ====================
import { Button, Landing, SlideLayout, Text } from "../../../foundations";

// ==================== IMAGES ====================
import headshot from "../../../images/headshot-circle.png";
import Snippet from "../../snippet/Snippet";

function HomeLanding() {
  const { width } = useWindowDimensions();

  const wordSet1 = [
    "Software",
    "Tech",
    "Volleyball",
    "Fascinated",
    "Sushi",
    "Amateur",
  ];
  const wordSet2 = [
    "Developer",
    "Enthusiast",
    "Aficionado",
    "Traveler",
    "Connoisseur",
    "Vlogger",
  ];

  return (
    <SlideLayout a="center" j="center">
      <Snippet x="25vw" y="30vh" variant="const" name="name" str="keaton" />
      <Snippet
        x="70vw"
        y="20vh"
        variant="let"
        name="greeting"
        str="hey there!"
      />
      <Snippet
        x="55vw"
        y="80vh"
        variant="html"
        tag="portfolio"
        classname="personal"
        value="look!"
      />
      <Landing
        bg="HEYTHERE"
        title="Keaton Lees"
        description={
          <Text
            fs={width <= phone ? "sm" : "md"}
            fw="light"
            className="description"
          >
            Hey there! I'm a Systems Design Engineering Graduate from UWaterloo.
            Previously built cool things at{" "}
            <Button extLink="https://www.canvass.io/">CanvassAI</Button>,{" "}
            <Button extLink="https://www.piinpoint.com/">PiinPoint</Button> and{" "}
            <Button extLink="https://www.jamlabs.com/">Jamlabs</Button>.
          </Text>
        }
        image={headshot}
        link={
          <Button
            navLink="/projects"
            fs={width <= phone ? "sm" : "md"}
            fw="bold"
          >
            Checkout My Projects!
          </Button>
        }
        wordSet1={wordSet1}
        wordSet2={wordSet2}
      />
    </SlideLayout>
  );
}

export default HomeLanding;
