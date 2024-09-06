// ==================== UTIL ====================
import { SlideLayout, Text, Button } from "../../../foundations";
import useWindowDimensions from "../../../util/WindowDimensions";
import { laptop, phone } from "../../../foundations/constants/Breakpoints";

// ==================== STYLES ====================
import "./HomeAbout.sass";

function HomeAbout() {
  const { width } = useWindowDimensions();

  const experiences = [
    {
      company: "CanvassAI",
      title: "Software Developer Intern",
      year: "2023",
      link: "https://www.canvass.io/",
    },
    {
      company: "PiinPoint",
      title: "Full-Stack Developer Intern",
      year: "2022",
      link: "https://www.piinpoint.com/",
    },
    {
      company: "Jamlabs Data Science",
      title: "Software Developer Intern",
      year: "2022",
      link: "https://www.jamlabs.com/",
    },
  ];

  const frontend_skills = ["JavaScript", "TypeScript", "React.js"];
  const backend_skills = ["Python", "Node.js", "Java"];
  const other_skills = ["Git", "Jest", "AWS"];

  return (
    <SlideLayout a="center" j="center">
      <div className="ha-container">
        <div className="ha-left">
          <Text
            fs={width <= laptop ? "sm" : "md"}
            fw="light"
            className="ha-left-text"
          >
            Hi! I'm Keaton! I'm a Systems Design Engineering Graduate from the
            University of Waterloo. Previously, I've helped developed apps at
            CanvassAI, PiinPoint, and Jamlabs Data Science. Outside of work, you
            can creating fun projects using new technologies. On top of that, I
            enjoy gymming, playing volleyball, and researching upcoming tech.
          </Text>
          <Button navLink="/about" fs={width <= phone ? "sm" : "md"} fw="bold">
            More about me!
          </Button>
        </div>

        <div className="ha-right">
          <div className="ha-top">
            <Text className="ha-top-title">Recent Experiences</Text>
            <div className="ha-top-experiences">
              {experiences.map((experience, i) => {
                return (
                  <div className="experience" key={i}>
                    <Text fs="sm" className="experience-text">
                      {experience.year}
                    </Text>
                    <Text fs="sm" fw="bold" className="experience-text">
                      {experience.title}
                    </Text>

                    <Text fs="sm" className="experience-text">
                      <a
                        href={experience.link}
                        target="_blank"
                        rel="noreferrer"
                        className="experience-link"
                      >
                        {experience.company}
                      </a>
                    </Text>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="ha-bottom">
            <Text className="ha-bottom-title">Notable Skills</Text>
            <div className="ha-bottom-skills">
              <div className="skill">
                <Text fs="sm" fw="bold" className="skill-title">
                  Frontend Skills
                </Text>
                <div className="skill-group">
                  {frontend_skills.map((skill, i) => {
                    return (
                      <Text fs="sm" className="skill-text">
                        {skill}
                      </Text>
                    );
                  })}
                </div>
              </div>
              <div className="skill">
                <Text fs="sm" fw="bold" className="skill-title">
                  Backend Skills
                </Text>
                <div className="skill-group">
                  {backend_skills.map((skill, i) => {
                    return (
                      <Text fs="sm" className="skill-text">
                        {skill}
                      </Text>
                    );
                  })}
                </div>
              </div>
              <div className="skill">
                <Text fs="sm" fw="bold" className="skill-title">
                  Other Skills
                </Text>
                <div className="skill-group">
                  {other_skills.map((skill, i) => {
                    return (
                      <Text fs="sm" className="skill-text">
                        {skill}
                      </Text>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}

export default HomeAbout;
