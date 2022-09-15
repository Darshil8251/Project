

import React from 'react';
import './Container.css';
import ReactDOM from 'react-dom/client';

function Container() {
  return (
    <div className='Container'>
      <h1>Hii</h1>
    </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
ReactDOM.renRder(<Container/>,root);
export default Container;
