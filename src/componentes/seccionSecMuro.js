import {
  obtenerPosts, obtenerPostById, subirDataHomeCol,
} from '../firebase/funcionesFirestore.js';

export const subirContainer = (idPost, creadorPost, apodoUser, postTxt, srcImagenPost) => {
  const divTablero = document.createElement('div');
  divTablero.classList.add('tableroPost');

  divTablero.innerHTML = `
    <div class="usuarioPost" id= "${idPost}">
        <div class="imgUsuarioPost"><img class="imgPost"src="imagenes/ImgUsuario3.png"></div>
        <div class="infoUsuarioPost">
            <div class="nombreUsuarioPost"><p>${creadorPost}</p><img src="imagenes/bxs-user-plus 2.png"></div>
            <div class="descripcionUsuarioPost"><p>${apodoUser}</p></div>
        </div>
    </div>
    <div class="estadoCompartido">
        <div class="contenidoCompartido">
            <p>${postTxt}</p>
            <img src="${srcImagenPost}">
        </div>
    </div>
    <div class="botonesReaccion">
        <img src="imagenes/heartIcono.png" class="like">
        <img src="imagenes/comentIcono.png">
        <img src="imagenes/compartirIcono.png">
    </div>
    `;
  return divTablero;
};

const rellenarHome = async (conteinerPost) => {
  const datosPost = await obtenerPosts();
  datosPost.forEach((doc) => {
    conteinerPost.prepend(subirContainer(doc.postId, doc.creador, doc.descripcion, doc.publicacion, ''));
  });
};

export const seccionMuro2 = () => {
  const segundaSeccion = document.createElement('section');
  segundaSeccion.classList.add('item3');

  const navInferior = document.createElement('nav');
  navInferior.classList.add('barraNavegacionInferior');
  navInferior.innerHTML = `
    <ul>
    <li class="list">
        <a id="abrirModal">
            <span class="icon">
                <img src="imagenes/users-three.png">
            </span>
        </a>
    </li>
    <li class="list">
        <a href="#/artmuro">
            <span class="icon">
                <img src="imagenes/house-fill.png">
            </span>
        </a>
    </li>
    <li class="list">
        <a href="#/artperfil">
            <span class="icon">
                <img src="imagenes/ImgUsuario.png">
            </span>
        </a>
    </li>
    </ul>
    `;
  const seccionModal = document.createElement('div');
  seccionModal.classList.add('modalCategoria');
  seccionModal.setAttribute('id', 'modalCategoria');
  seccionModal.innerHTML = `<section class="seccionModal">
    <div class="tituloModal">
      <h1>Grupos</h1>
      <span class="btnCerrar">&times;</span>
    </div>
    <div class= "contenedorCategorias">
        <a href="#/artrefugio" class="categoriaUnica">
            <img src="imagenes/iconoRefugioMascotas.png" >
            <p>Refugios</p>
        <a>
        <a href="#/artmascotasperdidas" class="categoriaUnica">
            <img src="imagenes/reportarIcono.png" >
            <p>Mascotas Perdidas</p>
        </a>
        <a href="#/artadoptar" class="categoriaUnica">
            <img src="imagenes/adoptarIcono.png" >
            <p>Adoptar</p>
        </a>
        <a href="#/artlugares" class="categoriaUnica">
            <img src="imagenes/localizacionIcono.png" >
            <p>Lugares</p>
        </a>
        <a href="#/artdonaciones" class="categoriaUnica">
            <img src="imagenes/medicinasIcono.png" >
            <p>Donaciones</p>
        </a>
    </div> 
    </section>`;
  const tableroCompartir = document.createElement('form');
  tableroCompartir.setAttribute('id', 'formCompartir');
  tableroCompartir.classList.add('tableroCompartir');
  tableroCompartir.innerHTML = `
    <input type="text" placeholder="¿Qué quieres reportar?" id="inputCompartir"><img id="imgPost"></input>
    <div class="botones">
        <button class="botonCompartirImagen"><img src="imagenes/botonCompartirImagen.png"></button>
        <select name="Grupo" id="Grupo" class="Grupo">
            <option value="" selected disabled>Seleccionar</option>
            <option value="Refugios">Refugios</option>
            <option value="Mascotas Perdidas">Mascotas Perdidas</option>
            <option value="Adoptar">Adoptar</option>
            <option value="Lugares">Lugares</option>
            <option value="Donaciones">Donaciones</option>
        </select>
        <button class="botonCompartir">Compartir</button>
    </div>
    `;
  const contenedorPublicaciones = document.createElement('div');
  contenedorPublicaciones.classList.add('container-post');
  contenedorPublicaciones.setAttribute('id', 'container-post');
  rellenarHome(contenedorPublicaciones);

  segundaSeccion.appendChild(navInferior);
  segundaSeccion.appendChild(tableroCompartir);
  segundaSeccion.appendChild(seccionModal);
  segundaSeccion.appendChild(contenedorPublicaciones);
  return segundaSeccion;
};

export const creacionPost = (formCompartir, containerPost) => {
  const divCompartir = document.getElementById(formCompartir);
  const containerPosts = document.getElementById(containerPost);
  let categoriaSeleccionada = [];
  const btnSelector = document.getElementById('Grupo');
  btnSelector.addEventListener('change', (e) => {
    categoriaSeleccionada.push(e.target.value);
  });
  divCompartir.addEventListener('submit', async (e) => {
    e.preventDefault();
    let categoria = categoriaSeleccionada[categoriaSeleccionada.length - 1];
    const postTxt = document.getElementById('inputCompartir').value;
    const userData = JSON.parse(sessionStorage.userSession);
    if (categoria === undefined) categoria = 'inicio';
    await subirDataHomeCol(
      userData.id, postTxt, userData.username, userData.descripcion, categoria,
    )
      .then((doc) => {
        obtenerPostById(doc.id).then((postsById) => {
          containerPosts.prepend(subirContainer(doc.id, postsById.creador, postsById.descripcion, postsById.publicacion, ''));
        });
      });
    categoriaSeleccionada = [];
    divCompartir.reset();
  });
};

/* export const menuPuntosHorizontales = () => {
  const puntosHorizontales = document.querySelector('.puntosHorizontales');
  const middle2 = document.querySelector('.middle2');
  const desplegable2 = document.querySelector('.desplegable2');
  puntosHorizontales.addEventListener('click', () => {
    middle2.classList.toggle('active');
    desplegable2.classList.toggle('active');
  });
};
 */

export const modalCategorias = () => {
  const modalCategoria = document.getElementById('modalCategoria');
  const abrirModal = document.getElementById('abrirModal');
  const btnCerrar = document.querySelector('.btnCerrar');

  abrirModal.addEventListener('click', () => {
    modalCategoria.style.display = 'block';
  });

  btnCerrar.addEventListener('click', () => {
    modalCategoria.style.display = 'none';
  });

  /* outside click */
  window.addEventListener('click', (e) => {
    // eslint-disable-next-line eqeqeq
    if (e.target == modalCategoria) {
      modalCategoria.style.display = 'none';
    }
  });
};
