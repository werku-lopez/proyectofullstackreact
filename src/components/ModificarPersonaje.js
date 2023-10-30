import React, { Component } from 'react'
import Global from '../Global';
import axios from 'axios';
import Swal from 'sweetalert2';
import { Navigate } from 'react-router-dom';

export default class ModificarPersonaje extends Component {

    state = {
        statusSerie: false,
        statusPersonaje: false,
        personajes: [],
        series: [],
        modificated: false
    }

    inputTextPersonaje = React.createRef();
    inputTextSerie = React.createRef();


    loadPersonajes = () => {
        var request = "api/personajes";
        var url = Global.api;

        axios.get(url + request).then((response) => {
            this.setState({
                personajes: response.data,
                statusPersonaje: true
            })
        })
    }

    loadSeries = () => {
        var request = "api/series";
        var url = Global.api;

        axios.get(url + request).then((response) => {
            this.setState({
                series: response.data,
                statusSerie: true
            })
        })
    }

    modificar =(e)=>{
        e.preventDefault();

        var idpersonaje =this.inputTextPersonaje.current.value;
        var idSerie = this.inputTextSerie.current.value;
        
        var request=`/api/Personajes/${idpersonaje}/${idSerie}`;
        var url = Global.api;

        axios.put(url+request).then((response)=>{
            this.setState({
                modificated: true
            });

            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Modificado correctamente',
                showConfirmButton: false,
                timer: 1000
              })
        });
    }
    componentDidMount = () => {
        this.loadPersonajes();
        this.loadSeries();
    }

    render() {
        return (
            <div className="container pt-5">
                {
                    this.state.modificated === true &&
                    (
                        <Navigate to="/"/>
                    )
                }
                <h1>Modificar Personaje</h1><hr />
                <form onSubmit={this.modificar} className="pt-4">
                    <div className="col">
                        <button className="btn btn-primary"> Guardar </button>
                    </div>

                    <div className="row g-3 pt-5">
                        <div className="col">
                            <label htmlFor='series'>Serie:</label>
                            <select id='series' ref={this.inputTextSerie} className="form-control">
                                {
                                    this.state.statusSerie === true &&
                                    (
                                        this.state.series.map((item, index) => {
                                            return (<option key={index} value={item.idSerie}>{item.nombre}</option>)
                                        })
                                    )
                                }
                            </select>
                        </div>
                        <div className="col">
                            <label htmlFor='series'>Personajes:</label>
                            <select id='series' ref={this.inputTextPersonaje} className="form-control">
                                {
                                    this.state.statusPersonaje === true &&
                                    (
                                        this.state.personajes.map((item, index) => {
                                            return (<option key={index} value={item.idPersonaje}>{item.nombre}</option>)
                                        })
                                    )
                                }
                            </select>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}
