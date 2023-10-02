import { getDocs, collection } from 'firebase/firestore';
import { db } from './firebase.js';
import postCreate from './postCreate.js';

/* function getPost() {
  const refPost = collection(db, 'dataBase');
  getDocs(refPost)
    .then((snapshot) => {
      snapshot.forEach((doc) => {
        console.log(doc.id, '=>', doc.data());
        console.log(doc.data.post);
      });
    })
    .catch((error) => {
      console.log(error);
    });
} */

function getPost() {
  const postRef = collection(db, 'dataBase');
  getDocs(postRef)
    .then((snapshot) => {
      snapshot.forEach((doc) => {
        const post = doc.data();
        const postID = doc.id;
        // console.log(doc.id);
        const recoverUserID = post.userID;
        // console.log(post.userID);
        const recoverIcon = post.icon;
        // console.log(post.icon);
        // console.log(post.idLikes);
        const recoverPost = post.post;
        // console.log(post.post);
        const likes = 0;
        // console.log(post.fecha.toDate());
        // postCreate(userImage, userName, likes, postText)
        const olderPosts = postCreate(recoverIcon, recoverUserID, likes, recoverPost);
        // console.log(olderPosts);
        // return olderPosts;
      });
    })
    .catch((error) => {
      console.log(error);
    });
}

// getPost();
export default getPost;
