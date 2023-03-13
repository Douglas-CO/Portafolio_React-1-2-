import React from "react";
import { Link } from "react-router-dom";
import Lista from './DatosMusica/Lista.jsx';

const Musica = () => {
    return(
        <div>
            <div className="mover">
                <Link to="/musica/crear" className='btn modal-btn btn-secondary'>Crear</Link>
                <div><br/></div>
                <Lista/>
            </div>
        </div>
    )
}

export default Musica;