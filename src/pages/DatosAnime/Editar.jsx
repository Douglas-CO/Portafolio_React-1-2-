import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
 
export default function Editar() {
    const navigate = useNavigate();
    const [inputs, setInputs] = useState([]);
    const {id} = useParams();
    useEffect(() => {
        getAnime();
    }, []);
 
    function getAnime() {
        axios.get(`http://localhost/backend/anime/${id}`).then(function(response) {
            console.log(response.data);
            setInputs(response.data);
        });
    }

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}));
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        axios.put(`http://localhost/backend/anime/${id}/editar`, inputs).then(function(response){
            console.log(response.data);
            navigate('/anime');
        });
         
    }
    return (
        <div className="moverCrear">
            <div className="border-dark grid gap-3">
                <form onSubmit={handleSubmit}>
                    <h3 className="text-center text-Dark">Editar el Anime</h3>
                    <div className="mb-3">
                        <input type="text" value={inputs.name} className="form-control" name="name" onChange={handleChange} />
                    </div>
                    <div className="mb-3">
                        <input type="text" value={inputs.descripcion} className="form-control" name="descripcion" onChange={handleChange} />
                    </div>    
                    <button type="submit" name="update" className="btn btn-primary" style={{position: "absolute", left: "50%"}}>GUARDAR</button>
                </form>
            </div>
        </div>
    )
}