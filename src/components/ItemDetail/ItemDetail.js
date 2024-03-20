import React, { useState, useContext } from "react"; // Importa useContext de React
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext"; // Importa el contexto CartContext

const ItemDetail = ({ id, name, img, category, description, price, stock }) => {
  const [quantityAdded, setQuantityAdded] = useState(0);
  const { addItem } = useContext(CartContext); // Usa useContext para acceder al contexto

  const handleOnAdd = (quantity) => {
    setQuantityAdded(quantity);

    const item = {
      id,
      name,
      price
    };
    addItem(item, quantity);
  };

  return (
    <article className="row">
      <div className="col-5">
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
          {quantityAdded > 0 ? (
            <Link to="/cart" className="btn" style={{ backgroundColor: '#6A5ACD', color: 'white' }}>
              Terminar Compra
            </Link>
          ) : (
            <ItemCount stock={stock} initial={1} onAdd={handleOnAdd} />
          )}
        </footer>
      </section>
    </article>
  );
};

export default ItemDetail;
