  import React, { useState } from 'react';
  import './ItemCount.css'; // Importar el archivo CSS aquí

  const ItemCount = ({ stock, initial, onAdd }) => {
    const [quantity, setQuantity] = useState(initial);

    const increment = () => {
      if (quantity < stock) {
        setQuantity(quantity + 1);
      }
    };

    const decrement = () => {
      if (quantity > 1) {
        setQuantity(quantity - 1);
      }
    };

    return (
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-auto">
            <button
              className="btn"
              style={{ backgroundColor: '#6A5ACD', color: 'white' }}
              onClick={decrement}
            >
              -
            </button>
          </div>
          <div className="col-auto">
            <h4>{quantity}</h4>
          </div>
          <div className="col-auto">
            <button
              className="btn"
              style={{ backgroundColor: '#6A5ACD', color: 'white' }}
              onClick={increment}
            >
              +
            </button>
          </div>
        </div>
        <div className="row justify-content-center mt-3">
        <div className="col-auto">{/* Aquí asignamos la clase btn-purple */}
          <button
            className="btn-purple" onClick={() => onAdd(quantity)} disabled={!stock}>
            Añadir al carrito
          </button>
        </div>
        </div>
      </div>
    );
  };

  export default ItemCount;
