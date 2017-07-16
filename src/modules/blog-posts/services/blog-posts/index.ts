import { Injectable } from '@angular/core';
import { Http, Response, Headers, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable, AsyncSubject, ReplaySubject } from 'rxjs/Rx';

import * as _ from 'lodash';

import { BlogPost } from '../../models';
import { environment } from '../../../../environments/environment';

@Injectable()
export class BlogPostService {

    private serviceUrl: string;

    private _posts: ReplaySubject<Array<BlogPost>>;
    public readonly posts: Observable<Array<BlogPost>>;

    constructor(private http: Http) {
        this.serviceUrl = environment.endpoints.blogPostService;

        this._posts = new ReplaySubject(1);
        this.posts = this._posts.asObservable();

        this._getPosts();
    }

    private _getPosts() {
        this.http.get(`${this.serviceUrl}/posts`)
            .map( (response) => response.json() )
            .do( (posts) => this._posts.next(posts) )
            .subscribe();
    }

    getPosts(): Observable<Array<BlogPost>> {
        return this.posts;
    }

}
