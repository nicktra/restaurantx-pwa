class SkipContent extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <a class="skip-link" href="#content-main">Skip To Content</a>
      `;
  }
}

customElements.define('skip-content', SkipContent);
