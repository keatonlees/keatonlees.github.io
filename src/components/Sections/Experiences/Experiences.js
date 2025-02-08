import Text from "../../ui/Text/Text";
import Title from "../../ui/Title/Title";

import "./Experiences.sass";

function Experiences() {
  const experiences = [
    {
      company: "Souvenr",
      title: "Founder",
      timeframe: "Dec 2024 - Present",
      glance: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      points: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      ],
    },
    {
      company: "GetWrapped",
      title: "Founder",
      timeframe: "Sept 2024 - Present",
      glance: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      points: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      ],
    },
  ];

  return (
    <div className="experiences">
      <Title variant="lg" mode="dark">
        My Experiences
      </Title>

      <div className="experiences-container">
        {experiences.map((experience, i) => (
          <div key={i} className="experience">
            <Text variant="h1" className="company">
              {experience.company}
            </Text>
            <Text variant="h2" className="title">
              {experience.title}
            </Text>
            <div className="timeframe">{experience.timeframe}</div>
            <div className="glance">{experience.glance}</div>
            <ul className="points">
              {experience.points.map((point, j) => (
                <li key={j}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experiences;
