import React from 'react';
import './Navbar.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";
import trackall from "./track all.svg";
import Right from './Right';
import Dashboar from './Dashboard';

// import {Switch} from "react-router-dom";


const Navbar = () => {
  return (

    <>
      <div className="left">
      <img src="trackall" alt="track all" />
      <hr style={{
        position: "absolute",
        width: "226px",
        height: "0px",
        left: "0px",
        top: "85px",
        border: "0.4px solid rgba(31, 31, 31, 0.5)"
      }
      } />

      <div className='Navbar'>
        <ul>
          <li><Link to="/dashboard">Dashboard</Link></li>
          <li><Link to="/ordered" > Ordered</Link></li>
          <li><Link to="/inventory" > Inventory</Link></li>
          <li ><Link to="/resources" > Resource</Link></li>
        </ul>
      </div>
    </div>
    </>
  );
}

export default Navbar

