import React from 'react'
import { Link } from 'react-router-dom';

function Navbar(){
    return (
        <>
       <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <Link className="navbar-brand" style={{paddingLeft: "110px"}} to="/">Finance App</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse flex-row-reverse" style={{paddingRight: '120px'}} id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">News</Link>
        </li>
       
        <li className="nav-item">
          <Link className="nav-link" to="/dailygainers">Market Gainers </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/dailylosers">Market Losers </Link>
        </li>
         <li className="nav-item">
          <Link className="nav-link" to="/about">About</Link>
        </li>
       
      </ul>
    </div>
  </div>
</nav>
        </>
    )
}
export default Navbar;