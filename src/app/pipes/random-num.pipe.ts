import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'randomNum',
})
export class RandomNumPipe implements PipeTransform {
  transform(value: number, ...args: number[]): number {
    if (!args.length) return Math.floor(Math.random() * (value + 1));
    if (args.length === 1)
      return Math.floor(Math.random() * (value - args[0] + 1) + args[0]);

    return 0;
  }
}
