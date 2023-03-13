import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
 
export default function Crear() {
    const navigate = useNavigate();
 
    const [inputs, setInputs] = useState([]);
 
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}));
    }
    const handleSubmit = (event) => {
        event.preventDefault();
 
        axios.post('http://localhost/backend/musica/save', inputs).then(function(response){
            console.log(response.data);
            navigate('/musica');
        });
         
    }
    return (
        <div className="moverCrear">
            <div className="border-dark grid gap-3">
                <form onSubmit={handleSubmit}>
                    <h3 className="text-center text-Dark">Datos del Musica</h3>
                    <div className="mb-3">
                        <input type="text" className="form-control" placeholder="Titulo de la Musica" name="name" onChange={handleChange} />
                    </div>
                    <div className="mb-3">
                        <input type="text" className="form-control" placeholder="Descripcion de la Musica" name="descripcion" onChange={handleChange} />
                    </div>    
                    <button type="submit" name="add" className="btn btn-primary" style={{position: "absolute", left: "50%"}}>Save</button>
                </form>
            </div>
        </div>
    )
}