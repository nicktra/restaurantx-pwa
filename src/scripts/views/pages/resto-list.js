import DataSource from '../../data/data-source';
import { restoItemTemplate, errorInfoTemplate } from '../templates/template-creator';
import Preloader from '../../component/loader';

const RestoList = {
  async render() {
    return `
    <div class="content">
      <h2 class="content__heading">Discover the best places to eat</h2>
      <div id="restos" class="restos">

      </div>
    </div>
      `;
  },

  async afterRender() {
    Preloader.addPreloader();

    const contentContainer = document.querySelector('.content');
    const restosContainer = document.querySelector('#restos');
    const restos = await DataSource.listResto();

    Preloader.removePreloader();

    if (!restos.restaurants) {
      contentContainer.innerHTML = errorInfoTemplate(restos);
      return;
    }

    restos.restaurants.sort((a, b) => b.rating - a.rating);
    restos.restaurants.forEach((resto) => {
      restosContainer.innerHTML += restoItemTemplate(resto);
    });
  },
};

export default RestoList;
