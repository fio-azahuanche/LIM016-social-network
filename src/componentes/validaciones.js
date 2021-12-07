import { estadoAuthUsuario } from '../firebase/funcionesAuth.js';

export const userState = () => {
  estadoAuthUsuario((user) => {
    if (!user ||!user.emailVerfied) {
      window.location.hash = '#/inicio';
    }
  });
};
