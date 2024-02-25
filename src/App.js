// App.js
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <div className="App">
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer greeting={'Bienvenidos'} />} />
            <Route path="/remeras" element={<ItemListContainer category={'remera'} />} />
            <Route path="/pantalones" element={<ItemListContainer category={'pantalon'} />} />
            <Route path="/vestidos" element={<ItemListContainer category={'vestido'} />} />
            <Route path="/item/:itemId" element={<ItemDetailContainer />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
