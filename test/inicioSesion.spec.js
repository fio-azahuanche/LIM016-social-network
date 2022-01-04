/* eslint-disable max-len */
/* const jsdom = require('jsdom');

const { JSDOM } = jsdom;

describe('formInicioSesion', () => {
  const virtualConsole = new jsdom.VirtualConsole();

  // Creamos primero nuestro dom virtual usando nuestro index
  beforeAll((done) => {
    JSDOM.fromFile('src/index.html', {
      runScripts: 'dangerously', // necesitaremmos usar los scripts que importammos en el html
      resources: 'usable', // igualmente los externos
      virtualConsole, // insertamos nuestra consola virtual
    })
      .then((dom) => { // ya tenemos nuestro dom
        global.document = dom.window.document; // no es recomendado pero creamos nuestro document de forma global para reemplazar el window.document
        global.virtualConsole = dom.virtualConsole; // tambien la consola para poder usarla después
        done(); // listo, pasamos a las pruebas
      });
  });

  it('cargando el dom virtual', () => {
    // verificammos que tenemos dom
    expect(document).not.toBe(undefined);
  });

  it('encontrar el main en nuestro html', () => {
    // verificamos que tenemos el elemto raíz
    const root = document.getElementById('main');
    expect(root).not.toBe(undefined);
    console.log(root);
  });
});
 */
