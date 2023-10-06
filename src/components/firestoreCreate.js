/* import { doc, updateDoc, arrayUnion } from 'firebase/firestore';
import { db } from './firebase.js';

// mandar post a DB (userID, icon, idLikes, post, time)
const createPost = (userID, icon, idLikes, post) => {
  const postRef = doc(db, 'postNuevo', 'postNv');
  updateDoc(postRef, {
    posts: arrayUnion({
      userID, icon, idLikes, post,
    }),
  })
    .then(() => 'Post creado')
    .catch((error) => error);
};

export default createPost; */
