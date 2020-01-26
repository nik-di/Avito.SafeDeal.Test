export default class CommentTemplate {
  constructor({id, date, text}) {
    this.comment = this.createComment(id, date, text);
  }

  createComment(id, date, text) {
    return `
      <div id="${id}" class="comment-content">
          <time datetime="" class="comment-content__date">${date}</time>
          <p class="comment-content__text">${text}</p>
      </div>`;
  }

}
