import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import CreateIcon from "@mui/icons-material/Create";
import { Link, useNavigate } from "react-router-dom";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Sidebar from "../sidebar";

export default function StudentData() {
  const [userData, setUserData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function getData() {
      const response = await axios.get(
        "https://62ff2d03a85c52ee48420f24.mockapi.io/Data"
      );
      setUserData(response.data);
    }
    getData();
  }, []);
  const value = (id) => {
    navigate(`/edit/${id}`);
  };

  return (
    <div className=" vh-100">
      {/* <div
        style={{
          padding: "20px",
          backgroundImage: "linear-gradient(to right, #EDFF00FF, #ffff99)",
          height: "100%",
        }}
      >
        <div className="container ">
          <div className="row">
            <h3 className="text-center "> USER DATA </h3>

            {userData.map((row) => (
              <div className="col-md-6 " key={row.id}>
                <div sx={{ width: 275 }}>
                  <div
                    className="card text-center"
                    style={{ background: "#00A4CCFF " }}
                  >
                    <div className="card-body text-black">
                      <h5 className="card-title ">Name:{row.name}</h5>
                      <h6 className="card-subtitle mb-2 ">Age:{row.age}</h6>
                      <h6 className="card-text">Gender:{row.gender}</h6>
                      <h6 className="card-text">Email:{row.email}</h6>
                      <h6 className="card-text">
                        Phone Number:{row.phonenumber}
                      </h6>
                      <h6 className="card-text">Address:{row.email}</h6>
                      <h6 className="card-text">Joining Data:{row.email}</h6>

                      <h6 className="card-text">Course:{row.course}</h6>
                      <br />
                      <div>
                        <Button
                          onClick={() => value(row.id)}
                          variant="contained"
                        >
                          Edit Form
                        </Button>
                        <br />
                        <br />
                        <Button
                          onClick={() => profile(row.id)}
                          variant="contained"
                        >
                          Profile
                        </Button>
                        <br />
                        <br />
                        <Button
                          variant="contained"
                          onClick={async () => {
                            const response = await axios.delete(
                              ` https://62ff2d03a85c52ee48420f24.mockapi.io/Data/${row.id}`
                            );
                            window.location.reload();
                          }}
                        >
                          Delete
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
     */}
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
              <nav className="navbar navbar-dark bg-dark  text-center ">
                <div className="container">
                  <h5 className="navbar-text fw-bold justify-content-center align-content-center ">
                    STUDENT & TEACHER MANAGEMENT
                  </h5>
                </div>
              </nav>
              {/* <!-- End of Topbar -->*/}
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                  <TableHead>
                    <TableRow className="text-uppercase">
                      <TableCell>No</TableCell>
                      <TableCell>Name</TableCell>
                      <TableCell>Age</TableCell>
                      <TableCell>Email</TableCell>
                      <TableCell>Gender</TableCell>
                      <TableCell>Course</TableCell>
                      <TableCell>Phone Number</TableCell>
                      <TableCell>Joining Date</TableCell>
                      <TableCell>Action</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {userData.map((row) => (
                      <TableRow
                        key={row.id}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell>{row.id}</TableCell>
                        <TableCell>{row.name}</TableCell>
                        <TableCell>{row.age}</TableCell>
                        <TableCell>{row.email}</TableCell>
                        <TableCell>{row.gender}</TableCell>
                        <TableCell>{row.course}</TableCell>
                        <TableCell>{row.phonenumber}</TableCell>
                        <TableCell>{row.joindate}</TableCell>
                        <TableCell>
                          <Button>
                            <CreateIcon onClick={() => value(row.id)} />
                          </Button>
                          <Button>
                            <DeleteIcon
                              onClick={async () => {
                                const response = await axios.delete(
                                  ` https://62ff2d03a85c52ee48420f24.mockapi.io/Data/${row.id}`
                                );
                                window.location.reload();
                              }}
                            />
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
