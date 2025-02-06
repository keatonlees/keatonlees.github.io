// ==================== LIBRARIES ====================
import { useState } from "react";
// import Spline from "@splinetool/react-spline";
import { motion } from "framer-motion";

// ==================== UTIL ====================
// ==================== COMPONENTS ====================
import { SlideLayout } from "../../../foundations";

// ==================== STYLES ====================
// ==================== IMAGES ====================

const delay = (ms) => new Promise((res) => setTimeout(res, ms));

function AboutPassions({ slideIndex }) {
  const [isLoading, setIsLoading] = useState(true);
  const [isSeen, setIsSeen] = useState(false);

  async function onLoad() {
    await delay(5000);
    setIsLoading(false);
    setIsSeen(true);
  }

  return (
    <SlideLayout a="center" j="center">
      {isLoading && (
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
          Loading...
        </motion.div>
      )}

      {(slideIndex === 4 || isSeen) && (
        <motion.div style={{ width: "100vw", height: "100vh" }}>
          {/* <Spline
            onLoad={onLoad}
            // scene="https://prod.spline.design/Qxu-lxNSi6aKu0Pl/scene.splinecode"
            scene="https://prod.spline.design/SceMpboQsywFAVg2/scene.splinecode"
            style={{ display: isLoading ? "none" : "block" }}
          /> */}
        </motion.div>
      )}
    </SlideLayout>
  );
}

export default AboutPassions;
