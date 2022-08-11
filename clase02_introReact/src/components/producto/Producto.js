import React from 'react'

export default function Producto(props) {
    //console.log(props)
  return (
    <div>
        <p>{props.nombre}</p>
        <p> {props.precio}</p>
        <hr/>
    </div>
  )
}
