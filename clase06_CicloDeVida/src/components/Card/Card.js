import React from 'react'
import "./Card.css";

function Card({personaje}) {
let {image, name, status, gender} = personaje

const borrar = () => {
  console.log(borrar)
}
  return (
<div className="character-card">
      <img src={image} alt={name}/>
      <h4>{name}</h4>
      <p>{status}</p>
      <p>Genero: {gender}</p>
      <button onClick={borrar}>Borrar</button>
</div>
  )
}

export default Card
