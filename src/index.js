import React from 'react';
import {createRoot} from 'react-dom/client';
import  ReactDOM  from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Navbar from "./components/Navbar.js";
import Right from "./components/Right.js"
import Container from './components/Container';
import {StrictMode} from 'react';


// const root = ReactDOM.createRoot(document.getElementById('));
// ReactDOM.render(
//    <React.StrictMode>
//    <Navbar/>
//   <Right/>
//   <Container/>
// </React.StrictMode>
//    ,root
 // );


 const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Navbar/>
  </StrictMode>,
);