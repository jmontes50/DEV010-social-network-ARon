import editPost from './firestoreEdit';
import likes from './likes.js';

const selectedUserName = localStorage.getItem('selectedUserName');
let isLiking = false;

function postCreate(userImage, userName, numberLikes, postText, idPost, whoLikes) {
  // console.log(whoLikes);
  // console.log(array.some(even));
  // [2, 5, 8, 1, 4].some((elem) => elem > 10);
  // console.log(whoLikes.some(selectedUserName) => selectedUserName === userName);
  // crear el li que contenga
  const liPost = document.createElement('li');
  liPost.setAttribute('id', idPost);
  liPost.classList.add('commentContainer');

  // icono, nombre, botones de editar y borrar, post y boton de like
  // ICONO
  const imgUser = document.createElement('img');
  imgUser.setAttribute('id', 'userImage');
  imgUser.setAttribute('class', 'userImagePost');
  imgUser.setAttribute('src', userImage);

  // NOMBRE
  const nameUser = document.createElement('p');
  nameUser.textContent = userName;
  nameUser.setAttribute('class', 'user-name');

  // BOTONES DE EDITAR Y BORRAR
  const containerButtons = document.createElement('div');
  containerButtons.setAttribute('class', 'postButtons');

  const deleteLink = document.createElement('a');
  deleteLink.textContent = 'Borrar';
  deleteLink.classList.add('action-link');

  const editLink = document.createElement('a');
  editLink.setAttribute('id', 'editLink');
  editLink.textContent = 'Editar';
  editLink.classList.add('action-link');
  containerButtons.appendChild(editLink);
  containerButtons.appendChild(deleteLink);

  // AREA DEL POST
  const commentTextarea = document.createElement('textarea');
  commentTextarea.value = postText;
  commentTextarea.setAttribute('class', 'commentTextarea');
  commentTextarea.setAttribute('name', 'commentTextarea');
  commentTextarea.setAttribute('readonly', 'true');

  // ACCION DE EDITAR
  let postId;
  let isEditing = false;
  editLink.addEventListener('click', () => {
    if (selectedUserName === userName) {
      postId = liPost.id;
      isEditing = true;
      commentTextarea.removeAttribute('readonly');
      commentTextarea.focus();
    }
  });
  commentTextarea.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      if (isEditing) {
        const newPost = commentTextarea.value;
        editPost(postId, newPost);
        commentTextarea.setAttribute('readonly', 'true');
        commentTextarea.blur();
        isEditing = false;
      }
    }
  });

  // FUNCION DE BOTON LIKE
  const containerLikes = document.createElement('div');
  containerLikes.setAttribute('class', 'likeArea');

  const btnLike = document.createElement('img');
  btnLike.setAttribute('id', idPost);
  btnLike.classList.add('btnLike');
  btnLike.setAttribute('src', './assets/unlike.png');
  const sumLikes = document.createElement('span');
  sumLikes.setAttribute('id', 'sumLikes');
  sumLikes.innerHTML = numberLikes;

  let lkNumber;
  btnLike.addEventListener('click', () => {
    if (!isLiking) {
      if (selectedUserName !== userName) {
        btnLike.setAttribute('src', './assets/like.png');
        isLiking = true;
        lkNumber = sumLikes.textContent;
        const newLikes = likes(btnLike.id, lkNumber, isLiking, selectedUserName);
        sumLikes.innerHTML = newLikes;
      }
    } else {
      btnLike.setAttribute('src', './assets/unLike.png');
      isLiking = false;
      lkNumber = sumLikes.textContent;
      const newLikes = likes(btnLike.id, numberLikes, isLiking);
      sumLikes.innerHTML = newLikes;
    }
  });

  containerLikes.appendChild(btnLike);
  containerLikes.appendChild(sumLikes);

  liPost.appendChild(imgUser);
  liPost.appendChild(nameUser);
  liPost.appendChild(containerButtons);
  // liPost.appendChild(editLink);
  // liPost.appendChild(deleteLink);
  liPost.appendChild(commentTextarea);
  // liPost.appendChild(btnLike);
  // liPost.appendChild(sumLikes);
  liPost.appendChild(containerLikes);

  return liPost;
}

export default postCreate;
