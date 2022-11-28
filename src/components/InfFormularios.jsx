import React from 'react'
import { Boton } from './Boton'
import { Entradas } from './Entradas'

export function InfFormularios({
    idDivFormulario,
    titulo
}) {
  return (
    <div className="container  border-3  pt-5" id={idDivFormulario} >
        <div class="titulo-formulario"  className=" text-center mb-4">
            <div><img src="./img/descarga (1).jpg" alt="Logo Empresa" className="img-fluid"></img></div>
            <h2 className="bg-secundary">{titulo}</h2>
        </div>
        <form action="registrarUsuario" method="post">
            <Entradas tipoEntrada={"text"} id={"txtnombreregistro"} nameName={"txtnombreregistro"} description={"Nombres"} />
            <Entradas tipoEntrada={"email"} id={"txtemailregistro"} nameName={"txtemailregistro"} description={"Correo Electrónico"} />
            <Entradas tipoEntrada={"password"} id={"txtpassregistro"} nameName={"txtpassregistro"} description={"Contraseña"} />
            <Boton tipo={"submit"} clase={"btn btn-primary w-100 fs-5"} description={"Registrarse"} />
        </form>
    </div>
  )
}
