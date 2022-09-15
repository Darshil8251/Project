import React from 'react';
import ReactDOM from 'react-dom/client';

function Right() {
  const style = {
    boxsizing: "border-box",
    display: "flex",
    flexdirection: "column",
    alignitems: "flex-start",
    padding: "12px 32px",
    gap: "10px",
    position: "absolute",
    width: "690px",
    height: "22px",
    left: "261px",
    top: "32px",
    background: "#FFFFFF",
    border: "1px solid rgba(31, 31, 31, 0.2)",
    borderradius: "20px",
  };

  return (
    <div>
      <input type="text" placeholder='Search Name, Order ID or Items' style={style} />
    </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById('right'));
root.render(<Right/>);
export default Right;



