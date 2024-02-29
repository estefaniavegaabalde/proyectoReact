// ItemListContainer.js
import React, { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import { getProducts } from "../../asyncMock";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
    const { categoryId } = useParams(); // Obtener el valor del parámetro de ruta categoryId

    const [isLoading, setLoading] = useState(false);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        setLoading(true);

        const fetchProducts = async () => {
            try {
                const productsResponse = await getProducts(categoryId);
                setProducts(productsResponse);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching products:", error);
                setLoading(false);
            }
        };

        fetchProducts();
    }, [categoryId]); // Dependencia categoryId para reaccionar a cambios en la URL

    return (
        <div className="container mt-5">
            <h1 className="h3 mb-3">Products in Category: {categoryId}</h1>
            <div className="row">{isLoading ? <p>Loading...</p> : <ItemList products={products} />}</div>
        </div>
    );
};

export default ItemListContainer;
