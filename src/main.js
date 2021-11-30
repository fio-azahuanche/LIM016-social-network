// eslint-disable-next-line import/no-unresolved
// import { getAuth, createUserWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.5.0/firebase-auth.js';
// import { app } from './firebase/config.js';
// import { componentes } from '../lib/index.js';
import { vistasPantalla } from './router/rutas.js';
// Este es el punto de entrada de tu aplicacion

window.addEventListener('load', vistasPantalla);

window.addEventListener('hashchange', vistasPantalla);

console.log(vistasPantalla);

/* const formRegistro = document.querySelector('#formRegistro');
formRegistro.addEventListener('submit', (e) => {
  e.preventDefault();
  // const usuarioRegistro = formRegistro.usuarioRegistro.value;
  const correoRegistro = formRegistro.correoRegistro.value;
  const claveRegistro = formRegistro.claveRegistro.value;
  createUserWithEmailAndPassword(auth, correoRegistro, claveRegistro)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log(user);
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
      // ..
    });
}); */

/*
const formIngreso = document.getElementById('formIngreso');
formIngreso.addEventListener('submit', (e) => {
  e.preventDefault();
  const correoIngreso = formIngreso.correoIngreso.value;
  const claveIngreso = formIngreso.claveIngreso.value;
  console.log(correoIngreso, claveIngreso);
});
 */
