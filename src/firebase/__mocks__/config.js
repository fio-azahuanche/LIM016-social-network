export const signInWithEmailAndPassword = jest.fn(() => Promise.resolve({}));

export const auth = jest.fn();

export const db = jest.fn();

const colecciones = (coleccion) => {
  const objeto = { _Colecciones_: { coleccion } };
  return objeto;
};

export const collection = jest.fn((_db_, _collection_) => colecciones(_collection_));

export const addDoc = jest.fn((_collection_, data) => {
  const objeto = {
    _collection_: data,
  };
  return Promise.resolve(objeto);
});

export const serverTimestamp = jest.fn();
