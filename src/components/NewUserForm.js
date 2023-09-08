function newUser() {
  const newUserForm = document.createElement('section');

  newUserForm.innerHTML = `<img src=""></img>
   <h2 id="title">Nuevos usuarios</h2>
    <form>
        <ul id="register">
        <li><input id="name" placeholder="Nombre" required></li>
        <li><input id="email" placeholder="E-mail" required></li>
        <li><input id="password" placeholder="Contraseña" required></li>
        <li><input id="repeatPass" placeholder="Repetir contraseña" required></li>
        <li><button id="registerSummit">Registrar</button></li>
        </ul>
    </form>`;

  return newUserForm;
}

export default newUser;
