import React, { Component } from 'react'

import Card from '../Card/Card';

 class Container extends Component {

  constructor() {
    super();
    this.state = {
      cargando: true,
      personajes: [],
    };
  }    

 componentDidMount(){
    const url = "https://rickandmortyapi.com/api/character"
    fetch(url)
        .then((res)=> res.json())
        .then(datos =>{ 
            console.log(datos)
             return this.setState({
            personajes: datos.results,
        })})
        .catch( err => console.log(err))
 }

 agregarMas() {
  // Logica para agregar mas personajes
 }

  render() {
    return (

    <div className='card-container'>
{this.state.cargando === false ? (
            <p>Cargando</p>
          ) : (
        this.state.personajes.map(personaje =>(
            <Card key={personaje.id} personaje={personaje}/>)
        ))
        }
      <button onClick={() => this.agregarMas()}>Mas Prsonajes</button>
    </div>
    )
          
    
  }
}
export default Container
