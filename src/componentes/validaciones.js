import { estadoAuthUsuario } from '../firebase/funcionesAuth.js';

export const userState = () => {

    estadoAuthUsuario((user) => {
      if (user === null || user === undefined ) window.location.hash = '#/inicio';
    });
  };
// Verificacion el estado del usuario en Firebase (Si esta activo o no)
/* export const estadoUsuario = (user) => {
    if (user) {
        // User is signed in, see docs for a list of available properties

        const uid = user.uid;
        console.log(uid);
        // ...
    } else {

        // User is signed out
        // ...
    }
} */