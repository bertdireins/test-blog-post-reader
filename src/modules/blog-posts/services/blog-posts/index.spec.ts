import { TestBed, inject, async } from '@angular/core/testing';
import { HttpModule } from '@angular/http';

import { BlogPostService } from './index';


describe('BlogPostsService', () => {

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                HttpModule
            ],
            providers: [
                BlogPostService
            ],
        });
    }));

    it('should be defined', inject([BlogPostService], (service: BlogPostService) => {
        expect(service).toBeDefined();
    }));

    it('should return 100 posts', inject([BlogPostService], (service: BlogPostService) => {
        service.getPosts().subscribe((posts) => {
            expect(posts.length).toEqual(100);
        });
    }));

});
