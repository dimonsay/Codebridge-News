import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'summary'
})
export class SummaryPipe implements PipeTransform {
  transform(value: string, maxLength: number, indicator: string = '...'): string {
    if (!value || maxLength >= value.length) {
      return value;
    }

    return value.slice(0, maxLength) + indicator;
  }
}
