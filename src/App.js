import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Cargar_CSV from './Operaciones/CargarCSV'

class App extends Component {

  constructor(){
    super();

    this.state = {
        categoria: 'NA',
        variable: 'NA'
    }
    this.ponerCategoria = this.ponerCategoria.bind(this);
  }

  ponerCategoria(cabecera){
    this.setState({
      'categoria': cabecera.categoria,
      'variable': cabecera.variable
    })
  }

  render() {
    return (
      <div className="App">

        <nav className="navbar navbar-dark bg-dark">
          <p className="text-white mb-0">
            Informacion de <span className="badge badge-pill badge-light">"{this.state.categoria}"</span> con informacion de <span className="badge badge-pill badge-light">"{this.state.variable}"</span>
          </p>
        </nav>

        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Ejemplo de Grafica en React y D3</h1>
        </header>

        <div className="container">
            <Cargar_CSV darCategoria={this.ponerCategoria}/>
        </div>
      </div>
    );
  }
}

export default App;
