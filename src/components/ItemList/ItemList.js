import React from 'react';
import { Link } from 'react-router-dom';
import Item from '../Item/Item';

const ItemList = ({ products }) => {
  return (
    <div className="row">
      {products.map(prod => (
        <div key={prod.id} className="col-lg-4 mb-4">
          <div className="card">
            <div className="card-body">
              <Item {...prod} />
              <Link to={`/item/${prod.id}`} className="btn btn-primary" style={{ backgroundColor: '#6a5acd' }}>Ver detalle</Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
