import { TestBed, inject, async } from '@angular/core/testing';

import { FavoritesService } from './index';


describe('FavoritesService', () => {

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            providers: [
                FavoritesService
            ],
        });
    }));

    it('should be defined', inject([FavoritesService], (service: FavoritesService) => {
        expect(service).toBeDefined();
    }));

    it('should return zero favorites on startup', inject([FavoritesService], (service: FavoritesService) => {
        service.favorites.subscribe((favorites) => {
            expect(favorites.length).toEqual(0);
        });
    }));

    it('should return one favorite if one is added', inject([FavoritesService], (service: FavoritesService) => {
        service.add(1);
        service.favorites.subscribe((favorites) => {
            expect(favorites).toContain(1);
        });
    }));

    it('should return zero favorites after remove', inject([FavoritesService], (service: FavoritesService) => {
        service.add(1);
        service.remove(1);
        service.favorites.subscribe((favorites) => {
            expect(favorites).not.toContain(1);
        });
    }));

    it('should return zero favorites after toggling 2 times', inject([FavoritesService], (service: FavoritesService) => {
        service.toggle(1);
        service.toggle(1);
        service.favorites.subscribe((favorites) => {
            expect(favorites).not.toContain(1);
        });
    }));

});
