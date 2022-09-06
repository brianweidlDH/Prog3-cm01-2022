import React from 'react' 
import {Link} from 'react-router-dom'

import './Nav.css'

export default function Nav() {
  return (
<nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Inicio</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">Rick&Morty</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/favoritos">Favoritos</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/contact">Contacto</Link>
        </li>
      </ul>
    </div>

</nav>
  )
}
