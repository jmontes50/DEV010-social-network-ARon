import { doc, deleteDoc, getDoc } from 'firebase/firestore';
import { db } from './firebase.js';

function eliminarPost(docID, selectedUserName) {
  const postRef = doc(db, 'dataBase2', docID);

  return getDoc(postRef)
    .then((postDoc) => {
      if (!postDoc.exists()) {
        console.log('No existe el post que intentas eliminar');
        return Promise.reject('No existe el post que intentas eliminar');
      }

      const postUserName = postDoc.data().userName;

      if (postUserName !== selectedUserName) {
        console.log('No tienes permisos para eliminar este post');
        return Promise.reject('No tienes permisos para eliminar este post');
      }

      return deleteDoc(postRef)
        .then(() => {
          console.log('Post eliminado correctamente');
        })
        .catch((error) => {
          console.error('Error al eliminar el post:', error);
          return Promise.reject(error);
        });
    })
    .catch((error) => {
      console.error('Error al obtener el documento:', error);
      return Promise.reject(error);
    });
}

export default eliminarPost;