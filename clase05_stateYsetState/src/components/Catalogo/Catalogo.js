import React, { Component } from 'react'
import Producto from '../producto/Producto'
import './Catalogo.css'

  const productos= [
      {id: 1, nombre: "TV 50 Pulgadas", precio: 100000}, 
      {id: 2, nombre: "TV 40 Pulgadas", precio: 80000},
      {id: 3, nombre: "TV 36 Pulgadas", precio: 50000}, 
      {id: 100, nombre: "Smartphone ", precio: 50000},
      {id: 500, nombre: "tablet", precio: 50000} 
    ]

function Catalogo()  {
    return (
      <div >
        {productos.map((item)=>
            <Producto key={item.id} nombre={item.nombre} precio={item.precio}/>
        )}
      </div>
    )
}

export default Catalogo
