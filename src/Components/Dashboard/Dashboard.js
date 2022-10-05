import React from "react";
import LandingPage from "../Landing Page/LandingPage";
import SideNavBar from "../Side navBar/SideNavBar";
import DashboardHeader from "./DashboardHeader";
const Dashboard = () => {
  return (
    <div className="">
      <div className="row">
        <div className="d-none d-lg-block col-2">
          <SideNavBar />
        </div>
        <div className="col-lg-10 col-12 ">
          <div className="row">
            <DashboardHeader />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
