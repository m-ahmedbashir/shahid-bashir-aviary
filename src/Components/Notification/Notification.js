import React from "react";

const Notification = () => {
  return (
    <div className="card ">
      <div className="card-body">
        <h5 className="card-title">Notifications</h5>
        <ul className="icon-data-list">
          <li>
            <div className="d-flex">
              <h3>Feature Comming Soon..!!!</h3>
              {/* <img src="images/faces/face5.jpg" alt="user" />
              <div>
                <p className="text-info mb-1">Ryan Cortez</p>
                <p className="mb-0">Herbs are fun and easy to grow.</p>
                <small>9:00 am</small>
              </div> */}
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Notification;
