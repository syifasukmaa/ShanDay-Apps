import FavoriteRestaurantIdb from '../../src/scripts/data/favorite-resto-idb';
import LikeButtonPresenter from '../../src/scripts/utils/like-button-presenter';
 
const createLikeButtonPresenterWithRestaurant = async (resto) => {
  await LikeButtonPresenter.init({
    likeButtonContainer: document.querySelector('#likeButtonContainer'),
    favoriteRestaurants: FavoriteRestaurantIdb,
    resto,
  });
};
 
export { createLikeButtonPresenterWithRestaurant };