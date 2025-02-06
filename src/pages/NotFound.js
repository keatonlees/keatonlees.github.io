// ==================== LIBRARIES ====================
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";

// ==================== COMPONENTS ====================
// import ColourWipe from "../components/colourWipe/ColourWipe";
import NavBar from "../components/navigation/NavBar";

// ==================== STYLES ====================
import "../App.sass";
import "./NotFound.sass";
import { Button, Flex, Text } from "../foundations";

function NotFound() {
  return (
    <>
      {/* <ColourWipe /> */}
      {/* <NavBar /> */}

      <Flex a="center" j="center" className="notfound-container">
        <Flex a="center" d="column" className="notfound-content glass">
          <Text fs="9xl" fw="bold" fc="accent">
            404
          </Text>
          <Text fs="xl" fw="semibold">
            Uh, welcome! You weren't supposed to find this.
          </Text>
          <Text>
            Are you trying to get to somewhere that doesn't exist? You should
            return to where there is an actual site.
          </Text>
          {/* <Button navLink="/">Secret</Button> */}
        </Flex>
      </Flex>

      {/* <div className="notfound-container">
        <motion.div className="notfound-content">
          <h1 className="notfound-title">404</h1>
          <h2 className="notfound-subtitle">
            Uhhh, welcome! You weren't supposed to find this.
          </h2>
          <p className="notfound-text">
            Are you trying to get to somewhere that doesn't exist? You should
            return to where there is an actual website. Here, I've provided a
            convenient button for you. Bye!
          </p>
          <Link to="/" className="notfound-button">
            Go Home
          </Link>
          <motion.p
            className="notfound-or"
            initial={{ opacity: 0, visibility: "hidden" }}
            animate={{ opacity: 1, visibility: "visible" }}
            transition={{ duration: 1, delay: 5 }}
          >
            or
          </motion.p>
          <motion.a
            href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            target="_blank"
            rel="noreferrer"
            className="notfound-button"
            initial={{ opacity: 0, visibility: "hidden" }}
            animate={{ opacity: 1, visibility: "visible" }}
            transition={{ duration: 1, delay: 5 }}
          >
            See a secret!
          </motion.a>
        </motion.div>
      </div> */}
    </>
  );
}

export default NotFound;
