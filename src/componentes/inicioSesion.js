// eslint-disable-next-line import/no-unresolved
import { GoogleAuthProvider } from 'https://www.gstatic.com/firebasejs/9.5.0/firebase-auth.js';
import { inicioSesionUsuario, googleInicioSesion } from '../firebase/funcionesAuth.js';
import { modalInicioSesion } from './errores.js';

// Función que se encarga del inicio de Sesión por correo
export const inicioSesion = (selectorForm, containerError) => {
  const iniciarCon = document.getElementById(selectorForm);
  iniciarCon.addEventListener('submit', (e) => {
    e.preventDefault();
    const correoIngreso = document.getElementById('correoIngreso').value;
    const claveIngreso = document.getElementById('claveIngreso').value;
    const ubicacionModal = document.getElementById(containerError);
    
    inicioSesionUsuario(correoIngreso, claveIngreso)
      .then((userCredential) => {
        const user = userCredential.user;
        if (user.emailVerified === true) {
          window.location.hash = '#/artmuro';
        } else {
          // eslint-disable-next-line no-alert
          alert('confirma tu cuenta');
        }
      })
      .catch((error) => {
        ubicacionModal.style.display='block';
        ubicacionModal.style.transition='all 1s';
        ubicacionModal.style.background='#EA4335';
        if (error.message === 'Firebase: Error (auth/invalid-email).' || error.message === 'Firebase: Error (auth/wrong-password).') {
          ubicacionModal.innerHTML = modalInicioSesion.datosInvalidos();
        } else if (error.message === 'Firebase: Error (auth/user-not-found).') {
          ubicacionModal.innerHTML = modalInicioSesion.usuarioInvalido();
        } else {
          ubicacionModal.textContent='Ocurrió un error';
        }
        setTimeout(function hide() {
          ubicacionModal.style.display='none';
        }, 2000);
      });
  });

  const botongoogle = document.getElementById('imgGoogle');
  botongoogle.addEventListener('click', () => {
    const proveedor = new GoogleAuthProvider();
    googleInicioSesion(proveedor)
      // eslint-disable-next-line no-unused-vars
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        console.log(credential);
        // This gives you a Google Access Token. You can use it to access the Google API.
        // const credential = GoogleAuthProvider.credentialFromResult(result);
        // const token = credential.accessToken;
        // The signed-in user info.
        // const user = result.user;
        // ...
      // eslint-disable-next-line no-unused-vars
      }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        console.log(errorCode);
        const errorMessage = error.message;
        console.log((errorMessage));
        // The email of the user's account used.
        const email = error.email;
        console.log(email);
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        console.log(credential);
      });
  });
};

// Creacion de formulario de inicio de Sesión de forma dinámica
export const formInicioSesion = () => {
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
        </div>`;
  return formIngreso;
};
