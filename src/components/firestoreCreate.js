import { doc, setDoc } from 'firebase/firestore';
import { db } from './firebase.js';

export const createPost = (userID, icon, idLikes, post, time) => {
    setDoc(doc(db, "posts") {
        autor: userID,
        icono: icon,
        likes:  idLikes,
        post: post,
        tiempo: time ,
    })
    .then(() => {
        console.log('Post creado');
    })
    .catch((error) => console.log(error));
};
