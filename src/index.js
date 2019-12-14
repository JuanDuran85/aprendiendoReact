// const elemento = document.createElement('h1'); //se crea un elemento en el html
// elemento.innerText = "Programando sin React"; // agregando el mensaje al elemento en html

// const contenedor = document.getElementById('root');

// contenedor.appendChild(elemento);

import React from 'react';
import ReactDOM from 'react-dom';

const elemento = <h1>Programando con React!!!!!</h1>;
const contenedor = document.getElementById('root');

ReactDOM.render(elemento,contenedor);