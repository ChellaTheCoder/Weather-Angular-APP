import { Component, Input, OnInit } from '@angular/core';

import { Weather } from '../weather/weather';
import { appConfig, apiConfig } from '../config';

@Component({
  selector: 'app-city-card',
  templateUrl: './city-card.component.html',
  styleUrls: ['./city-card.component.scss']
})
export class CityCardComponent implements OnInit {
  @Input() weather: Weather;
  @Input() unitSystem: string;

  measureOfTemp: string;
  measureOfWindSpeed: string;
  measureOfPressure: string;
  weatherData: any;

  ngOnInit() {
    const weatherData = appConfig.weatherArray;
    const measurementUnits = apiConfig.measurementUnits[this.unitSystem];
    this.weatherData = weatherData;
    this.measureOfTemp = measurementUnits.temperature;
    this.measureOfWindSpeed = measurementUnits.windSpeed;
    this.measureOfPressure = measurementUnits.pressure;
  }
}
