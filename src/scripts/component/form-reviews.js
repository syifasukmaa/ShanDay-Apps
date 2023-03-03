class FormReview extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <form id="comment-form">
        <h1>Give Your Review</h1>
        <div class="label-name">
        <label for="inputName" class="form-label">Name</label>
        <input name="inputName" type="text" class="form-control" id="inputName">
        </div>
        <div class="label-name">
        <label for="inputReview" class="form-label">Review</label>
        <input name="inputReview" type="text" class="form-control" id="inputReview">
        </div>
        <div class="label-name">
        <button id="submit-review" type="submit" class="button-submit">Submit</button>
        </div>
    </form>
            `;
  }
}

customElements.define('form-review', FormReview);
