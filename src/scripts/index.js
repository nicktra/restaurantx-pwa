import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../styles/responsive.css';

import './component/skip-content';
import './component/hero-view';
import './component/footer-view';
import './component/nav-bar';

import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

import App from './views/app';
import swRegister from './utils/sw-register';

const app = new App({
  button: document.querySelector('#menu'),
  drawer: document.querySelector('.nav'),
  hero: document.querySelector('.hero'),
  content: document.querySelector('#content-main'),
  loader: document.querySelector('#preload'),
});

window.addEventListener('hashchange', () => {
  document.querySelector('.content__heading').scrollIntoView();
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});

console.log('Hi Reviewer :)');
