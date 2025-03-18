class CoordDto {
  lon: number;
  lat: number;
}

class WeatherConditionDto {
  id: number;
  main: string;
  description: string;
  icon: string;
}

class MainWeatherDto {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
  sea_level?: number;
  grnd_level?: number;
}

class WindDto {
  speed: number;
  deg: number;
}

class CloudsDto {
  all: number;
}

class SysDto {
  type: number;
  id: number;
  country: string;
  sunrise: number;
  sunset: number;
}

export class WeatherResponseDto {
  coord: CoordDto;
  weather: WeatherConditionDto[];
  base: string;
  main: MainWeatherDto;
  visibility: number;
  wind: WindDto;
  clouds: CloudsDto;
  dt: number;
  sys: SysDto;
  timezone: number;
  id: number;
  name: string;
  cod: number;
}
