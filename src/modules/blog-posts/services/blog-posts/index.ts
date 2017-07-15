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

    constructor(private http: Http) {
        this.serviceUrl = environment.endpoints.blogPostService;
    }

    getPosts(): Observable<Array<BlogPost>> {
        // return Observable.of(environment.posts);
        return this.http.get(`${this.serviceUrl}/posts`)
            .map((response) => response.json());
    }

}
