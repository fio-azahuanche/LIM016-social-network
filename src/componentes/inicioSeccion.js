export function ingreso(){
//export   
 const formInicio=` 
    <form id="formIngreso">
        <div class="seccionIngreso">
            <input type="text" id="correoIngreso" class="datosIngreso" placeholder="Correo electrónico" required>
            <img src="imagenes/envelope.png">
        </div>
  
        <div class="seccionIngreso">
            <input type="password" id="claveIngreso" class="datosIngreso" placeholder="Contraseña" required>
            <img src="imagenes/eye-closed.png">
        </div>
  
        <button type="submit" class="iniciarSesion">Ingresar</button>
            
        <p class="texto">O bien ingresa con</p>
  
        <div class="logosInicio">
            <img src="imagenes/FacebookOriginal.png">
            <img src="imagenes/GoogleOriginal.png">
        </div>
  
        <p class="texto">¿No tienes una cuenta? <a id="registrate" href="#/registro"> Regístrate</a></p> 
    </form> 
  `
    const divIngreso=document.createElement('div');
    divIngreso.setAttribute('id','inicio')
    divIngreso.classList.add("cajaInterna2");
    console.log(formInicio);
    divIngreso.innerHTML=formInicio; 
    return divIngreso;

}