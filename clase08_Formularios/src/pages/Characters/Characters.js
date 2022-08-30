import React, { Component } from 'react'
import Card from '../../components/Card/Card';

 class Characters extends Component {

  constructor() {
    super();
    this.state = {
      cargando: true,
      personajes: [],
      filterBy:''
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

 filtrarPersonajes(filtro){


  /*   let personajesFiltrados = this.state.personajes.filter((personaje)=>{
    return personaje.name.toLowerCase().includes(filtro) 
  })
  this.setState({
    personajes: personajesFiltrados
  }) */

    const url = `https://rickandmortyapi.com/api/character/?name=${filtro}`
    fetch(url)
        .then((res)=> res.json())
        .then(datos =>{ 
            //console.log(datos)
            this.setState({personajes: datos.results})

        })
        .catch( err => console.log(err))
 }

 handleChange(e){
  this.setState({
    filterBy: e.target.value
  },()=>{
    this.filtrarPersonajes(this.state.filterBy)
  })
 }

  render() {
    return (
    <>

      <form>
        <label >Buscar</label>
        <input
          type="search"
          name="buscar"
          onChange={(e)=>{this.handleChange(e)}}
          value={this.state.filterBy}
        />
      </form>

      <button className='btn btn-primary mb-3 mt-3' onClick={() => this.agregarMas()}>Mas Prsonajes</button>
      <div className='card-container'>
{this.state.cargando === false ? (
            <p>Cargando</p>
          ) : (
        this.state.personajes.map(personaje =>(
            <Card key={personaje.id} personaje={personaje}/>)
        ))
        }
    </div>
</>    
    ) 
  }
}
export default Characters
