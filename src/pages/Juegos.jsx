import React from 'react';
import {Link} from 'react-router-dom';
import Lista from './DatosJuego/Lista';

const Juegos = () => {
    return(
        <div>
            <div className="mover">
                <Link to="/juego/crear" className='btn modal-btn btn-secondary'>Crear</Link>
                <div><br/></div>
                <Lista/>
            </div>
        </div>
    )
}

export default Juegos;