import { doc, deleteDoc } from 'firebase/firestore';
import { db } from './firebase.js';

function eliminarPost(docID, callback) {
  const postRef = doc(db, 'dataBase2', docID);

  return deleteDoc(postRef)
    .then(() => {
      if (callback) {
        callback('Post eliminado correctamente');
      }
    })
    .catch((error) => {
      if (callback) {
        callback(`Error al eliminar el post: ${error.message}`);
      }
      return Promise.reject(error);
    });
}
export default eliminarPost;
