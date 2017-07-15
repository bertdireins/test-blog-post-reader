import { TestBed, async } from '@angular/core/testing';
import { HttpModule } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { BlogPostsListComponent } from './list.component';
import { BlogPostService, FavoritesService } from '../../services';
import { BlogPost } from '../../models';

const testPost: BlogPost = {
  id: 1,
  userId: 1,
  title: 'post title',
  body: 'post\nbody'
};

export class BlogPostServiceStub extends BlogPostService {
  getPosts() {
    return Observable.of([testPost]);
  }
}

describe('BlogPostsListComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        BlogPostsListComponent
      ],
      imports: [
        HttpModule
      ],
      providers: [
        {
          provide: BlogPostService,
          useClass: BlogPostServiceStub
        },
        FavoritesService
      ],
    }).compileComponents();
  }));

  it('should create the component', async(() => {
    const fixture = TestBed.createComponent(BlogPostsListComponent);
    const component = fixture.debugElement.componentInstance;
    expect(component).toBeTruthy();
  }));

  it(`should have 1 posts in list`, async(() => {
    const fixture = TestBed.createComponent(BlogPostsListComponent);
    const component = fixture.debugElement.componentInstance;
    fixture.detectChanges();
    expect(component.posts.length).toEqual(1);
  }));

  it(`should have 1 post selected`, async(() => {
    const fixture = TestBed.createComponent(BlogPostsListComponent);
    const component: BlogPostsListComponent = fixture.debugElement.componentInstance;
    component.selectedPostId = 1;
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('ul li.selected').textContent).toContain('post title');
  }));

  it(`should have no post selected`, async(() => {
    const fixture = TestBed.createComponent(BlogPostsListComponent);
    const component: BlogPostsListComponent = fixture.debugElement.componentInstance;
    component.selectedPostId = 2;
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('ul li.selected')).toEqual(null);
  }));

  it('should render title in the list', async(() => {
    const fixture = TestBed.createComponent(BlogPostsListComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('ul li').textContent).toContain('post title');
  }));
});
