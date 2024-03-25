import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext"; // Asegúrate de que la ruta sea correcta
import "./CartWidget.css";
import { Link } from "react-router-dom";

const CartWidget = () => {
    const { totalQuantity } = useContext(CartContext);

    const contenido = (
        <>
            <i className="fas fa-shopping-cart fa-lg cart-icon"></i>
            {totalQuantity > 0 && <span className="cart-quantity">({totalQuantity})</span>}
        </>
    );

    if (totalQuantity === 0) {
        return null;
    }

    return <Link to="/cart">{contenido}</Link>;
};

export default CartWidget;
