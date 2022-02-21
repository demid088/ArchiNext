export default class Header {
  constructor(elem, container = true) {
    this.elem = elem;
    this.name = this.elem.name;
    this.options = this.elem.options;
    this.container = container;

    // return console.log(this._getHTML());
    return this._getHTML();
  }

  _getHTML() {
    let html = document.createElement('div');
    html.classList.add(this.name);

    let divContent = document.createElement('div');
    divContent.classList.add(this.name + '__content', 'flex', 'flex-jc-spaceBetween');

    let divLogo = this._getLOGO();
    let divMenu = this._getMENU();
    
    divContent.append(divLogo, divMenu);

    if (this.container) {
      let divContainer = document.createElement('div');
      divContainer.classList.add('container');
      
      divContainer.append(divContent);
      html.append(divContainer);

      return html;
    }
    
    html.append(divContent);

    return html;
  }

  _getLOGO() {
    if (this.options.logo === undefined) {
      throw new Error(`${this.constructor.name} - В header должно содержаться поле "options.logo"!`);
    }

    let logoAlt = this.options.logoAlt ?? 'logo';
    let logoWidth = this.options.logoWidth;

    let imgPath = './img';
    imgPath += '/' + this.name + '/' + this.options.logo;
    
    let logo = document.createElement('div');
    logo.classList.add(this.name + '__logo');
    
    let img = document.createElement('img');
    img.classList.add(this.name + '__logo' + '_img');
    img.setAttribute('src', imgPath);
    img.setAttribute('alt', logoAlt);
    if (logoWidth) {img.style.width = logoWidth}

    logo.append(img);

    return logo;
  }

  _getMENU() {
    const menu = this.options.menu;

    if (menu === undefined) {
      throw new Error(`${this.constructor.name} - В header должно содержаться поле "options.menu"!`);
    }
    if (!Array.isArray(menu)) {
      throw new Error(`${this.constructor.name} - "options.menu", должен быть массивом"!`);
    }

    let nav = document.createElement('nav');
    nav.classList.add('nav');
    nav.classList.add(this.name + '__menu');

    menu.forEach(link => {
      link = String(link);

      let a = document.createElement('a');
      a.classList.add('nav__link', 'margin-left');
      a.setAttribute('href', `#${link.toLowerCase()}`);
      a.textContent = link.toUpperCase();

      nav.append(a);
    });

    return nav;
  }
}