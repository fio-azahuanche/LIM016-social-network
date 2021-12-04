import { componentes } from '../lib/index.js';
import { formRegistros, registroCorreo } from '../componentes/registro.js';
import { formInicioSesion, inicioSesion } from '../componentes/inicioSesion.js';
import { divMuro } from '../componentes/muro.js';
import { googleInicioSesion } from '../firebase/funcionesAuth.js';

export const vistasPantalla = () => {
  const main = document.getElementById('main');
  main.innerHTML = '';
  switch (window.location.hash.toLowerCase()) {
    case '': 
    case '#/': 
    case '#/inicio':
      main.appendChild(componentes.fondoHome(forms2.inicioSesion()));
      inicioSesion('correoIngreso', 'claveIngreso', 'formIngreso');
      const iniciarSesionGoogle = document.getElementById("googleSignIn");
      console.log(iniciarSesionGoogle);
      iniciarSesionGoogle.addEventListener("click", googleInicioSesion);
      break;
    case '#/registro':
      main.appendChild(componentes.fondoHome(formRegistros()));
      registroCorreo('usuarioRegistro', 'formRegistro', 'ubicacionModal');
      break;
    case '#/artmuro':
      main.innerHTML = divMuro;
      break;
    default:
      break;
  }
};
