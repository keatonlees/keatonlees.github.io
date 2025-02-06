// ==================== UTIL ====================
import useWindowDimensions from "../../../hooks/useWindowDimension";
import { phone } from "../../../constants/Breakpoints";

// ==================== COMPONENTS ====================
import { Button, Landing, SlideLayout, Text } from "../../../foundations";
import Snippet from "../../snippet/Snippet";

// ==================== IMAGES ====================
import flip from "../../../images/taekwondo-nobg.png";

function AboutLanding() {
  const { width } = useWindowDimensions();

  const wordSet1 = ["View my"];
  const wordSet2 = ["life", "work", "skills", "passions", "hobbies", "travels"];

  return (
    <SlideLayout a="center" j="center">
      <Snippet x="25vw" y="21vh" variant="func" name="skills" func="load" />
      <Snippet x="25vw" y="25vh" variant="func" name="passions" func="load" />
      <Snippet x="25vw" y="29vh" variant="func" name="adventures" func="load" />
      <Snippet x="80vw" y="35vh" variant="const" name="birth_year" num="2001" />
      <Snippet x="55vw" y="75vh" variant="if" name="mini_me" value="flip" />
      <Landing
        bg="ABOUTME"
        title="About Me"
        description={
          <Text
            fs={width <= phone ? "sm" : "md"}
            fw="light"
            className="description"
          >
            A dive into my professional and personal sides of life. Somewhere to
            view my journey and skills, but also my passions and adventures. And
            yes, I'm the smaller one.
          </Text>
        }
        image={flip}
        link={
          <Button
            navLink="/projects"
            fs={width <= phone ? "sm" : "md"}
            fw="bold"
            className="hover-underline"
          >
            Peek at Projects Instead!
          </Button>
        }
        wordSet1={wordSet1}
        wordSet2={wordSet2}
      />
    </SlideLayout>
  );
}

export default AboutLanding;
