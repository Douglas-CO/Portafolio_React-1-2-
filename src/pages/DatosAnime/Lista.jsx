import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMarker, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
 
export default function Lista() {
 
    const [animes, setAnimes] = useState([]);
    useEffect(() => {
        getAnimes();
    }, []);
 
    function getAnimes() {
        axios.get('http://localhost/backend/anime/').then(function(response) {
            console.log(response.data);
            setAnimes(response.data);
        });
    }
 
    const deleteAnime = (id) => {
        axios.delete(`http://localhost/backend/anime/${id}/delete`).then(function(response){
            console.log(response.data);
            getAnimes();
        });
    }
    return (
        <div className="card border-dark  bg-secondary text-light" style={{maxWidth: "25cm", left:"8cm"}}>
            <div className="row">
                {animes.map((anime, key) =>
                    <div key={key}>{anime.id}
                        <div className="card-body">
                            <div className="card-tittle">
                                <strong style={{textTransform: "uppercase"}}>{anime.name}</strong>
                            </div>
                            <div className="col-7">
                                <div className="card-body">
                                    <p className="card-text"><strong>{anime.descripcion}</strong></p>
                                </div>
                                <div className="card-text">
                                    <Link to={`${anime.id}/editar`} className="btn btn-info" style={{marginRight: "10px"}}>
                                        <FontAwesomeIcon icon={faMarker}/> EDITAR
                                    </Link>
                                    <button onClick={() => deleteAnime(anime.id)} className="btn btn-danger">
                                        <FontAwesomeIcon icon={faTrashAlt}/> ELIMINAR
                                    </button>
                                </div>
                            </div>
                            <p>Creado: {anime.created_at} Modificado: {anime.updated_at}</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}