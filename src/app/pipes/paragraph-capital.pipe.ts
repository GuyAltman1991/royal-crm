import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'paragraphCapital',
})
export class ParagraphCapitalPipe implements PipeTransform {
  transform(value: string): string {
    const trimed = value.trim();
    return trimed.charAt(0).toUpperCase() + trimed.slice(1).toLocaleLowerCase();
  }
}
