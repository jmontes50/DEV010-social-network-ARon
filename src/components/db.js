import { collection, addDoc } from 'firebase/firestore';
import { db } from './firebase.js';

// mandar post a DB (userID, icon, idLikes, post, time)
const savePost = (userID, icon, post) => {
  addDoc(
    collection(db, 'dataBase'),
    {
      userID, icon, post,
    },
  );
};

export default savePost;
