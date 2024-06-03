export enum WeatherType  {
  SUNNY = 1,
  MOSTLY_SUNNY ,
  PARTLY_SUNNY,
  INTERMITTED_CLOUDS,
  HAZY_SUNSHINE,
  MOSTLY_CLOUDY,
  CLOUDY,
  DREARY,
  FOG = 11,
  SHOWERS,
  MOSTLY_CLOUDY_SHOWERS,
  PARTLY_SUNNY_SHOWERS,
  T_STORMS,

}
export interface CustomWeatherModel {
  minTemp: number;
  maxTemp: number;
  weatherType: WeatherType;
  date: Date;


}
