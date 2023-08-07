import { Component } from '@angular/core';
import { NewsService } from '../../../servises/news.service';
import { FilterService } from '../../../servises/filter.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent {
  filterKey: string = '';

  constructor(private newsService: NewsService, private filterService: FilterService) {}

  ngOnInit()
  {
    this.onChange()
  }

  onChange() {
    this.filterService.setFilterKey(this.filterKey);
  }
}