import React from 'react'
import { BotonCarrusel } from './BotonCarrusel'

export default function OpcBotones() {
  return (
    <div>
        <BotonCarrusel clase={"prev"} descripction={"Previous"} />
        <BotonCarrusel clase={"next"} descripction={"Next"} />
    </div>
  )
}
