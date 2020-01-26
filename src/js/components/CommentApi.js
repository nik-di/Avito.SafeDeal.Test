export default class CommentApi {
  constructor (baseUrl, ...methods) {
      this.url = baseUrl;
      this.methods = methods[0];
  }

  _getPromiseRes (res) {
      if (res.ok) { return res.json(); }
      return Promise.reject(res.status, res.text);
  }

  getImageList () {
      return fetch(`${this.url}`)
      .then(this._getPromiseRes)
      .catch(err => {return err})
  }

  getImageAndComments (imageId) {
      return fetch(`${this.url}/${imageId}`)
      .then(this._getPromiseRes)
      .catch(err => {return err})
  }

  postComment (imageId, {name, comment}) {
      return fetch(`${this.url}/${imageId}/comments`, {
          method: this.methods.post,
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
              name: name.value,
              comment: comment.value,
          })
      })
      .catch(err => {return err})
  }
}
