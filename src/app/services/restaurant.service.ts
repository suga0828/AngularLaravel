import { Injectable } from '@angular/core';

import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Restaurant} from '../interfaces/restaurant';

const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };

 @Injectable({
  providedIn: 'root'
})

export class RestaurantsService {
  API_ENDPOINT = 'http://localhost:8000/api';
  constructor(private httpClient: HttpClient) { }
  get() {
    return this.httpClient.get(this.API_ENDPOINT + '/restaurants');
  }
  save(restaurant: Restaurant) {
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.httpClient.post(this.API_ENDPOINT + '/restaurants', restaurant, httpOptions);
  }
  put(restaurant: Restaurant) {
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.httpClient.put(this.API_ENDPOINT + '/restaurants/' + restaurant.id, restaurant, httpOptions);
  }
  delete(id) {
    return this.httpClient.delete(this.API_ENDPOINT + '/restaurants/' + id);
  }
}
