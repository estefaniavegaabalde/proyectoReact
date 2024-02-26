// ItemDetailContainer.js
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProductsById } from "../../asyncMock";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
    const { itemId } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        getProductsById(itemId)
            .then((response) => {
                setProduct(response);
            })
            .catch((error) => {
                console.error(error);
            });
    }, [itemId]);

    return <div className="container py-5">{product && <ItemDetail {...product} />}</div>;
};

export default ItemDetailContainer;
