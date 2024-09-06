// ==================== LIBRARIES ====================
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Mousewheel } from "swiper";

// ==================== UTIL ====================
import { scrollSpeed } from "../constants/Constants";

// ==================== COMPONENTS ====================
import ColourWipe from "../../components/colourWipe/ColourWipe";
import NavBar from "../../components/navigation/NavBar";
import ContactSidebar from "../../components/contact/ContactSidebar";
import ScrollDown from "../../components/navigation/ScrollDown";
import ScrollTop from "../../components/navigation/ScrollTop";

// ==================== STYLES ====================
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/mousewheel";
import "../../App.sass";

// ==================== INITIALIZE SWIPER ====================
SwiperCore.use([Pagination, Mousewheel]);

function PageLayout({ bullets, slides, setSI = null }) {
  const [swiper, setSwiper] = useState({});
  const [slideIndex, setSlideIndex] = useState(0);
  const customBullet = (index, className) => {
    return (
      '<span class="customBullet ' +
      className +
      '"><p>' +
      bullets[index] +
      "</p></span>"
    );
  };

  return (
    <>
      <ColourWipe />
      <NavBar />
      <ContactSidebar />
      <ScrollDown swiper={swiper} index={slideIndex} />
      <ScrollTop swiper={swiper} index={slideIndex} />

      <Swiper
        direction={"vertical"}
        slidesPerView={1}
        speed={scrollSpeed}
        pagination={{
          clickable: true,
          renderBullet: (index, className) => {
            return customBullet(index, className);
          },
        }}
        mousewheel={true}
        allowTouchMove={false}
        onInit={(e) => setSwiper(e)}
        onSlideChange={(e) => {
          setSlideIndex(e.activeIndex);
          if (setSI) setSI(e.activeIndex);
        }}
      >
        {slides.map((children, i) => {
          return (
            <SwiperSlide key={i} style={{ overflow: "hidden" }}>
              {children}
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}

export default PageLayout;
