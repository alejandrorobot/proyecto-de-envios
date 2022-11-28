import React from 'react'

export function Nav() {
  return (
    
    <nav className="navbar navbar-expand-lg bg-light p-3" id="menu">
        <div className="container-fluid">
          <a className="navbar-brand" href="index.html">
            <span className="text-primary fs-5 fw-bold">InstaYA</span>
          </a>

         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarScroll">
            <>
              <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style="--bs-scroll-height: 100px;">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#ingresar">Ingresar</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#nosotros">Nosotros</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#contenedor-formulario">Registro</a>
                </li>
              </ul>
            </>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="email" placeholder="correo electronico" aria-label="Search"></input>
              <button className="btn  btn-primary btn-primary-outline-success" type="botton">suscribete</button>
            </form>
          </div>
        </div>
      </nav>
    
  );
}


