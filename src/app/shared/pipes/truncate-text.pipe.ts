import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'textTruncate'
})
export class TextTruncatePipe implements PipeTransform {

  transform(value: any, max: number): any {
      return value.length > max ? value.slice(0, max) + '...' : value;
  }
}
