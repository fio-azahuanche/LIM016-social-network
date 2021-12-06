// Render del formulario de registro que se imprimen en la vista de Home
// eslint-disable-next-line import/no-unresolved
import { addDoc } from 'https://www.gstatic.com/firebasejs/9.5.0/firebase-firestore.js';
import { registroUsuario, envioCorreoVerificacion, cerrarActividadUsuario } from '../firebase/funcionesAuth.js';
import { modalRegistro } from './errores.js';
import { colRef } from '../firebase/funcionesFirestore.js';
import { mostrarYocultarClave } from './home.js';
import { userState } from './validaciones.js';

// Función que se encarga del registro por correo
export const registroCorreo = (nombre, selectorForm, containerError) => {
  mostrarYocultarClave('botonClave', 'claveRegistro');

  const registrarCon = document.getElementById(selectorForm);
  registrarCon.addEventListener('submit', (e) => {
    e.preventDefault();
    const usuarioRegistro = document.getElementById(nombre).value;
    const correoRegistro = document.getElementById('correoRegistro').value;
    const claveRegistro = document.getElementById('claveRegistro').value;
    const ubicacionModal = document.getElementById(containerError);

    registroUsuario(correoRegistro, claveRegistro)
      .then((userCredential) => {
        const user = userCredential.user;
        if(!user.emailVerified){
          envioCorreoVerificacion().then(() => {
            ubicacionModal.innerHTML = modalRegistro.exito();
          });
        }
        
        addDoc(colRef, {
          username: usuarioRegistro,
          correo: correoRegistro,
          clave: claveRegistro,
        })
        /* .then(() => {
          registrarCon.reset();
        }); */
        cerrarActividadUsuario();
        setTimeout(function hide() {
          ubicacionModal.innerHTML='';
        }, 1500);
      })
      .catch((error) => {
        if (error.message === 'Firebase: Error (auth/invalid-email).') {
          ubicacionModal.innerHTML = modalRegistro.correoInvalido();
        } else if (error.message === 'Firebase: Password should be at least 6 characters (auth/weak-password).') {
          ubicacionModal.innerHTML = modalRegistro.contraseñaDebil();
        } else if (error.message === 'Firebase: Error (auth/email-already-in-use).') {
          ubicacionModal.innerHTML = modalRegistro.correoExistente();
        } else {
          ubicacionModal.textContent = 'ocurrio un error';
        }
        setTimeout(function hide() {
          ubicacionModal.innerHTML='';
        }, 1500);
      });
  });
};

// Creacion de formulario de registro de forma dinámica
export const formRegistro = () => {
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

                <button type="submit" class="iniciarSesion">Registrate</button>
                <p class="texto">¿Ya tienes una cuenta? <a id="registrate" href="#/inicio"> Iniciar Sesión</a></p> 
            </form>

        </div>`;
  return formRegistro;
};
