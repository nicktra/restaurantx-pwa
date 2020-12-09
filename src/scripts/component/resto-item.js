class RestoItem extends HTMLElement {
  set resto(resto) {
    this._resto = resto;
    this.render();
  }

  render() {
    this.setAttribute('class', 'post-item');
    this.innerHTML = `
            <img src="${this._resto.pictureId}" class="post-item__thumbnail" alt="${this._resto.name}">
            <div class="post-item__content">
                <h1 class="post-item__title">${this._resto.name}</h1>
                <p class="post-item__sub">Rating: ${this._resto.rating}</p>
                <p class="post-item__sub">Location: ${this._resto.city}</p>
                <p class="post-item__description">${this._resto.description.substring(0, 200)} ...</p>
            </div>`;
  }
}

customElements.define('resto-item', RestoItem);
