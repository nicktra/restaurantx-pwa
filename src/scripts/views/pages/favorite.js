import FavRestoIdb from '../../data/favoriteresto-idb';
import { restoItemTemplate } from '../templates/template-creator';
import Preloader from '../../component/loader';

const Favorite = {
  async render() {
    return `
      <div class="content">
        <h2 class="content__heading">Favorite Restaurant</h2>
        <div id="restos" class="restos">
        </div>
      </div>
    `;
  },

  async afterRender() {
    Preloader.addPreloader();

    const contentContainer = document.querySelector('.content');
    const restos = await FavRestoIdb.getAllRestos();
    const restosContainer = document.querySelector('#restos');

    Preloader.removePreloader();

    if (restos.length > 0) {
      restos.forEach((resto) => {
        restosContainer.innerHTML += restoItemTemplate(resto);
      });
    } else {
      contentContainer.innerHTML = '<h2 class="content__heading">You dont have restaurant saved.</h2><img alt="error" class="people" src="./images/misc/people.png">';
    }
  },
};

export default Favorite;
