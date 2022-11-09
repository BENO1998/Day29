import React from "react";
import { Link } from "react-router-dom";
export default function Sidebar() {
  return (
    <>
      {/* 
      <!-- Sidebar --> */}
      <ul
        className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
        id="accordionSidebar"
      >
        {/* <!-- Divider --> */}
        <hr className="sidebar-divider my-0" />

        {/* <!-- Nav Item - Dashboard --> */}
        <li className="nav-item active">
          <Link className="nav-link" to="/">
            <i className="fas fa-fw fa-school"></i>

            <span>Dashboard</span>
          </Link>
        </li>

        {/* <!-- Divider --> */}
        <hr className="sidebar-divider" />
        {/* 
          <!-- Heading --> */}
        <div className="sidebar-heading">Interface</div>

        {/* <!-- Nav Item - Pages Collapse Menu --> */}
        <li className="nav-item">
          <a
            className="nav-link collapsed "
            href="#collapseTwo"
            data-bs-toggle="collapse"
            data-toggle="collapse"
            data-target="#collapseTwo"
            aria-expanded="true"
            aria-controls="collapseTwo"
          >
            <i className="fas fa-fw fa-users"></i>
            <span>Student</span>
          </a>
          <div
            id="collapseTwo"
            className="collapse"
            aria-labelledby="headingTwo"
            data-parent="#accordionSidebar"
          >
            <div
              className="bg-white py-2 collapse-inner rounded"
              id="collapseTwo"
            >
              <Link className="collapse-item" to="/createstudent">
                Add Student
              </Link>
              <Link className="collapse-item" to="/student">
                Student Data
              </Link>
            </div>
          </div>
        </li>

        {/* <!-- Nav Item - Utilities Collapse Menu --> */}
        <li className="nav-item">
          <a
            className="nav-link collapsed"
            data-bs-toggle="collapse"
            href="#collapseUtilities"
            data-toggle="collapse"
            data-target="#collapseUtilities"
            aria-expanded="true"
            aria-controls="collapseUtilities"
          >
            <i className="fas fa-fw fa-users"></i>
            <span>Teacher</span>
          </a>
          <div
            id="collapseUtilities"
            className="collapse"
            aria-labelledby="headingUtilities"
            data-parent="#accordionSidebar"
          >
            <div
              className="bg-white py-2 collapse-inner rounded"
              id="collapseUtilities"
            >
              <Link className="collapse-item" to="/createteacher">
                Add Teacher
              </Link>
              <Link className="collapse-item" to="/teacher">
                Teacher Data
              </Link>
            </div>
          </div>
        </li>

        {/* <!-- Divider --> */}
        <hr className="sidebar-divider" />

        {/* <!-- Divider --> */}
        <hr className="sidebar-divider d-none d-md-block" />

        {/* <!-- Sidebar Toggler (Sidebar) --> */}
        <div className="text-center d-none d-md-inline">
          <button
            className="rounded-circle border-0 "
            id="sidebarToggle"
          ></button>
        </div>
      </ul>
    </>
  );
}
