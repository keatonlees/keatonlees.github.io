// ----- imports -----
import React from "react";
import { Routes, Route } from "react-router-dom";

// ----- pages -----
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import ProjectTemplate from "./pages/Projects/ProjectTemplate";

// ----- components -----
import NavBar from "./components/NavBar";
import Contact from "./components/Contact";
import AmbientParticles from "./components/AmbientParticles";

// ----- styles -----
import "./App.css";

function App() {
  const projectImage = {
    width: "300px",
    height: "400px",
  };

  return (
    <div className="web-container">
      <AmbientParticles />
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/projects"
          element={<Projects projectImage={projectImage} />}
        />
        <Route
          path="/projects/projecttemplate"
          element={<ProjectTemplate projectImage={projectImage} />}
        />
      </Routes>
      <Contact />
    </div>
  );
}

export default App;
