import RestaurantSource from '../../data/restaurant-source';
import { CreateRestaurantItemTamplate } from '../templates/template-creator';

const Home = {
  async render() {
    return `
    <hero-resto id="hero"></hero-resto>
      <section class="content">
        <div class="list-resto">
          <span class="loader"></span>
          <h1 class="list-resto-label">List Restaurant</h1>
          <div class="menu" id="main-menu"></div>
        </div>
      </section>
      `;
  },

  async afterRender() {
    const loader = document.querySelector('.loader');
    const mainMenu = document.querySelector('#main-menu');
    try {
      const MenuItem = await RestaurantSource.listRestaurant();
      MenuItem.forEach((restaurant) => {
        mainMenu.innerHTML += CreateRestaurantItemTamplate(restaurant);
      });
      loader.style.display = 'none';
    } catch (err) {
      mainMenu.innerHTML = `Error: ${err}`;
      loader.style.display = 'none';
    }
  },
};

export default Home;
