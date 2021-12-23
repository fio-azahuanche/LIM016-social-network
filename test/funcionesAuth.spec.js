// importamos la funcion que vamos a testear
import {
  signInWithEmailAndPassword, createUserWithEmailAndPassword,
  signOut, onAuthStateChanged, sendEmailVerification, /* auth, */
} from '../src/firebase/config';
import {
  inicioSesionUsuario, registroUsuario, cierreActividadUsuario, estadoAuthUsuario,
  envioCorreoVerificacion, googleInicioSesion, facebookInicioSesion,
} from '../src/firebase/funcionesAuth';

jest.mock('../src/firebase/config');

// registroUsuario
describe('registroUsuario', () => {
  it('deberia ser una funcion', () => {
    expect(typeof registroUsuario).toBe('function');
  });
  it('Debería poder registrar a un usuario', () => registroUsuario('front@end.la', '123456')
    .then(() => {
      expect(createUserWithEmailAndPassword.mock.calls[0][1]).toBe('front@end.la');
      expect(createUserWithEmailAndPassword.mock.calls[0][2]).toBe('123456');
    }));
});

// inicioSesionUsuario
describe('inicioSesionUsuario', () => {
  it('deberia ser una funcion', () => {
    expect(typeof inicioSesionUsuario).toBe('function');
  });
  it('Debería poder iniciar sesion', () => inicioSesionUsuario('front@end.la', '123456')
    .then(() => {
      expect(signInWithEmailAndPassword.mock.calls[0][1]).toBe('front@end.la');
      expect(signInWithEmailAndPassword.mock.calls[0][2]).toBe('123456');
    }));
});

// cierreActividadUsuario
describe('cierreActividadUsuario', () => {
  it('deberia cerrar sesion', () => cierreActividadUsuario()
    .then(() => {
      expect(signOut.mock.calls[0][1]).toBe(undefined);
    }));
});

// estadoAuthUsuario
describe('estadoAuthUsuario', () => {
  it('debería ser una función', () => {
    expect(typeof estadoAuthUsuario).toBe('function');
  });
  const callback = () => {};
  it('deberia verificar el estado del usuario', () => estadoAuthUsuario(callback)
    .then(() => {
      expect(onAuthStateChanged.mock.calls[0][1]).toEqual(callback);
    }));
});

// envioCorreoVerificacion
describe('envioCorreoVerificacion', () => {
  it('debería ser una función', () => {
    expect(typeof envioCorreoVerificacion).toBe('function');
  });
  it('', () => envioCorreoVerificacion()
    .then(() => {
      // console.log(auth.mock.currentUser);
      expect(sendEmailVerification.mock.calls).toHaveLength(1);
    }));
});

// googleInicioSesion
describe('googleInicioSesion', () => {
  it('debería ser una función', () => {
    expect(typeof googleInicioSesion).toBe('function');
  });
});

// facebookInicioSesion
describe('facebookInicioSesion', () => {
  it('debería ser una función', () => {
    expect(typeof facebookInicioSesion).toBe('function');
  });
});
