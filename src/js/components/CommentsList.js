export default class CommentsList {
  constructor(selectorContainer) {
    this.container = selectorContainer;
  }

  renderComments(callback) {
    const { comment } = callback;

    this.container.insertAdjacentHTML('beforeend', comment);
  }

  clearContainer() {
    this.container.innerHTML = '';
  }
}
