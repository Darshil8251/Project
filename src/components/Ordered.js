import React from "react";
import Detail from "./Detail";
import "./Ordered.css";



function Ordered() {
  const mystyle = {
    margintop: "112px",
    marginleft: "261px",
  };

  return (
    <>
      <div className="maincontainer" style={mystyle}>
      <div className="container-fluid">
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css"
          />

          <div className="menu-bar navbar navbar-expand-lg bg-light">
            <div className="container-fluid" style={{ width: "1074px" }}>
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <a className="navbar-brand my-3" href="/">
                  Order List
                </a>
                <div className="nav-item">
                  <li className="border rounded my-3 mx-3">
                    <p className="navbar-brand navjs ">
                      Filter By{" "}
                      <i
                        className="fas fa-caret-down"
                        style={{ marginTop: "3px" }}
                      ></i>
                    </p>

                    <div className="dropdown-menu ">
                      <ul>
                        <li>
                          <p className="navbar-item ">
                            Aggregators{" "}
                            <i
                              className="fas fa-caret-right"
                              style={{ marginTop: "5px" }}
                            ></i>
                          </p>

                          <div className="dropdown-menu-1 dropdown border rounded">
                            <ul>
                              <li>
                                <a href="/" className="dropdown-item">
                                  Zomato
                                </a>
                              </li>
                              <li>
                                <a href="/" className="dropdown-item ">
                                  Swiggy
                                </a>
                              </li>
                              <li>
                                <a href="/" className="dropdown-item">
                                  Uber Eats
                                </a>
                              </li>
                            </ul>
                          </div>
                        </li>
                        <li>
                          <p>
                            Name{" "}
                            <i
                              className="fas fa-caret-right"
                              style={{ marginTop: "4px" }}
                            ></i>
                          </p>

                          <div className="dropdown-menu-1 border rounded ">
                            <ul>
                              <li>
                                <a href="/" className="dropdown-item">
                                  A-Z
                                </a>
                              </li>
                              <li>
                                <a href="/" className="dropdown-item">
                                  Z-A
                                </a>
                              </li>
                            </ul>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </li>
                </div>
                <div className="nav-item">
                  <li className="border rounded mx-3 my-3 ">
                    <p className="navbar-brand navjs ">
                      Entries per page:{" "}
                      <i
                        className="fas fa-caret-down"
                        style={{ marginTop: "3px" }}
                      ></i>
                    </p>

                    <div className="dropdown-menu-3 dropdown-menu border rounded bg-light">
                      <ul>
                        <li>
                          <a href="/" className="dropdown-item">
                            10
                          </a>
                        </li>
                        <li>
                          <a href="/" className="dropdown-item">
                            20
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                </div>
                <div
                  className="status"
                  style={{ marginTop: "20px", marginLeft: "280px" }}
                >
                  Status: <button>Pending</button>
                  <button>Patch</button>
                  <button>Cancelled</button>
                </div>
              </ul>
            </div>
          </div>
        </div>

        <Detail />
    
   </div>
   <br />
    </>
  );
}

export default Ordered;
