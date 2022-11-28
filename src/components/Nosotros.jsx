import React from 'react'

export function Nosotros({
    ubicacionImg,
    alt,
    titulo,
    description
}) {
  return (
    <div class="col-lg-6 col-md-12 col-sm-12 d-flex justify-content-start my-5 icono-wrap">
        <img src={ubicacionImg} alt={alt} width="180" height="160"></img>
        <div>
            <h3 class="fs-5 mt-4 px4 pb-1">{titulo}</h3>
            <p class="px-4">{description}</p>
        </div>
    </div>
  )
}

