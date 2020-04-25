import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Place } from '../models/place';
import { Observable } from 'rxjs';

@Injectable()
export class PlacesService {

    constructor(private httpService: HttpClient) { }

    getPlaces(): Observable<Place[]> {
        return this.httpService.get<Place[]>('../../assets/jsons/places.json');
    }

}