import React, { Component } from 'react'
import Card from '../../components/Card/Card';

 class Characters extends Component {

  constructor() {
    super();
    this.state = {
      cargando: false,
      personajes: [],
      filterBy:'',
      nexturl: "",
      favoritos: [],
    };
  }    

 componentDidMount(){
  console.log(this.state.favoritos)  
  this.setState({favoritos: JSON.parse(localStorage.getItem('favoritos')) || []})
    const url = "https://rickandmortyapi.com/api/character"
    fetch(url)
        .then((res)=> res.json())
        .then(datos =>{ 
            //console.log(datos)
             return this.setState({
            cargando: true,
            personajes: datos.results,
            nexturl: datos.info.next
        })})
        .catch( err => console.log(err)
    )
 }

 agregarMas() {
  // Logica para agregar mas personajes
  const url = this.state.nexturl;
  fetch(url)
    .then( res => res.json())
    .then( data => {
      console.log(data)
      this.setState({
        nexturl: data.info.next,
        personajes: this.state.personajes.concat(data.results)
      })
    .catch( err => console.log(err))
    })
 }

 filtrarPersonajes(filtro){




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

  borrarTarjeta(id) {
    const resto = this.state.personajes.filter( personaje => personaje.id !== id)
    this.setState({
      personajes: resto
    })
  }

  handleFavoritos(card){
    if(this.state.favoritos.some(fav => card.id === fav.id)){
    // texto agregar a favoritos
    this.setState({favoritos: this.state.favoritos.filter( item => item.id !== card.id)}, ()=>{
      localStorage.setItem('favoritos', JSON.stringify(this.state.favoritos))
      // texto quitar de favoritos
    })
    console.log(this.state.favoritos.filter( item => item.id !== card.id))
    }else {
      this.setState({favoritos: [...this.state.favoritos, card]}, ()=>{
      localStorage.setItem('favoritos', JSON.stringify(this.state.favoritos))
      // texto quitar de favoritos
    })}
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
      {
        this.state.cargando === false ? (
          <p>Cargando</p>
        ):
        (this.state.personajes.map(personaje =>(
            <Card 
              key={personaje.id} 
              personaje={personaje}
              borrar={(personajeBorrar) => this.borrarTarjeta(personajeBorrar)}
              favorito={(personaje) => this.handleFavoritos(personaje)}
            />)
        ))
        }
    </div>
</>    
    ) 
  }
}
export default Characters
