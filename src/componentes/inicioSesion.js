import { inicioSesionUsuario, googleInicioSesion } from '../firebase/funcionesAuth.js';

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
        console.log(userCredential);
        /* alert('datos correctos'); */
        const ubicacionModalExito = document.getElementById("ubicacionModalExito");        
        ubicacionModalExito.innerHTML = modalExitoMensaje.modalExito();
        setTimeout(function(){       
          modalExito.classList.toggle("modalExito"); 
        },3000);       
      })
      .catch((error) => {
        ubicacionModal.style.background = '#EA4335';
        if (error.message === 'Firebase: Error (auth/invalid-email).' || error.message === 'Firebase: Error (auth/wrong-password).') {
          ubicacionModal.innerHTML = modalInicioSesion.datosInvalidos();
        } else if (error.message === 'Firebase: Error (auth/user-not-found).') {
          ubicacionModal.innerHTML = modalInicioSesion.usuarioInvalido();
        } else {
          ubicacionModal.textContent = error.message;
        }
      });
  });

  const botongoogle = document.getElementById('imgGoogle');
  botongoogle.addEventListener('click', () => {
    const proveedor = new GoogleAuthProvider();
    googleInicioSesion(proveedor)
      // eslint-disable-next-line no-unused-vars
      .then((result) => {
        window.location.hash = '#/artmuro';
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
                    <img id="googleSignIn" src="imagenes/GoogleOriginal.png">
                </div>
                
                <p class="texto">¿No tienes una cuenta? <a id="registrate" href="#/registro"> Regístrate</a></p> 
            </form> 
        </div>`;
  return formIngreso;
};

export const modalErrorMensaje = {
  modalError: () => {
    const errorMensaje = `
      <div class= "modalError" id="modalError">
        <i class="fas fa-exclamation-triangle"></i>
        <p>Ingrese los datos correctamente</p>
      </div>
    `
    return errorMensaje;
  }
};

export const modalExitoMensaje = {
  modalExito: () => {
    const exitoMensaje = `
      <div class= "modalExito" id="modalExito">
      <i class="fas fa-check-circle" ></i>
        <p>Inicio de Sesión exitoso!</p>
      </div>
    `
    return exitoMensaje;
  }
};
