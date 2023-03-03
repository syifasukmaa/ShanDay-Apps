import 'regenerator-runtime';
import RestaurantSource from '../data/restaurant-source';

const responseReview = (url, name, review) => {
  const dataPost = {
    id: url,
    name,
    review,
  };

  RestaurantSource.postReviewRestaurant(dataPost);

  const reviewContainer = document.querySelector('.detail-review');
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const date = new Date().toLocaleDateString('id-Id', options);
  const newReview = `
    <div class="detail-review-item">
        <div class="review-header">
            <p class="review-name"><i class="bi bi-person-circle"></i>${name}</p>
            <p class="review-date">${date}</p>
        </div>
        <div class="review-body">
            ${review}
        </div>
    </div>
    `;
  reviewContainer.innerHTML += newReview;
};

export default responseReview;
