import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importa el archivo CSS de Bootstrap
import CartWidget from '../CartWidget/CartWidget';
import { NavLink, Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: '#6A5ACD' }}>
      <div className="container">
        <Link to="/" className="navbar-brand" style={{ color: 'white' }}>Ecommerce</Link>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <NavLink exact to="/" className="nav-link" activeClassName="ActiveOption" style={{ color: 'white' }}>Remeras</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/category/pantalon" className="nav-link" activeClassName="ActiveOption" style={{ color: 'white' }}>Pantalones</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/category/vestido" className="nav-link" activeClassName="ActiveOption" style={{ color: 'white' }}>Vestidos</NavLink>
            </li>
          </ul>
          <CartWidget />
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
