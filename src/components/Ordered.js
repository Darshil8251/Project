import React from 'react';
import Detail from './Detail';
import './Ordered.css';

function Ordered() {

  const mystyle={
    margintop: "112px",
    marginleft: "261px",

  }

  return (
    <>
      <div className="container" style={mystyle}>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <a className="navbar-brand order_list_name" href="#">
              Order List
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <div className="dropdown border rounded my-3 mx-3">
                  <span className="px-3">Filter by</span>
                  <select className="btn   dropdown-toggle">
                    <option>
                      <a className="dropdown-item" href="#">
                        1
                      </a>
                    </option>
                    <option>
                      <a className="dropdown-item" href="#">
                        2
                      </a>
                    </option>
                    <option>
                      <a className="dropdown-item" href="#">
                        3
                      </a>
                    </option>
                  </select>
                </div>


                <div className="dropdown border rounded my-3 mx-3">
                  <span className="px-3">Entries per page:</span>
                  <select className="btn   dropdown-toggle">
                    <option>
                      <a className="dropdown-item" href="#">
                        1
                      </a>
                    </option>
                    <option>
                      <a className="dropdown-item" href="#">
                        2
                      </a>
                    </option>
                    <option>
                      <a className="dropdown-item" href="#">
                        3
                      </a>
                    </option>
                  </select>
                </div>
              </ul>
              <div >
                <table className="table status_table">
                <tbody><tr>
                    <th scope="col" style={{margin:"10px"}}>
                      <b className="text-dark">Status:</b>
                    </th>
                    <th scope="col">
                      <a href="/" className="order_nav_link">
                        Pending
                      </a>
                    </th>
                    <th scope="col">
                      <a href="/" className="order_nav_link">
                        Patched
                      </a>
                    </th>
                    <th scope="col">
                      <a href="/" className="order_nav_link">
                        Cancelled
                      </a>
                    </th>
                  </tr></tbody>
                  
                </table>
              </div>
            </div>
          </div>
        </nav>

        {/* Order table */}

        <Detail/>
      </div>
    </>
  );
}

export default Ordered;
