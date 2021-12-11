import { componentes } from '../lib/index.js';
import { formRegistros, registroCorreo } from '../componentes/registro.js';
import { formInicioSesion, inicioSesion } from '../componentes/inicioSesion.js';
import { muro, muroPerfil } from '../componentes/muro.js';
import { cerrarSesion, menuPuntosVerticales } from '../componentes/headerMuro.js';
import { userState } from '../componentes/validaciones.js';
import { menuPuntosHorizontales } from '../componentes/seccionSecMuro.js';

export const vistasPantalla = () => {
  const main = document.getElementById('main');
  main.innerHTML = '';
  switch (window.location.hash.toLowerCase()) {
    case '': case '#/': case '#/inicio':
      main.appendChild(componentes.fondoHome(formInicioSesion()));
      inicioSesion('formIngreso', 'ubicacionModal');
      break;

    case '#/registro':
      main.appendChild(componentes.fondoHome(formRegistros()));
      registroCorreo('formRegistro', 'ubicacionModal');
      break;

    case '#/artmuro':
      userState();
      main.appendChild(muro());
      cerrarSesion();
      menuPuntosVerticales();
      menuPuntosHorizontales();
      break;

    case '#/artperfil':
      userState();
      main.appendChild(muroPerfil());
      cerrarSesion();
      menuPuntosVerticales();
      menuPuntosHorizontales();
      break;

    default:
      main.innerHTML = 'Página No Encontrada';
      break;
  }
};
