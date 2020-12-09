import CONFIG from '../../globals/config';

const restoDetailTemplate = (resto) => `
  <h2 class="resto__title">${resto.name}</h2>
  <img class="resto__poster" src="${CONFIG.BASE_URL}${CONFIG.IMAGE_MED}/${resto.pictureId}"
  srcset="${CONFIG.BASE_URL}${CONFIG.IMAGE_SML}/${resto.pictureId} 400w, ${CONFIG.BASE_URL}${CONFIG.IMAGE_MED}/${resto.pictureId} 800w" sizes="(max-width: 600px) 400px, 800px" alt="${resto.name}" />
  <div class="resto__info">
    <h3>Name</h3>
    <p><i class="fas fa-store"></i> ${resto.name}</p>
    <h3>Rating</h3>
    <p><i class="fas fa-star"></i> ${resto.rating}</p>
    <h3>City</h3>
    <p><i class="fas fa-globe-asia"></i> ${resto.city}</p>
    <h3>Address</h3>
    <p><i class="fas fa-map-marked-alt"></i> ${resto.address}</p>
    <h3>Categories</h3>
    <p><i class="fas fa-clipboard-list"></i> ${resto.categories
    .map((category) => `<span class="category">${category.name}</span>`)
    .join('')}</p>
  </div>
  <div class="resto__overview">
    <h3>Description</h3>
    <p>${resto.description}</p>
  </div>
  <h3>Menu</h3>
    <div class="detail-menu grid-2">
      <div class="detail-food">
        <h4><i class="fas fa-utensils"></i> Food</h4>
        <ul>
          ${resto.menus.foods
    .map((food) => `<li><i class="fas fa-caret-right" style="float: left;"></i> ${food.name}</li>`)
    .join('')}
        </ul>
      </div>
      <div class="detail-drink">
        <h4><i class="fas fa-wine-glass"></i> Drink</h4>
        <ul>
          ${resto.menus.drinks
    .map((drink) => `<li><i class="fas fa-caret-right" style="float: left;"></i> ${drink.name}</li>`)
    .join('')}
        </ul>
      </div>
    </div>
`;

const restoItemTemplate = (list) => `
  <div class="resto-item">
    <div class="resto-item__header">
        <img class="resto-item__header__poster lazyload" alt="${list.name}"
            src="/images/misc/placeholder.png" data-src="${CONFIG.BASE_URL}${CONFIG.IMAGE_SML}/${list.pictureId}">
        <div class="resto-item__header__rating">
            <p>⭐️<span class="resto-item__header__rating__score">${list.rating}</span></p>
        </div>
        <div class="resto-item__header__city">
            <p><i class="fas fa-map-marker-alt" style="color: red;"></i><span class="resto-item__header__city__name">${list.city}</span></p>
        </div>
    </div>
    <div class="resto-item__content">
        <h3 class="resto-item__title"><a href="${`/#/detail/${list.id}`}">${list.name}</a></h3>
        <p>${list.description.substring(0, 200)}...</p>
    </div>
  </div>
  `;

const userReviewTemplate = (review) => `
  <div class="detail-review-item">
    <div class="review-header">
      <p class="review-name"><i title="restaurant" class="fa fa-user-circle" style="font-size:1.3em;"></i>&nbsp;${review.name}</p>
      <p class="review-date">${review.date}</p>
    </div>
    <div class="review-body">
      ${review.review}
    </div>
  </div>
`;

const errorInfoTemplate = (error) => `
  <h2 class="error"> Sorry, the page you requested cannot be found.<br><br> Error: ${error}.<br><img alt="error" class="people" src="./images/misc/people.png"></h2>
`;

const createLikeRestoButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
     <i class="fas fa-save" aria-hidden="true"></i>
  </button>
`;

const createUnlikeRestoButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fas fa-trash-alt" aria-hidden="true"></i>
  </button>
`;

export {
  restoItemTemplate,
  restoDetailTemplate,
  userReviewTemplate,
  errorInfoTemplate,
  createLikeRestoButtonTemplate,
  createUnlikeRestoButtonTemplate,
};
