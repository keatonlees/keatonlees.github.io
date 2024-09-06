// ==================== LIBRARIES ====================
import React from "react";
import { Route, Switch } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import ReactGA from "react-ga4";

// ==================== COMPONENTS ====================
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Projects from "./pages/Projects";
// import Blogs from "./pages/Blogs";
// import BlogPage from "./components/blogs/BlogPage";

// ==================== STYLES ====================
import "./App.sass";

// ==================== GOOGLE ANALYTICS ====================
ReactGA.initialize("G-N6RJ3YRE34");
ReactGA.send("pageview");

function App() {
  return (
    <>
      <Route
        render={({ location }) => (
          <AnimatePresence exitBeforeEnter>
            <Switch location={location} key={location.pathname}>
              <Route exact path="/" render={() => <Home />} />
              <Route exact path="/about" render={() => <About />} />
              <Route exact path="/projects" render={() => <Projects />} />
              {/* <Route exact path="/blogs" render={() => <Blogs />} /> */}
              {/* <Route exact path="/blogs/:title" render={() => <BlogPage />} /> */}
              <Route path="*" render={() => <NotFound />} />
            </Switch>
          </AnimatePresence>
        )}
      />
    </>
  );
}

export default App;
