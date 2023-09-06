import home from './components/home.js';
import newUser from './components/NewUserForm.js';
// eslint-disable-next-line import/no-named-as-default
import preferences from './components/preferences.js';

const root = document.getElementById('root');

const routes = [
  { path: '/', component: home },
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
    root.appendChild(route.component());
  }
}
navigateTo('/newUser');
// root.append(preferences());
