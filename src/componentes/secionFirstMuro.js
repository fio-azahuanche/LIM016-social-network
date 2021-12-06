export const seccionMuro1 = () => {
  const primeraSeccion = document.createElement('section');
  primeraSeccion.classList.add('item2');
  primeraSeccion.innerHTML = `
        <section class="secUsuario">
            <div class="contenedorPortada">
                <img src="imagenes/ImgDelUsuario.png">
            </div>  
            <div class="contenedorPerfil">
                <div class="ImgCentralUsuario">
                    <img src="imagenes/ImgUsuario.png">
                </div>
                <div class="datosUsuario">
                    <h2 class="nombreUsuario">Usuario</h2>
                    <h3 class="estadoUsuario">Amante de los animales</h3>
                    <button class="botonAgregar"><img src="imagenes/bxs-user-plus.png">Agregar</button>
                </div>
            </div>
        </section>         
        <section class="secCategorias">
            <h1>Explorar</h1>
            <h2>Reciente</h2>
            <div class="links-categorias">
                <p>#ayudacanina</p>
                <p>#runrun</p>
                <p>#superpet</p>
                <p>#noCompresAdopta</p>                    
            </div>
            <div> 
                <h2>Grupos</h2>        
                <div class="categoriaUnica">
                    <img src="imagenes/refugioIcono.png" >
                    <p>Refugio</p>
                </div>
                <div class="categoriaUnica">
                    <img src="imagenes/reportarIcono.png" >
                    <p>Mascotas perdidas</p>
                </div>
                <div class="categoriaUnica">
                    <img src="imagenes/adoptarIcono.png" >
                    <p>Adoptar</p>
                </div>
                <div class="categoriaUnica">
                    <img src="imagenes/localizacionIcono.png" >
                    <p>Localización</p>
                </div>
                <div class="categoriaUnica">
                    <img src="imagenes/medicinasIcono.png" >
                    <p>Medicinas</p>
                </div>           
            </div> 
        </section>
    `;
  return primeraSeccion;
};