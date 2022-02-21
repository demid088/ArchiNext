import CheckProp from "./CheckProp.js";

export default class Nav {
  constructor(elem) {
    let nav = document.createElement('nav');
    
    for (const attr in elem) {
      if (CheckProp._checkProp(attr)) {
        continue;
      }
      
      const value = elem[attr];
      
      nav.setAttribute(attr, value);
    }

    return nav;
  }
}