import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMarker, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
 
export default function Lista() {
 
    const [musicas, setMusicas] = useState([]);
    useEffect(() => {
        getMusicas();
    }, []);
 
    function getMusicas() {
        axios.get('http://localhost/backend/musica/').then(function(response) {
            console.log(response.data);
            setMusicas(response.data);
        });
    }
 
    const deleteMusica = (id) => {
        axios.delete(`http://localhost/backend/musica/${id}/delete`).then(function(response){
            console.log(response.data);
            getMusicas();
        });
    }
    return (
        <div className="card border-dark  bg-secondary text-light" style={{maxWidth: "25cm", left:"8cm"}}>
            <div className="row">
                {musicas.map((musica, key) =>
                    <div key={key}>{musica.id}
                        <div className="card-body">
                            <div className="card-tittle">
                                <strong style={{textTransform: "uppercase"}}>{musica.name}</strong>
                            </div>
                            <div className="col-7">
                                <div className="card-body">
                                    <p className="card-text"><strong>{musica.descripcion}</strong></p>
                                </div>
                                <div className="card-text">
                                    <Link to={`${musica.id}/editar`} className="btn btn-info" style={{marginRight: "10px"}}>
                                        <FontAwesomeIcon icon={faMarker}/> EDITAR
                                    </Link>
                                    <button onClick={() => deleteMusica(musica.id)} className="btn btn-danger">
                                        <FontAwesomeIcon icon={faTrashAlt}/> ELIMINAR
                                    </button>
                                </div>
                            </div>
                            <p>Creado: {musica.created_at} Modificado: {musica.updated_at}</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}