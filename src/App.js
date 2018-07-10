import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Cargar_CSV from './Operaciones/CargarCSV'

class App extends Component {

  constructor(){
    super();

    this.state = {
        categoria: '',
        fabricante: ''
    }

    this.ponerCategoria = this.ponerCategoria.bind(this);

  }

  ponerCategoria(cabecera){
    this.setState({
      'categoria': cabecera.categoria,
      'fabricante': cabecera.fabricante
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Ejemplo de Grafica en React y D3</h1>
        </header>


        <div className="container">
          <div className="panel panel-warning">
            <div className="panel-heading">
              <h3 className="panel-title">Grafica</h3>
            </div>
            <div className="panel-body">
              Informacion de {this.state.categoria} del fabricante {this.state.fabricante}
            </div>
          </div>
        </div>

        <div className="container">
            <Cargar_CSV darCategoria={this.ponerCategoria}/>
        </div>
      </div>
    );
  }
}

export default App;
