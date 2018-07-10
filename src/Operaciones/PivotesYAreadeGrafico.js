import React, { Component } from 'react';
import Cargar_CSV from './CargarCSV'
import './Pivotes.css'
import 'https://d3js.org/d3.v4.min.js'

var data = [];
var variable_graficada = '';

class Pivotes_Area_Grafico extends Component {
  constructor(){
    super();

    this.state = {
      categoria: '',
      variable: '',
      Ult_Per: '',
      data

    }

    this.recibirData = this.recibirData.bind(this);
  }

  recibirData(e){
    console.log("Recibo la data", e);
    this.setState({
      categoria: e[1][1],
      variable: variable_graficada,
      Ult_Per: e[0][e[0].length - 1],
      data: e
    })

    this.props.darCategoria({
        categoria: this.state.categoria,
        periodo: this.state.Ult_Per
    });
    console.log(this.state);
  }

  render(){
    return(
      <div>
        <Cargar_CSV darData={this.recibirData}/>
        <div className="card mt-4">
          <form className="form">
            <label><input type="radio" name="mode" value="grouped" /> Grouped</label>
            <label><input type="radio" name="mode" value="stacked" checked /> Stacked</label>
          </form>

          <svg width="960" height="500"></svg>
        </div>
      </div>
    );
  }
}

export default Pivotes_Area_Grafico;
