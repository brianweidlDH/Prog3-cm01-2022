import React from 'react'
import './App.css';
import Header from './components/header/Header'
import Footer from './components/footer/Footer';
import Catalogo from './components/Catalogo/Catalogo';



class App extends React.Component {
  
  state = {
  productos : [
      {id: 1, nombre: "TV 50 Pulgadas", precio: 100000}, 
      {id: 2, nombre: "TV 40 Pulgadas", precio: 80000},
      {id: 3, nombre: "TV 36 Pulgadas", precio: 50000}, 
      {id: 100, nombre: "Smartphone ", precio: 50000},
      {id: 500, nombre: "tablet", precio: 50000} 
    ]
  }
  render(){
  return (
    <>
       <Header titulo="Tienda virtual" subtitulo="El bazar de pepe"/>
      <Catalogo productos={this.state.productos}/>
      <Footer /> 
    </>
    );  
  }
}

export default App;
