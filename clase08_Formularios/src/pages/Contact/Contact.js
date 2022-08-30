import React, {Component} from 'react'

class Contact extends Component {

  constructor(){
    super()
    this.state={
      nombre:""
    }
  }


  handleChange(e){
    this.setState(
      {
      nombre: e.target.value
    }, ()=>{console.log("1" + this.state.nombre)}
    )
    console.log("2" + this.state.nombre)
  }

  handleSubmit(e){
    e.preventDefault()
    console.log("Ejecuto el metodo submit")
  }

  render(){
  return (
    <>
      <form onSubmit={(e)=>{this.handleSubmit(e)}}>
        <label></label>
        <input 
          type="text"
          name="nombre"
          onChange={(e)=>{this.handleChange(e)}}
          value={this.state.nombre}
        />

        <button type="submit">Enviar</button>
      </form>
    </>
  )
  }
}

export default Contact
