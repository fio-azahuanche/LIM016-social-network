// Render del formulario de registro que se imprimen en la vista de Home

import { registroUsuario, envioCorreoVerificacion } from '../firebase/funcionesAuth.js';

// Objeto que crea de forma dinámica los modales
const modalMensaje = {
  modalCorreoInvalido: () => {
    const errorMensaje = `
      <div class= "modalError" id="modalCorreoInvalido">
        <i class="fas fa-exclamation-triangle"></i>
        <p>Ingresaste un correo inválido.</p>
      </div>
    `;
    return errorMensaje;
  },
  modalCorreoExistente: () => {
    const exitoMensaje = `
      <div class= "modalError" id="modalCorreoExistente">
        <i class="fas fa-check-circle"></i>
        <p>Ya tienes un cuenta existente.</p>
      </div>
    `;
    return exitoMensaje;
  },
  modalContraseñaDebil: () => {
    const exitoMensaje = `
      <div class= "modalError" id="modalContraseñaDebil">
        <i class="fas fa-check-circle"></i>
        <p>La contraseña debe contener al menos 6 carácteres.</p>
      </div>
    `;
    return exitoMensaje;
  },
  modalExito: () => {
    const exitoMensaje = `
      <div class= "modalExito" id="modalExito">
        <i class="fas fa-check-circle"></i>
        <p>Revisa tu correo elétronico para confirmar registro.</p>
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
      .then((userCredential) => {
        const ubicacionModalExito = document.getElementById('ubicacionModal');
        ubicacionModalExito.innerHTML = modalMensaje.modalExito();
        const user = userCredential.user;
        if (!user.emailVerified) {
          envioCorreoVerificacion().then(() => {
            setTimeout(() => {
              const modalExito = document.getElementById('modalExito');
              modalExito.classList.toggle('fade');
            },
            3000);
          });
        }
      })
      .catch((error) => {
        const ubicacionModalError = document.getElementById('ubicacionModal');
        if (error.message === 'Firebase: Error (auth/invalid-email).') {
          ubicacionModalError.innerHTML = modalMensaje.modalCorreoInvalido();
        }
        if (error.message === 'Firebase: Password should be at least 6 characters (auth/weak-password).') {
          ubicacionModalError.innerHTML = modalMensaje.modalContraseñaDebil();
        }
        if (error.message === 'Firebase: Error (auth/email-already-in-use).') {
          ubicacionModalError.innerHTML = modalMensaje.modalCorreoExistente();
        }
        setTimeout(() => {
          const modalError = document.querySelector('.modalError');
          modalError.classList.toggle('fade');
        },
        3000);
      });
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
