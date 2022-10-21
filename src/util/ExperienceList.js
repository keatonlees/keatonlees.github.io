// ----- TOOLS -----
import arduino from "../images/tool-arduino.png";
import aws from "../images/tool-aws.png";
import css from "../images/tool-css.png";
import firebase from "../images/tool-firebase.png";
import flask from "../images/tool-flask.png";
import heroku from "../images/tool-heroku.png";
import html from "../images/tool-html.png";
import java from "../images/tool-java.png";
import js from "../images/tool-js.png";
import mongodb from "../images/tool-mongodb.png";
import mysql from "../images/tool-mysql.png";
import nodejs from "../images/tool-nodejs.png";
import printing from "../images/tool-printing.png";
import python from "../images/tool-python.png";
import raspi from "../images/tool-raspi.png";
import react from "../images/tool-react.png";
import redux from "../images/tool-redux.png";
import solidworks from "../images/tool-solidworks.png";

export const ExperienceList = [
  {
    id: 0,
    year: 2022,
    title: "Full-stack Engineer",
    company: "PiinPoint",
    link: "https://www.piinpoint.com/",
    description: [
      "Launched multiple features to increase market adaptability for major clients including Sobeys, LCBO, and Tim Hortons",
      "Implemented numerous interfaces and enhanced user experience by making elements responsive in React",
      "Optimized code logic by upgrading current libraries, stores and actions from Reflux to Redux",
      "Updated popups and modals by modernizing fonts, images and layouts with 100% positive feedback from testing users",
    ],
    toolLogos: [react, js, html, css, python, redux, mongodb],
  },
  {
    id: 1,
    year: 2022,
    title: "Software Engineer",
    company: "Jamlabs Data Science",
    link: "https://www.jamlabs.com/",
    description: [
      "Launched jShop, a web-based platform for business and financial professionals to buy and sell big data",
      "Optimized numerous React components and Redux stores, increasing data efficiency by 75%",
      "Implemented Stripe API to decrease transaction times and automatic invoicing by 99%",
      "Tracked user experience and improved application process flows by 36% by including Google Analytics",
    ],
    toolLogos: [react, js, html, css, nodejs, redux, aws],
  },
  {
    id: 2,
    year: 2021,
    title: "Full-stack Engineer",
    company: "Self-employed Company",
    link: "",
    description: [
      "Architectured a flexible to-do list application using React, Node.js and MySQL, increasing productivity by 28%",
      "Designed and developed a modern list layout including item drag and drop to expand user customization",
      "Rewrote database requests to be individually dynamic and selective, optimizing item loading times by 50%",
    ],
    toolLogos: [react, js, html, css, nodejs, mysql, firebase, heroku],
  },
  {
    id: 3,
    year: 2020,
    title: "Systems and Controls Engineer",
    company: "Ballard Power Systems",
    link: "https://www.ballard.com/",
    description: [
      "Maintained sensor database of over 300 fuel cell modules by constructing Python scripts to automate updating processes",
      "Responsible for assembling and testing over 35 unique components for use in prototype fuel cells",
    ],
    toolLogos: [python, arduino, raspi, printing],
  },
  {
    id: 4,
    year: 2020,
    title: "Systems Engineer",
    company: "Ballard Power Systems",
    link: "https://www.ballard.com/",
    description: [
      "Created automated hydrogen fuel cells scripts using Python and microcontrollers to decrease testing times by 40%",
      "Sourced fuel cell components and electronic equipment worth over $100,000 for the department",
    ],
    toolLogos: [python, arduino, raspi, printing],
  },
];
