import React from 'react'

export function BotonCarrusel({
    clase,
    descripction
}) {
  return (
    <div>
        <button className={"carousel-control-" + clase} type="button" data-bs-target="#carouselExampleControls" data-bs-slide={clase}>
            <span className={"carousel-control-" + clase + "-icon"} aria-hidden="true"></span>
            <span className="visually-hidden">{descripction}</span>
        </button>
    </div>
  )
}

{/*<button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
</button>

<button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
</button>*/}

