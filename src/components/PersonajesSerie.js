import React, { Component } from 'react'
import Global from '../Global';
import axios from 'axios';
import { NavLink } from 'react-router-dom';

export default class PersonajesSerie extends Component {

    state = {
        personajes: [],
        status: false,
    }

    loadPersonajesSerie = () => {
        var request = "api/series/personajesserie/" + this.props.idserie;
        var url = Global.api;

        axios.get(url + request).then((response) => {
            this.setState({
                personajes: response.data,
                status: true
            });
        })
    }

    componentDidMount = () => {
        this.loadPersonajesSerie();
    }

    render() {
        return (
            <div className="container pt-5">
                <NavLink to={'/serie/'+this.props.idserie+'/'+this.props.nombre} className="btn btn-outline-danger" > Volver</NavLink>
                {
                    this.state.status === true &&
                    (
                        <table className="table table-hover">
                            <thead>
                                <tr>
                                    <th>Id personaje</th>
                                    <th>Id serie</th>
                                    <th scope="col">Nombre</th>
                                    <th scope="col">Imagen</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.personajes.map((item, index) => {
                                        return (
                                            <tr key={index}>
                                                <td>{item.idPersonaje}</td>
                                                <td>{item.idSerie}</td>
                                                <td>{item.nombre}</td>
                                                <td>{item.imagen}</td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    )
                }
            </div>
        )
    }
}
