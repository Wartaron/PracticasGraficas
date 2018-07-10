import React, { Component } from 'react';
import CSVReader from 'react-csv-reader'

class Cargar_CSV extends Component {
  constructor() {
    super();

    this.state = {
      categoria: 'CEREALES LISTOS',
      fabricante: 'KELLOGGS'
    }

    this.subirArchivo = this.subirArchivo.bind(this);
    this.leerCSV = this.leerCSV.bind(this);
  }

  subirArchivo(e){
    this.leerCSV
    e.preventDefault();
    this.props.darCategoria(this.state);
    console.log(this.state);
  }

  leerCSV(e){
    e.preventDefault();
    console.log(e.target.value);
  }

  render()
  {
    return(
        <div className="card">
          <form className="card-body" onSubmit={this.subirArchivo}>
            <div className="form-group">
              <label htmlFor="files" className="text-primary">Carga un Archivo CSV:</label>
              <input
                type="file"
                id="files"
                className="form-control"
                accept=".csv"
                required
                onChange={this.cambiarState} />
            </div>
            <div className="form-group">
              <button type="submit" id="submit-file" className="btn btn-primary" onClick={this.leerCSV}>Upload File</button>
            </div>
          </form>
      </div>
    )
  }
}

export default Cargar_CSV;
