import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewsdetailsComponent } from './newsdetails/newsdetails.component';
import { NewsPageComponent } from './news-page/news-page.component';

const routes: Routes = [
  {path: '', component: NewsPageComponent},
  {path: 'news/:id', component: NewsdetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
