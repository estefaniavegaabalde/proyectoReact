// ItemDetail.js
import React from "react";
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({ id, name, img, category, description, price, stock }) => {
    const handleAddToCart = (quantity) => {
        // Aquí puedes manejar la lógica para agregar el producto al carrito con la cantidad seleccionada
        console.log(`Agregado al carrito: ${quantity} unidades`);
    };

    return (
        <article className="row">
            <div class="col-5">
                <picture>
                    <img src={img} alt={name} className="w-100" />
                </picture>
            </div>
            <section className="col-6">
                <header className="Header">
                    <h2 className="h4 fw-semibold">{name}</h2>
                </header>

                <p className="Info">
                    <b>Categoria:</b> {category}
                </p>
                <p className="Info">
                    <b>Descripción:</b> {description}
                </p>
                <p className="Info">
                    <b>Precio:</b> ${price}
                </p>
                <p className="Info">
                    <b>Stock:</b> {stock}
                </p>

                <footer className="ItemFooter">
                    <ItemCount stock={stock} initial={1} onAdd={handleAddToCart} />
                </footer>
            </section>
        </article>
    );
};

export default ItemDetail;
