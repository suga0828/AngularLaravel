import { TestBed, inject } from '@angular/core/testing';

import { RestaurantsService } from './restaurant.service';

describe('RestaurantsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RestaurantsService]
    });
  });

  it('should be created', inject([RestaurantsService], (service: RestaurantsService) => {
    expect(service).toBeTruthy();
  }));
});
