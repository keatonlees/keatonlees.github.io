import { useEffect, useRef } from "react";

import { useLocation, withRouter } from "react-router-dom";

function ScrollToTop({ history }) {
  const location = useLocation();
  const lastHash = useRef("");

  useEffect(() => {
    if (location.hash) {
      lastHash.current = location.hash.slice(1);
    }

    if (lastHash.current && document.getElementById(lastHash.current)) {
      document.getElementById(lastHash.current)?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      lastHash.current = "";
    } else {
      setTimeout(() => {
        window.scrollTo(0, 0);
      }, 900);
    }
  }, [location, history]);

  return null;
}

export default withRouter(ScrollToTop);
