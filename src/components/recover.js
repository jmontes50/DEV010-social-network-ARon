import { getAuth, sendPasswordResetEmail } from 'firebase/auth';
import firebaseApp from './firebase.js';

const auth = getAuth(firebaseApp);

function recover() {
  const logo = document.createElement('img');
  logo.setAttribute('src', 'assets/logo256.png');

  const section = document.createElement('section');
  const title = document.createElement('h2');
  title.textContent = 'Recuperar contraseña';

  // crear elementos para pedir el correo
  const emailRecover = document.createElement('input');
  emailRecover.setAttribute('id', 'emailRecover');
  emailRecover.setAttribute('type', 'email');
  emailRecover.setAttribute('placeholder', 'Correo electrónico');

  const btnSendEmail = document.createElement('button');
  btnSendEmail.setAttribute('id', 'btnSendEmail');
  btnSendEmail.textContent = 'Enviar correo';

  // evento del boton enviar correo
  btnSendEmail.addEventListener('click', () => {
    const email = emailRecover.value;
    sendPasswordResetEmail(auth, email)
      .then(() => {
        console.log('Correo electrónico encontrado');
      })
      .catch(() => {
        console.log('Correo electrónico no encontrado');
      });
  });

  // Mostrar los elementos creados
  section.append(logo, title, emailRecover, btnSendEmail);
  return section;
}

export default recover;
