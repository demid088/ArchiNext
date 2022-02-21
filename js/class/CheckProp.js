export default class CheckProp {
  static _checkProp(prop) {
    const noStandartAttr = [
      'tag',
      'children',
      'option',
      'css',
      'text',
    ]

    for (const attr of noStandartAttr) {
      if (attr == prop) { 
        return true;
      }
    }
    return false;
  }
}