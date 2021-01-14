import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { WeatherService } from '../weather/weather.service';

import { appConfig } from '../config';
@Injectable()
export class CityCardResolver implements Resolve<any> {
  constructor(
    private weatherService: WeatherService,
    private router: Router
  ) { }

  resolve(route: ActivatedRouteSnapshot): Observable<any> | Promise<any> | any {
    appConfig.weatherArray.forEach((data) => {
      return this.weatherService.createResponseWeatherByCity(data.city)
        .catch((error) => {
          if (error.status === 404) {
            this.router.navigate(['/service/search'], { queryParams: { city: data.city } });
          }
      });
    });
  }
}
