import { Link } from "react-router-dom";

import ArrowLink from "../../ui/ArrowLink/ArrowLink";
import IconBadge from "../../ui/IconBadge/IconBadge";
import Text from "../../ui/Text/Text";
import Title from "../../ui/Title/Title";

import "./Dashboard.sass";

function Dashboard() {
  const skills = [
    "HTML5",
    "CSS3",
    "JavaScript",
    "React",
    "Node.js",
    "HTML5",
    "CSS3",
    "JavaScript",
    "React",
    "Node.js",
  ];

  const experiences = [
    {
      company: "Souvenr",
      title: "Founder",
      timeframe: "Dec 2024 - Present",
      glance: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    },
    {
      company: "GetWrapped",
      title: "Founder",
      timeframe: "Sept 2024 - Present",
      glance: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    },
    {
      company: "Canvass Analytics Inc.",
      title: "Software Developer Intern",
      timeframe: "Apr - Aug 2023",
      glance: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    },
  ];

  return (
    <div className="dashboard">
      <div className="dashboard-left">
        {/* ===== ABOUT ===== */}
        <div className="about">
          <Title variant="lg">About Me</Title>
          <Text variant="p" className="about-text">
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
        </div>

        {/* ===== SKILLS ===== */}
        <div className="skills">
          <Title variant="lg">Notable Skills</Title>

          <div className="skill-list">
            {skills.map((skill, i) => {
              return <IconBadge key={i} text={skill} />;
            })}
          </div>
        </div>

        <ArrowLink to="/about" label="More About Me" variant="button" />
      </div>

      <div className="dashboard-right">
        <Title variant="lg">Recent Experiences</Title>

        {/* ===== EXPERIENCES ===== */}
        <div className="db-experiences">
          {experiences.map((experience, i) => {
            return (
              <div className="db-experience" key={i}>
                <Text variant="h1" className="db-company">
                  {experience.company}
                </Text>
                <Text variant="h2" className="db-title">
                  {experience.title} {experience.timeframe}
                </Text>
                <Text variant="p" className="db-glance">
                  {experience.glance}
                </Text>
              </div>
            );
          })}
        </div>

        <ArrowLink to="/about" label="View All Experiences" variant="button" />
      </div>
    </div>
  );
}

export default Dashboard;
