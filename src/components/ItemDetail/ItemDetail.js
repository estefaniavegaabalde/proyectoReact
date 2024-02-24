L// ItemDetail.js
import React from 'react';
import ItemCount from '../ItemCount/ItemCount';

const ItemDetail = ({ id, name, img, category, description, price, stock }) => {
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
                <Link to={`/item/${id}`} className="Option"> Ver detalle</Link> {/* Corrige la llave cerrada y el formato de la URL */}
            </footer>
        </article>
    );
};

export default ItemDetail;
