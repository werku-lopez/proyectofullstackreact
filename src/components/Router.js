import React, { Component } from 'react'
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom'
import Menu from './Menu'
import Home from './Home'
import Serie from './Serie';
import PersonajesSerie from './PersonajesSerie';
import CrearPersonajes from './CrearPersonajes';
import ModificarPersonaje from './ModificarPersonaje';

export default class Router extends Component {
  render() {
    function MostrarSerie(){
        var {idserie, nombre}=useParams();
        return(<Serie idserie={idserie} nombre={nombre}/>)
    }
    function MostrarPersonajesSerie(){
        var {idserie, nombre}=useParams();
        return(<PersonajesSerie idserie={idserie} nombre={nombre}/>)
    }
    return (
        <BrowserRouter>
            <Menu/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path='/serie/:idserie/:nombre' element={<MostrarSerie/>}/>
                <Route path='/personajes/:idserie/:nombre' element={<MostrarPersonajesSerie/>}/>
                <Route path='/nuevo-personaje' element={<CrearPersonajes/>}/>
                <Route path='/modificar-personaje' element={<ModificarPersonaje/>}/>
            </Routes>
        </BrowserRouter>
    )
  }
}
