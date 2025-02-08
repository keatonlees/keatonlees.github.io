import ArrowLink from "../../ui/ArrowLink/ArrowLink";
import Text from "../../ui/Text/Text";
import Title from "../../ui/Title/Title";

import "./Spotlight.sass";

function Spotlight() {
  const projects = [
    {
      name: "HikerAI",
      glance: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    },
    {
      name: "rbb",
      glance: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    },
    {
      name: "Jarvis",
      glance: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    },
  ];

  return (
    <div className="spotlight">
      <Title variant="lg" mode="dark">
        What I'm Building
      </Title>

      <div className="projects">
        {projects.map((project, i) => (
          <div key={i} className="project">
            <div className="number">
              <Text variant="h1">0{i + 1}</Text>
            </div>

            <div className="image">test</div>

            <div className="name">
              <Text variant="h1">{project.name}</Text>
            </div>

            <div className="glance">
              <Text variant="p">{project.glance}</Text>
            </div>
          </div>
        ))}
      </div>

      <ArrowLink to="/projects" label="View All Projects" variant="button" />
    </div>
  );
}

export default Spotlight;
