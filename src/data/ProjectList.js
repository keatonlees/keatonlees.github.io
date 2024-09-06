// ----- Octo-Do -----
import octodo_cover from "../images/project_octodo_cover.png";
import octodo_selector from "../images/project_octodo_selector.png";
import octodo_overlay from "../images/project_octodo_waving_nobg.png";
import octodo_login from "../images/project_octodo_login.png";

// ----- Jarvis -----
import jarvis_cover from "../images/project_jarvis_cover.png";
import jarvis_selector from "../images/project_jarvis_selector.png";
import jarvis_overlay from "../images/project_jarvis_nobg.png";
import jarvis_screen from "../images/project_jarvis_screen.png";

// ----- Arduino Drone -----
import drone_cover from "../images/project_drone_cover.png";
import drone_selector from "../images/project_drone_selector.png";
import drone_overlay from "../images/project_drone_nobg.png";
import drone_solidworks from "../images/project_drone_body.png";

// ----- rethink -----
import rethink_cover from "../images/project_rethink_cover.png";
import rethink_selector from "../images/project_rethink_selector.png";
import rethink_overlay from "../images/project_rethink_lying_nobg.png";
import rethink_screen from "../images/project_rethink_combo.png";

// ----- puppr -----
import puppr_cover from "../images/project_puppr_cover.png";
import puppr_selector from "../images/project_puppr_selector.png";
import puppr_overlay from "../images/project_puppr_nobg.png";
import puppr_screen from "../images/project_puppr_home.png";

// ----- Donkey Kong -----
import kong_cover from "../images/project_kong_cover.png";
import kong_selector from "../images/project_kong_selector.png";
import kong_overlay from "../images/project_kong_nobg.png";
import kong_screen from "../images/project_kong_game.png";

// ----- FIRST Robotics -----
import first_cover from "../images/project_first_cover.png";
import first_selector from "../images/project_first_selector.png";
import first_overlay from "../images/project_first_nobg.png";
import first_group from "../images/FIRST_robotics_group.jpg";

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

import { BsClipboard2CheckFill, BsHouseGearFill } from "react-icons/bs";
import { TbDrone } from "react-icons/tb";
import { BiSolidBrain, BiSolidDog } from "react-icons/bi";
import { MdVideogameAsset } from "react-icons/md";
import { FaRobot } from "react-icons/fa";

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
    id: 6,
    name: "Octo-Do",
    url: "/octodo",
    timeframe: "May 2021",
    role: "Fullstack Developer",
    type: "Work Project",
    description:
      "Octo-Do is a flexible web-based to-do list application with ability to add, edit and delete task items built in React, CSS and Node.js",
    paragraphs: [
      "Octo-Do runs a React.js frontend using the react-beautiful-dnd library to enable drag-and-drop functionality. The backend is developed using Node.js and Axios for its simplicity paired with a MySQL database hosted using Heroku's ClearDB add-on.",
      "One optimization I performed was reducing the fetch and update time of the individual to-do items by 50%. If I had time to go back to Octo-Do, my first recommendation would be to revamp the user's customization options.",
    ],
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
    image: octodo_login,
    caption: "Octo-Do Login Page",
    icon: <BsClipboard2CheckFill />,
    link: "",
    github: "https://github.com/keatonlees/octo-do",
  },
  {
    id: 5,
    name: "Jarvis",
    url: "/jarvis",
    timeframe: "March 2021",
    role: "Fullstack Developer",
    type: "Personal Project",
    description:
      "A personal smart home and clock designed, printed and programmed using a Raspberry Pi 4 and a Flask server",
    paragraphs: [
      'Taking inspiration from Ironman\'s Jarvis AI and Google Home implementations, I decided to attempt my own version. The Raspberry Pi 4 runs an HTML frontend with a Flask server for data and Google Home queries. Initially, I had setup a custom wake-word, "Jarvis", but the library being used was deprecated.',
      "The entire setup was housed in a 3D-printed enclosure I designed along with an audio amplifier and 2 speakers ripped from an old smart home. The project was successful and I would love to revisit a V2 at some point!",
    ],
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
    icon: <BsHouseGearFill />,
    image: jarvis_screen,
    caption: "Jarvis Home Screen",
    link: "",
    github: "",
  },
  {
    id: 4,
    name: "Drone",
    url: "/drone",
    timeframe: "February 2021",
    role: "Hardware Developer",
    type: "Personal Project",
    description:
      "A quadcopter constructed using an Arduino, gyroscope and radio modules with a 3D-printed body",
    paragraphs: [
      "I have always loved drones and FPV flights. Thus, I wanted to see if it was possible to build my own quadcopter. I 3D-printed the body in 6 parts with cutouts for motors, speed controllers, and 2 Arduino Nanos; one Nano would act as the flight controller, and the other would be the receiver.",
      "There were multiple problems with my implementation. Firstly, the weight to power ratio of the body and motors was not enough for the drone to sustain flight. Secondly, since I had build my own controller, the transmission speed and distance was very limited.",
    ],
    tags: ["Hardware Development", "Robotics", "3D-Printing"],
    toolList: ["Arduino C", "3D-Printing", "Solidworks"],
    toolLogos: [arduino, printing, solidworks],
    cover: drone_cover,
    selector: drone_selector,
    overlay: drone_overlay,
    icon: <TbDrone />,
    image: drone_solidworks,
    caption: "Solidworks Drone Model",
    link: "",
    github: "",
  },
  {
    id: 3,
    name: "Rethink",
    url: "/rethink",
    timeframe: "September 2020",
    role: "Designer",
    type: "Hackathon Project",
    description:
      "An AdobeXD mobile application to introduce high school students to the world of design",
    paragraphs: [
      "As part of the Adobe Creative Jams Designathon, myself and two others built Rethink. Rethink is a digital mobile application that introduces high school adolescents to design concepts through gamification.",
      "There are multiple features of Rethink, including Education, Events, Chats, and Community. Notably, the education section gamifies learning into different games and topics, while the events section suggests nearby hosted events.",
    ],
    tags: ["Prototyping", "UI/UX Design"],
    toolList: ["AdobeXd", "Figma"],
    toolLogos: [adobexd, figma],
    cover: rethink_cover,
    selector: rethink_selector,
    overlay: rethink_overlay,
    icon: <BiSolidBrain />,
    image: rethink_screen,
    caption: "Learn Screen (Left), Events Screen (Right)",
    link: "https://xd.adobe.com/view/f0025240-e2f4-45ee-80b6-5dcc01971ae3-a551/screen/03850abc-4097-4d6e-8562-99a8267bb38e/?fullscreen=",
    github: "",
  },
  {
    id: 2,
    name: "Puppr",
    url: "/puppr",
    timeframe: "May 2020",
    role: "Software Developer",
    type: "Hackathon Project",
    description:
      "A web-based tinder-like application to connect socially isolated used with dogs up for adoption built using HTML, CSS and Javascript",
    paragraphs: [
      "Puppr was built as TOHacks Hackathon Project. During Covid, we saw a need to connect socially isolated people with dogs and puppies who were in nearby adoption shelters.",
      "The application scrapes information from local adoption sites and displays it in a swipe left, swipe right fashion for users to match with dogs. Information like name, age, breed and a personality description is presented for each dog. If a user finds a good fit, contact info is provided so they can get in touch with the shelter.",
    ],
    tags: ["Frontend Development", "Backend Development"],
    toolList: ["Python", "Flask", "HTML5", "CSS3", "Javascript", "Firebase"],
    toolLogos: [python, flask, html, css, js, firebase],
    cover: puppr_cover,
    selector: puppr_selector,
    overlay: puppr_overlay,
    icon: <BiSolidDog />,
    image: puppr_screen,
    caption: "Puppr Home Screen",
    link: "",
    github: "",
  },
  {
    id: 1,
    name: "Kong",
    url: "/kong",
    timeframe: "April 2019",
    role: "Software Developer",
    type: "Personal Project",
    description:
      "A recreation of the popular 1980's Donkey Kong arcade game using Java, JGEngine and a gyroscope",
    paragraphs: [
      "Using Java and JGEngine, I was able to entirely recreate the first level of the 1981 Donkey Kong Platformer. The recreation included high-definition sprites, original music, accurate sound effects and accessible keyboard controls.",
      "Addtionally, as a challenge, gyroscopic controls were implemented. These controls allows the user to control the game using motion controls; tilting left or right would move the character in the corresponding direction and tilting up or down would subsequently jump or crouch.",
    ],
    tags: ["Game Development", "Hardware Development"],
    toolList: ["Java", "HTML5"],
    toolLogos: [java, html],
    cover: kong_cover,
    selector: kong_selector,
    overlay: kong_overlay,
    icon: <MdVideogameAsset />,
    image: kong_screen,
    caption: "Game Ending Recreation",
    link: "",
    github: "",
  },
  // {
  //   id: 1,
  //   name: "FIRST",
  //   url: "/first",
  //   timeframe: "2018",
  //   role: "Software/Hardware Developer",
  //   type: "Club Project",
  //   description:
  //     "As co-captain of my high school FIRST robotics team, I led the students through the design, build and testing process",
  //   paragraphs: [],
  //   tags: ["Autonomous Development", "Hardware Development", "Robotics"],
  //   toolList: ["C++", "Java"],
  //   toolLogos: [cplusplus, java],
  //   cover: first_cover,
  //   selector: first_selector,
  //   overlay: first_overlay,
  //   icon: <FaRobot />,
  //   image: first_group,
  //   caption: "2018 FIRST Robotics Team",
  //   link: "",
  //   github: "",
  // },
];
