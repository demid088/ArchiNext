import CreateElement from './CreateElement.js';

export default class Body {
  constructor(selector = 'body') {
    this.body = document.querySelector(selector);
  }

  render(model) {
    let fragment = new DocumentFragment();

    model.forEach(elem => {
      fragment.append(new CreateElement(elem));
    });

    this.body.prepend(fragment);
  }
}