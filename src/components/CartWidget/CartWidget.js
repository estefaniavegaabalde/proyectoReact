import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext'; // Asegúrate de que la ruta sea correcta
import './CartWidget.css';

const CartWidget = () => {
  const { cart } = useContext(CartContext);

  // Calcula la cantidad total de productos en el carrito
  const totalItems = cart.reduce((acc, current) => acc + current.quantity, 0);

  return (
    <div>
    <i className="fas fa-shopping-cart fa-lg cart-icon"></i>
    {totalItems > 0 && <span className="cart-quantity">({totalItems})</span>}
  </div>
  
  );
}

export default CartWidget;
