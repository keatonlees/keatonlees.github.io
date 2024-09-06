// ----- TOOLS -----
import arduino from "../images/tool-arduino.png";
import aws from "../images/tool-aws.png";
import cplusplus from "../images/tool-cplusplus.png";
import css from "../images/tool-css.png";
import firebase from "../images/tool-firebase.png";
// import flask from "../images/tool-flask.png";
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
// import solidworks from "../images/tool-solidworks.png";

export const ExperienceList = {
  2023: [
    {
      company: "CanvassAI",
      title: "Software Developer Intern",
      link: "https://www.canvass.io/",
      description: [
        "Implemented numerous data analysis features and optimized analysis methods for Canvass' Industrial AI platform",
        "Spearheaded 2 frontend features to improve data readability for users by 30% using Typescript and ChakraUI",
        "Created end-to-end HTTPS requests that updated Redux stores and states, decreasing data fetch time by 18%",
        "Achieved 100% testing coverage to ensure error-free code and optimal implementation using Jest and React Testing Library",
        "Unified 10+ custom React components to adhere to the company design system for consistent user experience",
        "Delivered comprehensive demos of upcoming features to stakeholders and upper management",
      ],
      toolLogos: [react, js, html, css],
    },
  ],
  2022: [
    {
      company: "PiinPoint",
      title: "Full-Stack Developer Intern",
      link: "https://www.piinpoint.com/",
      description: [
        "Launched Sitematch, an extensive feature that streamlines property analysis and 3rd party realtor communication",
        "Contributed 10+ React components into the reusable company-wide library for PiinPoint's location intelligence platform",
        "Implemented eye-catching interfaces that increased retention time by 25% for clients including Sobeys and Tim Hortons",
        "Reduced 90% of tech debt by refactoring legacy code and migrating stores and actions from Reflux to Redux",
        "Developed WCAG 2.0 compliant elements by collaborating with designers, resulting in 100% positive feedback from users",
      ],
      toolLogos: [react, js, html, css, python, redux, mongodb],
    },
    {
      company: "Jamlabs Data Science",
      title: "Software Engineer Intern",
      link: "https://www.jamlabs.com/",
      description: [
        "Drove the development of jShop, an expansive E-commerce application for business professionals to buy and sell data",
        "Revamped 20+ React components, hooks and Redux stores, increasing data fetch efficiency by 20%",
        "Incorporated Stripe API to automate invoicing and reduce transaction times by 99% (from 3+ days to 30 mins)",
        "Tracked user experience and process flows by integrating Google Analytics to increase page views by 33%",
      ],
      toolLogos: [react, js, html, css, nodejs, redux, aws],
    },
  ],
  2021: [
    {
      company: "Self-Employed",
      title: "Full-Stack Developer Intern",
      link: "",
      description: [
        "Architected a flexible to-do application using React, Node.js, and MySQL allowing users to categorize their pending tasks",
        "Optimized MySQL database queries to prevent redundant fetching, reducing element load times by 50%",
        "Implemented drag-and-drop controls for greater user interaction and customization",
      ],
      toolLogos: [react, js, html, css, nodejs, mysql, firebase, heroku],
    },
  ],
  2020: [
    {
      company: "Ballard Power Systems",
      title: "Systems and Controls Engineer Intern",
      link: "https://www.ballard.com/",
      description: [
        "Maintained sensor database of 300+ fuel cells using automated Python scripts, improving update efficiency by 20%",
        "Constructed and tested 35+ electrical prototypes while reducing assembly process time by 50%",
      ],
      toolLogos: [python, arduino, raspi, printing],
    },
    {
      company: "Ballard Power Systems",
      title: "Systems Engineer Intern",
      link: "https://www.ballard.com/",
      description: [
        "Developed and automated fuel cells scripts using Python and microcontrollers to decrease component testing times by 40%",
        "Sourced fuel cell components and electronic equipment valued over $100,000 for the department",
      ],
      toolLogos: [python, arduino, raspi, printing],
    },
  ],
  2019: [
    {
      company: "First Robotics",
      title: "Lead Engineer",
      link: "",
      description: [],
      toolLogos: [python, cplusplus, java],
    },
  ],
};
