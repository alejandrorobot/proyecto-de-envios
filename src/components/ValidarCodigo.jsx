import React from 'react'
import { Boton } from './Boton'
import { Entradas } from './Entradas'

export function ValidarCodigo({
    idDivFormulario,
    titulo
}) {
  return (
    <>
    <div className="container  border-3  pt-5" id={idDivFormulario} >
        <div class="titulo-formulario"  className=" text-center mb-4">
            <div><img src="./img/descarga (1).jpg" alt="Logo Empresa" class="img-fluid"></img></div>
            <h2 class="bg-secundary">{titulo}</h2>
        </div>
        <form action="registrarUsuario" method="post">
            <Entradas tipoEntrada={"text"} id={"validarCodigo"} name={"validarCodigo"} description={"Código"} />
            <Boton tipo={"submit"} clase={"btn btn-primary w-100 fs-5"} description={"Validar Código"} />
        </form>
    </div>
    </>
  )
}