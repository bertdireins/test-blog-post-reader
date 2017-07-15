import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { BlogPost } from '../../modules/blog-posts';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.css']
})
export class MainViewComponent implements OnInit {

  public selectedPost: BlogPost;
  public selectedPostId: number;

  constructor(private route: ActivatedRoute, private router: Router) {
    route.params.subscribe((params) => {
      if (params.id) {
        this.selectedPostId = parseInt(params.id, 10);
      }
    });
  }

  selectPost($event: BlogPost) {
    this.selectedPost = $event;
    this.router.navigate(['/', this.selectedPost.id]);
  }

  ngOnInit() {
  }

}
