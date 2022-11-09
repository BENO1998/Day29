import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import Sidebar from "./components/sidebar";

export default function Dashboard() {
  return (
    <div>
      <div id="page-top">
        {/* <!-- Page Wrapper --> */}
        <div id="wrapper">
          <Sidebar />
          {/* <!-- Content Wrapper --> */}
          <div id="content-wrapper" className="d-flex flex-column">
            {/* <!-- Main Content --> */}
            <div id="content">
              {/* <!-- Topbar --> */}
              {/* <Navbar /> */}
              {/* <!-- End of Topbar -->*/}
              <div className="   vh-100 ">
                <nav className="navbar navbar-dark bg-dark  text-center">
                  <div className="container">
                    <h5 className="navbar-text fw-bold justify-content-center align-content-center ">
                      STUDENT & TEACHER MANAGEMENT
                    </h5>
                  </div>
                </nav>
                <div className="container p-5 ">
                  <div className="row">
                    <div className="offset-md-3 col-md-6  p-5">
                      <div className="card text-black text-center bg-info">
                        <div className="card-body">
                          <h5 className="card-title fw-bold">STUDENT</h5>
                          <h6 className="card-subtitle mb-2">
                            Student Details
                          </h6>
                          <p className="card-text">
                            CRUD Application to create, read , update and delete
                            data of the student
                          </p>
                          <Button>
                            <Link to="/student" className="card-link">
                              Student Data
                            </Link>
                            <Link to="/createstudent" className="card-link">
                              ADD Student
                            </Link>
                          </Button>
                        </div>
                      </div>
                    </div>
                    <div className=" offset-md-3 col-md-6 p-5">
                      <div className="card text-black text-center bg-info">
                        <div className="card-body">
                          <h5 className="card-title fw-bold">TEACHER</h5>
                          <h6 className="card-subtitle mb-2">
                            Teacher Details
                          </h6>
                          <p className="card-text">
                            CRUD Application to create, read , update and delete
                            data of the Teacher
                          </p>
                          <Button>
                            <Link to="/Teacher" className="card-link">
                              Teacher Data
                            </Link>
                            <Link to="/createTeacher" className="card-link">
                              ADD Teacher
                            </Link>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
