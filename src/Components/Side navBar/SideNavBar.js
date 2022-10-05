import React, { useState } from "react";
import { TbLayoutDashboard } from "react-icons/tb";
import { RiArrowDropRightLine, RiTodoLine, RiAddBoxLine } from "react-icons/ri";
import "./SideNavBar.css";
import { ProSidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import { Link } from "react-router-dom";

// import "../../Components/style.css";

const SideNavBar = () => {
  return (
    <nav
      className="sidebar sidebar-offcanvas bg-light rounded pt-1"
      id="sidebar"
    >
      <ul className="nav">
        <li className="nav-item">
          <Link className="nav-link" to="/dashboard">
            {/* <i className="icon-grid menu-icon"></i> */}
            <TbLayoutDashboard className="icon-grid menu-icon" />
            <span className="menu-title">Dashboard</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link">
            <RiTodoLine />
            <span className="menu-title">Add Todo</span>
            <RiArrowDropRightLine className="lead" />
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/AddBirdsDetails">
            <RiAddBoxLine className="mb-1" />
            <span className="menu-title">Add Bird Image</span>
            <RiArrowDropRightLine className="lead" />
          </Link>
        </li>{" "}
        <li className="nav-item">
          <Link className="nav-link" to="/signup">
            <RiAddBoxLine className="mb-1" />
            <span className="menu-title">Add New User</span>
            <RiArrowDropRightLine className="lead" />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default SideNavBar;

// return (
//   <div className="side-nav-container" style={{ width: "250px" }}>
//     <div className="side-nav-items">
//       <div className="nav-items pt-4">
//         <Link to="/dashboard" className="nav-item">
//           <div className=" px-4   d-flex justify-content-between">
//             <h5>Dashboard</h5>
//             <AiFillDashboard className="lead" />
//           </div>
//         </Link>
//         <div className="nav-item px-4 py-2  d-flex justify-content-between">
//           <h5>Dashboard</h5>
//           <AiFillDashboard className="lead" />
//         </div>{" "}
//         <div className="nav-item px-4 py-2  d-flex justify-content-between">
//           <h5>Dashboard</h5>
//           <AiFillDashboard className="lead" />
//         </div>{" "}
//         <div className="nav-item px-4 py-2  d-flex justify-content-between">
//           <h5>Dashboard</h5>
//           <AiFillDashboard className="lead" />
//         </div>{" "}
//         <div className="nav-item px-4 py-2  d-flex justify-content-between">
//           <h5>Dashboard</h5>
//           <AiFillDashboard className="lead" />
//         </div>
//       </div>
//     </div>
//   </div>
// );
