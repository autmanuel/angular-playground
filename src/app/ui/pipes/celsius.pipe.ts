import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'celsius',
  standalone: true
})
export class CelsiusPipe implements PipeTransform {

  transform(value: string): string {
    return value + ' °C';
  }

}
