export const divMuro = `
<article class="artMuro"  id="artmuro">   
    <header class="item1"> <!-- header -->
        <img src="imagenes/ImgUsuario.png" >
        <p>HelpPets</p>
        <img src="imagenes/sign-out 1.png"  >
    </header>
    <div class="grid-container">
        <section class="item2"> <!-- menu -->
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
                    </div>
                </div>
            </section>         
            <section class="secCategorias">
                <h1>Explorar</h1>
                <div>            
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
        </section>

        <section class="item3"> <!-- main -->
            <div class="tableroCompartir">
                <input type="text" placeholder="¿Qué quieres reportar?">
                <div class="botones">
                    <button class="botonCompartirImagen"><img src="imagenes/botonCompartirImagen.png"></button>    
                    <button class="botonCompartir">Compartir</button>                            
                </div>                  
            </div>
            
            <div class="tableroPost">
                <div class="usuarioPost">
                    <div class="infoUsuarioPost">
                    
                    </div>
                    <img>
                </div>
                <div class="estadoCompartido"></div>  
                <div class="botonesReaccion">
                    <img src="imagenes/heartIcono.png">
                    <img src="imagenes/comentIcono.png">
                    <img src="imagenes/compartirIcono.png">
                    <img src="imagenes/emojiIcono.png">
                </div>
            </div>
            
        </section>       
    </div>
    <footer class="item4"></footer> 
</article>`;
