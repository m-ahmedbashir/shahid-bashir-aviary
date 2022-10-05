import React from "react";
import "./ContactUs.css";
import { BsWhatsapp, BsFacebook } from "react-icons/bs";
import { SiGmail } from "react-icons/si";
const ContactUs = () => {
  return (
    <div id="contactUs">
      <div className="contact_us">
        <div className="container">
          <div className="row justify-content-center ">
            <div className="col-lg-7 col-md-10">
              <div className="section_title text-center mb-95">
                <h3>Contact US</h3>
                <p>You can contact us on one of the following platform</p>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6">
              <div className="single_service">
                <div className="service_thumb service_icon_bg_1 d-flex align-items-center justify-content-center">
                  <div className="service_icon">
                    <img src="images/service_icon_1.png" alt="" />
                  </div>
                </div>
                <div className="service_content text-center">
                  <h3>WhatsApp</h3>
                  <p>You can contact us on WhatsApp</p>
                  <a href="https://wa.me/923454781331">
                    <button className="btn btn-success mt-4 px-3">
                      WhatsApp <BsWhatsapp className="mb-1 ms-1" />
                    </button>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single_service active">
                <div className="service_thumb service_icon_bg_1 d-flex align-items-center justify-content-center">
                  <div className="service_icon">
                    <img src="images/service_icon_2.png" alt="" />
                  </div>
                </div>
                <div className="service_content text-center">
                  <h3>Facebook</h3>
                  <p>Visit Our Facebook Page</p>
                  <a href="https://www.facebook.com/Shahid-Bashir-Aviary-100335621775884">
                    <button className="btn btn-primary mt-4 px-3">
                      Facebook <BsFacebook className="mb-1 ms-1" />
                    </button>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single_service">
                <div className="service_thumb service_icon_bg_1 d-flex align-items-center justify-content-center">
                  <div className="service_icon">
                    <img src="images/service_icon_3.png" alt="" />
                  </div>
                </div>
                <div className="service_content text-center">
                  <h3>Email</h3>
                  <p>Send an Email</p>
                  <a href="mailto:ahmedbashir2028@gmail.com">
                    <button className="btn btn-danger mt-4 px-3">
                      Email <SiGmail className="mb-1 ms-1" />
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ContactUs;
