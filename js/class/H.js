import CheckProp from "./CheckProp.js";

export default class H {
  constructor(elem) {
    let result = document.createElement('h' + elem.tag[1]);
    
    for (const attr in elem) {
      if (CheckProp._checkProp(attr)) {
        continue;
      }
      
      const value = elem[attr];
      
      result.setAttribute(attr, value);
    }

    result.textContent = elem.text;

    return result;
  }
}