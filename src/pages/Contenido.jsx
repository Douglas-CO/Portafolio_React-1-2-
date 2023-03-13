import React from "react";
import anime from "../extras/apple.jpg";
import musica from "../extras/musica.jpg";
import juegos from "../extras/juegos.jpg";
import proximamente from "../extras/proximamente.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-dom';

const Contenido = () => {
    return(
        <div>
            <div className="mover">
                <div className="card-group">
                    <div className="card">
                        <img className="card-img-top" style={{height:"40mm"}} src={anime}/>
                        <div className="name">Anime
                            <br/>
                            <Link to="/anime">
                                <FontAwesomeIcon icon={faEye}/>
                            </Link>
                        </div>
                        <div className="card-body">
                        <p className="card-text">
                            El anime cuyo genero de origen es japones se caracteriza por un grafismo unico con argumentos que
                            frecuentemente tratan temas de fantasia, futuristas, Accion, Aventura, etc. 
                            Aqui puedes agregar tu anime favorito para que todos sepan y se familiaricen contigo.
                            ¡¿Que esperas?!, ¡Vamos!
                        </p>
                        <p className="card-text"><small className="text-muted">Douglas Matias Coronado Ortiz</small></p>
                        </div>
                    </div>
                    <div className="card">
                        <img className="card-img-top" style={{height:"40mm"}} src={musica}/>
                        <div className="name">Musicas
                            <br/>
                            <Link to="/musica">
                                <FontAwesomeIcon icon={faEye}/>
                            </Link>
                        </div>
                        <div className="card-body">
                        <p className="card-text">
                            El cuarto arte del mundo, la musica, aquellas melodias que forman una armonia y transmite un mensaje
                            que en el mejor de los casos llegan en lo mas profundo del alma. 
                            Aqui puedes agregar tu musica favorita para que todos sepan y se familiaricen contigo.
                            ¡¿Que esperas?!, ¡Vamos!
                        </p>
                        <p className="card-text"><small className="text-muted">Douglas Matias Coronado Ortiz</small></p>
                        </div>
                    </div>
                    <div className="card">
                        <img className="card-img-top" style={{height:"40mm"}} src={juegos}/>
                        <div className="name">Juegos
                        <br/>
                            <Link to="/juego">
                                <FontAwesomeIcon icon={faEye}/>
                            </Link>
                        </div>
                        <div className="card-body">
                        <p className="card-text">
                            Los videjuegos es una forma de entretenimiento varian sus Generos, Consolas y Compañias, sin embargo,
                            pueden llegar a facilitar el aprendizaje para contenidos educativos y el desarrollo de habilidades cognitivas. 
                            Aqui puedes agregar tu jeugo favorita para que todos sepan y se familiaricen contigo.
                            ¡¿Que esperas?!, ¡Vamos!
                        </p>
                        <p className="card-text"><small className="text-muted">Douglas Matias Coronado Ortiz</small></p>
                        </div>
                    </div>
                    <div className="card">
                        <img className="card-img-top" style={{height:"40mm"}} src={proximamente}/>
                        <div className="name">PROXIMAMENTE
                            <br/>
                            <Link to="/proximamente">
                                <FontAwesomeIcon icon={faEye}/>
                            </Link>
                        </div>
                        <div className="card-body">
                        <p className="card-text">
                            Lamentamos no contener mas categorias, por favor tenga paciencia que pronto tendremos mas de lo que quieres
                        </p>
                        <p className="card-text"><small className="text-muted">Douglas Matias Coronado Ortiz</small></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contenido;