import React, { Component } from 'react'
import Global from '../Global';
import axios from 'axios';
import { NavLink } from 'react-router-dom';

export default class Serie extends Component {

    state = {
        serie: [],
        status: false
    }

    mostrarSerie=()=>{
        var request="api/series/"+this.props.idserie;
        var url = Global.api;

        axios.get(url+request).then((request)=>{
            this.setState({
                serie: request.data,
                status: true
            });
        });
    }
    componentDidMount=()=>{
        this.mostrarSerie();
    }

    componentDidUpdate=(oldProps)=>{
        if(oldProps.idserie !== this.props.idserie){
            this.mostrarSerie();
        }
    }

  render() {
    return (
      <div className="container pt-5">
            {
                this.state.status === true &&
                (
                    <div className="card">
                        <div className="card-header">
                            <img src={this.state.serie.imagen} style={{width:"20rem"}} alt={this.state.serie.nombre}/>

                            <div className="card-body">
                                <h5 className="card-title">Nombre: {this.state.serie.nombre}</h5>
                                <p className="card-text">Puntuación: {this.state.serie.puntuacion}</p>
                                <p className="card-text">Año: {this.state.serie.anyo}</p>
                                <div className="card-footer">
                                <NavLink to={'/personajes/'+this.state.serie.idSerie+'/'+this.state.serie.nombre} className="btn btn-primary">personajes</NavLink>
                                </div>
                               
                            </div>
                        </div>
                    </div>
                )
            }
      </div>
    )
  }
}
