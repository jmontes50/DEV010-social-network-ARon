import { getDocs, collection, serverTimestamp } from 'firebase/firestore';
import { db } from './firebase.js';

function getPost() {
  const postRef = collection(db, 'dataBase');
  const olderPosts = [];
  return getDocs(postRef)
    .then((snapshot) => {
      snapshot.forEach((doc) => {
        const post = doc.data();
        post.id = doc.id;
        post.timestamp = serverTimestamp();
        olderPosts.push(post);
      });
      return olderPosts;
    })
    .catch((error) => {
      console.log(error);
    });
  // console.log(olderPosts);
}
export default getPost;
