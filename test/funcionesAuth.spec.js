// importamos la funcion que vamos a testear
import { inicioSesionUsuario } from '../src/firebase/funcionesAuth';
import { signInWithEmailAndPassword } from '../src/firebase/config';

jest.mock('../src/firebase/config');

describe('inicioSesionUsuario', () => {
  it('deberia ser una funcion', () => {
    expect(typeof inicioSesionUsuario).toBe('function');
  });
  it('', () => {
    // nos retorna un objeto
    const data = inicioSesionUsuario('', '');
    data.then(() => {
      console.log(signInWithEmailAndPassword.mock.calls);
    });
    data.catch((e) => {
      console.log(e);
      // eslint-disable-next-line no-console
      console.log(signInWithEmailAndPassword.mock);
    });
  });
});
