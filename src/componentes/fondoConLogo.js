//import { getAuth, createUserWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.5.0/firebase-auth.js';

/* const registroConFirebase = (nameInput, emailInput, passwordInput, container) => {
    container.addEventListener('submit', (e) => {
        e.preventDefault();
        // registro correcto
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, emailInput.value, passwordInput.value)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
            });
    });
    console.log(nameInput);
}; */


export function fondoInicial(cajaSegunda) {
    const fondo = `
      <section class="borde"><img src="imagenes/bordeSuperior.png"></section>
      <section class="cajaGrande">
        <div class="cajaInterna1">
          <img id="huellaLogo" src="imagenes/huellaLogo.png">
          <p class="slogan">“Porque nuestros peluditos necesitan de cuidado”</p>
        </div>
        ${cajaSegunda}
      </section>
      <section class="borde"><img src="imagenes/bordeInferior.png"></section>
    `
    const divFondo = document.createElement('article');
    divFondo.setAttribute('id', 'artRegistro');
    divFondo.classList.add('artRegistro');
    divFondo.innerHTML = fondo;

    const usuarioRegistro = document.getElementById('usuarioRegistro');
    const correoRegistro = document.getElementById('correoRegistro');
    const claveRegistro = document.getElementById('claveRegistro');

    //registroConFirebase(usuarioRegistro,correoRegistro,claveRegistro,document.getElementById('formRegistro'));

    return divFondo;

}