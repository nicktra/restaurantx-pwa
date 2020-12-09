class HeroView extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <header>
        <div class="hero">
          <div class="hero__inner">
            <h1 class="hero__title">RestaurantX</h1>
            <p class="hero__tagline">The largest restaurant catalog web</p>
          </div>
        </div>
      </header>`;
  }
}

customElements.define('hero-view', HeroView);
