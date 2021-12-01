// Render de los formulario de registro e inicio que se imprimen en la vista de Home
// eslint-disable-next-line import/no-unresolved
import { getAuth, createUserWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.5.0/firebase-auth.js';
import { app } from '../firebase/config.js';

// Funcion que se encarga del registro por correo

export const registroCorreo = (nombre, correo, contraseña, selector) => {
  const registrarCon = document.getElementById(selector);
  registrarCon.addEventListener('submit', (e) => {
    e.preventDefault();
    // const usuarioRegistro = document.getElementById(nombre).value;
    const correoRegistro = document.getElementById(correo).value;
    const claveRegistro = document.getElementById(contraseña).value;
    const auth = getAuth(app);
    createUserWithEmailAndPassword(auth, correoRegistro, claveRegistro)
      .then((userCredential) => {
      // Signed in
      // eslint-disable-next-line
        const user = userCredential.user;
      })
      .catch((error) => {
        // eslint-disable-next-line
        const errorCode = error.code;
        // eslint-disable-next-line
        const errorMessage = error.message;
      });
  });
};

// Creacion de formularios de Home de forma dinamica
export const forms = {
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
                
                <button type="submit" class="iniciarSesion"><a href="#/artMuro">Ingresar</a></button>
                            
                <p class="texto">O bien ingresa con</p>
                
                <div class="logosInicio">
                    <img src="imagenes/FacebookOriginal.png">
                    <img src="imagenes/GoogleOriginal.png">
                </div>
                
                <p class="texto">¿No tienes una cuenta? <a id="registrate" href="#/registro"> Regístrate</a></p> 
            </form> 
        </div>`;
    return formIngreso;
  },
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
        </div>`;
    return formRegistro;
  },
};
