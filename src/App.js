import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

/*import Cargar_CSV from './Operaciones/CargarCSV'*/

import Pivotes_Area_Grafico from './Operaciones/PivotesYAreadeGrafico'

class App extends Component {

  constructor(){
    super();

    this.state = {
        categoria: 'NA',
        periodo: 'NA'
    }
    this.ponerCategoria = this.ponerCategoria.bind(this);
  }

  ponerCategoria(cabecera){
    this.setState({
      'categoria': cabecera.categoria,
      'periodo': cabecera.periodo
    })
  }

  render() {
    return (
      <div className="App">

        <nav className="navbar navbar-dark bg-dark">
          <p className="text-white mb-0">
            Informacion de <span className="badge badge-pill badge-light">"{this.state.categoria}"</span> con informacion a <span className="badge badge-pill badge-light">"{this.state.periodo}"</span>
          </p>
        </nav>

        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Ejemplo de Grafica en React y D3</h1>
        </header>

        <div className="container">
          <Pivotes_Area_Grafico darCategoria={this.ponerCategoria}/>
        </div>
      </div>
    );
  }
}

export default App;
