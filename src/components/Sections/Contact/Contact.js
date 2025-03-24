import { motion } from "motion/react";

import logo_dark from "../../../images/logo_dark.png";
import logo_light from "../../../images/logo_light.png";
import { useTheme } from "../../../lib/ThemeContext";
import Socials from "../../Socials/Socials";
import Text from "../../ui/Text/Text";

import "./Contact.sass";

function Contact() {
  const { theme } = useTheme();

  return (
    <div className="contact">
      <div className="contact-content">
        <motion.div
          className="content-left"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: { duration: 0.6, delay: 0.3 },
          }}
          viewport={{ once: true, amount: 0.6 }}
        >
          <Text variant="h1" className="content-text">
            Feel free to reach out, let's chat!
          </Text>
        </motion.div>
        <motion.div
          className="content-right"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, delay: 0.6 },
          }}
          viewport={{ once: true, amount: 0.6 }}
        >
          <img
            src={theme === "dark" ? logo_light : logo_dark}
            alt="logo"
            className="contact-socials-logo"
            loading="lazy"
          />
          <Socials variant="lg" className="contact-socials" />
        </motion.div>
      </div>
      <motion.div
        className="contact-footer"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { duration: 0.6, delay: 0.3 },
        }}
        viewport={{ once: true, amount: 0.6 }}
      >
        <div className="signature">
          <h1>Keaton Lees</h1>
        </div>
        <div className="copyright">
          <Text variant="p" className="copyright-text">
            &copy; {new Date().getFullYear()} Keaton Lees
          </Text>
          <Text variant="p" className="copyright-text">
            Developed with love
          </Text>
        </div>
      </motion.div>
    </div>
  );
}

export default Contact;
