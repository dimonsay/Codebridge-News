import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

export interface NewsItem {
  id: number;
  title: string;
  summary: string;
  image_url: string;
  published_at: string;
}

export interface NewsApiResponse {
  count: number;
  results: NewsItem[];
}

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  private newsListSubject: BehaviorSubject<NewsItem[]> = new BehaviorSubject<NewsItem[]>([]);
  newsList$: Observable<NewsItem[]> = this.newsListSubject.asObservable();

  private apiUrl = 'https://api.spaceflightnewsapi.net/v4/articles/';
  private limit = 6;

  constructor(private http: HttpClient) { }

  getNews(search: string = ''){
    const params = new HttpParams()
      .set('limit', this.limit.toString())
      .set('language', 'en')
      .set('search', search);

      this.http.get<NewsApiResponse>(this.apiUrl, { params }).subscribe(
        (response: NewsApiResponse) => {
          this.newsListSubject.next(response.results);
        },
        (error) => {
          console.error('Error fetching news:', error);
        }
      );
  }

  getNewsById(id: number): Observable<NewsItem>{
      return this.http.get<NewsItem>(this.apiUrl + id)
  }
}
