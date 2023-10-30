import React, { Component } from 'react'
import img from "../assets/img/banner.jpg";
export default class Home extends Component {
    render() {
        return (
            <div className="container pt-5">

                <div className="banner d-flex flex-wrap">
                    <div className="col-md-6">
                        <h1> Bienvenido Peliflix 2.2</h1>
                        <p className="text-muted">
                            Hay muchas variaciones de los pasajes de Lorem Ipsum disponibles,
                            pero la mayoría sufrió alteraciones en alguna manera, ya sea porque se le agregó humor,
                            o palabras aleatorias que no parecen ni un poco creíbles. Si vas a utilizar un pasaje de Lorem Ipsum,
                            necesitás estar seguro de que no hay nada avergonzante escondido en el medio del texto.
                            Todos los generadores de Lorem Ipsum que se encuentran en Internet tienden a repetir trozos predefinidos
                            cuando sea necesario, haciendo a este el único generador verdadero (válido) en la Internet.
                            Usa un diccionario de mas de 200 palabras provenientes del latín, combinadas con estructuras muy útiles de sentencias,
                            para generar texto de Lorem Ipsum que parezca razonable. Este Lorem Ipsum generado siempre estará libre de repeticiones,
                            humor agregado o palabras no características del lenguaje, etc
                        </p>
                    </div>
                    <div className="col-md-6">
                        <img src={img}  alt="Peliflix 2.2" style={{width: "100%", height:"100%"}}/>
                    </div>
                </div>
            </div>
        )
    }
}
