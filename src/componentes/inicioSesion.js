// eslint-disable-next-line import/no-unresolved
import { GoogleAuthProvider } from 'https://www.gstatic.com/firebasejs/9.5.0/firebase-auth.js';
import { inicioSesionUsuario, googleInicioSesion } from '../firebase/funcionesAuth.js';

// Objeto que crea de forma dinámica los modales
const modalErrorMensaje = {
  modalDatosInvalidos: () => {
    const errorMensaje = `
      <div class= "modalError" id="modalDatosInvalidos">
        <i class="fas fa-exclamation-triangle"></i>
        <p>Ingresaste correo o contraseña inválidos.</p>
      </div>
    `;
    return errorMensaje;
  },
  modalUsuarioInvalido: () => {
    const errorMensaje = `
      <div class= "modalError" id="modalUsuarioInvalido">
        <i class="fas fa-exclamation-triangle"></i>
        <p>Aún no estas registrado.</p>
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
      .then(() => {
        window.location.hash = '#/artmuro';
      })
      .catch((error) => {
        const ubicacionModalError = document.getElementById('ubicacionModalError');
        if (error.message === 'Firebase: Error (auth/invalid-email).' || error.message === 'Firebase: Error (auth/wrong-password).') {
          ubicacionModalError.innerHTML = modalErrorMensaje.modalDatosInvalidos();
          setTimeout(() => {
            const modalError = document.getElementById('modalDatosInvalidos');
            modalError.classList.toggle('fade');
          },
          3000);
        }
        if (error.message === 'Firebase: Error (auth/user-not-found).') {
          ubicacionModalError.innerHTML = modalErrorMensaje.modalUsuarioInvalido();
          setTimeout(() => {
            const modalError = document.getElementById('modalUsuarioInvalido');
            modalError.classList.toggle('fade');
          },
          3000);
        }
      });
  });

  const botongoogle = document.getElementById('imgGoogle');
  botongoogle.addEventListener('click', () => {
    const proveedor = new GoogleAuthProvider();
    googleInicioSesion(proveedor)
      .then((result) => {
        window.location.hash = '#/artmuro';
      // This gives you a Google Access Token. You can use it to access the Google API.
        // const credential = GoogleAuthProvider.credentialFromResult(result);
        // const token = credential.accessToken;
        // The signed-in user info.
        // const user = result.user;
        // ...
      }).catch((error) => {
      // Handle Errors here.
        // const errorCode = error.code;
        // const errorMessage = error.message;
        // The email of the user's account used.
        // const email = error.email;
        // The AuthCredential type that was used.
        // const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
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
                    <img id="imgGoogle" src="imagenes/GoogleOriginal.png">
                </div>
                
                <p class="texto">¿No tienes una cuenta? <a id="registrate" href="#/registro"> Regístrate</a></p> 
            </form> 
            <div id= "ubicacionModalError"></div>
        </div>`;
    return formIngreso;
  },
};
