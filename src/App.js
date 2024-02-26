// App.js
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
    return (
        <div>
            <div className="App" id="app-root">
                <BrowserRouter>
                    <NavBar />
                    <Routes>
                        <Route path="/" element={<ItemListContainer type="all" />} />
                        <Route
                            path="/remeras"
                            element={<ItemListContainer title="Remeras" type="category" category={"remera"} />}
                        />
                        <Route
                            path="/pantalones"
                            element={<ItemListContainer title="Pantalones" type="category" category={"pantalon"} />}
                        />
                        <Route
                            path="/vestidos"
                            element={<ItemListContainer title="Vestidos" type="category" category={"vestido"} />}
                        />
                        <Route path="/item/:itemId" element={<ItemDetailContainer />} />
                    </Routes>
                </BrowserRouter>
            </div>
        </div>
    );
}

export default App;
