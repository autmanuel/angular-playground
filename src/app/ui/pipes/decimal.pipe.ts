import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'decimal',
  standalone: true
})
export class DecimalPipe implements PipeTransform {

  transform(value: number, decimalPlaces: number = 2): string {
    return value.toFixed(decimalPlaces);
  }

}
