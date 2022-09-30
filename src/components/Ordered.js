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

        <Detail />
    
   </div>
   <br />
    </>
  );
}

export default Ordered;
