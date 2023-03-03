class HeroHeader extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class="hero-inner">
      <h1 class="hero-title">Shan<span>Day</span></h1>
      <p class="hero-tagline">Nikmati Santapan, Sejuta Kesan</p>
      <button>Lihat Lebih Banyak</button>
    </div>
          `;
  }
}

customElements.define('hero-resto', HeroHeader);
