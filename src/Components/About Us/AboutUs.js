import React, { useEffect } from "react";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <div className="mt-5 pt-5" id="about">
      <div className="pet_care_area">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5 col-md-6">
              <div className="pet_thumb">
                <img src="images/pet_care.png" alt="" />
              </div>
            </div>
            <div className="col-lg-6 offset-lg-1 col-md-6">
              <div className="pet_info">
                <div className="section_title">
                  <h3>
                    <span>We care for birds quality </span> <br />
                    As you care
                  </h3>
                  <p>
                    We provide high quality love birds. Including:
                    <br /> Hogoromo, Albino/Red Eye, Green Opline/Blue/ParBlue
                    <br />
                    Violet Euwing, Pastel Ino, Green Opline
                    <br />
                    and many more.
                  </p>
                  <a href="/#contactUs" className="boxed-btn3">
                    Contact Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* no of birds area start*/}
      <div className="no_of_birds_area">
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-lg-5 mx-lg-4 px-lg-3">
              <div className="adapt_help">
                <div className="section_title">
                  <h3>
                    <span>Paradise of birds</span>
                  </h3>
                  <p>We have colorful and attracting love birds collection</p>
                  <a href="/#contactUs" className="boxed-btn3">
                    Contact Us
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="adapt_about">
                <div className="row align-items-center me-4 pe-3">
                  <div className="col-lg-6 col-md-6 ">
                    <div className="single_adapt text-center ">
                      <img src="images/icons/1.png" alt="" />
                      <div className="adapt_content">
                        <h3>
                          <span className="counter">30</span>+
                        </h3>
                        <p>Single Birds Available</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <div className="single_adapt text-center">
                      <img src="images/icons/3.png" alt="" />
                      <div className="adapt_content">
                        <h3>
                          <span className="counter">15</span>+
                        </h3>
                        <p>Pairs Available</p>
                      </div>
                    </div>
                    <div className="single_adapt text-center">
                      <img src="images/icons/2.png" alt="" />
                      <div className="adapt_content">
                        <h3>
                          <span className="counter">100</span>+
                        </h3>
                        <p>Birds Chicks Available</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* no of birds area end*/}
    </div>
  );
};
export default AboutUs;
