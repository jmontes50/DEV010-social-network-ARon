import { doc, setDoc } from 'firebase/firestore';
import { db } from './firebase.js';

const createPost = (userID, icon, idLikes, post, time) => {
  setDoc(doc(db, 'posts'), {
    autor: userID,
    icono: icon,
    likes: idLikes,
    post,
    tiempo: time,
  })
    .then(() => {
      console.log('Post creado');
    })
    .catch((error) => console.log(error));
};

export default createPost
