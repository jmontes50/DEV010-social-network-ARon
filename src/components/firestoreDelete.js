import {
  doc, deleteDoc, getDoc,
} from 'firebase/firestore';
import { db } from './firebase.js';

function eliminarPost(docID, selectedUserName) {
  const postRef = doc(db, 'dataBase2', docID);

  return getDoc(postRef)
    .then((postDoc) => {
      if (postDoc.exists() && postDoc.data().userName === selectedUserName) {
        return deleteDoc(postRef);
      }
      console.log('No tienes permisos para eliminar este post');
      return Promise.reject('No tienes permisos para eliminar este post');
    })
    .then(() => {
      console.log('Post eliminado correctamente');
    })
    .catch((error) => {
      console.error('Error al eliminar el post:', error);
      return Promise.reject(error);
    });
}

export default eliminarPost;
