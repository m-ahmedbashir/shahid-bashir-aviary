import React from "react";
import "./HeroSection.css";
const HeroSection = () => {
  return (
    <div className="slider_area" id="hero">
      <div className="single_slider slider_bg_1 d-flex align-items-center">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-md-6">
              <div className="slider_text">
                <h3>
                  Shahid Bashir <br /> <span>Aviary</span>
                </h3>
                <p>
                  Paradise of Preety and Colorful Birds. We Provide High Quality
                  Love Birds.
                </p>
                <a href="/#contactUs" className="boxed-btn4">
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="dog_thumb d-none d-lg-block">
          <img
            src="images/bird.png"
            alt="Bird Flying "
            className="animate__animated animate__zoomIn"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
