import React from 'react';
import ReactDOM from 'react-dom/client';
import './Navbar.css';
import mylogo from './track all.svg';
import vector from './Vector.svg';
import Dashboard from './Vector.jpg';
import Ordered from './Ordered.svg';
import Inventory from './Inventory.svg';
import Resources from './Resources.svg';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Right from './Right';
import Container from './Container';


const Header = () => {
  return (
    <>
      <div className="left">
      <img  className='img1' src={mylogo} alt="ReactLogo" />
      <img src={vector} alt="vector" />
        <hr style={{ position: "absolute",
            width: "226px",
            height: "0px",
            left: "0px",
            top: "85px",
            border: "0.4px solid rgba(31, 31, 31, 0.5)"}
            
        }  />
        <Router>
        <div className='Navbar'>
     <ul>
          <li> <img  className='Images1' src={Dashboard} alt="Dashboard"  /><Link to="/Dashboard">Dashboard</Link></li>
          <li> <img className='Images' src={Ordered} alt="Ordered" /><Link to="/Ordered" > Ordered</Link></li>
          <li> <img  className='Images' src={Inventory} alt="" /><Link to="/Inventory" > Inventory</Link></li>
          <li> <img className='Images' src={Resources} alt="" /><Link to="/Resources" > Resources</Link></li>
      </ul>
     </div>
        </Router>
      </div> 
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Header />);
export default Header
