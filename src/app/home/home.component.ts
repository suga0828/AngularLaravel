import { Component, OnInit } from '@angular/core';

import {Restaurant} from '../interfaces/restaurant';
import {RestaurantsService} from '../services/restaurant.service';

import { map } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    restaurants: Restaurant[];
    constructor(private restaurantService: RestaurantsService) {
     this.getRestaurants();
  }
  getRestaurants() {
    this.restaurantService.get()
      .subscribe((data: Restaurant[]) => {
        console.log(data);
        this.restaurants = data;
      }, (error) => {
        console.log(error);
        alert('Ocurrió un error');
    });
  }

  ngOnInit() {
  }

    delete(id) {
    if (confirm('Seguro que deseas eliminar este restaurante?')) {
      this.restaurantService.delete(id).subscribe((data) => {
        alert('Eliminado con Éxito');
        console.log(data);
        this.getRestaurants();
      }, (error) => {
        console.log(error);
      });
    }
  }

}
