// ----- imports -----
import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import ReactGA from "react-ga4";

// ----- pages -----
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";

import ProjectOctodo from "./pages/Projects/ProjectOctodo";
import ProjectJarvis from "./pages/Projects/ProjectJarvis";
import ProjectDrone from "./pages/Projects/ProjectDrone";
import ProjectRethink from "./pages/Projects/ProjectRethink";
import ProjectPuppr from "./pages/Projects/ProjectPuppr";
import ProjectDK from "./pages/Projects/ProjectDK";
import ProjectFirst from "./pages/Projects/ProjectFirst";

// ----- components -----
import NavBar from "./components/NavBar";
import ContactSidebar from "./components/ContactSidebar";
import AmbientParticles from "./components/AmbientParticles";

// ----- styles -----
import "./App.css";
import "./styles/Hover.css";

ReactGA.initialize("G-N6RJ3YRE34");
ReactGA.send("pageview");

function App() {
  const scrollSpeed = 800;
  const [projectImageInitial, setProjectImageInitial] = useState({
    width: "300px",
    height: "400px",
  });
  const [projectImageFinal, setProjectImageFinal] = useState({
    width: "100%",
    height: "30%",
  });

  return (
    <>
      {/* <AmbientParticles /> */}
      <NavBar />
      <ContactSidebar />

      <Route
        render={({ location }) => (
          <AnimatePresence exitBeforeEnter>
            <Switch location={location} key={location.pathname}>
              <Route
                exact
                path="/"
                render={() => <Home scrollSpeed={scrollSpeed} />}
              />
              <Route
                exact
                path="/about"
                render={() => <About scrollSpeed={scrollSpeed} />}
              />
              <Route
                exact
                path="/projects"
                render={() => (
                  <Projects
                    scrollSpeed={scrollSpeed}
                    setProjectImageInitial={setProjectImageInitial}
                    projectImageInitial={projectImageInitial}
                  />
                )}
              />
              <Route
                exact
                path="/projects/octodo"
                render={() => (
                  <ProjectOctodo
                    scrollSpeed={scrollSpeed}
                    projectImageInitial={projectImageInitial}
                    projectImageFinal={projectImageFinal}
                  />
                )}
              />
              <Route
                exact
                path="/projects/jarvis"
                render={() => (
                  <ProjectJarvis
                    scrollSpeed={scrollSpeed}
                    projectImageInitial={projectImageInitial}
                    projectImageFinal={projectImageFinal}
                  />
                )}
              />
              <Route
                exact
                path="/projects/drone"
                render={() => (
                  <ProjectDrone
                    scrollSpeed={scrollSpeed}
                    projectImageInitial={projectImageInitial}
                    projectImageFinal={projectImageFinal}
                  />
                )}
              />
              <Route
                exact
                path="/projects/rethink"
                render={() => (
                  <ProjectRethink
                    scrollSpeed={scrollSpeed}
                    projectImageInitial={projectImageInitial}
                    projectImageFinal={projectImageFinal}
                  />
                )}
              />
              <Route
                exact
                path="/projects/puppr"
                render={() => (
                  <ProjectPuppr
                    scrollSpeed={scrollSpeed}
                    projectImageInitial={projectImageInitial}
                    projectImageFinal={projectImageFinal}
                  />
                )}
              />
              <Route
                exact
                path="/projects/kong"
                render={() => (
                  <ProjectDK
                    scrollSpeed={scrollSpeed}
                    projectImageInitial={projectImageInitial}
                    projectImageFinal={projectImageFinal}
                  />
                )}
              />
              <Route
                exact
                path="/projects/first"
                render={() => (
                  <ProjectFirst
                    scrollSpeed={scrollSpeed}
                    projectImageInitial={projectImageInitial}
                    projectImageFinal={projectImageFinal}
                  />
                )}
              />
            </Switch>
          </AnimatePresence>
        )}
      />
    </>
  );
}

export default App;
