import { TestBlogPostReaderPage } from './app.po';

describe('test-blog-post-reader App', () => {
  let page: TestBlogPostReaderPage;

  beforeEach(() => {
    page = new TestBlogPostReaderPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
