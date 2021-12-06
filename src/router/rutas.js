import { componentes } from '../lib/index.js';
import { formRegistro, registroCorreo } from '../componentes/registro.js';
import { formInicioSesion, inicioSesion } from '../componentes/inicioSesion.js';
import { muro } from '../componentes/muro.js';
import { auth } from '../firebase/funcionesAuth.js';
import { cerrarSesion } from '../componentes/headerMuro.js';
import { userState } from '../componentes/validaciones.js';

export const vistasPantalla = () => {
  const main = document.getElementById('main');
  main.innerHTML = '';
  switch (window.location.hash.toLowerCase()) {
    case '': case '#/': case '#/inicio':
      main.appendChild(componentes.fondoHome(formInicioSesion()));
      inicioSesion('formIngreso', 'ubicacionModal')
      console.log(auth);
      break;
    
    case '#/registro':
      main.appendChild(componentes.fondoHome(formRegistro()));
      registroCorreo('usuarioRegistro', 'formRegistro', 'ubicacionModal');
      break;

    case '#/artmuro':
      userState();
      main.appendChild(muro());
      cerrarSesion();
      break;

    default:
      main.innerHTML='paginaNo encontrada';
      break;
  }
};
