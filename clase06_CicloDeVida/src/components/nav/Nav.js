import React from 'react'

import './Nav.css'

export default function Nav() {
  return (
<nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#?">Inicio</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#?">Nosotros</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#?">Contacto</a>
        </li>
      </ul>
    </div>

</nav>
  )
}
