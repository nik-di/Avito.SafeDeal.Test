export default class ImagesList {
  constructor (selectorContainer) {
      this.container = selectorContainer;
  }

  renderImages (callback) {
      const { card } = callback;

      this.container.insertAdjacentHTML('beforeend', card);
  }
}
