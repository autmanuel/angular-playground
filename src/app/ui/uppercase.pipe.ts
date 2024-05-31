import {Pipe, PipeTransform} from '@angular/core';
import {upperCase} from "../utils";

@Pipe({
  name: 'uppercase',
  standalone: true
})
export class UppercasePipe implements PipeTransform {

  // my first pipe function, just to test
  transform(value: string | number): string | number {
    return upperCase(value);
  }

}
