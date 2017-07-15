import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs/Rx';

import * as _ from 'lodash';

@Injectable()
export class FavoritesService {

    private favoritesList: Array<number> = [];

    private _favorites: BehaviorSubject<Array<number>>;
    public readonly favorites: Observable<Array<number>>;

    constructor() {
        this._favorites = new BehaviorSubject(this.favoritesList);
        this.favorites = this._favorites.asObservable();
    }

    add(id: number) {
        if (this.favoritesList.indexOf(id) === -1) {
            this.favoritesList.push(id);
            this._favorites.next(this.favoritesList);
        }
    }

    remove(id: number) {
        _.remove(this.favoritesList, (item) => item === id);
        this._favorites.next(this.favoritesList);
    }

    toggle(id: number) {
        if (this.favoritesList.indexOf(id) === -1) {
            this.add(id);
        } else {
            this.remove(id);
        }
    }
}

