import React, { Component } from 'react';
import Cargar_CSV from './CargarCSV'
import './Pivotes.css'
import * as d3 from 'd3'

var data = [];
var variable_graficada = '';
var product_graficado = '';
var mercado_graficado = '';

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
    this.graficar = this.graficar.bind(this);
  }

  recibirData(e){
    this.setState({
      categoria: e[1][1],
      variable: variable_graficada,
      product: product_graficado,
      mercado: mercado_graficado,
      Ult_Per: e[0][e[0].length - 1],
      data: e
    })

    this.props.darCategoria({
        categoria: this.state.categoria,
        periodo: this.state.Ult_Per
    });
  }

  capturarValor(e){
    if (e.target.name === "variables") {
      variable_graficada = e.target.value;
    }else if (e.target.name === "mercados") {
      mercado_graficado = e.target.value;
    }else if (e.target.name === "productos") {
      product_graficado = e.target.value;
    }

    console.log(variable_graficada, mercado_graficado, product_graficado);
  }

  graficar(e){
    e.preventDefault();
    var datos = this.devolverDatosSegunPivot();

    var n = 1; //Numero de series (Periodos)
    var m = datos[0].length - 3; //Numero de valores por serie

    var xz = d3.range(m),
        yz = datos[1].filter((dato, i) =>{
          return i > 2;
        });

        yz = yz.map((dato, i) =>{
          return parseFloat(dato);
        });

    var y01z = d3.stack().keys(d3.range(n))(d3.transpose(yz)),
        yMax = d3.max(yz, function(y) { return d3.max(y); }),
        y1Max = d3.max(y01z, function(y) { return d3.max(y, function(d) { return d[1]; }); });

    console.log(xz);
    console.log(yz);
    console.log(y01z);
    console.log(yMax);
    console.log(y1Max);
  }

  devolverDatosSegunPivot(){
    var datos = [];

    datos = this.state.data.filter((dim, i)=>{
      if (i === 0) {
        return true;
      }else if (dim[0] === mercado_graficado && dim[1] === product_graficado && dim[2] === variable_graficada) {
        return true
      }
    })

    return datos;
  }

  render(){

    //Saco todas las variables, mercados y productos
    var variables = this.state.data.map((datos, i) => {
      return datos[2];
    });
    var products = this.state.data.map((datos, i) => {
      return datos[1];
    });
    var mercados = this.state.data.map((datos, i) => {
      return datos[0];
    });

    //Filtro los valores repetidos
    variables = variables.filter((variable, i) => {
      return variables.indexOf(variable) === i;
    });

    products = products.filter((product, i) => {
      return products.indexOf(product) === i;
    });

    mercados = mercados.filter((mercado, i) => {
      return mercados.indexOf(mercado) === i;
    });

    //Saco el primer valor que no me sirve

    variables.shift();
    mercados.shift();
    products.shift();

    //Pivot Variables, mercados y productos
    const pivotVar = variables.map((variable, i) =>{
      return (
        <option key={i}> {variable} </option>
      );
    });

    const pivotMer = mercados.map((mercado, i) =>{
      return (
        <option key={i}> {mercado} </option>
      );
    });

    const pivotPrd = products.map((product, i) =>{
      return (
        <option key={i}> {product} </option>
      );
    });

    return(
      <div>
        <Cargar_CSV darData={this.recibirData}/>
        <div className="card mt-4">
          <form className="form" onSubmit={this.graficar}>
            <label className="form-control"><input type="radio" name="mode" value="grouped"/> Grouped</label>
            <label className="form-control"><input type="radio" name="mode" value="stacked" /> Stacked</label>

            <select
              type="text"
              name="variables"
              className="form-control"
              onChange={this.capturarValor}>
                <option></option>
                {pivotVar}
            </select>
            <select
              type="text"
              name="mercados"
              className="form-control"
              onChange={this.capturarValor}>
                <option></option>
                {pivotMer}
            </select>
            <select
              type="text"
              name="productos"
              className="form-control"
              onChange={this.capturarValor}>
                <option></option>
                {pivotPrd}
            </select>

            <button type="submit" className="btn btn-primary">Graficar</button>

          </form>

          <svg width="960" height="500"></svg>
          {this.graficar}
        </div>
      </div>
    );
  }
}

export default Pivotes_Area_Grafico;
