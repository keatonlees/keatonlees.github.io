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
      <div className="contact-top">
        <div className="content">
          <div className="message">
            <Text variant="h1" className="text">
              Feel free to reach out, let's chat!
            </Text>
          </div>

          <div className="social-content">
            <img src={logo_dark} alt="logo dark" />
            <Socials variant="lg" />
          </div>
        </div>
      </div>

      <div className="contact-bottom">
        <div className="mega-text">
          <h1>Keaton Lees</h1>
        </div>
        <div className="footer">
          <Text variant="p">&copy; {new Date().getFullYear()} Keaton Lees</Text>
          <Text variant="p">Developed with love</Text>
        </div>
      </div>
    </div>
  );
}

export default Contact;
