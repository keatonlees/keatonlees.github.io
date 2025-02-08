import { AnimatePresence } from "motion/react";
import ReactGA from "react-ga4";
import { Route, Switch } from "react-router-dom";

// import Blogs from "./pages/Blogs";
// import BlogPage from "./components/blogs/BlogPage";

import { ThemeProvider } from "./lib/ThemeContext";
import About from "./pages/About";
import Error404 from "./pages/Error404";
import Home from "./pages/Home";
import Projects from "./pages/Projects";

import "./App.sass";

import ScrollToTop from "./lib/ScrollToTop";

ReactGA.initialize("G-N6RJ3YRE34");
ReactGA.send("pageview");

function App() {
  return (
    <ThemeProvider>
      <ScrollToTop />
      <Route
        render={({ location }) => (
          <AnimatePresence propagate mode="wait">
            <Switch location={location} key={location.pathname}>
              <Route exact path="/" render={() => <Home />} />
              <Route exact path="/about" render={() => <About />} />
              <Route exact path="/projects" render={() => <Projects />} />
              {/* <Route exact path="/blogs" render={() => <Blogs />} /> */}
              {/* <Route exact path="/blogs/:title" render={() => <BlogPage />} /> */}
              <Route path="*" render={() => <Error404 />} />
            </Switch>
          </AnimatePresence>
        )}
      />
    </ThemeProvider>
  );
}

export default App;
