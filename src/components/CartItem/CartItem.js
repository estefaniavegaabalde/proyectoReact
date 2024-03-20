import React from 'react';

function CartItem({ id, name, quantity, price, onRemove }) {
    const subtotal = quantity * price;

    return (
        <div className="cart-item d-flex justify-content-between align-items-center border-bottom mb-2">
            <div className="p-2 bd-highlight">
                <h5>{name}</h5>
            </div>
            <div className="p-2 bd-highlight">Cantidad: {quantity}</div>
            <div className="p-2 bd-highlight">Precio unitario: ${price}</div>
            <div className="p-2 bd-highlight">Subtotal: ${subtotal}</div>
            <div className="p-2 bd-highlight">
                <button className="btn btn-danger" onClick={() => onRemove(id)}>Remover</button>
            </div>
        </div>
    );
}

export default CartItem;
