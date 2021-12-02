// Render del formulario de registro que se imprimen en la vista de Home

import { registroUsuario } from '../firebase/funcionesAuth.js';

// Objeto que crea de forma dinámica los modales
const modalMensaje = {
  modalError: () => {
    const errorMensaje = `
      <div class= "modalError" id="modalError">
        <i class="fas fa-exclamation-triangle"></i>
        <p>Ingresaste incorrectamente los datos</p>
      </div>
    `;
    return errorMensaje;
  },
  modalExito: () => {
    const exitoMensaje = `
      <div class= "modalExito" id="modalExito">
        <i class="fas fa-check-circle"></i>
        <p>Revisa tu correo elétronico para confirmar registro</p>
      </div>
    `;
    return exitoMensaje;
  },
};

// Función que se encarga del registro por correo
export const registroCorreo = (nombre, correo, contraseña, selector) => {
  const registrarCon = document.getElementById(selector);
  registrarCon.addEventListener('submit', (e) => {
    e.preventDefault();
    // const usuarioRegistro = document.getElementById(nombre).value;
    const correoRegistro = document.getElementById(correo).value;
    const claveRegistro = document.getElementById(contraseña).value;
    registroUsuario(correoRegistro, claveRegistro)
      .then(() => {
        const ubicacionModalExito = document.getElementById('ubicacionModal');
        ubicacionModalExito.innerHTML = modalMensaje.modalExito();
      })
      .catch(() => {
        const ubicacionModalError = document.getElementById('ubicacionModal');
        ubicacionModalError.innerHTML = modalMensaje.modalError();
      });
    setTimeout(() => {
      const modalError = document.getElementById('modalError');
      modalError.classList.toggle('fade');
    },
    3000);
    setTimeout(() => {
      const modalExito = document.getElementById('modalExito');
      modalExito.classList.toggle('fade');
    },
    3000);
  });
};

// Creacion de formulario de registro de forma dinámica
export const forms1 = {
  registro: () => {
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
                    <input type="text" id="claveRegistro" class="datosIngreso" placeholder="Contraseña" required>
                    <img src="imagenes/eye-closed.png">
                </div>

                <button type="submit" class="iniciarSesion">Registrate</button>
                <p class="texto">¿Ya tienes una cuenta? <a id="registrate" href="#/inicio"> Iniciar Sesión</a></p> 
            </form> 
            <div id= "ubicacionModal"></div>

        </div>`;
    return formRegistro;
  },
};
