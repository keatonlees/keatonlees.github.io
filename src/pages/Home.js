// ==================== COMPONENTS ====================
import { PageLayout } from "../foundations";
import HomeLanding from "../components/home/homeLanding/HomeLanding";
import HomeAbout from "../components/home/homeAbout/HomeAbout";

// ==================== STYLES ====================
import "../App.sass";
import ContactSlide from "../components/contact/ContactSlide";

function Home() {
  const bullets = [
    "Landing",
    "About",
    // "Spotlight",
    //  "Blogs",
    "Contact",
  ];
  const slides = [
    <HomeLanding />,
    <HomeAbout />,
    // <h1>Spotlight</h1>,
    // <h1>Blog</h1>,
    <ContactSlide />,
  ];

  return <PageLayout bullets={bullets} slides={slides} />;
}

export default Home;
