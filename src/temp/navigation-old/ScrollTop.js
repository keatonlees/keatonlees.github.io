// ==================== LIBRARIES ====================
import { BsArrowUpCircle } from "react-icons/bs";

// ==================== STYLES ====================
import "./ScrollTop.sass";

function ScrollTop(props) {
  const handleClick = () => {
    props.swiper.slideTo(0);
  };

  return (
    <>
      {props.index !== 0 ? (
        <div className="scrolltop-container" onClick={handleClick}>
          <div className="scrolltop-button">
            <BsArrowUpCircle className="scrolltop-arrow" />
          </div>
        </div>
      ) : null}
    </>
  );
}

export default ScrollTop;
