const elemento = document.createElement('h1'); //se crea un elemento en el html
elemento.innerText = "Programando desde React"; // agregando el mensaje al elemento en html

const contenedor = document.getElementById('root');

contenedor.appendChild(elemento);
