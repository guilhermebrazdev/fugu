import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';
import { WeatherResponseDto } from './dto/wheather.dto';
import { AxiosError } from 'axios';
import { ApiResponse } from 'src/common/api-response.dto';

@Injectable()
export class WeatherService {
  private readonly api_key: string;
  private readonly weather_api_url: string;

  constructor(private readonly httpService: HttpService) {
    if (process.env.OPEN_WEATHER_API_KEY) {
      this.api_key = process.env.OPEN_WEATHER_API_KEY;
    } else {
      console.error('The open weather api Key must be provided.');
    }
    if (process.env.OPEN_WEATHER_API_URL) {
      this.weather_api_url = process.env.OPEN_WEATHER_API_URL;
    } else {
      console.error('The open weather api url must be provided.');
    }
  }

  async getCurrentWeatherByCity(
    city: string,
  ): Promise<ApiResponse<WeatherResponseDto>> {
    if (!this.api_key) {
      throw new HttpException(
        ApiResponse.error<null>('OpenWeather api key not found.', null),
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }

    const params = {
      q: city,
      appid: this.api_key,
      units: 'metric',
      lang: 'en_us',
    };

    try {
      const response = await firstValueFrom(
        this.httpService.get<WeatherResponseDto>(this.weather_api_url, {
          params,
        }),
      );

      console.log('Service response: (not cached).');
      return ApiResponse.success<WeatherResponseDto>(response.data);
    } catch (error) {
      if (error instanceof AxiosError) {
        if (error.response?.status === 404) {
          throw new HttpException(
            ApiResponse.error<AxiosError>(
              'City not found, try a different city name.',
              error,
            ),
            HttpStatus.NOT_FOUND,
          );
        }

        if (error.response?.status) {
          throw new HttpException(
            ApiResponse.error<AxiosError>(
              `OpenWeather API error: ${error.response.statusText}`,
              error,
            ),
            error.response.status,
          );
        }
      }

      throw new HttpException(
        ApiResponse.error<any>(
          'Untracked error while fetching data from OpenWeather api.',
          error,
        ),
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
