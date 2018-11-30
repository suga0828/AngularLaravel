import { Component, OnInit } from '@angular/core';

import {Restaurant} from '../interfaces/restaurant';
import {RestaurantsService} from '../services/restaurant.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  restaurant: Restaurant = {
    name: null,
    description: null,
    image: null
  };

  id: number;
  editing = false;
  restaurants: Restaurant[];

  constructor(private restaurantsService: RestaurantsService, private activatedRoute: ActivatedRoute) {
    this.id = this.activatedRoute.snapshot.params['id'];
    if (this.id) {
      this.editing = true;
      this.restaurantsService.get()
        .subscribe((data: Restaurant[]) => {
          this.restaurants = data;
          this.restaurant = this.restaurants.find( r => {
            return r.id == this.id ;
            });
          console.log(this.restaurant);
        }, (error) => {
          console.log(error);
        });
    } else {
      this.editing = false;
    }
  }

  ngOnInit() {
  }

  saveRestaurant() {
    if (this.editing) {
      this.restaurantsService.put(this.restaurant).subscribe((data) => {
        alert('Restaurante actualizado');
        console.log(data);
      }, (error) => {
        console.log(error);
        alert('Ocurrió un error');
      });
    } else {
      this.restaurantsService.save(this.restaurant).subscribe((data) => {
        alert('Restaurante guardado');
        console.log(data);
      }, (error) => {
        console.log(error);
        alert('Ocurrió un error');
      });
    }
  }

}
