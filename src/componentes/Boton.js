import React from 'react';
import '../hojas-de-estilo/Boton.css'

function Boton({ texto, esBotonDeClic, manejarClic }) {
  return (
    <button
    
    className={ esBotonDeClic ? 'boton-clic' : 'boton-reiniciar' }
    onClick={manejarClic}>
      {texto}
    </button>

  );
}

export default Boton;

//En React-JS comúnmente se trabaja con la sintaxis de des-estructuración
//https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment