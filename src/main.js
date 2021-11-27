// Este es el punto de entrada de tu aplicacion

import { myFunction } from './lib/index.js';

myFunction();

const registrate = document.getElementById('registrate');
registrate.addEventListener('click', () => {
  document.getElementById('formRegistro').style.display = 'block';
  document.getElementById('formIngreso').style.display = 'none';
});
