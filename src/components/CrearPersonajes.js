import React, { Component } from 'react'
import Global from '../Global';
import axios from 'axios';
import Swal from 'sweetalert2';
import { Navigate } from 'react-router-dom';

export default class CrearPersonajes extends Component {

    state = {
        status: false,
        series: [],
        statusSerie: false
    }
    inputTextNombre = React.createRef();
    inputTextImagen = React.createRef();
    inputTextSerie = React.createRef();

    insertarPersonaje = (e) => {
        e.preventDefault();
        var request = "api/personajes";
        var url = Global.api;

        var nombre = this.inputTextNombre.current.value;
        var imagen = this.inputTextImagen.current.value;
        var idSerie = parseInt(this.inputTextSerie.current.value);

        var personaje = {
            idPersonaje: 0,
            nombre: nombre,
            imagen: imagen,
            idSerie: idSerie
        }
        console.log(personaje);

        axios.post(url + request, personaje).then((response) => {
            this.setState({ status: true });
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Insertado correctamente',
                showConfirmButton: false,
                timer: 1000
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

    componentDidMount = () => {
        this.loadSeries();
    }

    render() {
        return (
            <div className="container pt-5">
                {
                    this.state.status === true &&
                    (
                        <Navigate to="/"/>
                    )
                }
                <h1>Crear Personaje</h1><hr />
                <form onSubmit={this.insertarPersonaje}>
                    <div className="row g-3">
                        <div className="col">
                            <label htmlFor='nombre'>Nombre:</label>
                            <input ref={this.inputTextNombre} type="text" className="form-control" placeholder="nombre.." />
                        </div>
                        <div className="col">
                            <label htmlFor='imagen'>Imagen:</label>
                            <input ref={this.inputTextImagen} type="file" className="form-control" placeholder="imagen.." />
                        </div>
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
                    </div>
                    <button className="btn btn-primary"> Guardar </button>
                </form>
            </div>
        )
    }
}
