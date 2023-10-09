import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ObjectTransForm {

  constructor() { }

  static objectToParam(object: Object): string {
    type _Key = keyof typeof object;
    let paramString = Object.keys(object).map((key: string) => {
      if (object[key as _Key].toString().length > 0)
        return (key + '=' + object[key as _Key])
      else return;
    }).filter(function (el) { return el != null;+6 }).join('&');
    if (paramString.length > 0)
      return '?' + paramString;
    else
      return '';
  }
}
