import React, { useState } from "react";
import img1 from "../Images/Med1.jpeg";
import img2 from "../Images/Med2.jpg";
import img3 from "../Images/Med3.webp";

const About = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slides = [{ url: img3 }, { url: img2 }, { url: img1 }];
  const slydeStyles = {
    width: "100%",
    height: "100%",
    borderRadius: "10px",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundImage: `url(${slides[currentIndex].url})`,
  };
  const slyderStyles = {
    height: "100%",
    position: "relative",
  };
  const containerStyles = {
    width: "90%",
    height: "680px",
    margin: "0 auto",
  };

  const dotContainerStyles = {
    display: "flex",
    justifyContent: "center",
    marginTop: "-100px ",
  };
  const dotStyles = {
    margin: "0 3px",
    cursor: "pointer",
    fontSize: "80px",
    color: "white",
  };
  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndx = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndx);
  };
  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndx = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndx);
  };

  return (
    <div>
      <div style={containerStyles}>
        <div style={slyderStyles}>
          <button
            className="carousel-control-prev"
            type="button"
            onClick={goToPrevious}
          >
            <span className="carousel-control-prev-icon"></span>
          </button>

          <div style={slydeStyles}> </div>

          <button
            className="carousel-control-next"
            type="button"
            onClick={goToNext}
          >
            <span className="carousel-control-next-icon"></span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
