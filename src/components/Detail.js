import React, { useEffect, useState } from "react";

function Detail() {
  const [Details, setDetails] = useState([]);

  const FetchData = async () => {
    await fetch(`https://heyq.bsite.net/api/Order/GetOrders`)
      .then((data) => {
        console.log(data);
        setDetails(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    FetchData();
  });
  return (
    <>
      <table className="table">
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
          <tr>
            <th scope="row">1</th>
            <td>
              <div className="table_order_details">
                <div>
                  <img className="table_order_details_img" src="logo192.png" />
                </div>
                <div className="table_order_details_orderidname">
                  <p>harsh vaghasiya</p>
                </div>
              </div>
            </td>
            <td>
              <p>
                #123456789 <br />
                Harsh Vaghasiya
              </p>
            </td>
            <td>
              <p>₹123</p>
            </td>
            <td>
              <p>6358054567</p>
            </td>

            <td>
              <p>Chandkheda</p>
            </td>

            <td>
              <p className="order_status">Pending</p>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default Detail;
