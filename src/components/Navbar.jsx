import React from "react";
import {Link} from 'react-router-dom';
import dibujo from '../extras/dibujo.png';

const Navbar = () => {
    return(
        <div className="arriba">
            <nav className="navbar bg-dark text-light">
                <Link to="/">
                    <img src={ dibujo } alt="otro" className="otro"/>
                </Link>
            </nav>
        </div>
    )
}

export default Navbar;