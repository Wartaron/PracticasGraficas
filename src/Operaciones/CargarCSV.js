import React, { Component } from 'react';
import CSVReader from 'react-csv-reader'

var data = [];

class Cargar_CSV extends Component {
  constructor() {
    super();

    this.state = {
      categoria: 'CEREALES LISTOS',
      data
    }

    this.leerCSV = this.leerCSV.bind(this);
  }

  leerCSV(e){
    this.setState({
      categoria: e[1][1],
      data: e
    })
    this.props.darData(e);
  }

  render()
  {
    return(
      <div className="card mt-4">
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
