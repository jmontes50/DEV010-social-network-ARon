// likes(isLiking, numberLikes, recoverPID, selectedUserName);
import { doc, updateDoc } from 'firebase/firestore';
import { db } from './firebase.js';

function likes(isLike, likesNumber, idPostRecover, userIDSelected, recoverID) {
  console.log(isLike);
  console.log(likesNumber);
  console.log(idPostRecover);
  console.log(userIDSelected);
  console.log(recoverID);
  let nbLikes = Number(likesNumber);
  if (isLike) {
    if (userIDSelected !== recoverID) {
      nbLikes += 1;
    }
  }
  const postRef = doc(db, 'dataBase2', idPostRecover);
  updateDoc(postRef, {
    likes: nbLikes,
  });
}

export default likes;
