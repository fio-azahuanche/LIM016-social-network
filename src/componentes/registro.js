// Render del formulario de registro que se imprimen en la vista de Home
import { registroUsuario, envioCorreoVerificacion, cierreActividadUsuario } from '../firebase/funcionesAuth.js';
import { modalRegistro, setTimeOutFunction } from './errores.js';
import { mostrarYocultarClave } from './home.js';
import { agregarUsuarioConId } from '../firebase/funcionesFirestore.js';

// Creacion de formulario de registro de forma dinámica
export const formRegistros = () => {
  const formRegistro = `
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
        <input type="password" id="claveRegistro" class="datosIngreso" placeholder="Contraseña" required>
        <i id="botonClave" class="ph-eye-closed"></i>
      </div>

      <button type="submit" class="iniciarSesion" id='bttnRegistro'>Registrate</button>
        
        <p class="texto">¿Ya tienes una cuenta? <a id="registrate" href="#/inicio"> Iniciar Sesión</a></p> 
      </form>
    </div>`;
  return formRegistro;
};

// Función que se encarga del registro por correo
export const registroCorreo = ( selectorForm, containerError) => {
  mostrarYocultarClave('botonClave', 'claveRegistro');

  const registrarCon = document.getElementById(selectorForm);
  registrarCon.addEventListener('submit', (e) => {
    e.preventDefault();
    let usuarioRegistro = document.getElementById('usuarioRegistro').value;
    let correoRegistro = document.getElementById('correoRegistro').value;
    let claveRegistro = document.getElementById('claveRegistro').value; 
    const ubicacionModal = document.getElementById(containerError);
    
    
    registroUsuario(correoRegistro, claveRegistro)
      .then((userCredential) => {
        const user = userCredential.user;
          envioCorreoVerificacion().then(() => {
            agregarUsuarioConId(usuarioRegistro, correoRegistro, claveRegistro,user.uid);
            ubicacionModal.innerHTML = modalRegistro.exito();
            setTimeOutFunction('modalExito');
          });
        cierreActividadUsuario();
        
      })
      .catch((error) => {
        if (error.message === 'Firebase: Error (auth/invalid-email).') {
          ubicacionModal.innerHTML = modalRegistro.correoInvalido();
          setTimeOutFunction('modalCorreoInvalido');
        } else if (error.message === 'Firebase: Password should be at least 6 characters (auth/weak-password).') {
          ubicacionModal.innerHTML = modalRegistro.contraseñaDebil();
          setTimeOutFunction('modalContraseñaDebil');
        } else if (error.message === 'Firebase: Error (auth/email-already-in-use).') {
          ubicacionModal.innerHTML = modalRegistro.correoExistente();
          setTimeOutFunction('modalCorreoExistente');
        } else {
          ubicacionModal.textContent = error.message;
        };
      });
  });
};
