import {
  getStorage,
  ref,
  uploadBytes,
  getDownloadURL,
  app,
} from './config.js';

export const storage = getStorage(app);

export const subirFileStorage = async (file, carpeta) => {
  const archivoRef = ref(storage, `${carpeta}/${file.name}`);
  await uploadBytes(archivoRef, file);
  const traerFile = getDownloadURL(archivoRef);
  return traerFile;
};
