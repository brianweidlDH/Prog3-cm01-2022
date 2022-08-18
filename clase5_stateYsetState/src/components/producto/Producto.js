import React, {Component}  from 'react'
import './Producto.css'
/* export default function Producto(props) {
  //console.log(props)
  return (
    <div >
        <p>{props.nombre}</p>
        <p> {props.precio}</p>
        <hr/>
    </div>
  )
} */

class Producto extends Component {
/*   
  constructor(){
    super()
    this.quitar = this.quitar.bind(this)
    this.agregar = this.agregar.bind(this)    
    this.limpiar = this.limpiar.bind(this)    
    state = {
      cantidad: 0
    }
  } 
  */
    // ES7
    state = {
      cantidad: 0,
      loading: true,
      categoria: "Electro",
      mes: ["enero", "febrero"],
      usuario: {
        nombre: "adrgon",
        mail: "adrgon@fake.com"
      }
    }

  quitar = () => {
    if(this.state.cantidad === 0){
      return;
    }
    this.setState({
      cantidad: this.state.cantidad - 1
    })
  }
  agregar=()=>{
        this.setState({
          cantidad: this.state.cantidad + 1
    })
  }

  limpiar=()=>{
    this.setState({
        cantidad: 0
    })
  }

  render(){
    console.log("renderizado")
    return (
        <div className="TarjetaProducto">
            <p>{this.props.nombre}</p>
            <p> {this.props.precio}</p>
            <p>Cantidad : {this.state.cantidad}</p>
            <button className='btn btn-primary' onClick={ this.agregar}
            >
                Agregar
              </button>
              <button className='btn btn-danger' onClick={ this.quitar}
            >
                Qutar
              </button>
              <button className='btn btn-warn' onClick={ this.limpiar}
            >
                Limpiar
              </button>              
            <hr/>
        </div>
      )
    }
  }

  export default Producto;
