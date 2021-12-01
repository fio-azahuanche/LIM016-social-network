// eslint-disable-next-line import/no-unresolved
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, sendPasswordResetEmail } from 'https://www.gstatic.com/firebasejs/9.5.0/firebase-auth.js';
import { app } from '../firebase/config.js';

const auth = getAuth(app);
// Crea un usuario con correo y contraseña
export const registroUsuario = (correo, contraseña) => {
  return createUserWithEmailAndPassword(auth, correo, contraseña);
};

// Ingreso de usuario con  correo y contraseña
export const inicioSesionUsuario = (correo, contraseña) => {
  return signInWithEmailAndPassword(auth, correo, contraseña);
};

// Ingreso del usuario con cuenta de Google
export const googleInicioSesion = () => {
  const proveedorGoogle = new GoogleAuthProvider();
  const inicioConGoogle = signInWithPopup(auth, proveedorGoogle);
  return inicioConGoogle;
};

//
export const envioClaveRecuperacion = (correo) => {
  return sendPasswordResetEmail(auth, correo);
};
//
export const envioCorreoVerificacion= () => firebase.auth().currentUser.sendEmailVerification();

//
export const onAuthStateChanged = (callback) => firebase.auth().onAuthStateChanged(callback);
export const signOut = () => firebase.auth().signOut();
