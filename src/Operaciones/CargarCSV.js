import React, { Component } from 'react';
import CSVReader from 'react-csv-reader'

class Cargar_CSV extends Component {
  constructor() {
    super();

    this.state = {
      categoria: 'CEREALES LISTOS',
      variable: ''
    }

    this.subirArchivo = this.subirArchivo.bind(this);
    this.leerCSV = this.leerCSV.bind(this);
  }

  subirArchivo(){
    this.props.darCategoria(this.state);
    console.log(this.state);
  }

  leerCSV(e){
    console.log(e);
    this.setState({
      categoria: e[1][1],
      variable: e[1][2]
    })
    console.log(this.state);
    this.subirArchivo();
  }

  render()
  {
    return(
      <div className="card">
        <div className="card-header">
          <h3 className="text-primary">Cargar Archivo CSV</h3>
        </div>
        <div className="card-body">
          <CSVReader
            id="lectorcsv"
            onFileLoaded={this.leerCSV}/>
        </div>

      </div>
    )
  }
}

export default Cargar_CSV;
