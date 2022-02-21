export default class Css {
  constructor(cssObj) {
    this.cssText = '';

    for (let prop in cssObj) {
      const value = cssObj[prop];
      
      prop = this._getCorrectCssProp(prop);

      this.cssText += prop + ': ' + value + ';'
    }

    return this.cssText;
  }

  // проверяет есть ли символ в верхнем регистре
  // возвращает правильное свойство с дефисом
  _getCorrectCssProp(prop) {
    let result = '';

    for (const symbol of prop) {
      if(symbol.toUpperCase() == symbol) {
        const index = prop.indexOf(symbol);
        result += '-' + symbol.toLowerCase();
        continue;
      }

      result += symbol;
    }

    return result;
  }
}