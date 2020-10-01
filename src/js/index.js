'use strict';
/**
 * Styles import for webpack
 */
import '../styles/index.css';

/**
 * Imported modules
 */
import CommentApi from './components/CommentApi';
import ImgTemplate from './components/ImgTemplate';
import ImagesList from './components/ImagesList';
import CommentsList from './components/CommentsList';
import CommentTemplate from './components/CommentTemplate';
import { formatDate } from './utils/formatDate';
import { callClass } from './utils/callClass';
import { BASE_URL as baseUrl } from './constants/BASE_URL';

const commentsAndImgApi = new CommentApi(baseUrl, { get: 'GET', post: 'POST' });
const imagesContainer = new ImagesList(document.querySelector('.grid-template'));
const commentsContainer = new CommentsList(document.querySelector('.comments-modal__comments-list'));
const modalSection = document.querySelector('.modal-section');
const modalWindow = document.querySelector('.comments-modal');
const modalImage = modalWindow.querySelector('.comments-modal__img');
const modalComments = modalWindow.querySelector('.comments-modal__comments-list');
const commentForm = document.querySelector('.comment-form');
const errorElemForm = commentForm.querySelector('.error');


commentsAndImgApi.getImageList()
  .then(res => {
    res.forEach(el => {
      imagesContainer.renderImages(callClass(ImgTemplate, el));
    });

  })
  .catch(err => imagesContainer.container.insertAdjacentHTML('beforeend', `<h2>Ошибка: ${err.status} - ${err.statusText}</h2>`));


/**
 * Event listener handlers
 */

const imagesContainerHandler = (e) => {

  if (e.target.classList.contains('grid-template__photo')) {

    commentsContainer.clearContainer();
    commentsAndImgApi.getImageAndComments(e.target.id)
      .then(data => {
        data.comments.forEach(el => {
          const dateToFormat = el.date;
          el.date = formatDate(dateToFormat);
        });
        return data;
      })
      .catch(err => {
        console.log(err);
        return err;
      })
      .then(res => {

        modalSection.classList.add('modal-section_is-visible');
        modalImage.src = res.url;
        modalImage.id = res.id;

        if (res.comments.length == 0) {
          modalComments.insertAdjacentHTML('beforeend', '<div>Нет комментариев</div>');
        }

        res.comments.forEach(el => {
          commentsContainer.renderComments(callClass(CommentTemplate, el));
        });

      })
      .catch(err => {
        console.log(err);
      });
  }

  if (e.target.classList.contains('comments-modal__close-btn') ||
    e.target == modalSection) {

    modalSection.classList.remove('modal-section_is-visible');
    modalImage.src = '';
    modalImage.id = '';
    errorElemForm.textContent = '';
    commentForm.elements.submit.removeAttribute('disabled');
    commentForm.reset();

  }

};

const commentFormHandler = (e) => {
  e.preventDefault();

  if (commentForm.checkValidity()) {

    commentsAndImgApi.postComment(modalImage.id, commentForm)
    .then(res => {
      console.log(res);
    })
    .catch(err => {
      console.log('Error :' + err);
    })
    commentForm.reset();
    modalSection.classList.remove('modal-section_is-visible');

  } else {
    errorElemForm.classList.add('error_active');
    errorElemForm.textContent = 'Необходимо заполнить все поля формы';
  }

};

/**
 * Added event listeners
 */

document.addEventListener('click', imagesContainerHandler);
commentForm.addEventListener('submit', commentFormHandler)
/** */

{
  
  
}
