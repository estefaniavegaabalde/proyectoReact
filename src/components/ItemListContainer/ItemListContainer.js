// ItemListContainer.js
import React, { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import { getProducts } from "../../asyncMock";
import { useLocation } from "react-router-dom";

const ItemListContainer = ({ title = "Bienvenidos", type = "all", category }) => {
    const location = useLocation();

    const [isLoading, setLoading] = useState(false);
    const [products, setProducts] = useState([]);

    // Funcion que se dispara posterior a un cambio
    useEffect(() => {
        setLoading(true);

        const fetchProducts = async () => {
            try {
                const productsResponse = await getProducts(type === "category" ? category : null);
                setProducts(productsResponse);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching products:", error);
                setLoading(false);
            }
        };

        fetchProducts();
    }, [location.pathname]);

    return (
        <div className="container mt-5">
            <h1 className="h3 mb-3">{title}</h1>
            <div className="row">{isLoading ? <p>Cargando...</p> : <ItemList products={products} />}</div>
        </div>
    );
};

export default ItemListContainer;
