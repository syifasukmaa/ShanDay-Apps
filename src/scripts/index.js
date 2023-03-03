import 'regenerator-runtime';
import '../styles/style.scss';
import './component/nav-bar';
import './component/hero-resto';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit'
import App from './views/app';
import swRegister from './utils/sw-register';

const app = new App({
  button: document.querySelector('.toggle-button'),
  drawer: document.querySelector('.navbar-links'),
  content: document.querySelector('#maincontent'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});

const skipToContent = document.querySelector('.skip-link');
skipToContent.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    document.querySelector('#maincontent').focus();
  }
});
