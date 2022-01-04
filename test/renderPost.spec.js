/**
 * @jest-environment jsdom
*/
import { renderPost } from '../src/componentes/seccionSecMuro.js';

jest.mock('../src/firebase/config.js');
jest.mock('../src/firebase/funcionesFirestore.js');
jest.mock('../src/firebase/funcionesStorage.js');

describe('renderPost', () => {
  beforeAll((done) => {
    document.body.innerHTML = '';
    done();
  });
  it('renderPost', () => {
    const dataCreadorPost = {
      username: 'Yumari',
      descripcion: 'dogLover',
      imgUsuario: '',
    };
    const dataPost = {
      publicacion: 'hola! esto es una pruea',
      imgPost: '',
      likes: [],
    };
    const prueba = renderPost('12345678', dataPost, dataCreadorPost).querySelector('.contenidoCompartido p').textContent;
    expect(prueba).toEqual('hola! esto es una pruea');
  });
});
