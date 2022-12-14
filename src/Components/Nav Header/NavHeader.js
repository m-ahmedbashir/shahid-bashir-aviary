import React from "react";
import "./NavHeader.css";

const NavHeader = () => {
  return (
    <div>
      {" "}
      <div id="sticky-header" className="main-header-area">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-3 col-lg-3">
              <div className="logo">
                <a href="index.html">
                  <img src="img/logo.png" alt="" />
                </a>
              </div>
            </div>
            <div className="col-xl-9 col-lg-9">
              <div className="main-menu  d-none d-lg-block">
                <nav>
                  <ul id="navigation">
                    <li>
                      <a href="index.html">home</a>
                    </li>
                    <li>
                      <a href="about.html">about</a>
                    </li>
                    <li>
                      <a href="#">
                        blog <i className="ti-angle-down"></i>
                      </a>
                      <ul className="submenu">
                        <li>
                          <a href="blog.html">blog</a>
                        </li>
                        <li>
                          <a href="single-blog.html">single-blog</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="#">
                        pages <i className="ti-angle-down"></i>
                      </a>
                      <ul className="submenu">
                        <li>
                          <a href="elements.html">elements</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="service.html">services</a>
                    </li>
                    <li>
                      <a href="contact.html">Contact</a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
            <div className="col-12">
              <div className="mobile_menu d-block d-lg-none"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavHeader;
