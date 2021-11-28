// eslint-disable-next-line import/no-unresolved
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.5.0/firebase-app.js';
// eslint-disable-next-line import/no-unresolved
import { getAuth, createUserWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.5.0/firebase-auth.js';

// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
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
  const auth = getAuth();
  createUserWithEmailAndPassword(auth, correoRegistro, claveRegistro)
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

const formIngreso = document.getElementById('formIngreso');
formIngreso.addEventListener('submit', (e) => {
  e.preventDefault();
  let correoIngreso = document.getElementById('correoIngreso').value;
  let claveIngreso = document.getElementById('claveIngreso').value;
});
