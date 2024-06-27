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
    year: 2023,
    title: "Software Developer Intern",
    company: "CanvassAI",
    link: "https://www.canvass.io/",
    description: [
      "Worked on adding numerous data analysis features and optimizing analysis methods for Canvass' Industrial AI platform",
      "Spearheaded 2 frontend features to enhance data readability for users by 40% using Typescript and ChakraUI",
      "Restructured end-to-end HTTPS requests that updated Redux stores and states decreasing data fetch time by 30%",
      "Ensured error-free code and optimal implementation using Jest and React Testing Library with 100% testing coverage",
      "Deployed completed components and delivered comprehensive feature demos to stakeholders and upper management",
      "Unified all custom React components in the companywide design system to establish consistent user experiences",
    ],
    toolLogos: [react, js, html, css, python, redux, mongodb],
  },
  {
    id: 1,
    year: 2022,
    title: "Full-stack Developer Intern",
    company: "PiinPoint",
    link: "https://www.piinpoint.com/",
    description: [
      "Launched Sitematch, an extensive feature that streamlines property analysis and 3rd party realtor communication",
      "Contributed 10+ React components into the reusable companywide library for PiinPoint's location intelligence platform",
      "Implemented eye-catching interfaces that increased retention time by 25% for clients including Sobeys and Tim Hortons",
      "Refactored 90% of legacy code by migrating stores and actions from Reflux to Redux, significantly reducing tech debt",
      "Developed WCAG 2.0 compliant elements by collaborating with designers, resulting in 100% positive feedback from users",
    ],
    toolLogos: [react, js, html, css, python, redux, mongodb],
  },
  {
    id: 2,
    year: 2022,
    title: "Software Engineer Intern",
    company: "Jamlabs Data Science",
    link: "https://www.jamlabs.com/",
    description: [
      "Drove the development of jShop, an expansive E-commerce application for business professionals to buy and sell data",
      "Revamped 20+ React components, hooks and Redux stores, increasing data fetch efficiency by 75%",
      "Incorporated Stripe API to reduce transaction times and introduce automatic invoicing by 99% (from 2+ days to 30 mins)",
      "Tracked user experience and process flows by integrating Google Analytics to improve page views by 33%",
    ],
    toolLogos: [react, js, html, css, nodejs, redux, aws],
  },
  {
    id: 3,
    year: 2021,
    title: "Full-stack Developer Intern",
    company: "Self Employed",
    link: "",
    description: [
      "Architected a flexible to-do application using React, Node.js and MySQL, increasing user productivity by 25%",
      "Iteratively improved MySQL database queries to be dynamic, optimizing element load times by 50%",
      "Offered more user customization and interaction by implementing drag-and-drop controls using React Beautiful DND",
    ],
    toolLogos: [react, js, html, css, nodejs, mysql, firebase, heroku],
  },
  {
    id: 4,
    year: 2020,
    title: "Systems and Controls Engineer Intern",
    company: "Ballard Power Systems",
    link: "https://www.ballard.com/",
    description: [
      "Maintained sensor database of over 300 fuel cell modules by constructing Python scripts to automate updating processes",
      "Responsible for assembling and testing over 35 unique components for use in prototype fuel cells",
    ],
    toolLogos: [python, arduino, raspi, printing],
  },
  {
    id: 5,
    year: 2020,
    title: "Systems Engineer Intern",
    company: "Ballard Power Systems",
    link: "https://www.ballard.com/",
    description: [
      "Created automated hydrogen fuel cells scripts using Python and microcontrollers to decrease testing times by 40%",
      "Sourced fuel cell components and electronic equipment worth over $100,000 for the department",
    ],
    toolLogos: [python, arduino, raspi, printing],
  },
];
