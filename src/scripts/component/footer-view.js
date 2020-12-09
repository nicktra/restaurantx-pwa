class FooterView extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <footer>
            <p>RestaurantX &#169; 2020 - Konik Saputra</p>
        </footer>
        `;
  }
}

customElements.define('footer-view', FooterView);
