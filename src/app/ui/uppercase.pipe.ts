import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'uppercase',
  standalone: true
})
export class UppercasePipe implements PipeTransform {

  // my first pipe function, just to test
  transform(value: string | number): string | number {
    if (typeof value === 'number') {
      return value
    }
    return value.toUpperCase()
  }

}
