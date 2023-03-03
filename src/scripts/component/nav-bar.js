class NavBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <div class="logo">Shan<span>Day</span></div>
        <button class="toggle-button" aria-label="navigation-menu>
            <span class="bar"></span>
            <span class="bar"></span>
            <span class="bar"></span>
            <span class="bar"></span>
        </button>
        <div class="navbar-links">
            <ul>
                <li><a href="#/">Home</a></li>
                <li><a href="#/favorite">Favorite</a></li>
                <li><a href="https://www.instagram.com/syifasukmaa/">About Us</a></li>
            </ul>
        </div>
        `;
  }
}

customElements.define('nav-bar', NavBar);
