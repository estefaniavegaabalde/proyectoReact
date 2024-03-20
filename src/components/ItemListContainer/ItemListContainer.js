import React, { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import { getProducts } from "../../asyncMock";
import { useParams } from "react-router-dom";

// Importa initializeApp y getFirestore desde firebase/app y firebase/firestore respectivamente
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Importa los métodos necesarios de firestore para realizar la consulta
import { getDocs, collection, query, where } from 'firebase/firestore';

// Importa la instancia de la base de datos de tu archivo firebaseConfig
import { db } from '../../services/firebase/firebaseConfig';

const ItemListContainer = () => {
    const { categoryId } = useParams(); // Obtener el valor del parámetro de ruta categoryId

    const [isLoading, setLoading] = useState(false);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        setLoading(true);

        const collectionRef = categoryId
            ? query(collection(db, 'products'), where('category', '==', categoryId))  
            : collection(db, 'products')
        
        getDocs(collectionRef)
            .then(response => {
                const productsAdapted = response.docs.map(doc => {
                    const data = doc.data()
                    return {id: doc.id, ...data}
                })
                setProducts(productsAdapted)
            })
            .catch(error => {
                console.log(error)
            })
            .finally(() => {
                setLoading(false)
            });
    }, [categoryId]); // Agrega categoryId a las dependencias del efecto

    return (
        <div className="container mt-5">
            <h1 className="h3 mb-3">Products in Category: {categoryId}</h1>
            <div className="row">{isLoading ? <p>Loading...</p> : <ItemList products={products} />}</div>
        </div>
    );
};

export default ItemListContainer;
