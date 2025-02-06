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
      company: "Canvass Analytics Inc.",
      title: "Software Developer",
      year: "2023",
      link: "https://www.canvass.io/",
    },
    {
      company: "PiinPoint",
      title: "Full-Stack Developer",
      year: "2022",
      link: "https://www.piinpoint.com/",
    },
    {
      company: "Jamlabs Data Science",
      title: "Software Developer",
      year: "2022",
      link: "https://www.jamlabs.com/",
    },
  ];

  const frontend_skills = ["TypeScript", "React", "Next.js"];
  const backend_skills = ["Python", "Node.js", "MongoDB"];
  const other_skills = ["Git", "AWS", "Docker"];

  return (
    <SlideLayout a="center" j="center">
      <div className="ha-container">
        <div className="ha-left">
          <Text
            fs={width <= laptop ? "sm" : "md"}
            fw="light"
            className="ha-left-text"
          >
            Hey, I'm Keaton! A full-stack developer with a strong foundation in
            both frontend and backend technologies. I recently completed my BASc
            in Systems Design Engineering at the University of Waterloo, where I
            honed my skills in building impactful solutions to unique problems.
            I have hands on experience with React, Next.js, TypeScript and
            Python. I've contributed to building dynamic applications,
            streamlining workflows, and creating engaging interfaces. I'm
            passionate about collaborating with others, solving complex
            challenges, and continuously learning to improve my technical and
            leadership skills.
          </Text>
          <Button navLink="/about" fs={width <= phone ? "sm" : "md"} fw="bold">
            More about me!
          </Button>
        </div>

        <div className="ha-right">
          <div className="ha-top">
            <Text className="ha-top-title">Experiences</Text>
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
