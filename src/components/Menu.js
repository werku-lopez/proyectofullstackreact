import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import Global from '../Global'
import axios from 'axios'

export default class Menu extends Component {

    state = {
        status: false,
        series:[]
    }

    loadSeries =()=>{
        var request = "api/series";
        var url = Global.api;

        axios.get(url+request).then((response)=>{
            this.setState({
                series: response.data,
                status: true
            })
        })
    }

    componentDidMount =()=>{
        this.loadSeries();
    }

    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg bg-body-tertiary">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="/">BET 365</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
                                </li>
                                <li className="nav-item dropdown">
                                    <NavLink className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Series
                                    </NavLink>
                                    <ul className="dropdown-menu">
                                        {
                                            this.state.status === true &&
                                            (
                                                this.state.series.map(function (serie, index) {
                                                    return (<li key={index}><NavLink className="dropdown-item" to={'/serie/'+ serie.idSerie+'/'+serie.nombre}> {serie.nombre}</NavLink></li>)
                                                })
                                            )
                                        }
                                    </ul>
                                </li>
                                <li className="nav-item dropdown">
                                    <NavLink className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Personajes
                                    </NavLink>
                                    <ul className="dropdown-menu">
                                        <li><NavLink className="dropdown-item" to="/modificar-personaje"> Modificar personaje</NavLink></li>
                                        <li><NavLink className="dropdown-item" to="/nuevo-personaje"> Crear personaje</NavLink></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}
