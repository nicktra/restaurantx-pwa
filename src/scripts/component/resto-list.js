import './resto-item';

class RestoList extends HTMLElement {
  set restos(restos) {
    restos.restaurants.sort((a, b) => b.rating - a.rating);
    this._restos = restos;
    this.render();
  }

  renderError(message) {
    this.innerHTML = '';
    this.setAttribute('class', 'text-center mt-5');
    this.innerHTML += `<h2>${message}</h2>`;
  }

  render() {
    this.innerHTML = '';
    this.setAttribute('class', 'posts');
    this._restos.restaurants.forEach((resto) => {
      const restoItemElement = document.createElement('resto-item');
      restoItemElement.resto = resto;
      this.appendChild(restoItemElement);
    });
  }
}

customElements.define('resto-list', RestoList);
