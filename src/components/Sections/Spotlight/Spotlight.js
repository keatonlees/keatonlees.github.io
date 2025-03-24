import { Link } from "react-router-dom";

import { ProjectList } from "../../../data/ProjectList";
import ColorDots from "../../Flairs/ColorDots";
import ArrowLink from "../../ui/ArrowLink/ArrowLink";
import Text from "../../ui/Text/Text";
import Title from "../../ui/Title/Title";

import "./Spotlight.sass";

function Spotlight() {
  const projects = [ProjectList[0], ProjectList[1], ProjectList[2]];

  return (
    <div className="spotlight">
      {/* ===== FLAIRS ===== */}
      <ColorDots variant="v" className="sl-color-dot" />

      <Title variant="lg">What I've Built</Title>

      <div className="projects">
        {projects.map((project, i) => (
          <Link key={i} className="project" to={`/projects#${project.name}`}>
            <div className="sp-header">
              <div className="sp-number">
                <Text variant="h1">0{i + 1}</Text>
              </div>

              <div className="sp-image-container">
                <img
                  src={project.images[0]}
                  alt={project.name}
                  className="sp-image"
                  loading="lazy"
                />
              </div>

              <div className="sp-name">
                <Text variant="h1">{project.name}</Text>
              </div>
            </div>

            <div className="sp-glance">
              <Text variant="p">{project.glance}</Text>
            </div>
          </Link>
        ))}
      </div>

      <ArrowLink to="/projects" label="View All Projects" variant="button" />
    </div>
  );
}

export default Spotlight;
