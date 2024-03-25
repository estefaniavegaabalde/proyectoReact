// CheckoutForm.js
import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

const CheckoutForm = ({ onCreateOrder, cart }) => {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: ""
    });

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onCreateOrder(formData, cart); // Pasar cart como argumento a onCreateOrder
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div style={{ width: '100%', maxWidth: '30%' }}>
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="formName">
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control type="text" placeholder="Nombre" name="name" value={formData.name} onChange={handleInputChange} required />
                    </Form.Group>
                    <Form.Group controlId="formPhone">
                        <Form.Label>Teléfono</Form.Label>
                        <Form.Control type="tel" placeholder="Teléfono" name="phone" value={formData.phone} onChange={handleInputChange} required />
                    </Form.Group>
                    <Form.Group controlId="formEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Email" name="email" value={formData.email} onChange={handleInputChange} required />
                    </Form.Group>
                    <Button variant="primary" type="submit" style={{ backgroundColor: '#6A5ACD', width: '100%' }}>Finalizar compra</Button>
                </Form>
            </div>
        </div>
    );
};

export default CheckoutForm;
