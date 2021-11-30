
//export const registro=()=>{
export const registro=`
  <div id='registro' class='cajaInterna2'>
    <form id="formRegistro">
        <div class="seccionIngreso">
            <input type="text" id="usuarioRegistro" class="datosIngreso" placeholder="Nombre de usuario" required>
            <img src="imagenes/user.png">
        </div>
        <div class="seccionIngreso">
            <input type="text" id="correoRegistro" class="datosIngreso" placeholder="Correo electrónico" required>
            <img src="imagenes/envelope.png">
        </div>

        <div class="seccionIngreso">
          <input type="text" id="claveRegistro" class="datosIngreso" placeholder="Contraseña" required>
          <img src="imagenes/eye-closed.png">
        </div>

        <button type="submit" class="iniciarSesion">Registrate</button>
        <p class="texto">¿Ya tienes una cuenta? <a id="registrate" href="#/inicio"> Iniciar Sesión</a></p> 
    </form> 
  </div>
`
const container=document.createElement('div');
container.innerHTML=registro;
export const objetoInput={
  formularioregistro: document.getElementById('formRegistro'),

}
    /* const divRegistro=document.createElement('div');
    divRegistro.setAttribute('id','registro')
    divRegistro.classList.add("cajaInterna2");

    divRegistro.innerHTML=formRegistro;
    return divRegistro;

} */