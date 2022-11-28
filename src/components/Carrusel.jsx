import React from 'react'

export function Carrusel() {
  return (
    <>
    <div class="carousel-inner">
          <div class="carousel-item active"data-bs-interval="3000"> 
            <img src="./img/1500x844_futuro_logistica_ecommerce-2-1080x675.jpg" class="d-block w-100" alt="slide1"></img>
          </div>
          <div class="carousel-item"data-bs-interval="3000">
            <img src="./img/36389914-hombre-feliz-con-la-entrega-al-cliente-fuera-del-almacén.webp" class="d-block w-100" alt="slide2"></img>
          </div>
          <div class="carousel-item"data-bs-interval="3000">
            <img src="./img/Entrega-de-Paquetes.-Servicio-de-Paquetería..jpg" class="d-block w-100" alt="slide3"></img>
          </div>
    </div>
    </>
  )
}
