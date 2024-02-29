// NavBar.js
import React from 'react';
import { Link } from 'react-router-dom'; 
import CartWidget from '../CartWidget/CartWidget';
import { products } from '../../asyncMock'; // Importa los productos

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: '#6A5ACD' }}>
      <div className="container">
        <Link to="/" className="navbar-brand" style={{ color: 'white' }}>Ecommerce</Link>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            {/* Genera dinámicamente los enlaces según las categorías */}
            {products.map(product => (
              <li key={product.category} className="nav-item">
                <Link to={`/category/${product.category}`} className="nav-link" style={{ color: 'white' }}>
                  {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
                </Link>
              </li>
            ))}
          </ul>
          <CartWidget />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
