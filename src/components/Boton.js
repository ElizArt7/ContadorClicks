import React from 'react';
import '../components/hojas-estilo/Boton.css';

function Boton({ texto, esBotonDeClic, manejarClic }) {
    return (
        <button 
            className={ esBotonDeClic ? 'botonClick' : 'boton-reiniciar' }
            onClick={manejarClic}>
            {texto}
        </button>
    );
}

export default Boton;