// eslint-disable-next-line import/no-unresolved
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.5.0/firebase-app.js';
// eslint-disable-next-line import/no-unresolved
import { getAuth, createUserWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.5.0/firebase-auth.js';

const firebaseConfig = {
  apiKey: 'AIzaSyCaQ7ypqFXHu9ikarcZpoPLKq1t5KxNmic',
  authDomain: 'helppetsprueba2.firebaseapp.com',
  projectId: 'helppetsprueba2',
  storageBucket: 'helppetsprueba2.appspot.com',
  messagingSenderId: '455441875262',
  appId: '1:455441875262:web:660c2751c247dc85696c6f',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const registrate = document.getElementById('registrate');
registrate.addEventListener('click', () => {
  document.getElementById('formRegistro').style.display = 'block';
  document.getElementById('formIngreso').style.display = 'none';
});

const formRegistro = document.getElementById('formRegistro');
formRegistro.addEventListener('submit', (e) => {
  e.preventDefault();
  // const usuarioRegistro = formRegistro.usuarioRegistro.value;
  const correoRegistro = formRegistro.correoRegistro.value;
  const claveRegistro = formRegistro.claveRegistro.value;
  createUserWithEmailAndPassword(auth, correoRegistro, claveRegistro)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log(user);
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
      // ..
    });
});

const formIngreso = document.getElementById('formIngreso');
formIngreso.addEventListener('submit', (e) => {
  e.preventDefault();
  const correoIngreso = formIngreso.correoIngreso.value;
  const claveIngreso = formIngreso.claveIngreso.value;
  console.log(correoIngreso, claveIngreso);
});
