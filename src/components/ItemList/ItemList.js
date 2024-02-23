import Item from '../Item/Item';
import React from 'react';

const ItemList = ({ products }) => {
  return (
    <div className="row">
      {products.map(prod => (
        <div key={prod.id} className="col-lg-4 mb-4">
          <Item {...prod} />
        </div>
      ))}
    </div>
  );
};

export default ItemList;
