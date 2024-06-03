import {Component, inject, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {CustomWeatherModel} from "./weather.model";

@Component({
  selector: 'app-weather',
  standalone: true,
  imports: [],
  template: `
    <p>
      weather works!
    </p>
  `,
  styles: ``
})


export class WeatherComponent implements OnInit{
  httpClient = inject(HttpClient);
  weatherResponse? : CustomWeatherModel;

  ngOnInit() {
    this.httpClient.get<CustomWeatherModel>('/api/weather').subscribe(response => {

    })
}
}

