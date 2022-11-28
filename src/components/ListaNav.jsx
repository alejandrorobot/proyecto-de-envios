import React from 'react'
import "bootstrap" 
import "bootstrap/dist/css/bootstrap.min.css"

export function ListaNav() {
  const listaItemsNav = ["Ingresar", "Nosotros", "Registro"]
  return listaItemsNav.map(
    elemento => (<li key={elemento} > {elemento} </li>)
  );
};


