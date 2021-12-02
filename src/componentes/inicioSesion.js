import { inicioSesionUsuario } from '../firebase/funcionesAuth.js';

const modalErrorMensaje = {
  modalError: () => {
    const errorMensaje = `
      <div class= "modalError" id="modalError">
        <i class="fas fa-exclamation-triangle"></i>
        <p>Ingresaste incorrectamente los datos</p>
      </div>
    `;
    return errorMensaje;
  },
};

// Función que se encarga del inicio de Sesión por correo
export const inicioSesion = (correo, contraseña, selector) => {
  const iniciarCon = document.getElementById(selector);
  iniciarCon.addEventListener('submit', (e) => {
    e.preventDefault();
    const correoIngreso = document.getElementById(correo).value;
    const claveIngreso = document.getElementById(contraseña).value;
    inicioSesionUsuario(correoIngreso, claveIngreso)
      .then((userCredential) => {
        console.log(userCredential.user);
      })
      .catch(() => {
        const ubicacionModalError = document.getElementById('ubicacionModalError');
        ubicacionModalError.innerHTML = modalErrorMensaje.modalError();
      });
    setTimeout(() => {
      const modalError = document.getElementById('modalError');
      modalError.classList.toggle('fade');
    },
    3000);
  });
};

// Creacion de formulario de inicio de Sesión de forma dinámica
export const forms2 = {
  inicioSesion: () => {
    const formIngreso = `
        <div id="inicio" class="cajaInterna2">
            <form id="formIngreso">
                <div class="seccionIngreso">
                    <input type="text" id="correoIngreso" class="datosIngreso" placeholder="Correo electrónico" required>
                        <img src="imagenes/envelope.png">
                </div>
                
                <div class="seccionIngreso">
                    <input type="password" id="claveIngreso" class="datosIngreso" placeholder="Contraseña" required>
                    <img src="imagenes/eye-closed.png">
                </div>
                
                <button type="submit" id="botonIngresar" class="iniciarSesion">Ingresar</button>
                            
                <p class="texto">O bien ingresa con</p>
                
                <div class="logosInicio">
                    <img src="imagenes/FacebookOriginal.png">
                    <img src="imagenes/GoogleOriginal.png">
                </div>
                
                <p class="texto">¿No tienes una cuenta? <a id="registrate" href="#/registro"> Regístrate</a></p> 
            </form> 
            <div id= "ubicacionModalError"></div>
        </div>`;
    return formIngreso;
  },
};
