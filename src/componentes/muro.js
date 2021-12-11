import { contenidoHeader } from './headerMuro.js';
import { seccionMuro1 } from './secionFirstMuro.js';
import { seccionMuro2 } from './seccionSecMuro.js';
import { contenidoPerfil } from './seccionPerfil.js';

export const muro = () => {
  const articleMuro = document.createElement('article');
  articleMuro.classList.add('artMuro');
  articleMuro.setAttribute('id', 'artMuro');

  const headerMuro = document.createElement('header');
  headerMuro.classList.add('item1');
  headerMuro.innerHTML = contenidoHeader();

  const divSecciones = document.createElement('div');
  divSecciones.classList.add('grid-container');
  divSecciones.appendChild(seccionMuro1());
  divSecciones.appendChild(seccionMuro2());
  
  articleMuro.appendChild(headerMuro);
  articleMuro.appendChild(divSecciones);
  return articleMuro;
};

export const muroPerfil = () => {
  const articleMuroPerfil = document.createElement('article');
  articleMuroPerfil.classList.add('artPerfil');
  articleMuroPerfil.setAttribute('id', 'artPerfil');

  const headerMuro = document.createElement('header');
  headerMuro.classList.add('item1');
  headerMuro.innerHTML = contenidoHeader();

  const divSeccionPerfilusuario = document.createElement('div');
  divSeccionPerfilusuario.classList.add('contenedor-perfil');
  divSeccionPerfilusuario.appendChild(contenidoPerfil());  
  
  articleMuroPerfil.appendChild(headerMuro);
  articleMuroPerfil.appendChild(divSeccionPerfilusuario);

  return articleMuroPerfil;
};