import React from "react";

const useMousePosition = () => {
  const [mousePositionX, setMousePositionX] = React.useState(0);
  const [mousePositionY, setMousePositionY] = React.useState(0);

  React.useEffect(() => {
    const updateMousePosition = (ev) => {
      setMousePositionX(ev.clientX);
      setMousePositionY(ev.clientY);
    };

    window.addEventListener("mousemove", updateMousePosition);
    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, [mousePositionX, mousePositionY]);

  return { x: mousePositionX, y: mousePositionY };
};
export default useMousePosition;
