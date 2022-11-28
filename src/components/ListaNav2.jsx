import React from 'react'
import "bootstrap" 
import "bootstrap/dist/css/bootstrap.min.css"

export function ListaNav2({
    link,
    description
}) {
    
  return (
    <>
    <li className='nav-item'><a className="nav-link active" href={link}>{description}</a></li>
    </>
  )
}

