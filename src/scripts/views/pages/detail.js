import 'regenerator-runtime';
import UrlParser from '../../routes/url-parser';
import RestaurantSource from '../../data/restaurant-source';
import { CreateRestaurantDetailTamplate } from '../templates/template-creator';
import responseReview from '../../utils/post-review';
import '../../component/form-reviews';
import LikeButtonPresenter from '../../utils/like-button-presenter';
import FavoriteRestaurantIdb from '../../data/favorite-resto-idb';

const Detail = {
  async render() {
    return `
      <div class="container">
        <div class="main">
          <h1 class="title-container">Detail Restaurant</h1>
          <span class="loader"></span>
          <section id="detail-resto" class="detail-resto"></section>
          <form-review></form-review>
          <div id="likeButtonContainer"></div>
        </div>
      </div>
      `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const urlId = url.id;
    const detailContainer = document.querySelector('#detail-resto');
    const loader = document.querySelector('.loader');

    try {
      const detailResto = await RestaurantSource.detailRestaurant(urlId);
      // console.log(detailResto);
      detailContainer.innerHTML += CreateRestaurantDetailTamplate(detailResto.restaurant);

      LikeButtonPresenter.init({
        likeButtonContainer: document.querySelector('#likeButtonContainer'),
        favoriteRestaurants: FavoriteRestaurantIdb,
        resto: detailResto.restaurant,
      });

      const buttonSubmit = document.querySelector('#submit-review');
      const dataName = document.querySelector('#inputName');
      const dataReview = document.querySelector('#inputReview');

      buttonSubmit.addEventListener('click', (e) => {
        e.preventDefault();
        if (dataName.value === '' || dataReview.value === '') {
          // eslint-disable-next-line no-alert
          alert('Inputan tidak boleh ada yang kosong');
          dataName.value = '';
          dataReview.value = '';
        } else {
          responseReview(urlId, dataName.value, dataReview.value);
          dataName.value = '';
          dataReview.value = '';
        }
      });
      loader.style.display = 'none';
    } catch (err) {
      detailContainer.innerHTML = `Error: ${err}`;
      loader.style.display = 'none';
    }
  },
};

export default Detail;
