import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Sidebar from "./components/Sidebar.jsx";
import Navbar from "./components/Navbar.jsx";
import Contenido from "./pages/Contenido.jsx"
import Musica from "./pages/Musica.jsx"
import Anime from "./pages/Anime.jsx"
import Juegos from "./pages/Juegos.jsx"

import Proximamente from "./pages/Proximamente.jsx"

import Creador from "./pages/Creador.jsx";

import CrearA from "./pages/DatosAnime/Crear.jsx";
import EditarA from "./pages/DatosAnime/Editar.jsx";

import CrearM from "./pages/DatosMusica/Crear";
import EditarM from "./pages/DatosMusica/Editar";

import CrearJ from "./pages/DatosJuego/Crear";
import EditarJ from "./pages/DatosJuego/Editar";

const App = () => {
  return(
    <div>
        <BrowserRouter>
          <Navbar></Navbar>
          <Sidebar></Sidebar>
            <Routes>
              <Route path="/" element={ <Contenido/> }/>
              <Route path="/contenido" element={ <Contenido/> }/>
              <Route path="/creador" element={ <Creador/> }/>
              <Route path="/anime" element={ <Anime/> }/>
              <Route path="/musica" element={ <Musica/> }/>
              <Route path="/juego" element={ <Juegos/> }/>
              <Route path="/proximamente" element={ <Proximamente/> }/>
              
              
              <Route path="anime/crear" element={ <CrearA/> }/>
              <Route path="anime/:id/editar" element={<EditarA />} />

              <Route path="musica/crear" element={ <CrearM/> }/>
              <Route path="musica/:id/editar" element={<EditarM />} />

              <Route path="juego/crear" element={ <CrearJ/> }/>
              <Route path="juego/:id/editar" element={<EditarJ />} />
            </Routes>
              
          
        </BrowserRouter>
    </div>
  )
}

export default App;
