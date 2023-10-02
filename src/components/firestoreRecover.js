import { getDocs, collection } from 'firebase/firestore';
import { db } from './firebase.js';

function getPost() {
  const refPost = collection(db, 'dataBase');
  getDocs(refPost)
    .then((snapshot) => {
      snapshot.forEach((doc) => {
        console.log(doc.id, '=>', doc.data());
      });
    })
    .catch((error) => {
      console.log(error);
    });
}

getPost();
export default getPost;
