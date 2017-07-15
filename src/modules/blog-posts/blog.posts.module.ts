import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { BlogPostsDetailComponent, BlogPostsListComponent } from './components';
import { BlogPostService, FavoritesService } from './services';

import { Nl2BrPipe } from 'nl2br-pipe';

@NgModule({
  declarations: [
    BlogPostsDetailComponent,
    BlogPostsListComponent,
    Nl2BrPipe
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  exports: [
    BlogPostsDetailComponent,
    BlogPostsListComponent
  ],
  providers: [
    BlogPostService,
    FavoritesService
  ]
})
export class BlogPostsModule { }
