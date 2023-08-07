import { Component, OnInit } from '@angular/core';
import { NewsItem, NewsService } from '../../servises/news.service';
import { ActivatedRoute, Route } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-newsdetails',
  templateUrl: './newsdetails.component.html',
  styleUrls: ['./newsdetails.component.scss']
})
export class NewsdetailsComponent implements OnInit {
  news: NewsItem | undefined

  constructor(private newsService: NewsService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        const numericId = +id; // Convert the string 'id' to a number
        this.getNewsById(numericId);
      }
    });
  }

  getNewsById(id: number) {
    this.newsService.getNewsById(id).subscribe(
      (newsItem: NewsItem) => {
        this.news = newsItem;
        console.log(this.news)
      },
      error => {
        console.log('Error fetching news details:', error);
      }
    );
  }
}
