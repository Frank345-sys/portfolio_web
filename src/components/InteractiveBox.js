import React, { useState, useEffect } from "react";

const InteractiveBox = ({ content, opacityClass, initialTransform }) => {
  const [transformStyle, setTransformStyle] = useState({
    transform: initialTransform,
  });

  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 1024);

  const [isWaitTime, setIsWaitTime] = useState(false);

  useEffect(() => {
    let timer;

    timer = setTimeout(() => {
      setIsWaitTime(true);
    }, 3000);

    const handleResize = () => {
      const smallScreen = window.innerWidth <= 1024;
      setIsSmallScreen(smallScreen);

      if (smallScreen) {
        setTransformStyle({
          transform: initialTransform,
        });
      }
    };

    const handleMouseMove = (e) => {
      if (!isSmallScreen && isWaitTime) {
        const x = (e.clientX / window.innerWidth - 0.5) * 10;
        const y = (e.clientY / window.innerHeight - 0.5) * 10;
        setTransformStyle({
          transform: `${initialTransform} translate3d(${x}rem, ${y}rem, 0)`,
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      clearTimeout(timer);
    };
  }, [initialTransform, isSmallScreen, isWaitTime]);

  return (
    <div
      className={`interactive-box ${opacityClass} ${isWaitTime ? "" : ""}`}
      style={transformStyle}
    >
      {content}
    </div>
  );
};

export default InteractiveBox;

/*
import React, { useState, useEffect } from "react";

const InteractiveBoxes = ({
  content,
  opacityClass,
  mouseDistance,
  positionClass,
  isMovingClass,
}) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const [isDefaultPosition, setIsDefaultPosition] = useState(false);

  const [isMouseMoved, setIsMouseMoved] = useState(false);

  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 1024);

  useEffect(() => {
    let timer;

    const handleMouseMove = (e) => {
      if (!isSmallScreen) {
        setMousePos({ x: e.clientX, y: e.clientY });
        if (!isDefaultPosition) setIsDefaultPosition(true);
        setIsMouseMoved(true);

        clearTimeout(timer);
        timer = setTimeout(() => {
          setIsMouseMoved(false);
        }, 100);
      }
    };

    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 1024);
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      clearTimeout(timer);
    };
  }, [isSmallScreen]);

  const boxStyle = isSmallScreen
    ? {
        top: "0%",
        left: "0%",
      }
    : {
        top: isDefaultPosition
          ? `${(mousePos.y - window.innerHeight / 2) * mouseDistance}%`
          : "0%",
        left: isDefaultPosition
          ? `${(mousePos.x - window.innerWidth / 2) * mouseDistance}%`
          : "0%",
      };

  return (
    <div
      className={`interactive-box  ${positionClass} ${opacityClass} ${
        isMouseMoved ? `${isMovingClass}` : ""
      } ${isMouseMoved ? "paused" : ""} `}
      style={boxStyle}
    >
      {content}
    </div>
  );
};

export default InteractiveBoxes;
*/

/*
  0.08
  */

//className="interactive-box"

/* 
  style={{
        transform: `translate(${
          (mousePos.x - window.innerWidth / 2) * mouseDistance
        }px, ${(mousePos.y - window.innerHeight / 2) * mouseDistance}px)`,
        height: `${height}vw`,
        width: `${width}vw`,
        top: `${top}%`,
        left: `${left}%`,
      }}
  */

/* 
      style={{
        top: isMouseMoved
          ? `${(mousePos.y - window.innerHeight / 2) * mouseDistance}%`
          : "0%",
        left: isMouseMoved
          ? `${(mousePos.x - window.innerWidth / 2) * mouseDistance}%`
          : "0%",
      }}
  */
