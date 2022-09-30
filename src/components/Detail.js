import axios from "axios";
import React, { useEffect, useState } from "react";
import Pagination from './Pagination';

function Detail() {
  const [Details, setDetails] = useState([{}]);
  // const [number, setnumber] = useState(0);
  const [counter,setcounter]=useState(1);
  
  const [currentPage,setcurrentPage]=useState(1);
  const [postsPerPage]=useState(25);


  const paginate = pageNumber => setcurrentPage(pageNumber);
  const FetchData = async () => {
   
   let res = await fetch(
      "https://heyq.bsite.net/api/api/orderapi/71897957-87eb-45c0-8d50-a73c5490f17e",
      {
        mode: "cors",
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
      }
    )
    let data = await res.json();
    setDetails(data);
    
      // .then((data) => {
      //   return data.json();
      // })
      // .then((data) => {
      //   setDetails(data);
      // });

  };

 useEffect(() => {
  
  FetchData();
   
   },[]);


   setTimeout(() => {
    FetchData();
  }, 1000);   
    
   const indexOfLastPage=currentPage*postsPerPage;
   const indexOfFirstPage=indexOfLastPage-postsPerPage;
   const currentEntry=Details.slice(indexOfFirstPage,indexOfLastPage);

  //  const lastPostIndex=currentPage*postsPerPage;
  // const firstPostIndex=lastPostIndex-postsPerPage;
  const currentPosts=Details.slice(indexOfFirstPage,indexOfLastPage);

  return (
    <>
      <div className="container-fluid">
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css"
        />

        <div className="menu-bar navbar navbar-expand-lg bg-light">
          <div className="container-fluid">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <a className="navbar-brand my-3" href="/">
                Order List
              </a>
              <div className="nav-item">
                <li className="border rounded my-3 mx-3">
                  <p className="navbar-brand navjs ">
                    Filter By <i className="fas fa-caret-down"></i>
                  </p>

                  <div className="dropdown-menu ">
                    <ul>
                      <li>
                        <p className="navbar-item ">
                          Aggregators <i className="fas fa-caret-right"></i>
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
                          Name <i className="fas fa-caret-right "></i>
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
                    Entries per page: <i className="fas fa-caret-down"></i>
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
            </ul>
          </div>
        </div>
      </div>
      <table id="example" className="table table-striped">
        <thead>
          <tr>
            <th scope="col">No</th>
            <th scope="col">Order Details</th>
            <th scope="col">Items</th>
            <th scope="col">Totle price</th>
            <th scope="col">Delivery Details</th>
            <th scope="col">Location</th>
            <th scope="col">Status</th>
          </tr>
        </thead>
        <tbody>
       
          {currentPosts.map((item) => {
            return (
              <tr>
                <th scope="row">{counter}</th>

                <td>
                  <div className="table_order_details">
                    <div>
                      <img
                        className="table_order_details_img"
                        src="logo192.png"
                      />
                    </div>
                    <div className="table_order_details_orderidname">
                      <p>
                        {item.orderId}
                        <br />
                        {item.customerName}
                      </p>
                    </div>
                  </div>
                </td>
                <td>
                  <p>
                    <br />
                    {item.itemName}
                  </p>
                </td>
                <td>
                  <p>{item.price}</p>
                </td>
                <td>
                  <p>{item.deliveryBoyName}</p>
                </td>

                <td>
                  <p>{item.location}</p>
                </td>

                <td>
                  <p className="order_status">{item.status}</p>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
       <Pagination totalPots={Details.length}
        postsPerPage={postsPerPage}
        paginate={paginate}
       />
    </>
  );
}

export default Detail;
