import React from 'react'
import { ListaNav2 } from './ListaNav2'

export function IntemsNav() {
  return (
    <div className="collapse navbar-collapse" id="navbarScroll">
            <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
              <ListaNav2 description={"Nosotros"} link={"#nosotros"} />
              <ListaNav2 description={"Ingresar"} link={"#ingresar"} />
              <ListaNav2 description={"Registro"} link={"#contenedor-formulario"} />
            </ul>
    </div>
  )
}

