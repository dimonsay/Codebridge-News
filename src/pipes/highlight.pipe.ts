import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'highlight'
})
export class HighlightPipe implements PipeTransform {
  transform(value: string, filter: string): string {
    if (!value || !filter) {
      return value;
    }

    const filterWords = filter.trim().split(/\s+/);
    const regex = new RegExp(filterWords.join('|'), 'gi');

    return value.replace(regex, match => `<span class="highlight" style="background: yellow">${match}</span>`);
  }
}
