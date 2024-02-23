
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; // Importa el componente App
// App.js o index.js
import 'bulma/css/bulma.min.css';



ReactDOM.render(
  <React.StrictMode>
    <App /> {/* Renderiza el componente App dentro del elemento con id "root" */}
  </React.StrictMode>,
  document.getElementById('root') // Encuentra el elemento con id "root" en tu HTML
);