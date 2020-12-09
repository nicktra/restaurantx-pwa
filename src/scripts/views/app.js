import DrawerInitiator from '../utils/drawer-initiator';
import UrlParser from '../routes/url-parser';
import routes from '../routes/routes';
import Preloader from '../component/loader';

class App {
  constructor({
    button, drawer, hero, content, loader,
  }) {
    this._button = button;
    this._drawer = drawer;
    this._hero = hero;
    this._content = content;
    this._loader = loader;
    this._initialAppShell();
    this._initialPreloader();
  }

  _initialAppShell() {
    DrawerInitiator.init({
      button: this._button,
      drawer: this._drawer,
      hero: this._hero,
      content: this._content,
    });
  }

  _initialPreloader() {
    Preloader.init(this._loader);
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];
    this._content.innerHTML = await page.render();
    await page.afterRender();
  }
}

export default App;
