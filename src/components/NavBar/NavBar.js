// NavBar.js
import React from 'react';
import { Link } from 'react-router-dom'; 
import CartWidget from '../CartWidget/CartWidget';

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: '#6A5ACD' }}>
      <div className="container">
        <Link to="/" className="navbar-brand" style={{ color: 'white' }}>Ecommerce</Link>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link to="/remeras" className="nav-link" style={{ color: 'white' }}>Remeras</Link>
            </li>
            <li className="nav-item">
              <Link to="/pantalones" className="nav-link" style={{ color: 'white' }}>Pantalones</Link>
            </li>
            <li className="nav-item">
              <Link to="/vestidos" className="nav-link" style={{ color: 'white' }}>Vestidos</Link>
            </li>
          </ul>
          <CartWidget />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
