export default class ImgTemplate {
  constructor ({id, url}) {
      this.card = this.createCard(id, url);
  }

  createCard (id, url) {
     return `
          <picture class="grid-template__photo">
              <source srcset="" type="image/svg+xml">
              <img id="${id}" class="grid-template__photo" src="${url}" alt="Фотография">
          </picture>`;
  }

}
