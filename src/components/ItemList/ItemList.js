import React from 'react';
import Item from '../Item/Item';
import ItemCount from '../ItemCount/ItemCount'; // Importa el componente ItemCount

const ItemList = ({ products }) => {
  return (
    <div className="row">
      {products.map(prod => (
        <div key={prod.id} className="col-lg-4 mb-4">
          <div className="card">
            <div className="card-body">
              <Item {...prod} />
            
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
