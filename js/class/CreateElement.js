import Div from "./Div.js";
import H from "./H.js";
import Img from "./Img.js";
import Nav from "./Nav.js";
import A from "./A.js";
import Span from "./Span.js";
import Css from "./Css.js";

export default class CreateElement {
  listClasses = {
    div: this._createDiv,
    img: this._createImg,
    nav: this._createNav,
    a: this._createA,
    span: this._createSpan,
    h1: this._createH,
    h2: this._createH,
    h3: this._createH,
    h4: this._createH,
    h5: this._createH,
    h6: this._createH,
  };

  constructor(elem) {
    return this._create(elem);
  }
  
  _create(elem) {
    if ('tag' in elem) {
      if (elem.tag in this.listClasses) {
        let result = this.listClasses[elem['tag']].call(this, elem);

        // если есть дополнительные стили
        if ('css' in elem && typeof elem.css == 'object') {
          result.style.cssText = new Css(elem.css).cssText;
        }

        return result;
      }
      throw new Error(`Тэга элемента нет в списке классов: ${elem.tag}`);
    }
    throw new Error(`Тэг элемента не найден: ${elem}`);
  }
// ================================================== Create Elements ====================================
  _createDiv(elem) {
    let div = new Div(elem);

    if (this._checkChildren(elem)) {
      this._addChildrens(elem['children'], div);
    }

    return div;
  }

  _createH(elem) {
    let h = new H(elem);

    if (this._checkChildren(elem)) {
      this._addChildrens(elem['children'], h);
    }

    return h;
  }

  _createA(elem) {
    let a = new A(elem);

    if (this._checkChildren(elem)) {
      this._addChildrens(elem['children'], a);
    }

    return a;
  }

  _createImg(elem) {
    let img = new Img(elem);

    if (this._checkChildren(elem)) {
      this._addChildrens(elem['children'], img);
    }

    return img;
  }

  _createSpan(elem) {
    let span = new Span(elem);

    if (this._checkChildren(elem)) {
      this._addChildrens(elem['children'], span);
    }

    return span;
  }

  _createNav(elem) {
    let nav = new Nav(elem);

    if (this._checkChildren(elem)) {
      this._addChildrens(elem.children, nav);
    }

    return nav;
  }
// ================================================================== Children ==============================
  _checkChildren(elem) {
    if ('children' in elem && Array.isArray(elem.children)) {
      return true;
    }
    return false;
  }

  _addChildrens(arrChild, elem) {
    arrChild.forEach(child => {
      elem.append(this._create(child));
    });
  }
}