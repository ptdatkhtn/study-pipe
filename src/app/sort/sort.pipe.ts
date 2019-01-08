import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value: string, start: number, end: number): any {
    return `${value.substring(start, end)} ...`;
  }
}
