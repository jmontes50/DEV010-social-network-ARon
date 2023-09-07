import { getAuth, updatePassword } from 'firebase/auth';
import firebaseApp from './firebase';

const auth = getAuth(firebaseApp);

function resetPassword() {
  const section = document.createElement('section');
  const title = document.createElement('h2');
  title.textContent = 'Reiniciar contraseña';

  const newPass = document.createElement('input');
  newPass.setAttribute('id', 'newPassword');
  newPass.setAttribute('type', 'password');
  newPass.setAttribute('placeholder', 'Escribe tu nueva contraseña');

  const confirmPass = document.createElement('input');
  confirmPass.setAttribute('id', 'confirmPassword');
  confirmPass.setAttribute('type', 'password');
  confirmPass.setAttribute('placeholder', 'Escribe de nuevo tu contraseña');

  const btnShowPass = document.createElement('button');
  btnShowPass.setAttribute('id', 'btnShowPass');


  const btnNewPass = document.createElement('button');
  btnNewPass.setAttribute('id', 'btnNewPassword');
  btnNewPass.textContent = 'Reiniciar contraseña';

  btnNewPass.addEventListener('click', async () => {
    if (newPass.value !== confirmPass.value) {
      console.log('Contraseñas no coinciden');
      newPass.value = '';
      confirmPass.value = '';
      return;
    }
    try {
      await updatePassword(auth.currentUser, newPass.value);
      console.log('Contraseña actualizada');
    } catch (error) {
      console.log(error);
    }
  });

  section.append(title, newPass, confirmPass, btnNewPass);
  return section;
}

export default resetPassword;
