const Preloader = {
  init(loader) {
    this._loader = loader;
  },

  addPreloader() {
    this._loader.innerHTML = this._loadAnim();
    document.querySelector('.content').style.display = 'none';
  },

  removePreloader() {
    this._loader.innerHTML = '';
    document.querySelector('.content').style.display = 'block';
  },

  _loadAnim() {
    return `
      <div class="loader">
      <img src="./loader/loader.gif" alt="Wait Loader">
      <div>
      `;
  },
};

export default Preloader;
