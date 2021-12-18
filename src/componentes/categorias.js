import { subirContainer } from './seccionSecMuro.js';
import { obtenerPostsGrupo } from '../firebase/funcionesFirestore.js';

const mostrarPostPorCategoria = async (containerPost, grupo) => {
  const datosPost = await obtenerPostsGrupo(grupo);
  datosPost.forEach((docs) => {
    containerPost.prepend(subirContainer(docs.postId, docs.creador, docs.descripcion, docs.publicacion, ''));
  });
};

export const contenidoCategoria = (imgsrc, tituloCategoria) => {
  const categoriaSeccion = document.createElement('section');
  categoriaSeccion.classList.add('item3');

  const navInferior = document.createElement('nav');
  navInferior.classList.add('barraNavegacionInferior');
  navInferior.innerHTML = `
        <ul>
        <li class="list">
            <a>
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
  const divCategoriaMasBtn = document.createElement('div');
  divCategoriaMasBtn.setAttribute('id', 'tituloCategoria');
  divCategoriaMasBtn.innerHTML = `
    <div class="categoriaUnica">
        <img src=${imgsrc}>
        <p>${tituloCategoria}</p>
    </div>
    <div class="botonesDelPerfil">
        <button class="btnInicio"><a href="#/artmuro">Volver a Inicio</a></button>
    </div>
    `;
  const contenedorPostRefugio = document.createElement('div');
  contenedorPostRefugio.classList.add('container-post');
  contenedorPostRefugio.setAttribute('id', 'container-post');
  mostrarPostPorCategoria(contenedorPostRefugio, tituloCategoria);

  categoriaSeccion.appendChild(navInferior);
  categoriaSeccion.appendChild(divCategoriaMasBtn);
  categoriaSeccion.appendChild(contenedorPostRefugio);
  return categoriaSeccion;
};
