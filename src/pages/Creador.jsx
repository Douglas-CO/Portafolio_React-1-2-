import React from "react";
import creadorInfo from "../extras/creadorInfo.jpeg";

const Creador = () => {
    return(
        <div>
            <div className="mover">
                <div className="info">
                    <img  className="imagenInfo" src={creadorInfo}/>
                    <div>
                    <h4 id="autor">Douglas Matias Coronado Ortiz</h4>
                    <p id="titulos">Estudiante de Ing. Computacion - Programación de Aplicaciones Web</p>
                    <p id="informacion">
                        Soy un estudiante cursando 6to Semestre en la carrera de Ing. Computacion y mi aficion
                        es ser Programador FullStack, tengo conocimientos sobre Javascript, HTML5, CSS, MySQL,
                        pgAdmin y PHP, tambien adquiero conocimientos basicos sobre Java, Fundamentos de Linux
                        y mantenimiento de dispocitivos computarizados.
                    </p>
                    <p id="frase">
                        Frase que me denomina: Lo malo es malo aunque todos lo haga, lo bueno es bueno aunque nadie lo haga.
                    </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Creador;