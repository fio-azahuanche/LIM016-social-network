// eslint-disable-next-line import/no-unresolved
import { getFirestore, collection, getDocs } from 'https://www.gstatic.com/firebasejs/9.5.0/firebase-firestore.js';
import { app } from './config.js';

export const db = getFirestore(app);
