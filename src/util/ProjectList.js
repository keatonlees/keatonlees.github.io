// ----- Octo-Do -----
import octodo_cover from "../images/project_octodo_cover.png";
import octodo_selector from "../images/project_octodo_selector.png";
import octodo_overlay from "../images/project_octodo_waving_nobg.png";
import octodo_login from "../images/project_octodo_login.png";
import octodo_home from "../images/project_octodo_home.png";

// ----- Jarvis -----
import jarvis_cover from "../images/project_jarvis_cover.png";
import jarvis_selector from "../images/project_jarvis_selector.png";
import jarvis_overlay from "../images/project_jarvis_nobg.png";
import jarvis_solidworks from "../images/project_jarvis_body.png";
import jarvis_screen from "../images/project_jarvis_screen.png";

// ----- Arduino Drone -----
import drone_cover from "../images/project_drone_cover.png";
import drone_selector from "../images/project_drone_selector.png";
import drone_overlay from "../images/project_drone_nobg.png";
import drone_solidworks from "../images/project_drone_body.png";
import drone_arm from "../images/project_drone_arm.png";

// ----- rethink -----
import rethink_cover from "../images/project_rethink_cover.png";
import rethink_selector from "../images/project_rethink_selector.png";
import rethink_overlay from "../images/project_rethink_waving_nobg.png";

// ----- puppr -----
import puppr_cover from "../images/project_puppr_cover.png";
import puppr_selector from "../images/project_puppr_selector.png";
import puppr_overlay from "../images/project_puppr_nobg.png";

// ----- Donkey Kong -----
import kong_cover from "../images/project_kong_cover.png";
import kong_selector from "../images/project_kong_selector.png";
import kong_overlay from "../images/project_kong_nobg.png";

// ----- FIRST Robotics -----
import first_cover from "../images/project_first_cover.png";
import first_selector from "../images/project_first_selector.png";
import first_overlay from "../images/project_first_nobg.png";

// ----- TOOLS -----
import adobexd from "../images/tool-adobexd.png";
import arduino from "../images/tool-arduino.png";
import cplusplus from "../images/tool-cplusplus.png";
import css from "../images/tool-css.png";
import figma from "../images/tool-figma.png";
import firebase from "../images/tool-firebase.png";
import flask from "../images/tool-flask.png";
import heroku from "../images/tool-heroku.png";
import html from "../images/tool-html.png";
import java from "../images/tool-java.png";
import js from "../images/tool-js.png";
import mysql from "../images/tool-mysql.png";
import nodejs from "../images/tool-nodejs.png";
import printing from "../images/tool-printing.png";
import python from "../images/tool-python.png";
import raspi from "../images/tool-raspi.png";
import react from "../images/tool-react.png";
import solidworks from "../images/tool-solidworks.png";

/*
List of tags:
- Frontend Development
- Backend Development
- Game Development
- Autonomous Development
- UI/UX Design
- Prototyping
- Robotics
- Hardware Development
- 3D-Printing
*/

export const ProjectList = [
  // {
  //   id: 8,
  //   name: "Chromation",
  //   url: "/chromation",
  //   timeframe: "July 2021",
  //   role: "Game Developer",
  //   type: "Personal Project",
  //   description:
  //     "Octo-Do is a flexible web-based to-do list application with ability to add, edit and delete task items built in React, CSS and Node.js",
  //   toolList: [
  //     "Unity C#",
  //   ],
  //   toolLogos: [unity],
  //   cover: chromation_cover,
  //   selector: chromation_selector,
  //   overlay: chromation_overlay,
  //   images: [],
  //   link: "",
  //   github: "",
  // },
  {
    id: 7,
    name: "Octo-Do",
    url: "/octodo",
    timeframe: "May 2021",
    role: "Fullstack Developer",
    type: "Work Project",
    description:
      "Octo-Do is a flexible web-based to-do list application with ability to add, edit and delete task items built in React, CSS and Node.js",
    tags: ["Frontend Development", "Backend Development"],
    toolList: [
      "ReactJS",
      "Javascript",
      "HTML5",
      "CSS3",
      "Node.js",
      "MySQL",
      "Firebase",
      "Heroku",
    ],
    toolLogos: [react, js, html, css, nodejs, mysql, firebase, heroku],
    cover: octodo_cover,
    selector: octodo_selector,
    overlay: octodo_overlay,
    images: [octodo_login, octodo_home],
    link: "https://octo-do.herokuapp.com/login",
    github: "https://github.com/keatonlees/octo-do",
  },
  {
    id: 6,
    name: "Jarvis",
    url: "/jarvis",
    timeframe: "March 2021",
    role: "Fullstack Developer",
    type: "Personal Project",
    description:
      "A personal smart home and clock designed, printed and programmed using a Raspberry Pi 4 and a Flask server",
    tags: ["Frontend Development", "Hardware Development", "3D-Printing"],
    toolList: [
      "Python",
      "Flask",
      "HTML5",
      "CSS3",
      "Javascript",
      "Raspberry Pi",
      "3D-Printing",
    ],
    toolLogos: [python, flask, html, css, js, raspi, printing],
    cover: jarvis_cover,
    selector: jarvis_selector,
    overlay: jarvis_overlay,
    images: [jarvis_screen, jarvis_solidworks],
    link: "",
    github: "",
  },
  {
    id: 5,
    name: "Arduino Drone",
    url: "/drone",
    timeframe: "February 2021",
    role: "Hardware Developer",
    type: "Personal Project",
    description:
      "A quadcopter constructed using an Arduino, gyroscope and radio modules with a 3D-printed body",
    tags: ["Hardware Development", "Robotics", "3D-Printing"],
    toolList: ["Arduino C", "3D-Printing", "Solidworks"],
    toolLogos: [arduino, printing, solidworks],
    cover: drone_cover,
    selector: drone_selector,
    overlay: drone_overlay,
    images: [drone_solidworks, drone_arm],
    link: "",
    github: "",
  },
  {
    id: 4,
    name: "Rethink",
    url: "/rethink",
    timeframe: "September 2020",
    role: "Designer",
    type: "Hackathon Project",
    description:
      "An AdobeXD mobile application to introduce high school students to the world of design",
    tags: ["Prototyping", "UI/UX Design"],
    toolList: ["AdobeXd", "Figma"],
    toolLogos: [adobexd, figma],
    cover: rethink_cover,
    selector: rethink_selector,
    overlay: rethink_overlay,
    images: [],
    link: "",
    github: "",
  },
  {
    id: 3,
    name: "Puppr",
    url: "/puppr",
    timeframe: "May 2020",
    role: "Software Developer",
    type: "Hackathon Project",
    description:
      "A web-based tinder-like application to connect socially isolated used with dogs up for adoption built using HTML, CSS and Javascript",
    tags: ["Frontend Development", "Backend Development"],
    toolList: ["Python", "Flask", "HTML5", "CSS3", "Javascript", "Firebase"],
    toolLogos: [python, flask, html, css, js, firebase],
    cover: puppr_cover,
    selector: puppr_selector,
    overlay: puppr_overlay,
    images: [],
    link: "",
    github: "",
  },
  {
    id: 2,
    name: "Donkey Kong",
    url: "/kong",
    timeframe: "April 2019",
    role: "Software Developer",
    type: "Personal Project",
    description:
      "A recreation of the popular 1980's Donkey Kong arcade game using Java, JGEngine and a gyroscope",
    tags: ["Game Development", "Hardware Development"],
    toolList: ["Java", "HTML5"],
    toolLogos: [java, html],
    cover: kong_cover,
    selector: kong_selector,
    overlay: kong_overlay,
    images: [],
    link: "",
    github: "",
  },
  {
    id: 1,
    name: "FIRST Robotics",
    url: "/first",
    timeframe: "2019",
    description:
      "As co-captain of my high school FIRST robotics team, I led the students through the design, build and testing process",
    tags: ["Autonomous Development", "Hardware Development", "Robotics"],
    toolList: ["C++", "Java"],
    toolLogos: [cplusplus, java],
    cover: first_cover,
    selector: first_selector,
    overlay: first_overlay,
    images: [],
    link: "",
    github: "",
  },
];
