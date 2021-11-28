const registrate = document.getElementById('registrate');
registrate.addEventListener('click', () => {
  document.getElementById('formRegistro').style.display = 'block';
  document.getElementById('formIngreso').style.display = 'none';
});

const formRegistro = document.getElementById('formRegistro');
formRegistro.addEventListener('submit', (e) => {
  e.preventDefault();
  const usuarioRegistro = formRegistro.usuarioRegistro.value;
  const correoRegistro = formRegistro.correoRegistro.value;
  const claveRegistro = formRegistro.claveRegistro.value;
  console.log(usuarioRegistro, correoRegistro, claveRegistro);
});

const formIngreso = document.getElementById('formIngreso');
formIngreso.addEventListener('submit', (e) => {
  e.preventDefault();
  const correoIngreso = formIngreso.correoIngreso.value;
  const claveIngreso = formIngreso.claveIngreso.value;
  console.log(correoIngreso, claveIngreso);
});
