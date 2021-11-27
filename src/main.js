// Este es el punto de entrada de tu aplicacion

const registrate = document.getElementById('registrate');
registrate.addEventListener('click', () => {
  document.getElementById('formRegistro').style.display = 'block';
  document.getElementById('formIngreso').style.display = 'none';
});

const formRegistro = document.getElementById('formRegistro');
formRegistro.addEventListener('submit', (e) => {
  e.preventDefault();
  const usuarioRegistro = document.getElementById('usuarioRegistro').value;
  const correoRegistro = document.getElementById('correoRegistro').value;
  const claveRegistro = document.getElementById('claveRegistro').value;
  console.log(usuarioRegistro);
});

const formIngreso = document.getElementById('formIngreso');
formIngreso.addEventListener('submit', (e) => {
  e.preventDefault();
  let correoIngreso = document.getElementById('correoIngreso').value;
  let claveIngreso = document.getElementById('claveIngreso').value;
});
