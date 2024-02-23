import React from 'react';

const Item = ({ id, name, img, price, stock }) => {
  return (
    <div className=" text-center">
      <img src={img} className="card-img-top" alt={name} />
      <div className="card-body">
        <h5 className="card-title" style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>{name}</h5>
        <p className="card-text">Precio: ${price}</p>
        <p className="card-text">Stock: {stock}</p>
        <button className="btn btn-primary" style={{ backgroundColor: '#6A5ACD' }}>
          Ver detalle
        </button>
      </div>
    </div>
  );
};

export default Item;

