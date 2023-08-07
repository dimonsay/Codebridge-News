import { Component, OnInit } from '@angular/core';
import { NewsService, NewsApiResponse, NewsItem } from '../../../servises/news.service';
import { FilterService } from '../../../servises/filter.service';
import { Subject, takeUntil } from 'rxjs';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})



export class NewsComponent implements OnInit {
  newsList: NewsItem[] = [];
  results: number = 0;
  filterKey: string = ''

  private ngUnsubscribe = new Subject<void>();

  constructor(private newsService: NewsService, private filterService: FilterService, private sanitizer: DomSanitizer) { }

  ngOnInit() {
    
    this.newsService.newsList$.subscribe((newsData) => {
      this.newsList = newsData;
      this.results = newsData.length;
    });

    this.filterService.getFilterKey$()
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe((filterKey) => {
        this.filterKey = filterKey;
        this.fetchNews();
      });

    this.fetchNews();
  }

  fetchNews() {
    this.newsService.getNews(this.filterKey);
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  sanitizeHtml(html: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }


}