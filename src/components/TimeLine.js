import { getAuth } from 'firebase/auth';
import { onAuthStateChanged } from '@firebase/auth';
import firebaseApp from './firebase.js';
import createPost from './firestoreCreate.js';

const auth = getAuth(firebaseApp);

function TimeLine(navigateTo) {
  const section = document.createElement('section');
  section.setAttribute('id', 'sectionTimeLine');
  section.setAttribute('class', 'timeLineStyle');

  const logoTimeLine = document.createElement('img');
  logoTimeLine.setAttribute('id', 'logoTimeLine');
  logoTimeLine.setAttribute('class', 'timeLineLogo');
  logoTimeLine.setAttribute('src', './assets/logo256.png');

  logoTimeLine.addEventListener('click', () => {
    window.location.reload();
  });

  const btnClose = document.createElement('img');
  btnClose.setAttribute('id', 'btnClose');
  btnClose.setAttribute('src', './assets/close.png');

  btnClose.addEventListener('click', () => {
    window.location.href = './';
  });

  const sectionPosts = document.createElement('section');
  sectionPosts.setAttribute('id', 'sectionPosts');
  sectionPosts.setAttribute('class', 'postSection');

  const commentInput = document.createElement('textarea');
  commentInput.setAttribute('type', 'text');
  commentInput.setAttribute('id', 'commentInput');
  commentInput.setAttribute('placeholder', '¿Qué compartes hoy?');

  const sendButton = document.createElement('button');
  sendButton.setAttribute('id', 'sendButton');
  sendButton.textContent = 'Enviar';

  const commentList = document.createElement('ul');
  commentList.setAttribute('id', 'commentList');

  let isEditing = false;
  let isLiking = false;
  let likes = 0;

  let commentText;
  const commentContainer = document.createElement('li');
  let commentTextarea;
  // const editLink = document.createElement('a');
  // const deleteLink = document.createElement('a');
  // const btnLike = document.createElement('img');
  // const sumLikes = document.createElement('span');
  // const likeContainer = document.createElement('div');
  // const commentButtonsDiv = document.createElement('div');

  // cargar posts
  document.querySelector('commenTextarea');

  // cliks
  sendButton.addEventListener('click', () => {
    commentText = commentInput.value;
    if (commentText.trim() !== '') {
      // const commentContainer = document.createElement('li');
      commentContainer.setAttribute('class', 'commentContainer');

      commentTextarea = document.createElement('textarea');
      commentTextarea.value = commentText;
      commentTextarea.setAttribute('class', 'commentTextarea');
      commentTextarea.setAttribute('name', 'commentTextarea');
      commentTextarea.setAttribute('readonly', 'true');

      commentTextarea.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
          e.preventDefault();
          if (isEditing) {
            isEditing = false;
            commentTextarea.setAttribute('readonly', 'true');
            commentTextarea.blur();
          }
        }
      });

      const editLink = document.createElement('a');
      editLink.textContent = 'Editar';
      editLink.classList.add('action-link');
      editLink.addEventListener('click', () => {
        isEditing = true;
        commentTextarea.removeAttribute('readonly');
        commentTextarea.focus();
      });

      const deleteLink = document.createElement('a');
      deleteLink.textContent = 'Borrar';
      deleteLink.classList.add('action-link');
      deleteLink.addEventListener('click', () => {
        const shouldDelete = window.confirm('¿Estás seguro de que deseas borrar este comentario?');
        if (shouldDelete) {
          commentContainer.remove();
        }
      });

      const btnLike = document.createElement('img');
      btnLike.setAttribute('id', 'btnLike');
      btnLike.setAttribute('src', './assets/unlike.png');

      const sumLikes = document.createElement('span');
      sumLikes.setAttribute('id', 'sumLikes');
      sumLikes.innerHTML = likes;

      editLink.addEventListener('click', () => {
        isEditing = true;
        commentTextarea.removeAttribute('readonly');
        commentTextarea.focus();
      });

      deleteLink.addEventListener('click', () => {
        const shouldDelete = window.confirm('¿Estás seguro de que deseas borrar este comentario?');
        if (shouldDelete) {
          commentContainer.remove();
        }
      });

      btnLike.addEventListener('click', () => {
        if (isLiking) {
          btnLike.setAttribute('src', './assets/unLike.png');
          likes -= 1;
          isLiking = false;
        } else {
          btnLike.setAttribute('src', './assets/like.png');
          likes += 1;
          isLiking = true;
        }
        sumLikes.innerHTML = likes;
      });

      const likeContainer = document.createElement('div');
      likeContainer.setAttribute('class', 'liking');
      likeContainer.appendChild(btnLike);
      likeContainer.appendChild(sumLikes);

      const commentButtonsDiv = document.createElement('div');
      commentButtonsDiv.setAttribute('class', 'commentButtons');
      commentButtonsDiv.appendChild(editLink);
      commentButtonsDiv.appendChild(deleteLink);

      commentContainer.appendChild(commentButtonsDiv);
      commentContainer.appendChild(commentTextarea);
      commentContainer.appendChild(likeContainer);
      commentList.appendChild(commentContainer);

      commentList.classList.add('visible');
      commentList.style.display = 'block';
      commentInput.value = '';

      // mandar post a DB
      createPost();
    }
  });

  sectionPosts.appendChild(commentInput);
  sectionPosts.appendChild(sendButton);
  sectionPosts.appendChild(commentList);
  section.append(
    logoTimeLine,
    btnClose,
    sectionPosts,
  );

  return section;
}

export default TimeLine;
