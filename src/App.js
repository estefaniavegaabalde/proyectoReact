// App.js
import React from 'react';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importa el CSS de Bootstrap

function App() {
  return (
    <div>
      <NavBar />
      <div className="container mt-5">
        <div className="row">
          <div className="col-lg-8">
            <ItemListContainer greeting={'Bienvenidos'} />
          </div>
          <div className="col-lg-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Añadir al carrito</h5>
                <ItemCount initial={1} stock={10} onAdd={(quantity) => console.log('Cantidad agregada ', quantity)} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
