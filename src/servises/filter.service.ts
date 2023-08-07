import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilterService {
  private filterKeySubject = new BehaviorSubject<string>('');

  setFilterKey(filterKey: string) {
    this.filterKeySubject.next(filterKey);
  }

  getFilterKey$() {
    return this.filterKeySubject.asObservable();
  }
}
