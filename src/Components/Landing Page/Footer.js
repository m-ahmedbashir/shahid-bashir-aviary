import React from "react";
import "./Footer.css";
import { FiFacebook } from "react-icons/fi";
import { SiGmail } from "react-icons/si";
import { BsWhatsapp } from "react-icons/bs";

const Footer = () => {
  return (
    <div>
      <footer className="footer">
        <div className="footer_top">
          <div className="container">
            <div className="row">
              <div className="col-xl-4 col-md-6 col-lg-3">
                <div className="footer_widget">
                  <h3 className="footer_title">Contact Us</h3>
                  <ul className="address_line">
                    <li>(+92)0345 4781331</li>
                    <li>(+92)0331 4727644</li>
                    <li>
                      <a href="mailto:ahmedbashir2028@gmail.com">
                        ahmedbashir2028@gmail.com
                      </a>
                    </li>
                    <li>Manawala, District Sheikhupura</li>
                  </ul>
                </div>
              </div>
              {/* <div className="col-xl-3  col-md-6 col-lg-3">
                <div className="footer_widget">
                  <h3 className="footer_title">Our Servces</h3>
                  <ul className="links">
                    <li>
                      <a href="#">Pet Insurance</a>
                    </li>
                    <li>
                      <a href="#">Pet surgeries </a>
                    </li>
                    <li>
                      <a href="#">Pet Adoption</a>
                    </li>
                    <li>
                      <a href="#">Dog Insurance</a>
                    </li>
                    <li>
                      <a href="#">Dog Insurance</a>
                    </li>
                  </ul>
                </div>
              </div> */}
              <div className="col-xl-4  col-md-6 col-lg-3">
                <div className="footer_widget">
                  <h3 className="footer_title">Quick Link</h3>
                  <ul className="links">
                    <li>
                      <a href="https://www.youtube.com/channel/UC7sIVt_qP6jgaSaxaUCjaUw">
                        YouTube Page
                      </a>
                    </li>
                    <li>
                      <a href="https://www.facebook.com/Shahid-Bashir-Aviary-100335621775884">
                        Facebook Page
                      </a>
                    </li>
                    <li>
                      <a href="/#about">About Us</a>
                    </li>
                    <li>
                      <a href="/#team">About Our Team</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-4 col-md-6 col-lg-3 ">
                <div className="footer_widget">
                  <div className="footer_logo">
                    <a href="#">
                      <img
                        src="images/logo.png"
                        alt=""
                        className="w-25 d-none d-lg-block "
                      />
                    </a>
                  </div>
                  <p className="address_text">Manawala, District Sheikhupura</p>
                  <div className="socail_links">
                    <ul>
                      <li>
                        <a href="https://www.facebook.com/Shahid-Bashir-Aviary-100335621775884">
                          <FiFacebook className="lead" />
                        </a>
                      </li>

                      <li>
                        <a href="mailto:ahmedbashir2028@gmail.com">
                          <SiGmail className="lead" />
                        </a>
                      </li>
                      <li>
                        <a href="https://wa.me/923454781331">
                          <BsWhatsapp className="lead" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="copy-right_text">
          <div className="container">
            <div className="bordered_1px"></div>
            <div className="row">
              <div className="col-xl-12">
                <p className="copy_right text-center">
                  Copyright &copy; {new Date().getFullYear()} All rights
                  reserved |{" "}
                  <span className="dark-orange">
                    Shahid Bashir Aviary(SB Aviary)
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
