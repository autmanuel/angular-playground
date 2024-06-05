import {Component, inject, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {CustomWeatherModel, WeatherType} from "./weather.model";
import {DatePipe, JsonPipe} from "@angular/common";
import {DecimalPipe} from "../../ui/pipes/decimal.pipe";
import {CelsiusPipe} from "../../ui/pipes/celsius.pipe";
import {TranslateModule} from "@ngx-translate/core";
import {routes} from "../../app.routes";

@Component({
  selector: 'app-weather',
  standalone: true,
  imports: [
    JsonPipe,
    DatePipe,
    DecimalPipe,
    CelsiusPipe,
    TranslateModule
  ],
  template: `
    @if(weatherResponse) {
      <div class="flex w-full h-full justify-center">
      <div class="p-2 mt-10 rounded overflow-hidden shadow-lg bg-slate-800 w-1/2">
      <div class="px-6 py-4">
        <div class="font-bold text-3xl mb-2 w-full flex justify-between items-center">{{'routes.weatherApi.weatherLocation' |translate}}
          <img [src]="getImgUrlByWeatherType()" class="w-[100px]">
          </div>

        </div>
          <ul class="text-base text-white text-xl p-5">
          <li>{{"labels.date" | translate}}: {{weatherResponse.date | date}}</li>
          <li>{{"routes.weatherApi.minTemp" |translate}}: {{weatherResponse.minTemp | decimal | celsius}}</li>
          <li>{{"routes.weatherApi.maxTemp" |translate}}: {{weatherResponse.maxTemp | decimal | celsius}}</li>
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

  protected readonly routes = routes;
}
