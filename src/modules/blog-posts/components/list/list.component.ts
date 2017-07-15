import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { BlogPostService, FavoritesService } from '../../services'
import { BlogPost } from '../../models';

@Component({
  selector: 'blog-posts-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class BlogPostsListComponent implements OnInit {

  @Output() select = new EventEmitter();

  @Input() selectedPostId: number;

  public posts: Array<BlogPost> = [];
  public favorites: Array<number> = [];

  constructor(private blogPostService: BlogPostService, private favoritesService: FavoritesService) {

  }

  ngOnInit() {
    this.blogPostService.getPosts().subscribe((posts) => {
      this.posts = posts;
      const selectedPost: BlogPost = this.posts.find((post) => post.id === this.selectedPostId);
      if (selectedPost) {
        this.selectPost(selectedPost);
      }
    });

    this.favoritesService.favorites.subscribe((favorites) => {
      this.favorites = favorites;
    });
  }

  selectPost(post: BlogPost) {
    this.selectedPostId = post.id;
    this.select.emit(post);
  }

  isFavorite(id: number) {
    return this.favorites.indexOf(id) > -1;
  }

  toggleFavorite($event: Event, id: number) {
    this.favoritesService.toggle(id);
    $event.stopPropagation();
  }
}
