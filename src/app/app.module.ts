import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewsComponent } from './news-page/news/news.component';
import { NewsService } from '../servises/news.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { DateFormatPipe } from './../pipes/date-format.pipe';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FilterComponent } from './news-page/filter/filter.component';
import { FormsModule } from '@angular/forms';
import { HighlightPipe } from '../pipes/highlight.pipe';
import { SummaryPipe } from './../pipes/summary.pipe';
import { NewsdetailsComponent } from './newsdetails/newsdetails.component';
import { NewsPageComponent } from './news-page/news-page.component';

@NgModule({
  declarations: [
    AppComponent,
    NewsComponent,
    DateFormatPipe,
    FilterComponent,
    HighlightPipe,
    SummaryPipe,
    NewsdetailsComponent,
    NewsPageComponent
  ],
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    MatIconModule,
    MatGridListModule,
    MatCardModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [NewsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
