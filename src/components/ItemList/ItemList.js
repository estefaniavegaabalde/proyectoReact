import React from "react";
import Item from "../Item/Item";

const ItemList = ({ products }) => {
    return (
        <div className="row" id="item-list">
            {products.map((prod) => (
                <div key={prod.id} className="col-lg-4 mb-4">
                    <Item {...prod} />
                </div>
            ))}
        </div>
    );
};

export default ItemList;
