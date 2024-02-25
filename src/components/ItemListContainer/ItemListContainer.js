// ItemListContainer.js
import React, { useState, useEffect } from 'react';
import ItemList from '../ItemList/ItemList';
import { getProducts } from '../../asyncMock';
import { useLocation } from 'react-router-dom';

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const location = useLocation();
  const category = location.pathname.split('/')[2]; // Obtener la categoría de la URL

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productsResponse = await getProducts(category);
        setProducts(productsResponse);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, [category]);

  return (
    <div className="container mt-5">
      <h1>Bienvenidos</h1>
      <div className="row">
        <ItemList products={products} />
      </div>
    </div>
  );
};

export default ItemListContainer;
