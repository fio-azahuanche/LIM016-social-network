import { componentes } from '../lib/index.js';
import { forms } from "../componentes/formulariosHome.js";
import { divMuro } from '../componentes/muro.js';


export const vistasPantalla = () => {
    const main = document.getElementById('main');
    main.innerHTML = '';
    switch (window.location.hash.toLowerCase()) {
        case '': case '#/': case '#/inicio':
            main.appendChild(componentes.fondoHome(forms.inicioSesion()));
            break;
        case '#/registro':
            main.appendChild(componentes.fondoHome(forms.registro()));
            registroCorreo('usuarioRegistro', 'correoRegistro', 'claveRegistro', 'formRegistro');
            break;
        case '#/artmuro':
            main.innerHTML = divMuro;
            break;
        default:
            break;
    }
};
