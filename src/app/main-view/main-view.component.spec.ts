import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { MainViewComponent } from './main-view.component';
import { BlogPostsModule } from '../../modules/blog-posts';

describe('MainViewComponent', () => {
  let component: MainViewComponent;
  let fixture: ComponentFixture<MainViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MainViewComponent],
      imports: [
        RouterTestingModule,
        BlogPostsModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
