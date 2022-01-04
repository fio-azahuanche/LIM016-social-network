import { subirDataHomeCol } from '../src/firebase/funcionesFirestore';
// import { addDoc, collection } from '../src/firebase/config';

jest.mock('../src/firebase/config');

describe('subirDataHomeCol', () => {
  it('DEberia subir data a coleccion posts', () => subirDataHomeCol('strCreador', 'strPost', 'strCat', '').then(() => {
    // console.log(collection.mock.results[0].value);
    // console.log(addDoc.mock.calls[0][1]);
    // console.log(addDoc(collection.mock.results[0].value, addDoc.mock.calls[0][1]));
    // console.log(addDoc.mock.results[0].value);
    /* const colRefPost = collection.mock(db.mock, 'posts');
    console.log(addDoc);
    console.log(addDoc.mock);
    expect(addDoc.mock(colRefPost)).toBe(''); */
  }));
});

/* describe('obtenerById', () => {
  it('Obtener documento por id', () => obtenerById('123', 'nameCollection')
    .then(() => {

  }));
}); */
