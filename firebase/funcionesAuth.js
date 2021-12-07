/* eslint-disable import/no-unresolved */
import {
  onAuthStateChanged,
  getAuth,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendEmailVerification,
  signInWithPopup,
} from 'https://www.gstatic.com/firebasejs/9.5.0/firebase-auth.js';
import { app } from './config.js';

// Crea un usuario con correo y contraseña
export const registroUsuario = (correo, contraseña) => {
  const auth = getAuth(app);
  return createUserWithEmailAndPassword(auth, correo, contraseña);
};

// Ingreso de usuario con  correo y contraseña
export const inicioSesionUsuario = (correo, contraseña) => {
  const auth = getAuth(app);
  return signInWithEmailAndPassword(auth, correo, contraseña);
};

// Ingreso del usuario con cuenta de Google
export const googleInicioSesion = (proveedor) => {
  const auth = getAuth(app);
  return signInWithPopup(auth, proveedor);
};

// Ingreso del usuario con cuenta de Facebook
export const facebookInicioSesion = (proveedor) => {
  const auth = getAuth(app);
  return signInWithPopup(auth, proveedor);
};

// Cerrar Sesion del usuario
export const cierreActividadUsuario = () => {
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

export const estadoAuthUsuario = (callback) => {
  const auth = getAuth(app);
  return onAuthStateChanged(auth, callback);
};
