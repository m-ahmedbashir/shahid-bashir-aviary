import React from "react";
import "./Team.css";

const Team = () => {
  return (
    <>
      {" "}
      {/* our team section start */}
      <div className="team_area" id="team">
        <div className="container">
          <div className="row justify-content-center ">
            <div className="col-lg-6 col-md-10">
              <div className="section_title text-center mb-95">
                <h3>Our Team</h3>
                <p>Shahid Bashir Aviary Partners</p>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6">
              <div className="single_team">
                <div className="thumb">
                  <img src="images/1.png" alt="" />
                </div>
                <div className="member_name text-center">
                  <div className="mamber_inner">
                    <h4>Shahid Bashir</h4>
                    <p>Partner & Manager</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single_team">
                <div className="thumb">
                  <img src="images/2.png" alt="" />
                </div>
                <div className="member_name text-center">
                  <div className="mamber_inner">
                    <h4>Bashir Ahmed</h4>
                    <p>Partner</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single_team">
                <div className="thumb">
                  <img src="images/3.png" alt="" />
                </div>
                <div className="member_name text-center">
                  <div className="mamber_inner">
                    <h4>M. Akram</h4>
                    <p>Partner</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* our team section end */}
    </>
  );
};
export default Team;
