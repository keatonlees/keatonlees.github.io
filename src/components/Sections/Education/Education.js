import Text from "../../ui/Text/Text";
import Title from "../../ui/Title/Title";

import "./Education.sass";

function Education() {
  return (
    <div className="education">
      <Title variant="lg">Education + Certifications</Title>

      <div className="item">
        <Text variant="h1" className="title">
          University of Waterloo <span>Sept 2019 - June 2024</span>
        </Text>
        <Text variant="h1" className="title">
          Systems Design Engineering (BASc), Computing Option
        </Text>
        <Text variant="p" className="subtitle">
          Algorithm Design and Analysis, Data Structures and Algorithms,
          Fundamentals of Computational Intelligence
        </Text>
      </div>

      <div className="item">
        <Text variant="h1" className="title">
          University of Toronto <span>Jan 2025 - Present</span>
        </Text>
        <Text variant="h1" className="title">
          Artificial Intelligence Certification, Continuing Studies
        </Text>
        <Text variant="p" className="subtitle">
          Machine Learning, Deep Learning, Intelligent Agents
        </Text>
      </div>
    </div>
  );
}

export default Education;
