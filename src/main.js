
// eslint-disable-next-line import/no-unresolved
//import { getAuth, createUserWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.5.0/firebase-auth.js';
//import { app } from './firebase/config.js';
//import { componentes } from '../lib/index.js';
import {vistasPantalla} from '../router/rutas.js'
// Este es el punto de entrada de tu aplicacion
import {ingreso} from '../componentes/inicioSeccion.js'
window.addEventListener('load', vistasPantalla);

window.addEventListener('hashchange', vistasPantalla);

console.log(vistasPantalla);




/* const formRegistro = document.querySelector('#formRegistro');
formRegistro.addEventListener('submit', (e) => {
  e.preventDefault();
  const usuarioRegistro = document.getElementById('usuarioRegistro').value;
  const correoRegistro = document.getElementById('correoRegistro').value;
  const claveRegistro = document.getElementById('claveRegistro').value;
  const auth = getAuth();
  createUserWithEmailAndPassword(auth, correoRegistro, claveRegistro)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });
}); */

/*
const formIngreso = document.getElementById('formIngreso');
formIngreso.addEventListener('submit', (e) => {
  e.preventDefault();
  let correoIngreso = document.getElementById('correoIngreso').value;
  let claveIngreso = document.getElementById('claveIngreso').value;
});
 */