import {
  doc, updateDoc, arrayRemove, collection, getDoc, addDoc, serverTimestamp,
} from 'firebase/firestore';
import { db } from './firebase.js';

const eliminarPost = (idPost) => new Promise((resolve, reject) => {
  const postRef = doc(db, 'posts', idPost);
  const deletedPostsCollection = collection(db, 'deletedPosts');

  getDoc(postRef)
    .then((postSnapshot) => {
      if (!postSnapshot.exists()) {
        reject(new Error('El post no existe.'));
        return;
      }
      const postData = postSnapshot.data();

      updateDoc(postRef, {
        autor: arrayRemove(postData.userID),
        icono: arrayRemove(postData.icon),
        likes: arrayRemove(postData.idLikes),
        post: arrayRemove(postData.post),
      })
        .then(() => {
          console.log('post eliminado correctamente y anadido a la colecion de eliminados.');
          addDoc(deletedPostsCollection, {
            ...postData,
            deletedAt: serverTimestamp(),
          })
            .then(() => {
              console.log('Post añadido a la colección de eliminados.');
              resolve();
            });
        })
        .catch((error) => {
          reject(new Error(`Error al agregar el post a la coleccion de eliminados: ${error.message}`));
        });
    })
    .catch((error) => {
      reject(new Error(`Error al actualizar el post: ${error.message}`));
    });
});

export default eliminarPost;
