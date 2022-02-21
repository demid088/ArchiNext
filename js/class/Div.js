import CheckProp from "./CheckProp.js";

export default class Div {
  constructor(elem) {
    let div = document.createElement('div');
    
    for (const attr in elem) {
      if (CheckProp._checkProp(attr)) {
        continue;
      }
      
      const value = elem[attr];
      
      div.setAttribute(attr, value);
    }

    return div;
  }
}