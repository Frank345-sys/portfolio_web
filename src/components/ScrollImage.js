import React, { useState, useEffect, useRef } from "react";

const ScrollImage = ({ backgroundImage, imageName }) => {
  const [isHovered, setIsHovered] = useState(false);
  const scrollContainerRef = useRef(null);

  const handleMouseLeave = () => {
    scrollContainerRef.current.scrollTo({ top: 0, behavior: "smooth" });
    if (scrollContainerRef.current.scrollTop === 0) {
      setIsHovered(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (scrollContainerRef.current.scrollTop === 0) {
        setIsHovered(false);
      } else {
        setIsHovered(true);
      }
    };

    const currentRef = scrollContainerRef.current;
    currentRef.addEventListener("scroll", handleScroll);

    return () => {
      currentRef.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`scroll-container ${isHovered ? "scroll-active" : ""}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      ref={scrollContainerRef}
    >
      <img
        className={isHovered ? "" : "scroll-container_filter-blur"}
        src={backgroundImage}
        alt={`Scrollable content ${imageName}`}
        style={{ width: "100%" }}
      />
      <span
        className={`scroll-container__message ${
          isHovered ? "scroll-container__message_visibility-hidden" : ""
        }`}
      >
        Desliza el cursor para más detalles
      </span>
    </div>
  );
};

export default ScrollImage;

/*
import React, { useState, useEffect, useRef } from "react";

const ScrollImage = ({ backgroundImage, imageName }) => {
  const [isHovered, setIsHovered] = useState(false);

  const scrollContainerRef = useRef(null);

  const handleMouseLeave = () => {
    scrollContainerRef.current.scrollTo({ top: 0, behavior: "smooth" });
    if (scrollContainerRef.current.scrollTop === 0) {
      setIsHovered(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (scrollContainerRef.current.scrollTop === 0) {
        setIsHovered(false);
      }
    };

    const currentRef = scrollContainerRef.current;
    currentRef.addEventListener("scroll", handleScroll);

    return () => {
      currentRef.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`scroll-container ${isHovered ? "scroll-active" : ""}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      ref={scrollContainerRef}
    >
      <img
        className={`${isHovered ? "" : "scroll-container_filter-blur"}`}
        src={backgroundImage}
        alt={`Scrollable content ${imageName}`}
        style={{
          width: "100%",
        }}
      />
      <span
        className={`scroll-container__message ${
          isHovered ? "scroll-container__message_visibility-hidden" : ""
        }`}
      >
        Haz hover para más detalles
      </span>
    </div>
  );
};

export default ScrollImage;
*/
