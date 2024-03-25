import React from "react";
import Item from "../Item/Item";

const ItemList = ({ products }) => {
    return (
        <div className="row" id="item-list">
            {products.map((prod) => (
                <div key={prod.id} className="col-lg-4 mb-4">
                    <Item id={prod.id} name={prod.Nombre} img={prod.Imagen} price={prod.Precio} stock={prod.Stock} />
                </div>
            ))}
        </div>
    );
};

export default ItemList;
