import "bootstrap" 
import "bootstrap/dist/css/bootstrap.min.css"
import { Header } from "./components/Header"
import { IntemsNav } from './components/IntemsNav'
import { Carrusel } from './components/Carrusel'
import OpcBotones from "./components/OpcBotones"
import { VariablesNosotros } from "./components/VariablesNosotros"
import { InfFormularios } from "./components/InfFormularios"
import {FormIngreso} from "./components/FormIngreso"
import { ValidarCodigo } from "./components/ValidarCodigo"



function App() {
  

  return (
    
    <>
      <Header />
      <nav className="navbar navbar-expand-lg bg-light p-3" id="menu">
        <div className="container-fluid">
          <a className="navbar-brand" href="index.html">
            <span className="text-primary fs-5 fw-bold">InstaYA</span>
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <IntemsNav />
        </div>
      </nav>
      {/* carrusel*/}
      <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
        <Carrusel />
        <OpcBotones />
      </div>
      {/* intro de la informacion del section */}
      <section className="w-50 mx-auto text-center pt-5" id="nosotros">
        <h1 className="p-3 fs-2 border-top border-3">Una agencia única para todos tus envíos<span class="text-primary"> InstaYA</span></h1>
      </section>
      {/*servicios del section */}
      <section className="container-fluid">
        <div className="row w-75 mx-auto  servicio-fila">
          <VariablesNosotros />
        </div>
      </section>
      {/* formulario -bg*/}
      {/* fondo del formulario */}
      {/* usaremos una imagen vectorial para el fondo del formulario */}
      <section id="seccion-contacto" className="border-bottom border-secondary border-2 pt-5 ">
        <div id="bg.contacto"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#000b76" fill-opacity="1" d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,
          149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,
          320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
        </div>
        {/* formato del formulario Ingreso */}
        <FormIngreso  idDivFormulario={"ingresar"} titulo={"INGRESO"} /> 
        {/* formato del formulario Registro */}
        <InfFormularios  idDivFormulario={"contenedor-formulario"} titulo={"REGISTRATE"} /> 
        {/*formato de Validación de Código*/}
        <ValidarCodigo  idDivFormulario={"contenedor-formulario"} titulo={"VALIDAR CÓDIGO"} />
      </section>
      {/*pie de pagina footer*/}
      <footer className="w-100 d-flex  align- justify-content-center flex-wrap">
        <p className="fs-5 px-3 pt-3">InstaYA@ &copy; Todos los Derechos Reservados 2022 </p>
        <div id="iconos">
          <a href="#"><i className="bi bi-twitter"></i></a>
          <a href="#"><i className="bi bi-tiktok"></i></a>
          <a href="#"><i className="bi bi-facebook"></i></a>
        </div>
      </footer>
    </>
      
  )
}

export default App
