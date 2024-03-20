import React from 'react';
import './Cart.css';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import CartItem from '../CartItem/CartItem';
import { Link } from 'react-router-dom';

const Cart = () => {
    const { cart, clearCart, totalQuantity, removeItem } = useContext(CartContext);

    const handleRemoveItem = (itemId) => {
        removeItem(itemId);
    };

    // Calcula el total a pagar sumando el precio de todos los productos en el carrito
    const totalToPay = cart.reduce((total, product) => total + (product.price * product.quantity), 0);

    if (totalQuantity === 0) {
        return (
            <div className="empty-cart-container">
                <h1>No hay productos en el carrito</h1>
                <Link to='/' className="btn btn-primary">Ir al inicio</Link>
            </div>
        );
    } else {
        return (
            <div>
                {cart.map((product) => (
                    <CartItem
                        key={product.id}
                        {...product}
                        onRemove={() => handleRemoveItem(product.id)}
                    />
                ))}
                <div className="d-flex justify-content-center">
                    <h3 style={{ color: 'rgb(106, 90, 205)' }}>Total: ${totalToPay.toFixed(2)}</h3>
                </div>
                <div className="d-flex justify-content-center mt-3">
                    <button onClick={() => clearCart()} className="btn" style={{ backgroundColor: 'rgb(106, 90, 205)', color: 'white', marginRight: '10px' }}>Limpiar carrito</button>
                    <Link to='/checkout' className='btn' style={{ backgroundColor: 'rgb(106, 90, 205)', color: 'white' }}>Checkout</Link>
                </div>
            </div>
        );
    }
}

export default Cart;
