import { TestBed, async } from '@angular/core/testing';
import { HttpModule } from '@angular/http';
import { Observable } from 'rxjs/Rx';


import { BlogPostsDetailComponent } from './detail.component';
import { BlogPost } from '../../models';

import { Nl2BrPipe } from 'nl2br-pipe';

describe('BlogPostsDetailComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        BlogPostsDetailComponent,
        Nl2BrPipe
      ],
      imports: [
        HttpModule
      ],
      providers: [
      ],
    }).compileComponents();
  }));

  it('should create the component', async(() => {
    const fixture = TestBed.createComponent(BlogPostsDetailComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it('should render title and body', async(() => {
    const fixture = TestBed.createComponent(BlogPostsDetailComponent);
    const component: BlogPostsDetailComponent = fixture.debugElement.componentInstance;
    const testPost: BlogPost = {
      id: 1,
      userId: 1,
      title: 'post title',
      body: 'post\nbody'
    };
    component.post = testPost;
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('post title');
    expect(compiled.querySelector('div').textContent).toContain('postbody');
  }));
});
