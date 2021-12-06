/* eslint-disable import/no-unresolved */
import {
  onAuthStateChanged,
  getAuth,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendEmailVerification,
  signInWithPopup,
  signOut
} from 'https://www.gstatic.com/firebasejs/9.5.0/firebase-auth.js';
import { app } from './config.js';
export const auth = getAuth(app);
<<<<<<< HEAD

=======
>>>>>>> 30ec80cc3b49a12375b5e432aac975e2845c75af
// Crea un usuario con correo y contraseña
export const registroUsuario = (correo, contraseña) => {
  const auth = getAuth(app);
  return createUserWithEmailAndPassword(auth, correo, contraseña);
};

// Ingreso de usuario con  correo y contraseña
export const inicioSesionUsuario = (correo, contraseña) => {
  const auth = getAuth(app);
  console.log(auth);
  return signInWithEmailAndPassword(auth, correo, contraseña);
};

// Ingreso del usuario con cuenta de Google
export const googleInicioSesion = (proveedor) => {
  const auth = getAuth(app);
  return signInWithPopup(auth, proveedor);
};

// Cerrar Sesion del usuario
export const cierreSesionUsuario = () => {
  const auth = getAuth(app);
  return signOut(auth);
};

//
/* export const envioClaveRecuperacion = (correo) => {
  const auth = getAuth(app);
  return sendPasswordResetEmail(auth, correo);
};
 */
//
export const envioCorreoVerificacion = () => {
  const auth = getAuth(app);
  return sendEmailVerification(auth.currentUser);
};

//
<<<<<<< HEAD
export const estadoAuthUsuario = (callback) => {
  const auth = getAuth(app);
  return onAuthStateChanged(auth, callback)
}

//
export const cerrarActividadUsuario = () => {
  const auth = getAuth(app);
  return signOut(auth)
}
=======
/* export const onAuthStateChanged = (callback) => firebase.auth().onAuthStateChanged(callback);
export const signOut = () => firebase.auth().signOut(); */

>>>>>>> 30ec80cc3b49a12375b5e432aac975e2845c75af
