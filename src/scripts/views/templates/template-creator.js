import CONFIG from '../../globals/config';

const CreateRestaurantItemTamplate = (restaurant) => {
  const {
    id, name, rating, description, city, pictureId,
  } = restaurant;
  const sliceDescription = description.substring(0, 250);

  return `
    <article class="menu-item">
        <img class="menu-item-thumbnail lazyload" data-src="${CONFIG.BASE_IMAGE_URL_MD}${pictureId}" alt="${name}" crossorigin="anonymous" />
        <p tabindex="0" class="menu-item-city">Kota ${city}</p>

        <div class="menu-content">
            <span class="menu-item-rating">
              <i class="bi bi-star-fill"></i>
              <h1>${rating}</h1>
            </span>
            <h1 class="menu-content-name">
              <a href="#/detail/${id}">${name}</a>
            </h1>
            <p class="menu-content-description">${sliceDescription}</p>
        </div>
    </article>
    `;
};

const CreateRestaurantDetailTamplate = (detail) => `
  <div class="detail">
    <div class="detail-top">
      <div class="cover-img">
        <img class="img-detail" src="${CONFIG.BASE_IMAGE_URL_MD}${detail.pictureId}" alt="${detail.name}" crossorigin="anonymous" >
      </div>
      <ul class="detail-info">
        <li><h2>${detail.name}</h2></li>
        <li><span class="rating"><i class="bi bi-star-fill"></i>${detail.rating}</span></li>
        <li>
        <p>Adress</p>
        ${detail.address}, ${detail.city}
        </li>
        <li>
        <p>Description</p>
        ${detail.description}
        </li>
        <li>
        <p>Category</p>
        ${detail.categories
    .map(
      (category) => `
              <span class="category">${category.name}</span>
            `,
    )
    .join('')}
        </li>
      </ul>
    </div>
    <h1>Menu</h1>
    <div class="detail-menu">
      <div class="detail-food">
        <h4>Food</h4>
        <ul>
          ${detail.menus.foods
    .map(
      (food) => `
                <li>${food.name}</li>
              `,
    )
    .join('')}
        </ul>
      </div>

      <div class="detail-drink">
        <h4>Drink</h4>
        <ul>
          ${detail.menus.drinks
    .map(
      (drink) => `
                <li>${drink.name}</li>
              `,
    )
    .join('')}
        </ul>
      </div>
    </div>
    <h1 class="title-review">Reviews</h1>
    <div class="detail-review">
    ${detail.customerReviews
    .map(
      (review) => `
          <div class="detail-review-item">
            <div class="review-header">
              <p class="review-name"><i class="bi bi-person-circle"></i>${review.name}</p>
              <p class="review-date">${review.date}</p>
            </div>
            <div class="review-body">
              ${review.review}
            </div>
          </div>
        `,
    )
    .join('')}
    </div>
  </div>
`;

const CreateLikeRestaurantButtonTamplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
    <i class="bi bi-heart"></i>
  </button>
`;

const createUnlikeRestaurantButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="bi bi-heart-fill"></i>
  </button>
`;

export {
  CreateRestaurantItemTamplate, CreateRestaurantDetailTamplate, CreateLikeRestaurantButtonTamplate, createUnlikeRestaurantButtonTemplate,
};
