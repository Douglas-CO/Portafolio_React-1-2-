import React from "react";
import "../App.css" ;
import Trabajando from "../extras/trabajando.gif";

const Proximamente = () => {
    return(
        <div>
            <div className="mover">
                <div className="prox">
                    <br />
                    <img className="gif" style={{maxheight:"10cm", maxWidth:"10cm"}} src={Trabajando}/>
                    <br />
                    <div className="letra"><p>Lo sentimos pero aun no contenemos lo que deseas...
                        Estamos tarbajando si desea ver var puede ir aqui <a href="http://douglascoronadoortiz.epizy.com/DouglasMatiasCoronadoOrtiz.php">Portafolio CRUD PHP</a></p></div>
                </div>
            </div>
        </div>
    )
}

export default Proximamente;