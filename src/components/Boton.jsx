import React from 'react'

export function Boton({
  tipo,
  clase,
  description
}) {
  return (
    <div className="mb-3">
      <button  type={tipo} className={clase}>{description}</button>
    </div>
  )
}
