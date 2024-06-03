import {Component, inject, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {CustomWeatherModel, WeatherType} from "./weather.model";
import {DatePipe, JsonPipe} from "@angular/common";
import {DecimalPipe} from "../../ui/pipes/decimal.pipe";
import {CelsiusPipe} from "../../ui/pipes/celsius.pipe";

@Component({
  selector: 'app-weather',
  standalone: true,
  imports: [
    JsonPipe,
    DatePipe,
    DecimalPipe,
    CelsiusPipe
  ],
  template: `
    @if(weatherResponse) {
      <div class="m-10 max-w-sm rounded overflow-hidden shadow-lg bg-slate-800">
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2 w-full flex justify-between items-center">Weather in Vienna
          <img [src]="getImgUrlByWeatherType()">

        </div>
          <ul class="text-base text-white">
          <li>Date: {{weatherResponse.date | date}}</li>
          <li>min.Temperature: {{weatherResponse.minTemp | decimal | celsius}}</li>
          <li>max.Temperature: {{weatherResponse.maxTemp | decimal | celsius}}</li>
          </ul>
      </div>
      </div>

    }
  `,
  styles: ``
})
export class WeatherComponent implements OnInit {
  WeatherType = WeatherType;
  httpClient = inject(HttpClient);
  weatherResponse?: CustomWeatherModel = { "date": new Date("2024-06-03T23:00:00.000Z"), "maxTemp": 32.77777777777778, "minTemp": 25.555555555555557, "weatherType": 5 };
  ngOnInit() {
    /*this.httpClient.get<CustomWeatherModel>('/api/weather').subscribe(response => {
      this.weatherResponse = response;
    })*/
  }

  getImgUrlByWeatherType(){
    switch (this.weatherResponse?.weatherType){
      case WeatherType.HAZY_SUNSHINE:
        return 'https://developer.accuweather.com/sites/default/files/05-s.png';
      default :
        return ''
    }
  }

}
