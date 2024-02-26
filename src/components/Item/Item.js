import React from "react";
import { Link } from "react-router-dom";

const Item = ({ id, name, img, price, stock }) => {
    return (
        <article
            className="CardItem"
            style={{
                backgroundColor: "#f0f0f0",
                border: "1px solid #ddd",
                borderRadius: "8px",
                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                padding: "20px",
                marginBottom: "20px",
            }}
        >
            <header className="ItemHeader">
                <h2>{name}</h2>
            </header>

            <picture>
                <img src={img} alt={name} className="ItemImg" style={{ maxWidth: "100%", borderRadius: "8px" }} />
            </picture>

            <section>
                <p className="Info" style={{ marginBottom: "5px" }}>
                    Precio: ${price}
                </p>
                <p className="Info" style={{ marginBottom: "5px" }}>
                    Stock disponible: {stock}
                </p>
            </section>
            <footer className="ItemFooter">
                <Link to={`/item/${id}`} className="btn btn-info">
                    Ver detalle
                </Link>
            </footer>
        </article>
    );
};

export default Item;
