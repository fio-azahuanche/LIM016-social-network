import { cierreActividadUsuario } from '../firebase/funcionesAuth.js';
import { validateSessionStorage } from './validaciones.js';

export const contenidoHeader = () => {
  const userData = validateSessionStorage();
  //sessionStorage.setItem('userSession', JSON.stringify(data));
  //const userData = JSON.parse(sessionStorage.userSession);
  const headerMuro = `
        <div class="enlacePerfil">
            <img src="imagenes/ImgUsuario.png" class="imagenUsuario">
            <p class="nombreUsuario"><a id="perfil" href="#/artperfil">${userData.username}</a></p>
        </div>
        <img src="imagenes/CarePets.svg" class="titulo-header">
        <div class="puntosVerticales">
          <figure></figure>
          <figure class="middle"></figure>
          <p class="equis"></p>
          <figure></figure>
          <ul class="desplegable">
            <li><a id="tema"><img src="imagenes/bx-palette.png"><span>Tema</span></a></li>
            <li><a id="cerrar-sesion"><img src="imagenes/sign-out.png"><span>Cerrar Sesión</span></a></li>
          </ul>
        </div>
      `;
  return headerMuro;
};

/* export const categoriasModal = () => {
  const fondoModalCateforias = document.createElement('div');
  fondoModalCateforias.classList.add('fondoCategoriasModal');
  fondoModalCateforias.setAttribute('id', 'fondo-categorias-modal');

  const containerModalCategorias = document.createElement('div');
  containerModalCategorias.classList.add('categorias-container');
  containerModalCategorias.setAttribute('id', 'categoriasContainer');
  containerModalCategorias.innerHTML = `
    <div class="modal-categorias modal-close" >
      <p class="xClose">X</p>
      <section class="secCategorias">
        <h1>Grupos</h1>            
        <div class= "contenedorCategorias">         
          <a class="categoriaUnica">
            <img src="imagenes/iconoRefugioMascotas.png" >
            <p>Refugio</p>
          <a>
          <a class="categoriaUnica">
            <img src="imagenes/reportarIcono.png" >
            <p>Mascotas perdidas</p>
          </a>
          <a class="categoriaUnica">
            <img src="imagenes/adoptarIcono.png" >
            <p>Adoptar</p>
          </a>
          <a class="categoriaUnica">
            <img src="imagenes/localizacionIcono.png" >
            <p>Localización</p>
          </a>
          <a class="categoriaUnica">
            <img src="imagenes/medicinasIcono.png" >
            <p>Donaciones</p>
          </a>           
        </div> 
      </section>       
    </div> 
  `;

  fondoModalCateforias.appendChild(containerModalCategorias);
  return fondoModalCateforias;
}
 */
export const cerrarSesion = () => {
  const btnCerrarSesion = document.getElementById('cerrar-sesion');
  btnCerrarSesion.addEventListener('click', () => {
    cierreActividadUsuario()
      .then(() => {
        // Sign-out successful.
        sessionStorage.clear();
        window.location.hash = '#/inicio';
      }).catch((error) => {
        // An error happened.
        // eslint-disable-next-line no-console
        console.log(error);
      });
  });
};

export const menuPuntosVerticales = () => {
  const puntosVerticales = document.querySelector('.puntosVerticales');
  const middle = document.querySelector('.middle');
  const equis = document.querySelector('.equis');
  const desplegable = document.querySelector('.desplegable');

  puntosVerticales.addEventListener('click', () => {
    middle.classList.toggle('active');
    equis.classList.toggle('active');
    desplegable.classList.toggle('active');
  });
};


