import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'uppercase',
  standalone: true
})
export class UppercasePipe implements PipeTransform {

  transform(value: string | number): string | number {

    if(typeof value === 'number')
      return value;

    if(value.toLowerCase().includes('rhona'))
      return value.toUpperCase();

    return value;
  }


}
