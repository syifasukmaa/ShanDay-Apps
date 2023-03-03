import FavoriteRestaurantIdb from '../../data/favorite-resto-idb';
import { CreateRestaurantItemTamplate } from '../templates/template-creator';

const Favorite = {
  async render() {
    return `
    <section class="content">
      <div class="list-resto">
        <span class="loader"></span>
        <h1 class="list-resto-label">Favorite Restaurant</h1>
        <div class="menu" id="main-menu"></div>
      </div>
    </section>
      `;
  },

  async afterRender() {
    const mainMenu = document.querySelector('#main-menu');
    const loader = document.querySelector('.loader');
    try {
      const detailRestaurant = await FavoriteRestaurantIdb.getAllRestaurant();

      if (detailRestaurant.length === 0) {
        mainMenu.innerHTML =`Empty favorite Resto. Put one, by clicking heart button in the detail page.`
      }

      detailRestaurant.forEach((resto) => {
        mainMenu.innerHTML += CreateRestaurantItemTamplate(resto);
      });
      loader.style.display = 'none';
    } catch (err) {
      mainMenu.innerHTML = `Error: ${err}`;
      loader.style.display = 'none';
    }
  },
};

export default Favorite;
