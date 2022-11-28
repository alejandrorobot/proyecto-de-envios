import React from 'react'

export function Entradas({
    tipoEntrada,
    id,
    name,
    description
}) {
  return (
    <div>
        <div className="mb-3">
                <input type={tipoEntrada} className="form-control" id={id} name={name} placeholder={description} required></input>
        </div>
    </div>
  )
}
