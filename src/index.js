// const elemento = document.createElement('h1'); //se crea un elemento en el html
// elemento.innerText = "Programando sin React"; // agregando el mensaje al elemento en html

// const contenedor = document.getElementById('root');

// contenedor.appendChild(elemento);

import React from 'react';
import ReactDOM from 'react-dom';

const elemento = <h1>Programando con React!!!!!</h1>; //se crea el elemento
const contenedor = document.getElementById('root'); //se define el dom donde se mostrara el elemento

ReactDOM.render(elemento,contenedor); //renderizando 

const nombre = <span>Juan Duran</span> // creando una variable cualquiera
const numero = 3*6;
const muestra = <h2>Tu nombre es: {nombre}. Ejemplo usando React. El numero es: {numero}</h2> //agregando la varianle a otra variable
const contenedor2 = document.getElementById('segundo');

ReactDOM.render(muestra,contenedor2);

// creamos una variable con un estilo predeterminado
const estilo = {
    color: 'blue', backgroundColor: 'white'
};

//funcion que insertara la hora actual
function hora() {
  const elemento2 = (
      <section>
        <h2 style={estilo}>Reloj en React</h2>
        <h3>Son las {new Date().toLocaleTimeString()}</h3>  
      </section>
  );
  const contenedor3 = document.getElementById('hora');
  ReactDOM.render(elemento2,contenedor3);
};

setInterval(hora,1000);