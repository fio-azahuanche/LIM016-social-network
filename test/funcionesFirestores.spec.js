import { /* obtenerById, */ subirDataHomeCol } from '../src/firebase/funcionesFirestore';
import { addDoc, collection } from '../src/firebase/config';

jest.mock('../src/firebase/config');

describe('subirDataHomeCol', () => {
  it('DEberia subir data a coleccion posts', () => subirDataHomeCol('strCreador', 'strPost', 'strCat', '').then(() => {
    // expect(addDoc.mock.result[0].value).toBe(Promise);
    console.log(collection.mock);
    /* const colRef = collection(db, 'hola');
    expect(colRef).toBe('hola');
    console.log(addDoc(colRef, { hola: 'hola1' })); */
    // console.log(addDoc(collection.mock.results[0].value, addDoc.mock.calls[0][1]).mock);
    console.log(addDoc.mockReturnValue('hola', '{post: hola1}'));

    /* const data = {
      posts: {
        usuarioId: 'strCreador',
        publicacion: 'strPost',
        categoria: 'strCat',
        imgPost: '',
        timestamp: undefined,
        likes: [],
      },
    };
    console.log(data);
    expect(dataAgregada).toStrictEqual(data); */
    /*
    expect(addDoc.mock(colRefPost)).toBe(''); */
  }));
});

/* describe('obtenerById', () => {
  it('Obtener documento por id', () => obtenerById('123', 'nameCollection')
    .then(() => {

  }));
}); */
