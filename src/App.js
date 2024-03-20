import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import "bootstrap/dist/css/bootstrap.min.css";
import { CartProvider } from "./context/CartContext"; // Importa CartProvider desde el directorio Context
import Cart from './components/Cart/Cart'

function App() {
    return (
        <div>
            <div className="App" id="app-root">
                <BrowserRouter>
                    <CartProvider> {/* Usa CartProvider aquí */}
                        <NavBar />
                        <Routes>
                            <Route path="/" element={<ItemListContainer type="all" />} />
                            <Route path="/category/:categoryId" element={<ItemListContainer />} />
                            <Route path="/item/:itemId" element={<ItemDetailContainer />} />
                            <Route path="/cart" element= {<Cart/>} /> 
                            
                            <Route path="/#" element= {<h1>404 NOT FOUND</h1>} /> 
                        </Routes>
                    </CartProvider>
                </BrowserRouter>
            </div>
        </div>
    );
}

export default App;
