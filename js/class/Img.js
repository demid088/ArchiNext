import CheckProp from "./CheckProp.js";

export default class Img {
  constructor(elem) {
    let result = document.createElement(elem.tag);
    
    for (const attr in elem) {
      if (CheckProp._checkProp(attr)) {
        continue;
      }
      
      const value = elem[attr];
      
      result.setAttribute(attr, value);
    }

    return result;
  }
}