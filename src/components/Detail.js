import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Detail.css";


function Detail() {
  const [Details, setDetails] = useState([{}]);
  const [currentPage, setcurrentPage] = useState(3);
  const [postsPerPage,setpostsPerPage] = useState(5);
  
 
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
    );
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
  }, []);
 
  const lastIndex = currentPage * postsPerPage;
  const firstIndex = lastIndex - postsPerPage;
  const currentPosts = Details.slice(firstIndex, lastIndex);

  const numberOfPages=Math.ceil(Details.length/postsPerPage);

  const pageNumbers = [...Array(numberOfPages + 1).keys()].slice(1)


  const nextPage = () => {
    if(currentPage !== numberOfPages) setcurrentPage(currentPage + 1)
}
const prevPage = () => {
if(currentPage !== 1) setcurrentPage(currentPage - 1)
}

  return (
    <>
      <div>
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
            {currentPosts.map((item, index) => {
              return (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>

                  <td className="table_order_details_orderidname">
                    <div className="table_order_details">
                      <img
                        className="table_order_details_img"
                        src="logo192.png"
                      />
                      {item.orderId} <br />
                      {item.customerName}
                    </div>
                  </td>
                  <td>{item.itemName}</td>
                  <td>{item.price}</td>
                  <td>{item.deliveryBoyName}</td>
                  <td>{item.location}</td>
                  <td className="order_status">{item.status}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
       

        <nav>
            <ul className='pagination justify-content-center'>
                <li className="page-item">
                    <a className="page-link" 
                        onClick={prevPage} 
                        href='#'>
                        
                        Previous
                    </a>
                </li>
                {pageNumbers.map(pgNumber => (
                    <li key={pgNumber} 
                        className= {`page-item ${currentPage == pgNumber ? 'active' : ''} `} >

                        <a onClick={() => setcurrentPage(pgNumber)}  
                            className='page-link' 
                            href='#'>
                            
                            {pgNumber}
                        </a>
                    </li>
                ))}
                <li className="page-item">
                    <a className="page-link" 
                        onClick={nextPage}
                        href='#'>
                        
                        Next
                    </a>
                </li>
            </ul>
        </nav>


      </div>
    </>
  );
}

export default Detail;
