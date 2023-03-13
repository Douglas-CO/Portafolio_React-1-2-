import React from 'react';
import {Link} from 'react-router-dom';
import Lista from './DatosAnime/Lista.jsx';

const Anime = () => {
    return(
        <div>
            <div className="mover">
                <Link to="/anime/crear" className='btn modal-btn btn-secondary'>Crear</Link>
                <div><br/></div>
                <Lista/>
            </div>
        </div>
    )
}

export default Anime;