// Checkout.js
import React, { useState } from "react";
import CheckoutForm from "../CheckoutForm/CheckoutForm";
import { useCart } from "../../context/CartContext";
import { db } from "../../services/firebase/firebaseConfig";
import { addDoc, collection } from "firebase/firestore";

const Checkout = () => {
    const [orderId, setOrderId] = useState(null);
    const { cart, clearCart } = useCart();

    const handleCreateOrder = async (formData, cart) => {
        // Asegúrate de tener cart como segundo argumento
        try {
            // Crear la orden en Firestore
            const orderData = {
                buyer: {
                    name: formData.name,
                    phone: formData.phone,
                    email: formData.email,
                },
                items: cart.map((product) => ({
                    id: product.id,
                    name: product.name,
                    quantity: product.quantity,
                })),
                // Otros datos de la orden
            };

            const orderRef = await addDoc(collection(db, "orders"), orderData);

            // Actualizar el stock de productos en Firestore
            await actualizarStock(cart);

            // Establecer el ID de la orden en el estado
            setOrderId(orderRef.id);

            // Limpiar el carrito después de completar la compra
            clearCart();
        } catch (error) {
            console.error("Error al completar la compra:", error);
        }
    };

    const actualizarStock = async (productos) => {
        try {
            productos.forEach(async (producto) => {
                const productoRef = db.collection("Items").doc(producto.id);
                await productoRef.update({
                    stock: producto.stock - producto.quantity,
                });
                console.log(`Stock actualizado para ${producto.name}`);
            });

            console.log("Stock actualizado exitosamente en Firestore");
        } catch (error) {
            console.error("Error al actualizar el stock en Firestore:", error);
        }
    };

    return (
        <div className="container pt-5">
            <h1 className="h1">Checkout</h1>

            {orderId ? (
                <div class="text-center">
                    <i className="display-4 green far fa-check-circle"></i>
                    <p>El ID de su orden es: {orderId}</p>
                </div>
            ) : (
                <CheckoutForm onCreateOrder={handleCreateOrder} cart={cart} />
            )}
        </div>
    );
};

export default Checkout;
