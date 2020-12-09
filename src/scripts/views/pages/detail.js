import UrlParser from '../../routes/url-parser';
import DataSource from '../../data/data-source';
import {
  restoDetailTemplate, userReviewTemplate, errorInfoTemplate,
} from '../templates/template-creator';
import LikeButtonPresenter from '../../utils/like-button-presenter';
import Preloader from '../../component/loader';
import FavRestoIdb from '../../data/favoriteresto-idb';

const Detail = {
  async render() {
    return `
      <div class="content">
        <h2 class="content__heading">Restaurant Detail</h2>
        <div id="resto" class="resto"></div>

        <div class="detail-review">
          <h3 class="title-review">Reviews</h3>
        </div>

        <div class="form-review">
          <form>
          <h3>Give your review here</h3>
            <div class="mb-3">
              <label for="inputName" class="form-label">Name</label>
              <input name="inputName" type="text" id="inputName">
            </div>
            <div class="mb-3">
              <label for="inputReview" class="form-label">Review</label>
              <textarea maxlength="90" type="text" id="inputReview" name="inputReview"></textarea>
            </div>
            <button id="submit-review" type="submit" class="btn-review">Submit</button>
          </form>
        </div>

      </div>
      <div id="likeButtonContainer"></div>
      `;
  },

  async afterRender() {
    Preloader.addPreloader();

    const contentContainer = document.querySelector('.content');
    const restoContainer = document.querySelector('#resto');
    const userReviewContainer = document.querySelector('.detail-review');
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const resto = await DataSource.detailResto(url.id);

    Preloader.removePreloader();

    if (!resto.restaurant) {
      contentContainer.innerHTML = errorInfoTemplate(resto);
      return;
    }

    restoContainer.innerHTML = restoDetailTemplate(resto.restaurant);

    resto.restaurant.customerReviews.forEach((userReview) => {
      userReviewContainer.innerHTML += userReviewTemplate(userReview);
    });

    this.createUserReview(url.id);

    await LikeButtonPresenter.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      favoriteRestos: FavRestoIdb,
      resto: resto.restaurant,
    });
  },

  createUserReview(restoId) {
    document.querySelector('#submit-review').addEventListener('click', (e) => {
      e.preventDefault();
      const name = document.querySelector('#inputName');
      const textReview = document.querySelector('#inputReview');
      const userReviewContainer = document.querySelector('.detail-review');

      const reviewerName = name.value === '' ? 'Visitor' : name.value;

      if (textReview.value === '') {
        alert('Please input some review text');
        return;
      }

      DataSource.createReview({
        id: restoId,
        name: reviewerName,
        review: textReview.value,
      });

      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      const inputDate = new Date().toLocaleDateString('id-ID', options);

      userReviewContainer.innerHTML += userReviewTemplate({
        name: reviewerName,
        date: inputDate,
        review: textReview.value,
      });

      name.value = '';
      textReview.value = '';
    });
  },
};

export default Detail;
