//import { ingreso } from '../componentes/inicioSeccion.js';
import { componentes } from '../lib/index.js';
import { divMuro } from '../componentes/muro.js';
export const vistasPantalla = () => {
    const main = document.getElementById('main');
    console.log(document.getElementById('formRegistro'));
    main.innerHTML = '';
    switch (window.location.hash.toLowerCase()) {
        case '': case '#/': case '#/inicio':

            main.appendChild(componentes.fondoInicial(componentes.ingreso));
            break;
        case '#/registro':
            main.appendChild(componentes.fondoInicial(componentes.registro));
            break;
        case '#/artmuro':
            main.innerHTML = divMuro;
            break;
        default:
            break;
    }
};
