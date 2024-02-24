import React from 'react';

const Item = ({ id, name, img, price, stock }) => {
  return (
    <article className="CardItem" style={{ backgroundColor: '#f0f0f0', border: '1px solid #ddd', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', padding: '20px', marginBottom: '20px' }}>
      <header className="ItemHeader">
        <h2>{name}</h2>
      </header>

      <picture>
        <img src={img} alt={name} className="ItemImg" style={{ maxWidth: '100%', borderRadius: '8px' }} />
      </picture>

      <section>
        <p className="Info" style={{ marginBottom: '5px' }}>
          Precio: ${price}
        </p>
        <p className="Info" style={{ marginBottom: '5px' }}>
          Stock disponible: {stock}
        </p>
      </section>
      <footer className="ItemFooter">
        <button className="Option" style={{ backgroundColor: '#6a5acd', color: 'white', padding: '8px 20px', borderRadius: '5px', cursor: 'pointer', border: 'none' }}> 
          Ver detalle
        </button>
      </footer>
    </article>
  );
};

export default Item;
