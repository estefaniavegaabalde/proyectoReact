// ItemDetail.js
import React from 'react';
import ItemCount from '../ItemCount/ItemCount';

const ItemDetail = ({ id, name, img, category, description, price, stock }) => {
    const handleAddToCart = (quantity) => {
        // Aquí puedes manejar la lógica para agregar el producto al carrito con la cantidad seleccionada
        console.log(`Agregado al carrito: ${quantity} unidades`);
    };

    return (
        <article className="CardItem">
            <header className="Header">
                <h2 className="ItemHeader">{name}</h2>
            </header>
            <picture>
                <img src={img} alt={name} className="ItemImg" />
            </picture>
            <section>
                <p className="Info">
                    Categoria: {category}
                </p>
                <p className="Info">
                    Descripción: {description}
                </p>
                <p className="Info">
                    Precio: ${price}
                </p>
                <p className="Info">
                    Stock: {stock}
                </p>
            </section>
            <footer className='ItemFooter'>
                <ItemCount stock={stock} initial={1} onAdd={handleAddToCart} />
            </footer>
        </article>
    );
};

export default ItemDetail;
