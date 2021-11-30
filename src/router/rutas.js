//import { ingreso } from '../componentes/inicioSeccion.js';
import { ingreso} from '../componentes/inicioSeccion.js'
import { componentes } from '../lib/index.js';
import { fondoInicial } from '../componentes/fondoConLogo.js';
export const vistasPantalla = () => {
  const main = document.getElementById('main');
  main.innerHTML = '';
  switch (window.location.hash.toLowerCase()) {
    case '': case '#/': case '#/inicio':
      main.appendChild(fondoInicial(ingreso));
      break;
    case '#/registro':
      main.appendChild(componentes.fondoInicial(componentes.registro));
      break;

    default:
      break;
  }
};
