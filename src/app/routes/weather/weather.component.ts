import {Component, inject, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {CustomWeatherModel} from "./weather.model";
import {JsonPipe} from "@angular/common";

@Component({
  selector: 'app-weather',
  standalone: true,
  imports: [
    JsonPipe
  ],
  template: `
    @if(weatherResponse) {
      <p> {{weatherResponse | json}}</p>
    }
  `,
  styles: ``
})
export class WeatherComponent implements OnInit {
  httpClient = inject(HttpClient);
  weatherResponse?: CustomWeatherModel;
  ngOnInit() {
    this.httpClient.get<CustomWeatherModel>('/api/weather').subscribe(response => {
      this.weatherResponse = response;
    })
  }
}
