// ==================== LIBRARIES ====================
import { RiArrowDownSFill } from "react-icons/ri";

// ==================== STYLES ====================
import "./ScrollDown.sass";

function ScrollDown(props) {
  const handleClick = () => {
    props.swiper.slideNext();
  };

  return (
    <>
      {props.index === 0 ? (
        <div className="scrolldown-container" onClick={handleClick}>
          <div className="scrolldown-mouse">
            <div className="scrolldown-wheel"></div>
          </div>
          <RiArrowDownSFill className="scrolldown-arrow" />
        </div>
      ) : null}
    </>
  );
}

export default ScrollDown;
