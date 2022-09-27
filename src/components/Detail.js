import React from "react";

function Detail() {
  let Details = [
    {
      orderId: "75fedf57-9161-42f0-b0d3-26463d2b803d",
      customerName: "Raj Verma",
      location: "Ahemdabad",
      deliveryBoyName: "Ramesh Sharma",
      boyPhone: "999999999",
      marketPlaceName: "Zomato",
      itemName: "Cheese Pizza",
      price: 0,
      status: "Not Accepted",
      orderTime: "2022-09-26T10:12:05.2069909-04:00",
      orderNo: 1,
      toPrepare: "0001-01-01T00:00:00",
    },
    {
      orderId: "266abb3a-e63c-4051-8750-7c90cf1ee865",
      customerName: "Raj Kushwah",
      location: "Ahemdabad",
      deliveryBoyName: "Ramesh Kushwah",
      boyPhone: "999999999",
      marketPlaceName: "Zomato",
      itemName: "Brownie",
      price: 100,
      status: "Not Accepted",
      orderTime: "2022-09-26T10:12:05.210246-04:00",
      orderNo: 2,
      toPrepare: "0001-01-01T00:00:00",
    },
    {
      orderId: "79b9070c-60a5-47ad-842d-45769200b9c5",
      customerName: "Amit Verma",
      location: "Ahemdabad",
      deliveryBoyName: "Raj Rathod",
      boyPhone: "999999999",
      marketPlaceName: "Zomato",
      itemName: "Cheese Pasta",
      price: 200,
      status: "Not Accepted",
      orderTime: "2022-09-26T10:12:05.2102489-04:00",
      orderNo: 3,
      toPrepare: "0001-01-01T00:00:00",
    },
    {
      orderId: "59240827-bae2-4acd-8237-12f79549a5da",
      customerName: "Amit Rathod",
      location: "Ahemdabad",
      deliveryBoyName: "Amit Kushwah",
      boyPhone: "999999999",
      marketPlaceName: "Food Panda",
      itemName: "Burger",
      price: 300,
      status: "Not Accepted",
      orderTime: "2022-09-26T10:12:05.2102498-04:00",
      orderNo: 4,
      toPrepare: "0001-01-01T00:00:00",
    },
    {
      orderId: "12d8e01a-10fc-49ab-8c44-bde59c22f4c7",
      customerName: "Naisarg Verma",
      location: "Ahemdabad",
      deliveryBoyName: "Amit Rathod",
      boyPhone: "999999999",
      marketPlaceName: "Zomato",
      itemName: "Cup Cakes",
      price: 400,
      status: "Not Accepted",
      orderTime: "2022-09-26T10:12:05.2102505-04:00",
      orderNo: 5,
      toPrepare: "0001-01-01T00:00:00",
    },
    {
      orderId: "c244cbf5-eb6d-4822-bcd6-10b849837664",
      customerName: "Amit Rathod",
      location: "Ahemdabad",
      deliveryBoyName: "Naisarg Sharma",
      boyPhone: "999999999",
      marketPlaceName: "Food Panda",
      itemName: "Brownie",
      price: 500,
      status: "Not Accepted",
      orderTime: "2022-09-26T10:12:05.2102516-04:00",
      orderNo: 6,
      toPrepare: "0001-01-01T00:00:00",
    },
    {
      orderId: "cd5f4a57-d7c9-46a6-918f-c3f748979465",
      customerName: "Raj Rathod",
      location: "Ahemdabad",
      deliveryBoyName: "Amit Rathod",
      boyPhone: "999999999",
      marketPlaceName: "Zomato",
      itemName: "Smoothies",
      price: 600,
      status: "Not Accepted",
      orderTime: "2022-09-26T10:12:05.2102537-04:00",
      orderNo: 7,
      toPrepare: "0001-01-01T00:00:00",
    },
    {
      orderId: "13dba61f-0104-491d-8ba8-a2b150251ebc",
      customerName: "Ramesh Verma",
      location: "Ahemdabad",
      deliveryBoyName: "Raj Sharma",
      boyPhone: "999999999",
      marketPlaceName: "Food Panda",
      itemName: "Maggie",
      price: 700,
      status: "Not Accepted",
      orderTime: "2022-09-26T10:12:05.2102544-04:00",
      orderNo: 8,
      toPrepare: "0001-01-01T00:00:00",
    },
    {
      orderId: "29a9cbec-2a37-4c86-8849-b0fdfb6bcb40",
      customerName: "Naisarg Verma",
      location: "Ahemdabad",
      deliveryBoyName: "Raj Verma",
      boyPhone: "999999999",
      marketPlaceName: "Food Panda",
      itemName: "Cup Cakes",
      price: 800,
      status: "Not Accepted",
      orderTime: "2022-09-26T10:12:05.2102551-04:00",
      orderNo: 9,
      toPrepare: "0001-01-01T00:00:00",
    },
    {
      orderId: "a70fbed3-5196-48dc-8d3c-43c65e0e17d7",
      customerName: "Raj Rathod",
      location: "Ahemdabad",
      deliveryBoyName: "Amit Rathod",
      boyPhone: "999999999",
      marketPlaceName: "Food Panda",
      itemName: "Burger",
      price: 900,
      status: "Not Accepted",
      orderTime: "2022-09-26T10:12:05.210256-04:00",
      orderNo: 10,
      toPrepare: "0001-01-01T00:00:00",
    },
  ];

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
          {Details.map((data) => {
            return (
              <tr>
                <th scope="row">{data.orderNo}</th>
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
                        {data.orderNo} <br />
                        {data.customerName}
                      </p>
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
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default Detail;
