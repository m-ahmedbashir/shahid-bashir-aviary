import React from "react";
import ViewBirdsDetails from "../Birds Images/ViewBirdsDetails";
import Notification from "../Notification/Notification";
import ToDo from "../ToDo/ToDo";
import "./DashboardHeader.css";
import { useUserAuth } from "../../Context/UserAuthContext";
import { useNavigate } from "react-router-dom";

const DashboardHeader = () => {
  const { user, logOut } = useUserAuth();
  const navigation = useNavigate();

  const handleLogOut = () => {
    logOut();
    navigation("/login");
  };

  return (
    <div className="body">
      <div className="row">
        <div className="col-12 p-3">
          <div className="d-flex justify-content-between">
            <div className="user p-2 p-lg-0 ">
              <div className="px-2 pt-1">
                <h4>
                  Welcome :{" "}
                  {user.email ? <h6>{user.email}</h6> : <h6>No user</h6>}
                </h4>
                <h5>All things are working good..!!!</h5>
                <button className="logout-btn1" onClick={handleLogOut}>
                  Log Out
                </button>
              </div>
            </div>
            <div>
              <h5 className="bg-light p-2 rounded">
                Today ({new Date().toDateString()})
              </h5>
            </div>
          </div>
        </div>
      </div>
      <div className="row ">
        <div className="col-lg-4 col-12">
          <div className="card">
            <div className="card-body">last update on</div>
            <div className="card-body">Feature Comming Soon...!!!</div>
          </div>
        </div>

        <div className="col-lg-4 col-12  mt-lg-0 mt-3 ">
          <div className="row ">
            <div className="col-12  ">
              <ToDo />
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-12  mt-lg-0 mt-3 ">
          <div className="row">
            <div className=" mx-auto">
              <Notification />
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-12 my-2 ">
          <ViewBirdsDetails />
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;
