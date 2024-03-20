import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";

// Importa los métodos necesarios de firebase/firestore y firebase/app
import { getDoc, doc } from "firebase/firestore";
import { db } from "../../services/firebase/firebaseConfig";

const ItemDetailContainer = () => {
    const { itemId } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const docRef = doc(db, 'products', itemId);
                const response = await getDoc(docRef);
                if (response.exists()) {
                    const data = response.data();
                    const productAdapted = { id: response.id, ...data };
                    setProduct(productAdapted);
                } else {
                    console.log('No such document!');
                }
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [itemId]);

    return (
        <div className="container py-5">
            {loading ? <p>Loading...</p> : (product && <ItemDetail {...product} />)}
        </div>
    );
};

export default ItemDetailContainer;
