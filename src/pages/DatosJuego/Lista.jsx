import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMarker, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
 
export default function Lista() {
 
    const [juegos, setJuegos] = useState([]);
    useEffect(() => {
        getJuegos();
    }, []);
 
    function getJuegos() {
        axios.get('http://localhost/backend/juego/').then(function(response) {
            console.log(response.data);
            setJuegos(response.data);
        });
    }
 
    const deleteJuego = (id) => {
        axios.delete(`http://localhost/backend/juego/${id}/delete`).then(function(response){
            console.log(response.data);
            getJuegos();
        });
    }
    return (
        <div className="card border-dark  bg-secondary text-light" style={{maxWidth: "25cm", left:"8cm"}}>
            <div className="row">
                {juegos.map((juego, key) =>
                    <div key={key}>{juego.id}
                        <div className="card-body">
                            <div className="card-tittle">
                                <strong style={{textTransform: "uppercase"}}>{juego.name}</strong>
                            </div>
                            <div className="col-7">
                                <div className="card-body">
                                    <p className="card-text"><strong>{juego.descripcion}</strong></p>
                                </div>
                                <div className="card-text">
                                    <Link to={`${juego.id}/editar`} className="btn btn-info" style={{marginRight: "10px"}}>
                                        <FontAwesomeIcon icon={faMarker}/> EDITAR
                                    </Link>
                                    <button onClick={() => deleteJuego(juego.id)} className="btn btn-danger">
                                        <FontAwesomeIcon icon={faTrashAlt}/> ELIMINAR
                                    </button>
                                </div>
                            </div>
                            <p>Creado: {juego.created_at} Modificado: {juego.updated_at}</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}