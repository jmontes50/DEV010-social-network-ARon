import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import firebaseApp from './firebase.js';

function login(navigateTo) {
  const section = document.createElement('section');
  const title = document.createElement('h2');
  title.textContent = 'Inicio de sesión';

  // elementos para correo y contraseña
  const emailInput = document.createElement('input');
  emailInput.setAttribute('type', 'email');
  emailInput.setAttribute('placeholder', 'Correo electronico');

  const passwordInput = document.createElement('input');
  passwordInput.setAttribute('type', 'password');
  passwordInput.setAttribute('placeholder', 'Contraseña');

  // Crear enlaces para registrarse y recuperar contraseña
  const signUpLink = document.createElement('a');
  signUpLink.textContent = 'Registrarse';
  signUpLink.setAttribute('href', 'registro'); // hay que poner la url

  const forgotPasswordLink = document.createElement('a');
  forgotPasswordLink.textContent = '¿olvidasete tu contraseña?';
  forgotPasswordLink.setAttribute('href', '/recuperar-contraseña');// poner url

  // crear boton de inicio de sesion
  const loginButton = document.createElement('button');
  loginButton.textContent = 'Iniciar Sesión';

  // evento a boton de login
  loginButton.addEventListener('click', async () => {
    const email = emailInput.value;
    const password = passwordInput.value;

    try {
      const auth = getAuth(firebaseApp);
      await signInWithEmailAndPassword(auth, email, password);
      // poner que la autenticacion fue existosa
      console.log('Inicio de sesion exitoso');
    } catch (error) {
      // poner errores de inicio de sesion
      console.log('Error al iniciar sesion', error);
    }
  });

  // creamos opcion para inicar sesion con google
  const googleSignInOption = document.createElement('p');
  const googleSignInLink = document.createElement('a');
  googleSignInLink.textContent = 'Iniciar Sesión con Google';
  googleSignInLink.setAttribute('href', '/auth/google'); // poner url

  googleSignInOption.appendChild(googleSignInLink);

  // poner todos los elmentos en el section
  section.append(
    title,
    emailInput,
    passwordInput,
    signUpLink,
    forgotPasswordLink,
    loginButton,
    googleSignInOption,
  );
  return section;
}

export default login;
