class NavBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <nav>
      <div class="nav-head">
          <p><b>RestaurantX</b></p>
      </div>
      <ul class="nav">
          <li><a href="#/home">Home</a></li>
          <li><a href="#/favorite">Favorite</a></li>
          <li><a target="_blank" rel="noopener" href="https://github.com/nicktra">About Us</a></li>
      </ul>
        <button aria-label="nav button" id="menu" class="burger">
          <i class="fa fa-bars"></i>
        </button>
      </nav>`;

    this.querySelectorAll('li').forEach((nav) => {
      nav.addEventListener('click', () => {
        document.querySelector('#content-main').scrollIntoView();
      });
    });
  }
}

customElements.define('nav-bar', NavBar);
