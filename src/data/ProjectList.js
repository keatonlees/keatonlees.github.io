import gw1 from "../images/project_getwrapped_home.png";
import gw2 from "../images/project_getwrapped_page_1.png";
import gw3 from "../images/project_getwrapped_page_2.png";
import jarvis1 from "../images/project_jarvis_body.png";
import jarvis2 from "../images/project_jarvis_screen.png";
import octodo1 from "../images/project_octodo_home.png";
import octodo2 from "../images/project_octodo_login.png";
import rbb from "../images/project_rbb_layout.png";
import souvenr1 from "../images/project_souvenr_home.png";

// TODO: rewrite glance and points
export const ProjectList = [
  // {
  //   name: "HikerAI",
  //   glance: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  //   points: [
  //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  //   ],
  //   tech: ["React", "Node.js", "MongoDB"],
  //   images: ["image1", "image2", "image3"],
  //   link: null,
  //   github: null,
  //   bgColor1: "blue",
  //   bgColor2: "skyblue",
  // },
  {
    name: "Souvenr",
    glance:
      "A cross-platform travel app that helps users plan trips and get recommendations",
    points: [
      "Designed for travelers, Souvenr is a cross-platform travel app enabling itinerary planning, personalized recommendations, and digital souvenir collection. ",
      "Built with React Native, Python, AWS DynamoDB & S3, and Firebase, the app streamlines trip organization and collaboration. Future improvements could enhance recommendation algorithms and offline accessibility.",
    ],
    tech: ["React Native", "Python", "Flask", "DynamoDB", "S3", "Firebase"],
    images: [souvenr1],
    link: null,
    github: null,
    bgColor1: "#D3D3D3",
    bgColor2: "#1DD1A1",
  },
  {
    name: "react-bento-box",
    glance:
      "A lightweight NPM library for creating customizable bento box layouts in React",
    points: [
      "Bento Box UI is a type of frontend layout that utilizes the full screen and divides into sections, similar to a bento box.",
      "react-bento-box allows for users to create bento box components and have the flexibility to position content anywhere they like. It is built using React and TypeScript, bundled with Rollup and pushed to the NPM website.",
    ],
    tech: ["React", "TypeScript", "NPM"],
    images: [rbb],
    link: "https://www.npmjs.com/package/react-bento-box",
    github: "https://github.com/keatonlees/react-bento-box",
    bgColor1: "#ADB2D3",
    bgColor2: "#FF6B6C",
  },
  {
    name: "GetWrapped",
    glance:
      "A full-stack web application that lets users create and share personalized Spotify Wrapped-like experiences",
    points: [
      "Get Wrapped is a web application that lets users make custom Wraps for couples, trips, and more. Users must login to create and edit, but anyone can view a Wrap given a personalized link.",
      "The application leverages Next.js and TypeScript for the frontend, MongoDB for data storage, AWS S3 for media management and Firebase for authentication.",
    ],
    tech: ["Next.js", "TypeScript", "MongoDB", "S3", "Firebase"],
    images: [gw2, gw1, gw3],
    link: "https://getwrapped.vercel.app/",
    github: "https://github.com/keatonlees/getwrapped",
    bgColor1: "#D14545",
    bgColor2: "#FF9933",
  },
  {
    name: "Octo-Do",
    glance:
      "A flexible web-based to-do list application with ability to add, edit and delete task items",
    points: [
      "Octo-Do features a React.js frontend with the react-beautiful-dnd library for smooth drag-and-drop functionality. The backend, built with Node.js and Axios for simplicity, integrates a MySQL database hosted via Heroku's ClearDB add-on.",
      "One key optimization reduced the fetch and update time of individual to-do items by 50%. If I revisited Octo-Do, my top priority would be enhancing user customization options.",
    ],
    tech: ["React", "JavaScript", "Node.js", "MySQL", "Firebase"],
    images: [octodo2, octodo1],
    link: null,
    github: "https://github.com/keatonlees/octo-do",
    bgColor1: "#6247AA",
    bgColor2: "#A594F9",
  },
  {
    name: "Jarvis",
    glance:
      "A smart home designed, printed and programmed using a RaspberryPi and Flask",
    points: [
      "Drawing inspiration from Ironman's Jarvis AI and Google Home, I built my own version using a Raspberry Pi 4 with an HTML frontend and Flask server for data and queries. I initially set up a custom wake-word, 'Jarvis,' but the library was deprecated.",
      "The entire setup was housed in a 3D-printed enclosure I designed along with an audio amplifier and 2 speakers ripped from an old smart home. The project was successful and I would love to revisit a V2 at some point!",
    ],
    tech: ["Python", "Flask", "HTML5", "JavaScript", "RasPi"],
    images: [jarvis1, jarvis2],
    link: null,
    github: null,
    bgColor1: "#66023c",
    bgColor2: "#cd1c18",
  },
];
