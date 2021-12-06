import { cierreActividadUsuario, estadoAuthUsuario } from '../firebase/funcionesAuth.js';

export const userState = () => {
    estadoAuthUsuario((user) => {
      if (user === null || user === undefined ) {
          window.location.hash = '#/inicio';
      }
    });
  };

/*   export const estadoUsuario = () => {
      estadoAuthUsuario((user) => {
          if(user){
            
            cierreActividadUsuario();
          }else {
            window.location.hash = '#/inicio';
          }
      })
  } */