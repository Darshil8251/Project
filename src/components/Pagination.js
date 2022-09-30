import React from 'react'
import './Pagination.css';


const Pagination = ({
  totalPosts,
  postsPerPage,
  paginate
}) => {
  let pages = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    <h1>hill</h1>
      pages.push(i);
  }

  return (
    <nav>
    <ul className='pagination'>
      {pages.map(number => (
        <>
        <h1>Hill</h1>
        <li key={number} className='page-item'>
          <a onClick={() => paginate(number)} href='!#' className='page-link'>
            {number}
          </a>
        </li>
        </>
        
      ))}
    </ul>
  </nav>
  );
};

export default Pagination;