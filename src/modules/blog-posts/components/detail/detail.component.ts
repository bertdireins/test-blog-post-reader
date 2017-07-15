import { Component, Input } from '@angular/core';

import { BlogPost } from '../../models';

@Component({
  selector: 'blog-posts-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class BlogPostsDetailComponent {

  @Input() post: BlogPost;

}
