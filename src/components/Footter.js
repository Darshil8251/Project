import React from 'react'
import './Footer.css';
function Footer() {
  return (
    <>
        <nav aria-label="Page navigation example ">
  <ul className="pagination navFooter">
    <li className="page-item">
      <a className="page-link" href="#" aria-label="Previous">
        <span aria-hidden="true" className = "iconarrow">&laquo;</span>
      </a>
    </li>
    <li className="page-item"><a className="page-link a-item" href="#">1</a></li>
    <li className="page-item"><a className="page-link a-item" href="#">2</a></li>
    <li className="page-item"><a className="page-link a-item" href="#">3</a></li>
    <li className="page-item"><a className="page-link a-item" href="#">4</a></li>
    <li className="page-item"><a className="page-link a-item" href="#">5</a></li>
    <li className="page-item"><a className="page-link a-item" href="#">6</a></li>
    <li className="page-item"><a className="page-link a-item" href="#">7</a></li>
    <li className="page-item"><a className="page-link a-item" href="#">8</a></li>
    <li className="page-item">
      <a className="page-link" href="#" aria-label="Next">
        <span aria-hidden="true" className = "iconarrow">&raquo;</span>
      </a>
    </li>
  </ul>
</nav>
    </>
  );
}

export default Footer;