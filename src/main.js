// importaciones de otras ventanas.

import home from './components/home.js';
import login from './components/login.js';
import error from './components/error.js';
import newUser from './components/NewUserForm.js';
import preferences from './components/preferences.js';

// Nodo del DOM que recibirá las páginas nuevas.
const root = document.getElementById('root');

// Rutas y navegación
const routes = [
  { path: '/', component: home },
  { path: '/login', component: login },
  { path: '/error', component: error },
  { path: '/newUser', component: newUser },
  { path: '/preferences', component: preferences },
];

const defaultRoute = '/';

function navigateTo(hash) {
  const route = routes.find((routeFind) => routeFind.path === hash);

  if (route && route.component) {
    window.history.pushState(
      {},
      route.path,
      window.location.origin + route.path,
    );
    if (root.firstChild) {
      root.removeChild(root.firstChild);
    }
    root.appendChild(route.component(navigateTo));
  } else {
    navigateTo('/error');
  }
}
window.onpopstate = () => {
  navigateTo(window.location.pathname);
};

navigateTo(window.location.pathname || defaultRoute);

// --- Captura de Formularios ----
// Formulario de registro
