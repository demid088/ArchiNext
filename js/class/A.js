import CheckProp from "./CheckProp.js";

export default class A {
  constructor(elem) {
    let fragment = new DocumentFragment();

    if ('option' in elem) {
      const option = elem.option;
      
      if ('list' in option && Array.isArray(option.list)) {
        for (const link of option.list) {
          let a = this._createElem(elem);
          a.href = '#' + link.toLowerCase();
          a.textContent = link.toUpperCase();

          fragment.append(a);
        }
      }
    } else {
      let a = this._createElem(elem);
      fragment.append(a);
    }

    return fragment;
  }
  
  // добавляем стндартные аттрибуты
  _createElem(elem) {
    let a = document.createElement('a');
    
    for (const attr in elem) {
      if (CheckProp._checkProp(attr)) {
        continue;
      }
      const value = elem[attr];
      a.setAttribute(attr, value);
    }

    return a;
  }
}