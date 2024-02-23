// App.js
import React from 'react';
import NavBar from './components/NavBar/NavBar'; // Importa el componente NavBar
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

import ItemCount from './components/ItemCount/ItemCount'; // Importa el componente ItemCount
import 'bulma/css/bulma.min.css';
import '@fortawesome/fontawesome-free/css/all.css';

function App() {
  return (
    <div className="App">
      <NavBar /> {/* Renderiza el componente NavBar */}
    
      <ItemCount initial={1} stock={10} onAdd={(quantity) => console.log('Cantidad agregada ', quantity)} /> {/* Renderiza el componente ItemCount */}
    </div>
  );
}

export default App;
