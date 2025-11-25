let boton=document.getElementById("boton")
boton.addEventListener("click",function(evento){
    evento.preventDefault()

    let cajaUsuario=document.getElementById("cajausuario")
    let cajaCorreo=document.getElementById("cajacorreo")
    let cajaCiudad=document.getElementById("cajaciudad")
    let cajaTelefono=document.getElementById("cajatelefono")
    let cajaContraseña=document.getElementById("cajacontraseña")
    
    let datosDelFormulario=(
        usuario:cajaUsuario.value,
        cajaCorreo:cajaCorreo.value,
        ciudad:cajaCiudad.value,
        telefono:cajaTelefono,
        contraseña:cajaContraseña,

    )
   Swal.fire({
  title: "Bienvenido",
  text: "Has sido registrado",
  icon: "success"
});
})